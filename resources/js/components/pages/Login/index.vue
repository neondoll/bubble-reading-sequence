<template>
    <div class="d-flex justify-center align-center" id="login-page">
        <v-card class="login-card" elevation="4">
            <v-container>
                <v-form v-model="valid" @submit.prevent="submit">
                    <m-errors :errors="errors"/>

                    <v-text-field autocomplete="on" clearable label="Логин" name="email" v-model="form.email"/>

                    <v-text-field autocomplete="on" clearable label="Пароль" name="password" v-model="form.password"
                                  :append-icon="showPassword ? icons.mdiEyeOutline : icons.mdiEyeOffOutline"
                                  :type="showPassword ? 'text' :'password'" @click:append="showPasswordClick"/>

                    <div class="absolute bottom">
                        <v-btn color="primary" id="sbmBtn" text type="submit">Войти в систему</v-btn>

                        <!--<v-btn color="warning" id="regButton" text :to="{name:'register'}">Регистрация</v-btn>-->
                    </div>
                </v-form>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import {mdiEyeOutline, mdiEyeOffOutline} from '@mdi/js'
import {HelpersMixin} from "../../../mixins";
import MErrors from "../../organisms/MErrors";

export default {
    name: "Login",
    components: {MErrors},
    mixins: [HelpersMixin],
    methods: {
        showPasswordClick() {
            this.showPassword = !this.showPassword;
        },
        async submit(e) {
            this.errors = null;
            const form = new FormData(e.target)
            const sbm = Axios.post('/login', form);
            sbm.catch(({response}) => {
                this.errors = response.data.errors
            });
            const {data} = await sbm;
            if (data.success) {
                await this.toRouteByName('main')
            }

        }
    },
    data: () => ({
        icons: {
            mdiEyeOffOutline,
            mdiEyeOutline
        },
        valid: true,
        errors: null,
        showPassword: false,
        form: {
            email: null,
            password: null
        }
    })
}
</script>

<style scoped>
#login-page {
    height: 80vh;
}

.login-card {
    width: 350px;
    height: 400px;
}


</style>
