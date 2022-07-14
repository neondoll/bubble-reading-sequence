<template>
    <div>
        <div class="title">
            Строительные конструкции
        </div>
        <v-tabs vertical height="350px" v-model="tab">
            <!--    <div class="overflow-auto" style="height: 350px">-->

            <v-tab class="justify-start">
                Фундаменты
            </v-tab>
            <v-tab class="justify-start">
                Отмостка
            </v-tab>
            <v-tab class="justify-start">
                Стены
            </v-tab>
            <v-tab class="justify-start">
                Колонны
            </v-tab>
            <v-tab class="justify-start">
                Перегородки
            </v-tab>
            <v-tab class="justify-start">
                Крыша (покрытия)
            </v-tab>
            <v-tab class="justify-start">
                Кровля
            </v-tab>
            <v-tab class="justify-start">
                Перекрытия
            </v-tab>
            <v-tab class="justify-start">
                Полы
            </v-tab>
            <v-tab class="justify-start">
                Окна
            </v-tab>
            <v-tab class="justify-start">
                Двери
            </v-tab>
            <v-tab class="justify-start">
                Ворота
            </v-tab>
            <v-tab class="justify-start">
                Лестницы
            </v-tab>
            <v-tab class="justify-start">
                Крыльца
            </v-tab>
            <v-tab class="justify-start">
                Балконы/лоджии
            </v-tab>
            <v-tab class="justify-start">
                Внутренняя отделка
            </v-tab>
            <v-tab class="justify-start">
                Наружная отделка
            </v-tab>
            <!--    </div>-->
            <v-tabs-items v-model="tab">
                <v-tab-item v-for="e in activities" :key="e.step">
                    <v-card>
                        <v-card-text>


                            <v-checkbox hide-details label="Наличие на объекте" v-model="e.p01"/>
                            <v-textarea hide-details rows="1" label="Материал конструкции" v-model="e.p02"/>
                            <v-textarea
                                    hide-details
                                    rows="1"
                                    label="Срок эксплуатации с момента строительства или предыдущего капитального ремонта"
                                    v-model="e.p03"/>
                            <v-checkbox hide-details rows="1" label="Требуется капитальный ремонт" v-model="e.p04"/>
                            <v-textarea hide-details rows="1" label="Обоснование необходимости" v-model="e.p05"/>


                        </v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-tabs>

        <div class="title mt-5">
            Системы инженерно-технического обеспечения
        </div>

        <v-tabs height="400px" vertical v-model="tab2">
            <!--    <div class="overflow-auto" style="height: 350px">-->

            <v-tab class="justify-start">
                <span>Электроснабжение</span>
            </v-tab>
            <v-tab class="justify-start">
                <span>Водоснабжение</span>
            </v-tab>
            <v-tab class="justify-start">
                <span>Водоотведение</span>
            </v-tab>
            <v-tab class="justify-start">
                <span>Газоснабжение</span>
            </v-tab>
            <v-tab class="justify-start">
                <span>Кондиционирование</span>
            </v-tab>
            <v-tab class="justify-start">
                <span>Вентиляция</span>
            </v-tab>
            <v-tab class="justify-start">
                <span>Отопление</span>
            </v-tab>
            <v-tab class="justify-start">
                <span>Диспетчеризация</span>
            </v-tab>
            <v-tab class="justify-start">
                <span>Радиофикация</span>
            </v-tab>
            <v-tab class="justify-start">
                <span>Телевидение</span>
            </v-tab>
            <v-tab class="justify-start">
                <span>Видеонаблюдение</span>
            </v-tab>
            <v-tab class="justify-start">
                <span>Интернет, телефония</span>
            </v-tab>
            <v-tab class="justify-start">
                <span>СКУД</span>
            </v-tab>
            <v-tab class="justify-start">
                <span>Пожарная сиг-я</span>
            </v-tab>
            <v-tab class="justify-start">
                <span>Охранная сиг-я</span>
            </v-tab>
            <v-tab class="justify-start">
                <span>Мусоропроводы</span>
            </v-tab>
            <v-tab class="justify-start">
                <span>Лифты</span>
            </v-tab>
            <!--    </div>-->
            <v-tabs-items v-model="tab2">
                <v-tab-item v-for="e in activities2" :key="e.step">
                    <v-card>
                        <v-card-text>
                            <v-checkbox label="Наличие на объекте" v-model="e.p01"/>
                            <v-textarea hide-details rows="1"
                                        label="Срок эксплуатации с момента строительства или предыдущего капитального ремонта"
                                        v-model="e.p03"/>
                            <v-checkbox label="Требуется капитальный ремонт" v-model="e.p04"/>
                            <v-textarea hide-details rows="1" type="date" label="Обоснование необходимости"
                                        v-model="e.p05"/>

                        </v-card-text>

                    </v-card>
                </v-tab-item>
            </v-tabs-items>

        </v-tabs>
        <div class="d-flex justify-end">
            <v-btn outlined color="success" :loading="loading" @click="save">Сохранить</v-btn>
        </div>

    </div>

</template>

<script>
export default {
  name: 'objectActivities',
  props: ['obj_id', 'models'],
  computed: {
    activities() {

      return this.labels[0].map(item => {
        const val = this.models.find(model => model.type === 0 && model.stage === item.stage) || {};
        return {
          ...item,
          type: 0,
          ...val,
        };
      });
    },
    activities2() {
      return this.labels[1].map(item => {
        const val = this.models.find(model => model.type === 1 && model.stage === item.stage) || {};
        return {
          ...item,
          type: 1,
          ...val,
        };
      });
    },
  },
  methods: {
    async save() {
      this.loading = true;
      let sata = new FormData();
      sata.append('data', JSON.stringify(this.activities.concat(this.activities2)));
      const post = Axios.post('/kaprem/object/activities/save', sata, {
        params: {
          obj_id: this.obj_id,
        },
      });
      post.then(async () => {
        await this.$emit('saved');
        setTimeout(() => {
          this.loading = false;
        }, 1000);

      });
      await post;

    },
  },
  data() {
    return {
      loading: false,
      tab: null,
      tab2: null,
      labels: {
        0: [
          {stage: 1},
          {stage: 2},
          {stage: 3},
          {stage: 4},
          {stage: 5},
          {stage: 6},
          {stage: 7},
          {stage: 8},
          {stage: 9},
          {stage: 10},
          {stage: 11},
          {stage: 12},
          {stage: 13},
          {stage: 14},
          {stage: 15},
          {stage: 16},
          {stage: 17},
        ],
        1: [
          {stage: 1},
          {stage: 2},
          {stage: 3},
          {stage: 4},
          {stage: 5},
          {stage: 6},
          {stage: 7},
          {stage: 8},
          {stage: 9},
          {stage: 10},
          {stage: 11},
          {stage: 12},
          {stage: 13},
          {stage: 14},
          {stage: 15},
          {stage: 16},
          {stage: 17},
        ],
      },
    };
  },
};
</script>

<style scoped>
::v-deep.v-input--selection-controls {
    margin-top: 0 !important;
}

.activity2 {
    /*white-space: break-spaces;
    width: 180px;
    text-align: left;*/
}
</style>
