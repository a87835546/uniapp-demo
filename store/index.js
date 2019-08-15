import Vue from 'vue';
import Vuex from 'vuex';
import a from './modules/a.js'
Vue.use(Vuex)
const store = new Vuex.Store({
	modules:{
		a:a
	}
});
export default store;