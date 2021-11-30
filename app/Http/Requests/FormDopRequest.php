<?php

namespace App\Http\Requests;

use App\Http\Requests\traits\FormValidator;
use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\Pure;

class FormDopRequest extends FormRequest
{
    use FormValidator;

    public function authorize(): bool
    {
        return true;
    }

    public function attributes(): array
    {
        return [
            'chin' => 'Классный чин, дипломатический ранг, воинское звание, специальное звание',
            'ugolov' => 'Привлекались ли Вы к уголовной ответственности и были ли Вы судимы (когда, за что, какое решение принято судом)? Являлись ли Вы подозреваемым или обвиняемым по уголовному делу (ко-гда, в связи с чем)?',
            'gos_tainy' => 'Допуск к государственный тайне, оформленный за период работы, службы, учебы, его форма, но-мер и дата (если имеется)',
            'gos_tainy.*.form' => 'Форма допуска к государственной тайне',
            'gos_tainy.*.org' => 'Место работы, службы, учебы, где оформлялся',
            'gos_tainy.*.number' => 'Номер',
            'gos_tainy.*.job_date' => 'Дата',
            'awards' => 'Государственные, ведомственные, региональные награды, иные виды поощрений (если имеются)',
            'comerc_uchast' => 'Принимаете ли Вы участие в деятельности коммерческих организаций на платной основе; владеете ли ценными бумагами, акциями, долями участия в уставных капиталах организации (информацию необходимо представить на дату заполнения анкеты)',
            'opit_dey' => 'Опыт деятельности, реализованные проекты',
            'kompetencii' => 'Компетенции',
            'achievements' => 'Достижения',
        ];
    }

    #[Pure]
    public function rules(): array
    {
        return $this->dpoRules();
    }
}
