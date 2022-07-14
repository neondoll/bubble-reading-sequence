<template>
    <m-page :loading="loading" :pages="[{text: 'Целевые Субсидии', disabled: true}, {text: code, disabled: true}]">
        <v-container class="d-flex justify-space-between" fluid>
            <div class="font-montserrat-normal-700" style="color: #405580;" v-if="is_user">
                {{ organization.name }} | {{ organization.id }}
            </div>
            <div class="font-montserrat-normal-700" style="color: #405580;" v-else>Субсидия {{ code }}</div>
            <div>
                <template v-if="is_admin">
                    <v-btn color="primary" small @click="openDialogAccess">Доступ организациям</v-btn>
                    <v-dialog scrollable transition="dialog-bottom-transition" v-model="dialog_access">
                        <v-card>
                            <v-toolbar color="primary" dark>
                                <v-toolbar-title>Доступ организациям</v-toolbar-title>
                                <v-spacer/>
                                <v-btn dark icon @click="dialog_access = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-card-text style="padding: 20px 24px;">
                                <v-autocomplete chips deletable-chips dense hide-details="auto" item-text="name"
                                                item-value="id" multiple outlined v-model="selected_accesses"
                                                :items="organizations"/>
                            </v-card-text>
                            <v-divider/>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn color="blue darken-1" text @click="saveAccesses">Сохранить</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </template>
                <template v-if="is_user">
                    <v-dialog scrollable transition="dialog-bottom-transition"
                              v-if="accesses.indexOf(parseInt($authData.org_id)) !== -1" v-model="dialog_add">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" small v-bind="attrs" v-on="on">Добавить объект</v-btn>
                        </template>
                        <v-card>
                            <v-toolbar color="primary" dark>
                                <v-toolbar-title>Добавление объекта</v-toolbar-title>
                                <v-spacer/>
                                <v-btn dark icon @click="dialog_add = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-card-text style="padding: 20px 24px;">
                                <v-autocomplete dense item-text="id" label="Выберите объект из недвижимость.иасмон.рф"
                                                outlined return-object v-model="form.real_estate" :items="real_estates"
                                                :rules="[rules.required]" @change="setRealEstate">
                                    <template #item={item}>
                                        <div class="mb-2">
                                            <p class="ma-0">{{ item.name }}</p>
                                            <span class="text--secondary font-small">{{ item.adr }}</span>
                                        </div>
                                    </template>
                                </v-autocomplete>
                                <v-textarea auto-grow counter="255" dense label="Название объекта" outlined readonly
                                            row-height="15" rows="1" v-model="form.name"
                                            :rules="[rules.required, rules.max(255)]"/>
                                <v-textarea auto-grow counter="255" dense label="Краткое описание" outlined
                                            row-height="15" rows="1" v-model="form.short_description"
                                            :rules="[rules.required, rules.max(255)]"/>
                                <v-select dense item-text="value" item-value="id" label="Вид ремонта" outlined
                                          v-model="form.repair_type_id" :items="repair_types"
                                          :rules="[rules.required]"/>
                                <v-textarea auto-grow counter="255" dense label="Адрес" outlined readonly
                                            row-height="15" rows="1" v-model="form.address"
                                            :rules="[rules.required, rules.max(255)]"/>
                                <v-autocomplete dense item-text="region" item-value="id" label="Субъект РФ" outlined
                                                v-model="form.region_id" :items="regions" :rules="[rules.required]"/>
                                <v-textarea auto-grow counter="255" dense label="Город" outlined row-height="15"
                                            rows="1" v-model="form.city" :rules="[rules.required, rules.max(255)]"/>
                                <v-text-field counter="255" dense label="Кадастровый номер" outlined
                                              v-model="form.cadastral_number"
                                              :rules="[rules.required, rules.max(255)]"/>
                                <v-text-field counter="255" dense label="Год постройки здания" outlined
                                              v-model="form.build_year" :rules="[rules.required, rules.max(255)]"/>
                                <v-text-field counter="255" dense label="Год вода здания в эксплуатацию" outlined
                                              v-model="form.start_year" :rules="[rules.required, rules.max(255)]"/>
                                <v-text-field counter="255" dense
                                              label="Год проведения последнего капитального ремонта.реконструкции"
                                              outlined v-model="form.last_fix_year"
                                              :rules="[rules.required, rules.max(255)]"/>
                                <v-row>
                                    <v-col cols="12" md="6" lg="5" xl="3">
                                        <v-select dense label="Наличие предписания надзорных органов" outlined
                                                  v-model="form.is_prescription" :items="no_yes"
                                                  :rules="[rules.required]"/>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="7" xl="9" v-if="form.is_prescription">
                                        <v-textarea auto-grow counter="255" dense label="Подробности" outlined
                                                    row-height="15" rows="1" v-model="form.prescription"
                                                    :rules="[rules.required, rules.max(255)]"/>
                                    </v-col>
                                </v-row>
                                <v-select dense label="Износ здания (%)" outlined v-model="form.wear" :items="wears"
                                          :rules="[rules.required]"/>
                                <v-textarea auto-grow counter="255" dense label="Основания для использования здания"
                                            outlined row-height="15" rows="1" v-model="form.reasons"
                                            :rules="[rules.required, rules.max(255)]"/>
                                <v-textarea auto-grow counter="255" dense label="Право оперативного управления" outlined
                                            row-height="15" rows="1" v-model="form.pravo_op_upr"
                                            :rules="[rules.required, rules.max(255)]"/>
                                <v-textarea auto-grow counter="255" dense label="Назначение" outlined row-height="15"
                                            rows="1" v-model="form.assignment"
                                            :rules="[rules.required, rules.max(255)]"/>
                                <v-textarea auto-grow counter="255" dense label="Право собственности" outlined
                                            row-height="15" rows="1" v-model="form.pravo_sobstv"
                                            :rules="[rules.required, rules.max(255)]"/>
                                <v-text-field counter="255" dense label="Общая площадь здания - всего, кв.м." outlined
                                              v-model="form.square_total" :rules="[rules.required, rules.max(255)]"/>
                                <v-text-field counter="255" dense
                                              label="Общая площадь здания (помещений) - планируемого к капитальному ремонту, кв.м."
                                              outlined v-model="form.square_cap_rem"
                                              :rules="[rules.required, rules.max(255)]"/>
                                <v-text-field counter="255" dense label="Используется в уставной деятельности, кв.м."
                                              outlined v-model="form.used" :rules="[rules.required, rules.max(255)]"/>
                                <v-text-field counter="255" dense label="Не используется в уставной деятельности, кв.м."
                                              outlined v-model="form.not_used"
                                              :rules="[rules.required, rules.max(255)]"/>
                                <v-text-field counter="255" dense label="Предоставлено в аренду, кв.м." outlined
                                              v-model="form.in_rent" :rules="[rules.required, rules.max(255)]"/>
                                <v-textarea auto-grow class="mt-2" counter="255" dense hide-details="auto"
                                            label="Примечание" outlined row-height="15" rows="1" v-model="form.note"
                                            :rules="[rules.required, rules.max(255)]"/>
                            </v-card-text>
                            <v-divider/>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn color="blue darken-1" text :disabled="!validateDialogAdd" @click="addSubsidy">
                                    Сохранить
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog max-width="500px" v-model="dialog_delete">
                        <v-card>
                            <v-card-title class="text-h5">Удаление</v-card-title>
                            <v-card-text>Вы точно хотите удалить?</v-card-text>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn text @click="closeDelete">Отмена</v-btn>
                                <v-btn color="error darken-1" text @click="deleteItem">Удалить</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </template>
            </div>
        </v-container>
        <v-alert class="mb-0 mt-3" shaped type="info">{{ descriptions_subsidies[code] }}</v-alert>
        <v-expansion-panels class="mt-3" multiple v-model="panel">
            <v-expansion-panel>
                <v-expansion-panel-header class="font-inter-normal-800" style="color: #4E86E2;">
                    Объекты капитального ремонта (Согласованные Минобрнауки РФ)
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <subsidies-table :is-change="is_admin || is_user" :is-user="is_user"
                                     :items="subsidies_implementation" @delete="openDelete"/>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header class="font-inter-normal-800" style="color: #4E86E2;">
                    Объекты капитального ремонта (Заявленные)
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <subsidies-table :is-change="is_admin || is_user" :is-user="is_user" :items="subsidies_other"
                                     @delete="openDelete"/>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header class="font-inter-normal-800" style="color: #4E86E2;">
                    Архивные объекты
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <subsidies-table :is-change="is_admin || is_user" :is-user="is_user" :items="subsidies_archive"
                                     @delete="openDelete"/>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </m-page>
