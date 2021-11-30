<?php

namespace App\Models;

use App\Helpers\Interfaces\CollectionToWord;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * App\Models\JobHistory
 *
 * @property int $id
 * @property int $form_id
 * @property int|null $start_year
 * @property int|null $end_year
 * @property string|null $short_name
 * @property string|null $org_name
 * @property string|null $org_place
 * @property string|null $position
 * @property string|null $awards
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|JobHistory newModelQuery()
 * @method static Builder|JobHistory newQuery()
 * @method static Builder|JobHistory query()
 * @method static Builder|JobHistory whereAwards($value)
 * @method static Builder|JobHistory whereCreatedAt($value)
 * @method static Builder|JobHistory whereEndYear($value)
 * @method static Builder|JobHistory whereFormId($value)
 * @method static Builder|JobHistory whereId($value)
 * @method static Builder|JobHistory whereOrgName($value)
 * @method static Builder|JobHistory whereOrgPlace($value)
 * @method static Builder|JobHistory wherePosition($value)
 * @method static Builder|JobHistory whereShortName($value)
 * @method static Builder|JobHistory whereStartYear($value)
 * @method static Builder|JobHistory whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class JobHistory extends Model implements CollectionToWord
{
    use HasFactory;

    protected $fillable = [
        'form_id',
        'start_year',
        'end_year',
        'short_name',
        'org_name',
        'org_place',
        'position',
        'awards',
    ];

    /**
     * @param Collection $data
     * @param int|null $type
     * @param string|null $prefix
     * @return array
     */
    public static function generateArrayToWord(Collection $data, int $type = null, string $prefix = null): array
    {
        return $data->map(function ($item) {
            return [
                'job_start_year' => $item->start_year,
                'job_end_year' => $item->end_year,
                'job_short_name' => $item->short_name,
                'job_org_name' => $item->org_name,
                'job_org_place' => $item->org_place,
                'job_position' => $item->position,
                'job_awards' => $item->awards,
            ];
        })->toArray();
    }
}
