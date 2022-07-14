<template>
    <div class="m-object-delete">
        <v-dialog
            v-model="showDialog"
            persistent
            max-width="400"
        >
            <div class="m-object-delete__no" v-if="alert">
                <v-card>
                    <v-card-title class="text-h5">
                        Предупреждение
                    </v-card-title>

                    <v-card-text>
                        Объект в статусе "Рассмотрено ДБИ" нельзя удалить
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            text
                            @click="showDialog = false"
                        >
                            Понятно
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
            <div class="m-object-delete__yes" v-else>
                <v-card>
                    <v-card-title class="text-h5">
                        Удаление
                    </v-card-title>

                    <v-card-text>
                        Вы точно хотите удалить?
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            color="darken-1"
                            text
                            @click="showDialog = false"
                        >
                            Отмена
                        </v-btn>

                        <v-btn
                            color="red darken-1"
                            text
                            @click="$emit('delete')"
                        >
                            Удалить
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "index.vue",
    props: {
        dialog: {
            require: true,
        },
        alert: {
            require: true,
        }
    },
    computed: {
        showDialog: {
            get() {
                return this.dialog;
            },
            set(val) {
                this.$emit('update:dialog',val);
            }
        },
    }
}
</script>

<style scoped>

</style>
