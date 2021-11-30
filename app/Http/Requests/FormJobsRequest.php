<?php

namespace App\Http\Requests;

use App\Http\Requests\traits\FormValidator;
use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\Pure;

class FormJobsRequest extends FormRequest
{
    use FormValidator;

    public function authorize(): bool
    {
        return true;
    }

    public function attributes(): array
    {
        return [
            'job_place' => 'Место работы в настоящее время',
            'job_position' => 'Должность',
            'job_position_date' => 'C какого времени в этой должности',
            'job_org_min' => 'В системе организаций, подведомственных Министерству науки и высшего образования Российской Федерации',
            'stage' => 'Общий стаж работы (полных лет)',
            'stage_gos' => 'Государственная служба',
            'stage_nauka' => 'В секторе высшего образования и науки',
            'stage_comers' => 'В предпринимательском (коммерческом) секторе',
            'stage_no_comers' => 'В некоммерческом секторе',
            'stage_rukovod' => 'Стаж работы на руководящих позициях (полных лет)',
            'sphere_uprav_id' => 'Сфера управленческой экспертизы (основная)',
            'sphere_uprav_dop_id' => 'Сфера управленческой экспертизы (дополнительная при наличии)',
            'max_count_people_id' => 'Максимальная численность сотрудников, которые были у Вас в подчинении',
            'job_history' => 'Выполняемая работа с начала трудовой деятельности (укажите все места Вашей работы в прошлом) (начиная с первого места работы)',

            'job_history.*.start_year' => 'Год начала',
            'job_history.*.end_year' => 'Год окончания',
            'job_history.*.short_name' => 'Сокращение в названии (при наличии)',
            'job_history.*.org_name' => 'Название организации, учреждения',
            'job_history.*.org_place' => 'Местонахождение организации (адрес)',
            'job_history.*.position' => 'Должность',
            'job_history.*.awards' => 'Достижения',
        ];
    }


    #[Pure]
    public function rules(): array
    {
        return $this->jobRules();
    }
}
