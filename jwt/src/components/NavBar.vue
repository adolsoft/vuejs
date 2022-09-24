<template>
    <div>
      <v-app-bar color="deep-purple accent-4" dense dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>Page title</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn v-if="userName !== ''" icon class="pr-16 ml-16" @click="logout">
          {{ userName }}
        </v-btn>
      </v-app-bar>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      btnClick(path) {
        console.log(path);
        this.$router.push(path);
      },
      logout() {
        this.$store.commit("setSelectedUser", "");
      },
    },
    computed: {
      userName() {
        return this.$store.getters.getSelectedUser;
      },
    },
  };
  </script>
  
  <style></style>