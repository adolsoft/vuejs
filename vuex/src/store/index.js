// vue tanıtıyoruz.
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
        } 
    },
    actions:{},
    
});