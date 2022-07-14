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
 * App\Models\SubsidyAccess
 *
 * @method static EloquentBuilder|SubsidyAccess newModelQuery()
 * @method static EloquentBuilder|SubsidyAccess newQuery()
 * @method static QueryBuilder|SubsidyAccess onlyTrashed()
 * @method static EloquentBuilder|SubsidyAccess query()
 * @method static EloquentBuilder|SubsidyAccess whereCode($value)
 * @method static EloquentBuilder|SubsidyAccess whereCreatedAt($value)
 * @method static EloquentBuilder|SubsidyAccess whereDeletedAt($value)
 * @method static EloquentBuilder|SubsidyAccess whereId($value)
 * @method static EloquentBuilder|SubsidyAccess whereOrganizationId($value)
 * @method static EloquentBuilder|SubsidyAccess whereUpdatedAt($value)
 * @method static QueryBuilder|SubsidyAccess withTrashed()
 * @method static QueryBuilder|SubsidyAccess withoutTrashed()
 * @mixin Eloquent
 * @property int $id
 * @property int $organization_id
 * @property string $code
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 */
class SubsidyAccess extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * @var string[]
     */
    protected $dates = ['deleted_at'];

    /**
     * @var string[]
     */
    protected $fillable = ['code', 'organization_id'];
}
