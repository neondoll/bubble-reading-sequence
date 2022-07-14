<template>
    <div>
        <v-tabs
            class="align-items-baseline"
            v-model="tab"
        >
            <v-tab>
                1. Техническое обследование
            </v-tab>
            <v-tab>
                2. Разработка проектно-сметной документации
            </v-tab>
            <v-tab>
                3. Государственная экспертиза проектно-сметной документации
            </v-tab>
            <v-tab>
                4. Строительно-монтажные работы
            </v-tab>

            <!-- Этап 2 -->
            <v-tab-item>
                <v-row class="pa-5">
                    <v-col md="6">
                        <v-card class="pa-4">
                            <p class="font-weight-bold">Планируемые сроки выполнения:</p>
                            <v-text-field
                                type="date"
                                label="Дата начала (фактическая)"
                                v-model="events.survey.start"
                            ></v-text-field>
                            <v-text-field
                                type="date"
                                label="Дата окончания (фактическая)"
                                v-model="events.survey.end"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                    <v-col md="6">
                        <v-card class="pa-4">
                            <p>
                                <span class="font-weight-bold">Планируемая стоимость работ: </span>
                                <span class="button">{{ events.survey.cost }}</span>
                            </p>
                            <v-text-field
                                type="number"
                                label="Внебюджетные средства"
                                v-model="events.survey.cost"
                            ></v-text-field>
                            <v-text-field
                                disabled
                                type="number"
                                label="Бюджетные средства"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                </v-row>
                <v-col>
                    <v-card class="pa-4">
                        <p class="font-weight-bold">Подтверждающие документы по этапу: </p>
                        <div v-for="(fileListItem, index) in fileList.survey">
                            <p>{{ (index + 1) + ') ' + ucfirst(fileListItem.label) }}</p>
                            <div
                                v-for="(file, fileIndex) in fileListItem.files"
                                class="d-flex justify-start align-center"
                            >
                                <v-btn
                                    text
                                    :loading="loading"
                                    @click="downloadFile(file)"
                                >
                                    <v-icon color="success">mdi-file</v-icon>
                                    {{ file.file_name }} ({{ formatDate(file.created_at) }})
                                </v-btn>
                                <v-btn
                                    v-if="$check(['admin', 'user'])"
                                    icon
                                    :disabled="file.approved_by_expert"
                                    @click="deleteItem(file, fileListItem, index, fileIndex)"
                                    color="error"
                                >
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>

                                <v-switch
                                    :disabled="$check(['user'])"
                                    class="ml-2"
                                    v-model="file.approved_by_expert"
                                    :loading="loadingApproved"
                                    inset
                                    @change="approveFile(file)"
                                    :label="file.approved_by_expert ? 'Утверждено' : 'Утвердить'"
                                ></v-switch>
                            </div>

                            <v-file-input
                                :disabled="$check(['mon', 'mgsu'])"
                                multiple
                                :loading="loading"
                                @change="setFile($event, index, fileListItem)"
                            />
                        </div>
                    </v-card>
                </v-col>
            </v-tab-item>

            <!-- Этап 3 -->
            <v-tab-item>
                <v-row class="pa-5">
                    <v-col md="6">
                        <v-card class="pa-4">
                            <p class="font-weight-bold">Планируемые сроки выполнения:</p>
                            <v-text-field
                                type="date"
                                label="Дата начала (фактическая)"
                                v-model="events.psd.start"
                            ></v-text-field>
                            <v-text-field
                                type="date"
                                label="Дата окончания (фактическая)"
                                v-model="events.psd.end"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                    <v-col md="6">
                        <v-card class="pa-4">
                            <p>
                                <span class="font-weight-bold">Планируемая стоимость работ: </span>
                                <span class="button">
                                    {{ 
                                        (
                                            parseFloat(events.psd.budjet || 0) + 
                                            parseFloat(events.psd.not_budjet || 0)
                                        ).toFixed(2)
                                    }}
                                </span>
                            </p>
                            <v-text-field
                                type="number"
                                label="Бюджетные средства"
                                v-model="events.psd.budjet"
                            ></v-text-field>
                            <v-text-field
                                type="number"
                                label="Внебюджетные средства"
                                v-model="events.psd.not_budjet"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                </v-row>
                <v-col>
                    <v-card class="pa-4">
                        <p class="font-weight-bold">Подтверждающие документы по этапу: </p>
                        <div v-for="(fileListItem, index) in fileList.psd">
                            <p>{{ (index + 1) + ') ' + ucfirst(fileListItem.label) }}</p>
                            <div v-if="addReference.includes(fileListItem.id)">
                                <v-text-field
                                    v-model="events.psd.references[fileListItem.id]"
                                    class="px-10"
                                    type="text"
                                    label="Добавить ссылку"
                                ></v-text-field>
                            </div>
                            <div
                                v-for="(file, fileIndex) in fileListItem.files"
                                class="d-flex justify-start align-center"
                            >
                                <v-btn
                                    text
                                    :loading="loading"
                                    @click="downloadFile(file)"
                                >
                                    <v-icon color="success">mdi-file</v-icon>
                                    {{ file.file_name }} ({{ formatDate(file.created_at) }})
                                </v-btn>
                                <v-btn
                                    v-if="$check(['admin', 'user'])"
                                    icon
                                    @click="deleteItem(file, fileListItem, index, fileIndex)"
                                    color="error"
                                >
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>

                                <v-switch
                                    :disabled="$check(['user'])"
                                    class="ml-2"
                                    v-model="file.approved_by_expert"
                                    :loading="loadingApproved"
                                    inset
                                    @change="approveFile(file)"
                                    :label="file.approved_by_expert ? 'Утверждено' : 'Утвердить'"
                                ></v-switch>
                            </div>

                            <v-file-input
                                :disabled="$check(['mon', 'mgsu'])"
                                multiple
                                :loading="loading"
                                @change="setFile($event, index, fileListItem)"
                            />
                        </div>
                    </v-card>
                </v-col>
            </v-tab-item>

            <!-- Этап 4 -->
            <v-tab-item>
                <v-row class="pa-5">
                    <v-col md="6">
                        <v-card class="pa-4">
                            <p class="font-weight-bold">Планируемые сроки выполнения:</p>
                            <v-text-field
                                type="date"
                                label="Дата начала (фактическая)"
                                v-model="events.gge.start"
                            ></v-text-field>
                            <v-text-field
                                type="date"
                                label="Дата окончания (фактическая)"
                                v-model="events.gge.end"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                    <v-col md="6">
                        <v-card class="pa-4">
                            <p>
                                <span class="font-weight-bold">Планируемая стоимость работ: </span>
                                <span class="button">{{ 
                                    (
                                        parseFloat(events.gge.budjet || 0) + 
                                        parseFloat(events.gge.not_budjet || 0)
                                    ).toFixed(2)
                                }}</span>
                            </p>
                            <v-text-field
                                type="number"
                                label="Бюджетные средства"
                                v-model="events.gge.budjet"
                            ></v-text-field>
                            <v-text-field
                                type="number"
                                label="Внебюджетные средства"
                                v-model="events.gge.not_budjet"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                </v-row>
                <v-col>
                    <v-card class="pa-4">
                        <p class="font-weight-bold">Подтверждающие документы по этапу: </p>
                        <div v-for="(fileListItem, index) in fileList.gge">
                            <p>{{ (index + 1) + ') ' + ucfirst(fileListItem.label) }}</p>
                            <div
                                v-for="(file, fileIndex) in fileListItem.files"
                                class="d-flex justify-start align-center"
                            >
                                <v-btn
                                    text
                                    :loading="loading"
                                    @click="downloadFile(file)"
                                >
                                    <v-icon color="success">mdi-file</v-icon>
                                    {{ file.file_name }} ({{ formatDate(file.created_at) }})
                                </v-btn>
                                <v-btn
                                    v-if="$check(['admin', 'user'])"
                                    icon
                                    @click="deleteItem(file, fileListItem, index, fileIndex)"
                                    color="error"
                                >
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>

                                <v-switch
                                    :disabled="$check(['user'])"
                                    class="ml-2"
                                    v-model="file.approved_by_expert"
                                    :loading="loadingApproved"
                                    inset
                                    @change="approveFile(file)"
                                    :label="file.approved_by_expert ? 'Утверждено' : 'Утвердить'"
                                ></v-switch>
                            </div>

                            <v-file-input
                                :disabled="$check(['mon', 'mgsu'])"
                                multiple
                                :loading="loading"
                                @change="setFile($event, index, fileListItem)"
                            />
                        </div>
                    </v-card>
                </v-col>
            </v-tab-item>

            <!-- Этап 5 -->
            <v-tab-item>
                <v-row class="pa-5">
                    <v-col md="6">
                        <v-card class="pa-4">
                            <p class="font-weight-bold">Планируемые сроки выполнения:</p>
                            <v-text-field
                                type="date"
                                label="Дата начала (фактическая)"
                                v-model="events.smr.start"
                            ></v-text-field>
                            <v-text-field
                                type="date"
                                label="Дата окончания (фактическая)"
                                v-model="events.smr.end"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                    <v-col md="6">
                        <v-card class="pa-4">
                            <p>
                                <span class="font-weight-bold">Планируемая стоимость работ: </span>
                                <span class="button">{{ 
                                    (
                                        parseFloat(events.smr.budjet || 0) + 
                                        parseFloat(events.smr.not_budjet || 0)
                                    ).toFixed(2)
                                }}</span>
                            </p>
                            <v-text-field
                                type="number"
                                label=" Бюджетные средства"
                                v-model="events.smr.budjet"
                            ></v-text-field>
                            <v-text-field
                                type="number"
                                label="Внебюджетные средства"
                                v-model="events.smr.not_budjet"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                </v-row>
                <v-col>
                    <v-card class="pa-4">
                        <p class="font-weight-bold">Подтверждающие документы по этапу: </p>
                        <div v-for="(fileListItem, index) in fileList.smr">
                            <p>{{ (index + 1) + ') ' + ucfirst(fileListItem.label) }}</p>
                            <div v-if="addReference.includes(fileListItem.id)">
                                <v-text-field
                                    v-model="events.smr.references[fileListItem.id]"
                                    class="px-10"
                                    type="text"
                                    label="Добавить ссылку"
                                ></v-text-field>
                            </div>
                            <div
                                v-for="(file, fileIndex) in fileListItem.files"
                                class="d-flex justify-start align-center"
                            >
                                <v-btn
                                    text
                                    :loading="loading"
                                    @click="downloadFile(file)"
                                >
                                    <v-icon color="success">mdi-file</v-icon>
                                    {{ file.file_name }} ({{ formatDate(file.created_at) }})
                                </v-btn>
                                <v-btn
                                    v-if="$check(['admin', 'user'])"
                                    icon
                                    @click="deleteItem(file, fileListItem, index, fileIndex)"
                                    color="error"
                                >
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>

                                <v-switch
                                    :disabled="$check(['user'])"
                                    class="ml-2"
                                    v-model="file.approved_by_expert"
                                    :loading="loadingApproved"
                                    inset
                                    @change="approveFile(file)"
                                    :label="file.approved_by_expert ? 'Утверждено' : 'Утвердить'"
                                ></v-switch>
                            </div>

                            <v-file-input
                                :disabled="$check(['mon', 'mgsu'])"
                                multiple
                                :loading="loading"
                                @change="setFile($event, index, fileListItem)"
                            />
                        </div>
                    </v-card>
                </v-col>
            </v-tab-item>
        </v-tabs>
        <div class="d-flex justify-md-end justify-lg-end justify-sm-end mb-4">
            <v-btn
                outlined
                :color="'success'"
                :loading="loading"
                @click="uploadFilesToServer"
            >
                Сохранить
            </v-btn>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    props: {
        objectId: { required: true },
        events: { required: true },
        fileList: { required: true }
    },
    data () {
        return {
            tab: 0,
            loading: false,
            loadingApproved: false,
            addReference: [ 6, 7, 16, 17 ],

            stageDictionary: { //Это очень очень плохо, но уже 3 часа ночи, а это завтра показывать((
                survey: 2,
                psd: 3,
                gge: 4,
                smr: 5
            }
        }
    },
    methods: {
        setFile ( event, index, fileListItem ) {
            if ( Array.isArray( event ) ) {
                for ( let file of event ) {
                    this.fileList[ fileListItem.stage_name ][ index ].files.push( {
                        id: null,
                        stage_id: fileListItem.id,
                        file_name: file.name,
                        fileEntity: file,
                        server_name: null,
                        approved_by_expert: false,
                        created_at: null
                    } );
                }
            }
        },
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
        async deleteItem ( file, fileListItem, index, fileIndex ) {
            if ( file.id ) {
                this.loading = true;
                await Axios.post( `/kaprem/object/action-files/delete`, { fileId: file.id } ).then( response => {
                    this.fileList[ fileListItem.stage_name ][ index ].files.splice( fileIndex, 1 );
                } ).finally( () => {
                    this.loading = false;
                } );
            } else {
                this.fileList[ fileListItem.stage_name ][ index ].files.splice( fileIndex, 1 );
            }
        },
        async uploadFilesToServer () {
            this.loading = true;

            await this.saveEvents();

            for ( let stage of Object.keys( this.fileList ) ) {
                for ( let fileListItem of this.fileList[ stage ] ) {
                    for ( let file of fileListItem.files ) {
                        if ( !file.id ) {
                            const data = new FormData();
                            data.append( 'objectId', this.objectId );
                            data.append( 'stageId', file.stage_id );
                            data.append( 'fileListName', fileListItem.label );
                            data.append( 'file', file.fileEntity );
                            await Axios.post( `/kaprem/object/action-files/save`, data ).then( response => {
                                const fileData = response.data.file;
                                file.id = fileData.id;
                                file.server_name = fileData.server_name;
                                file.approved_by_expert = fileData.approved_by_expert;
                                file.created_at = fileData.created_at;
                            } );
                        }
                    }
                }
            }

            this.loading = false;
        },
        async approveFile ( file ) {
            this.loadingApproved = true;
            await Axios.post( `/kaprem/object/action-files/approve/${file.id}` ).then( response => {

            } ).catch( () => {
                file.approved_by_expert = false;
            } ).finally( () => {
                this.loadingApproved = false;
            } );
        },
        async saveEvents () {
            const updatedEvents = this.events;

            await Axios.post( `/kaprem/object/update-events/${this.objectId}`, updatedEvents ).then( res => {
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
    },
}
</script>

<style>
</style>