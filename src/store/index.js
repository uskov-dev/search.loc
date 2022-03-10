import { createStore } from 'vuex';

export default createStore({
  state: {
    receivedUsers: [],
    addedUsers: [],
  },
  getters: {
    getReceivedUsers(state) {
      return state.receivedUsers;
    },
    getAddedUsers(state) {
      return state.addedUsers;
    },
  },
  mutations: {
    setReceivedUsers(state, payload) {
      state.receivedUsers = payload;
    },
    pushAddedUsers(state, payload) {
      state.addedUsers.push(payload);
    },
    setAddedUsers(state, payload) {
      state.addedUsers = payload;
    },
    removeUser(state, payload) {
      state.receivedUsers = state.receivedUsers.filter((item) => item.value !== payload.value);
    },
  },
  actions: {
    async getListRequests({ commit, state }, query) {
      const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Token 43b7e62f8b5e35438a657ce267979f961dcb9670',
        },
        body: JSON.stringify({
          query,
          parts: ['SURNAME'],
        }),
      };

      const response = await fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio/', options);
      const result = await response.json();
      const [...suggestions] = result.suggestions;

      state.addedUsers.forEach((user) => {
        const index = suggestions.findIndex((item) => user.value === item.value);

        if (index !== -1) {
          suggestions.splice(index, 1);
        }
      });

      commit('setReceivedUsers', suggestions);
    },
    addUser({ commit, state }, user) {
      commit('pushAddedUsers', user);
      localStorage.setItem('users', JSON.stringify(state.addedUsers));
    },
    getLocalUsers({ commit }) {
      let localUsers = JSON.parse(localStorage.getItem('users'));

      localUsers = localUsers !== null ? localUsers : [];
      commit('setAddedUsers', localUsers);
    },
  },
});
