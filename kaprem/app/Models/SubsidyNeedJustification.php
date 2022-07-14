<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Support\Carbon;

/**
 * App\Models\SubsidyNeedJustification
 *
 * @method static EloquentBuilder|SubsidyNeedJustification newModelQuery()
 * @method static EloquentBuilder|SubsidyNeedJustification newQuery()
 * @method static QueryBuilder|SubsidyNeedJustification onlyTrashed()
 * @method static EloquentBuilder|SubsidyNeedJustification query()
 * @method static EloquentBuilder|SubsidyNeedJustification whereBuildingConstructionId($value)
 * @method static EloquentBuilder|SubsidyNeedJustification whereCreatedAt($value)
 * @method static EloquentBuilder|SubsidyNeedJustification whereDeletedAt($value)
 * @method static EloquentBuilder|SubsidyNeedJustification whereId($value)
 * @method static EloquentBuilder|SubsidyNeedJustification whereIsKapRemont($value)
 * @method static EloquentBuilder|SubsidyNeedJustification whereMaterial($value)
 * @method static EloquentBuilder|SubsidyNeedJustification whereObosnovanie($value)
 * @method static EloquentBuilder|SubsidyNeedJustification whereSrokEks($value)
 * @method static EloquentBuilder|SubsidyNeedJustification whereSubsidyId($value)
 * @method static EloquentBuilder|SubsidyNeedJustification whereUpdatedAt($value)
 * @method static QueryBuilder|SubsidyNeedJustification withTrashed()
 * @method static QueryBuilder|SubsidyNeedJustification withoutTrashed()
 * @mixin Eloquent
 * @property int $id
 * @property int $subsidy_id
 * @property int $building_construction_id
 * @property string|null $material
 * @property string $srok_eks
 * @property int $is_kap_remont
 * @property string|null $obosnovanie
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 */
class SubsidyNeedJustification extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * @var string[]
     */
    protected $dates = ['deleted_at'];

    /**
     * @var string[]
     */
    protected $fillable = [
        'building_construction_id', 'is_kap_remont', 'material', 'obosnovanie', 'srok_eks', 'subsidy_id'
    ];
}
