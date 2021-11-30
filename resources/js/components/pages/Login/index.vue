<template>
    <div id="login-page" class="d-flex justify-center align-center">
        <v-card elevation="4" class="login-card">
            <v-container>
                <v-form @submit.prevent="submit" v-model="valid">
                    <m-errors :errors="errors"/>
                    <v-text-field clearable autocomplete="on" v-model="form.email" label="Логин" name="email"/>
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
                        <v-btn id="regButton" text color="warning" :to="{name:'register'}">Регистрация</v-btn>
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
