<template>
  <v-app>
		<v-content class="pt-0">
			<v-container
				fluid
				class="fill-height py-0"
			>
				<v-row
					align="center"
					justify="center"
				>
					<v-col
						cols="12"
						sm="12"
						md="7"
						lg="7"
					>
						<v-img
							src="/statics/login.png"
							max-width="400"
							class="mx-auto"
						>
						</v-img>
					</v-col>

					<v-col
						cols="12"
						sm="12"
						md="5"
						lg="5"
						class="pa-0"
					>
						<v-card
							height="100vh"
							dark
							class="deep-purple d-flex align-center"
							rounded="0"
						>

							<v-row>
								<v-col>
									<v-card-text class="text-center">
										<div class="text-h6">Welcome!</div>
										<div class="text-subtitle1 pb-3">Sign in to your account</div>
									</v-card-text>

									<v-card-text v-if="serverError" class="py-0">
										<error-alert class="mx-5" v-if="serverError" :serverError="serverError"/>
									</v-card-text>

									<v-card-text class="text-center">
										<v-form v-on:submit.prevent="login">
											<v-text-field
												label="Email"
												filled
												dense
												class="mx-5"
												v-model="email"
												type="email"
											></v-text-field>

											<v-text-field
												label="Password"
												filled
												dense
												class="mx-5"
												v-model="password"
												type="password"
											></v-text-field>

											<v-btn
												rounded
												color="white"
												width="300px"
												class="mb-3"
												type="submit"
											>
												<div class="font-weight-bold deep-purple--text">Sign In</div>
											</v-btn>
										</v-form>

										<a class="text-subtitle1 white--text" href="/forgot-password">Fogot Password?</a>
									</v-card-text>
								</v-col>
							</v-row>
						</v-card>
					</v-col>
				</v-row>
			</v-container>

			<v-snackbar
				v-model="successSnackbar"
				:timeout="5000"
				color="success"
			>
				You has been logged in successfully. Redirecting to Dashboard...
				<v-btn
					color="white"
					text
					@click="successSnackbar = false"
				>
					Close
				</v-btn>
			</v-snackbar>

		</v-content>
  </v-app>
</template>


<script>
	import ErrorAlert from "../../components/ErrorAlert.vue"
  import axios from 'axios'
  export default {
		components: {
			ErrorAlert,
		},

		data() {
			return {
				email: null,
				password: null,
				serverError: null,
				errorAlert: false,
				successSnackbar: false,
				overlay: false,
				serverErrorCode: null,
			}
		},

		methods: {
			login: function() {
			let currentObj = this
			currentObj.errorAlert = false
			currentObj.overlay = true

			axios.post('api/auth/login', {
				email: currentObj.email,
				password: currentObj.password
			})
			.then(function (response) {
				const token = response.data.access_token
				console.log(token)
				// add bearer token to localstorage
				localStorage.setItem('userToken', token)

				if (token) {
					axios.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + token
				}

				// after success show successSnackbar
				currentObj.successSnackbar = true
				currentObj.overlay = false

				// after all success redirect to home
				axios.get('api/auth/me', {
					headers: {
						Authorization: 'Bearer ' + token,
						withCredentials: true //the token is a variable which holds the token
					}
				})
					.then(function (response) {
						// handle success
						let userRole = response.data.role
						if (userRole == "admin") {
						currentObj.$router.push('/siAdmino')
						} else {
						currentObj.$router.push('/home')
						}
					})
					.catch(function (error) {
						// handle error
						console.log(error);
					})
			})
			.catch(function (error) {
				localStorage.removeItem('userToken')
				currentObj.overlay = false
				if(error.response) {
					currentObj.serverError = error.response.data.errors
					currentObj.errorAlert = true
				}
			})
		}, // end of login method
	} // end of methods
}
</script>
