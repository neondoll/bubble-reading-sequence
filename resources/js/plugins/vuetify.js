import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import {ru} from 'vuetify/lib/locale'

Vue.use(Vuetify)

const opts = {
    lang: {
        locales: {ru},
        current: 'ru'
    },
    theme: {
        themes: {
            light: {
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                primary: '#007BFF',
                secondary: '#424242',
                success: '#4CAF50',
                warning: '#FFC107',
                white: '#FFFFFF'
            }
        }
    }
}

export default new Vuetify(opts)
