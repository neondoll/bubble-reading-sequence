import Vue from 'vue'
import router from "./router";
import vuetify from "./plugins/vuetify";
import App from "./components/App";
import axios from "axios";

require('./vuePrototypes');

window.Axios = axios.create()


new Vue({
    render: h => h(App),
    router,
    vuetify
}).$mount('#app');

