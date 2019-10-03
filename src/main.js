import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyDf9LB5U8V35GLSLABEs8Uk0vIFmql_sZg',
  authDomain: 'platzi-rooms-bc3e1.firebaseapp.com',
  databaseURL: 'https://platzi-rooms-bc3e1.firebaseio.com',
  projectId: 'platzi-rooms-bc3e1',
  storageBucket: '',
  messagingSenderId: '727162605013',
  appId: '1:727162605013:web:d5424ef037a5e238b7015c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('FETCH_AUTH_USER')
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    if (store.state.authId) {
      this.$store.dispatch('FETCH_USER', { id: store.state.authId });
    }
  },
}).$mount('#app');
