import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import {ru} from 'vuetify/lib/locale'

Vue.use(Vuetify)

const opts = {
    lang: {
        locales: {ru},
        current: 'ru'
    },
}

export default new Vuetify(opts)
