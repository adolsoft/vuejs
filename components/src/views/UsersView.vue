<template>
  <div>
    <v-row>
      <v-col>
        <div>Secilen Kullanici: ...{{ selectedUser }}</div>
      </v-col>
    </v-row>

    <UserCard
      v-for="user in users"
      :key="user.id"
      v-bind:user-name="user.userName"
      :yasi="user.yasi"
      v-on:butona-basma-eventi="kullaniciDegistir"
    />
  </div>
</template>

<script>
import UserCard from "../components/UserCard";

export default {
  components: {
    UserCard,
  },
  data() {
    return {
      users: [
        { id: "1", userName: "Osman", yasi: "25" },
        { id: "2", userName: "Mahmut", yasi: "40" },
        { id: "3", userName: "Murat", yasi: "18" },
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