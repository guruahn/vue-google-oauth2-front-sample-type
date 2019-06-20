import Vue from 'vue';
import App from './App.vue';
import gAuth from './plugins/gAuth/index';
// import gAuth from 'vue-google-oauth2';

declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
    $gAuth: any;
  }
}

Vue.use(gAuth,
  {
    clientId: '768834812579-cusmrncq6fitlfdb76qk9jm7bq902ic0.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account',
  });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
