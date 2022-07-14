<template>
    <v-alert class="pl-3 pr-3 pt-2 pb-2" prominent outlined>
        <m-p class="mgsu_blue" v-if="['admin','mon'].includes(comment.user.role)">Минобрнауки России</m-p>
        <m-p class="mgsu_blue" v-else-if="comment.user.role === 'mgsu'">Эксперт Минобрнауки России</m-p>
        <m-p v-else>{{ comment.user.email }}</m-p>
        <m-p>{{ comment.created_at }}</m-p>
        <m-p class="text--secondary">{{ comment.msg }}</m-p>

        <div v-if="comment.files.length > 0">
            <m-p class="mt-4">Прикрепленные файлы:</m-p>
            <m-p style="cursor: pointer" class="text--secondary" v-for="file in comment.files" :key="file.id"
                 @click="dwnFile(file.id)">{{ file.name }}
            </m-p>
        </div>
        <div style="position: relative; width: 100%; height: 40px">
            <v-btn v-if="$check(['admin', 'mon', 'mgsu'])" color="error" @click="delComment(comment.id)" text absolute right>Удалить</v-btn>
        </div>
    </v-alert>
</template>

<script>
import MP from '../MP';

export default {
  name: 'comment',
  components: {MP},
  props: ['comment'],
  methods: {
    async delComment(id) {
      await Axios.post('/kaprem/object/comment/delete', null, {
        params: {
          id,
        },
      });
      await this.$emit('delete');
    },
    async dwnFile(id) {
      let a = document.createElement('a');
      a.target = '_blanc';
      a.href = `/kaprem/object/comment/download/${id}`;
      a.click();
    },
  },
};
</script>

<style scoped>
.mgsu_blue {
    font-weight: bold;
    background: linear-gradient(180deg, #8450AD 0%, #3361FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

</style>
