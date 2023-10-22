import Vue from 'vue'
import App from './App.vue'
import router from './router'
// const num = 1
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
