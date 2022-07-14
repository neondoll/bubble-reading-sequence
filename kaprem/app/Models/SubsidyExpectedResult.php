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
 * App\Models\SubsidyExpectedResult
 *
 * @method static EloquentBuilder|SubsidyExpectedResult newModelQuery()
 * @method static EloquentBuilder|SubsidyExpectedResult newQuery()
 * @method static QueryBuilder|SubsidyExpectedResult onlyTrashed()
 * @method static EloquentBuilder|SubsidyExpectedResult query()
 * @method static EloquentBuilder|SubsidyExpectedResult whereCreatedAt($value)
 * @method static EloquentBuilder|SubsidyExpectedResult whereDeletedAt($value)
 * @method static EloquentBuilder|SubsidyExpectedResult whereGoal($value)
 * @method static EloquentBuilder|SubsidyExpectedResult whereId($value)
 * @method static EloquentBuilder|SubsidyExpectedResult whereIndicator($value)
 * @method static EloquentBuilder|SubsidyExpectedResult whereSubsidyId($value)
 * @method static EloquentBuilder|SubsidyExpectedResult whereUnit($value)
 * @method static EloquentBuilder|SubsidyExpectedResult whereUpdatedAt($value)
 * @method static QueryBuilder|SubsidyExpectedResult withTrashed()
 * @method static QueryBuilder|SubsidyExpectedResult withoutTrashed()
 * @mixin Eloquent
 * @property int $id
 * @property int $subsidy_id
 * @property string $goal
 * @property string $indicator
 * @property string|null $unit
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 */
class SubsidyExpectedResult extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * @var string[]
     */
    protected $dates = ['deleted_at'];

    /**
     * @var string[]
     */
    protected $fillable = ['goal', 'indicator', 'subsidy_id', 'unit'];
}
