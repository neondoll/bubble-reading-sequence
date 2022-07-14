<template>
    <div>
        <ObjectActionPlanUpdate
            v-if="showUpdate"
            :events="events"
            :fileList="fileList"
            :objectId="objectId"
        />
        <ObjectActionPlanView
            :events="events"
            :fileList="fileList"
            v-else
        />

        <div
            style="text-align: right"
            class="pa-3"
            v-if="$check(['user', 'admin'])"
        >
            <v-btn
                v-if="!showUpdate"
                color="warning"
                outlined
                @click="showUpdate = !showUpdate"
            >
                Редактировать
            </v-btn>
            <div v-else>
                <v-btn
                    outlined
                    @click="showUpdate = false"
                >
                    Отмена
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import ObjectActionPlanUpdate from './objectActionPlanUpdate.vue';
import ObjectActionPlanView from './objectActionPlanView.vue';
import Axios from 'axios';

export default {
    components: {
        ObjectActionPlanUpdate,
        ObjectActionPlanView
    },
    props: {
        objectId: { required: true },
        events: { required: true },
        fileList: { required: true }
    },
    data () {
        return {
            showUpdate: false,
        }
    }
}
</script>

<style>
</style>