<template>
    <div>
        <v-simple-table>
            <colgroup span="3" width="100%">
                <col span="1" width="45%">
                <col span="1" width="45%">
                <col span="1" width="5%" align="right">
            </colgroup>
            <tr>
                <th>Цели и задачи</th>
                <th>Планируемый показатель</th>
                <th>Единица измерения</th>
            </tr>
            <tr v-for="(item, index) in firstData" :key="index">
                <td>
                    <div class="pa-2">
                        <v-text-field solo hide-details v-model="item.aim" v-if="item.element >= 5"/>
                        <span v-else>{{ item.aim }}</span>
                    </div>
                </td>
                <td>
                    <div class="pa-2">
                        <div>
                            <v-select hide-details v-if="item.boolean" v-model="item.plan" :items="[
                                { value: 0, text: 'нет' },
                                { value: 1, text: 'да' }
                            ]"/>
                            <v-text-field type="number" solo hide-details v-else v-model.number="item.plan"/>
                        </div>

                    </div>

                </td>
                <td>
                    <div class="pa-2">
                        <v-text-field solo hide-details v-model="item.changes" v-if="item.element >= 5"/>
                        <span class="align-middle" v-else>{{ item.changes }}</span>
                    </div>

                </td>
            </tr>
            <tr>
                <td colspan="3">&nbsp;</td>
            </tr>
            <tr>
                <td colspan="2">
                    <div class="mr-2">
                        <v-btn outlined color="primary" block @click="addRow">Добавить строку</v-btn>
                    </div>
                </td>
                <td>
                    <v-btn outlined @click="deleteRow" color="error">Удалить строку</v-btn>
                </td>
            </tr>
        </v-simple-table>
        <div class="d-flex justify-end">
            <v-btn class="mt-2" outlined color="success" @click="save">Сохранить</v-btn>
        </div>

    </div>

</template>

<script>
export default {
  name: 'objectWaited',
  props: {
    'models': {required: true}, 'obj_id': {required: true},
  },
  watch: {
    immediate: true,
    models: {
      deep: true,
      handler() {
        this.updateData();
      },
    },
  },
  mounted() {
    this.updateData();
  },
  methods: {
    updateData() {
      this.models.forEach(item => {
        let i = this.firstData.findIndex(item2 => item2.element === item.element);
        if (i >= 0 && this.firstData[i]) {
          if (this.firstData[i].element < 5) {
            let {aim, changes, boolean} = this.firstData[i];
            this.firstData[i] = {
              ...item,
              plan: item.plan === '0' || item.plan === '1' ? parseInt(item.plan) : item.plan,
              aim,
              changes,
              boolean,
            };
          }
        }
        else {
          this.firstData.push(item);
        }
      });

      this.$forceUpdate();
    },
    async save() {
      this.loading = true;
      const form = new FormData();
      form.append('data', JSON.stringify(this.firstData));
      const post = Axios.post('/kaprem/object/waited/save', form, {
        params: {
          obj_id: this.obj_id,
        },
      });
      post.then(async () => {
        await this.$emit('saved');
        this.loading = false;
      });
      post.catch(async () => {
        await this.$emit('error');
        this.loading = false;
      });
      await post;
    },
    deleteRow() {
      let elem = Math.max(...this.firstData.map(item => item.element));
      if (elem <= 4) {
        return;
      }
      let index = this.firstData.findIndex(item => item.element === elem);
      this.firstData.splice(index, 1);
    },
    addRow() {
      let elem = Math.max(...this.firstData.map(item => item.element));
      this.firstData.push({
        aim: null,
        plan: null,
        changes: null,
        element: elem + 1,
      });
    },
  },
  data: () => ({
    loading: false,
    firstData: [
      {
        element: 0,
        aim: 'Площадь капитального ремонта',
        plan: null,
        changes: 'кв.м (пог.м)',
        boolean: false,
      },
      {
        element: 1,
        aim:
            'Вовлечение в хозяйственную деятельность за счет проведенного капитального ремонта, общая площадь',
        plan: null,
        changes: 'кв.м',
        boolean: false,
      },
      {
        element: 2,
        aim: 'Снижение затрат на эксплуатацию',
        plan: 0,
        changes: '',
        boolean: true,
      },
      {
        element: 3,
        aim: 'Повышение энергоэффективности',
        plan: 0,
        changes: '',
        boolean: true,
      },
      {
        element: 4,
        aim:
            'Восстановление (ремонт, реставрация, за исключением реконструкции) объектов культурного наследия',
        plan: 0,
        changes: '',
        boolean: true,
      },
    ],
  }),
};
</script>

<style scoped>

</style>
