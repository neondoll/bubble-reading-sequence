import VueRouter from "vue-router";
import Vue from "vue";
import Test from "./components/pages/Test/Test";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', name: 'main', component: () => import('./components/pages/MainPage')
        },
        {
            path: '/main', name: 'main', component: () => import('./components/pages/MainPage')
        },
        {
            path: '/login', name: 'login', component: () => import('./components/pages/Login')
        },
        {
            path: '/register', name: 'register', component: Test
        },
        {
            path: '/form/create', name: 'createForm', component: () => import('./components/pages/Form/CreatePage')
        },
        {
            path: '/form/:id/update', name: 'updateForm', component: () => import('./components/pages/Form/UpdatePage')
        }
    ]
})
