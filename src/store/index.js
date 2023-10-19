import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state: {
        sessionData: {
            accessToken: null,
            user: null,
        },

        isLogged : false,
        
        firstReg : false,
    },
    getters: {
        getSessionData(state) {
            return state.sessionData;
        },

        getLoginStatus(state) {
            return state.isLogged;
        },

        getFirstReg(state) {
            return state.firstReg;
        }
    },
    mutations: {
        setSessionData(state, data) {
            state.sessionData.accessToken = data.accessToken;
            state.sessionData.user = data.user;
        },

        setLoginStatus(state, loginStatus) {
        state.isLogged = loginStatus;
        },

        setFirstReg(state, firstReg) {
            state.firstReg = firstReg;
        }
    },
    actions: {
        setSessionData({ commit }, data) {
            commit('setSessionData', data);
        },

        setLoginStatus({ commit }, loginStatus) {
            commit('setLoginStatus', loginStatus);
        },

        setFirstReg({ commit }, firstReg) {
            commit('setFirstReg', firstReg);
        }

    },
    plugins: [createPersistedState()]
});

export default store;