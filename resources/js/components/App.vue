<template>
    <v-app>
        <v-app-bar app class="n-app-bar" color="#263238" dark flat>
            <v-img max-width="36" :src="appLogo"/>

            <v-toolbar-title class="font-roboto-normal-500"
                             style="font-size: 18px; line-height: 1.2; margin-left: 11px;">
                Управление имуществом
            </v-toolbar-title>

            <v-spacer/>

            <v-btn color="#FAFAFA" text>
                <span class="font-roboto-normal-500" style="font-size: 14px; line-height: 1.2; letter-spacing: 0.75px;">
                    Инструкции
                </span>
            </v-btn>

            <v-btn icon>
                <v-img max-width="12" :src="account"/>
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

        <v-footer app>
            <v-container class="d-flex justify-content-start">
                <div>
                    <div class="font-roboto-normal-300" style="color: black; font-size: 14px; line-height: 1.2;">
                        Техническая поддержка
                    </div>

                    <div class="font-roboto-normal-normal" style="color: black; font-size: 14px; line-height: 1.2;">
                        <v-icon color="black">mdi-phone</v-icon>

                        <span class="ml-2">8-495-989-84-47</span>
                    </div>

                    <div class="font-roboto-normal-normal" style="color: black; font-size: 14px; line-height: 1.2;">
                        <v-icon color="black">mdi-email</v-icon>

                        <span class="ml-2">ias@mirea.ru</span>
                    </div>
                </div>

                <div style="margin-left: 200px;">
                    <div class="font-roboto-normal-300" style="color: black; font-size: 14px; line-height: 1.2;">
                        Контакты Департамента
                    </div>

                    <div class="font-roboto-normal-normal" style="color: black; font-size: 14px; line-height: 1.2;">
                        <v-icon color="black">mdi-phone</v-icon>

                        <span class="ml-2">+7 (495) 547-13-45 (доб. 7174)</span>
                    </div>

                    <div class="font-roboto-normal-normal" style="color: black; font-size: 14px; line-height: 1.2;">
                        <v-icon color="black">mdi-email</v-icon>

                        <span class="ml-2">dp.dku@minobrnauki.gov.ru</span>
                    </div>
                </div>
            </v-container>
        </v-footer>
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
