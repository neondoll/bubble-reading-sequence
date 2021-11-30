<?php

namespace App\Helpers\Classes;

use App\Models\CommonOrg;
use App\Models\ComputerSkill;
use App\Models\Dpo;
use App\Models\Education;
use App\Models\Form;
use App\Models\GosTainy;
use App\Models\JobHistory;
use App\Models\Language;
use Illuminate\Support\Facades\Storage;
use PhpOffice\PhpWord\Exception\CopyFileException;
use PhpOffice\PhpWord\Exception\CreateTemporaryFileException;
use PhpOffice\PhpWord\Exception\Exception;

class FormExportHelper
{
    /**
     * @throws Exception
     * @throws CreateTemporaryFileException
     * @throws CopyFileException
     */
    public function generate(Form $form): string
    {
        $template = new WordTemplate(Storage::path('templates/form_template.docx'));

        $columns = array_merge($form->attributesToArray(), $form->getGeneratedAttributes());

        $lang = $form->languages->map(function ($l) {
            return [
                'lang_name' => $l->name,
                'lang_level' => Language::getLevel($l->level)
            ];
        });

        $template->setValues($columns);

        $template->cloneRowAndSetValues('lang_name', $lang);

        $text_skills = ComputerSkill::generateArrayToWord($form->computer_skills, 0, 'text');

        $table_skills = ComputerSkill::generateArrayToWord($form->computer_skills, 1, 'table');

        $bd_skills = ComputerSkill::generateArrayToWord($form->computer_skills, 2, 'bd');

        $special_skills = ComputerSkill::generateArrayToWord($form->computer_skills, 3, 'text');

        $os_skills = ComputerSkill::generateArrayToWord($form->computer_skills, 4, 'text');


        $template->cloneRowAndSetValues('text_skill_name', $text_skills);
        $template->cloneRowAndSetValues('table_skill_name', $table_skills);
        $template->cloneRowAndSetValues('bd_skill_name', $bd_skills);
        $template->cloneRowAndSetValues('special_skill_name', $special_skills);
        $template->cloneRowAndSetValues('os_skill_name', $os_skills);

        $educations = Education::generateArrayToWord($form->educations);
        $dpos = Dpo::generateArrayToWord($form->dpos);
        $cos = CommonOrg::generateArrayToWord($form->common_orgs);
        $jobs = JobHistory::generateArrayToWord($form->job_history);
        $gos = GosTainy::generateArrayToWord($form->gos_tainy);

        $template->cloneRowAndSetValues('ed_org', $educations);
        $template->cloneRowAndSetValues('dpo_education_program', $dpos);
        $template->cloneRowAndSetValues('co_years', $cos);
        $template->cloneRowAndSetValues('job_start_year', $jobs);
        $template->cloneRowAndSetValues('gos_form', $gos);

        $path = Storage::path('public/form_template.docx');
        $template->saveAs($path);
        return $path;
    }
}
