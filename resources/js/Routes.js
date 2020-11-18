import multiguard from 'vue-router-multiguard';
import axios from 'axios';

const token = localStorage.getItem('userToken')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + token
}

const app_name = process.env.MIX_APP_NAME;
/**
 *
 * For Authenticated
 * And Not Authenticated
 *
 * Guard
 */
const ifAuthenticated = (to, from, next) => {
    if (localStorage.getItem('userToken')) {
        next()
        return
    } else {
        next('/')
    }
}

const ifNotAuthenticated = (to, from, next) => {

    if (localStorage.hasOwnProperty('userToken') === false) {
        next()
    } else {

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
								next('/siAdmino')
								return
						} else {
								next('/home')
						}
				})
				.catch(function (error) {
						// handle error
						console.log(error);
				})
    }
}


/**
 * Guard For
 * Admin Only
 * &
 * User Only
 */
const adminOnly = (to, from, next) => {
	axios.get('api/auth/me')
		.then(function (response) {
			// handle success
			let userRole = response.data.role
			if (userRole == "admin") {
				next()
				return
			} else {
				next('/')
				return
			}
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
}

const userOnly = (to, from, next) => {

        axios.get('api/auth/me')
            .then(function (response) {
                // handle success
                let userRole = response.data.role
                if (userRole == "user") {
                    next()
                    return
                } else {
                    next('/')
                    return
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
}

/**
 * Guard For
 * Verified User Email
 */
const verifiedEmail = (to, from, next) => {

    axios.get('api/auth/me')
        .then(function (response) {
            // handle success
            let isVerified = response.data.user.email_verified_at
            if (isVerified) {
                next()
                return
            } else {
                next('/UnverifiedEmail')
                return
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

/**
* Guard For
* UnVerified User Email
*/
const unVerifiedEmailOnly = (to, from, next) => {
	axios.get('api/auth/me')
		.then(function (response) {
				// handle success
				let isVerified = response.data.user.email_verified_at
				if (isVerified == null) {
						next()
						return
				} else {
						next('/')
						return
				}
		})
		.catch(function (error) {
				// handle error
				console.log(error);
		})
}

const pageTitle = (to, from, next) => {
    document.title = to.meta.title
    next()
}


export const routes = [
    {
        path: "",
        component: () => import(/* webpackChunkName: "LandingLayout" */'./layouts/Landing.vue'),
        children: [
					{
						path: "",
						component: () => import(/* webpackChunkName: "LoginPage" */'./pages/auth/Login.vue'),
						meta: {
								title: `Welcome - ${app_name}`,
						},
						beforeEnter: multiguard([pageTitle, ifNotAuthenticated]),
					},
					{
						path: "/register",
						component: () => import(/* webpackChunkName: "RegisterPage" */'./pages/auth/Register.vue'),
						meta: {
								title: `Register - ${app_name}`,
						},
						beforeEnter: multiguard([pageTitle, ifNotAuthenticated]),
					},
					{
						path: "/resend-verification-mail",
						component: () => import(/* webpackChunkName: "ResendVerificationEmail" */'./pages/auth/ResendVerificationMail.vue'),
						meta: {
								title: `Resend Verification Mail - ${app_name}`,
						},
						beforeEnter: multiguard([ifNotAuthenticated]),
					},
					{
						path: "/forgot-password",
						component: () => import(/* webpackChunkName: "ForgotPassword" */'./pages/auth/ForgotPassword.vue'),
						meta: {
								title: `Forgot Password - ${app_name}`,
						},
						beforeEnter: multiguard([ifNotAuthenticated]),
					},
					{
						path: "/reset-password",
						component: () => import(/* webpackChunkName: "ResetPassword" */'./pages/auth/ResetPassword.vue'),
						meta: {
								title: `Reset Password - ${app_name}`,
						},
						beforeEnter: multiguard([ifNotAuthenticated]),
					},
        ]
    },
    {
			path: "/home",
			component: () => import(/* webpackChunkName: "UserLayout" */'./layouts/Dashboard-User.vue'),
			children: [
				{
					path: "",
					component: () => import(/* webpackChunkName: "UserHome" */'./pages/home/user/UserHome.vue'),
					meta: {
							title: `User Dashboard - ${app_name}`,
					},
					beforeEnter: multiguard([pageTitle, ifAuthenticated, userOnly, verifiedEmail]),
				},
				{
					path: "settings",
					component: () => import(/* webpackChunkName: "UserSettings" */'./pages/profile/user/Settings.vue'),
					children: [
						{
							path: "profile",
							component: () => import(/* webpackChunkName: "UserProfileSettings" */'./pages/profile/user/childrenPages/ProfileSettings.vue'),
							meta: {
									title: `Profile Settings - ${app_name}`,
							},
							beforeEnter: multiguard([pageTitle, ifAuthenticated, userOnly, verifiedEmail]),
						},
					]
				}
			]
    },
    {
        path: "/siAdmino",
        component: () => import(/* webpackChunkName: "AdminLayout" */'./layouts/Dashboard-Admin.vue'),
        children: [
            {
                path: "",
                component: () => import(/* webpackChunkName: "AdminHome" */'./pages/home/admin/AdminHome.vue'),
								meta: {
										title: `Admin Dashboard - ${app_name}`,
								},
                beforeEnter: multiguard([pageTitle, ifAuthenticated, adminOnly, verifiedEmail]),
            },
        ]
    },

    /**
     * For Authentication Purposes
     */
		// Login, Register, Forgot Password, & Reset Password Routes are the children of Landing Layout
    {
			path: "/verification-success",
			component: () => import(/* webpackChunkName: "VerificationSuccess" */'./pages/auth/RedirectAfterVerify.vue'),
			meta: {
					title: `Verification Success - ${app_name}`,
			},
    },
    {
			path: "/UnverifiedEmail",
			component: () => import(/* webpackChunkName: "UnverifiedEmail" */'./pages/auth/UnverifiedEmail.vue'),
			meta: {
					title: `Unverified Email Address - ${app_name}`,
			},
			beforeEnter: multiguard([ifAuthenticated, unVerifiedEmailOnly]),
    },

		/**
		 * Error Page Routes
		 */
		{
			path: "*",
			component: () => import(/* webpackChunkName: "Error404Page" */'./pages/error/404.vue'),
			meta: {
					title: `404  Not Found - ${app_name}`,
			},
			beforeEnter: multiguard([pageTitle]),
		},
];


