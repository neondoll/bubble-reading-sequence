<?php

namespace App\Http\Requests;

use App\Http\Requests\traits\FormValidator;
use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\Pure;

class FormInfoRequest extends FormRequest
{
    use FormValidator;

    public function authorize(): bool
    {
        return true;
    }


    #[Pure]
    public function rules(): array
    {
        return $this->infoRules();
    }

    public function attributes(): array
    {
        return [
            'name' => 'Имя',
            'lastName' => 'Фамилия',
            'middleName' => 'Отчество',
            'sex' => 'Пол',
            'old_name' => 'Прежнее имя',
            'old_lastName' => 'Прежнее фамилия',
            'old_middleName' => 'Прежнее отчество',
            'passport_number' => 'Номер паспорта',
            'passport_serial' => 'Серия паспорта',
            'passport_place' => 'Место выдачи паспорта',
            'passport_date' => 'Дата выдачи паспорта',
            'citizenship' => 'Гражданство',
            'birthday' => 'Дата рождения',
            'birthplace' => 'Место рождения',
            'language' => 'Владение языками',
            'computer_skills' => 'Владение компьютером',
            'language.*.name' => 'Наименование языка',
            'language.*.level' => 'Уровень владения',

            'computer_skills.*.type' => 'Тип навыка',
            'computer_skills.*.name' => 'Наименование навыка',
            'computer_skills.*.level' => 'Уровень владения',
        ];
    }
}
