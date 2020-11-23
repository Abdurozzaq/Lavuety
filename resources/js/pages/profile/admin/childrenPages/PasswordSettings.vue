<template>
	<div>
		<v-card>
			<v-card-title>
				Password Settings
			</v-card-title>

			<v-card-text>
				<v-row>
					<v-col cols="12" sm="12" md="8" lg="8">
						<div class="text-h6">Change Password</div>
						<all-users-password-settings />
					</v-col>
				</v-row>

			</v-card-text>
		</v-card>
	</div>
</template>

<script>
	import AllUsersPasswordSettings from '../../../../components/AllUsersPasswordSettings.vue'
	export default {
		components: {
			AllUsersPasswordSettings
		},

	}
</script>

<style>

</style>