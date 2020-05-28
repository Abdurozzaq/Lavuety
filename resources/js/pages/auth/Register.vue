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
                color="success"
                dark
                flat
              >
                <v-toolbar-title>Register form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="First Name"
                    name="first_name"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    label="Last Name"
                    name="last_name"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="mail"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Confirm Password"
                    name="password-confirmation"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>

                  <v-btn color="success">Register</v-btn>
                </v-form>
              </v-card-text>
              <v-toolbar
                color="success"
                dark
                flat
              >
                <v-btn href="/login" outlined class="mr-2" color="white">Login</v-btn>
                <v-btn href="/forgot-password" outlined class="mr-2" color="white">Forgot Password?</v-btn>
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