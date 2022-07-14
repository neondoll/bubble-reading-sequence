<template>
    <v-tabs
        class="align-items-baseline"
        vertical
        v-model="tab"
    >
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

        <!-- stage 2 repairType -->
        <v-tab-item>
            <v-card
                elevation="2"
                outlined
                class="pa-4"
            >
                <h3 class="m-title mb-2">Вид ремонта</h3>
                <v-row>
                    <v-col>
                        <v-card class="pa-4">
                            <v-select
                                :disabled="!canUpdateRepairType"
                                :items="stageTypes[1]"
                                item-text="label"
                                item-value="id"
                                return-object
                                label="Вид планируемого мероприятия"
                                v-model="events.repairType.type_event"
                            ></v-select>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card class="pa-4">
                            <p class="font-weight-bold">Дополнительная информация:</p>
                            <v-textarea
                                rows="3"
                                label="Краткое описание планируемых работ"
                                v-model="events.repairType.short_description"
                            ></v-textarea>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-tab-item>

        <!-- stage 2 survey -->
        <v-tab-item>
            <v-card
                elevation="2"
                outlined
                class="pa-4"
            >
                <h3 class="m-title mb-2">Обследование</h3>

                <v-col>
                    <v-card class="pa-4">
                        <v-select
                            :items="stageTypes[2]"
                            item-value="id"
                            item-text="label"
                            label="Техническое обследование"
                            return-object
                            v-model="events.survey.technical_survey"
                            @change="observeSurveyData"
                        ></v-select>
                    </v-card>
                </v-col>
                <div v-if="events.survey.technical_survey.id == 4">
                    <v-col>
                        <v-card class="pa-4">
                            <p class="font-weight-bold">Планируемые сроки выполнения:</p>
                            <v-text-field
                                type="date"
                                label="Начало"
                                v-model="events.survey.start"
                            ></v-text-field>
                            <v-text-field
                                type="date"
                                label="Окончание"
                                v-model="events.survey.end"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card class="pa-4">
                            <p class="font-weight-bold">Планируемая стоимость работ:</p>
                            <v-text-field
                                v-if="visibleFor.includes(organization.id)"
                                type="number"
                                label="Бюджетные средства"
                                v-model.number="events.survey.budjet"
                            ></v-text-field>
                            <v-text-field
                                type="number"
                                label="Внебюджетные средства"
                                v-model.number="events.survey.cost"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                </div>
            </v-card>
        </v-tab-item>

        <!-- stage 3 psd -->
        <v-tab-item>
            <v-card
                elevation="2"
                outlined
                class="pa-4"
            >
                <h3 class="m-title mb-2">ПСД</h3>

                <v-col>
                    <v-card class="pa-4">
                        <v-select
                            :items="stageTypes[3]"
                            item-value="id"
                            item-text="label"
                            label="Проектно-сметная (сметная) документация"
                            return-object
                            v-model="events.psd.documentation"
                            @change="observePsdData"
                        ></v-select>
                    </v-card>
                </v-col>
                <div v-if="events.psd.documentation.id == 6">
                    <v-col>
                        <v-card class="pa-4">
                            <p class="font-weight-bold">Планируемые сроки выполнения:</p>
                            <v-text-field
                                type="date"
                                label="Начало"
                                v-model="events.psd.start"
                            ></v-text-field>
                            <v-text-field
                                type="date"
                                label="Окончание"
                                v-model="events.psd.end"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card class="pa-4">
                            <p class="font-weight-bold">Планируемая стоимость работ:</p>
                            <v-text-field
                                type="number"
                                label="Бюджетные средства"
                                v-model.number="events.psd.budjet"
                            ></v-text-field>
                            <v-text-field
                                type="number"
                                label="Внебюджетные средства"
                                v-model.number="events.psd.not_budjet"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                </div>
            </v-card>
        </v-tab-item>

        <!-- stage 4 gge -->
        <v-tab-item>
            <v-card
                elevation="2"
                outlined
                class="pa-4"
            >
                <h3 class="m-title mb-2">ГГЭ</h3>

                <v-col>
                    <v-card class="pa-4">
                        <v-select
                            :items="stageTypes[4]"
                            item-value="id"
                            item-text="label"
                            label="Заключение государственной экспертизы"
                            return-object
                            v-model="events.gge.conclusion"
                            @change="observeGgeData"
                        ></v-select>
                    </v-card>
                </v-col>
                <div v-if="events.gge.conclusion.id == 8">
                    <v-col>
                        <v-card class="pa-4">
                            <p class="font-weight-bold">Планируемые сроки выполнения:</p>
                            <v-text-field
                                type="date"
                                label="Начало"
                                v-model="events.gge.start"
                            ></v-text-field>
                            <v-text-field
                                type="date"
                                label="Окончание"
                                v-model="events.gge.end"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card class="pa-4">
                            <p class="font-weight-bold">Планируемая стоимость работ:</p>
                            <v-text-field
                                type="number"
                                label="Бюджетные средства"
                                v-model.number="events.gge.budjet"
                            ></v-text-field>
                            <v-text-field
                                type="number"
                                label="Внебюджетные средства"
                                v-model.number="events.gge.not_budjet"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                </div>
            </v-card>
        </v-tab-item>

        <!-- stage 5 smr -->
        <v-tab-item>
            <v-card
                elevation="2"
                outlined
                class="pa-4"
            >
                <h3 class="m-title mb-2">СМР</h3>
                <v-row>
                    <v-col md="6">
                        <v-card class="pa-4">
                            <p class="font-weight-bold">Планируемые сроки выполнения:</p>
                            <v-text-field
                                type="date"
                                label="Начало"
                                v-model="events.smr.start"
                            ></v-text-field>
                            <v-text-field
                                type="date"
                                label="Окончание"
                                v-model="events.smr.end"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                    <v-col md="6">
                        <v-card class="pa-4">
                            <p class="font-weight-bold">Планируемая стоимость работ:</p>
                            <v-text-field
                                type="number"
                                label="Внебюджетные средства"
                                v-model.number="events.smr.not_budjet"
                            ></v-text-field>
                            <v-text-field
                                type="number"
                                label="Бюджетные средства"
                                v-model.number="events.smr.budjet"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card class="pa-4">
                            <p class="font-weight-bold">Дополнительная информация:</p>
                            <v-textarea
                                rows="3"
                                label="Краткое описание планируемых работ"
                                v-model="events.smr.short_description"
                            ></v-textarea>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-tab-item>
    </v-tabs>
