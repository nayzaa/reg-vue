import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Homepage from './components/Homepage'
import Courses from './components/Courses'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Homepage },
  { path: '/courses', component: Courses },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
