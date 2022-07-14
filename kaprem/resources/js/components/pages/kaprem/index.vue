<template>
    <m-page :loading="loading" :pages="{text:'Список объектов', disabled: true}">
        <kaprem-template v-model="loading" :org_id="org_id"/>
    </m-page>
</template>

<script>

import MPage from '../../organisms/MPage';
import KapremTemplate from '../../templates/KapremTemplate';

export default {
  name: 'kaprem',
  components: {KapremTemplate, MPage},
  data: () => ({
    org_id: null,
    loading: true,
  }),
  mounted() {
    this.org_id = parseInt(this.$route.params.org_id);
    this.loading = false;
  },
  computed: {},
};
</script>

<style scoped>

</style>
