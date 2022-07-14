import Vue from 'vue';
import AxiosCache from './AxiosCache';

Vue.prototype.$isLogged = null;
Vue.prototype.$authData = null;
Vue.prototype.$check = (permOrRole) => {
  let data = Vue.prototype.$authData;
  data = [...data.roles, ...data.permissions];

  let checker = (name, val) => {
    if (Array.isArray(val)) {
      return !!(val.find(r => r === name));
    }
    return name === val;
  };

  return !!(data.find(r => checker(r.name, permOrRole)));
};
Vue.prototype.$cache = new AxiosCache();

