<template>
    <div>
        <div class="d-none" v-for="(item, index) in items" :key="`item-${index}-${modelName}`">
            <div v-for="(field,index2) in fields" :key="`field-${index}${index2}-${modelName}`">
                <input type="text" v-model="item[field.value]" :name="`${modelName}[${index}][${field.value}]`">
            </div>
        </div>
        <v-card elevation="5">
            <v-container>
                <v-data-table
                    :group-by="groupBy"
                    :headers="headers"
                    :items="items"
                    disable-pagination
                    disable-filtering
                    disable-sort
                    hide-default-footer
                >
                    <template #group.header="{group}">
                        {{ getGroup(group) }}
                    </template>
                    <template v-slot:footer>
                        <v-dialog
                            v-model="dialog"
                            max-width="500px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    color="primary"
                                    dark
                                    class="mb-2"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    Добавить
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="text-h5">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col>
                                                <div v-for="(field,index) in fields"
                                                     :key="`field-${field.value}-${index}`">
                                                    <v-autocomplete
                                                        v-if="field.group"
                                                        :items="group"
                                                        item-value="value"
                                                        item-text="text"
                                                        :label="field.text"
                                                        v-model="editedItem[field.value]"
                                                    />
                                                    <v-select
                                                        v-if="field.selectable"
                                                        :items="selectableItems"
                                                        item-value="value"
                                                        item-text="text"
                                                        :label="field.text"
                                                        v-model="editedItem[field.value]"
                                                    />
                                                    <v-text-field
                                                        v-if="!field.selectable && !field.group && field.type !== 'hidden'"
                                                        v-model="editedItem[field.value]"
                                                        :label="field.text"
                                                        :type="field.type"
                                                    ></v-text-field>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="close"
                                    >
                                        Отмена
                                    </v-btn>
                                    <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="save"
                                    >
                                        Сохранить
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-title class="text-h5">Вы уверены?</v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="closeDelete">Отмена</v-btn>
                                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </template>
                    <template #item.actions="{ item }">
                        <v-icon
                            small
                            class="mr-2"
                            @click="editItem(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            small
                            @click="deleteItem(item)"
                        >
                            mdi-delete
                        </v-icon>
                    </template>
                    <template v-slot:[selectableSlotName]="{item}">
                        {{ getLabel(item[selectableName]) }}
                    </template>
                </v-data-table>
            </v-container>
        </v-card>

    </div>

</template>

<script>
export default {
    name: "MEditableTable",
    data: () => ({
        dialog: false,
        dialogDelete: false,
        items: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            level: 0,
        },
        defaultItem: {
            name: '',
            level: 0,
        },
    }),

    props: {
        group: {
            type: Array,
            default: () => []
        },
        groupBy: {
            type: String | null,
            default: () => null
        },
        modelName: {
            type: String,
            required: true
        },
        fields: {
            required: true
        },
        value: [],
        selectableItems: {
            type: Array,
            default: () => []
        }
    },
    async mounted() {
        this.items = this.value
    },

    computed: {
        selectableName() {
            const s = this.fields.find(item => item.selectable === true);
            return s?.value;
        },
        selectableSlotName() {
            return `item.${this.selectableName}`
        },
        headers() {
            return [...this.fields, {text: 'Действия', value: 'actions'}]
        },
        formTitle() {
            return this.editedIndex === -1 ? 'Новый элемент' : 'Редактировать'
        },
    },

    watch: {
        value: {
            handler() {
                this.items = this.value
            },
            deep: true
        },
        items: {
            handler() {
                this.$emit('input', this.items)
            },
            deep: true
        },

        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },
    methods: {
        getGroup(val) {
            return this.group.find(item => item.value === val)?.text
        },
        getLabel(val) {
            return this.selectableItems.find(item => item.value === val)?.text
        },
        editItem(item) {
            this.editedIndex = this.items.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.items.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.items.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.items[this.editedIndex], this.editedItem)
                this.$forceUpdate()
            } else {
                this.items.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>

<style scoped>

</style>
