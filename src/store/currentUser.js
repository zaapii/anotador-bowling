const state = {
  token: null,
  email: null,
  name: null,
  picture: null,
};

const getters = {
  getCurrentUserEmail: (state) => state.email,
  getCurrentUserToken: (state) => state.token,
  getCurrentUserName: (state) => state.name,
  getCurrentUserPicture: (state) => state.picture,
  isAuthenticated: (state) => !!state.token,
};

const actions = {
  setCurrentUser({ commit }, payload) {
    commit("setNewCurrentUser", payload);
  },
  logOutCurrentUser({ commit }) {
    commit("logOutCurrentUser");
  },
};

const mutations = {
  setNewCurrentUser: (state, newCurrentUser) => {
    console.log(newCurrentUser);
    state.token = newCurrentUser.token;
    state.email = newCurrentUser.email;
    state.name = newCurrentUser.name;
    state.picture = newCurrentUser.picture;
  },
  logOutCurrentUser: (state) => {
    state.token = null;
    state.email = null;
    state.name = null;
    state.picture = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
