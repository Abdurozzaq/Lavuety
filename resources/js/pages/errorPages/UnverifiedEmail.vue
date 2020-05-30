<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card
                class="mx-auto"
                color="danger"
                dark
                max-width="400"
            >
                <v-card-title>
                <v-icon
                    large
                    left
                >
                    mdi-car-brake-alert
                </v-icon>
                <span class="title font-weight-light">Unverified Email</span>
                </v-card-title>

                <v-card-text class="headline font-weight-bold">
                  <v-alert
                    v-model="errorAlert"
                    border="top"
                    color="red lighten-2"
                    dark
                    dismissible
                  >
                    <ul v-for="(error, index) in serverError" v-bind:key="index">
                      <li>{{ error[0] }}</li>
                    </ul>
                  </v-alert>

                  <p>Please, Verify Your Email To Continue Access This Web App...</p>
                  <v-btn 
                    block 
                    color="secondary" 
                    dark
                    :loading="loadingButton"
                    :disabled="loadingButton"
                    @click="resend"
                  >
                    Resend Verification Email
                  </v-btn>
                  <br>

                </v-card-text>

            </v-card>
          </v-col>
        </v-row>

        <v-snackbar
          v-model="successSnackbar"
          :timeout="5000"
          color="success"
        >
          Verification Email Sent.
          <v-btn
            color="white"
            text
            @click="successSnackbar = false"
          >
            Close
          </v-btn>
        </v-snackbar>

      </v-container>
    </v-content>
  </v-app>
</template>

<script>
    import axios from 'axios'
  export default {
    props: {
      source: String,
    },

    data () {
      return {
        loadingButton: false,
        serverError: null,
        successSnackbar: false,
        errorAlert: false,
        email: null,
      }
    },

    methods: {
      resend: function() {
        let currentObj = this
        currentObj.loadingButton = true
        axios.get('/sanctum/csrf-cookie').then(response => {
          // get email from logged in user
          axios.get('/api/get-user')
            .then(function (response) {
                // get the email
                currentObj.email = response.data.user.email

                // resend verification email with email that we get before
                axios.post('/api/email/resend', {
                  email: currentObj.email,
                })
                .then(function (response) {
                  // after success show successSnackbar
                  currentObj.successSnackbar = true
                  currentObj.loadingButton = false

                })
                .catch(function (error) {
                  currentObj.overlay = false
                  if(error.response) {
                    currentObj.serverError = error.response.data.errors
                    currentObj.errorAlert = true
                    currentObj.loadingButton = true
                  }
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            }) // end of get-user axios
        }) // end of csrf cookie axios
      } // end of resend method
    }, // end of methods
}

  
</script>