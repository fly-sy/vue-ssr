import Vue from 'vue'
import App from './App'
import router from './router'
import '@/styles/rest.less'
import 'animate.css/animate.css'

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'

// Vue.use(MintUI)

import Vant from 'vant'
import 'vant/lib/vant-css/index.css'


Vue.use(Vant)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: c=>c(App)
})

