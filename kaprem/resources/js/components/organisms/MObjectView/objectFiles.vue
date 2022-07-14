<template>
    <div>
        <v-card
            v-for="(fileListItem, index) in fileList"
            :key="fileList.id"
            class="mb-2"
        >
            <div class="pa-3">
                <p class="text-left font-weight-bold">
                    {{ fileListItem.label }}
                    <span
                        class="color-red"
                        v-if="fileListItem.required"
                    >
                        <sup>*</sup>
                    </span>
                </p>
                <div>
                    <div v-if="fileListItem.files.length">
                        <div v-for="(file, fileIndex) in fileListItem.files">
                            <v-btn
                                text
                                :loading="loading"
                                @click="downloadFile(file)"
                            >
                                <v-icon color="success">mdi-file</v-icon>
                                {{ file.name }}
                            </v-btn>
                            <v-btn
                                icon
                                @click="deleteItem(file, index, fileIndex)"
                                color="error"
                            >
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </div>
                    </div>
                    <v-file-input
                        multiple
                        :loading="loading"
                        @change="setFile($event, index)"
                    />
                </div>
            </div>
        </v-card>
        <div class="d-flex justify-md-end justify-lg-end justify-sm-end mb-4">
            <v-btn
                outlined
                :color="'success'"
                :loading="loading"
                @click="uploadFilesToServer"
            >
                Сохранить
            </v-btn>
            <v-btn
                class="ml-2"
                outlined
                :loading="loading"
                @click="downloadZip"
            >
                Выгрузить архив
            </v-btn>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
import { ApiMixin } from '../../../mixins/ApiMixin';

export default {
    name: 'objectFiles',
    props: {
        obj_id: {
            required: true,
        },
        files: { //Это и есть файлы
            required: true,
        },
        fileList: { //Полностью построенный уже готовый список файлов
            required: true
        }
    },
    data () {
        return {

        }
    },
    data: () => ( {
        loading: false,
    } ),
    filters: {
        cut_str ( val ) {
            return val.length > 15 ? val.substring( 0, 10 ) + '...' : val;
        },
    },
    mixins: [ ApiMixin ],
    async mounted () {
        await this.fileList;
    },
    methods: {
        async downloadZip () {
            this.loading = true;
            await Axios.post( `/kaprem/object/file/download-zip`, { objectId: this.obj_id }, { responseType: "blob" } ).then( async res => {
                let blob = await new Blob( [ res.data ], {
                    type: "octet/stream",
                } );

                let link = await document.createElement( "a" );
                link.download = `Объект ${this.obj_id}.zip`;
                link.href = await URL.createObjectURL( blob );
                await link.click();
                await URL.revokeObjectURL( link.href );
            } ).finally( () => {
                this.loading = false;
            } );
        },
        async downloadFile ( file ) {
            if ( !file.server_name ) return;

            this.loading = true;
            await Axios.post( `/kaprem/object/file/download/${this.obj_id}/${file.server_name}`, null, { responseType: "blob", } )
                .then( async res => {
                    let blob = await new Blob( [ res.data ], {
                        type: "octet/stream",
                    } );

                    let link = await document.createElement( "a" );
                    link.download = file.name;
                    link.href = await URL.createObjectURL( blob );
                    await link.click();
                    await URL.revokeObjectURL( link.href );
                } ).finally( () => {
                    this.loading = false;
                } );
        },
        async uploadFilesToServer () {
            this.loading = true;

            for ( let fileListItem of this.fileList ) {
                for ( let file of fileListItem.files ) {
                    if ( !file.id ) {
                        let data = new FormData();
                        data.append( 'objectId', this.obj_id );
                        data.append( 'fileListItemId', fileListItem.id );
                        data.append( 'fileListItemDescriptor', fileListItem.descriptor );
                        data.append( 'file', file.fileEntity );
                        await Axios.post( '/kaprem/object/file/upload', data ).then( res => {
                            file.id = res.data.id,
                                file.server_name = res.data.server_name;
                            file.list_id = res.data.list_id;
                            delete file.fileEntity;
                        } );
                    }
                }
            }

            this.loading = false;
        },
        setFile ( event, index ) {
            if ( Array.isArray( event ) ) {
                for ( let file of event ) {
                    this.fileList[ index ].files.push( {
                        id: null,
                        list_id: null,
                        name: file.name,
                        fileEntity: file,
                        server_name: null
                    } );
                }
            }
        },
        async deleteItem ( file, index, fileIndex ) {
            if ( file.id ) { //удаляем с сервера
                await Axios.post( '/kaprem/object/file/delete', {
                    id: file.id
                } ).then( res => {
                    this.fileList[ index ].files.splice( fileIndex, 1 );
                } );
            } else { //удаляем локально
                this.fileList[ index ].files.splice( fileIndex, 1 );
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.border {
    border-collapse: collapse;
}

.color-red {
    color: red;
    font-size: 20px;
}
</style>
