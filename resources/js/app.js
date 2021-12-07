import Vue from 'vue'
import router from "./router";
import vuetify from "./plugins/vuetify";
import App from "./components/App";
import VueSmoothScroll from 'vue-smooth-scroll';

require('./vuePrototypes');

window.Axios = require('axios').default


router.beforeEach(async (to, from, next) => {
    const {data} = await Axios.get('/auth');
    Vue.prototype.$isLogged = data.success;
    const isLogin = (to.name !== 'login' && to.name !== 'register' && !data.success) ? {name: 'login'} : undefined;
    next(isLogin);
})

Vue.use(VueSmoothScroll);

new Vue({
    render: h => h(App),
    router,
    vuetify
}).$mount('#app');

