const initialState = {
  foo: "Hello world"
};
export const states = { ...initialState };

export const actions = {
  ADD_FOO({ commit }) {
    commit("SET_FOO", "bar");
  }
};

export const mutations = {
  SET_FOO(state, foo) {
    state.foo = foo;
  }
};

export const getters = {
  foos(state) {
    return state.foo;
  }
};
export default {
  states,
  actions,
  mutations,
  getters
};