</template>

<script>
import MPage from "../../organisms/MPage";
import SubsidiesTable from "../../organisms/SubsidiesTable";
import {SubsidiesMixin} from "../../../mixins/SubsidiesMixin";

export default {
    components: {MPage, SubsidiesTable},
    computed: {
        validateDialogAdd() {
            return this.rules.required(this.form.real_estate) === true &&
                this.rules.required(this.form.name) === true && this.rules.max(255)(this.form.name) === true &&
                this.rules.required(this.form.short_description) === true && this.rules.max(255)(this.form.short_description) === true &&
                this.rules.required(this.form.repair_type_id) === true &&
                this.rules.required(this.form.address) === true && this.rules.max(255)(this.form.address) === true &&
                this.rules.required(this.form.region_id) === true &&
                this.rules.required(this.form.city) === true && this.rules.max(255)(this.form.city) === true &&
                this.rules.required(this.form.cadastral_number) === true && this.rules.max(255)(this.form.cadastral_number) === true &&
                this.rules.required(this.form.build_year) === true && this.rules.max(255)(this.form.build_year) === true &&
                this.rules.required(this.form.start_year) === true && this.rules.max(255)(this.form.start_year) === true &&
                this.rules.required(this.form.last_fix_year) === true && this.rules.max(255)(this.form.last_fix_year) === true &&
                this.rules.required(this.form.is_prescription) === true &&
                (this.form.is_prescription === 0 || this.rules.required(this.form.prescription) === true && this.rules.max(255)(this.form.prescription) === true) &&
                this.rules.required(this.form.wear) === true &&
                this.rules.required(this.form.reasons) === true && this.rules.max(255)(this.form.reasons) === true &&
                this.rules.required(this.form.pravo_op_upr) === true && this.rules.max(255)(this.form.pravo_op_upr) === true &&
                this.rules.required(this.form.assignment) === true && this.rules.max(255)(this.form.assignment) === true &&
                this.rules.required(this.form.pravo_sobstv) === true && this.rules.max(255)(this.form.pravo_sobstv) === true &&
                this.rules.required(this.form.square_total) === true && this.rules.max(255)(this.form.square_total) === true &&
                this.rules.required(this.form.square_cap_rem) === true && this.rules.max(255)(this.form.square_cap_rem) === true &&
                this.rules.required(this.form.used) === true && this.rules.max(255)(this.form.used) === true &&
                this.rules.required(this.form.not_used) === true && this.rules.max(255)(this.form.not_used) === true &&
                this.rules.required(this.form.in_rent) === true && this.rules.max(255)(this.form.in_rent) === true &&
                this.rules.required(this.form.note) === true && this.rules.max(255)(this.form.note) === true
        }
    },
    data: () => ({
        accesses: [],
        code: null,
        delete_item: {},
        descriptions_subsidies: {
            '02-01': 'Код целевой субсидии 02-01. Субсидии в целях осуществления мероприятий по капитальному ремонту объектов недвижимого имущества, в том числе реставрации, за исключением реконструкции с элементами реставрации',
            '02-08': 'Код целевой субсидии 02-08. Субсидии в целях проведения работ по обследованию технического состояния объектов, подлежащих реконструкции или ремонту с целью составления дефектных ведомостей, определения плана ремонтных (реставрационных) работ',
            '02-10': 'Код целевой субсидии 02-10. Субсидии в целях выполнения инженерных изысканий, подготовки проектной документации для ремонта объектов недвижимого имущества, а также проведение государственной экспертизы указанной проектной документации и результатов указанных инженерных изысканий'
        },
        dialog_access: false,
        dialog_add: false,
        dialog_delete: false,
        form: {
            real_estate: null,
            name: null,
            short_description: null,
            repair_type_id: null,
            address: null,
            region_id: null,
            city: null,
            cadastral_number: null,
            build_year: null,
            start_year: null,
            last_fix_year: null,
            is_prescription: null,
            prescription: null,
            wear: null,
            reasons: null,
            pravo_op_upr: null,
            assignment: null,
            pravo_sobstv: null,
            square_total: null,
            square_cap_rem: null,
            used: null,
            not_used: null,
            in_rent: null,
            note: null,
            real_estate_id: null
        },
        is_admin: false,
        is_mon: false,
        is_user: false,
        loading: true,
        organization: null,
        organization_id: null,
        organizations: [],
        panel: [0, 1],
        real_estates: [],
        selected_accesses: [],
        subsidies_archive: [],
        subsidies_implementation: [],
        subsidies_other: []
    }),
    methods: {
        async addSubsidy() {
            const formData = new FormData()
            formData.append('form', JSON.stringify(this.form))
            const submitter = Axios.post(`/subsidies/${this.code}/add`, formData)
            submitter.catch(({response}) => {
                console.log(response.data.errors)
            })
            submitter.then(async ({data}) => {
                console.log(data)
                if (data.success) {
                    this.dialog_add = false
                    await this.$router.push({name: 'SubsidiesView', params: {code: this.code, id: data.id}})
                }
            })
            await submitter
        },
        closeDelete() {
            this.dialog_delete = false
            this.$nextTick(() => {
                this.delete_item = {}
            })
        },
        async deleteItem() {
            const submitter = Axios.post(`/subsidies/${this.code}/${this.delete_item.id}/delete`, new FormData())
            submitter.catch(({response}) => {
                console.log(response.data.errors)
            })
            submitter.then(async ({data}) => {
                console.log(data)
                if (data.success) {
                    this.loading = true
                    await this.getSubsidies()
                    this.loading = false
                    this.closeDelete()
                }
            })
            await submitter
        },
        async getSubsidies() {
            let columns = {
                address: true,
                code: true,
                created_at: true,
                name: true,
                id: true,
                stages: {finansee: true, kap_coast: true},
                status: {id: true, value: true}
            }
            let where = {code: this.code}
            if (this.is_user) {
                where.organization_id = this.$authData.org_id
            } else {
                columns.organization = {name: true}
                columns.organization_id = true
            }
            let subsidies = await this.fetch('subsidies', columns, where)
            this.subsidies_archive = []
            this.subsidies_implementation = []
            this.subsidies_other = []
            subsidies.forEach(subsidy => {
                if ([5, 6, 8].indexOf(Number(subsidy.status.id)) !== -1) {
                    this.subsidies_archive.push(subsidy)
                } else {
                    if ([7].indexOf(Number(subsidy.status.id)) !== -1) {
                        this.subsidies_implementation.push(subsidy)
                    } else {
                        this.subsidies_other.push(subsidy)
                    }
                }
            })
        },
        openDelete(item) {
            this.delete_item = Object.assign({}, item)
            this.dialog_delete = true
        },
        async openDialogAccess() {
            if (this.organizations.length === 0) {
                this.organizations = await this.fetch('organizations', {id: true, name: true})
                this.organizations.forEach((organization, index) => {
                    this.organizations[index].id = Number(organization.id)
                })
            }
            this.selected_accesses = [...this.accesses]
            this.dialog_access = true;
        },
        async saveAccesses() {
            const formData = new FormData()
            formData.append('organizations_id', JSON.stringify(this.selected_accesses))
            const submitter = Axios.post(`/subsidies/${this.code}/accesses`, formData)
            submitter.catch(({response}) => {
                console.log(response.data.errors)
            })
            submitter.then(async ({data}) => {
                console.log(data)
                if (data.success) {
                    this.dialog_access = false
                    this.accesses = [...this.selected_accesses]
                }
            })
            await submitter
        },
        setRealEstate() {
            if (this.form.real_estate) {
                this.form.name = this.form.real_estate.name
                this.form.address = this.form.real_estate.adr
                this.form.real_estate_id = this.form.real_estate.id
            }
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
                    await parent.getSubsidies()
                    parent.accesses = []
                    const accesses = await parent.fetch('subsidy_accesses', {organization_id: true}, {code: parent.code})
                    accesses.forEach(access => {
                        parent.accesses.push(access.organization_id)
                    })
                    parent.loading = false
                }
            }

            if (this.is_user) {
                this.organization_id = this.$authData.org_id
                this.organization = await this.fetch('organization', {
                    id: true,
                    name: true
                }, {id: parseInt(this.organization_id)})
                this.real_estates = await this.getRealEstates(this.organization_id)
                await this.getRegions()
                await this.getRepairTypes()
            }
            setTimeout(await getIndex, 0, this)
            setInterval(await getIndex, 1000, this)
        }
    },
    name: "Subsidies"
}
</script>

<style lang="scss" scoped>
.font-small {
    font-size: 9px;
}
</style>
