<template>
    <div>
        <v-alert
            dismissible
            class="mt-4"
            type="warning"
            elevation="2"
            v-model="model.objectPermissions.warnings.showWarning"
        >
            Объект перейдет в статус "В обработке", когда программа капитального ремонта будет загружена
        </v-alert>
        <v-card class="mt-10 pa-5">
            <v-row class="mb-2">
                <v-col cols="8">
                    <div class="mb-2">
                        <h1 class="m-title">{{ model.name }}</h1>
                        <div>
                            <v-btn
                                color="light-blue darken-4"
                                elevation="2"
                                disabled
                            >
                                <span style="color: white">{{ 'Статус объекта: ' + model.computedStatus.label }}</span>

                            </v-btn>
                        </div>
                        <div class="mt-3">
                            <v-btn
                                color="success"
                                elevation="2"
                                v-if="!model.status.is_approved_by_user && $check(['user'])"
                                @click="dialogAllSave = true"
                            >
                                Отправить
                            </v-btn>
                        </div>
                        <div class="mt-3">
                            <v-btn
                                v-if="model.objectPermissions.others.canUserSendObjectToRealization"
                                color="success"
                                elevation="2"
                                @click="dialogToRealize = true"
                            >
                                Отправить в реализацию
                            </v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col cols="4">
                    <v-row>
                        <v-col cols="12">
                            <div class="m-object-status">
                                <div class="m-object-status__title m-o-s-title">
                                    <div class="m-o-s-title__name text--secondary">Текущий статус эксперта МОН</div>
                                    <div class="m-o-s-title__icon">
                                        <v-icon
                                            v-if="$check(['admin','mgsu'])"
                                            dense
                                            @click.stop="showSelectMGSU = !showSelectMGSU"
                                        >
                                            mdi-pencil
                                        </v-icon>
                                    </div>
                                </div>
                                <div class="m-object-status__select">
                                    <transition
                                        name="fade"
                                        mode="out-in"
                                    >
                                        <v-select
                                            dense
                                            v-if="showSelectMGSU === true"
                                            solo
                                            :value="mgsu_status.id"
                                            @change="setObjStatus"
                                            class="pa-0 ma-0"
                                            item-value="id"
                                            item-text="value"
                                            :items="objStatusesMGSU"
                                            hide-details
                                            label="Выберите статус"
                                        />
                                        <div
                                            v-else
                                            class="font-weight-black"
                                        >
                                            {{ mgsu_status.value }}
                                        </div>
                                    </transition>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <div class="m-object-status">
                                <div class="m-object-status__title m-o-s-title">
                                    <div class="m-o-s-title__name text--secondary">Текущий статус ДБИ</div>
                                    <div class="m-o-s-title__icon">
                                        <v-icon
                                            v-if="$check(['admin','mon']) && model.status.is_approved_by_user"
                                            dense
                                            @click.stop="showSelectDBI = !showSelectDBI"
                                        >
                                            mdi-pencil
                                        </v-icon>
                                    </div>
                                </div>

                                <div class="m-object-status__select">
                                    <transition
                                        name="fade"
                                        mode="out-in"
                                    >
                                        <v-select
                                            v-if="showSelectDBI === true"
                                            dense
                                            solo
                                            label="Выберите статус"
                                            :value="dep_status.id"
                                            @change="setDepStatus"
                                            class="pa-0 ma-0"
                                            item-value="id"
                                            item-text="value"
                                            :items="depStatuses"
                                            hide-details
                                        />
                                        <div
                                            v-else
                                            class="font-weight-black"
                                        >
                                            {{ dep_status.value }}
                                        </div>
                                    </transition>
                                </div>
                            </div>
                        </v-col>
                    </v-row>

                </v-col>
            </v-row>
        </v-card>

        <v-expansion-panels class="mt-5">
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <h4 class="m-title">Комментарии</h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <m-comments :obj_id="model.id" />
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

        <v-expansion-panels
            v-model="panelReadOnly"
            :readonly="true"
            multiple
            class="mt-5"
        >
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <h4 class="m-title">Основная информация</h4>
                    <template v-slot:actions>
                        <div>
                            <v-btn
                                v-if="canEdit && model.objectPermissions.others.canUpdateGeneralInfo"
                                @click="objDialogUpdate.open = true"
                                color="warning"
                                outlined
                            >
                                Редактировать
                            </v-btn>
                        </div>
                    </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-simple-table dense>
                        <colgroup
                            span="2"
                            width="100%"
                        >
                            <col
                                span="1"
                                width="30%"
                            >
                            <col
                                span="1"
                                width="70%"
                            >
                        </colgroup>
                        <tbody>
                            <tr>
                                <td class="font-weight-bold">ID</td>
                                <td>{{ model.id }}</td>
                            </tr>
                            <tr>
                                <td class="font-weight-bold">ID организации</td>
                                <td>{{ model.org_id }}</td>
                            </tr>
                            <tr>
                                <td class="font-weight-bold">Наименование организации</td>
                                <td>{{ organization.name }}</td>
                            </tr>
                            <tr>
                                <td class="font-weight-bold">Наименование</td>
                                <td>{{ model.name }}</td>
                            </tr>
                            <tr>
                                <td class="font-weight-bold">Тип</td>
                                <td>{{ get_type(model.type) }}</td>
                            </tr>
                            <tr>
                                <td class="font-weight-bold">Полный адрес объекта</td>
                                <td>{{ model.address }}</td>
                            </tr>
                            <tr>
                                <td class="font-weight-bold">Назначение</td>
                                <td>{{ model.naznach }}</td>
                            </tr>
                            <tr>
                                <td class="font-weight-bold">Общая площадь здания (кв.м.)</td>
                                <td>{{ model.square }}</td>
                            </tr>
                            <tr>
                                <td class="font-weight-bold">Год постройки здания</td>
                                <td>{{ model.build_year }}</td>
                            </tr>
                            <tr>
                                <td class="font-weight-bold">Износ</td>
                                <td>{{ get_wear(model.wear) }}</td>
                            </tr>
                            <tr>
                                <td class="font-weight-bold">Примечание</td>
                                <td>{{ model.primechanie }}</td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

        <v-dialog
            v-model="objDialogUpdate.open"
            width="90%"
        >
            <v-card>
                <v-card-title>
                    <h5 class="m-title">Редактирование основной информации "{{ `Объект № ${model.id}` }}"</h5>
                </v-card-title>
                <v-card-text>
                    <v-container fluid>
                        <v-scroll-x-transition>
                            <m-object-update
                                :organization="organization"
                                @close="objDialogUpdate.open = false"
                                @saved="updateObject"
                                v-model="model"
                            />
                        </v-scroll-x-transition>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-expansion-panels
            v-model="panelReadOnly"
            :readonly="true"
            multiple
            class="mt-5"
        >
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <h4 class="m-title">Дополнительная информация</h4>
                    <template v-slot:actions>
                        <div></div>
                    </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <object-dop-info
                        :events="model.events"
                        :waited="model.waited"
                    />
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

        <v-expansion-panels
            v-if="model.computedStatus.value === 'IN_IMPLEMENTATION'"
            class="mt-5"
        >
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <h4 class="m-title">План-график мероприятий</h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>

                    <object-action-plan
                        :events="model.events"
                        :fileList="model.actionPlanFiles"
                        :objectId="model.id"
                    />

                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <h4 class="m-title">Архив</h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-expansion-panels class="mt-5">
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                <h4 class="m-title">Сведения о планируемых мероприятиях</h4>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>

                                <div v-if="!showUpdateEvents">
                                    <object-info-events
                                        :events="model.events"
                                        :finance="model.totalFin"
                                        :coFinance="model.totalCoFin"
                                    />
                                </div>
                                <div v-else>
                                    <object-update-events
                                        :organization="organization"
                                        ref="eventsUpdateComponent"
                                        :canUpdateRepairType="model.objectPermissions.others.canUpdateRepairType"
                                        :events="model.events"
                                    />
                                </div>
                                <div
                                    style="text-align: right"
                                    class="pa-3"
                                >
                                    <v-btn
                                        v-if="!showUpdateEvents"
                                        color="warning"
                                        outlined
                                        @click="showUpdateEvents = !showUpdateEvents"
                                    >
                                        Редактировать
                                    </v-btn>
                                    <div v-else>
                                        <v-btn
                                            color="success"
                                            outlined
                                            @click="saveUpdatedEvents"
                                        >
                                            Сохранить
                                        </v-btn>
                                        <v-btn
                                            outlined
                                            @click="showUpdateEvents = false"
                                        >
                                            Отмена
                                        </v-btn>
                                    </div>
                                </div>

                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                <h4 class="m-title">Обоснование необходимости (целесообразности) планируемых
                                    мероприятий</h4>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <object-activities
                                    @saved="updateObject"
                                    :obj_id="model.id"
                                    :models="model.activities"
                                />
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                <h4 class="m-title">Ожидаемые результаты</h4>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <object-waited
                                    @saved="updateObject"
                                    :obj_id="model.id"
                                    :models="model.waited"
                                />
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                <h4 class="m-title">Загруженные документы</h4>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <object-files
                                    @saved="updateObject"
                                    :obj_id="model.id"
                                    :files="model.files"
                                    :fileList="model.filelist"
                                />
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

        <!-- Видно эту строку -->
        <v-expansion-panels
            v-else
            class="mt-5"
        >
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <h4 class="m-title">Сведения о планируемых мероприятиях</h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>

                    <!-- Это то что сделал Паша -->
                    <div v-if="!showUpdateEvents">
                        <object-info-events
                            :events="model.events"
                            :finance="model.totalFin"
                            :coFinance="model.totalCoFin"
                        />
                    </div>
                    <div v-else>
                        <object-update-events
                            :organization="organization"
                            ref="eventsUpdateComponent"
                            :canUpdateRepairType="model.objectPermissions.others.canUpdateRepairType"
                            :events="model.events"
                        />
                    </div>
                    <div
                        style="text-align: right"
                        class="pa-3"
                    >
                        <v-btn
                            v-if="!showUpdateEvents"
                            color="warning"
                            outlined
                            @click="showUpdateEvents = !showUpdateEvents"
                        >
                            Редактировать
                        </v-btn>
                        <div v-else>
                            <v-btn
                                color="success"
                                outlined
                                @click="saveUpdatedEvents"
                            >
                                Сохранить
                            </v-btn>
                            <v-btn
                                outlined
                                @click="showUpdateEvents = false"
                            >
                                Отмена
                            </v-btn>
                        </div>
                    </div>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <h4 class="m-title">Обоснование необходимости (целесообразности) планируемых мероприятий</h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <object-activities
                        @saved="updateObject"
                        :obj_id="model.id"
                        :models="model.activities"
                    />
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <h4 class="m-title">Ожидаемые результаты</h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <object-waited
                        :block="!canEdit"
                        @saved="updateObject"
                        :obj_id="model.id"
                        :models="model.waited"
                    />
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <h4 class="m-title">Загруженные документы</h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <object-files
                        @saved="updateObject"
                        :obj_id="model.id"
                        :files="model.files"
                        :fileList="model.filelist"
                    />
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <div
            v-if="!model.status.is_approved_by_user && $check(['admin', 'user'])"
            class="d-flex justify-md-end justify-lg-end justify-sm-end mt-6"
        >
            <v-btn
                color="success"
                elevation="2"
                @click="dialogAllSave = true"
            >
                Отправить
            </v-btn>
        </div>

        <v-dialog
            v-model="dialogAllSave"
            persistent
            max-width="400"
        >
            <v-card>
                <v-card-title class="text-h5">
                    Сохранение
                </v-card-title>

                <v-card-text>
                    Вы уверены что хотите отправить этот объект в обработку?
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        color="darken-1"
                        text
                        @click="dialogAllSave = false"
                    >
                        Отмена
                    </v-btn>

                    <v-btn
                        color="green darken-1"
                        text
                        @click="approveObject"
                    >
                        Сохранить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
            v-model="dialogToRealize"
            persistent
            max-width="400"
        >
            <v-card>
                <v-card-title class="text-h5">
                    Сохранение
                </v-card-title>

                <v-card-text>
                    Вы уверены что хотите отправить этот объект в реализацию?
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        color="darken-1"
                        text
                        @click="dialogToRealize = false"
                    >
                        Отмена
                    </v-btn>

                    <v-btn
                        color="green darken-1"
                        text
                        @click="sendObjectToRealization"
                    >
                        Сохранить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { ApiMixin } from '../../../mixins/ApiMixin';
