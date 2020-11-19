<template>
	<div>
		<error-alert v-if="serverError" :serverError="serverError"/>

		<v-row
			align="center"
			justify="center"
		>
			<v-col cols="12" sm="12" md="8" lg="8">
				<!-- 1. Choose Image & Crop -->
				<instagram-cropper 
					ref="cropper"
				></instagram-cropper>
			</v-col>

			<v-col cols="12" sm="12" md="4" lg="4">
				<!-- 2. Then, upload it -->
				<v-btn
					color="blue-grey"
					class="ma-2 white--text"
					@click="uploadImage"
				>
					Upload
					<v-icon
						right
						dark
					>
						mdi-cloud-upload
					</v-icon>
				</v-btn>
			</v-col>
		</v-row>

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
		},

    data: function () {
      return {
				serverError: "",
				snackbar: false,
				snackbarColor: "",
				snackbarText: "",
      }
    },
    methods: {
			async uploadImage() {
				let currentObj = this

				// get cropped blob
				const blob = await currentObj.$refs.cropper.promisedBlob()
				
				// create FormData
				let formData = new FormData()
				// Append image file
				formData.append("avatar", blob)

				// Then, Upload to Server
				axios
					.post("api/settings/profile/avatar-upload", formData)
					.then(response => {
						currentObj.$refs.cropper.refresh()
						currentObj.snackbar = true
						currentObj.snackbarColor = 'success'
						currentObj.snackbarText = "Your avatar has been changed successfully. To see the changes please reload the page..."
					})
					.catch(function (error) {
						if(error.response) {
							currentObj.serverError = error.response.data.errors
						}
					})
			}, // upload func
    }, // end of methods
  }
</script>