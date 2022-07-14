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
 * App\Models\BuildingConstruction
 *
 * @method static EloquentBuilder|BuildingConstruction newModelQuery()
 * @method static EloquentBuilder|BuildingConstruction newQuery()
 * @method static QueryBuilder|BuildingConstruction onlyTrashed()
 * @method static EloquentBuilder|BuildingConstruction query()
 * @method static EloquentBuilder|BuildingConstruction whereCreatedAt($value)
 * @method static EloquentBuilder|BuildingConstruction whereDeletedAt($value)
 * @method static EloquentBuilder|BuildingConstruction whereId($value)
 * @method static EloquentBuilder|BuildingConstruction whereType($value)
 * @method static EloquentBuilder|BuildingConstruction whereUpdatedAt($value)
 * @method static EloquentBuilder|BuildingConstruction whereValue($value)
 * @method static QueryBuilder|BuildingConstruction withTrashed()
 * @method static QueryBuilder|BuildingConstruction withoutTrashed()
 * @mixin Eloquent
 * @property int $id
 * @property string $value
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 * @property int $type
 */
class BuildingConstruction extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * @var string[]
     */
    protected $dates = ['deleted_at'];

    /**
     * @var string[]
     */
    protected $fillable = ['id', 'type', 'value'];
}
