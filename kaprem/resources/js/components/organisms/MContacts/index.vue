<template>
    <v-card>
        <v-data-table :headers="headers" :items="contacts" :loading="loading">
            <template #item.buttons={item}>
                <v-btn icon @click="setUpdate(item)">
                    <v-icon small>mdi-pencil</v-icon>
                </v-btn>
            </template>
            <template v-slot:top>
                <v-container class="d-flex justify-space-between" fluid>
                    <div>
                        <div class="title">Контактная информация</div>
                        <div class="super-secondary-text">
                            <span class="red--text font-weight-bold">Примечание</span>: для возможности редактирования
                            информации по объектам, необходимо заполнить контакты ответственных.
                        </div>
                    </div>
                    <div>
                        <div class="d-flex justify-lg-end justify-md-end justify-sm-end pr-3">
                            <v-btn color="primary" outlined @click="setCreate">Добавить</v-btn>
                        </div>
                        <v-dialog width="1000" v-if="!loading" v-model="showModal">
                            <v-card>
                                <v-form @submit.prevent="save">
                                    <v-card-title>
                                        <div class="title">
                                            {{ currentContact.id ? 'Редактирование' : 'Добавление' }} контакта
                                        </div>
                                    </v-card-title>
                                    <v-card-text>
                                        <m-errors :errors="errors"/>
                                        <v-row>
                                            <v-col>
                                                <v-text-field hide-details label="Фамилия" name="last_name"
                                                              v-model="currentContact.last_name"
                                                              :rules="[rules.required]"/>
                                            </v-col>
                                            <v-col>
                                                <v-text-field hide-details label="Имя" name="name"
                                                              v-model="currentContact.name" :rules="[rules.required]"/>
                                            </v-col>
                                            <v-col>
                                                <v-text-field hide-details label="Отчество" name="middle_name"
                                                              v-model="currentContact.middle_name"
                                                              :rules="[rules.required]"/>
                                            </v-col>
                                        </v-row>
                                        <v-select item-text="value" item-value="id" hide-details label="Роль"
                                                  name="role" v-model="currentContact.role" :items="roles"/>
                                        <v-text-field hide-details label="Должность" name="position"
                                                      v-model="currentContact.position"/>
                                        <v-text-field hide-details label="Телефон" name="phone" type="phone"
                                                      v-model="currentContact.phone" :rules="[rules.required]"/>
                                        <v-text-field hide-details label="Email" name="email" type="email"
                                                      v-model="currentContact.email" :rules="[rules.required]"/>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer/>
                                        <v-btn color="error" outlined v-if="currentContact.id" @click="deleteItem">
                                            Удалить
                                        </v-btn>
                                        <v-btn color="primary" outlined type="submit" :loading="loading2">
                                            Сохранить
                                        </v-btn>
                                    </v-card-actions>
                                </v-form>
                            </v-card>
                        </v-dialog>
                        <v-dialog width="1000" v-if="!loading" v-model="showModal2">
                            <v-card>
                                <v-card-title>
                                    <div class="title">Добавление контактов</div>
                                </v-card-title>
                                <v-card-text>
                                    <template v-for="contact in contactsToAdd">
                                        <v-card class="mt-2">
                                            <v-card-text>
                                                <m-errors :errors="contact.errors"/>
                                                <v-row>
                                                    <v-col>
                                                        <v-text-field hide-details label="Фамилия" name="last_name"
                                                                      v-model="contact.last_name"
                                                                      :rules="[rules.required]"/>
                                                    </v-col>
                                                    <v-col>
                                                        <v-text-field hide-details label="Имя" name="name"
                                                                      v-model="contact.name" :rules="[rules.required]"/>
                                                    </v-col>
                                                    <v-col>
                                                        <v-text-field hide-details label="Отчество" name="middle_name"
                                                                      v-model="contact.middle_name"
                                                                      :rules="[rules.required]"/>
                                                    </v-col>
                                                </v-row>
                                                <v-select hide-details item-text="value" item-value="id" label="Роль"
                                                          name="role" v-model="contact.role" :items="roles"/>
                                                <v-text-field hide-details label="Должность" name="position"
                                                              v-model="contact.position"/>
                                                <v-text-field hide-details label="Телефон" name="phone" type="phone"
                                                              v-model="contact.phone" :rules="[rules.required]"/>
                                                <v-text-field hide-details label="Email" name="email" type="email"
                                                              v-model="contact.email" :rules="[rules.required]"/>
                                            </v-card-text>
                                        </v-card>
                                    </template>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer/>
                                    <v-btn color="primary" outlined :loading="loading2" @click="saveContacts">
                                        Сохранить
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-container>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import {ApiMixin} from '../../../mixins/ApiMixin';
import MErrors from '../MErrors';

