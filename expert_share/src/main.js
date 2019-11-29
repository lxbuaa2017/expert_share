import Vue from 'vue';
import App from './App';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ViewUI);
Vue.use(ElementUI);

Vue.config.productionTip = false
// The routing configuration
// const RouterConfig = {
//   routes: Routers
// };
// const router = new VueRouter(RouterConfig);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
