import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMeta from "vue-meta";
import Vue2TouchEvents from "vue2-touch-events";
import api from "../src/utils/api";
import "./assets/style.css";
import "./assets/ar.scss";
import { i18n } from "./i18n";
import { Trans } from "./plugins/Translation";

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans);

Vue.use(VueMeta);
Vue.use(Vue2TouchEvents);
Vue.config.productionTip = false;

Vue.$api = api;

Object.defineProperty(Vue.prototype, "$api", {
    get() {
        return api;
    },
});
new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount("#app");
