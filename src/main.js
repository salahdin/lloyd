import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { store } from './store'
import firebase from 'firebase/app'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  // firebase setup
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyCmbiSA--9CowZYIq4a_cd5OO1PgqYeq8o",
      authDomain: "vue-tut-net.firebaseapp.com",
      databaseURL: "https://vue-tut-net.firebaseio.com/",
      projectId: "vue-tut-net",
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
}).$mount('#app')
