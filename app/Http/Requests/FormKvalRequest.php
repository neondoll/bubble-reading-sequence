<?php

namespace App\Http\Requests;

use App\Http\Requests\traits\FormValidator;
use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\Pure;

class FormKvalRequest extends FormRequest
{
    use FormValidator;

    public function authorize(): bool
    {
        return true;
    }

    public function attributes(): array
    {
        return [
            'degree_id' => 'Ученая степень',
            'sphere_n_id' => 'Сфера научной экспертизы (основная)',
            'sphere_n_dop_id' => 'Сфера научной экспертизы (дополнительная при наличии)',
            'shifr' => 'Шифр специальности',
            'otrasl' => 'Отрасль науки',
            'zvan' => 'Ученое звание',
            'hirsh' => 'Индекс Хирша',
            'scopus' => 'Scopus',
            'web_of_science' => 'Web of Science',
            'inoe' => 'Иное',
        ];
    }

    #[Pure]
    public function rules(): array
    {
        return $this->kvalRules();
    }
}
