<template>
    <m-page v-if="!loading"
            :pages="[{text: 'Целевые Субсидии', disabled: true}, {text: code, href: `/subsidies/${code}`}, {text: subsidy.name, disabled: true}]">
        <v-container class="d-flex mt-1" fluid>
            <div>
                <div class="align-center d-flex flex-wrap" style="gap: 8px;">
                    <div class="font-montserrat-normal-700" style="color: #405580;">{{ subsidy.name }}</div>
                    <v-chip class="font-inter-normal-400" color="#778094" label style="color: white;">
                        {{ subsidy.status.value }}
                    </v-chip>
                </div>
                <div class="font-inter-normal-400" style="color: #405580; margin-top: 8px;">
                    Код субсидии: <span class="font-inter-normal-700" style="color: #4E86E2;">{{ code }}</span>
                </div>
            </div>
            <div class="ml-auto d-flex flex-wrap justify-end" style="gap: 8px; width: min-content;">
                <v-btn color="primary"
                       v-if="(is_admin || is_user) && [1, 3].indexOf(Number(subsidy.status.id)) !== -1 && filesFilling"
                       @click="setStatus(2)">
                    Отправить на проверку
                </v-btn>
                <v-alert class="mb-0" shaped type="info"
                         v-if="(is_admin || is_user) && [1, 3].indexOf(Number(subsidy.status.id)) !== -1 && !filesFilling">
                    Отправка&nbsp;на&nbsp;проверку&nbsp;станет&nbsp;доступна,
                    когда&nbsp;будут&nbsp;загружены&nbsp;обязательные&nbsp;файлы
                </v-alert>
                <v-btn color="primary" v-if="(is_admin || is_mon) && Number(subsidy.status.id) === 2"
                       @click="setStatus(4)">
                    Согласовать экспертом Минобрнауки РФ
                </v-btn>
                <v-btn color="primary" v-if="(is_admin || is_mon) && Number(subsidy.status.id) === 4"
                       @click="setStatus(7)">
                    Получено положительное решение бюджетной комиссии
                </v-btn>
                <v-btn color="primary" v-if="(is_admin || is_mon) && Number(subsidy.status.id) === 4"
                       @click="setStatus(5)">
                    Получено отрицательное решение бюджетной комиссии
                </v-btn>
                <v-btn color="primary" v-if="(is_admin || is_mon) && Number(subsidy.status.id) === 4"
                       @click="setStatus(6)">
                    Заявка не согласована
                </v-btn>
                <v-btn color="primary"
                       v-if="(is_admin || is_mon) && [2, 4, 5, 6, 7, 8].indexOf(Number(subsidy.status.id)) !== -1"
                       @click="setStatus(3)">
                    Вернуть на доработку
                </v-btn>
                <v-btn color="primary" v-if="(is_admin || is_mon) && Number(subsidy.status.id) === 7"
                       @click="setStatus(8)">
                    В Архив
                </v-btn>
            </div>
        </v-container>
        <v-card class="mt-3">
            <v-data-table hide-default-footer hide-default-header :headers="headers_characteristics"
                          :items="characteristics">
                <template v-slot:item.title="{ item }">
                    <span class="font-inter-normal-400" style="color: #1B202B;">{{ item.title }}</span>
                </template>
                <template v-slot:item.text="{ item }">
                    <span class="font-inter-normal-700" style="color: #1B202B;">{{ item.text }}</span>
                </template>
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title class="font-inter-normal-800" style="color: #4E86E2;">
                            Основная информация
                        </v-toolbar-title>
                        <v-divider class="mx-4" inset vertical/>
                        <v-spacer/>
                        <template v-if="(is_admin || is_user) && [1, 3].indexOf(Number(subsidy.status.id)) !== -1">
                            <v-btn color="primary" icon small @click="openDialogCharacteristics">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-dialog scrollable transition="dialog-bottom-transition" v-model="dialog_characteristics">
                                <v-card>
                                    <v-toolbar color="primary" dark>
                                        <v-toolbar-title>Характеристики объекта: редактирование</v-toolbar-title>
                                        <v-spacer/>
                                        <v-btn dark icon @click="closeDialogCharacteristics">
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                    </v-toolbar>
                                    <v-card-text style="padding: 20px 24px;">
                                        <v-autocomplete dense item-text="id"
                                                        label="Выберите объект из недвижимость.иасмон.рф" outlined
                                                        return-object v-model="form_characteristics.real_estate"
                                                        :items="real_estates" :rules="[rules.required]"
                                                        @change="setRealEstate">
                                            <template #item={item}>
                                                <div class="mb-2">
                                                    <p class="ma-0">{{ item.name }}</p>
                                                    <span class="text--secondary font-small">{{ item.adr }}</span>
                                                </div>
                                            </template>
                                        </v-autocomplete>
                                        <v-textarea auto-grow counter="255" dense label="Название объекта" outlined
                                                    row-height="15" rows="1" v-model="form_characteristics.name"
                                                    :readonly="form_characteristics.real_estate_id"
                                                    :rules="[rules.required, rules.max(255)]"/>
                                        <v-textarea auto-grow counter="255" dense label="Краткое описание" outlined
                                                    row-height="15" rows="1"
                                                    v-model="form_characteristics.short_description"
                                                    :rules="[rules.required, rules.max(255)]"/>
                                        <v-select dense item-text="value" item-value="id" label="Вид ремонта" outlined
                                                  v-model="form_characteristics.repair_type_id" :items="repair_types"
                                                  :rules="[rules.required]"/>
                                        <v-textarea auto-grow counter="255" dense label="Адрес" outlined row-height="15"
                                                    rows="1" v-model="form_characteristics.address"
                                                    :readonly="form_characteristics.real_estate_id"
                                                    :rules="[rules.required, rules.max(255)]"/>
                                        <v-autocomplete dense item-text="region" item-value="id" label="Субъект РФ"
                                                        outlined v-model="form_characteristics.region_id"
                                                        :items="regions" :rules="[rules.required]"/>
                                        <v-textarea auto-grow counter="255" dense label="Город" outlined row-height="15"
                                                    rows="1" v-model="form_characteristics.city"
                                                    :rules="[rules.required, rules.max(255)]"/>
                                        <v-text-field counter="255" dense label="Кадастровый номер" outlined
                                                      v-model="form_characteristics.cadastral_number"
                                                      :rules="[rules.required, rules.max(255)]"/>
                                        <v-text-field counter="255" dense label="Год постройки здания" outlined
                                                      v-model="form_characteristics.build_year"
                                                      :rules="[rules.required, rules.max(255)]"/>
                                        <v-text-field counter="255" dense label="Год вода здания в эксплуатацию"
                                                      outlined v-model="form_characteristics.start_year"
                                                      :rules="[rules.required, rules.max(255)]"/>
                                        <v-text-field counter="255" dense
                                                      label="Год проведения последнего капитального ремонта.реконструкции"
                                                      outlined v-model="form_characteristics.last_fix_year"
                                                      :rules="[rules.required, rules.max(255)]"/>
                                        <v-row>
                                            <v-col cols="12" md="6" lg="5" xl="3">
                                                <v-select dense label="Наличие предписания надзорных органов" outlined
                                                          v-model="form_characteristics.is_prescription" :items="no_yes"
                                                          :rules="[rules.required]"/>
                                            </v-col>
                                            <v-col cols="12" md="6" lg="7" xl="9"
                                                   v-if="form_characteristics.is_prescription">
                                                <v-textarea auto-grow counter="255" dense label="Подробности" outlined
                                                            row-height="15" rows="1"
                                                            v-model="form_characteristics.prescription"
                                                            :rules="[rules.required, rules.max(255)]"/>
                                            </v-col>
                                        </v-row>
                                        <v-select dense label="Износ здания (%)" outlined
                                                  v-model="form_characteristics.wear" :items="wears"
                                                  :rules="[rules.required]"/>
                                        <v-textarea auto-grow counter="255" dense
                                                    label="Основания для использования здания" outlined row-height="15"
                                                    rows="1" v-model="form_characteristics.reasons"
                                                    :rules="[rules.required, rules.max(255)]"/>
                                        <v-textarea auto-grow counter="255" dense label="Право оперативного управления"
                                                    outlined row-height="15" rows="1"
                                                    v-model="form_characteristics.pravo_op_upr"
                                                    :rules="[rules.required, rules.max(255)]"/>
                                        <v-textarea auto-grow counter="255" dense label="Назначение" outlined
                                                    row-height="15" rows="1" v-model="form_characteristics.assignment"
                                                    :rules="[rules.required, rules.max(255)]"/>
                                        <v-textarea auto-grow counter="255" dense label="Право собственности" outlined
                                                    row-height="15" rows="1" v-model="form_characteristics.pravo_sobstv"
                                                    :rules="[rules.required, rules.max(255)]"/>
                                        <v-text-field counter="255" dense label="Общая площадь здания - всего, кв.м."
                                                      outlined v-model="form_characteristics.square_total"
                                                      :rules="[rules.required, rules.max(255)]"/>
                                        <v-text-field counter="255" dense
                                                      label="Общая площадь здания (помещений) - планируемого к капитальному ремонту, кв.м."
                                                      outlined v-model="form_characteristics.square_cap_rem"
                                                      :rules="[rules.required, rules.max(255)]"/>
                                        <v-text-field counter="255" dense
                                                      label="Используется в уставной деятельности, кв.м." outlined
                                                      v-model="form_characteristics.used"
                                                      :rules="[rules.required, rules.max(255)]"/>
                                        <v-text-field counter="255" dense
                                                      label="Не используется в уставной деятельности, кв.м." outlined
                                                      v-model="form_characteristics.not_used"
                                                      :rules="[rules.required, rules.max(255)]"/>
                                        <v-text-field counter="255" dense label="Предоставлено в аренду, кв.м." outlined
                                                      v-model="form_characteristics.in_rent"
                                                      :rules="[rules.required, rules.max(255)]"/>
                                        <v-textarea auto-grow class="mt-2" counter="255" dense hide-details="auto"
                                                    label="Примечание" outlined row-height="15" rows="1"
                                                    v-model="form_characteristics.note"
                                                    :rules="[rules.required, rules.max(255)]"/>
                                    </v-card-text>
                                    <v-divider/>
                                    <v-card-actions>
                                        <v-spacer/>
                                        <v-btn color="blue darken-1" text :disabled="!validateDialogCharacteristics"
                                               @click="saveCharacteristics">
                                            Сохранить
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </template>
                    </v-toolbar>
                </template>
            </v-data-table>
        </v-card>
        <subsidy-stages class="mt-3" :code="code"
                        :is-change="(is_admin || is_user) && [1, 3].indexOf(Number(subsidy.status.id)) !== -1"
                        :subsidy-id="subsidy.id"/>
        <subsidy-need-justifications class="mt-3" :code="code"
                                     :is-change="(is_admin || is_user) && [1, 3].indexOf(Number(subsidy.status.id)) !== -1"
                                     :subsidy-id="subsidy.id"/>
        <subsidy-expected-result class="mt-3" :code="code"
                                 :is-change="(is_admin || is_user) && [1, 3].indexOf(Number(subsidy.status.id)) !== -1"
                                 :subsidy-id="subsidy.id"/>
        <subsidy-files class="mt-3" :code="code"
                       :is-change="(is_admin || is_user) && [1, 3].indexOf(Number(subsidy.status.id)) !== -1"
                       :subsidy-id="subsidy.id"/>
        <subsidy-schedule-events class="mt-3" v-if="[7, 8].indexOf(Number(subsidy.status.id)) !== -1" :code="code"
                                 :is-accepted-expert="(is_admin || is_mon) && Number(subsidy.status.id) === 7"
                                 :is-change="(is_admin || is_user) && Number(subsidy.status.id) === 7"
                                 :subsidy-id="subsidy.id"/>
        <v-expansion-panels class="mt-3">
            <subsidy-conclusions :code="code" :is-change="is_admin || is_mon" :subsidy-id="subsidy.id"/>
        </v-expansion-panels>
    </m-page>
