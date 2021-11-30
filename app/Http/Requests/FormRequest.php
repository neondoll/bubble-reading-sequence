<?php

namespace App\Http\Requests;

use App\Http\Requests\traits\FormValidator;
use Illuminate\Foundation\Http\FormRequest as Request;
use JetBrains\PhpStorm\Pure;

class FormRequest extends Request
{
    use FormValidator;

    public function authorize(): bool
    {
        return true;
    }


    #[Pure]
    public function rules(): array
    {
        return array_merge(
            $this->dpoRules(),
            $this->educationsRules(),
            $this->infoRules(),
            $this->jobRules(),
            $this->kvalRules()
        );
    }
}
