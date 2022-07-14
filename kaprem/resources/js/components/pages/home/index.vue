<template>
    <m-page :loading="loading">
        <component :is="page" v-model="loading" :org_id="orgId"/>
    </m-page>
</template>

<script>

import MPage from '../../organisms/MPage';
import AdminMainPage from '../../templates/AdminMainPage';
import KapremTemplate from '../../templates/KapremTemplate';
import {ApiMixin} from '../../../mixins/ApiMixin';
import adminMainPage from '../../templates/AdminMainPage';
import kapremTemplate from '../../templates/KapremTemplate';

export default {
  name: 'home',
  components: {KapremTemplate, AdminMainPage, MPage},
  mixins: [ApiMixin],
  computed: {
    orgId() {
      return this.user?.org_id || null;
    },
    page() {
      if (this.loading) {
        return null;
      }
      if (this.$check(['admin', 'mon', 'mgsu'])) {
        return adminMainPage;
      }
      if (this.user && this.user.org_id) {
        return kapremTemplate;
      }
      return null;
    },
  },
  data: () => ({
    user: null,
    loading: true,
  }),
  async mounted() {
    this.user = await this.getUser();
    this.loading = false;
  },
};
</script>

<style scoped>

</style>
