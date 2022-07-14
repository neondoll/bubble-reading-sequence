<template>
    <div v-if="ready">
        <div class="object-events__edit" v-if="!block && edit">
            <v-tabs class="align-items-baseline" vertical v-model="tab">
                <v-tab>
                    1. Вид ремонта
                </v-tab>
                <v-tab>
                    2. Обследование
                </v-tab>
                <v-tab>
                    3. ПСД
                </v-tab>
                <v-tab>
                    4. ГГЭ
                </v-tab>
                <v-tab>
                    5. СМР
                </v-tab>
                
                <v-tab-item v-for="(e, index) in events" :key="index">
                    <v-card flat>
                        <v-card-text>
                            <m-errors :errors="e.errors"/>

                            <template v-for="column in currentColumns">
                                <v-select v-if="column.type==='select'" return-object
                                          :disabled="column.disabled || false"
                                          item-text="label"
                                          item-value="id"
                                          :items="getSelect"
                                          clearable
                                          hide-details
                                          :label="column.label" v-model="e.type"/>

                                <div v-if="e.type">
                                    <m-row-label v-if="column.type==='label' && e.type.value" :label="column.label"/>
                                    <v-text-field
                                        clearable
                                        v-else-if="column.type !== 'select' && e.type.value" :type="column.type"
                                        hide-details :label="column.label"
                                        v-model="e[column.column]"/>
                                </div>
                                <div v-else-if="!currentColumns.find(col=>col.type === 'select')">
                                    <m-row-label v-if="column.type==='label'" :label="column.label"/>
                                    <v-text-field v-else :type="column.type"
                                                  clearable
                                                  hide-details :label="column.label"
                                                  v-model="e[column.column]"/>
                                </div>

                            </template>

                            <v-expansion-panels v-if="isReal" class="mt-5" v-model="d2">
                                <v-expansion-panel v-for="(e2, index2) in e.events" :key="index2">
                                    <v-expansion-panel-header>
                                        {{ e2.stage }} {{ e2.text }}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-card flat>
                                            <v-card-text v-if="!block">
                                                <m-errors :errors="e2.errors"/>
                                                <v-text-field type="date" label="Дата начала" v-model="e2.p02"/>
                                                <v-text-field type="date" label="Дата окончания" v-model="e2.p03"/>
                                                <v-text-field :label="labelP04" v-model="e2.p04"/>
                                                <v-text-field
                                                    :label="labelP05"
                                                    v-model="e2.p05"/>
                                                <v-text-field :label="labelP06"
                                                              v-model="e2.p06"/>

                                                <v-checkbox label="Отметка о завершении этапа"
                                                            v-model="e2.end_stage"/>
                                                <v-alert outlined type="warning">
                                                    <v-row v-if="!isFileFromServer(e2.file)">
                                                        <v-col>
                                                            <v-text-field v-model="e2.label" label="Наименование"/>
                                                        </v-col>
                                                        <v-col>
                                                            <v-file-input v-model="e2.file"
                                                                          label="файл"/>
                                                        </v-col>
                                                    </v-row>
                                                    <div v-else>
                                                        {{ e2.label }}
                                                        <div class="d-flex justify-space-between">
                                                            <a target="_blank"
                                                               :href="`/kaprem/object/event/file/download/${e2.file.id}`">
                                                                {{ e2.file.name }}</a>
                                                            <v-btn @click="deleteEventFile(e2.file, index, index2)" icon
                                                                   color="error">
                                                                <v-icon>mdi-delete</v-icon>
                                                            </v-btn>
                                                        </div>
                                                    </div>
                                                </v-alert>

                                                <v-text-field label="Комментарий"
                                                              v-model="e2.comment"/>
                                                <v-checkbox label="Эксперт МОН +/-"
                                                            v-model="e2.exp_mon"/>
                                                <v-text-field label="Комментарий эксперта МОН"
                                                              v-model="e2.comment_mon"/>

                                                <v-btn outlined color="error"
                                                       @click="deleteEvent(e2.id,index, index2)">
                                                    Удалить
                                                </v-btn>
                                            </v-card-text>

                                        </v-card>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                            </v-expansion-panels>
                            <v-btn class="mt-3" v-if="isReal" outlined color="primary"
                                   @click="addEvent(index)">
                                Добавить
                            </v-btn>

                        </v-card-text>

                    </v-card>
                </v-tab-item>
            </v-tabs>
            <div v-if="!block" class="d-flex justify-md-end justify-lg-end justify-sm-end mb-4">
                <v-btn outlined
                       :loading="loading"
                       color="success"
                       @click="save">
                    Сохранить
                </v-btn>
            </div>
        </div>
        <div class="object-events__read" v-else>
            <div v-if="!block" class="d-flex justify-md-end justify-lg-end justify-sm-end mb-4">
                <v-btn outlined
                       :loading="loading"
                       color="warning"
                       @click="edit = true">
                    Редактировать
                </v-btn>
            </div>
            <v-simple-table>
                <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Этап
                    </th>
                    <th v-if="!isReal">
                        Необходимость выполнения (да/нет)
                    </th>
                    <th v-if="!isReal">
                        Дата начала (план.)
                    </th>
                    <th>
                        Дата окончания (план.)
                    </th>
                    <th>
                        {{ labelP04 }}
                    </th>
                    <th>
                        {{ labelP05 }}
                    </th>
                    <th>
                        {{ labelP06 }}
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in tableRows" :key="index">
                    <td>{{ item.stage }}</td>
                    <td>{{ item.label }}</td>
                    <td v-if="!isReal">{{ item.type }}</td>
                    <!-- <td v-if="!isReal">{{ item.p02 }}</td> -->
                    <td v-if="!isReal">{{ formatDateIfItIsDate(item.p02) }}</td>
                    <td>{{ formatDateIfItIsDate(item.p03) }}</td>
                    <td>{{ item.p04 }}</td>
                    <td>{{ item.p05 }}</td>
                    <td>{{ item.p06 }}</td>
                </tr>
                <tr>
                    <td colspan="2" class="font-weight-bold">Итого</td>
                    <td class="font-weight-bold" v-if="!isReal">-</td>
                    <td class="font-weight-bold" v-if="!isReal">-</td>
                    <td class="font-weight-bold">-</td>
                    <td class="font-weight-bold">-</td>
                    <td class="font-weight-bold">{{ this.finance }}</td>
                    <td class="font-weight-bold">{{ this.coFinance }}</td>
                </tr>
                </tbody>
            </v-simple-table>
        </div>


    </div>

