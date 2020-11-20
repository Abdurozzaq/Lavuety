<template>
	<div>
		<error-alert v-if="serverError" :serverError="serverError"/>

		<v-form @submit.prevent="submit">
			<v-text-field
				label="First Name"
				placeholder="Enter Your First Name Here..."
				filled
				type="text"
				v-model="email"
			></v-text-field>

			<v-btn
				color="blue-grey"
				class="ma-2 white--text ml-0"
				type="submit"
			>
				Submit
			</v-btn>
		</v-form>

		<v-snackbar
			v-model="snackbar"
			:timeout="5000"
			:color="snackbarColor"
			vertical
		>
			{{ snackbarText }}
			<template v-slot:action="{}">
        <v-btn
					color="white"
					text
					@click="snackbar = false"
				>
					Close
				</v-btn>
      </template>
		</v-snackbar>
	</div>
</template>

<script>
import axios from 'axios'
import ErrorAlert from './ErrorAlert.vue'
export default {
	components: {
		ErrorAlert,
	}, // end of components

	data() {
		return {
			email: "",
			serverError: "",
			snackbar: false,
			snackbarColor: "",
			snackbarText: "",
		}
	}, // end of data()

	methods: {
		getMe: function() {
			let currentObj = this

			currentObj.serverError = ""

			axios.get('api/auth/me')
			.then(function (response) {
				// handle success
				currentObj.email = response.data.user.email
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
		}, // end of getMe()

		submit: function() {
			let currentObj = this

			// clear error
			currentObj.serverError = ""

			var data = {
				email: currentObj.email,
			}

			axios.post('api/settings/profile/email-update', data)
			.then(function (response) {
				// handle success
				currentObj.snackbar = true
				currentObj.snackbarColor = 'success'
				currentObj.snackbarText = "Your Email has been successfully changed. Please reload the page to see the changes..."
			})
			.catch(function (error) {
				// handle error
				if(error.response) {
					currentObj.serverError = error.response.data.errors
				}
			})
		}
	}, // end of methods 

	mounted: function() {
		let currentObj = this

		currentObj.getMe()
	}
}
</script>

<style>

</style>