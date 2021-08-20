import Vue from 'vue';
import App from './App.vue';
import router from './router';

import CarbonComponentsVue from '@carbon/vue';
import { createProvider } from './vue-apollo';
import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAn5k2i75JbnLiF9e5tn2ZThBnLXZUmnZg',
  authDomain: 'vue-trial-ad2c4.firebaseapp.com',
  projectId: 'vue-trial-ad2c4',
  storageBucket: 'vue-trial-ad2c4.appspot.com',
  messagingSenderId: '381113363109',
  appId: '1:381113363109:web:933c77843bb8c498ec3b4c'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(CarbonComponentsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');
