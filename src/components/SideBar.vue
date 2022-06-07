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

          <p>
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
          <v-btn block elevation="2" dark @click="dialog = !dialog">
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

    <login-view @close-dialog="dialog = false" :dialog="showLogin" />
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LoginView from "./LoginView";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    LoginView,
  },
  computed: {
    ...mapGetters([
      "isAuthenticated",
      "getCurrentUserPicture",
      "getCurrentUserName",
      "getCurrentUserEmail",
    ]),

    showLogin() {
      if (this.dialog) return true;
      else return false;
    },
  },
  methods: {
    ...mapActions(["logOutCurrentUser"]),
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