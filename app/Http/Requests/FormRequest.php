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

    public function attributes(): array
    {
        return [];
    }

    public function rules(): array
    {
        return $this->rules();
    }
}
