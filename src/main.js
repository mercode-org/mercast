import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import Icon from "vue-awesome/icons";

Vue.http = Vue.prototype.$http = axios;
axios.defaults.headers.common = {
  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
}
Vue.config.productionTip = false

Vue.component("Icon", Icon);
new Vue({
  render: h => h(App),
}).$mount('#app')
