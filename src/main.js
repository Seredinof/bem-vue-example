import Vue from 'vue'
import App from './App.vue'
import ClassName from '@/classname';

Vue.config.productionTip = false;
Vue.use(ClassName);
new Vue({
  render: h => h(App),
}).$mount('#app')
