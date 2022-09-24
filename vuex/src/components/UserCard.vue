<template>
    <v-card class="mx-auto mt-4" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">USER</div>
          <v-list-item-title class="text-h5 mb-1">
            {{ userName }}
          </v-list-item-title>
          <v-list-item-subtitle>Yasi = {{ yasi }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
  
      <v-card-actions>
        <v-btn outlined text v-on:click="handleClick(userName)"> Button </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      userName: {
        type: String,
        default: "Murat",
      },
      yasi: {
        type: String,
        default: "18",
      },
    },
    methods: {
      handleClick(name) {
        this.$emit("butona-basma-eventi", name);
      },
    },
  };
  </script>
  
  <style></style>