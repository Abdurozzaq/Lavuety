<template>
	<div>
		<error-alert v-if="serverError" :serverError="serverError"/>

		<v-form @submit.prevent="submit">
			<v-text-field
				label="New Password"
				placeholder="Enter Your New Password Here..."
				filled
				type="password"
				v-model="password"
			></v-text-field>

			<v-text-field
				label="Confirm New Password"
				placeholder="Confirm Your New Password Here..."
				filled
				type="password"
				v-model="password_confirmation"
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
			password: "",
			password_confirmation: "",
			serverError: "",
			snackbar: false,
			snackbarColor: "",
			snackbarText: "",
		}
	}, // end of data()

	methods: {
		submit: function() {
			let currentObj = this

			// clear error
			currentObj.serverError = ""

			var data = {
				password: currentObj.password,
				password_confirmation: currentObj.password_confirmation
			}

			axios.post('api/settings/profile/password-update', data)
			.then(function (response) {
				// handle success
				currentObj.snackbar = true
				currentObj.snackbarColor = 'success'
				currentObj.snackbarText = "Your Password has been successfully changed. Just sign back in to see the changes ..."
			})
			.catch(function (error) {
				// handle error
				if(error.response) {
					currentObj.serverError = error.response.data.errors
				}
			})
		}
	}, // end of methods 
}
</script>

<style>

</style>