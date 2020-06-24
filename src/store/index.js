import Vue from "vue";
import Vuex from "vuex";
import User from "./User";
import Projects from "./Projects";
import Pages from "./Pages";
import Blocks from "./Blocks";
import Elements from "./Elements";

Vue.use(Vuex);

const state = {};

const mutations = {};

const getters = {};

const actions = {};

const modules = {
  User,
  Projects,
  Pages,
  Blocks,
  Elements
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules
});
