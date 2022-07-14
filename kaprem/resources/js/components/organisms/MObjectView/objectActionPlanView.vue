<template>
    <div>
        <v-simple-table class="my-table">
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">
                            Этап
                        </th>
                        <th class="text-left">
                            Дата начала
                        </th>
                        <th class="text-left">
                            Дата окончания
                        </th>
                        <th class="text-left">
                            Общий фактический объем финансирования (тыс.руб.)
                        </th>
                        <th class="text-left">
                            В том числе бюджетное финансирование (тыс. руб.)
                        </th>
                        <th class="text-left">
                            В том числе внебюджетное финансирование (тыс. руб.) (тыс. руб.)
                        </th>
                        <th class="text-left">
                            Дата загрузки
                        </th>
                        <th class="text-left">
                            Принято экспертом
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1. Техническое обследование</td>
                        <td>{{ formatDate(events.survey.start) }}</td>
                        <td>{{ formatDate(events.survey.end) }}</td>
                        <td>
                            {{
                                (
                                    parseFloat(events.survey.budjet || 0) + 
                                    parseFloat(events.survey.cost || 0)
                                ).toFixed(2) 
                            }}
                        </td>
                        <td>{{ events.survey.budjet }}</td>
                        <td>{{ events.survey.cost }}</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td :rowspan="fileList.survey.length + 1">Подтверждающие документы по этапу</td>
                    </tr>
                    <tr
                        v-for="(fileListItem, index) in fileList.survey"
                        :key="`fileListItem-${index}-survey`"
                    >
                        <td colspan="5">
                            <p>{{ (index + 1) + ') ' + ucfirst(fileListItem.label) }}</p>
                            <p
                                v-for="(file, fileIndex) in fileListItem.files"
                                :key="`file-${index}-${fileIndex}-survay`"
                            >
                                <a @click.prevent="downloadFile(file)">{{ file.file_name }}</a>
                            </p>
                        </td>
                        <td>
                            <!-- <p style="margin-top: 32px"></p> -->
                            <p
                                v-for="(file, fileIndex) in fileListItem.files"
                                :key="`file-${index}-${fileIndex}-survay`"
                                class="date-field"
                            >
                                {{ formatDate(file.created_at) }}
                            </p>
                        </td>
                        <td>
                            <p
                                v-for="(file, fileIndex) in fileListItem.files"
                                :key="`file-${index}-${fileIndex}-survay`"
                                class="date-field"
                            >
                                <input
                                    style="cursor: pointer"
                                    type="checkbox"
                                    :disabled="$check(['user'])"
                                    @change="approveFile(file)"
                                    v-model="file.approved_by_expert"
                                />
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td>2. Разработка проектно-сметной документации</td>
                        <td>{{ formatDate(events.psd.start) }}</td>
                        <td>{{ formatDate(events.psd.end) }}</td>
                        <td>
                            {{ 
                                (
                                    parseFloat(events.psd.budjet || 0) + 
                                    parseFloat(events.psd.not_budjet || 0)
                                ).toFixed(2) 
                            }}
                        </td>
                        <td>{{ events.psd.budjet }}</td>
                        <td>{{ events.psd.not_budjet }}</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td :rowspan="fileList.psd.length + 1">Подтверждающие документы по этапу</td>
                    </tr>
                    <tr
                        v-for="(fileListItem, index) in fileList.psd"
                        :key="`fileListItem-${index}-psd`"
                    >
                        <td colspan="5">
                            <p>{{ (index + 1) + ') ' + ucfirst(fileListItem.label) }}</p>
                            <div v-if="addReference.includes(fileListItem.id)">
                                ссылка: <a target="_blank" :href="events.psd.references[fileListItem.id]">{{ events.psd.references[fileListItem.id] }}</a>
                            </div>
                            <p
                                v-for="(file, fileIndex) in fileListItem.files"
                                :key="`file-${index}-${fileIndex}-psd`"
                            >
                                <a @click.prevent="downloadFile(file)">{{ file.file_name }}</a>
                            </p>
                        </td>
                        <td>
                            <p style="margin-top: 32px"></p>
                            <p
                                v-for="(file, fileIndex) in fileListItem.files"
                                :key="`file-${index}-${fileIndex}-psd`"
                            >
                                {{ formatDate(file.created_at) }}
                            </p>
                        </td>
                        <td>
                            <p style="margin-top: 32px"></p>
                            <p
                                v-for="(file, fileIndex) in fileListItem.files"
                                :key="`file-${index}-${fileIndex}-psd`"
                            >
                                <input
                                    style="cursor: pointer"
                                    type="checkbox"
                                    :disabled="$check(['user'])"
                                    @change="approveFile(file)"
                                    v-model="file.approved_by_expert"
                                />
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>3. Государственная экспертиза проектно-сметной документации</td>
                        <td>{{ formatDate(events.gge.start) }}</td>
                        <td>{{ formatDate(events.gge.end) }}</td>
                        <td>
                            {{ 
                                (
                                    parseFloat(events.gge.budjet || 0) + 
                                    parseFloat(events.gge.not_budjet || 0)
                                ).toFixed(2)
                            }}
                        </td>
                        <td>{{ events.gge.budjet || '-' }}</td>
                        <td>{{ events.gge.not_budjet || '-' }}</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td :rowspan="fileList.gge.length + 1">Подтверждающие документы по этапу</td>
                    </tr>
                    <tr
                        v-for="(fileListItem, index) in fileList.gge"
                        :key="`fileListItem-${index}-gge`"
                    >
                        <td colspan="5">
                            <p>{{ (index + 1) + ') ' + ucfirst(fileListItem.label) }}</p>
                            <p
                                v-for="(file, fileIndex) in fileListItem.files"
                                :key="`file-${index}-${fileIndex}-gge`"
                            >
                                <a @click.prevent="downloadFile(file)">{{ file.file_name }}</a>
                            </p>
                        </td>
                        <td>
                            <p style="margin-top: 32px"></p>
                            <p
                                v-for="(file, fileIndex) in fileListItem.files"
                                :key="`file-${index}-${fileIndex}-gge`"
                            >
                                {{ formatDate(file.created_at) }}
                            </p>
                        </td>
                        <td>
                            <p style="margin-top: 32px"></p>
                            <p
                                v-for="(file, fileIndex) in fileListItem.files"
                                :key="`file-${index}-${fileIndex}-gge`"
                            >
                                <input
                                    style="cursor: pointer"
                                    type="checkbox"
                                    :disabled="$check(['user'])"
                                    @change="approveFile(file)"
                                    v-model="file.approved_by_expert"
                                />
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>4. Строительно-монтажные работы</td>
                        <td>{{ formatDate(events.smr.start) }}</td>
                        <td>{{ formatDate(events.smr.end) }}</td>
                        <td>
                            {{ 
                                (
                                    parseFloat(events.smr.budjet || 0) + 
                                    parseFloat(events.smr.not_budjet || 0)
                                ).toFixed(2)
                            }}
                        </td>
                        <td>{{ events.smr.budjet || '-' }}</td>
                        <td>{{ events.smr.not_budjet || '-' }}</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td :rowspan="fileList.smr.length + 1">Подтверждающие документы по этапу</td>
                    </tr>
                    <tr
                        v-for="(fileListItem, index) in fileList.smr"
                        :key="`fileListItem-${index}-smr`"
                    >
                        <td colspan="5">
                            <p>{{ (index + 1) + ') ' + ucfirst(fileListItem.label) }}</p>
                            <div v-if="addReference.includes(fileListItem.id)">
                                ссылка: <a target="_blank" :href="events.smr.references[fileListItem.id]">{{ events.smr.references[fileListItem.id] }}</a>
                            </div>
                            <p
                                v-for="(file, fileIndex) in fileListItem.files"
                                :key="`file-${index}-${fileIndex}-smr`"
                            >
                                <a @click.prevent="downloadFile(file)">{{ file.file_name }}</a>
                            </p>
                        </td>
                        <td>
                            <p style="margin-top: 32px"></p>
                            <p
                                v-for="(file, fileIndex) in fileListItem.files"
                                :key="`file-${index}-${fileIndex}-smr`"
                            >
                                {{ formatDate(file.created_at) }}
                            </p>
                        </td>
                        <td>
                            <p style="margin-top: 32px"></p>
                            <p
                                v-for="(file, fileIndex) in fileListItem.files"
                                :key="`file-${index}-${fileIndex}-smr`"
                            >
                                <input
                                    style="cursor: pointer"
                                    type="checkbox"
                                    :disabled="$check(['user'])"
                                    @change="approveFile(file)"
                                    v-model="file.approved_by_expert"
                                />
                            </p>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
