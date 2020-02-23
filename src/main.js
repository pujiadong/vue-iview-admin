import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import echarts from 'echarts';
import './mock';
Vue.use(ViewUI);


router.beforeEach((to, from, next) => {
  if (to.matched.some(router => router.meta.needLogin)) {
    if (sessionStorage.token) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
