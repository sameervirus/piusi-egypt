import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "https://www.piusi-egypt.com/api/test";

export default new Vuex.Store({
  state: {
    opens: false,
    loading: false,
    apiData: [],
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
  },
  actions: {
    changeFreez(context) {
      context.state.opens
        ? context.commit("SET_FREE_STATE", false)
        : context.commit("SET_FREE_STATE", true);
    },
    async setCurrentData(state) {
      state.commit("setLoading", true);
      const returnData = await fetch(url);
      const data = await returnData.json();
      state.commit("setCurrentData", data);
      state.commit("setLoading", false);
    },
  },
  modules: {},
  getters: {
    getCurrentData: (state) => state.apiData,
  },
});
