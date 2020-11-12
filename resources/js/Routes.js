import multiguard from 'vue-router-multiguard';
import axios from 'axios';

import UserLayout from "./layouts/Dashboard-User.vue";
import AdminLayout from "./layouts/Dashboard-Admin.vue";

// For Auth
import Login from "./pages/auth/Login.vue";
import Register from "./pages/auth/Register.vue";
import ForgotPassword from "./pages/auth/ForgotPassword.vue";
import ResetPassword from "./pages/auth/ResetPassword.vue";
import ResendVerificationMail from "./pages/auth/ResendVerificationMail.vue";
import RedirectAfterVerify from "./pages/auth/RedirectAfterVerify.vue";
import LandingLayout from "./layouts/Landing.vue";
import LandingPage from "./pages/LandingPage.vue";
import UnverifiedEmail from "./pages/auth/UnverifiedEmail.vue";

// For Error Pages
import Error404 from './pages/error/404.vue'

import Component from "./components/ExampleComponent.vue"

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
        component: LandingLayout,
        children: [
					{
						path: "",
						component: Login,
						meta: {
								title: `Welcome - ${app_name}`,
						},
						beforeEnter: multiguard([pageTitle, ifNotAuthenticated]),
					},
					{
						path: "/register",
						component: Register,
						meta: {
								title: `Register - ${app_name}`,
						},
						beforeEnter: multiguard([pageTitle, ifNotAuthenticated]),
					},
					{
						path: "/resend-verification-mail",
						component: ResendVerificationMail,
						meta: {
								title: `Resend Verification Mail - ${app_name}`,
						},
						beforeEnter: multiguard([ifNotAuthenticated]),
					},
					{
						path: "/forgot-password",
						component: ForgotPassword,
						meta: {
								title: `Forgot Password - ${app_name}`,
						},
						beforeEnter: multiguard([ifNotAuthenticated]),
					},
        ]
    },
    {
        path: "/home",
        component: UserLayout,
        children: [
            {
                path: "",
                component: Component,
								meta: {
										title: `Admin Dashboard - ${app_name}`,
								},
                beforeEnter: multiguard([pageTitle, ifAuthenticated, userOnly, verifiedEmail]),
            }
        ]
    },
    {
        path: "/siAdmino",
        component: AdminLayout,
        children: [
            {
                path: "",
                component: Component,
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
		// Login, Register Routes is In Landing Page
    {
        path: "/forgot-password",
        component: ForgotPassword,
        meta: {
            title: `Forgot Password - ${app_name}`,
        },
        beforeEnter: multiguard([ifNotAuthenticated]),
    },
    {
        path: "/reset-password",
        component: ResetPassword,
        meta: {
            title: `Reset Password - ${app_name}`,
        },
        beforeEnter: multiguard([ifNotAuthenticated]),
    },
    {
			path: "/verification-success",
			component: RedirectAfterVerify,
			meta: {
					title: `Verification Success - ${app_name}`,
			},
    },
    {
			path: "/UnverifiedEmail",
			component: UnverifiedEmail,
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
			component: Error404,
			meta: {
					title: `404  Not Found - ${app_name}`,
			},
			beforeEnter: multiguard([pageTitle]),
		},
];


