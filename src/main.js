import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

import store from "./store";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBxMkAKyfR-ixliVXXI4yM-BPfqBRLiTIc",
  authDomain: "anotador-bowling.firebaseapp.com",
  projectId: "anotador-bowling",
  storageBucket: "anotador-bowling.appspot.com",
  messagingSenderId: "927293070415",
  appId: "1:927293070415:web:7507e3866123030d0b9e3a",
});

export const db = firebase.firestore();

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
