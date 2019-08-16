import Vue from 'vue';
import Vuex from 'vuex';
import a from './modules/a.js'
import userInfo from './modules/userInfo.js'
Vue.use(Vuex)
const store = new Vuex.Store({
	modules:{
		a:a,
		user:userInfo
	}
});
export default store;