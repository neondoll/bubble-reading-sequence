import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const checkPermission = async (to, next, permission) => {
    const data = Vue.prototype.$authData;

    if (data.roles[0] === 'guest') {
        await next({name: 'login'});
    }

    let adminRole = data.roles.find(role => role.name === 'admin');

    if (adminRole) {
        await next();
    }

    let flag = false;
    let userRole = data.roles.find(role => role.name === 'user');

    if (to.params.id && userRole) {
        const user_id = (await Axios.get(`/form/${to.params.id}/get_user_id`)).data;
        const user = (await Axios.get('/user')).data;

        if (parseInt(user_id) !== user.id) {
            flag = true;
        }
    }

    let perm = data.permissions.find(item => item.name === permission);

    if (flag || !perm) {
        await next(false);
        window.location.href = '/error403';
    } else {
        await next();
    }
};

let router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: () => import('./components/redirect')},
        {path: '/home', name: 'home', component: () => import('./components/pages/home')},
        {path: '/info', name: 'Info', component: () => import('./components/pages/Info')},
        {path: '/kaprem/:org_id', name: 'mainKaprem', component: () => import('./components/pages/kaprem')},
        {
            path: '/kaprem/object/edit/:id',
            name: 'objectEdit',
            component: () => import('./components/pages/object/objectEdit')
        },
        {
            path: '/kaprem/object/view/:id',
            name: 'objectView',
            component: () => import('./components/pages/object/objectView')
        },
        {path: '/login', name: 'login', component: () => import('./components/pages/Login')},
        {path: '/subsidies/:code', name: 'Subsidies', component: () => import('./components/pages/subsidies')},
        {path: '/subsidies/:code/:id', name: 'SubsidiesView', component: () => import('./components/pages/subsidies/View')}
    ],
});

router.beforeEach(async (to, from, next) => {

    const {data} = await Axios.get('/auth');

    Vue.prototype.$isLogged = data.success;

    if (to.name !== 'login' && to.name !== 'register' && !data.success) {
        await next({name: 'login'});
    } else {
        if (!data.verified && data.success && to.name !== 'checkEmail') {
            await next({name: 'checkEmail'});
        } else {
            if (data.success) {
                const data2 = (await Axios.get('/auth-data')).data;
                Vue.prototype.$authData = {
                    org_id: data2.org_id,
                    permissions: data2.permissions,
                    roles: data2.roles
                };
            }
            await next();
        }
    }
});

export default router;
