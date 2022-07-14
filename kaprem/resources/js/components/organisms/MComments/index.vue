<template>
    <div>
        <v-alert v-if="comments.length < 1" dense outlined>
            <p>
                Комментарии отсутствуют
            </p>
            <span>Но вы можете их добавить</span>
        </v-alert>
        <div id="scroll" class="overflow-auto" style="height: 200px;" v-else>
            <div v-for="(comment, index) in comments" :key="comment.id">
                <comment @delete="getComments" :comment="comment"/>
            </div>
        </div>

        <v-form @submit.prevent="submit" class="form">
            <v-text-field name="msg" placeholder="НОВЫЙ КОММЕНТАРИЙ..." hide-details dense/>
            <v-row>
                <v-col cols="10">
                    <v-file-input name="file" dense hide-details/>
                </v-col>
                <v-col cols="2" class="d-flex justify-end align-center">
                    <v-btn small type="submit" outlined>Добавить</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>

import MP from '../MP';
import Comment from './comment';

export default {
  name: 'MComments',
  components: {Comment, MP},
  props: ['obj_id'],
  watch: {},
  data: () => ({
    comments: [],
  }),
  computed: {},
  async mounted() {
    await this.obj_id;
    await this.getComments();
    if (this.comments.length > 0) {
      this.scroll();
    }
  },
  methods: {
    scroll() {
      const div = document.getElementById('scroll');
      div.scrollTop = div.scrollHeight - div.clientHeight;
    },
    async submit(e) {
      let frm = new FormData(e.target);
      frm.append('obj_id', this.obj_id);
      await Axios.post('/kaprem/object/comment/save', frm);
      await this.getComments();
    },
    async getComments() {
      this.comments = (await Axios.get('/kaprem/object/comment/all', {
        params: {
          obj_id: this.obj_id,
        },
      })).data;
    },
  },
};
</script>

<style lang="scss" scoped>

#scroll:hover {
  div {
    transition: all 0.5s ease;
    margin: 5px 5px;
  }
}

.form {
  border: solid 1px;
  border-radius: 5px;
  padding: 5px 15px
}
</style>
