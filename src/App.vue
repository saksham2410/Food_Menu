<template>
  <v-app id="inspire" :dark="dark">
    <v-navigation-drawer clipped fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile @click="create">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Create</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="view">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>View</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Zolo Menu</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-switch v-model="dark" flex-center primary label="Dark Mode"></v-switch>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2019 ZoloStays</span>
    </v-footer>
  </v-app>
  <!-- <v-content>
      <Menu/>
    </v-content>
  </v-app>-->
</template>

<script>
import Create from "./components/Create";
import View from "./components/View";

export default {
  name: "App",
  components: {
    Create,
    View
  },
  data() {
    return {
      drawer: false,
      dark: false
    };
  },
  methods: {
    create() {
      this.$router.push({
        name: "Create"
      });
    },
    view() {
      this.$router.push({
        name: "View"
      });
    }
  }
};
</script>
