<?php

namespace App\Models;

use App\Helpers\Interfaces\CollectionToWord;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * App\Models\GosTainy
 *
 * @property int $id
 * @property int $form_id
 * @property string|null $form
 * @property string|null $org
 * @property string|null $number
 * @property string|null $job_date
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|GosTainy newModelQuery()
 * @method static Builder|GosTainy newQuery()
 * @method static Builder|GosTainy query()
 * @method static Builder|GosTainy whereCreatedAt($value)
 * @method static Builder|GosTainy whereForm($value)
 * @method static Builder|GosTainy whereFormId($value)
 * @method static Builder|GosTainy whereId($value)
 * @method static Builder|GosTainy whereJobDate($value)
 * @method static Builder|GosTainy whereNumber($value)
 * @method static Builder|GosTainy whereOrg($value)
 * @method static Builder|GosTainy whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class GosTainy extends Model implements CollectionToWord
{
    use HasFactory;

    protected $fillable = [
        'form_id',
        'form',
        'org',
        'number',
        'job_date',
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
                'gos_form' => $item->form,
                'gos_org' => $item->org,
                'gos_number' => $item->number,
                'gos_job_date' => $item->job_date,
            ];
        })->toArray();
    }
}
