<template>
    <div>
        <v-progress-linear :value="progressLinearValue"/>

        <div class="n-header d-flex align-items-center">
            <span class="mr-auto n-title title">Контактная информация</span>

            <v-dialog v-if="currentContact.id" v-model="dialogUpdate" width="60%">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-img alt="icon-edit" max-width="15" :src="icons.edit"/>
                    </v-btn>
                </template>

                <v-card>
                    <v-card-title>
                        <span class="n-title">Контактная информация</span>
                    </v-card-title>


                    <div class="n-card-text">
                        <table>
                            <tr>
                                <td>ФИО</td>

                                <td>
                                    <v-text-field dense hide-details v-model="contactEdit.fio"
                                                  :rules="[rules.required]"/>
                                </td>
                            </tr>

                            <tr>
                                <td>Роль</td>

                                <td>
                                    <v-select dense hide-details :items="roles"
                                              item-value="id" item-text="value" v-model="contactEdit.role"/>
                                    <!--                                    <v-text-field dense hide-details v-model="contactEdit.role"/>-->
                                </td>
                            </tr>

                            <tr>
                                <td>Должность</td>

                                <td>
                                    <v-text-field dense hide-details v-model="contactEdit.position"/>
                                </td>
                            </tr>

                            <tr>
                                <td>Телефон</td>

                                <td>
                                    <v-text-field dense hide-details type="phone" v-model="contactEdit.phone"
                                                  :rules="[rules.required]"/>
                                </td>
                            </tr>

                            <tr>
                                <td>E-mail</td>

                                <td>
                                    <v-text-field dense type="email" hide-details v-model="contactEdit.email"
                                                  :rules="[rules.required]"/>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <v-divider/>

                    <v-card-actions>
                        <v-spacer/>

                        <v-btn color="success" outlined @click="editContact">Сохранить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="dialogCreate" width="60%">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-img alt="icon-math-plus" max-width="15" :src="icons.mathPlus"/>
                    </v-btn>
                </template>

                <v-card>
                    <v-card-title>
                        <span class="n-title">Контактная информация</span>
                    </v-card-title>

                    <div class="n-card-text">
                        <table>
                            <tr>
                                <td>ФИО</td>

                                <td>
                                    <v-text-field dense hide-details v-model="contactAdd.fio"
                                                  :rules="[rules.required]"/>
                                </td>
                            </tr>

                            <tr>
                                <td>Роль</td>

                                <td>
                                    <v-select dense hide-details :items="roles"
                                              item-value="id" item-text="value" v-model="contactAdd.role"/>
                                    <!--                                    <v-text-field dense hide-details v-model="contactAdd.role"/>-->
                                </td>
                            </tr>

                            <tr>
                                <td>Должность</td>

                                <td>
                                    <v-text-field dense hide-details v-model="contactAdd.position"/>
                                </td>
                            </tr>

                            <tr>
                                <td>Телефон</td>

                                <td>
                                    <v-text-field dense hide-details v-model="contactAdd.phone"
                                                  :rules="[rules.required]"/>
                                </td>
                            </tr>

                            <tr>
                                <td>E-mail</td>

                                <td>
                                    <v-text-field dense hide-details v-model="contactAdd.email"
                                                  :rules="[rules.required]"/>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <v-divider/>

                    <v-card-actions>
                        <v-spacer/>

                        <v-btn color="success" outlined @click="addContact">Сохранить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-btn v-if="currentContact.id" icon @click="deleteContact">
                <v-img alt="icon-trash-2" max-width="15" :src="icons.trash2"/>
            </v-btn>
        </div>

        <table class="fixed">
            <tr>
                <th>ФИО</th>

                <td>{{ currentContact.fio }}</td>
            </tr>

            <tr>
                <th>Роль</th>

                <td>{{ currentContact.role_label }}</td>
            </tr>

            <tr>
                <th>Должность</th>

                <td>{{ currentContact.position }}</td>
            </tr>

            <tr>
                <th>Телефон</th>

                <td>{{ currentContact.phone }}</td>
            </tr>

            <tr>
                <th>E-mail</th>

                <td>{{ currentContact.email }}</td>
            </tr>
        </table>

        <div class="text-center" style="margin-top: 50px;" v-if="current_contacts.length > 0">
            <v-pagination v-model="page" :length="current_contacts.length"/>
        </div>
    </div>
</template>

<script>
import edit from '../../../../assets/edit.svg';
import mathPlus from '../../../../assets/math-plus.svg';
import trash2 from '../../../../assets/trash-2.svg';
import {ApiMixin} from '../../../mixins/ApiMixin';

