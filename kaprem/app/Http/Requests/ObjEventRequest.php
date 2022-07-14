<?php

namespace App\Http\Requests;

use App\Models\ObjStatus;
use App\Models\ProgramObject;
use App\Rules\FloatRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ObjEventRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function attributes()
    {
        return [
            'repairType' => 'вид ремонта', 
            'repairType.type_event' => 'вид планируемого мероприятия',
            'repairType.short_description' => 'краткое описание планируемых работ',
            'survey' => 'обследование',
            'survey.technical_survey' => 'техническое обследование',
        ];
    }

    public function rules()
    {
        return [
            'repairType' => 'required',

            'survey' => 'required',

            'psd' => 'required',

            'gge' => 'required',

            'smr' => 'required',
        ];
    }
}
