import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMeta from "vue-meta";
import Vue2TouchEvents from "vue2-touch-events";
import "./assets/style.css";
Vue.use(VueMeta);
Vue.use(Vue2TouchEvents);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
