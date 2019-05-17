    
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

//vue components
import UsersTable from './components/UsersTable.vue';
import ProductsTable from './components/ProductsTable.vue';
import Menu from './components/Menu.vue';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Vuetify);


Vue.config.productionTip = false

const routes = [
  {path: '/users', component: UsersTable},
  {path: '/products', component: ProductsTable},
  {path: '/menu', component: Menu},
]


const router = new VueRouter({
  routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')