</template>

<script>
import {objectEventsMixin} from '../../../mixins/objectEventsMixin';
import MRowLabel from '../MRowLabel';
import MErrors from '../MErrors';
import {ApiMixin} from '../../../mixins/ApiMixin';

export default {
    name: 'objectEvents',
    components: {MErrors, MRowLabel},

    props: {
        'models': {
            required: true,
        },
        'obj_id': {required: true},
        'isReal': {type: Boolean},
        'block': {type: Boolean},
        'depStatus': {
            required: true
        },
        finance: {required: true},
        coFinance: {required: true},
    },
    data: () => ({
        edit: false,
        loading: false,
        events: [],
        tab: 0,
        d1: null,
        ready: false,
        d2: null,
        stageLabels: [],
        stageColumns: {
            1: [
                {
                    column: 'type_id',
                    type: 'select',
                    disabled: false,
                    label: 'Вид планируемого мероприятия',
                },
                {
                    column: 'p07',
                    type: 'text',
                    label: 'Краткое описание планируемых работ',
                },
            ],
            2: [
                {
                    column: 'type_id',
                    type: 'select',
                    label: 'Техническое обследование',
                },
                {
                    column: 'p02',
                    type: 'date',
                    label: 'Планируемые сроки выполнения: Начало',
                },
                {
                    column: 'p03',
                    type: 'date',
                    label: 'Планируемые сроки выполнения: Окончание',
                },
                {
                    column: 'p06',
                    type: 'number',
                    label: 'Ппланируемая стоимость работ (внебюджетные средства) ',
                },
            ],
            3: [
                {
                    column: 'type_id',
                    type: 'select',
                    label: 'Проектно-сметная (сметная) документация',
                },
                {
                    column: 'p02',
                    type: 'date',
                    label: 'Планируемые сроки выполнения: Начало',
                },
                {
                    column: 'p03',
                    type: 'date',
                    label: 'Планируемые сроки выполнения: Окончание',
                },
                {
                    type: 'label',
                    label: 'Планируемая стоимость работ: ',
                },
                {
                    column: 'p06',
                    type: 'number',
                    label: 'Внебюджетные средства',
                },
                {
                    column: 'p05',
                    type: 'number',
                    label: 'Бюджетные средства',
                },
            ],
            4: [
                {
                    column: 'type_id',
                    type: 'select',
                    label: 'Заключение государственной экспертизы',
                },
                {
                    column: 'p02',
                    type: 'date',
                    label: 'Планируемые сроки выполнения: Начало',
                },
                {
                    column: 'p03',
                    type: 'date',
                    label: 'Планируемые сроки выполнения: Окончание',
                },
                {
                    type: 'label',
                    label: 'Планируемая стоимость работ: ',
                },
                {
                    column: 'p06',
                    type: 'number',
                    label: 'Внебюджетные средства',
                },
                {
                    column: 'p05',
                    type: 'number',
                    label: 'Бюджетные средства',
                },
            ],
            5: [
                {
                    column: 'p02',
                    type: 'date',
                    label: 'Планируемые сроки выполнения: Начало',
                },
                {
                    column: 'p03',
                    type: 'date',
                    label: 'Планируемые сроки выполнения: Окончание',
                },
                {
                    type: 'label',
                    label: 'Планируемая стоимость работ: ',
                },
                {
                    column: 'p06',
                    type: 'number',
                    label: 'Внебюджетные средства',
                },
                {
                    column: 'p05',
                    type: 'number',
                    label: 'Бюджетные средства',
                },
                {
                    column: 'p07',
                    type: 'text',
                    label: 'Краткое описание планируемых работ',
                },
            ],
        },
    }),
    async mounted() {
        this.updateEvents();
        this.stageLabels = await this.getEventTypes();
        this.ready = true;

        await this.depStatus;
        if (this.depStatus.id && this.depStatus.id == 2) {
            console.log('comes here');
            this.stageColumns[1][0].disabled = true;

        }
    },
    mixins: [objectEventsMixin, ApiMixin],
    computed: {
        tableRows() {

            let objs = this.eventStages.map((item, index) => {
                let fromObj = this.events.find(i => i.stage === item.stage);
                let type = fromObj.type?.id && fromObj.type.value ? fromObj.type.label : null;
                if (!item.disabled) {
                    return {
                        id: fromObj.id,
                        stage: index,//fromObj.stage - 1,
                        label: item.text,
                        type: type || '-',
                        events: fromObj.events,
                        p02: (type || index === 4) ? fromObj.p02 : '-',
                        p03: (type || index === 4) ? fromObj.p03 : '-',
                        p04: (type || index === 4) ? fromObj.p04 : '-',
                        p05: (type || index === 4) ? fromObj.p05 : '-',
                        p06: (type || index === 4) ? fromObj.p06 : '-',
                    };
                }
            }).filter(item => item);
            [...objs].forEach((item) => {
                if (item.events && item.events.length > 0) {
                    let event = item.events[0];
                    let index = objs.findIndex(i => parseInt(i.id) === parseInt(event.parent));
                    item.events.forEach((item2, index2) => {
                        objs.splice(index + index2 + 1, 0, item2);
                    });
                }
            });
            return objs;

        },
        getSelect() {
            return this.stageLabels.filter(item => parseInt(item.stage) === (this.tab + 1));
        },
        currentColumns() {
            return this.stageColumns[this.tab + 1];
        },
        labelP04() {
            return this.isReal ? 'Общая Фактическая Стоимость реализации (тыс.руб.)'
                : 'Стоимость реализации (тыс.руб)';
        },
        labelP05() {
            return this.isReal ? 'Фактическая Сумма бюджетного финансирования (тыс. руб.)'
                : 'Сумма бюджетного финансирования на проведение кап.ремонта (тыс.руб)';
        },
        labelP06() {
            return this.isReal ? 'Софинанси-рование (тыс. руб.)'
                : 'Софинансирование из внебюджетных источников (тыс.руб)';
        },

    },
    methods: {
        formatDateIfItIsDate(dateOrNot) {
            if (dateOrNot === '-' || dateOrNot === null) return '-';

            const dateTime = new Date(dateOrNot);
            const month = dateTime.getMonth() + 1;
            return `${dateTime.getDate()}.${month < 10 ? '0' + month : month}.${dateTime.getFullYear()}`;
        },
        async deleteEventFile(event, index, index2) {

            await Axios.post('/kaprem/object/event/file/delete', null, {
                params: {id: event.id},
            }).catch(e => console.log(e));

            if (index2 !== undefined) {
                this.events[index].events[index2].file = null;
            } else if (index !== undefined) {
                this.events[index].file = null;
            }
            //this.$forceUpdate();
        },
        isFileFromServer(file) {
            return !!file?.id;
        },
        updateEvents() {
            this.events = this.eventStages.map(item => {
                let fromObj = this.models.find(i => i.stage === item.stage);
                return {
                    ...item,
                    ...fromObj,
                };
            });
        },
        async deleteEvent(id, index, index2) {
            let form = new FormData();
            form.append('id', id);
            await Axios.post('/kaprem/object/event/delete', form);
            this.events[index].events.splice(index2, 1);
        },
        addEvent(index) {
            const u = Number.EPSILON / 2 + Number.EPSILON * Number.EPSILON;
            if (!Array.isArray(this.events[index].events)) {
                this.$set(this.events[index], 'events', []);
            }
            let id = this.events[index].id;
            let stageOrigin = this.events[index].stage;
            let stage = this.events[index].events[this.events[index].events.length - 1]?.stage;
            stage = stage ? stage += 0.1 : (stageOrigin + 0.1);
            this.events[index].events.push({stage: Number(stage.toPrecision(2)), parent: id});
        },
        async setPost(data, id, i, j) {
            let post = Axios.post('/kaprem/object/event/save', data, {
                params: {
                    id,
                    obj_id: this.obj_id,
                },
            });
            post.then(async ({data}) => {
                if (i && !j) {
                    this.events[i].id = data.id;
                } else if (i && j) {
                    this.events[i].events[j] = data.id;
                }

            });
            post.catch(async ({response}) => {
                if (i && !j) {
                    this.$set(this.events[i], 'errors', response.data.errors);
                } else if (i && j) {
                    this.$set(this.events[i].events[j], 'errors', response.data.errors);
                    // this.events[i].events[j] = data.id;
                }
                this.loading = false;

            });
            await post;
            // this.loading = false;
        },
        async save() {
            this.loading = true;

            for (let i = 0; i < this.events.length; i++) {

                this.events[i].errors = null;
                let data = new FormData();
                Object.keys(this.events[i]).forEach(key => {
                    if (key === 'type') {
                        data.append('type', JSON.stringify(this.events[i].type));
                    } else if (key === 'file' && this.events[i].file instanceof File) {
                        data.append('file', this.events[i].file);
                    } else if (key !== 'file') {
                        data.append(key, this.events[i][key]);
                    }
                });

                await this.setPost(data, this.events[i].id, i);

                if (this.isReal) {

                    for (let j = 0; j < this.events[i].events.length; j++) {

                        this.events[i].events[j].errors = null;
                        data = new FormData();
                        Object.keys(this.events[i].events[j]).forEach(key => {
                            if (key === 'type') {
                                data.append('type', JSON.stringify(this.events[i].events[j].type));
                            } else if (key === 'file' && this.events[i].events[j].file instanceof File) {
                                data.append('file', this.events[i].events[j].file);
                            } else if (key !== 'file') {
                                data.append(key, this.events[i].events[j][key]);
                            }
                        });

                        await this.setPost(data, this.events[i].events[j].id, i, j);

                    }
                }

            }
            this.loading = false;
            this.edit = !this.edit;
        },
    },
};
</script>

<style lang="scss" scoped>
.align-items-baseline {
    ::v-deep.v-slide-group__content {
        align-items: baseline;
    }
}
</style>
