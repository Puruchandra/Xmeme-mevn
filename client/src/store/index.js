import Vue from 'vue';
import Vuex from 'vuex';
import memeModule from './memeModule';

Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        memeModule
    }
});