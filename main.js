import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import {post,get} from './pages/utils/httpRequest.js'
import VCalendar from 'v-calendar'

Vue.config.productionTip = false
Vue.prototype.post = post
Vue.prototype.get = get
App.mpType = 'app'

Vue.use(VCalendar, {
  formats: {
    title: 'MMMM YYYY',
    weekdays: 'W',
    navMonths: 'MMM',
    input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
    dayPopover: 'L',
  }
})

const app = new Vue({
    ...App
})
app.$mount()
