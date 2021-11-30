<template>
    <m-page label="Редактирование анкеты" :breadcrumbs="breadcrumbs">
        <form-form-template v-model="formData"/>
    </m-page>

</template>

<script>
import MPage from "@/js/components/organisms/MPage";
import FormFormTemplate from "@/js/components/templates/formFormTemplate/formFormTemplate";
import {ApiMixin} from "@/js/mixins";


export default {
    name: "UpdatePage",
    components: {FormFormTemplate, MPage},
    data: () => ({
        id: null,
        breadcrumbs: [
            {text: 'Главная', to: {name: 'main'}},
            {text: 'Добавление анкеты'}
        ],
        formData: {}
    }),
    mixins: [ApiMixin],
    async mounted() {
        this.id = this.$route.params.id
        this.formData = await this.getForm(this.id)
    }

}
</script>

<style scoped>

</style>
