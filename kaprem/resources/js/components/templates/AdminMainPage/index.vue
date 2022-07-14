<template>
    <div>
        <!-- Filters -->
        <v-navigation-drawer
            left
            app
            v-model="sideFilters"
        >
            <div class="pa-5">
                <v-text-field
                    label="ID организации"
                    outlined
                    clearable
                    v-model.number="filters.id"
                ></v-text-field>
                <v-text-field
                    label="Название организации"
                    outlined
                    clearable
                    v-model="filters.organization"
                ></v-text-field>
                <v-text-field
                    label="Субъект"
                    outlined
                    clearable
                    v-model="filters.region"
                ></v-text-field>
                <v-select
                    :items="[
                        {value: true, text: 'Выгружено'},
                        {value: false, text: 'Не выгружено'}
                    ]"
                    label="Выгрузка PDF"
                    outlined
                    clearable
                    v-model="filters.pdf"
                ></v-select>
                <v-select
                    :items="[
                        {value: true, text: 'Отправлена'},
                        {value: false, text: 'Не отправлена'}
                    ]"
                    label="Выгрузка отправлена"
                    outlined
                    clearable
                    v-model="filters.sent"
                ></v-select>
            </div>
        </v-navigation-drawer>
        <v-btn
            depressed
            elevation="2"
            icon
            @click="sideFilters = !sideFilters"
        >
            <v-icon>mdi-filter</v-icon>
        </v-btn>
        <v-card class="mt-2">
            <v-tabs v-model="tab">
                <v-tab>Вузы</v-tab>
                <v-tab>Научные организации</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-data-table
                        :loading="loading"
                        :items="itemsVus"
                        :headers="fields"
                        :server-items-length="itemsLengthVus"
                        :options.sync="optionsVus"
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
                </v-tab-item>
                <v-tab-item>
                    <v-data-table
                        :loading="loading"
                        :items="itemsNauch"
                        :headers="fields"
                        :server-items-length="itemsLengthNauch"
                        :options.sync="optionsNauch"
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
                </v-tab-item>
            </v-tabs-items>
        </v-card>
    </div>
</template>

<script>
import MAdminFilter from "../../organisms/MAdminFilter";
import axios from 'axios';
import { routeMixin } from "../../../mixins/routeMixin";
import { mdiFilter, mdiCheckDecagramOutline, mdiAlertCircleOutline } from "@mdi/js";

export default {
    name: "AdminMainPage",
    components: { MAdminFilter },
    mixins: [ routeMixin ],
    data () {
        return {
            tab: null,
            loading: true,
            itemsVus: [],
            itemsLengthVus: 0,
            itemsNauch: [],
            itemsLengthNauch: 0,
            optionsVus: { itemsPerPage: 10, page: 1 },
            optionsNauch: { itemsPerPage: 10, page: 1 },
            filtersTimer: null,
            sideFilters: false,
            filters: {
                id: null,
                region: null,
                organization: null,
                sent: null,
                pdf: null,
                objectOrderCount: null
            },
            imgs: {
                mdiCheckDecagramOutline,
                mdiAlertCircleOutline
            },
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
        }
    },
    async mounted () {
        this.refreshOrganizations();
    },
    methods: {
        async refreshOrganizations () {
            this.getOrganizationsVus( { page: this.optionsVus.page, first: this.optionsVus.itemsPerPage } );
            this.getOrganizationsNauch( { page: this.optionsNauch.page, first: this.optionsNauch.itemsPerPage } );
        },
        async getOrganizationsVus ( { page, first } ) {
            axios.post( '/kaprem/program/admin-filters', {
                page: page,
                first: first,
                type: 'vus',
                filters: JSON.stringify( this.filters )
            } ).then( res => {
                this.itemsVus = res.data.data;
                this.itemsLengthVus = res.data.paginatorInfo.count;
            } ).finally( () => {
                this.loading = false;
            } )
        },
        async getOrganizationsNauch ( { page, first } ) {
            axios.post( '/kaprem/program/admin-filters', {
                page: page,
                first: first,
                type: 'nauch',
                filters: JSON.stringify( this.filters )
            } ).then( res => {
                this.itemsNauch = res.data.data;
                this.itemsLengthNauch = res.data.paginatorInfo.count;
            } ).finally( () => {
                this.loading = false;
            } )
        },
        simpleRowClick ( value ) {
            this.byRouteName( 'mainKaprem', { org_id: value.org_id } )
        },
        sentImg ( val ) {
            return val ? this.imgs.mdiCheckDecagramOutline : this.imgs.mdiAlertCircleOutline;
        },
    },
    watch: {
        filters: {
            handler () {
                if ( this.filtersTimer ) this.filtersTimer = null;
                this.filtersTimer =
                    setTimeout( () => {
                        this.refreshOrganizations();
                    }, 800 );
            },
            deep: true
        },
        optionsVus: {
            handler () {
                this.refreshOrganizations();
            }
        },
        optionsNauch: {
            handler () {
                this.refreshOrganizations();
            }
        },
        sideFilters ( value ) {
            if ( !value ) this.filters = { id: null, region: null, organization: null, sent: null, pdf: null, objectOrderCount: null }
        }
    }
};
</script>

<style scoped></style>
