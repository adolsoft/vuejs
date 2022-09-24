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
    //aşağıdaki kısmı artık store alıyorum
    //users: [
     // { userName: "Osman", yasi: "25"},
     // { userName: "Mahmut", yasi: "40"},
     // { userName: "Murat", yasi: "18"},
    //],
    //selectedUser: "",
    };
  },
  methods: {
    kullaniciDegistir(isim) {
      //this.selectedUser = isim;
      // mutations çalıstıran commit tir 
      this.$store.commit('setSelectedUser', isim)
    },
  },
  //store içindeki verileri almak için kullanılır
  // $ işareti ile  başlayan kommutlar vue kendi metodtlarıdı.
  computed:{
    users(){
      return this.$store.getters.getUsers
    },
    selectedUser() {
      return this.$store.getters.getSelectedUser;

    }
  }
};
</script>

<style></style>