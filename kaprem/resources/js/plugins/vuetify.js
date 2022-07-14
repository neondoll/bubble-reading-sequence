import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import {ru} from 'vuetify/lib/locale';

Vue.use(Vuetify);

const opts = {
  customVariables: ['~/../../saas/variables.scss'],
  treeShake: true,
  lang: {
    locales: {ru},
    current: 'ru',
  },
};

export default new Vuetify(opts);
