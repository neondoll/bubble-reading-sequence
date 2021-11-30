<?php

namespace App\Models;

use App\Helpers\Interfaces\CollectionToWord;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Education
 *
 * @property int $id
 * @property int $form_id
 * @property string $org
 * @property int $start_year
 * @property int $end_year
 * @property string $speciality
 * @property string $diplom
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Education newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Education newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Education query()
 * @method static \Illuminate\Database\Eloquent\Builder|Education whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Education whereDiplom($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Education whereEndYear($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Education whereFormId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Education whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Education whereOrg($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Education whereSpeciality($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Education whereStartYear($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Education whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Education extends Model implements CollectionToWord
{
    use HasFactory;

    protected $table = 'educations';

    protected $fillable = [
        'id',
        'form_id',
        'org',
        'start_year',
        'end_year',
        'speciality',
        'diplom',
    ];

    public static function generateArrayToWord(Collection $data, int $type = null, string $prefix = null): array
    {
        return $data->map(function ($item){
            return [
                'ed_org'=>$item->org,
                'ed_start_year'=>$item->start_year,
                'ed_end_year'=>$item->end_year,
                'ed_speciality'=>$item->speciality,
                'ed_diplom'=>$item->diplom,
            ];
        })->toArray();
    }
}
