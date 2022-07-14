<template>
    <div v-if="!loading">
        <!-- <v-container v-if="program && this.$check(['admin', 'mon'])" fluid> -->
        <v-alert class="mb-5" type="error" v-if="!program.can_create_object">
            Программа модернизации в 2022 году не предусмотрена
        </v-alert>
        <v-container fluid v-if="program">
            <div class="title">{{ organization.name }} | {{ organization.id }}</div>
            <m-contacts class="mt-3" :contacts="contacts" :org_id="organization.id" :program_id="program.id"
                        @saved="freashContacts"/>
            <v-card class="mt-3">
                <v-container fluid>
                    <div class="title">Программа капитального ремонта</div>
                    <div class="d-flex justify-space-between">
                        <div>
                            <table>
                                <tr>
                                    <td class="pr-2 text--secondary" style="white-space: nowrap;">
                                        Объем средств на реализацию мероприятий по капремонту, тыс. рублей
                                    </td>
                                    <td class="font-weight-black pl-2 text-center">{{ program.cost_kaprem }}</td>
                                </tr>
                                <tr>
                                    <td class="pr-2 text--secondary" style="white-space: nowrap;">
                                        Ожидаемая площадь капремонта, не менее кв.м
                                    </td>
                                    <td class="font-weight-black pl-2 text-center">{{ program.square }}</td>
                                </tr>
                            </table>
                            <div>
                                <v-btn class="my-2" elevation="4" outlined small
                                       :disabled="contacts.length < 1 || !program.can_create_object" @click="createObj">
                                    Добавить объект
                                </v-btn>
                                <m-org-info v-model="program.org_info" :organization="organization" :program="program"/>
                                <v-dialog fullscreen hide-overlay scrollable transition="dialog-bottom-transition"
                                          v-model="objDialogAdd.open">
                                    <v-card tile>
                                        <v-toolbar color="primary" dark flat>
                                            <v-btn dark icon @click="objDialogAdd.open = false">
                                                <v-icon>mdi-close</v-icon>
                                            </v-btn>
                                            <v-toolbar-title>Добавление объекта</v-toolbar-title>
                                            <v-spacer/>
                                        </v-toolbar>
                                        <v-card-text>
                                            <v-container fluid>
                                                <v-scroll-x-transition>
                                                    <m-object-create v-model="objDialogAdd.data"
                                                                     :organization="organization"
                                                                     @close="objDialogAdd.open = false" @save="addObj"/>
                                                </v-scroll-x-transition>
                                            </v-container>
                                        </v-card-text>
                                    </v-card>
                                </v-dialog>
                                <v-dialog fullscreen hide-overlay scrollable transition="dialog-bottom-transition"
                                          v-model="objDialogEdit.open">
                                    <v-card tile>
                                        <v-toolbar class="custom-gradient-color" flat>
                                            <v-btn dark icon @click="objDialogEdit.open = false">
                                                <v-icon>mdi-close</v-icon>
                                            </v-btn>
                                            <v-toolbar-title>
                                            <span class="text-h5" style="color: white">
                                                {{ `Объект № ${objDialogEdit.data.id}` }}
                                            </span>
                                            </v-toolbar-title>
                                            <v-spacer/>
                                        </v-toolbar>
                                        <v-card-title/>
                                        <v-card-text>
                                            <v-container fluid>
                                                <v-scroll-x-transition>
                                                    <m-object-view v-model="objDialogEdit.data"
                                                                   :organization="organization"
                                                                   :program="program" @edit="editDialog"
                                                                   @saved="freashObjects"/>
                                                </v-scroll-x-transition>
                                            </v-container>
                                        </v-card-text>
                                    </v-card>
                                </v-dialog>
                            </div>
                        </div>
                        <table>
                            <tr>
                                <td :colspan="!fileExist || !program.sent ? 2 : 1">
                                    <div class="text-center" style="display: grid">
                                        Программа
                                        <v-progress-linear color="yellow darken-2" indeterminate v-if="upload.loading"/>
                                        <v-btn v-if="fileExist && $check(['admin'])" @click="deleteProgramFiles">
                                            Удалить программу
                                        </v-btn>
                                        <span class="red--text" style="font-size: 10px"
                                              v-if="fileExist && !program.sent">
                                        Не отправлена,
                                        <span style="cursor: pointer">
                                            Отправить?
                                            <v-btn class="ml-2" color="primary" outlined x-small @click="setSent">
                                                Да
                                            </v-btn>
                                        </span>
                                    </span>
                                        <span class="red--text" style="font-size: 10px" v-else-if="!fileExist">
                                        Для отправки программы, подгрузите файл <sup>*</sup>
                                    </span>
                                        <span class="green--text" style="font-size: 10px" v-else>Отправлена</span>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="!fileExist">
                                <td>
                                    <div class="d-flex justify-space-around">
                                        <v-tooltip bottom>
                                            <template #activator="{on, attrs}">
                                                <v-btn color="success" icon target="_blank" v-bind="attrs" v-on="on"
                                                       :href="`/kaprem/program/${program.id}/export`">
                                                    <v-icon>mdi-cloud-download-outline</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Выгрузить</span>
                                        </v-tooltip>
                                        <v-tooltip bottom>
                                            <template #activator="{on,attrs}">
                                                <div v-bind="attrs" v-on="on">
                                                    <v-file-input class="disableFlexInput" dense flat hide-details
                                                                  hide-input prepend-icon="mdi-cloud-upload-outline"
                                                                  @change="fileUpload"/>
                                                </div>
                                            </template>
                                            <span>Загрузить</span>
                                        </v-tooltip>
                                    </div>
                                </td>
                            </tr>
                            <tr v-else>
                                <td>
                                    <div class="text-center">
                                        <v-btn color="success" icon
                                               :href="`/kaprem/program/file/${program.file.id}/download`">
                                            <v-icon>mdi-download</v-icon>
                                        </v-btn>
                                    </div>
                                </td>
                                <td v-if="!program.sent">
                                    <v-btn color="error" icon @click="deleteFile">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <v-expansion-panels class="mt-2" multiple v-model="panels">
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                Объекты капитального ремонта (Приоритетные)
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-data-table style="cursor: pointer" :headers="objectHeaders" :items="priorityObjects"
                                              @click:row="goToEditPage">
                                    <template v-slot:item.actions="{ item }">
                                        <div class="text-center">
                                            <!--<v-icon small @click.stop="toObj(item.id)">mdi-eye</v-icon>-->
                                            <v-icon small v-if="!$check(['mon'])" @click.stop="editItem(item)">
                                                mdi-pencil
                                            </v-icon>
                                            <v-icon color="error" small @click.stop="dialogDelete(item)">
                                                mdi-delete
                                            </v-icon>
                                        </div>
                                    </template>
                                    <template v-slot:item.mgsu_status="{ item }">
                                        <span>{{ getStatus(item, 'mgsu_status').value }}</span>
                                    </template>
                                    <template v-slot:item.dep_status="{ item }">
                                        <span>{{ getStatus(item, 'dep_status').value }}</span>
                                    </template>
                                </v-data-table>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                Объекты капитального ремонта (Резервные)
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-data-table style="cursor: pointer" :headers="objectHeaders" :items="reservedObjects"
                                              @click:row="goToEditPage">
                                    <template v-slot:item.actions="{ item }">
                                        <!--<v-icon small @click.stop="toObj(item.id)">mdi-eye</v-icon>-->
                                        <v-icon small v-if="!$check(['mon'])" @click.stop="editItem(item)">
                                            mdi-pencil
                                        </v-icon>
                                        <v-icon color="error" small @click.stop="dialogDelete(item)">mdi-delete</v-icon>
                                    </template>
                                    <template v-slot:item.mgsu_status="{ item }">
                                        <span>{{ getStatus(item, 'mgsu_status').value }}</span>
                                    </template>
                                    <template v-slot:item.dep_status="{ item }">
                                        <span>{{ getStatus(item, 'dep_status').value }}</span>
                                    </template>
                                </v-data-table>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                    <m-object-delete :alert="objDialogDelete.alert" :dialog.sync="objDialogDelete.open"
                                     @delete="deleteItem()"/>
                </v-container>
            </v-card>
            <v-card class="mt-3" v-if="!loading_subsidies && is_accesses">
                <v-container fluid>
                    <div class="d-flex justify-space-between">
                        <div class="font-inter-normal-800" style="color: #4E86E2;">Целевые субсидии</div>
                        <template v-if="is_admin || is_mon">
                            <v-btn color="primary" icon small @click="openDialogAfis">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-dialog v-model="dialog_afis">
                                <v-card>
                                    <v-toolbar color="primary" dark>
                                        <v-toolbar-title class="font-inter-normal-400">
                                            Объемы средств и целевые показатели субсидий
                                        </v-toolbar-title>
                                        <v-spacer/>
                                        <v-btn dark icon @click="closeDialogAfis">
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                    </v-toolbar>
                                    <v-card-text style="padding: 20px 24px;">
                                        <table style="width: 100%;">
                                            <tr>
                                                <td/>
                                                <th class="font-inter-normal-700">Объем средств</th>
                                                <th class="font-inter-normal-700">Целевой показатель</th>
                                            </tr>
                                            <tr>
                                                <th class="font-inter-normal-700">02-08</th>
                                                <td>
                                                    <v-text-field dense hide-details max="99999999.999" min="0" outlined
                                                                  step="0.001" type="number"
                                                                  v-model="edited_afis.amount_funds_0208"/>
                                                </td>
                                                <td>
                                                    <v-text-field dense hide-details outlined
                                                                  v-model="edited_afis.indicator_0208"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="font-inter-normal-700">02-10</th>
                                                <td>
                                                    <v-text-field dense hide-details max="99999999.999" min="0" outlined
                                                                  step="0.001" type="number"
                                                                  v-model="edited_afis.amount_funds_0210"/>
                                                </td>
                                                <td>
                                                    <v-text-field dense hide-details outlined
                                                                  v-model="edited_afis.indicator_0210"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="font-inter-normal-700">02-01</th>
                                                <td>
                                                    <v-text-field dense hide-details max="99999999.999" min="0" outlined
                                                                  step="0.001" type="number"
                                                                  v-model="edited_afis.amount_funds_0201"/>
                                                </td>
                                                <td>
                                                    <v-text-field dense hide-details outlined
                                                                  v-model="edited_afis.indicator_0201"/>
                                                </td>
                                            </tr>
                                        </table>
                                    </v-card-text>
                                    <v-divider/>
                                    <v-card-actions>
                                        <v-spacer/>
                                        <v-btn color="blue darken-1" text @click="saveAfis">Сохранить</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </template>
                    </div>
                    <div class="d-flex justify-space-between mt-2">
                        <div class="font-inter-normal-400">
                            Объем средств на реализацию мероприятий по капремонту (тыс. рублей)
                        </div>
                        <div class="font-inter-normal-700">
                            {{
                                (
                                    Number(afis.amount_funds_0201) + Number(afis.amount_funds_0208) +
                                    Number(afis.amount_funds_0210)
                                ).toFixed(3)
                            }}
                        </div>
                    </div>
                    <div class="d-flex justify-space-between mt-2">
                        <table>
                            <tr>
                                <td class="font-inter-normal-400 pr-2">
                                    в том числе по коду субсидии <span
                                    class="font-inter-normal-700">02-08</span> (тыс.
                                    рублей)
                                </td>
                                <td class="font-inter-normal-700 pl-2">
                                    {{ Number(afis.amount_funds_0208).toFixed(3) }}
                                </td>
                            </tr>
                            <tr>
                                <td class="font-inter-normal-400 pr-2">
                                    в том числе по коду субсидии <span
                                    class="font-inter-normal-700">02-10</span> (тыс.
                                    рублей)
                                </td>
                                <td class="font-inter-normal-700 pl-2">
                                    {{ Number(afis.amount_funds_0210).toFixed(3) }}
                                </td>
                            </tr>
                            <tr>
                                <td class="font-inter-normal-400 pr-2">
                                    в том числе по коду субсидии <span
                                    class="font-inter-normal-700">02-01</span> (тыс.
                                    рублей)
                                </td>
                                <td class="font-inter-normal-700 pl-2">
                                    {{ Number(afis.amount_funds_0201).toFixed(3) }}
                                </td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td class="font-inter-normal-400 pr-2">
                                    Целевой показатель по коду субсидий <span class="font-inter-normal-700">02-08</span>
                                </td>
                                <td class="font-inter-normal-700 pl-2">{{ afis.indicator_0208 || '-' }}</td>
                            </tr>
                            <tr>
                                <td class="font-inter-normal-400 pr-2">
                                    Целевой показатель по коду субсидий <span class="font-inter-normal-700">02-10</span>
                                </td>
                                <td class="font-inter-normal-700 pl-2">{{ afis.indicator_0210 || '-' }}</td>
                            </tr>
                            <tr>
                                <td class="font-inter-normal-400 pr-2">
                                    Целевой показатель по коду субсидий <span class="font-inter-normal-700">02-01</span>
                                </td>
                                <td class="font-inter-normal-700 pl-2">{{ afis.indicator_0201 || '-' }}</td>
                            </tr>
                        </table>
                    </div>
                    <v-expansion-panels class="mt-2" multiple v-model="subsidy_panels">
                        <v-expansion-panel>
                            <v-expansion-panel-header class="font-inter-normal-800" style="color: #4E86E2;">
                                Объекты капитального ремонта по коду субсидии 02-08
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <subsidies-table is-user :is-change="is_admin || is_user" :items="subsidies_0208"/>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header class="font-inter-normal-800" style="color: #4E86E2;">
                                Объекты капитального ремонта по коду субсидии 02-01
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <subsidies-table is-user :is-change="is_admin || is_user" :items="subsidies_0201"/>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header class="font-inter-normal-800" style="color: #4E86E2;">
                                Объекты капитального ремонта по коду субсидии 02-10
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <subsidies-table is-user :is-change="is_admin || is_user" :items="subsidies_0210"/>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <subsidy-conclusions :is-change="is_admin || is_mon" :organization-id="org_id"/>
                    </v-expansion-panels>
                </v-container>
            </v-card>
        </v-container>
        <v-alert outlined type="error" v-else-if="!program">
            Бюджетное финансирование на реализацию мероприятий в рамках Программы капитального ремонта в 2022 году не
            предусмотрено.
        </v-alert>
        <v-alert outlined type="error" v-else>Доступ закрыт!</v-alert>
    </div>
