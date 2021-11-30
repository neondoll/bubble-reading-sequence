<template>
    <div>
        <v-stepper vertical v-model="step">
            <v-stepper-step step="1">
                Общая информация
            </v-stepper-step>
            <v-stepper-content step="1">
                <v-form id="infoForm" v-if="formData" @submit.prevent="validateInfo">
                    <m-errors id="errors" :errors="formData.errors"/>
                    <v-card
                        flat
                        class="mb-12"
                    >
                        <v-row>
                            <v-col>
                                <v-text-field name="lastName" v-model="formData.lastName" label="Фамилия"/>
                            </v-col>
                            <v-col>
                                <v-text-field name="name" v-model="formData.name" label="Имя"/>
                            </v-col>
                            <v-col>
                                <v-text-field name="middleName" v-model="formData.middleName" label="Отчество"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="1">
                                <v-select name="sex" :items="sex" item-value="value" item-text="text" label="Пол"
                                          v-model="formData.sex"/>
                            </v-col>
                            <v-col cols="2">
                                <v-checkbox label="Изменение Ф.И.О" v-model="formData.isOldName"/>
                            </v-col>
                            <v-col>
                                <v-text-field name="old_lastName" :disabled="!formData.isOldName"
                                              v-model="formData.old_lastName"
                                              label="Фамилия"/>
                            </v-col>
                            <v-col>
                                <v-text-field name="old_name" :disabled="!formData.isOldName"
                                              v-model="formData.old_name"
                                              label="Имя"/>
                            </v-col>
                            <v-col>
                                <v-text-field name="old_middleName" :disabled="!formData.isOldName"
                                              v-model="formData.old_middleName"
                                              label="Отчество"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field name="birthday"
                                              v-model="formData.birthday"
                                              type="date"
                                              label="Дата рождения"/>
                            </v-col>
                            <v-col>
                                <v-text-field name="birthplace"
                                              v-model="formData.birthplace"
                                              label="Место рождения"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-textarea name="citizenship" label="Гражданство" v-model="formData.citizenship"/>
                            </v-col>
                        </v-row>
                        <p class="title">
                            Паспорт
                        </p>
                        <v-divider/>
                        <v-row>
                            <v-col>
                                <v-text-field name="passport_serial"
                                              v-model="formData.passport_serial"
                                              label="Серия"/>
                            </v-col>
                            <v-col>
                                <v-text-field name="passport_number"
                                              v-model="formData.passport_number"
                                              label="Номер"/>
                            </v-col>
                            <v-col>
                                <v-text-field name="passport_date"
                                              type="date"
                                              v-model="formData.passport_date"
                                              label="Дата"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-textarea name="passport_place" label="Место выдачи"
                                            v-model="formData.passport_place"/>
                            </v-col>
                        </v-row>
                        <p class="title">
                            Адрес регистрации
                        </p>
                        <v-divider/>
                        <v-row>
                            <v-col>
                                <v-text-field name="index"
                                              v-model="formData.index"
                                              label="индекс"/>
                            </v-col>
                            <v-col>
                                <input type="hidden" v-model="formData.region_id" name="region_id">
                                <v-autocomplete
                                    :items="regions"
                                    item-text="name"
                                    item-value="id"
                                    v-model.number="formData.region_id"
                                    label="республика (край, область) "/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-textarea name="district" label="район"
                                            v-model="formData.district"/>
                            </v-col>
                            <v-col>
                                <v-textarea name="city" label="населенный пункт "
                                            v-model="formData.city"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field name="street"
                                              v-model="formData.street"
                                              label="улица"/>
                            </v-col>
                            <v-col>
                                <v-text-field name="house"
                                              v-model="formData.house"
                                              label="дом"/>
                            </v-col>
                            <v-col>
                                <v-text-field name="corpus"
                                              v-model="formData.corpus"
                                              label="корп"/>
                            </v-col>
                            <v-col>
                                <v-text-field name="room"
                                              v-model="formData.room"
                                              label="квартира"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <input type="hidden" v-model="formData.fact_region_id" name="fact_region_id">
                                <v-autocomplete
                                    :items="regions"
                                    item-text="name"
                                    item-value="id"
                                    v-model.number="formData.fact_region_id"
                                    label="Регион фактического проживания"/>
                            </v-col>
                            <v-col>
                                <v-select
                                    name="ready_to_move" :items="[{value:'0', text:'Нет'},{value:'1', text:'Да'}]"
                                    item-value="value" item-text="text" label="Готовность к переезду"
                                    v-model="formData.ready_to_move"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field name="email"
                                              v-model="formData.email"
                                              label="E-mail"/>
                            </v-col>
                            <v-col>
                                <v-text-field name="phone"
                                              v-model="formData.phone"
                                              label="Сотовый телефон"/>
                            </v-col>
                            <v-col>
                                <v-text-field name="job_phone"
                                              v-model="formData.job_phone"
                                              label="Рабочий телефон"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <input type="hidden" v-model="formData.social_network" name="social_network">
                                <m-chip-select v-model="formData.social_network"
                                               label="Ссылки на социальные сети 2-3 шт"/>
                            </v-col>
                        </v-row>

                        <v-divider/>

                        <v-row>
                            <v-col>
                                <p class="title">
                                    Какими языками владеете:
                                </p>
                                <m-editable-table
                                    class="pl-2"
                                    model-name="language"
                                    :fields="[
                                    {text: 'id', value: 'id', type: 'hidden'},
                                    {text: 'Язык', value: 'name',},
                                    {text: 'Степень владения',selectable:true, value: 'level'},
                                    ]"
                                    :selectable-items="langLevel"
                                    v-model="formData.languages"
                                />
                            </v-col>
                            <v-col>
                                <p class="title">
                                    Навыки работы с компьютером:
                                </p>
                                <m-editable-table
                                    class="pr-2"
                                    model-name="computer_skills"
                                    :fields="[
                                    {text: 'id', value: 'id', type: 'hidden'},
                                    {text: 'Вид программного обеспечения',group:true, value: 'type',},
                                    {text: 'Конкретный программный продукт', value: 'name'},
                                    {text: 'Степень владения',selectable:true, value: 'level'},
                                ]"
                                    group-by="type"
                                    :group="CompSkillsGroup"
                                    :selectable-items="CompSkillsLevel"
                                    v-model="formData.computer_skills"
                                />
                            </v-col>


                        </v-row>


                    </v-card>
                    <v-btn
                        color="primary"
                        type="submit"
                    >
                        Далее
                    </v-btn>
                </v-form>
            </v-stepper-content>
            <v-stepper-step step="2">
                Сведения об образовании
            </v-stepper-step>
            <v-stepper-content step="2">
                <v-form id="edForm" v-if="formData" @submit.prevent="validateEducations">
                    <m-errors id="educationErrors" :errors="formData.educationErrors"/>
                    <v-card
                        flat
                        class="mb-12"
                    >
                        <v-row>
                            <v-col>
                                <input type="hidden" v-model="formData.education_level" name="education_level">
                                <v-select
                                    :items="educationLevels" item-value="id" item-text="level"
                                    name="education_level" v-model="formData.education_level"
                                    label="Уровень образования (наивысший)"/>
                            </v-col>
                        </v-row>

                        <v-divider/>
                        <v-row>
                            <v-col>
                                <p class="title">
                                    Информация об образовании (все ступени):
                                </p>
                            </v-col>
                            <v-col>
                                <p class="title">
                                    Дополнительное профессиональное образование (в последние 5 лет, начиная с
                                    последнего):
                                </p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <m-editable-table
                                    class="pl-2"
                                    model-name="education"
                                    :fields="educationFields"
                                    v-model="formData.educations"
                                />
                            </v-col>
                            <v-col>
                                <m-editable-table
                                    class="pl-2 pr-2"
                                    model-name="dpo"
                                    :fields="dpoFields"
                                    :selectable-items="dpoLevels"
                                    v-model="formData.dpos"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <p class="title">
                                    Участие в общественных организациях (в том числе профессиональных,
                                    научно-технических и
                                    др.):
                                </p>
                                <m-editable-table
                                    class="pl-2  pr-2"
                                    model-name="common_org"
                                    :fields="commonOrgs"
                                    :selectable-items="commonOrgsLevels"
                                    v-model="formData.common_orgs"
                                />
                            </v-col>
                        </v-row>


                    </v-card>
                    <v-btn
                        color="primary"
                        type="submit"
                    >
                        Далее
                    </v-btn>
                    <v-btn text @click="step = 1">
                        Назад
                    </v-btn>
                </v-form>
            </v-stepper-content>
            <v-stepper-step step="3">
                Трудовая деятельность
            </v-stepper-step>
            <v-stepper-content step="3">
                <v-form id="jobForm" v-if="formData" @submit.prevent="validateJobs">
                    <m-errors id="jobErrors" :errors="formData.jobErrors"/>
                    <v-card
                        flat
                        class="mb-12"
                    >
                        <v-row>
                            <v-col>
                                <v-textarea name="job_place" label="Место работы в настоящее время"
                                            v-model="formData.job_place"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field label="Должность" name="job_position" v-model="formData.job_position"/>
                            </v-col>
                            <v-col>
                                <v-text-field name="job_position_date" type="date"
                                              label="C какого времени в этой должности"
                                              v-model="formData.job_position_date"/>
                            </v-col>
                        </v-row>

                        <v-divider/>
                        <v-row>
                            <v-col>
                                <input type="hidden" name="job_org_min" v-model="formData.job_org_min">
                                <v-select
                                    label="В системе организаций, подведомственных Министерству науки и высшего образования Российской Федерации"
                                    v-model="formData.job_org_min"
                                    item-text="text"
                                    item-value="value"
                                    :items="[{value:1,text:'Да'},{value:0,text:'Нет'}]"
                                />
                            </v-col>
                        </v-row>
                        <v-divider/>
                        <v-row>
                            <v-col>
                                <input type="hidden" name="stage" v-model="formData.stage">
                                <v-select
                                    label="Общий стаж работы (полных лет)"
                                    v-model="formData.stage"
                                    :items="getYears"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                            <span class="title">
                                Из них
                            </span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <input type="hidden" name="stage_gos" v-model="formData.stage_gos">
                                <v-select
                                    label="Государственная служба"
                                    v-model="formData.stage_gos"
                                    :items="getYears"
                                />
                            </v-col>
                            <v-col>
                                <input type="hidden" name="stage_nauka" v-model="formData.stage_nauka">
                                <v-select
                                    label="В секторе высшего образования и науки"
                                    v-model="formData.stage_nauka"
                                    :items="getYears"
                                />
                            </v-col>
                            <v-col>
                                <input type="hidden" name="stage_comers" v-model="formData.stage_comers">
                                <v-select
                                    label="В предпринимательском (коммерческом) секторе"
                                    v-model="formData.stage_comers"
                                    :items="getYears"
                                />
                            </v-col>
                            <v-col>
                                <input type="hidden" name="stage_no_comers" v-model="formData.stage_no_comers">
                                <v-select
                                    label="В некоммерческом секторе"
                                    v-model="formData.stage_no_comers"
                                    :items="getYears"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                            <span class="title">
                                Включая
                            </span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <input type="hidden" name="stage_rukovod" v-model="formData.stage_rukovod">
                                <v-select
                                    label="Стаж работы на руководящих позициях (полных лет)"
                                    v-model="formData.stage_rukovod"
                                    :items="getYears"
                                />
                            </v-col>
                            <v-col>
                                <input type="hidden" name="sphere_uprav_id" v-model="formData.sphere_uprav_id">
                                <v-select
                                    label="Сфера управленческой экспертизы (основная)"
                                    v-model="formData.sphere_uprav_id"
                                    :items="sphera"
                                    item-value="id"
                                    item-text="value"
                                />
                            </v-col>
                            <v-col>
                                <input type="hidden" name="sphere_uprav_dop_id" v-model="formData.sphere_uprav_dop_id">
                                <v-select
                                    label="Сфера управленческой экспертизы (дополнительная при наличии)"
                                    v-model="formData.sphere_uprav_dop_id"
                                    :items="sphera"
                                    item-value="id"
                                    item-text="value"
                                />
                            </v-col>
                            <v-col>

                                <input type="hidden" name="max_count_people_id" v-model="formData.max_count_people_id">

                                <v-select
                                    label="Максимальная численность сотрудников, которые были у Вас в подчинении"
                                    v-model="formData.max_count_people_id"
                                    :items="peoples"
                                    item-value="id"
                                    item-text="value"
                                />
                            </v-col>
                        </v-row>
                        <v-divider/>
                        <v-col>
                        <span class="title">
                            Выполняемая работа с начала трудовой деятельности (укажите все места Вашей работы в прошлом) (начиная с первого места работы):
                        </span>
                            <m-editable-table
                                model-name="job_history"
                                :fields="jobFields"
                                :selectable-items="jobSelect"
                                v-model="formData.job_history"
                            />
                        </v-col>

                    </v-card>
                    <v-btn
                        color="primary"
                        type="submit"
                    >
                        Далее
                    </v-btn>
                    <v-btn text @click="step = 2">
                        Назад
                    </v-btn>
                </v-form>
            </v-stepper-content>
            <v-stepper-step step="4">
                Квалификационные показатели
            </v-stepper-step>
            <v-stepper-content step="4">
                <v-form id="kvalForm" v-if="formData" @submit.prevent="validateKval">
                    <m-errors id="kvalErrors" :errors="formData.kvalErrors"/>
                    <v-card
                        flat
                        class="mb-12"
                    >
                        <v-row>
                            <v-col>
                                <input type="hidden" v-model="formData.degree_id" name="degree_id">
                                <v-select :items="stepens" item-value="id" item-text="value" label="Ученая степень"
                                          v-model="formData.degree_id"/>
                            </v-col>
                            <v-col>
                                <input type="hidden" v-model="formData.sphere_n_id" name="sphere_n_id">
                                <v-select :items="sphera2" item-value="id" item-text="value"
                                          label="Сфера научной экспертизы (основная)" v-model="formData.sphere_n_id"/>
                            </v-col>
                            <v-col>
                                <input type="hidden" v-model="formData.sphere_n_dop_id" name="sphere_n_dop_id">
                                <v-select :items="sphera2" item-value="id" item-text="value"
                                          label="Сфера научной экспертизы (дополнительная при наличии)"
                                          v-model="formData.sphere_n_dop_id"/>
                            </v-col>
                        </v-row>

                        <v-divider/>
                        <v-row>
                            <v-col>
                                <v-text-field name="shifr" label="Шифр специальности" v-model="formData.shifr"/>
                            </v-col>
                            <v-col>
                                <input type="hidden" v-model="formData.otrasl" name="otrasl">
                                <v-select :items="sphera2" item-value="id" item-text="value" label="Отрасль науки"
                                          v-model="formData.otrasl"/>
                            </v-col>
                            <v-col>
                                <input type="hidden" v-model="formData.zvan" name="zvan">
                                <v-select :items="zvans" item-value="id" item-text="value" label="Ученое звание"
                                          v-model="formData.zvan"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <input type="hidden" v-model="formData.hirsh" name="hirsh">
                                <v-select :items="getYears" label="Индекс Хирша: " v-model="formData.hirsh"/>
                            </v-col>
                            <v-col>
                                <input type="hidden" v-model="formData.scopus" name="scopus">
                                <v-select :items="getYears" label="Scopus" v-model="formData.scopus"/>
                            </v-col>
                            <v-col>
                                <input type="hidden" v-model="formData.web_of_science" name="web_of_science">
                                <v-select :items="getYears" label="Web of Science" v-model="formData.web_of_science"/>
                            </v-col>
                            <v-col>
                                <input type="hidden" v-model="formData.inoe" name="inoe">
                                <v-select :items="getYears" label="Иное" v-model="formData.inoe"/>
                            </v-col>
                        </v-row>

                    </v-card>
                    <v-btn
                        color="primary"
                        type="submit"
                    >
                        Далее
                    </v-btn>
                    <v-btn text @click="step = 3">
                        Назад
                    </v-btn>
                </v-form>
            </v-stepper-content>
            <v-stepper-step step="5">
                Дополнительная информация
            </v-stepper-step>
            <v-stepper-content step="5">
                <v-form id="dopForm" v-if="formData" @submit.prevent="validateDop">
                    <m-errors id="dopErrors" :errors="formData.dopErrors"/>
                    <v-card
                        flat
                        class="mb-12"
                    >
                        <v-row>
                            <v-col>
                                <v-textarea
                                    name="chin"
                                    v-model="formData.chin"
                                    label="Классный чин, дипломатический ранг, воинское звание, специальное звание:"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-textarea
                                    name="ugolov"
                                    v-model="formData.ugolov"
                                    label="Привлекались ли Вы к уголовной ответственности и были ли Вы судимы (когда, за что, какое решение принято судом)? Являлись ли Вы подозреваемым или обвиняемым по уголовному делу (ко-гда, в связи с чем)? "
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                            <span class="title">
                                    Допуск к государственный тайне, оформленный за период работы, службы, учебы, его форма, но-мер и дата (если имеется)
                            </span>
                                <m-editable-table
                                    class="pl-1 pr-1"
                                    model-name="gos_tainy"
                                    :fields="GosTFields"
                                    :selectable-items="GosTSelect"
                                    v-model="formData.gos_tainy"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <input type="hidden" v-model="formData.awards" name="awards">
                                <m-chip-select v-model="formData.awards"
                                               label="Государственные, ведомственные, региональные награды, иные виды поощрений (если имеются)"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-textarea
                                    name="comerc_uchast"
                                    v-model="formData.comerc_uchast"
                                    label="Принимаете ли Вы участие в деятельности коммерческих организаций на платной основе; владеете ли ценными бумагами, акциями, долями участия в уставных капиталах организации (информацию необходимо представить на дату заполнения анкеты)"
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-textarea
                                    name="opit_dey"
                                    v-model="formData.opit_dey"
                                    label="Опыт деятельности, реализованные проекты "
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-textarea
                                    name="kompetencii"
                                    v-model="formData.kompetencii"
                                    label="Компетенции "
                                />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-textarea
                                    name="achievements"
                                    v-model="formData.achievements"
                                    label="Достижения "
                                />
                            </v-col>
                        </v-row>

                    </v-card>
                    <v-btn
                        color="primary"
                        type="submit"
                    >
                        Далее
                    </v-btn>
                    <v-btn color="primary" target="_blank" :href="`/form/${formData.id}/export`">Сформировать</v-btn>
                    <v-btn text @click="step = 3">
                        Назад
                    </v-btn>
                </v-form>
            </v-stepper-content>
        </v-stepper>
    </div>