export default {
    props: {
        events: {
            required: true
        },
        fileList: {
            required: true
        }
    },
    data () {
        return {
            addReference: [ 6, 7, 16, 17 ]
        }
    },
    methods: {
        async downloadFile ( file ) {
            if ( !file.server_name ) return;
            this.loading = true;
            await Axios.post( `/kaprem/object/action-files/download/${file.id}`, null, { responseType: "blob", } )
                .then( async res => {
                    let blob = await new Blob( [ res.data ], {
                        type: "octet/stream",
                    } );

                    let link = await document.createElement( "a" );
                    link.download = file.file_name;
                    link.href = await URL.createObjectURL( blob );
                    await link.click();
                    await URL.revokeObjectURL( link.href );
                } ).finally( () => {
                    this.loading = false;
                } );
        },
        async approveFile ( file ) {
            await Axios.post( `/kaprem/object/action-files/approve/${file.id}` ).then( response => {
            } ).catch( () => {
                file.approved_by_expert = false;
            } );
        }
    },
    computed: {
        ucfirst () {
            return str => str[ 0 ].toUpperCase() + str.slice( 1 );
        },
        formatDate () {
            return dateOrNot => {
                if ( dateOrNot === '-' || dateOrNot === null ) return '-';

                const dateTime = new Date( dateOrNot );
                const month = dateTime.getMonth() + 1;
                return `${dateTime.getDate()}.${month < 10 ? '0' + month : month}.${dateTime.getFullYear()}`;
            }
        },
    }
}
</script>

<style scoped lang="scss">
.my-table {
    border: thin solid rgba(0, 0, 0, 0.12);
}
.my-table th,
.my-table td {
    border: thin solid rgba(0, 0, 0, 0.12);
}
.date-field:first-child {
    margin-top: 36px !important;
}
</style>