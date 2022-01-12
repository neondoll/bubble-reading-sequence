<template>
    <v-lazy transition="fade-transition" v-model="site.isActive" :options="{threshold: .5}">
        <transition name="bounce">
            <router-link class="d-flex align-items-center n-card" v-if="site.href_in_project && site.href"
                         :to="{path: site.href}">
                <div>
                    <v-img max-width="38.5" :src="icons[site.icon]"/>
                </div>

                <div style="margin-left: 18.67px;">
                    <div class="font-roboto-normal-500" style="color: #343A40; font-size: 14px; line-height: 1.2;">
                        {{ site.title }}
                    </div>

                    <div class="font-roboto-normal-normal"
                         style="color: #6C757D; font-size: 9px; line-height: 1.2; margin-top: 5px;">
                        {{ site.text }}
                    </div>
                </div>
            </router-link>
            <a class="d-flex align-items-center n-card" target="_blank" v-else :href="href">
                <div>
                    <v-img max-width="38.5" :src="icons[site.icon]"/>
                </div>

                <div style="margin-left: 18.67px;">
                    <div class="font-roboto-normal-500" style="color: #343A40; font-size: 14px; line-height: 1.2;">
                        {{ site.title }}
                    </div>

                    <div class="font-roboto-normal-normal"
                         style="color: #6C757D; font-size: 9px; line-height: 1.2; margin-top: 5px;">
                        {{ site.text }}
                    </div>
                </div>
            </a>
        </transition>
    </v-lazy>
</template>

<script>
import {
    vector1, vector2, vector3, vector4, vector5, vector6, vector7, vector8, vector9, vector10, vector11, vector12,
    vector13, vector14, vector15, vector16, vector17, vector18, vector19
} from "../../../../assets/vectors";

export default {
    computed: {
        href() {
            let str = this.site.href
            console.log(this.site.need_token)
            if (this.site.need_token) {
                str += $authData.auth_key
            }
            return str
        }
    },
    data: () => ({
        icons: {
            vector1, vector2, vector3, vector4, vector5, vector6, vector7, vector8, vector9, vector10, vector11,
            vector12, vector13, vector14, vector15, vector16, vector17, vector18, vector19
        },
    }),
    name: "NCardSite",
    props: {
        site: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
.n-card {
    background: #F8F9FA;
    border: 0.2px solid #DFDFDF;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    height: 102px;
    margin: 12.5px 10px;
    padding: 12px 15px;
    text-decoration: none;
    width: 255px;

    &:-webkit-any-link {
        cursor: pointer;
        opacity: 1;
        pointer-events: auto;
    }

    &:not(:-webkit-any-link) {
        cursor: default;
        opacity: 0.4;
        pointer-events: none;
    }
}
</style>
