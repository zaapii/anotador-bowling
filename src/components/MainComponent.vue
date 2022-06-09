<template>
  <div>
    <div v-if="!juegoComenzado">
      <v-toolbar class="white" height="50">
        <img :src="imageLink.logo" alt="Vuetify.js" height="100%" />
        <v-toolbar-title class="mx-0" v-text="title"></v-toolbar-title>
        <p>Beta</p>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-avatar v-if="$vuetify.breakpoint.mobile">
            <v-img :src="getCurrentUserPicture"></v-img>
          </v-avatar>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <section>
          <v-parallax :src="imageLink.sub_main" height="800">
            <v-layout column align-center justify-center class="white--text">
              <h1
                class="white--text mb-2 display-1 text-xs-center"
                style="font-weight: 900; text-shadow: 3px 2px #000000"
              >
                Anotador Bowling 1.0
              </h1>
              <v-btn
                class="blue lighten-2 mt-5"
                dark
                large
                @click="juegoComenzado = true"
              >
                Empezar Juego Nuevo
              </v-btn>
            </v-layout>
          </v-parallax>
        </section>

        <v-footer class="blue darken-2">
          <v-layout row wrap align-center>
            <v-flex xs12 class="text-xs-center"> </v-flex>
          </v-layout>
        </v-footer>
      </v-content>
    </div>
    <div v-if="juegoComenzado" v-animate-css="'fadeIn'" duration="10000">
      <h1>hola</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  data: function () {
    return {
      title: "Anotador Bowling",
      juegoComenzado: false,
      imageLink: {
        sub_main:
          "https://images.pexels.com/photos/344029/pexels-photo-344029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        logo: "https://img.freepik.com/free-vector/bowling-logo-labels-badges_266639-32.jpg?w=2000",
      },
    };
  },
  computed: {
    ...mapGetters(["getCurrentUserPicture"]),
  },
};
</script>

<style scoped>
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>
