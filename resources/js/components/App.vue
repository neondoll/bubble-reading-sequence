<template>
    <v-app>
        <v-app-bar class="n-app-bar" color="#263238" dark flat>
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

            <v-menu bottom offset-x right transition="slide-x-transition" v-if="$isLogged">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-img max-width="12" :src="account"/>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-form action="/logout">
                                <v-btn class="btn-nav" color="#007BFF" text type="submit">Выход</v-btn>
                            </v-form>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <a href="#app" id="scroll_top" title="Наверх" hidden v-smooth-scroll/>

                <router-view data-app/>
            </v-container>
        </v-main>

        <v-footer>
            <div class="d-flex justify-content-start n-container">
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
            </div>
        </v-footer>
    </v-app>
</template>

<script>
import account from '@/assets/account.svg';
import appLogo from '@/assets/app-logo.svg';

export default {
    data: () => ({
        icons: {},
        account,
        appLogo
    }),
    mounted() {
        window.addEventListener('scroll', () => {
            document.getElementById('scroll_top').hidden = window.pageYOffset <= 100;
        });
    },
    name: "EntryPoint"
}
</script>

<style scoped lang="scss">
@import "../../sass/app.scss";

body {
    overflow: hidden;
}

.btn-nav {
    /*font-size: 16px;*/
    letter-spacing: 0;
    line-height: 1.2;
    text-transform: none;
    @extend .font-roboto-normal-normal;
}

.n-app-bar {
    @extend .n-container;
}

#scroll_top {
    //display: none;
    position: fixed;
    bottom: 30px;
    left: 30px;
    z-index: 1000;
    width: 35px;
    height: 35px;
    background: url(../../assets/btnTop.svg) 50% 50% no-repeat;
    border-radius: 50%;
    opacity: 0.5;
}

#scroll_top:hover {
    opacity: 1;
}
</style>
