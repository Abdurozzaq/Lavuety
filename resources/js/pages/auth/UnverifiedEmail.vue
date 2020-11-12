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
						lg="4"
						class="text-center"
          >
            <v-img
							class="mb-4"
							src="/statics/403.png"
						></v-img>

						<br>

						<div>Stop! Please verify your email first...</div>

						<br>

						<v-btn
							rounded
							color="deep-purple"
							dark
							:loading="redirecting"
      				:disabled="redirecting"
							@click.prevent="redirectToResendMail"
							class="mx-auto"
						>
							Resend Verification Mail?
						</v-btn>
          </v-col>
        </v-row>
      </v-container>

      <v-snackbar
        v-model="snackbar"
        :timeout="5000"
        :color="snackbarColor"
      >
        {{ snackbarText }}
        <v-btn
          color="white"
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>

    </v-content>
  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        snackbar: false,
				snackbarColor: "",
				snackbarText: "",
				redirecting: false
      }
    },

    methods: {
			redirectToResendMail: function() {
				let currentObj = this

				currentObj.redirecting = true

				currentObj.snackbar = true
				currentObj.snackbarColor = "success"
				currentObj.snackbarText = "Redirecting to resend verification mail page..."

				axios.post('/api/auth/logout')
					.then(function (response) {
						localStorage.removeItem('userToken')
						currentObj.$router.push('/resend-verification-mail')
					})
					.catch(function (error) {
							console.log(error);
					});

				currentObj.redirecting = false
			}
    } // end of methods
  }
</script>