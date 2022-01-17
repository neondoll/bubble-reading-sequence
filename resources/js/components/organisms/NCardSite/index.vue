<template>
    <router-link class="d-flex align-items-center n-card" v-if="site.href_in_project && site.href"
                 :to="{path: site.href}">
        <div>
            <v-img max-width="38.5" :src="icons[site.icon]">
                <template v-slot:placeholder>
                    <v-row align="center" class="fill-height ma-0" justify="center">
                        <v-progress-circular color="grey lighten-5" indeterminate/>
                    </v-row>
                </template>
            </v-img>
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
            <v-img max-width="38.5" :src="icons[site.icon]">
                <template v-slot:placeholder>
                    <v-row align="center" class="fill-height ma-0" justify="center">
                        <v-progress-circular color="grey lighten-5" indeterminate/>
                    </v-row>
                </template>
            </v-img>
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
</template>

<script>
import {
    vector1, vector2, vector3, vector4, vector5, vector6, vector7, vector8, vector9, vector10, vector11, vector12,
    vector13, vector14, vector15, vector16, vector17, vector18, vector19, vector20, vector21, vector22, vector23
} from "../../../../assets/vectors";

export default {
    computed: {
        href() {
            let str = this.site.href
            if (this.site.need_token) {
                str += this.$authData.auth_key
            }
            return str
        }
    },
    data: () => ({
        icons: {
            vector1, vector2, vector3, vector4, vector5, vector6, vector7, vector8, vector9, vector10, vector11,
            vector12, vector13, vector14, vector15, vector16, vector17, vector18, vector19, vector20, vector21,
            vector22, vector23
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
@import "../../atoms/NCard/NCard.scss";
</style>
