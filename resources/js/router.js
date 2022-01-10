import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const checkPermission = async (to, next, permission) => {
    const data = Vue.prototype.$authData

    if (data.roles[0] === 'guest') {
        await next({name: 'login'})
    }

    let adminRole = data.roles.find(role => role.name === 'admin')

    if (adminRole) {
        await next()
    }

    let flag = false
    let userRole = data.roles.find(role => role.name === 'user')

    if (to.params.id && userRole) {
        const user_id = (await Axios.get(`/form/${to.params.id}/get_user_id`)).data
        const user = (await Axios.get('/user')).data

        if (parseInt(user_id) !== user.id) {
            flag = true
        }
    }

    let perm = data.permissions.find(item => item.name === permission)

    if (flag || !perm) {
        await next(false)
        window.location.href = '/error403'
    } else {
        await next()
    }
}

let router = new VueRouter({
    mode: 'history', routes: [{
        beforeEnter: async (to, from, next) => {
            await checkPermission(to, next, 'main')
        }, component: () => import('./components/pages/MainPage'), name: 'main', path: '/'
    }, {
        beforeEnter: async (to, from, next) => {
            await checkPermission(to, next, 'admin-panel')
        }, component: () => import('./components/pages/AdminPanel'), name: 'adminPanel', path: '/admin-panel'
    }, {
        beforeEnter: async (to, from, next) => {
            await checkPermission(to, next, 'generator-reports')
        },
        component: () => import('./components/pages/GeneratorReports'),
        name: 'generatorReports',
        path: '/generator-reports'
    }, {component: () => import('./components/pages/Login'), name: 'login', path: '/login'}, {
        beforeEnter: async (to, from, next) => {
            await checkPermission(to, next, 'main')
        }, component: () => import('./components/pages/MainPage'), path: '/main'
    },]
})

router.beforeEach(async (to, from, next) => {
    const {data} = await Axios.get('/auth')

    Vue.prototype.$isLogged = data.success

    if (data.success) {
        if (to.name === 'login' || to.name === 'register') {
            await next({name: 'main'})
        } else {
            const data2 = (await Axios.get('/auth-data')).data
            Vue.prototype.$authData = {
                auth_key: data2.auth_key,
                login: data2.email,
                roles: data2.roles,
                permissions: data2.permissions
            }
            console.log(Vue.prototype.$authData)
            await next()
        }
    } else {
        if (to.name !== 'login' && to.name !== 'register') {
            await next({name: 'login'})
        } else {
            await next()
        }
    }
})

export default router
