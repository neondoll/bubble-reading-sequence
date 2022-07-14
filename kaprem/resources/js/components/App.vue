<template>
    <v-theme-provider>
        <v-app>
            <v-app-bar app>
                <v-btn class="btn-nav n-title" color="primary" href="/" text>Программа капитального ремонта</v-btn>
                <v-spacer/>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </v-app-bar>
            <v-navigation-drawer right app v-model="drawer">
                <template v-slot:append>
                    <v-form action="/logout" class="pa-2" v-if="$isLogged" @submit="$cache.clear()">
                        <v-btn block color="primary" text type="submit">Выход</v-btn>
                    </v-form>
                </template>
                <v-list dense nav>
                    <v-list-item href="/home">
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Домой</v-list-item-title>
                    </v-list-item>
                    <v-list-item :to="{name:'Info'}">
                        <v-list-item-icon>
                            <v-icon>{{ mdiInformationOutline }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Информация</v-list-item-title>
                    </v-list-item>
                    <v-list-group prepend-icon="mdi-help">
                        <template #activator>
                            <v-list-item-title>
                                Типовые вопросы
                            </v-list-item-title>
                        </template>
                        <template class="ml-4" #default>
                            <v-list-item target="_blank" href="/download/prilozhenie-tipovye-voprosy-vuzy">
                                <v-list-item-icon>
                                    <v-icon>mdi-help-circle</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Организации высшего образования</v-list-item-title>
                            </v-list-item>
                            <v-list-item target="_blank" href="/download/prilozhenie-tipovye-voprosy-nauchnye-organizacii">
                                <v-list-item-icon>
                                    <v-icon>mdi-help-circle</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Научные организации</v-list-item-title>
                            </v-list-item>
                        </template>
                    </v-list-group>
                    <v-list-group>
                        <template #activator>
                            <v-list-item-icon>
                                <v-icon>mdi-cash</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Целевые Субсидии</v-list-item-title>
                        </template>
                        <template class="ml-4" #default>
                            <v-list-item :to="{name: 'Subsidies', params: {code: '02-01'}}">
                                <v-list-item-icon>
                                    <v-icon>mdi-cash</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>02-01</v-list-item-title>
                            </v-list-item>
                            <v-list-item :to="{name: 'Subsidies', params: {code: '02-08'}}">
                                <v-list-item-icon>
                                    <v-icon>mdi-cash</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>02-08</v-list-item-title>
                            </v-list-item>
                            <v-list-item :to="{name: 'Subsidies', params: {code: '02-10'}}">
                                <v-list-item-icon>
                                    <v-icon>mdi-cash</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>02-10</v-list-item-title>
                            </v-list-item>
                        </template>
                    </v-list-group>
                    <v-list-item href="https://xn--2-7sbpsmggfjy.xn--80apneeq.xn--p1ai/">
                        <v-list-item-icon>
                            <v-icon>mdi-hammer-screwdriver</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Архив</v-list-item-title>
                    </v-list-item>
                    <v-list-item href="https://xn--2-7sbpsmggfjy.xn--80apneeq.xn--p1ai/">
                        <v-list-item-icon>
                            <v-icon>mdi-hammer-screwdriver</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Потребность</v-list-item-title>
                    </v-list-item>
                    <!--                    <v-list-group v-if="$isLogged" prepend-icon="mdi-cash-multiple">
                                            <template #activator>
                                                <v-list-item-title>
                                                    Целевые Субсидии
                                                </v-list-item-title>
                                            </template>
                                            <template class="ml-4" #default>

                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon>mdi-cash</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-title>2022</v-list-item-title>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon>mdi-cash</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-title>2021</v-list-item-title>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon>mdi-cash</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-title>2020</v-list-item-title>
                                                </v-list-item>

                                            </template>
                                        </v-list-group>-->
                    <!--                    <v-list-group v-if="$isLogged" :prepend-icon="mdiAccountHardHat">
                                            <template #activator>
                                                <v-list-item-title>
                                                    Архив
                                                </v-list-item-title>
                                            </template>
                                            <template class="ml-4" #default>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon>mdi-hammer-screwdriver</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-title>2020</v-list-item-title>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-icon>
                                                        <v-icon>mdi-hammer-screwdriver</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-title>2021</v-list-item-title>
                                                </v-list-item>
                                            </template>
                                        </v-list-group>-->
                </v-list>
            </v-navigation-drawer>
            <v-main app>
                <div id="img-box">
                    <div id="img"></div>
                </div>
                <v-container fluid class="pt-0">
                    <v-slide-x-transition>
                        <router-view data-app/>
                    </v-slide-x-transition>
                </v-container>
            </v-main>
            <v-footer app>
                <v-container class="pa-0 n-footer-container-text">
                    <div class="font-roboto-normal-normal ml-10 text-center">
                        КОНТАКТНАЯ ИНФОРМАЦИЯ
                    </div>
                    <div class="d-flex justify-center font-roboto-normal-normal mt-2">
                        <div class="mr-5">
                            <div class="font-roboto-normal-bold px-2 py-0" style="vertical-align: middle;">
                                Техническая поддержка сайта:
                            </div>
                            <div class="font-roboto-normal-normal px-2 py-0" style="vertical-align: middle;">
                                Тел.: +7 (495) 989-84-47 (многоканальный)<br>
                                Почта: ias@mirea.ru <br>
                                Методическая поддержка сайта: support_monitoring@mirea.ru
                            </div>
                        </div>
                        <v-divider vertical style="border-color: #1a202c"/>
                        <div class="d-flex justify-center align-items-center ml-5">
                            <img alt="app logo footer" height="60px" :src="appLogoFooter"/>
                            <div class="font-roboto-normal-normal ml-2">
                                МИНИСТЕРСТВО НАУКИ<br>И ВЫСШЕГО ОБРАЗОВАНИЯ<br>РОССИЙСКОЙ ФЕДЕРАЦИИ
                            </div>
                        </div>
                    </div>
                </v-container>
            </v-footer>
        </v-app>
    </v-theme-provider>
</template>

<script>
import {mdiInformationOutline, mdiAccountHardHat} from '@mdi/js';
import appLogoFooter from '@/assets/app-logo-footer.png';
import gerb from '../../assets/gertb.svg';

export default {
    name: 'EntryPoint',
    watch: {
        $route(to, from) {
            const toDepth = to.path.split('/').length;
            const fromDepth = from.path.split('/').length;
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
        },
    },
    data: () => ({
        gerb,
        drawer: false,
        group: null,
        mdiInformationOutline,
        mdiAccountHardHat,
        appLogoFooter,
        transitionName: null,
    }),
};
</script>

<style lang="scss" scoped>

#img-box {
    #img {
        background: url(../../assets/bg-main.png) no-repeat;
        background-size: contain;
        height: 500px;
        width: 500px;
        position: fixed;
        top: 100px;
        right: 15vw;
    }

}


.btn-nav {
    background-color: #f5f5f5;

    &:hover {
        text-decoration: underline;
    }
}

.n-title {
    background: linear-gradient(180deg, #8450AD 0%, #3361FF 100%);
    // font-family: 'Tinos', serif;
    -webkit-background-clip: text;
    //-webkit-text-fill-color: transparent;
    // color: blue;
}

.n-footer-container-text {
    font-size: 13.5px;
    line-height: 15.75px;
}

.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
}

.slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
}
</style>
