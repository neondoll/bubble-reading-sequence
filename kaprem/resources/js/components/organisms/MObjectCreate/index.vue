<template>
    <v-form @submit.pr.prevent="submit">
        <input
            name="real_estate_id"
            type="hidden"
            :value="model.real_estate_id"
        >
        <v-autocomplete
            outlined
            label="Выберите объект из недвижимость.иасмон.рф"
            :rules="getError('real_estate_id')"
            :items="realEstates"
            item-text="id"
            return-object
            v-model="realEstate"
        >
            <template #item={item}>
                <div class="mb-2">
                    <p class="ma-0">
                        {{ item.name }}
                    </p>
                    <span class="text--secondary font-small">
                        {{ item.adr }}
                    </span>
                </div>

            </template>
        </v-autocomplete>
        <v-text-field
            outlined
            :error="hasError('name')"
            :rules="getError('name')"
            @input="refreshErr('name')"
            name="name"
            label="Название объекта"
            v-model="model.name"
        />
        <v-text-field
            outlined
            readonly
            name="name_dbi"
            label="Название объекта(Рассмотрено ДБИ, корректировке не подлежит)"
            v-model="model.name_dbi"
        />
        <v-text-field
            outlined
            :error="hasError('address')"
            :rules="getError('address')"
            @input="refreshErr('address')"
            name="address"
            label="Адрес объекта"
            v-model="model.address"
        />
        <v-text-field
            outlined
            readonly
            name="address_dbi"
            label="Адрес объекта(Рассмотрено ДБИ, корректировке не подлежит)"
            v-model="model.address_dbi"
        />
        <v-select
            outlined
            :error="hasError('type')"
            :rules="getError('type')"
            @input="refreshErr('type')"
            name="type"
            :label="objectTypeLabel"
            item-text="text"
            item-value="value"
            :items="types"
            v-model="model.type"
            :disabled="disableObjectTypeSelect"
        />
        <input
            outlined
            type="hidden"
            name="region_id"
            :value="model.region_id"
        >
        <v-autocomplete
            outlined
            :error="hasError('region_id')"
            :rules="getError('region_id')"
            @input="refreshErr('region_id')"
            :items="regions"
            item-value="id"
            item-text="region"
            label="Субъект РФ"
            v-model="model.region_id"
        />

        <v-text-field
            outlined
            :error="hasError('city')"
            :rules="getError('city')"
            @input="refreshErr('city')"
            name="city"
            label="Город"
            v-model="model.city"
        />
        <v-text-field
            outlined
            :error="hasError('cadastral_number')"
            :rules="getError('cadastral_number')"
            @input="refreshErr('cadastral_number')"
            name="cadastral_number"
            label="Кадастровый номер"
            v-model="model.cadastral_number"
        />
        <v-text-field
            outlined
            :error="hasError('build_year')"
            :rules="getError('build_year')"
            @input="refreshErr('build_year')"
            name="build_year"
            label="Год постройки здания"
            v-model="model.build_year"
        />
        <v-text-field
            outlined
            :error="hasError('exploy_year')"
            :rules="getError('exploy_year')"
            @input="refreshErr('exploy_year')"
            name="exploy_year"
            label="Год ввода здания в эксплуатацию:"
            v-model="model.exploy_year"
        />
        <v-text-field
            outlined
            :error="hasError('kaprem_year')"
            :rules="getError('kaprem_year')"
            @input="refreshErr('kaprem_year')"
            name="kaprem_year"
            label="Год проведения последнего капитального ремонта/реконструкции:"
            v-model="model.kaprem_year"
        />
        <v-text-field
            outlined
            :error="hasError('nadzor_orgs')"
            :rules="getError('nadzor_orgs')"
            @input="refreshErr('nadzor_orgs')"
            name="nadzor_orgs"
            label="Наличие предписаний надзорных органов:"
            v-model="model.nadzor_orgs"
        />
        <v-select
            outlined
            :items="wears"
            :error="hasError('wear')"
            :rules="getError('wear')"
            @input="refreshErr('wear')"
            name="wear"
            label="Износ здания (%):"
            v-model="model.wear"
        />
        <v-text-field
            outlined
            :error="hasError('osnovanie')"
            :rules="getError('osnovanie')"
            @input="refreshErr('osnovanie')"
            name="osnovanie"
            label="Основание для использования здания:"
            v-model="model.osnovanie"
        />
        <v-text-field
            outlined
            :error="hasError('pravo_oper')"
            :rules="getError('pravo_oper')"
            @input="refreshErr('pravo_oper')"
            name="pravo_oper"
            label="Право оперативного управления (рег. запись, номер):"
            v-model="model.pravo_oper"
        />
        <v-select
            outlined
            :error="hasError('naznach')"
            :rules="getError('naznach')"
            @input="refreshErr('naznach')"
            :items="naznachProps"
            name="naznach"
            label="Назначение"
            v-model="model.naznach"
        />
        <v-text-field
            outlined
            v-if="model.naznach === 'иное'"
            :error="hasError('naznach2')"
            :rules="getError('naznach2')"
            @input="refreshErr('naznach2')"
            name="naznach2"
            label="Назначение"
            v-model="model.naznach2"
        />
        <v-text-field
            outlined
            :error="hasError('pravo')"
            :rules="getError('pravo')"
            @input="refreshErr('pravo')"
            name="pravo"
            label="Право собственности:"
            v-model="model.pravo"
        />
        <v-text-field
            outlined
            :error="hasError('square')"
            :rules="getError('square')"
            @input="refreshErr('square')"
            name="square"
            label="Общая площадь здания - всего, кв.м.:"
            v-model="model.square"
        />
        <v-text-field
            outlined
            :error="hasError('square_ustav')"
            :rules="getError('square_ustav')"
            @input="refreshErr('square_ustav')"
            name="square_ustav"
            label="Используется в уставной деятельности, кв.м.:"
            v-model="model.square_ustav"
        />
        <v-text-field
            outlined
            :error="hasError('square_ne_ustav')"
            :rules="getError('square_ne_ustav')"
            @input="refreshErr('square_ne_ustav')"
            name="square_ne_ustav"
            label="Не используется в уставной деятельности, кв.м.:"
            v-model="model.square_ne_ustav"
        />
        <v-text-field
            outlined
            :error="hasError('arenda')"
            :rules="getError('arenda')"
            @input="refreshErr('arenda')"
            name="arenda"
            label="Предоставлено в аренду, кв.м."
            v-model="model.arenda"
        />
        <v-text-field
            outlined
            :error="hasError('primechanie')"
            :rules="getError('primechanie')"
            @input="refreshErr('primechanie')"
            name="primechanie"
            label="Примечание:"
            v-model="model.primechanie"
        />
        <div class="d-flex">
            <v-spacer/>
            <v-btn
                color="warning"
                outlined
                @click="$emit('close')"
            >Закрыть
            </v-btn>
            <v-btn
                color="success"
                class="ml-2"
                outlined
                type="submit"
            >Сохранить
            </v-btn>
        </div>

    </v-form>
