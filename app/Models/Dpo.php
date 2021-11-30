<?php

namespace App\Models;

use App\Helpers\Interfaces\CollectionToWord;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Carbon;

/**
 * App\Models\Dpo
 *
 * @property int $id
 * @property string $education_program
 * @property string $org
 * @property int $end_year
 * @property int $hours
 * @property int $category
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property int $form_id
 * @method static Builder|Dpo newModelQuery()
 * @method static Builder|Dpo newQuery()
 * @method static Builder|Dpo query()
 * @method static Builder|Dpo whereCategory($value)
 * @method static Builder|Dpo whereCreatedAt($value)
 * @method static Builder|Dpo whereEducationProgram($value)
 * @method static Builder|Dpo whereEndYear($value)
 * @method static Builder|Dpo whereFormId($value)
 * @method static Builder|Dpo whereHours($value)
 * @method static Builder|Dpo whereId($value)
 * @method static Builder|Dpo whereOrg($value)
 * @method static Builder|Dpo whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read DictionaryDpoEducationLevel $category_val
 */
class Dpo extends Model implements CollectionToWord
{
    use HasFactory;

    protected $fillable = [
        'education_program',
        'org',
        'end_year',
        'hours',
        'category',
        'form_id',
    ];

    public static function generateArrayToWord(Collection $data, int $type = null, string $prefix = null): array
    {
        return $data->map(function ($item) {
            return [
                'dpo_education_program' => $item->education_program,
                'dpo_org' => $item->org,
                'dpo_end_year' => $item->end_year,
                'dpo_hours' => $item->hours,
                'dpo_category' => $item->category_val->value,
            ];
        })->toArray();
    }

    public function category_val(): HasOne
    {
        return $this->hasOne(DictionaryDpoEducationLevel::class, 'id', 'category');
    }
}
