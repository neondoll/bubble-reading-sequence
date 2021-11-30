<?php

namespace App\Http\Requests\traits;

trait FormValidator
{
    public function dpoRules(): array
    {
        return [
            'chin' => 'required',
            'ugolov' => 'required',
            'gos_tainy.*.form' => 'required',
            'gos_tainy.*.org' => 'required',
            'gos_tainy.*.number' => 'required',
            'gos_tainy.*.job_date' => 'required',
            'awards' => 'required',
            'comerc_uchast' => 'required',
            'opit_dey' => 'required',
            'kompetencii' => 'required',
            'achievements' => 'required',
        ];
    }

    public function educationsRules(): array
    {
        return [
            'education_level' => 'required',
            'education' => 'required',
            'education.*.org' => 'required',
            'education.*.start_year' => 'required',
            'education.*.end_year' => 'required',
            'education.*.speciality' => 'required',
            'education.*.diplom' => 'required',
            'common_org' => 'required',
            'common_org.*.years' => 'required',
            'common_org.*.locality' => 'required',
            'common_org.*.org' => 'required',
            'common_org.*.org_goal' => 'required',
            'common_org.*.position' => 'required',
            'common_org.*.role' => 'required',
            'dpo' => 'required',
            'dpo.*.education_program' => 'required',
            'dpo.*.org' => 'required',
            'dpo.*.end_year' => 'required',
            'dpo.*.hours' => 'required',
            'dpo.*.category' => 'required',
        ];
    }

    public function infoRules(): array
    {
        return [
            'name' => 'required',
            'lastName' => 'required',
            'middleName' => 'required',
            'sex' => 'required',
            'passport_number' => 'required',
            'passport_serial' => 'required',
            'passport_place' => 'required',
            'passport_date' => 'required',
            'citizenship' => 'required',
            'birthday' => 'required',
            'birthplace' => 'required',
            'region_id' => 'required',
            'language' => 'required',
            'computer_skills' => 'required',

            'language.*.name' => 'required',
            'language.*.level' => 'required',

            'computer_skills.*.type' => 'required',
            'computer_skills.*.name' => 'required',
            'computer_skills.*.level' => 'required',
        ];
    }

    public function jobRules(): array
    {
        return [
            'job_place' => 'required',
            'job_position' => 'required',
            'job_position_date' => 'required',
            'job_org_min' => 'required',
            'stage' => 'required',
            'stage_gos' => 'required',
            'stage_nauka' => 'required',
            'stage_comers' => 'required',
            'stage_no_comers' => 'required',
            'stage_rukovod' => 'required',
            'sphere_uprav_id' => 'required',
            'sphere_uprav_dop_id' => 'required',
            'max_count_people_id' => 'required',
            'job_history' => 'required',

            'job_history.*.start_year' => 'required',
            'job_history.*.end_year' => 'required',
            'job_history.*.short_name' => 'required',
            'job_history.*.org_name' => 'required',
            'job_history.*.org_place' => 'required',
            'job_history.*.position' => 'required',
            'job_history.*.awards' => 'required',
        ];
    }

    public function kvalRules(): array
    {
        return [
            'degree_id' => 'required',
            'sphere_n_id' => 'required',
            'sphere_n_dop_id' => 'required',
            'shifr' => 'required',
            'otrasl' => 'required',
            'zvan' => 'required',
            'hirsh' => 'required',
            'scopus' => 'required',
            'web_of_science' => 'required',
            'inoe' => 'required',
        ];
    }
}
