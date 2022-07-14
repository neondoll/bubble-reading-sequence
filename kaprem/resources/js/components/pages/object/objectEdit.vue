<template>
    <div>
        <v-progress-linear
            v-if="loading"
            indeterminate
            color="cyan"
        ></v-progress-linear>

        <ObjectView
            v-if="!loading && dataLoaded && canUserEditThisObject"
            @saved="freashObject"
            :program="{}"
            :organization="organization"
            v-model="object"
        />

        <div v-if="!loading && dataLoaded && !canUserEditThisObject">
            <v-alert
                class="pa-5 mt-10"
                type="error"
            >У вас нет прав на редактирование этого объекта</v-alert>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
import { ApiMixin } from '../../../mixins/ApiMixin';
import ObjectView from '../../organisms/MObjectView/index.vue';

export default {
    mixins: [ ApiMixin ],
    components: { ObjectView },
    data () {
        return {
            organization: null,
            object: null,
            dataLoaded: false,
            canUserEditThisObject: false,
            loading: true
        }
    },
    async mounted () {
        await this.loadCryticalData();
        await this.getUserCanEditThisObject();
    },
    methods: {
        async getUserCanEditThisObject () {
            await Axios.post( '/kaprem/object/can-user-edit-object', { objectId: this.object.id } ).then( response => {
                console.log( 'full response', response );
                if ( response.data.Ok )
                    this.canUserEditThisObject = response.data.canEdit;
            } ).catch( () => {
                this.canUserEditThisObject = false
            } ).finally( () => {
                this.loading = false;
            } );
        },
        async loadCryticalData () {
            await this.freashObject();
            const generalData = await this.getProgramByOrgId( this.object.org_id ); //хахахахахахахахахахах через объект))
            this.organization = { ...generalData.org };
            this.dataLoaded = true;

        },
        async freashObject () {
            const id = this.$route.params.id;
            await Axios.get( `/kaprem/object/get-object/${id}` ).then( response => {
                this.object = response.data;
            } );
        }
    }
}
</script>

<style>
</style>