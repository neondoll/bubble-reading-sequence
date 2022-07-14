<template>
    <v-dialog transition="dialog-bottom-transition" v-model="toggleEditWindow" width="1000">
        <template #activator="{on, attr}">
            <v-btn class="my-2" elevation="4" outlined small v-bind="attr" v-on="on">
                Заполнить информацию об организации
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span>Показатели</span>
                <v-spacer/>
                <v-btn color="primary" small v-if="$check('user')" @click="saveInfo">Сохранить</v-btn>
            </v-card-title>
            <v-container class="overflow-auto" style="height: 450px">
                <v-simple-table dense fixed-header height="350px" id="podrobnee">
                    <colgroup id="colgroup" span="3" width="100%">
                        <col span="1" width="5%">
                        <col span="1" width="70%">
                        <col span="1" width="25%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Показатель</th>
                        <th>Значение</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Полное наименование организации</td>
                        <td>
                            <m-only-user-edit v-model="organization.name" :is-text="true"/>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Сокращенное наименование организации</td>
                        <td>
                            <m-only-user-edit v-model="organization.short_name" :is-text="true"/>
                        </td>
                    </tr>
                    <tr v-for="(column, index) in columns">
                        <td>{{ ++index + 2 }}</td>
                        <td>{{ column.label }}</td>
                        <td>
                            <m-only-user-edit v-model="org_info[column.key]" :type="column.type"/>
                        </td>
                    </tr>
                    </tbody>
                </v-simple-table>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
import MOnlyUserEdit from '../MOnlyUserEdit';

export default {
    name: 'MOrgInfo',
    components: {MOnlyUserEdit},
    data: () => ({
        toggleEditWindow: false,
        org_info: {},
        columns: [],
    }),
    async mounted() {
        this.org_info = this.value || {};
        await this.getColumns();
    },
    watch: {
        value: {
            deep: true,
            handler(val) {
                this.org_info = val || {};
            },
        },
        org_info: {
            deep: true,
            handler(val) {
                this.$emit('input', val);
            },
        },
    },
    props: ['organization', 'value', 'program'],
    methods: {
        async getColumns() {
            this.columns = (await Axios.get(`/get-org-info-columns/${this.organization.id}`)).data;
        },
        async saveInfo() {
            let f = new FormData();
            Object.keys(this.org_info).forEach(key => {
                f.append(key, this.org_info[key]);
            });
            f.append('org_id', this.organization.id)

            await Axios.post(`/kaprem/save_info/${this.organization.id}`, f, {
                params: {
                    program_id: this.program.id
                }
            }).then(
                ({data}) => {
                    this.toggleEditWindow = !data.success;
                }
            ).catch(() => {
                alert('Проверьте правильность введенных данных!');
            });

        },
    },
};
</script>

<style scoped>

</style>
