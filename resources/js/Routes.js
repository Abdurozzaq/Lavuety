import Main from "./layouts/LayoutOne.vue";
import Youtube from "./layouts/LayoutTwo.vue";
import Component from "./components/ExampleComponent.vue"

export const routes = [
    {
        path: "/",
        component: Main,
        children: [
            {
                path: "",
                component: Component
            }
        ]
    },
    {
        path: "/youtube",
        component: Youtube,
        children: [
            {
                path: "",
                component: Component
            },
        ]
    }
];