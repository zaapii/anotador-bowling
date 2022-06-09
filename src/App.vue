<template>
  <v-theme-provider root>
    <v-app>
      <side-bar />
      <v-main>
        <v-container fluid>
          <main-component />
        </v-container>
      </v-main>

      <v-footer app>
        <!-- NADA POR AQUí POR AHORA -->
      </v-footer>
    </v-app>
  </v-theme-provider>
</template>

<script>
import MainComponent from "./components/MainComponent.vue";
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",

  components: {
    SideBar,
    MainComponent,
  },
};
</script>
