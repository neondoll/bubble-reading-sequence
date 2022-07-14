<template>
    <v-card>
        <v-card-text>
            <v-data-table
                :loading="loading"
                :items="items"
                :headers="fields"
                :server-items-length="itemsLength"
                :options.sync="options"
                @click:row="simpleRowClick"
                style="cursor: pointer"
            >
                <template #item.org_name={item}>
                    <div>
                        {{ item.org_name }}
                    </div>
                </template>
                <template #item.file={item}>
                    <v-icon>mdi-file-pdf-box</v-icon>
                </template>
                <template #item.sent={item}>
                    <v-icon :color="item.sent ? 'success' : 'error'">{{ sentImg(item.sent) }}</v-icon>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
import { ApiMixin } from '../../../mixins/ApiMixin';
import { routeMixin } from '../../../mixins/routeMixin';
import { mdiCheckDecagramOutline, mdiAlertCircleOutline } from '@mdi/js';

export default {
    name: 'MAdminFilter',
    props: {
        items: {
            required: true
        }
    },
    mixins: [ ApiMixin, routeMixin ],
    async mounted () {
        await this.getData();
    },
    filters: {
        fileParse ( val ) {
            return val ? val.name : null;
        },

    },
    watch: {
        options ( val ) {
            this.$emit( 'update:options', val );
        },
    },
    methods: {
        simpleRowClick ( value ) {
            this.byRouteName( 'mainKaprem', { org_id: value.org_id } )
        },
        sentImg ( val ) {
            return val ? this.imgs.mdiCheckDecagramOutline : this.imgs.mdiAlertCircleOutline;
        },
        async getData () {
            this.loading = true;
            const { itemsPerPage, page } = this.options;

            const { data, paginatorInfo }
                = await this.getAdminFilter( { first: itemsPerPage, page }, { type: this.type } );

            this.items = data;
            this.itemsLength = paginatorInfo.count;
            this.loading = false;
        },
    },
    data: () => ( {
        imgs: {
            mdiCheckDecagramOutline, mdiAlertCircleOutline,
        },
        itemsLength: 0,
        options: {},
        loading: true,
        type: 'vus',
        fields: [
            {
                value: 'org_id',
                text: 'ID',
                align: 'center',
            },
            {
                value: 'region',
                text: 'Субъект',
            },
            {
                value: 'org_name',
                text: 'Организация',
            },
            {
                value: 'file',
                text: 'Выгрузка PDF',
                align: 'center',
            },
            {
                value: 'sent',
                text: 'Выгрузка отправлена',
                align: 'center',
            },
            {
                value: 'inn',
                text: 'ИНН',
                align: 'center',
            },
        ],
    } ),
};
</script>

<style scoped>
</style>
