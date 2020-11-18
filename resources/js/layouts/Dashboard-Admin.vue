<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-right="$vuetify.breakpoint.lgAndUp"
      app
      color="white"
      
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <span class="hidden-sm-and-down ml-5"><div class="text-subtitle1">We Love <span class="red--text">❤</span> To Manage The Apps</div></span>
    
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>


      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        offset-x
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            large
            v-on="on"
          >
            <v-avatar
              size="32px"
              item
            >
              <v-img
                src="/statics/user.png"
                alt="Vuetify"
              ></v-img></v-avatar>
          </v-btn>
        </template>

        <v-card max-width="300">
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="/statics/user.png" alt="user">
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="text-truncate">{{ me.first_name }} {{ me.last_name }}</v-list-item-title>
                <v-list-item-subtitle>{{ me.email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list shaped dense>
            <v-subheader>REPORTS</v-subheader>
            <v-list-item-group v-model="dropdownItem" color="primary">
              <v-list-item
                v-for="(ip, i) in dropdownItems"
                :key="i"
                :href="ip.url"
              >
                <v-list-item-icon>
                  <v-icon v-text="ip.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="ip.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>


          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="menu = false">Close</v-btn>
            <v-btn text @click="logout" color="danger">Logout</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>

		<v-navigation-drawer
			app
			v-model="drawer"
			class="blue-grey darken-4"
		>
      <v-list-item class="blue-grey darken-3">
        <v-list-item-content>
          <v-list-item-title class="title white--text">
            {{ appName }}
          </v-list-item-title>
          <v-list-item-subtitle class="white--text">
            User Dashboard
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in sidebarItems"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => ({
      menu: false,
      drawer: null,

      dropdownItem: 1,
      dropdownItems: [
        { text: 'Home', icon: 'mdi-view-dashboard', url: '/siAdmino' },
        { text: 'Settings', icon: 'mdi-account', url: '/siAdmino/settings/profile' },
      ],

			sidebarItems: [
        { title: 'Home', icon: 'mdi-view-dashboard', url: '/home' },
      ],

			appName: process.env.MIX_APP_NAME,

			me: {
				first_name: "",
				last_name: "",
				email: "",
			}
    }), // end of data

    methods: {
			logout: function() {
				let currentObj = this
				axios.post('/api/auth/logout')
					.then(function (response) {
						localStorage.removeItem('userToken')
						currentObj.$router.push('/')
					})
					.catch(function (error) {
						console.log(error);
					});
			}, // end of logout()

			getMe: function() {
				let currentObj = this

				axios.get('api/auth/me')
				.then(function (response) {
					// handle success
					currentObj.me.first_name = response.data.user.first_name
					currentObj.me.last_name = response.data.user.last_name
					currentObj.me.email = response.data.user.email

				})
				.catch(function (error) {
					// handle error
					console.log(error);
				})
			}
    },

		mounted: function() {

		let currentObj = this

		currentObj.getMe()

		}
  }
</script>
