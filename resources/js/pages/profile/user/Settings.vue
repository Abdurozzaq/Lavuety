<template>
	<div>
		<v-container>
			<v-row>
				<v-col cols="12" sm="12" md="3" lg="3">
					<v-card class="ma-3">
						<v-card-text class="text-center">
							<v-img
								v-if="avatar"
								class="rounded-xl"
								:src="`/storage/avatars/${avatar}`"
								alt="John"
							/>

							<v-img
								v-else
								class="rounded-xl"
								src="/statics/defaultAvatar.png"
								alt="John"
							/>
							<br>

							<div class="text-h6 text-truncate">{{ first_name }} {{ last_name }}</div>
							<div class="text-subtitle1">{{ email }}</div>

							<v-list shaped dense>
								<v-subheader>SETTINGS</v-subheader>
								<v-list-item-group
									v-model="selectedListItem"
									color="primary"
								>
									<v-list-item
										v-for="(item, i) in listItem"
										:key="i"
									>
										<v-list-item-icon>
											<v-icon v-text="item.icon"></v-icon>
										</v-list-item-icon>
										<v-list-item-content>
											<v-list-item-title v-text="item.text"></v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-card-text>
					</v-card>
				</v-col>

				<v-col cols="12" sm="12" md="9" lg="9">
					<router-view></router-view>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			selectedListItem: 1,
      listItem: [
        { text: 'Profile', icon: 'mdi-account' },
				{ text: 'Email', icon: 'mdi-email' },
        { text: 'Password', icon: 'mdi-form-textbox-password' },
      ],
			first_name: "",
			last_name: "",
			email: "",
			avatar: ""
		}
	}, // end of data()

	methods: {
		getMe: function() {
			let currentObj = this

			axios.get('api/auth/me')
			.then(function (response) {
				// handle success
				currentObj.avatar = response.data.user.avatar

				currentObj.first_name = response.data.user.first_name
				currentObj.last_name = response.data.user.last_name
				currentObj.email = response.data.user.email
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
		}, // end of getMe()
	}, // end of methods

	mounted: function() {
		let currentObj = this
		currentObj.getMe()
	}
}
</script>

<style>

</style>