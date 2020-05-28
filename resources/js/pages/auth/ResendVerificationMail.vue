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
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Resend Verification Mail Form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>

                  <v-btn color="primary">Resend</v-btn>
                </v-form>
              </v-card-text>
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-btn href="/register" outlined class="mr-2" color="white">Register</v-btn>
                <v-btn href="/login" outlined class="mr-2" color="white">Login</v-btn>
              </v-toolbar>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
  }
</script>