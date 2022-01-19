<template>
    <n-page label="Статистика" :breadcrumbs="breadcrumbs" :style="`height: ${height}px;`">
        <v-alert class="font-roboto-normal-normal mt-5" style="font-size: 16px; line-height: 24px;" type="info">
            Раздел находится в разработке
        </v-alert>
    </n-page>
</template>

<script>
import {ApiMixin, HelpersMixin} from "../../../mixins";
import {NPage} from "../../templates";

export default {
    components: {NPage},
    data: () => ({
        breadcrumbs: [
            {text: 'Управление имуществом', disabled: false, href: '/'},
            {text: 'Имущество Минобрнауки России', disabled: true},
            {text: 'Статистика', disabled: true}
        ],
        height: Math.max(window.innerHeight, document.documentElement.scrollHeight) - 164
    }),
    mixins: [ApiMixin, HelpersMixin],
    async mounted() {
        window.scrollTo(0, 0);
    },
    name: "PropertyMinistryStatistics"
}
</script>
