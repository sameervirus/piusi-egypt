import Vue from "vue";
import VueRouter from "vue-router";
import { Trans } from "@/plugins/Translation";

function load(component) {
    // '@' is aliased to src/components
    return () => import(`@/views/${component}.vue`);
}

Vue.use(VueRouter);

const routes = [
    {
        path: "/:locale",
        component: {
            template: "<router-view></router-view>",
        },
        beforeEnter: Trans.routeMiddleware,
        children: [
            {
                path: "",
                name: "Home",
                component: load("Home"),
            },
            {
                path: "about",
                name: "About",
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: load("About"),
            },
            {
                path: "products/:item/:category",
                name: "Products",
                component: load("Products"),
            },
            {
                path: "product/:item",
                name: "Product",
                component: load("Item"),
            },
            {
                path: "news-media",
                name: "News",
                component: load("News"),
            },
            {
                path: "contacts",
                name: "Contacts",
                component: load("Contacts"),
            },
            {
                path: "catalogues",
                name: "Catalogues",
                component: load("Catalogues"),
            },
        ],
    },
    {
        path: "*",
        redirect() {
            return Trans.defaultLocale;
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
