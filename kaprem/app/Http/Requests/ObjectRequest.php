<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ObjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    public function attributes(): array
    {
        return [
            'real_estate_id' => 'объект из недвижимость.иасмон.рф',
            'name' => 'Название объекта',
            'address' => 'Адрес объекта',
            'type' => 'Тип объекта',
            'region_id' => 'Субъект рф',
            'city' => 'Город',
            'cadastral_number' => 'Кадастровый номер',
            'build_year' => 'Год постройки здания',
            'exploy_year' => 'Год ввода здания в эксплуатацию:',
            'kaprem_year' => 'Год проведения последнего капитального ремонта/реконструкции:',
            'nadzor_orgs' => 'Наличие предписаний надзорных органов:',
            'wear' => 'Износ здания (%):',
            'osnovanie' => 'Основание для использования здания:',
            'pravo_oper' => 'Право оперативного управления (рег. запись, номер):',
            'naznach' => 'Назначение',
            'naznach2' => 'Назначение',
            'pravo' => 'Право собственности:',
            'square' => 'Общая площадь здания - всего, кв.м.:',
            'square_ustav' => 'Используется в уставной деятельности, кв.м.:',
            'square_ne_ustav' => 'Не используется в уставной деятельности, кв.м.:',
            'arenda' => 'Предоставлено в аренду, кв.м.',
            'primechanie' => 'Примечание',
        ];
    }

    public function messages()
    {
        return [
            'min' => 'Значение должно быть не меньше :min',
            'max' => 'Значение должно быть не больше :max'
        ];
    }


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'real_estate_id' => ['required', 'integer'],
            'name' => ['required', 'string'],
            'name_dbi' => ['required', 'string'],
            'region_id' => ['required', 'exists:regions,id'],
            'address' => ['required', 'string'],
            'address_dbi' => ['required', 'string'],
            'type' => ['required', 'integer'],
            'city' => ['required', 'string'],
            'cadastral_number' => ['required', 'string'],
            'build_year' => ['required', 'integer', 'min:988', 'max:2022'],
            'exploy_year' => ['required', 'integer', 'min:988', 'max:2022'],
            'kaprem_year' => ['required', 'integer', 'min:988', 'max:2022'],
            'nadzor_orgs' => ['required', 'string', 'max: 500'],
            'wear' => ['required', 'integer'],
            'osnovanie' => ['required', 'string', 'max:500'],
            'pravo_oper' => ['required', 'string', 'max:500'],
            'naznach' => ['required', 'string', 'max:500'],
            'naznach2' => ['nullable', 'string'],
            'pravo' => ['required', 'string', 'max:500'],
            'square' => ['required', 'numeric', 'min:50', 'max:60000'],
            'square_ustav' => ['required', 'numeric', 'min:0', 'max:60000'],
            'square_ne_ustav' => ['required', 'numeric', 'min:0', 'max:60000'],
            'arenda' => ['required', 'numeric'],
            'primechanie' => ['required', 'string', 'max:500'],
        ];
    }
}