export default {
  computed: {
    currentContact() {
      return this.current_contacts[this.page - 1] ?? {
        id: null,
        fio: '',
        role: '',
        position: '',
        phone: '',
        email: '',
      };
    },
    progressLinearValue() {
      let length = this.current_contacts.length;
      if (length) {
        return this.page * 100 / length;
      }
      else {
        return 100;
      }
    },
  },
  data: () => ({
    contactAdd: {
      fio: null,
      role: null,
      position: null,
      phone: null,
      email: null,
    },
    contactEdit: {
      id: null,
      fio: null,
      role: null,
      position: null,
      phone: null,
      email: null,
    },
    roles: [],
    current_contacts: [],
    dialogCreate: false,
    dialogUpdate: false,
    icons: {edit, mathPlus, trash2},
    page: 1,
    rules: {
      required: value => !!value || 'Это поле обязательно',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (`The email and password you entered don't match`),
    },
  }),
  mixins: [ApiMixin],
  methods: {
    async getRoles() {
      this.roles = await this.getDictionaryRoles();
    },
    addContact() {
      if (this.contactAdd.fio === '' || this.contactAdd.fio === null) {
        return;
      }

      let form = new FormData();
      form.append('form', JSON.stringify(this.contactAdd));
      let post = Axios.post(`/kaprem/${this.orgId}/programs/${this.programId}/contacts/add`, form);
      post.then(e => {
        //console.log(e)
        this.current_contacts.push(e.data);
        this.dialogCreate = false;
      });
    },
    deleteContact() {
      let post = Axios.post(
          `/kaprem/${this.orgId}/programs/${this.programId}/contacts/${this.currentContact.id}/delete`, new FormData());
      post.then(e => {
        // console.log(e)
        this.current_contacts.splice(this.page - 1, 1);
        if (this.page > this.current_contacts.length) {
          this.page--;
        }
      });
    },
    editContact() {
      if (this.contactEdit.fio === '' || this.contactEdit.fio === null) {
        return;
      }

      let form = new FormData();
      form.append('form', JSON.stringify(this.contactEdit));
      let post = Axios.post(`/kaprem/${this.orgId}/programs/${this.programId}/contacts/${this.contactEdit.id}/edit`,
          form);
      post.then(e => {
        //console.log(e);
        this.current_contacts[this.page - 1] = e.data;
        this.dialogUpdate = false;
      });
    },
  },
  async mounted() {
    this.current_contacts = this.contacts;
    await this.getRoles();
  },
  name: 'NContacts',
  props: {
    contacts: {
      default: [],
      type: Array,
    },
    orgId: {
      default: null,
      type: Number | String,
    },
    programId: {
      default: null,
      type: Number | String,
    },
  },
  watch: {
    dialogCreate(newVal) {
      if (!newVal) {
        this.contactAdd = {
          fio: null,
          role: null,
          position: null,
          phone: null,
          email: null,
        };
      }
    },
    dialogUpdate(newVal) {
      if (newVal) {
        this.contactEdit = this.currentContact;
      }
      else {
        this.contactEdit = {
          id: null,
          fio: null,
          role: null,
          position: null,
          phone: null,
          email: null,
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.n-card-text {
  padding: 20px 24px;
}

.n-card-title {
  background: rgba(196, 196, 196, 0.2);
  border-radius: 7px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.13), 8px 15px 7px rgba(93, 95, 239, 0.22);
  height: 65px;
  padding: 0 24px;
}

.n-header {
  height: 41px;
  width: 100%;
}

.n-title {
  background: linear-gradient(180deg, #8450AD 0%, #3361FF 100%);
  // font-family: 'Tinos', serif;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

table {
  border-collapse: collapse;
  border-style: hidden;
  width: 100%;

  &.fixed {
    table-layout: fixed;
  }
}

tr {
  text-align: justify;
  vertical-align: middle;
}

th {
  border: 1px solid rgba(0, 0, 0, 0.19);
  color: rgba(0, 0, 0, 0.8);
  //font-family: 'Tinos', serif;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  height: 41px;
  letter-spacing: -0.02em;
  line-height: 21px;
  padding: 0 1.5rem;
}

td {
  border: 1px solid rgba(0, 0, 0, 0.19);
  color: rgba(0, 0, 0, 0.6);
  //font-family: 'Tinos', serif;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  height: 41px;
  letter-spacing: -0.02em;
  line-height: 21px;
  padding: 0 1.5rem;
}
</style>
