import Vue from 'vue'
require('dotenv').config();
import './plugins/vuetify'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
