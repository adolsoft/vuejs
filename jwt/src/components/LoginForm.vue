<template>
    <v-row>
      <v-col class="d-flex justify-center">
        <form>
          <v-text-field v-model="username" label="Username"></v-text-field>
          <v-text-field v-model="password" label="Password"></v-text-field>
  
          <v-btn class="mr-4 mt-6 success" @click="login"> Login </v-btn>
          <v-btn class="mr-4 mt-6" @click="getUsers"> Get Users </v-btn>
        </form>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    data: () => ({
      //  bu değişkenleri server gondermemiz gerekiyor. Bundan dolayı buraya değişken isimlerini tanıttık.
      // daha sonra yukarıdaki v-text-field bunlara bağlamamız gerekiyor
      // v-model="" ile bağlıyoruz.....
      username: "",
      password: "",
    }),
    methods: {
      login() { 
        //login dügmesine bastığında burası çalısacak.
        // this.$store.commit("setLoggedInUser" burası ile mutation çağırızı
        this.$store.dispatch("login", { // dispatch ile actions ları çağrılıyor.
          username: this.username,
          password: this.password,
        });
       // store / index.vue dosyasının içinde loggedInUser buradan bilgileri gondermemiz gerekiyor.
       // store / index.vue dosyasında  mutations ile yapıyoruç Mutationlar bizim state mizi değiştiren ksımdı 
       // yukarıdaki sayfaya git bak
     },
   },
 };
  </script>
  
  <style></style>