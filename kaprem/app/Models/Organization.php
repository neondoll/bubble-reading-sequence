<?php

namespace App\Models;

use Database\Factories\OrganizationFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use JetBrains\PhpStorm\Pure;

/**
 * App\Models\Organization
 *
 * @property int $id
 * @property string|null $name
 * @property string|null $full_name
 * @property string|null $short_name
 * @property int|null $type_id
 * @property int|null $founder_id
 * @property int $system_status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $region_id
 * @method static \Illuminate\Database\Eloquent\Builder|Organization newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Organization newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Organization query()
 * @method static \Illuminate\Database\Eloquent\Builder|Organization whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Organization whereFounderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Organization whereFullName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Organization whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Organization whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Organization whereRegionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Organization whereShortName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Organization whereSystemStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Organization whereTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Organization whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\OrgInfo[] $orgInfos
 * @property-read int|null $org_infos_count
 * @property string|null $inn
 * @property-read \App\Models\Region|null $region
 * @method static \Illuminate\Database\Eloquent\Builder|Organization whereInn($value)
 * @property-read \App\Models\ReestrBk|null $reestr
 * @method static \Database\Factories\OrganizationFactory factory(...$parameters)
 */
class Organization extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'full_name',
        'short_name',
        'type_id',
        'founder_id',
        'system_status',
        'region_id',
        'inn'
    ];

    protected static function newFactory()
    {
        return OrganizationFactory::new();
    }


    public function isNauch(): bool
    {
        return in_array($this->type_id, [7, 9, 10]);
    }

    #[Pure]
    public function GetIsNauchAttribute(): bool
    {
        return $this->isNauch();
    }

    public function region(): BelongsTo
    {
        return $this->belongsTo(Region::class, 'region_id', 'id');
    }

    public function orgInfos(): HasMany
    {
        return $this->hasMany(OrgInfo::class, 'org_id', 'id');
    }

    public function reestr(): HasOne
    {
        return $this->hasOne(ReestrBk::class, 'organization_id', 'id');
    }
}