</template>

<script>
import MPage from "../../../organisms/MPage";
import SubsidyConclusions from "../../../organisms/SubsidyConclusions";
import SubsidyExpectedResult from "../../../organisms/SubsidyExpectedResult";
import SubsidyFiles from "../../../organisms/SubsidyFiles";
import SubsidyNeedJustifications from "../../../organisms/SubsidyNeedJustifications";
import SubsidyScheduleEvents from "../../../organisms/SubsidyScheduleEvents";
import SubsidyStages from "../../../organisms/SubsidyStages";
import {SubsidiesMixin} from "../../../../mixins/SubsidiesMixin";

export default {
    components: {
        MPage, SubsidyConclusions, SubsidyExpectedResult, SubsidyFiles, SubsidyNeedJustifications,
        SubsidyScheduleEvents, SubsidyStages
    },
    computed: {
        characteristics() {
            return [
                {title: 'ID', text: this.subsidy.id},
                {title: 'ID организации', text: this.subsidy.organization_id},
                {title: 'Наименование организации', text: this.subsidy.organization.name},
                {title: 'Наименование', text: this.subsidy.name},
                /*{title: 'Краткое описание', text: this.subsidy.short_description},
                {title: 'Вид ремонта', text: this.subsidy.repair_type.value},*/
                {title: 'Полный адрес объекта', text: this.subsidy.address},
                /*{title: 'Субъект РФ', text: this.subsidy.region.region},
                {title: 'Город', text: this.subsidy.city},
                {title: 'Кадастровый номер', text: this.subsidy.cadastral_number},
                {title: 'Год вода здания в эксплуатацию', text: this.subsidy.start_year},
                {title: 'Год проведения последнего капитального ремонта.реконструкции', text: this.subsidy.last_fix_year},
                {title: 'Предписания надзорных органов', text: this.subsidy.prescription},
                {title: 'Основания для использования здания', text: this.subsidy.reasons},
                {title: 'Право оперативного управления', text: this.subsidy.pravo_op_upr},*/
                {title: 'Назначение', text: this.subsidy.assignment},
                //{title: 'Право собственности', text: this.subsidy.pravo_sobstv},
                {title: 'Общая площадь здания (кв.м.)', text: this.subsidy.square_total},
                /*{title: 'Общая площадь здания (помещений) - планируемого к капитальному ремонту, кв.м.', text: this.subsidy.square_cap_rem},
                {title: 'Используется в уставной деятельности, кв.м.', text: this.subsidy.used},
                {title: 'Не используется в уставной деятельности, кв.м.', text: this.subsidy.not_used},
                {title: 'Предоставлено в аренду, кв.м.', text: this.subsidy.in_rent},*/
                {title: 'Год постройки здания', text: this.subsidy.build_year},
                {title: 'Износ', text: this.subsidy.wear},
                {title: 'Примечание', text: this.subsidy.note}
            ]
        },
        filesFilling() {
            let check = true
            this.files_templates[this.code].forEach(template => {
                const index = this.subsidy.files.findIndex(file => template.type === file.type)
                check = (index > -1)
            })
            return check
        },
        validateDialogCharacteristics() {
            return this.rules.required(this.form_characteristics.real_estate) === true &&
                this.rules.required(this.form_characteristics.name) === true && this.rules.max(255)(this.form_characteristics.name) === true &&
                this.rules.required(this.form_characteristics.short_description) === true && this.rules.max(255)(this.form_characteristics.short_description) === true &&
                this.rules.required(this.form_characteristics.repair_type_id) === true &&
                this.rules.required(this.form_characteristics.address) === true && this.rules.max(255)(this.form_characteristics.address) === true &&
                this.rules.required(this.form_characteristics.region_id) === true &&
                this.rules.required(this.form_characteristics.city) === true && this.rules.max(255)(this.form_characteristics.city) === true &&
                this.rules.required(this.form_characteristics.cadastral_number) === true && this.rules.max(255)(this.form_characteristics.cadastral_number) === true &&
                this.rules.required(this.form_characteristics.build_year) === true && this.rules.max(255)(this.form_characteristics.build_year) === true &&
                this.rules.required(this.form_characteristics.start_year) === true && this.rules.max(255)(this.form_characteristics.start_year) === true &&
                this.rules.required(this.form_characteristics.last_fix_year) === true && this.rules.max(255)(this.form_characteristics.last_fix_year) === true &&
                this.rules.required(this.form_characteristics.is_prescription) === true &&
                (this.form_characteristics.is_prescription === 0 || this.rules.required(this.form_characteristics.prescription) === true && this.rules.max(255)(this.form_characteristics.prescription) === true) &&
                this.rules.required(this.form_characteristics.wear) === true &&
                this.rules.required(this.form_characteristics.reasons) === true && this.rules.max(255)(this.form_characteristics.reasons) === true &&
                this.rules.required(this.form_characteristics.pravo_op_upr) === true && this.rules.max(255)(this.form_characteristics.pravo_op_upr) === true &&
                this.rules.required(this.form_characteristics.assignment) === true && this.rules.max(255)(this.form_characteristics.assignment) === true &&
                this.rules.required(this.form_characteristics.pravo_sobstv) === true && this.rules.max(255)(this.form_characteristics.pravo_sobstv) === true &&
                this.rules.required(this.form_characteristics.square_total) === true && this.rules.max(255)(this.form_characteristics.square_total) === true &&
                this.rules.required(this.form_characteristics.square_cap_rem) === true && this.rules.max(255)(this.form_characteristics.square_cap_rem) === true &&
                this.rules.required(this.form_characteristics.used) === true && this.rules.max(255)(this.form_characteristics.used) === true &&
                this.rules.required(this.form_characteristics.not_used) === true && this.rules.max(255)(this.form_characteristics.not_used) === true &&
                this.rules.required(this.form_characteristics.in_rent) === true && this.rules.max(255)(this.form_characteristics.in_rent) === true &&
                this.rules.required(this.form_characteristics.note) === true && this.rules.max(255)(this.form_characteristics.note) === true
        }
    },
    data: () => ({
        code: null,
        dialog_characteristics: false,
        form_characteristics: {},
        headers_characteristics: [{value: 'title'}, {value: 'text'}],
        is_admin: false,
        is_mon: false,
        is_user: false,
        loading: true,
        real_estates: [],
        subsidy: null
    }),
    methods: {
        closeDialogCharacteristics() {
            this.dialog_characteristics = false
            this.$nextTick(() => {
                this.form_characteristics = {}
            })
        },
        async getSubsidy(code) {
            const where = this.is_user
                ? {id: this.$route.params.id, code: code, organization_id: this.$authData.org_id}
                : {id: this.$route.params.id, code: code}
            this.subsidy = await this.fetch('subsidy', {
                address: true,
                assignment: true,
                build_year: true,
                cadastral_number: true,
                city: true,
                code: true,
                created_at: true,
                files: {type: true},
                name: true,
                id: true,
                in_rent: true,
                is_prescription: true,
                last_fix_year: true,
                not_used: true,
                note: true,
                organization: {name: true},
                organization_id: true,
                pravo_op_upr: true,
                pravo_sobstv: true,
                prescription: true,
                reasons: true,
                real_estate_id: true,
                region: {region: true},
                region_id: true,
                repair_type: {value: true},
                repair_type_id: true,
                short_description: true,
                square_cap_rem: true,
                square_total: true,
                start_year: true,
                status: {id: true, value: true},
                used: true,
                wear: true
            }, where)
        },
        async openDialogCharacteristics() {
            this.real_estates = await this.getRealEstates(this.subsidy.organization_id)
            this.form_characteristics = {...this.subsidy}
            this.form_characteristics.real_estate = {
                adr: this.subsidy.address,
                id: String(this.subsidy.real_estate_id),
                name: this.subsidy.name
            }
            this.form_characteristics.region_id = String(this.subsidy.region_id)
            this.form_characteristics.repair_type_id = String(this.subsidy.repair_type_id)
            this.form_characteristics.square_total = String(this.subsidy.square_total)
            this.form_characteristics.square_cap_rem = String(this.subsidy.square_cap_rem)
            this.form_characteristics.used = String(this.subsidy.used)
            this.form_characteristics.not_used = String(this.subsidy.not_used)
            this.form_characteristics.in_rent = String(this.subsidy.in_rent)
            this.dialog_characteristics = true
        },
        async saveCharacteristics() {
            const formData = new FormData()
            formData.append('form', JSON.stringify(this.form_characteristics))
            const submitter = Axios.post(`/subsidies/${this.code}/${this.$route.params.id}/characteristics/edit`, formData)
            submitter.catch(({response}) => {
                console.log(response.data.errors)
            })
            submitter.then(async ({data}) => {
                console.log(data)
                if (data.success) {
                    this.closeDialogCharacteristics()
                    this.loading = true
                    await this.getSubsidy(this.code)
                    if (this.subsidy) this.loading = false
                }
            })
            await submitter
        },
        setRealEstate() {
            if (this.form_characteristics.real_estate) {
                this.form_characteristics.name = this.form_characteristics.real_estate.name
                this.form_characteristics.address = this.form_characteristics.real_estate.adr
                this.form_characteristics.real_estate_id = this.form_characteristics.real_estate.id
            }
        },
        async setStatus(status_id) {
            const submitter = Axios.post(`/subsidies/${this.code}/${this.$route.params.id}/status/set/${status_id}`, new FormData())
            submitter.catch(({response}) => {
                console.log(response.data.errors)
            })
            submitter.then(async ({data}) => {
                console.log(data)
                if (data.success) {
                    Object.assign(this.subsidy.status, data.item)
                }
            })
            await submitter
        }
    },
    mixins: [SubsidiesMixin],
    async mounted() {
        this.is_admin = Boolean(this.$authData.roles.find(role => role.name === 'admin'))
        this.is_mon = Boolean(this.$authData.roles.find(role => role.name === 'mon'))
        this.is_user = Boolean(this.$authData.roles.find(role => role.name === 'user'))
        if (this.is_admin || this.is_mon || this.is_user) {
            async function getIndex(parent) {
                if (parent.code !== parent.$route.params.code) {
                    parent.loading = true
                    parent.code = parent.$route.params.code
                    await parent.getSubsidy(parent.code)
                    if (parent.subsidy) parent.loading = false
                } else {
                    parent.subsidy.files = await parent.fetch('subsidy_files', {type: true}, {subsidy_id: parseInt(parent.subsidy.id)})
                }
            }

            if (this.is_admin || this.is_user) {
                await this.getRegions()
                await this.getRepairTypes()
            }
            setTimeout(await getIndex, 0, this)
            setInterval(await getIndex, 1000, this)
        }
    },
    name: "SubsidiesView"
}
</script>

<style lang="scss" scoped>

</style>
