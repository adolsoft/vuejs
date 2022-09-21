<template>
  
  <div>
    <v-row>
      <v-col>
        <div>Secilen Kullanici: ...{{ selectedUser }}</div>
      </v-col>
    </v-row>
      <UserCard1
      v-for="user in users"
      :key="user.id"
      v-bind:user-name="user.userName"
      :yasi="user.yasi"
      v-on:butona-basma-eventi="kullaniciDegistir"/>
  </div>
</template>

<script>
import UserCard1 from "../components/UserCard1";


export default {
  components:{
    UserCard1
  },
  data() {
  return {
    users: [
      { userName: "Osman", yasi: "25"},
      { userName: "Mahmut", yasi: "40"},
      { userName: "Murat", yasi: "18"},
    ],
    selectedUser: "",
    };
  },
  methods: {
    kullaniciDegistir(isim) {
      this.selectedUser = isim;
    },
  },
};
</script>

<style></style>