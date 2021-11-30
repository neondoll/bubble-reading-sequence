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
 * App\Models\CommonOrg
 *
 * @property int $id
 * @property int $form_id
 * @property int $position
 * @property string $years
 * @property string $locality
 * @property string $org
 * @property string $org_goal
 * @property string $role
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|CommonOrg newModelQuery()
 * @method static Builder|CommonOrg newQuery()
 * @method static Builder|CommonOrg query()
 * @method static Builder|CommonOrg whereCreatedAt($value)
 * @method static Builder|CommonOrg whereFormId($value)
 * @method static Builder|CommonOrg whereId($value)
 * @method static Builder|CommonOrg whereLocality($value)
 * @method static Builder|CommonOrg whereOrg($value)
 * @method static Builder|CommonOrg whereOrgGoal($value)
 * @method static Builder|CommonOrg wherePosition($value)
 * @method static Builder|CommonOrg whereRole($value)
 * @method static Builder|CommonOrg whereUpdatedAt($value)
 * @method static Builder|CommonOrg whereYears($value)
 * @mixin \Eloquent
 */
class CommonOrg extends Model implements CollectionToWord
{
    use HasFactory;

    protected $fillable = [
        'form_id',
        'position',
        'years',
        'locality',
        'org',
        'org_goal',
        'role',
    ];

    public static function generateArrayToWord(Collection $data, int $type = null, string $prefix = null): array
    {
        return $data->map(function ($item) {
            return [
                'co_position' => $item->position_val->name,
                'co_years' => $item->years,
                'co_locality' => $item->locality,
                'co_org' => $item->org,
                'co_org_goal' => $item->org_goal,
                'co_role' => $item->role,
            ];
        })->toArray();
    }

    public function position_val(): HasOne
    {
        return $this->hasOne(DictionaryCommonOrgPosition::class, 'id', 'position');
    }
}
