import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "https://www.piusi-egypt.com/api";

export default new Vuex.Store({
    state: {
        opens: false,
        loading: false,
        apiData: [],
        finder: null,
    },
    mutations: {
        SET_FREE_STATE(state, status) {
            state.opens = status;
        },
        setCurrentData(state, data) {
            state.apiData = data;
        },
        setLoading(state, status) {
            state.loading = status;
        },
        setFinder(state, status) {
            state.finder = status;
        },
    },
    actions: {
        changeFreez(context) {
            context.state.opens
                ? context.commit("SET_FREE_STATE", false)
                : context.commit("SET_FREE_STATE", true);
        },
        async setCurrentData(state) {
            state.commit("setLoading", true);
            const returnData = await fetch(`${url}/home`);
            const data = await returnData.json();
            state.commit("setCurrentData", data);
            state.commit("setLoading", false);
        },
        async setFinder(state, type) {
            const returnData = await fetch(`${url}/finder/${type}`);
            const data = await returnData.json();
            state.commit("setFinder", data);
        },
    },
    modules: {},
    getters: {
        getCurrentData: (state) => state.apiData,
        getFinder: (state) => state.finder,
    },
});