</template>

<script>
import {ApiMixin} from '../../../mixins/ApiMixin';
import MErrors from '../MErrors';
import {programObject} from '../../../mixins/programMixin';

export default {
    name: 'MObjectAdd',
    components: {MErrors},
    props: ['value', 'organization'],
    mixins: [ApiMixin, programObject],
    computed: {
        naznachProps() {
            let arr = [
                'общежитие',
                'учебно-лабораторный корпус',
                'спортивные объекты',
                'административные объекты',
                'иное',
            ];
            if (this.organization.is_nauch) {
                arr = [
                    'общежитие',
                    'учебно-лабораторный корпус',
                    'спортивные объекты',
                    'административные объекты',
                    'объект научно-исследовательской инфраструктуры',
                    'иное',
                ];
            }
            return arr;
        },
    },
    methods: {
        refreshErr(key) {
            if (this.errors && this.errors.hasOwnProperty(key)) {
                this.errors[key] = null;
            }
        },
        hasError(key) {
            if (!this.errors) {
                return false;
            }
            return !!this.errors[key]?.[0];
        },
        getError(key) {
            if (!this.errors) {
                return [];
            }
            return [this.errors[key]?.[0] || true];
        },
        async submit(e) {
            let form = new FormData(e.target);
            form.append('org_id', this.model.org_id);
            form.append('program_id', this.model.program_id);
            Axios.post('/kaprem/object/create', form, {
                params: {
                    id: this.model.id,
                },
            }).then(response => {
                this.$emit('save');
            }).catch(response => {
                this.errors = response.response.data.errors;
            });
        },
    },
    data() {
        return {
            rules: {
                required: value => !!value || 'Required.',
            },
            errors: null,
            model: {},
            realEstates: [],
            realEstate: null,
            regions: [],
            priority: [1, 2, 3],
            disableObjectTypeSelect: false,
            objectTypeLabel: 'Тип объекта',
        }
    },
    async mounted() {
        this.model = this.value;

        this.realEstates = await this.getRealEstates(this.model.org_id);

        if (!!this.model.id) {
            this.realEstate = this.realEstates.find(item =>
                parseInt(item.id) === parseInt(this.model.real_estate_id));
        }

        this.regions = await this.getRegions();

        if (this.value.programSent) {
            this.model.type = 1;
            this.disableObjectTypeSelect = true;
        }
    },
    watch: {
        realEstate: {
            deep: true,
            handler(val) {
                if (val && val.id) {
                    this.model.real_estate_id = val.id;
                    this.model.name_dbi = val.name;
                    this.model.address_dbi = val.adr;
                }
            },
        },
        value: {
            deep: true,
            handler(val) {
                this.model = val;
            },
        },
        model: {
            deep: true,
            handler(val) {
                this.$emit('input', val);
            },
        },
    },
};
</script>

<style scoped>
.font-small {
    font-size: 9px;
}
</style>