export default {
    name: 'MContacts',
    components: {MErrors},
    props: ['contacts', 'program_id', 'org_id'],
    mixins: [ApiMixin],
    async mounted() {
        await this.getRoles();
    },
    methods: {
        async deleteItem() {
            await Axios.post('/kaprem/program/contacts/delete', null, {
                params: {
                    id: this.currentContact.id,
                },
            }).then(() => {
                this.$emit('saved');
                this.showModal = false;
            }).catch((err) => {
                alert(err.response.data.message);
            });

        },
        async saveData(data, id, i) {
            let hasErrors = false;
            if (i !== undefined) {
                this.contactsToAdd[i].errors = null;
                //this.$forceUpdate()
            }
            this.loading2 = true;
            const post = Axios.post('/kaprem/program/contacts/save', data, {
                params: {
                    id,
                    program_id: this.program_id,
                    org_id: this.org_id,
                },
            });
            post.then(() => {

                this.$emit('saved');
                // this.currentContact = {};
                hasErrors = false;

            });
            post.catch(err => {
                // console.log(i);
                hasErrors = true;
                if (i !== undefined) {
                    this.contactsToAdd[i].errors = err.response.data.errors;
                    //this.$forceUpdate()
                } else {
                    this.errors = err.response.data.errors;
                }
                this.loading2 = false;
            });
            await post;
            this.loading2 = false;
            return !hasErrors;
        },
        async saveContacts() {
            let close = true;
            for (const item of this.contactsToAdd) {
                const index = this.contactsToAdd.indexOf(item);
                let f = new FormData();
                Object.keys(item).forEach(key => {
                    f.append(key, item[key]);
                });
                if (!await this.saveData(f, null, index)) {
                    close = false;
                    break;
                }

            }
            if (close) {
                this.showModal2 = false;
            }
        },
        async save(e) {
            let form = new FormData(e.target);
            this.showModal = !await this.saveData(form, this.currentContact.id);
        },
        setCreate() {
            this.contactsToAdd = [
                {
                    fio: null,
                    role: '1',
                    position: null,
                    phone: null,
                    email: null,
                    errors: null,
                },
                {
                    fio: null,
                    role: '2',
                    position: null,
                    phone: null,
                    email: null,
                    errors: null,
                },
            ];
            this.showModal2 = true;
        },
        setUpdate(item) {
            this.currentContact = item;
            this.showModal = true;

        },
        async getRoles() {
            this.loading = true;
            this.roles = await this.getDictionaryRoles();
            this.loading = false;
        },
    },
    data: () => ({
        loading: false,
        loading2: false,
        roles: [],
        currentContact: {},
        showModal: false,
        showModal2: false,
        errors: null,
        contactsToAdd: [],
        rules: {
            required: value => !!value || 'Это поле обязательно',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => (`The email and password you entered don't match`),
        },
        headers: [
            {text: 'ФИО', value: 'fio'},
            {text: 'Роль', value: 'role_label'},
            {text: 'Должность', value: 'position'},
            {text: 'Телефон', value: 'phone'},
            {text: 'Email', value: 'email'},
            {text: '', value: 'buttons'},
        ],
    }),
};
</script>

<style scoped lang="scss">
.super-secondary-text {
    font-size: 14px;
    color: black;
}
</style>
