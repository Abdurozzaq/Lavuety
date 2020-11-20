<template>
	<div>
		<v-card>
			<v-card-title>
				Email Settings
			</v-card-title>

			<v-card-text>
				<v-row>
					<v-col cols="12" sm="12" md="8" lg="8">
						<div class="text-h6">Change Email</div>
						<all-users-email-settings />
					</v-col>
				</v-row>

			</v-card-text>
		</v-card>
	</div>
</template>

<script>
	import AllUsersEmailSettings from '../../../../components/AllUsersEmailSettings.vue'
	export default {
		components: {
			AllUsersEmailSettings
		},

	}
</script>

<style>

</style>