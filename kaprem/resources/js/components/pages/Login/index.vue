<template>
    <div id="login-page" class="d-flex ">
        <div id="img"></div>
        <v-card elevation="4" class="login-card mr-5">
            <v-container>
                <v-form id="login-form" @submit.prevent="submit" v-model="valid">
                    <m-errors :errors="errors"/>
                    <h3 class="title text-center">Вход</h3>
                    <v-text-field clearable autofocus autocomplete="on" v-model="form.email" label="Логин"
                                  name="email"/>
                    <v-text-field
                            :append-icon="showPassword ? icons.mdiEyeOutline : icons.mdiEyeOffOutline"
                            clearable
                            autocomplete="on"
                            :type="showPassword ? 'text' :'password'"
                            @click:append="showPasswordClick"
                            v-model="form.password" label="Пароль"
                            name="password"/>


                    <div class="absolute bottom ">
                        <v-btn id="sbmBtn" text color="primary" type="submit">Войти в систему</v-btn>
                    </div>


                </v-form>
            </v-container>


        </v-card>
    </div>


</template>

<script>
import {mdiEyeOutline, mdiEyeOffOutline} from '@mdi/js';
import MErrors from '../../organisms/MErrors';

export default {
  name: 'Login',
  components: {MErrors},

  methods: {
    showPasswordClick() {
      this.showPassword = !this.showPassword;
    },
    async submit(e) {
      this.errors = [];
      const form = new FormData(e.target);
      const sbm = Axios.post('/login', form);
      sbm.catch(({response}) => {
        if (response.status === 422) {
          this.errors = response.data.errors;
        }
        else {
          this.errors.push(['Произошла внутренняя ошибка сервера']);
        }
      });
      const {data} = await sbm;
      if (data.success) {
        window.location.href = '/login/redirect';
      }

    },

  },
  data: () => ({
    icons: {
      mdiEyeOffOutline,
      mdiEyeOutline,
    },
    valid: true,
    errors: [],
    showPassword: false,
    form: {
      email: null,
      password: null,
    },
  }),
};
</script>

<style lang="scss" scoped>

/*#img {
    background: url(../../../../assets/login.svg) no-repeat;
    position: absolute;
    height: 100vh;
    width: 100vw;

}*/

#login-page {

  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;

}

.login-card {
  width: 350px;
  height: 400px;
  z-index: 2;
}


</style>
