<?php

namespace App\Http\Requests;

use App\Http\Requests\traits\FormValidator;
use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;
use JetBrains\PhpStorm\Pure;

class FormEducationRequest extends FormRequest
{
    use FormValidator;

    public function authorize(): bool
    {
        return true;
    }

    #[Pure]
    public function rules(): array
    {
        return $this->educationsRules();
    }

    #[ArrayShape([
        'education_level' => "string",
        'education' => "string",
        'common_org' => "string",
        'dpo' => "string"
    ])]
    public function attributes(): array
    {
        return [
            'education_level' => 'Уровень образования (наивысший)',
            'education' => 'Информация об образовании',
            'common_org' => 'Участие в общественных организациях',
            'dpo' => 'Дополнительное профессиональное образование',
        ];
    }
}
