import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        token : sessionStorage.getItem('accessToken'),
        noLogin : sessionStorage.getItem('Flag'),
    },
    mutations:{
        setToken(state,token){
            state.token = '';
        },
        setFlag(state,noLogin){
            state.noLogin = false;
        }
    }
})

export default store;