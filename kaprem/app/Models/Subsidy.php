<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Support\Carbon;

/**
 * App\Models\Subsidy
 *
 * @method static EloquentBuilder|Subsidy newModelQuery()
 * @method static EloquentBuilder|Subsidy newQuery()
 * @method static QueryBuilder|Subsidy onlyTrashed()
 * @method static EloquentBuilder|Subsidy query()
 * @method static EloquentBuilder|Subsidy whereAddress($value)
 * @method static EloquentBuilder|Subsidy whereAssignment($value)
 * @method static EloquentBuilder|Subsidy whereBuildYear($value)
 * @method static EloquentBuilder|Subsidy whereCadastralNumber($value)
 * @method static EloquentBuilder|Subsidy whereCity($value)
 * @method static EloquentBuilder|Subsidy whereCode($value)
 * @method static EloquentBuilder|Subsidy whereCreatedAt($value)
 * @method static EloquentBuilder|Subsidy whereDeletedAt($value)
 * @method static EloquentBuilder|Subsidy whereId($value)
 * @method static EloquentBuilder|Subsidy whereInRent($value)
 * @method static EloquentBuilder|Subsidy whereIsPrescription($value)
 * @method static EloquentBuilder|Subsidy whereLastFixYear($value)
 * @method static EloquentBuilder|Subsidy whereName($value)
 * @method static EloquentBuilder|Subsidy whereNotUsed($value)
 * @method static EloquentBuilder|Subsidy whereNote($value)
 * @method static EloquentBuilder|Subsidy whereOrganizationId($value)
 * @method static EloquentBuilder|Subsidy wherePravoOpUpr($value)
 * @method static EloquentBuilder|Subsidy wherePravoSobstv($value)
 * @method static EloquentBuilder|Subsidy wherePrescription($value)
 * @method static EloquentBuilder|Subsidy whereRealEstateId($value)
 * @method static EloquentBuilder|Subsidy whereReasons($value)
 * @method static EloquentBuilder|Subsidy whereRegionId($value)
 * @method static EloquentBuilder|Subsidy whereRepairTypeId($value)
 * @method static EloquentBuilder|Subsidy whereShortDescription($value)
 * @method static EloquentBuilder|Subsidy whereSquareCapRem($value)
 * @method static EloquentBuilder|Subsidy whereSquareTotal($value)
 * @method static EloquentBuilder|Subsidy whereStartYear($value)
 * @method static EloquentBuilder|Subsidy whereStatusId($value)
 * @method static EloquentBuilder|Subsidy whereUpdatedAt($value)
 * @method static EloquentBuilder|Subsidy whereUsed($value)
 * @method static EloquentBuilder|Subsidy whereWear($value)
 * @method static QueryBuilder|Subsidy withTrashed()
 * @method static QueryBuilder|Subsidy withoutTrashed()
 * @mixin Eloquent
 * @property int $id
 * @property int $organization_id
 * @property string $code
 * @property string $name
 * @property string $short_description
 * @property int $repair_type_id
 * @property string $address
 * @property int $region_id
 * @property string $city
 * @property string $cadastral_number
 * @property string $build_year
 * @property string $start_year
 * @property string $last_fix_year
 * @property int $is_prescription
 * @property string|null $prescription
 * @property string $wear
 * @property string $reasons
 * @property string $pravo_op_upr
 * @property string $assignment
 * @property string $pravo_sobstv
 * @property float $square_total
 * @property float $square_cap_rem
 * @property float $used
 * @property float $not_used
 * @property float $in_rent
 * @property string $note
 * @property int $status_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 * @property int|null $real_estate_id
 * @property-read Collection|SubsidyConclusion[] $conclusions
 * @property-read int|null $conclusions_count
 * @property-read Collection|SubsidyFile[] $files
 * @property-read int|null $files_count
 * @property-read Organization $organization
 * @property-read Region $region
 * @property-read RepairType $repair_type
 * @property-read Collection|SubsidyStage[] $stages
 * @property-read int|null $stages_count
 * @property-read SubsidyStatus $status
 */
class Subsidy extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * @var string[]
     */
    protected $dates = ['deleted_at'];

    /**
     * @var string[]
     */
    public $fillable = [
        'address', 'assignment', 'build_year', 'cadastral_number', 'city', 'code', 'in_rent', 'is_prescription',
        'last_fix_year', 'name', 'not_used', 'note', 'organization_id', 'pravo_op_upr', 'pravo_sobstv', 'prescription',
        'real_estate_id', 'reasons', 'region_id', 'repair_type_id', 'short_description', 'square_cap_rem',
        'square_total', 'start_year', 'status_id', 'used', 'wear'
    ];

    /**
     * @return HasMany
     */
    public function conclusions(): HasMany
    {
        return $this->hasMany(SubsidyConclusion::class);
    }

    /**
     * @return HasMany
     */
    public function files(): HasMany
    {
        return $this->hasMany(SubsidyFile::class);
    }

    /**
     * @return BelongsTo
     */
    public function organization(): BelongsTo
    {
        return $this->belongsTo(Organization::class);
    }

    /**
     * @return BelongsTo
     */
    public function region(): BelongsTo
    {
        return $this->belongsTo(Region::class);
    }

    /**
     * @return BelongsTo
     */
    public function repair_type(): BelongsTo
    {
        return $this->belongsTo(RepairType::class);
    }

    /**
     * @return HasMany
     */
    public function stages(): HasMany
    {
        return $this->hasMany(SubsidyStage::class);
    }

    /**
     * @return BelongsTo
     */
    public function status(): BelongsTo
    {
        return $this->belongsTo(SubsidyStatus::class, 'status_id');
    }
}