</template>

<script>
import { ApiMixin } from '../../../mixins/ApiMixin'

export default {
    props: {
        events: {
            require: true
        },
        organization: {
            required: true
        },
        canUpdateRepairType: {
            required: true,
        }
    },
    mixins: [ ApiMixin ],
    data () {
        return {
            stageTypes: [],
            fields: null,
            tab: 0,
            visibleFor: ["2217"]
        }
    },
    async mounted () {
        this.stageTypes = await this.getGroupedEvents();
    },
    methods: {
        //Избавится от этого вообще то нужно
        getUpdatedFields () {
            return this.events;
        },
        async getGroupedEvents () {
            const stages = await this.getEventTypes();

            const groupedStages = stages.reduce( function ( accumulator, stage ) {
                accumulator[ stage.stage ] = accumulator[ stage.stage ] || [];
                accumulator[ stage.stage ].push( stage );
                return accumulator;
            }, {} );

            return groupedStages;
        },

        //следующие 3 метода - костыль костыльный, это должно быть на backend
        observeSurveyData () {
            if ( this.events.survey.technical_survey.id == 3 ) {
                this.events.survey.cost = null;
                this.events.survey.start = null;
                this.events.survey.end = null;
            }
        },
        observePsdData () {
            if ( this.events.psd.documentation.id == 5 ) {
                this.events.psd.budjet = null;
                this.events.psd.not_budjet = null;
                this.events.psd.end = null;
                this.events.psd.start = null;
            }
        },
        observeGgeData () {
            if ( this.events.gge.conclusion.id != 8 ) {
                this.events.gge.budjet = null;
                this.events.gge.not_budjet = null;
                this.events.gge.end = null;
                this.events.gge.start = null;
            }
        }
    }
}
</script>

<style>
</style>
