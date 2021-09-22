import createPersistedState from "vuex-persistedstate";
import auth from './module/auth.js';

const store = {
  modules: {
    auth
  },
};

export default store