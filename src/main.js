// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'

Vue.use(Vuetify)

firebase.initializeApp({
  apiKey: 'AIzaSyDG0ii74R3yYJyV5ercrf8bWJaEr9r5fSc',
  authDomain: 'menu-manager-a32d6.firebaseapp.com',
  databaseURL: 'https://menu-manager-a32d6.firebaseio.com',
  projectId: 'menu-manager-a32d6',
  storageBucket: 'menu-manager-a32d6.appspot.com',
  messagingSenderId: '36308459569'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
const unsubscribe = firebase.auth()
.onAuthStateChanged((firebaseUser) => {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created () {
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    }
  })
  unsubscribe()
})