</template>

<script>
import MChipSelect from "../../organisms/MChipSelect";
import MErrors from "../../organisms/MErrors";
import {ApiMixin} from "../../../mixins";
import {formHelper} from "./formHelper";
import MEditableTable from "../../organisms/MEditableTable";

export default {
    name: "formFormTemplate",
    components: {MEditableTable, MChipSelect, MErrors},
    data: () => ({
        educationFields: [
            {text: 'id', value: 'id', type: 'hidden'},
            {text: 'наименование организации, образовательной организации', value: 'org',},
            {text: 'год начала обучения', value: 'start_year', type: 'number'},
            {text: 'год окончания обучения', value: 'end_year', type: 'number'},
            {text: 'специальность, квалификация', value: 'speciality'},
            {text: '№ диплома', value: 'diplom'},
        ],
        jobFields: [
            {text: 'id', value: 'id', type: 'hidden'},
            {text: 'Год начала', value: 'start_year', type: 'number'},
            {text: 'Год окончания', value: 'end_year', type: 'number'},
            {text: 'Сокращение в названии (при наличии)', value: 'short_name', selectable: true},
            {text: 'Название организации, учреждения', value: 'org_name'},
            {text: 'Местонахождение организации (адрес)', value: 'org_place'},
            {text: 'Должность', value: 'position'},
            {text: 'Достижения', value: 'awards'},
        ],
        GosTFields: [
            {text: 'id', value: 'id', type: 'hidden'},
            {text: 'Форма допуска к государственной тайне', value: 'form', selectable: true},
            {text: 'Место работы, службы, учебы, где оформлялся ', value: 'org',},
            {text: 'Номер', value: 'number',},
            {text: 'Дата', value: 'job_date', type: 'date'},
        ],
        GosTSelect: [
            {text: 'К сведениям особой важности', value: 'К сведениям особой важности'},
            {text: 'К совершенно секрет-ным сведениям', value: 'К совершенно секрет-ным сведениям',},
            {text: 'К секретным сведениям', value: 'К секретным сведениям',},
        ],
        jobSelect: [
            {value: 'КБ', text: 'КБ'},
            {value: 'НИИ', text: 'НИИ'},
            {value: 'НФ', text: 'НФ'},
            {value: 'РАН', text: 'РАН'},
            {value: 'ФГБОУ ВО', text: 'ФГБОУ ВО'},
            {value: 'ФГБНУ', text: 'ФГБНУ'},
        ],
        dpoFields: [
            {text: 'id', value: 'id', type: 'hidden'},
            {text: 'Название программы обучения', value: 'education_program',},
            {text: 'Название организации, образовательной организации', value: 'org'},
            {text: 'год окончания обучения', value: 'end_year', type: 'number'},
            {text: 'Кол-во часов', value: 'hours', type: 'number'},
            {text: 'Категория про-граммы обучения', value: 'category', selectable: true},
        ],
        commonOrgs: [
            {text: 'id', value: 'id', type: 'hidden'},
            {text: 'Годы пребывания', value: 'years',},
            {text: 'Населенный пункт', value: 'locality'},
            {text: 'Название организации', value: 'org'},
            {text: 'Направление деятельности организации', value: 'org_goal'},
            {text: 'Ваш статус в организации', value: 'position', selectable: true},
            {text: 'Ваша роль, функционал', value: 'role'},
        ],
        sphera: [],
        stepens: [],
        sphera2: [],
        zvans: [],
        peoples: [],
        commonOrgsLevels: [],
        dpoLevels: [],
        sex: [
            {value: 0, text: 'Мужской'},
            {value: 1, text: 'Женский'}
        ],
        langLevel: [
            {value: 0, text: 'Свободно владею'},
            {value: 1, text: 'Читаю и могу объясняться'},
            {value: 2, text: 'Читаю и перевожу со словарем'}
        ],
        CompSkillsLevel: [],
        CompSkillsGroup: [
            {value: 0, text: 'Текстовые редакторы'},
            {value: 1, text: 'Электронные таблицы'},
            {value: 2, text: 'Правовые базы данных'},
            {value: 3, text: 'Специальные программные продукты'},
            {value: 4, text: 'Операционные системы'},
        ],
        educationLevels: [],
        regions: [],
        step: 1,
        formData: {}
    }),
    mixins: [ApiMixin, formHelper],
    computed: {
        getYears() {
            return [...Array(51).keys()]
        }
    },
    async mounted() {
        this.formData = this.value
        this.regions = await this.getRegions();
        this.CompSkillsLevel = (await this.getDictionaryComputerSkills()).map(item => ({
            value: item.id,
            text: item.name
        }))
        this.dpoLevels = (await this.getDictionaryDpoEducationLevel()).map(item => ({
            value: item.id,
            text: item.value
        }))
        this.commonOrgsLevels = (await this.getDictionaryCommonOrgPosition()).map(item => ({
            value: item.id,
            text: item.name
        }))
        this.educationLevels = await this.getDictionaryEducationLevels();
        this.sphera = await this.getDictionaryFormSpher();
        this.peoples = await this.getDictionaryFormPeople();
        this.stepens = await this.getDictionaryDegree();
        this.sphera2 = await this.getDictionarySphereScience();
        this.zvans = await this.getDictionaryUchZvan();
    },
    watch: {
        value: {
            handler() {
                this.formData = this.value
            },
            deep: true
        }
    },
    methods: {
        async validateDop(e) {
            await this.validate(e, '/form/validate-dop', 'dopErrors', 5);
            await this.submitInfo();
        },
        async validateKval(e) {
            await this.validate(e, '/form/validate-kval', 'kvalErrors', 5);
        },
        async validateJobs(e) {
            await this.validate(e, '/form/validate-jobs', 'jobErrors', 4);
        },
        async validateEducations(e) {
            await this.validate(e, '/form/validate-educations', 'educationErrors', 3);
        },
        async validateInfo(e) {
            await this.validate(e, '/form/validate-info', 'errors', 2);
        },

        async submitInfo() {
            await this.validateInfo('infoForm');
            await this.validateEducations('edForm');
            await this.validateJobs('jobForm');
            await this.validateKval('kvalForm');


            let f1 = new FormData(infoForm);
            let f2 = new FormData(edForm);
            let f3 = new FormData(jobForm);
            let f4 = new FormData(kvalForm);
            let f5 = new FormData(dopForm);

            let f6 = new FormData();
            for (let value of f1.entries()) {
                f6.append(value[0], value[1]);
            }
            for (let value of f2.entries()) {
                f6.append(value[0], value[1]);
            }
            for (let value of f3.entries()) {
                f6.append(value[0], value[1]);
            }
            for (let value of f4.entries()) {
                f6.append(value[0], value[1]);
            }
            for (let value of f5.entries()) {
                f6.append(value[0], value[1]);
            }

            const submitter = Axios.post('/form/save-info', f6, {
                params: {
                    id: this.formData.id
                }
            });
            submitter.catch(({response}) => {
                this.formData.errors = response.data.errors;
                this.$forceUpdate();
                if (this.formData.errors) {
                    this.$nextTick(() => {
                        window.scrollTo({
                            top: document.getElementById('infoErrors').offsetTop,
                            left: 0,
                            behavior: 'smooth'
                        })
                    })
                }

            })
            submitter.then(async ({data}) => {
                await this.$router.push({name: 'main'});
            })
            await submitter;
        },
    },
    props: ['value']
}
</script>

<style scoped>

</style>
