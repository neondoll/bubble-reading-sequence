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
 * App\Models\RepairType
 *
 * @method static EloquentBuilder|RepairType newModelQuery()
 * @method static EloquentBuilder|RepairType newQuery()
 * @method static QueryBuilder|RepairType onlyTrashed()
 * @method static EloquentBuilder|RepairType query()
 * @method static EloquentBuilder|RepairType whereCreatedAt($value)
 * @method static EloquentBuilder|RepairType whereDeletedAt($value)
 * @method static EloquentBuilder|RepairType whereId($value)
 * @method static EloquentBuilder|RepairType whereUpdatedAt($value)
 * @method static EloquentBuilder|RepairType whereValue($value)
 * @method static QueryBuilder|RepairType withTrashed()
 * @method static QueryBuilder|RepairType withoutTrashed()
 * @mixin Eloquent
 * @property int $id
 * @property string $value
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 */
class RepairType extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * @var string[]
     */
    protected $dates = ['deleted_at'];

    /**
     * @var string[]
     */
    protected $fillable = ['id', 'value'];
}
