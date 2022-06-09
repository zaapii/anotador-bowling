<template>
  <v-navigation-drawer dark v-if="!this.$vuetify.breakpoint.mobile" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          <v-row justify="center" class="my-4">
            <img
              :src="getCurrentUserPicture ? getCurrentUserPicture : ''"
              alt=""
              style="max-width: 50%"
              class="rounded-circle"
            />
          </v-row>
        </v-list-item-title>
        <v-list-item-subtitle v-if="isAuthenticated">
          <p
            class="text-overline text-center"
            style="font-weight: bold !important"
          >
            Bienvenido {{ getCurrentUserName }}
          </p>

          <p class="font-italic text-center">
            {{ getCurrentUserEmail }}
          </p>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <!-- ESTO ES UN ASCO PERO ANDA -->
    <v-list dense nav>
      <v-list-item v-if="!isAuthenticated">
        <v-list-item-content>
          <v-btn block elevation="2" dark @click="handleClickSignIn">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            &nbsp;&nbsp;Ingresar&nbsp;&nbsp;&nbsp;</v-btn
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-btn block elevation="2" dark>
            <v-list-item-icon>
              <v-icon>mdi-bowling</v-icon>
            </v-list-item-icon>
            Dashboard</v-btn
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="isAuthenticated">
        <v-list-item-content>
          <v-btn
            @click="handleClickSignOut"
            dark
            block
            elevation="2"
            color="red darken-3"
            ><v-list-item-icon> <v-icon>mdi-logout</v-icon> </v-list-item-icon
            >Salir</v-btn
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export default {
  data() {
    return {
      dialog: false,
      isInit: false,
    };
  },
  computed: {
    ...mapGetters([
      "isAuthenticated",
      "getCurrentUserPicture",
      "getCurrentUserName",
      "getCurrentUserEmail",
      "isAuthenticated",
    ]),
  },
  methods: {
    ...mapActions(["logOutCurrentUser", "setCurrentUser", "logOutCurrentUser"]),
    async handleClickSignIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result);
          this.setCurrentUser({
            name: result.additionalUserInfo.profile.name,
            token: result.credential.accessToken,
            email: result.additionalUserInfo.profile.email,
            picture: result.additionalUserInfo.profile.picture,
          });
        });
    },
    async handleClickSignOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Successfully signed out.");
        });
      this.logOutCurrentUser();
    },
  },
};
</script>

<style>
</style>