</template>

<script>
import Axios from "axios";
import MContacts from '../../organisms/MContacts';
import MObjectCreate from '../../organisms/MObjectCreate';
import MObjectDelete from "../../organisms/MObjectDelete";
import MObjectUpdate from '../../organisms/MObjectUpdate';
import MObjectView from '../../organisms/MObjectView';
import MOnlyUserEdit from '../../organisms/MOnlyUserEdit';
import MOrgInfo from '../../organisms/MOrgInfo';
import NContacts from '../../organisms/NContacts';
import SubsidiesTable from "../../organisms/SubsidiesTable";
import SubsidyConclusions from "../../organisms/SubsidyConclusions";
import {ApiMixin} from '../../../mixins/ApiMixin';
import {program} from '../../../mixins/programMixin';

export default {
    components: {
        MContacts, MObjectCreate, MObjectDelete, MObjectUpdate, MObjectView, MOnlyUserEdit, MOrgInfo, NContacts,
        SubsidiesTable, SubsidyConclusions
    },
    computed: {
        currentContact: {
            get() {
                let index = this.contactPage - 1;
                return this.contacts[index] ?? {};
            },
        },
        fileExist() {
            return this.program.file && this.program.file.id;
        },
        priorityObjects() {
            return this.objects?.filter(item => item.type === 0) || [];
        },
        reservedObjects() {
            return this.objects?.filter(item => item.type === 1) || [];
        }
    },
    data() {
        return {
            afis: {
                amount_funds_0201: null,
                amount_funds_0208: null,
                amount_funds_0210: null,
                indicator_0201: null,
                indicator_0208: null,
                indicator_0210: null
            },
            contactFields: [{fio: 'ФИО'}, {role: 'Роль'}, {position: 'Должность'}, {phone: 'Телефон'}, {email: 'E-Mail'}],
            contactPage: 1,
            contacts: [],
            currentObject: {},
            dialog_afis: false,
            edited_afis: {},
            is_accesses: false,
            is_admin: false,
            is_mon: false,
            is_user: false,
            loading: true,
            loading_subsidies: true,
            objDialogAdd: {data: {}, open: false},
            objDialogDelete: {alert: false, data: {}, open: false},
            objDialogEdit: {data: {}, open: false},
            objectHeaders: [
                {text: 'Объект', value: 'name'},
                //{text: 'Уровень приоритета', value: 'priority'},
                {text: 'ID Объекта', value: 'id'},
                {
                    text: 'Сумма бюджетного финансирования на проведение капитального ремонта (тыс. руб.)',
                    value: 'totalFin'
                },
                /*{
                  text: 'В том числе объем финансирования на разработку проектно-сметной документации (тыс. руб., код субсидии 02-10)',
                  value: '5',
                },*/
                {
                    text: 'Сумма внебюджетного финансирования на проведение капитального ремонта (тыс. руб.)',
                    value: 'totalCoFin'
                },
                {text: 'Статус Эксперт', value: 'mon_status_label'},
                {text: 'Статус ДБИ', value: 'dep_status'},
                {text: 'Действия', value: 'actions', sortable: false},
            ],
            objects: [],
            organization: null,
            panels: [0, 1],
            program: null,
            subsidies_0201: [],
            subsidies_0208: [],
            subsidies_0210: [],
            subsidy_panels: [0, 1, 2],
            test: null,
            toggleEditWindow: false,
            upload: {errors: null, loading: false}
        }
    },
    methods: {
        async addObj() {
            this.objDialogAdd.open = false;
            this.objDialogAdd.data = {};

            await this.freashObjects();

            this.$nextTick(() => {
                window.scrollTo({
                    top: window.innerHeight,
                    left: 0,
                    behavior: 'smooth',
                });
            });
        },
        closeDialogAfis() {
            this.dialog_afis = false
            this.edited_afis = {}
        },
        createObj() {
            this.objDialogAdd.data = {
                org_id: this.program.org_id,
                program_id: this.program.id,
                programSent: this.program.sent
            };

            this.objDialogAdd.open = true;
        },
        async deleteFile() {
            await Axios.post(`/kaprem/program/file/${this.program.file.id}/delete`);
            await this.loadCryticalData();
        },
        async deleteItem() {
            await Axios.post(`/kaprem/object/delete/${this.objDialogDelete.data.id}`, null,);
            this.objDialogDelete.open = false;

            await this.freashObjects();
        },
        async deleteProgramFiles() {
            await Axios.post('/kaprem/program/reset-program-files', {
                programId: this.program.id
            }).then(async res => {
                await this.loadCryticalData();
            });
        },
        dialogDelete(item) {
            this.objDialogDelete.alert = false;
            if (this.getStatus(item, 'dep_status').status === 'REVIEWED') {
                this.objDialogDelete.alert = true;
            } else {
                this.objDialogDelete.data = item;
            }
            this.objDialogDelete.open = true;
        },
        editDialog() {
            this.objDialogEdit.open = true;
        },
        editItem(item) {
            this.objDialogEdit.data = item;
            this.objDialogEdit.open = true;
        },
        async fileUpload(e) {
            this.upload.loading = true;
            let f = new FormData();
            f.append('file', e);
            f.append('id', this.program.id);
            await Axios.post('/kaprem/program/file/upload', f).then(async () => {
                await this.loadCryticalData();
            }).catch(({response}) => {
                if (response.status === 413) {
                    alert('Файл слишком большой');
                }
                alert('Ошибка при загрузке файла');
            }).finally(() => {
                setTimeout(() => {
                    this.upload.loading = false;
                }, 1000);
            });
        },
        async freashContacts() {
            const generalData = await this.getProgramByOrgId(this.org_id);

            this.contacts = generalData.contacts;
        },
        async freashObjects() {
            await Axios.get(`/kaprem/object/get-objects/${this.program.id}`).then(response => {
                this.objects = response.data;
            });
        },
        getStatus(item, status) {
            if (!item.status) {
                return '-'
            } else {
                return item.status[status] ?? {value: '-'};
            }
        },
        async getAfis() {
            let afis = await this.fetch('amount_funds_and_indicators_subsidy', {
                amount_funds_0201: true,
                amount_funds_0208: true,
                amount_funds_0210: true,
                indicator_0201: true,
                indicator_0208: true,
                indicator_0210: true
            }, {organization_id: this.org_id})
            this.afis = afis || {
                amount_funds_0201: null,
                amount_funds_0208: null,
                amount_funds_0210: null,
                indicator_0201: null,
                indicator_0208: null,
                indicator_0210: null
            }
        },
        async getSubsidies() {
            this.loading_subsidies = true
            const accesses = await this.fetch('subsidy_accesses', {id: true}, {organization_id: this.org_id})
            this.is_accesses = (accesses.length > 0)
            if (this.is_accesses) {
                await this.getAfis()
                let columns = {
                    address: true,
                    code: true,
                    created_at: true,
                    name: true,
                    id: true,
                    stages: {finansee: true, kap_coast: true},
                    status: {id: true, value: true}
                }
                this.subsidies_0201 = await this.fetch('subsidies', columns, {
                    code: '02-01',
                    organization_id: this.org_id
                })
                this.subsidies_0208 = await this.fetch('subsidies', columns, {
                    code: '02-08',
                    organization_id: this.org_id
                })
                this.subsidies_0210 = await this.fetch('subsidies', columns, {
                    code: '02-10',
                    organization_id: this.org_id
                })
            }
            this.loading_subsidies = false
        },
        goToEditPage(item) {
            window.open(`/kaprem/object/edit/${item.id}`, '_blank');
        },
        async loadCryticalData() {
            const generalData = await this.getProgramByOrgId(this.org_id);
            this.program = {...generalData};
            this.organization = {...generalData.org};
            this.contacts = generalData.contacts;

            await this.freashObjects();
        },
        openDialogAfis() {
            this.edited_afis = Object.assign({}, this.afis)
            this.dialog_afis = true
        },
        async saveAfis() {
            const url = `/afis/${this.org_id}/edit`
            const formData = new FormData()
            formData.append('form', JSON.stringify(this.edited_afis))
            const submitter = Axios.post(url, formData)
            submitter.catch(({response}) => {
                console.log(`POST ${url}`, response.data.errors)
            })
            submitter.then(async ({data}) => {
                console.log(`POST ${url}`, data)
                if (data.success) {
                    await this.getAfis()
                    this.closeDialogAfis()
                }
            })
            await submitter
        },
        setLoaded() {
            this.loading = false;
            this.$emit('input', false);
        },
        async setSent() {
            await Axios.post(`/kaprem/program/${this.program.id}/set-sent`);
            await this.loadCryticalData();
        },
        async toObj(id) {
            window.open(`/kaprem/object/view/${id}`);
        }
    },
    mixins: [ApiMixin],
    async mounted() {
        this.is_admin = Boolean(this.$authData.roles.find(role => role.name === 'admin'))
        this.is_mon = Boolean(this.$authData.roles.find(role => role.name === 'mon'))
        this.is_user = Boolean(this.$authData.roles.find(role => role.name === 'user'))
        await this.loadCryticalData();
        await this.getSubsidies();
        this.setLoaded();
    },
    name: 'KapremTemplate',
    props: {
        org_id: {required: true},
        value: null,
    }
};
</script>

<style lang="scss" scoped>
.disableFlexInput {
    display: block;
    flex: unset !important;

    ::v-deep.v-icon {
        color: red;
    }

    &::v-deep.v-text-field {
        margin-top: 2px;
    }
}

#podrobnee {
    tr {
        th {
            text-align: center;
        }
    }
}

.d-inline-grid {
    display: inline-grid;
}

.custom-gradient-color {
    background: linear-gradient(180deg, #8450ad 0%, #3361ff 100%);
}
</style>