import { programObject } from '../../../mixins/programMixin';
import MComments from '../MComments';
import ObjectEvents from './objectEvents';
import ObjectInfoEvents from './objectInfoEvents';
import ObjectActivities from './objectActivities';
import ObjectWaited from './objectWaited';
import ObjectFiles from './objectFiles';
import ObjectGantt from './objectGantt';
import ObjectRealEvent from './objectRealEvent';
import ObjectDopInfo from './objectDopInfo';
import MObjectUpdate from '../MObjectUpdate'
import objectUpdateEvents from './objectUpdateEvents.vue';
import objectActionPlan from './objectActionPlan.vue';
import Axios from 'axios';

export default {
    name: 'MObjectView',
    components: {
        ObjectDopInfo,
        MObjectUpdate,
        ObjectRealEvent,
        ObjectGantt,
        ObjectFiles,
        ObjectWaited,
        ObjectActivities,
        ObjectEvents,
        ObjectInfoEvents,
        MComments,
        objectUpdateEvents,
        objectActionPlan
    },
    props: [ 'value', 'organization', 'program', 'isView' ],
    mixins: [ ApiMixin, programObject ],
    data: () => ( {
        objDialogUpdate: {
            open: false,
        },

        showSelectDBI: false,
        showSelectMGSU: false,


        dialogAllSave: false,
        dialogToRealize: false,

        panelReadOnly: [ 0 ],
        model: {},
        edit: false,
        priority: [ 1, 2, 3 ],

        activities: [],
        depStatuses: [],
        objStatuses: [],

        showUpdateEvents: false,
    } ),
    computed: {
        canEdit () {
            if ( this.isView ) {
                return false;
            }
            if ( this.$check( 'admin' ) ) {
                return true
            }
            return [ 'DRAFT', 'RETURNED' ].includes( this.mgsu_status.status );
        },
        isRealize () {
            return this.model.status?.mgsu_status?.status === 'REALIZED';
        },
        date_step () {
            return this.model.status?.step_date || null;
        },
        dep_status () {
            return this.model.status?.dep_status || {};
        },
        mgsu_status () {
            return this.model.status?.mgsu_status || {};
        },
        is_nauch () {
            return [ 7, 9, 10 ].includes( this.organization.founder_id ) ? 1 : 0;
        },

        objStatusesMGSU () {
            const statuses = this.objStatuses.filter( value => [ '2', '3', '4' ].includes( value.id ) );

            if ( this.model.status.is_approved_by_user && this.model?.status?.mgsu_status?.id == '4' ) {
                statuses.push( { id: '50', value: 'Повторно возвратить на доработку' } );
            }

            return statuses;
        }
    },
    methods: {
        someMethod ( event ) {
            console.log( 'click events from select: ', event );
        },
        async saveUpdatedEvents () {
            const updatedEvents = this.$refs.eventsUpdateComponent.getUpdatedFields();

            await Axios.post( `/kaprem/object/update-events/${this.model.id}`, updatedEvents ).then( res => {
            } );
        },
        async sendObjectToRealization () {
            this.dialogToRealize = false;

            await Axios.post( '/kaprem/object/send-to-realization', { objectId: this.model.id } ).then( response => {
                if ( response.data.Ok ) {
                    this.$emit( 'saved' );
                }
            } );
        },
        async setDepStatus ( status ) {
            let s = new FormData();
            s.append( 'id', this.model.id );
            s.append( 'status', status );
            await Axios.post( '/kaprem/object/set-dep-status', s );
            await this.updateObject();
            this.showSelectDBI = false
        },
        async setDateStep ( date ) {

            let s = new FormData();
            s.append( 'id', this.model.id );
            s.append( 'date', date );
            await Axios.post( '/kaprem/object/set-date-step', s );
            await this.updateObject();
        },
        async setObjStatus ( status ) {
            if ( status == '50' )
                status = '4';

            let s = new FormData();
            s.append( 'id', this.model.id );
            s.append( 'status', status );
            await Axios.post( '/kaprem/object/set-obj-status', s );
            await this.updateObject();
            this.showSelectMGSU = false;
        },
        //это оооочень плохо, но переписывать липатовское говно нет времени
        // ;D
        async updateObject () {
            this.objDialogUpdate.open = false;

            this.$emit( 'saved' );
        },
        async approveObject () {
            this.dialogAllSave = false;
            await Axios.post( '/kaprem/object/approve', { objectId: this.model.id } ).then( response => {
                if ( response.data.Ok ) {
                    this.$emit( 'saved' );
                }
            } );
        },
        //old method
        // async updateObject() {
        //     this.objDialogUpdate.open = false;
        //     this.model = await this.getObject(this.model.id);
        //     await this.$emit('saved');
        // },
    },
    async mounted () {
        this.model = this.value;

        this.objStatuses = await this.getObjStatuses();
        this.depStatuses = await this.getDepStatuses();
    },
    watch: {
        value: {
            deep: true,
            handler ( val ) {
                this.model = val;
            },
        },
        model: {
            deep: true,
            handler ( val ) {
                this.$emit( 'input', val );
            },
        },
    },
};
</script>

<style lang="scss" scoped>
.m-object-status {
    display: flex;
    flex-direction: column;
    height: 45px;

    &__select {
    }

    &__title,
    .m-o-s-title {
        display: flex;
        margin-bottom: 5px;

        &__name {
        }

        &__icon {
            align-self: center;
            margin: 0 20px;
        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
}
</style>
