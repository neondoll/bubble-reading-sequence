<template>
    <v-data-table :headers="headers" :items="items" :items-per-page="5">
        <template v-slot:header.actions="{ header }">
            <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
        </template>
        <template v-slot:header.address="{ header }">
            <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
        </template>
        <template v-slot:header.created_at="{ header }">
            <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
        </template>
        <template v-slot:header.id="{ header }">
            <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
        </template>
        <template v-slot:header.name="{ header }">
            <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
        </template>
        <template v-slot:header.organization="{ header }">
            <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
        </template>
        <template v-slot:header.organization_id="{ header }">
            <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
        </template>
        <template v-slot:header.stages_finansee="{ header }">
            <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
        </template>
        <template v-slot:header.stages_kap_coast="{ header }">
            <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
        </template>
        <template v-slot:header.status="{ header }">
            <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-btn color="primary" icon v-if="isChange && [1, 3].indexOf(Number(item.status.id)) !== -1" x-small
                   @click="$emit('delete', item)">
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </template>
        <template v-slot:item.address="{ item }">
            <span class="c-pointer font-inter-normal-400" style="color: #1B202B;" @click="toView(item)">
                {{ item.address }}
            </span>
        </template>
        <template v-slot:item.created_at="{ item }">
            <span class="c-pointer font-inter-normal-400" style="color: #1B202B;" @click="toView(item)">
                {{ item.created_at.split(' ')[0].split('-')[0] }}
            </span>
        </template>
        <template v-slot:item.id="{ item }">
            <span class="c-pointer font-inter-normal-400" style="color: #1B202B;" @click="toView(item)">
                {{ item.id }}
            </span>
        </template>
        <template v-slot:item.name="{ item }">
            <span class="c-pointer font-inter-normal-400" style="color: #1B202B;" @click="toView(item)">
                {{ item.name }}
            </span>
        </template>
        <template v-slot:item.organization="{ item }">
            <span class="c-pointer font-inter-normal-400" style="color: #1B202B;" @click="toView(item)">
                {{ item.organization.name }}
            </span>
        </template>
        <template v-slot:item.organization_id="{ item }">
            <span class="c-pointer font-inter-normal-400" style="color: #1B202B;" @click="toView(item)">
                {{ item.organization_id }}
            </span>
        </template>
        <template v-slot:item.stages_finansee="{ item }">
            <span class="c-pointer font-inter-normal-400" style="color: #1B202B;" @click="toView(item)">
                {{ countStagesFinansee(item.stages) }}
            </span>
        </template>
        <template v-slot:item.stages_kap_coast="{ item }">
            <span class="c-pointer font-inter-normal-400" style="color: #1B202B;" @click="toView(item)">
                {{ countStagesKapCoast(item.stages) }}
            </span>
        </template>
        <template v-slot:item.status="{ item }">
            <span class="c-pointer font-inter-normal-400" style="color: #1B202B;" @click="toView(item)">
                {{ item.status.value }}
            </span>
        </template>
    </v-data-table>
</template>

<script>
export default {
    computed: {
        headers() {
            let headers = []
            headers.push({align: 'center', text: 'Год загрузки', value: 'created_at'})
            if (!this.isUser) {
                headers.push({align: 'center', text: 'Организация', value: 'organization'})
                headers.push({align: 'center', text: 'ID организации', value: 'organization_id'})
            }
            headers.push({align: 'center', text: 'Объект', value: 'name'})
            headers.push({align: 'center', text: 'ID объекта', value: 'id'})
            headers.push({align: 'center', text: 'Адрес объекта', value: 'address'})
            headers.push({
                align: 'center',
                text: 'Сумма бюджетного финансирования на проведение капитального ремонта (тыс. руб.)',
                value: 'stages_kap_coast'
            })
            headers.push({
                align: 'center',
                text: 'Сумма внебюджетного финансирования на проведение капитального ремонта (тыс. руб.)',
                value: 'stages_finansee'
            })
            headers.push({align: 'center', text: 'Статус объекта', value: 'status'})
            if (this.isChange) {
                headers.push({align: 'center', text: 'Действия', value: 'actions'})
            }
            return headers
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
        isChange: {default: false, type: Boolean},
        isUser: {default: false, type: Boolean},
        items: {default: [], type: Array}
    }
}
</script>
