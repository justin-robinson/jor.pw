import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import Store from '@/components/Store.ts';

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {},
  modules: {
    NavBar: Store,
  },
});

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
