<template>
    <div>
        <v-combobox
            v-model="model"
            :filter="filter"
            :hide-no-data="!search"
            :items="items"
            :search-input.sync="search"
            hide-selected
            :label="label"
            multiple
            small-chips
        >
            <template v-slot:no-data>
                <v-list-item>
                    <span class="subheading">Добавьте элемент</span>
                    <v-chip
                        :color="`${colors[nonce - 1]} lighten-3`"
                        label
                        small
                        @click="addNew"
                    >
                        {{ search }}
                    </v-chip>
                </v-list-item>
            </template>
            <template v-slot:selection="{ attrs, item, parent, selected }">
                <v-chip
                    v-if="item === Object(item)"
                    v-bind="attrs"
                    :color="`${item.color} lighten-3`"
                    :input-value="selected"
                    label
                    small
                >
          <span class="pr-2">
            {{ item.text }}
          </span>
                    <v-icon
                        small
                        @click="deleteItem(item)"
                    >
                        $delete
                    </v-icon>
                </v-chip>
            </template>
            <template v-slot:item="{ index, item }">
                <v-text-field
                    v-if="editing === item"
                    v-model="editing.text"
                    autofocus
                    flat
                    background-color="transparent"
                    hide-details
                    solo
                    @keyup.enter="edit(index, item)"
                ></v-text-field>
                <v-chip
                    v-else
                    :color="`${item.color} lighten-3`"
                    dark
                    label
                    small
                >
                    {{ item.text }}
                </v-chip>
                <v-spacer></v-spacer>
                <v-list-item-action @click.stop>
                    <v-btn
                        icon
                        @click.stop.prevent="edit(index, item)"
                    >
                        <v-icon>{{ editing !== item ? 'mdi-pencil' : 'mdi-check' }}</v-icon>
                    </v-btn>
                </v-list-item-action>
            </template>
        </v-combobox>
    </div>

</template>

<script>
export default {
    name: "MChipSelect",
    data: () => ({
        activator: null,
        attach: null,
        colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
        editing: null,
        editingIndex: -1,
        items: [],
        nonce: 1,
        menu: false,
        model: [],
        x: 0,
        search: null,
        y: 0,
    }),
    computed: {
        model2: {
            get() {
                return this.value?.split(',');
            },
            set(val) {
                this.$emit('input', val.map(item => item.text).join(','))
            }
        }
    },
    watch: {
        value() {
            this.model = this.value?.split(',').map(item => ({
                text: item
            }));
        },
        model(val, prev) {
            if (!val || !prev) return;
            if (val.length === prev.length) return

            this.model = val.map(v => {
                if (typeof v === 'string') {
                    v = {
                        text: v,
                        color: this.colors[this.nonce - 1],
                    }
                    this.items.push(v)
                    this.nonce++
                }
                return v
            })
            this.model2 = this.model;
        },
    },
    methods: {
        deleteItem(item) {
            this.items.push(item)
            let i = this.model.findIndex(item2 => item2.text === item.text);
            this.model.splice(i, 1);
        },
        addNew() {
            this.items.push({text: this.search});
            this.search = null
        },
        edit(index, item) {
            this.editingIndex = this.editing ? -1 : index;
            this.editing = this.editing ? null : item;
        },
        filter(item, queryText, itemText) {
            if (item.header) return false;

            const hasValue = val => val != null ? val : ''

            const text = hasValue(itemText)
            const query = hasValue(queryText)

            return text.toString()
                .toLowerCase()
                .indexOf(query.toString().toLowerCase()) > -1
        },
    },
    props: {
        label: {
            type: String | null,
            default: () => null
        },
        value: {
            type: String
        },
        name: null
    }
}
</script>

<style scoped>

</style>
