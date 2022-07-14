<template>
    <v-card v-if="ready">
        <v-card-text>
            <m-object-view v-if="object" :is-view="true" :organization="program.org" :program="program" :value="object"/>
            <v-alert v-else outlined type="error">
                Объект не найден!
            </v-alert>
        </v-card-text>
    </v-card>
    <v-skeleton-loader v-else type="table-heading, list-item-two-line, image, table-tfoot"/>
</template>

<script>
import MObjectView from '../../organisms/MObjectView';
import {ApiMixin} from '../../../mixins/ApiMixin';

export default {
  name: 'objectView',
  components: {MObjectView},
  data: () => ({
    program: null,
    ready: false,
    object: null,
  }),
  mixins: [ApiMixin],
  async mounted() {
    let id = this.$route.params.id;
    this.object = await this.getObject(id);
    this.program = await this.getProgramByOrgId(this.object.org_id);

    this.ready = true;
  },
};
</script>

<style scoped>

</style>
