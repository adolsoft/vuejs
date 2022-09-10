<template>
  <div id="app">
  <div>{{name}}{{surname}}</div>
  <br />
  <div>{{fulName}}</div>
  <br />
    <div>{{age}}</div>
    <div>{{courses}}</div>
    <br />
    <div>
      <button v-on:click="arttir">Arttir</button>
    </div>
    <div>
      <button @click="azalt">Azalt</button></div>
    <div>{{counter}}</div>
    <hr />

    <div>
      <input type="text" value="name" />
       <!-- v-bind:value araştır. -->
      <input type="text" v-bind:value="name" />
      <!-- v-bind:value kısaltması :value dir -->
      <input type="text" :value="surname" />
      <!-- dinamik olarak bir class ismi verebiliriz -->
      <input type="text" :value="surname" v-bind:class="cls" />
      <hr />
      <div>
        <input type="text" v-model="text"/>
      </div>
      <div>
        Girilen yazı: {{ text }}
      </div>
      <hr />
      <div>
        <label for="#username">Kullanıcı Adi</label>
        <input id='username' type="text" v-model="user.username"/>
        <label for="#password">Password</label>
        <input id='password' type="text" v-model="user.password"/>
        <label for="#confirm">Confirm Password</label>
        <input id='confirm' type="text" v-model="user.confirmPassword"/>
        <button :disabled="user.password !== user.confirmPassword">Gönder</button>
        <div v-if="user.password !== user.confirmPassword"> Şifreler uyumlu değil</div>
      </div>
      <div>
        Girilen yazı: {{ user }}
      </div>
      <hr />
      <div v-if="isMarried"> Evliliğinizde mutluluklar dilerim. </div>
      <div v-else> En güzel zamanlar. </div>
      <hr />
      <hr />
      Gördüğü kurslar
      <ul>
        <li v-for="(item, index) in courses" :key="index">{{item}}</li>
      </ul>
      <hr />
      <a href="https://www.google.com" @click="linkeGit">google</a>
      <hr />
      <a href="https://www.google.com" @click.prevent="linkeGit2">google</a>
      <hr />
      <a href="https://www.google.com" @keydown.space="linkeGit2">space basıldığı zaman metod çalışır</a>
    </div>
    <hr />
    <input type="text" v-model="soru"/>
    <div>{{ cevap }}</div>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  data () { // datamız var değişkenleri return yapıyorduk
    return {
      name: 'Ahmet',
      surname: 'DOLU',
      age: 42,
      isMarried: false,
      courses: ['vue', 'js', 'nodejs'],
      counter: 0,
      cls: 'input_class',
      text: '',
      user: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      soru: '',
      cevap: ''
    }
  },
  watch: { // data değerlerinden değişir değişmes yapmamız gereken birseyler olabilir. Bunu izlemek için
    // ornegin soru değişkenini dinlesin bir eski birde yeni değereri var
    soru (yeniDeger, eskiDeger) {
      if (yeniDeger.indexOf('?') > -1) { // indexOf ile string içersinde bir değer aramak burda ? isaretini arıyoruz
        this.cevap = 'Sorunuzu aldımi degerlendiriyorum..'
        return
      }
      this.cevap = yeniDeger === '' ? '' : 'dinliyorum buyrun.....'
      console.log('Yenideger:', yeniDeger)
      console.log('Eskideger:', eskiDeger)
    }
  },
  methods: { // buraya metodlarımızı yazıyoruz
    arttir () {
      this.counter++
    },
    azalt () {
      this.counter--
    },
    linkeGit (e) {
      // eslint-disable-next-line no-debugger
      debugger
      e.preventDefault()
      console.log('link tıklandı')
    },
    linkeGit2 () {
      console.log('link tıklandı')
    }
  },
  computed: { // computed bize hesaplanmış değerleri geri döndürmeyi sağlar
    fulName () {
      return `${this.name} ${this.surname} - ${this.age}`
    }
  },
  beforeCreate () { // sayfa ilk oluşturuluken yapılacak islemler olabilir.
    console.log('beforeCreate')
  },
  async created () { // burada veritabanı veya beckend isteklerimizi burda çekebiliriz.
    // foksiyonun basına async yazmamız gerekiyor ve await yazmamız gerekiyor.
    // bu istekleri yukarıda data bolumune atarız.
    // burdaki işlemler yapılırken daha internet sitesini gormemiş oluruz.
    console.log('created')
  },
  mounted () { // sayfaya yuklendigi zaman burası çalısır site tam yuklenmiş olur.
    // orneğin
    console.log('mounted')
  },
  beforeUpdate () { // isindeki bilgiler guncellendiği zaman çalısasak
    // console.log('beforeUpdate')
  },
  updated () {
    // console.log('update')
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
