<template>
    <v-data-table :headers="headers" :items="items" :items-per-page="5">
        <template v-slot:item.actions="{ item }">
            <v-btn color="primary" icon x-small
                   @click="$router.push({name: 'SubsidiesView', params: {code: item.code, id: item.id}})">
                <v-icon>mdi-eye</v-icon>
            </v-btn>
            <v-btn color="primary" icon v-if="isUser && [1, 3].indexOf(Number(item.status.id)) !== -1" x-small
                   @click="$emit('delete', item)">
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </template>
        <template v-slot:item.address="{ item }">
            <div class="c-pointer" @click="toView(item)">{{ item.address }}</div>
        </template>
        <template v-slot:item.created_at="{ item }">
            <div class="c-pointer" @click="toView(item)">{{ item.created_at.split(' ')[0].split('-')[0] }}</div>
        </template>
        <template v-slot:item.id="{ item }">
            <div class="c-pointer" @click="toView(item)">{{ item.id }}</div>
        </template>
        <template v-slot:item.name="{ item }">
            <div class="c-pointer" @click="toView(item)">{{ item.name }}</div>
        </template>
        <template v-slot:item.organization="{ item }">
            <div class="c-pointer" @click="toView(item)">{{ item.organization.name }}</div>
        </template>
        <template v-slot:item.organization_id="{ item }">
            <div class="c-pointer" @click="toView(item)">{{ item.organization_id }}</div>
        </template>
        <template v-slot:item.stages_finansee="{ item }">
            <div class="c-pointer" @click="toView(item)">{{ countStagesFinansee(item.stages) }}</div>
        </template>
        <template v-slot:item.stages_kap_coast="{ item }">
            <div class="c-pointer" @click="toView(item)">{{ countStagesKapCoast(item.stages) }}</div>
        </template>
        <template v-slot:item.status="{ item }">
            <div class="c-pointer" @click="toView(item)">{{ item.status.value }}</div>
        </template>
    </v-data-table>
</template>

<script>
export default {
    computed: {
        headers() {
            return this.isUser ? [
                {align: 'center', text: 'Год загрузки', value: 'created_at'},
                {align: 'center', text: 'Объект', value: 'name'},
                {align: 'center', text: 'ID объекта', value: 'id'},
                {align: 'center', text: 'Адрес объекта', value: 'address'},
                {
                    align: 'center',
                    text: 'Сумма бюджетного финансирования на проведение капитального ремонта (тыс. руб.)',
                    value: 'stages_kap_coast'
                },
                {
                    align: 'center',
                    text: 'Сумма внебюджетного финансирования на проведение капитального ремонта (тыс. руб.)',
                    value: 'stages_finansee'
                },
                {align: 'center', text: 'Статус объекта', value: 'status'},
                {align: 'center', text: 'Действия', value: 'actions'}
            ] : [
                {align: 'center', text: 'Год загрузки', value: 'created_at'},
                {align: 'center', text: 'Организация', value: 'organization'},
                {align: 'center', text: 'ID организации', value: 'organization_id'},
                {align: 'center', text: 'Объект', value: 'name'},
                {align: 'center', text: 'ID объекта', value: 'id'},
                {align: 'center', text: 'Адрес объекта', value: 'address'},
                {
                    align: 'center',
                    text: 'Сумма бюджетного финансирования на проведение капитального ремонта (тыс. руб.)',
                    value: 'stages_kap_coast'
                },
                {
                    align: 'center',
                    text: 'Сумма внебюджетного финансирования на проведение капитального ремонта (тыс. руб.)',
                    value: 'stages_finansee'
                },
                {align: 'center', text: 'Статус объекта', value: 'status'},
                {align: 'center', text: 'Действия', value: 'actions'}
            ]
        }
    },
    methods: {
        countStagesFinansee(stages) {
            let count = 0
            stages.forEach(stage => {
                count += Number(stage.finansee)
            })
            return count.toFixed(3)
        },
        countStagesKapCoast(stages) {
            let count = 0
            stages.forEach(stage => {
                count += Number(stage.kap_coast)
            })
            return count.toFixed(3)
        },
        async toView(item) {
            window.open(`/subsidies/${item.code}/${item.id}`)
        }
    },
    mounted() {
        console.log('--- ini SubsidiesTable ---')
    },
    name: "SubsidiesTable",
    props: {
        items: {default: [], type: Array},
        isUser: {default: false, type: Boolean}
    }
}
</script>
