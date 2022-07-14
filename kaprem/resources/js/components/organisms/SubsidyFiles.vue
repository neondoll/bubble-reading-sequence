<template>
    <v-card>
        <v-data-table hide-default-footer hide-default-header :headers="headers" :items="items" :items-per-page="-1"
                      :loading="loading">
            <template v-slot:item.delete="{ item }">
                <v-btn color="error" icon small v-if="isChange && item.id" @click="openDelete(item)">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </template>
            <template v-slot:item.file="{ item, index }">
                <v-tooltip left v-if="item.id">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" icon small v-bind="attrs" v-on="on" @click="downloadItem(item)">
                            <v-icon>mdi-upload</v-icon>
                        </v-btn>
                    </template>
                    <span>{{ item.name }}.{{ item.extension }}</span>
                </v-tooltip>
                <div v-else-if="isChange">
                    <input class="hidden-file-input" type="file" :id="'file_input_' + index" @input="save(index)"/>
                    <div class="cell-center-for-items">
                        <div class="arrow">
                            <label class="label" :for="`file_input_${index}`">
                                <span class="title">
                                    <span class="scope-to-animate"/>
                                    <span class="scope-to-animate"/>
                                    <span class="scope-to-animate"/>
                                    <span class="scope-to-animate"/>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:item.title="{ item }">
                <span class="font-inter-normal-400" style="color: #1B202B;">
                    {{ item.title }} <span style="color: #DC6767;" v-if="item.require">(обязательный)</span>
                </span>
            </template>
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title class="font-inter-normal-800" style="color: #4E86E2;">
                        Загруженные документы
                    </v-toolbar-title>
                    <v-divider class="mx-4" inset vertical/>
                    <v-spacer/>
                    <template v-if="isChange">
                        <v-btn color="green" dark icon @click="addItem">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
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
                </v-toolbar>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import {SubsidiesMixin} from "../../mixins/SubsidiesMixin";

export default {
    computed: {
        headers() {
            let headers = [{value: 'title'}, {value: 'file'}]
            if (this.isChange) {
                headers.push({value: 'delete'})
            }
            return headers
        }
    },
    data: () => ({
        default_item: {id: null, title: null, type: null},
        dialog_delete: false,
        edited_index: -1,
        edited_item: {id: null, title: null, type: null},
        items: [],
        loading: true
    }),
    methods: {
        addItem() {
            this.items.push({title: 'Дополнительные документы', type: 0, require: false})
        },
        closeDelete() {
            this.dialog_delete = false
            this.$nextTick(() => {
                this.edited_item = Object.assign({}, this.default_item)
                this.edited_index = -1
            })
        },
        async deleteItem() {
            const submitter = Axios.post(
                `/subsidies/${this.code}/${this.subsidyId}/files/${this.edited_item.id}/delete`,
                new FormData()
            )
            submitter.catch(({response}) => {
                console.log(response.data.errors)
            })
            submitter.then(async ({data}) => {
                console.log(data)
                if (data.success) {
                    let template = this.files_templates[this.code].find(template => template.type === this.edited_item.type)
                    if (template) {
                        Object.assign(this.items[this.edited_index], {
                            ...template,
                            id: null,
                            name: null,
                            extension: null
                        })
                    } else {
                        this.items.splice(this.edited_index, 1)
                    }
                    this.closeDelete()
                }
            })
            await submitter
        },
        downloadItem(item) {
            window.open(`/subsidies/${this.code}/${this.subsidyId}/files/${item.id}/download`)
        },
        async getItems() {
            this.loading = true
            const items = await this.fetch('subsidy_files', {
                extension: true,
                id: true,
                name: true,
                title: true,
                type: true
            }, {subsidy_id: parseInt(this.subsidyId)})
            this.items = [...this.files_templates[this.code]]
            items.forEach(item => {
                const index = this.files_templates[this.code].findIndex(template => template.type === item.type)
                if (index > -1) {
                    this.items[index].id = item.id
                    this.items[index].name = item.name
                    this.items[index].extension = item.extension
                } else {
                    this.items.push({...item, require: false})
                }
            })
            this.loading = false
        },
        openDelete(item) {
            this.edited_index = this.items.indexOf(item)
            this.edited_item = Object.assign({}, item)
            this.dialog_delete = true
        },
        async save(index) {
            this.loading = true
            let selector = document.querySelector(`#file_input_${index}`)
            let formData = new FormData();
            formData.append('file', selector.files[0]);
            formData.append('form', JSON.stringify(this.items[index]));
            const submitter = Axios.post(`/subsidies/${this.code}/${this.subsidyId}/files/add`, formData)
            submitter.catch(({response}) => {
                console.log(response.data.errors)
                this.loading = false
            })
            submitter.then(async ({data}) => {
                console.log(data)
                if (data.success) {
                    Object.assign(this.items[index], data.item)
                }
                selector.value = null
                this.loading = false
            })
            await submitter
        },
    },
    mixins: [SubsidiesMixin],
    async mounted() {
        await this.getItems()
    },
    name: "SubsidyFiles",
    props: {
        code: {require: true, type: String},
        isChange: {default: false, type: Boolean},
        subsidyId: {require: true, type: Number | String}
    },
}
</script>

<style lang="scss" scoped>
.arrow {
    align-items: center;
    display: flex;

    & input[type="file"] {
        opacity: 0;
        outline: 0;
        pointer-events: none;
        user-select: none;
    }

    & .label {
        border-radius: 50%;
        cursor: pointer;
        display: block;
        height: 28px;
        text-align: center;
        transition: border 300ms ease;

        &:hover {
            background: rgba(91, 192, 222, .1);

            & i {
                color: #5bc0de;
            }
        }

        & i {
            color: grey;
            display: block;
            font-size: 42px;
            transition: 200ms color;
        }
    }
}

.cell-center-for-items {
    align-items: center;
    display: flex;
    justify-content: center;
}

.hidden-file-input {
    display: none;
}

.label {
    position: relative;
    width: 28px;

    &:hover .scope-to-animate {
        &:nth-child(1) {
            background: #5bc0de;
            transform: rotate(-135deg);
        }

        &:nth-child(2) {
            background: #5bc0de;
            transform: rotate(135deg);
        }

        &:nth-child(3) {
            background: #5bc0de;
            transform: rotate(225deg);
        }

        &:nth-child(4) {
            background: #5bc0de;
            transform: rotate(-225deg);
        }
    }
}

.scope-to-animate {
    background: grey;
    height: 2px;
    transition: 0.4s ease;
    width: 8px;

    &:first-child {
        bottom: 35%;
        display: block;
        left: 25%;
        position: absolute;
        transform: rotate(45deg);
    }

    &:nth-child(2) {
        bottom: 35%;
        display: block;
        left: 45%;
        position: absolute;
        transform: rotate(-45deg);
    }

    &:nth-child(3) {
        bottom: 54%;
        display: block;
        left: 25%;
        position: absolute;
        transform: rotate(45deg);
    }

    &:nth-child(4) {
        bottom: 54%;
        display: block;
        left: 45%;
        position: absolute;
        transform: rotate(-45deg);
    }
}
</style>
