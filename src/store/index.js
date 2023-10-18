import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state: {
        sessionData: {
            accessToken: null,
            user: null,
        }
    },
    getters: {
        getSessionData(state) {
            return state.sessionData;
        }
    },
    mutations: {
        setSessionData(state, data) {
            state.sessionData.accessToken = data.accessToken;
            state.sessionData.user = data.user;
        }
    },
    actions: {
        setSessionData({ commit }, data) {
            commit('setSessionData', data);
        }
    },
    plugins: [createPersistedState()]
});

export default store;