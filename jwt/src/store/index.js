// vue tanıtıyoruz.
import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{ 
        users: [
                { id: "1", userName: "Osman", yasi: "25" },
                { id: "2", userName: "Mahmut", yasi: "40" },
                { id: "3", userName: "Murat", yasi: "18" },
                ],
        selectedUser: "",

        loggedInUser:{},
    },
    // alıcı demekteri bir veriyi başka bie metotan alabiliriz içinde 
    getters:{
        getUsers(state){
            return state.users;
        },

        getSelectedUser(state){
            return state.selectedUser;
        }
    },
    // burasının gorevi state yapısını değiştirmektir. set kelimesi ile başlar ama istediğiniz isimi verebilirisniz
    mutations:{
        setSelectedUser(state, payload){ // paylod isdediğimizismi verebiliriz. // burası componetten gelen değer.
            state.selectedUser = payload;
        },

        setLoggedInUser(state, payload) {
           state.loggedInUser = payload;
        }
    },

    // buranın gorevi diğer servislerden istek yapmak için kullanlır
    // beckend isteği bir dosya isteği olabilir.
    // işlem gerektiren işlem istekleri olabilir 
    // genelde aklımızda beckend isteklerimiz buraya yazıyoruz 
    actions:{
        async login({commit}, payload){//kogin metodu oluşturduk 
            // commit  = login olmuş kullanıcı verisini bir sekilde state atmamız gerekiyor.
            //           state değiştiren sadece mutations olduğu  için mutations ları {commit} ile çağırıyoruz.
            //  paload = sadece bir değişken istediğimizi verebiliriz Ayrıca bize bir değişken gelmesi gerekiyor
            //           bu depğişken LoginForm.vue kısmındaki login methodundan kullanıcı adı ve sifresini 
            //           bir obje olarak gonderip bizim payload ile karşılamamız gerekiyor.   

        try {
            //beckend isteği yapacağıs
            const serverResponse = await axios.post(
                "http://localhost:3000/users/login", 
                payload
                );
             // axios post get gibi işlemleri yaptırıyor.
            //post içine 3 parametre istiyor 1 paremetremiz url  2 paremetremiz kullanıcı nesnesi olacak yani payload
            // 3 paremetre ise şimdiki yazmaya gerek yok.

            commit("setLoggedInUser", serverResponse);// gelen beckend cevabını loggedInUser:{} içine atmak için kullanıyoruz.
            //loggedInUser:{} değiştirmek için gerekli mutations saten var .
            // yani setLoggedInUSer içersin e serverPesponse gondeririz.

        } catch (error) {
            console.log(error);
        }

        }
    },
    
});