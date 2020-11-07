<template>
  <v-app>
    <v-navigation-drawer app>
      <drawer-menu/>
    </v-navigation-drawer>
    <v-main class="mainScreen">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import DrawerMenu from "@/components/Sidebar/drawerMenu";

export default {
  name: 'App',

  components: {
    DrawerMenu,
  },
  methods: {
    getName() {
      return "getName method"
    }
  },
};
</script>

<style>
    .mainScreen {
      margin-top: 50px;
    }
</style>
