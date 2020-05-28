import UserLayout from "./layouts/Dashboard-User.vue";
import AdminLayout from "./layouts/Dashboard-Admin.vue";

// For Auth
import Login from "./pages/auth/Login.vue"
import Register from "./pages/auth/Register.vue"
import ForgotPassword from "./pages/auth/ForgotPassword.vue"
import ResetPassword from "./pages/auth/ResetPassword.vue"
import ResendVerificationMail from "./pages/auth/ResendVerificationMail.vue"

import Component from "./components/ExampleComponent.vue"

export const routes = [
    {
        path: "/home",
        component: UserLayout,
        children: [
            {
                path: "",
                component: Component
            }
        ]
    },
    {
        path: "/siAdmino",
        component: AdminLayout,
        children: [
            {
                path: "",
                component: Component
            },
        ]
    },

    /**
     * For Authentication Purposes
     */
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/forgot-password",
        component: ForgotPassword
    },
    {
        path: "/reset-password",
        component: ResetPassword
    },
    {
        path: "/resend-verification-mail",
        component: ResendVerificationMail
    }
];