export const ApiMixin = {
    methods: {
        async fetch(url, table, columns, where) {

            const query = where ? `${table}(${where}){${columns}}` : `${table}{${columns}}`;
            const data = {
                query: `query myquery {${query}}`
            }
            let result = []
            await Axios.post(url, data).then((res) => {
                if (res.data.hasOwnProperty('data')) {
                    result = res.data.data[table];
                }
            }).catch((e) => console.error(e))
            return result;
        },
        async getSiteGroups(where) {
            return await this.fetch('/graphql', 'siteGroups', [
                'id', 'title', 'sites{id, title, text, href, icon, created_at, updated_at, deleted_at}', 'created_at',
                'updated_at', 'deleted_at'
            ], where);
        },
        async getForm(id) {
            return await this.fetch('/graphql', 'form', [
                'id', 'user_id', 'name', 'lastName', 'middleName',
                'sex', 'old_name', 'old_lastName', 'old_middleName',
                'passport_number', 'passport_serial', 'passport_place', 'passport_date',
                'citizenship', 'birthday', 'birthplace', 'created_at', 'updated_at',
                'index', 'district', 'city', 'street', 'house', 'corpus', 'room', 'education_level',
                'ready_to_move', 'email', 'phone', 'job_phone', 'social_network',
                'region_id', 'fact_region_id', 'languages{id,form_id,name,level}', 'computer_skills{id,form_id,name,level,type}',
                'educations{id,form_id,org,start_year,end_year,speciality,diplom}', 'dpos{id,education_program,org,end_year,hours,category,form_id}',
                'common_orgs{id,form_id,position,years,locality,org,org_goal,role}', 'job_place', 'job_position',
                'job_position_date', 'job_org_min', 'stage', 'stage_gos', 'stage_nauka', 'stage_comers', 'stage_no_comers',
                'stage_rukovod', 'sphere_uprav_id', 'sphere_uprav_dop_id', 'max_count_people_id',
                'job_history{id,form_id,start_year,end_year,short_name,org_name,org_place,position,awards}',
                'degree_id', 'sphere_n_id', 'sphere_n_dop_id', 'shifr', 'otrasl', 'zvan', 'hirsh',
                'scopus', 'web_of_science', 'inoe', 'gos_tainy{id,form_id,form,org,number,job_date}',
                'chin', 'ugolov', 'awards', 'comerc_uchast', 'opit_dey', 'kompetencii', 'achievements',
            ], `id:${id}`)
        },
        async getRegions(where) {
            return (await this.fetch('/graphql', 'regions', ['id', 'name'], where)).map(item => ({
                ...item,
                'id': parseInt(item.id)
            }));
        },
        async getDictionaryComputerSkills(where) {
            return (await this.fetch('/graphql', 'dictionary_computer_skills', ['id', 'name'], where)).map(item => ({
                ...item,
                'id': parseInt(item.id)
            }));
        },
        async getDictionaryDpoEducationLevel(where) {
            return (await this.fetch('/graphql', 'dictionary_dpo_education_level', ['id', 'value'], where)).map(item => ({
                ...item,
                'id': parseInt(item.id)
            }));
        },
        async getDictionaryCommonOrgPosition(where) {
            return (await this.fetch('/graphql', 'dictionary_common_org_positions', ['id', 'name'], where)).map(item => ({
                ...item,
                'id': parseInt(item.id)
            }));
        },
        async getDictionaryEducationLevels(where) {
            return (await this.fetch('/graphql', 'dictionary_education_levels', ['id', 'level'], where)).map(item => ({
                ...item,
                'id': parseInt(item.id)
            }));
        },
        async getDictionaryFormSpher(where) {
            return (await this.fetch('/graphql', 'dictionary_form_spher', ['id', 'value'], where)).map(item => ({
                ...item,
                'id': parseInt(item.id)
            }));
        },
        async getDictionaryFormPeople(where) {
            return (await this.fetch('/graphql', 'dictionary_form_people', ['id', 'value'], where)).map(item => ({
                ...item,
                'id': parseInt(item.id)
            }));
        },
        async getDictionaryDegree(where) {
            return (await this.fetch('/graphql', 'dictionary_degrees', ['id', 'value'], where)).map(item => ({
                ...item,
                'id': parseInt(item.id)
            }));
        },
        async getDictionarySphereScience(where) {
            return (await this.fetch('/graphql', 'dictionary_sphere_science', ['id', 'value'], where)).map(item => ({
                ...item,
                'id': parseInt(item.id)
            }));
        },
        async getDictionaryUchZvan(where) {
            return (await this.fetch('/graphql', 'dictionary_uch_zvan', ['id', 'value'], where)).map(item => ({
                ...item,
                'id': parseInt(item.id)
            }));
        }
    }
}
