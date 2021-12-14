import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

/*const checkPermission = async (to, next, permission) => {
    const {data} = await Axios.get('/auth-data');

    if (data.roles[0] === 'guest') {
        await next({name: 'login'})
    }

    let adminRole = data.roles.find(role => role.name === 'user');

    if (adminRole){
        await next();
    }

    let flag = false;
    let userRole = data.roles.find(role => role.name === 'user');

    if(to.params.id && userRole){
        const user_id = (await Axios.get(`/form/${to.params.id}/get_user_id`)).data
        const user = (await Axios.get('/user')).data

        if (parseInt(user_id) !== user.id) {
            flag = true
        }
    }

    let perm = data.roles.find(role => role.permissions.find(item => item.name === permission));

    if (flag || !perm){
        window.location.href = '/error403'
        return;
    }

    await next()
}*/

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', name: 'main', component: () => import('./components/pages/MainPage')
        },
        {
            path: '/admin-panel', name: 'adminPanel', component: () => import('./components/pages/AdminPanel')
        },
        {
            path: '/generator-reports', name: 'generatorReports', component: () => import('./components/pages/GeneratorReports')
        },
        {
            path: '/login', name: 'login', component: () => import('./components/pages/Login')
        },
        {
            path: '/main', component: () => import('./components/pages/MainPage')
        },
    ]
})
