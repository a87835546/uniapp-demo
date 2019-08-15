import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store/index.js'
import {post,get} from './pages/utils/httpRequest.js'

Vue.config.productionTip = false
Vue.prototype.post = post
Vue.prototype.get = get
Vue.prototype.$store = store;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
