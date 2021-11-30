<template>
    <v-app>
        <v-app-bar app class="n-app-bar" color="#263238" dark flat>
            <v-img :src="appLogo" max-width="35"/>

            <v-toolbar-title class="font-roboto-normal-500" style="margin-left: 11px;">
                Управление имуществом
            </v-toolbar-title>

            <v-spacer/>

            <v-btn text>Инструкции</v-btn>

            <v-btn icon>
                <v-img max-width="16" :src="account"/>
            </v-btn>

            <v-card v-if="$isLogged" flat>
                <v-form action="/logout">
                    <v-btn color="primary" class="btn-nav" type="submit">Выход</v-btn>
                </v-form>
            </v-card>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <router-view data-app/>
            </v-container>
        </v-main>

        <v-footer app>&nbsp;</v-footer>
    </v-app>
</template>

<script>
import account from '@/assets/account.svg';
import appLogo from '@/assets/app-logo.svg';

export default {
    name: "EntryPoint",
    data: () => ({
        icons: {},
        account,
        appLogo
    })
}
</script>

<style scoped>
body {
    overflow: hidden;
}

.btn-nav {
    box-shadow: none !important;
    border-radius: unset;
}

.btn-nav:hover {
    text-decoration: underline;
}

.n-app-bar {
    padding-left: 7.81%;
    padding-right: 7.81%;
}
</style>
