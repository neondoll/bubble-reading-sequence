<template>
    <m-page label="Добавление анкеты" :breadcrumbs="breadcrumbs">
        <form-form-template v-model="formData"/>
    </m-page>

</template>

<script>
import MPage from "../../../organisms/MPage";
import FormFormTemplate from "@/js/components/templates/formFormTemplate/formFormTemplate";


export default {
    name: "CreatePage",
    components: {FormFormTemplate, MPage},
    data: () => ({
        breadcrumbs: [
            {text: 'Главная', to: {name: 'main'}},
            {text: 'Добавление анкеты'}
        ],
        formData: {
            id: null,
            educationErrors: null,
            errors: null,
            jobErrors: null,
            kvalErrors: null,
            computer_skills: [],
            educations: [],
            common_orgs: [],
            dopErrors: [],
            dpos: [],
            languages: [],
            job_history: [],
            gos_tainy: [],
            name: null,
            lastName: null,
            middleName: null,
            sex: null,
            isOldName: false,
            old_name: null,
            old_lastName: null,
            old_middleName: null,
            passport_number: null,
            passport_serial: null,
            passport_place: null,
            passport_date: null,
            citizenship: null,
            birthday: null,
            birthplace: null,
            index: null,
            district: null,
            city: null,
            street: null,
            house: null,
            corpus: null,
            room: null,
            ready_to_move: null,
            email: null,
            phone: null,
            job_phone: null,
            social_network: null,
            job_place: null,
            job_position: null,
            job_position_date: null,
            job_org_min: null,
            stage: null,
            stage_gos: null,
            stage_nauka: null,
            stage_comers: null,
            stage_no_comers: null,
            stage_rukovod: null,
            sphere_uprav_id: null,
            sphere_uprav_dop_id: null,
            max_count_people_id: null,
            degree_id: null,
            sphere_n_id: null,
            sphere_n_dop_id: null,
            shifr: null,
            otrasl: null,
            zvan: null,
            hirsh: null,
            scopus: null,
            web_of_science: null,
            inoe: null,
            chin: null,
            ugolov: null,
            awards: null,
            comerc_uchast: null,
            opit_dey: null,
            kompetencii: null,
            achievements: null,
        }
    })

}
</script>

<style scoped>

</style>
