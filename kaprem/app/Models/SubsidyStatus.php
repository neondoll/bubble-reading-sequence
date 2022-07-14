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
 * App\Models\SubsidyStatus
 *
 * @method static EloquentBuilder|SubsidyStatus newModelQuery()
 * @method static EloquentBuilder|SubsidyStatus newQuery()
 * @method static QueryBuilder|SubsidyStatus onlyTrashed()
 * @method static EloquentBuilder|SubsidyStatus query()
 * @method static EloquentBuilder|SubsidyStatus whereCreatedAt($value)
 * @method static EloquentBuilder|SubsidyStatus whereDeletedAt($value)
 * @method static EloquentBuilder|SubsidyStatus whereId($value)
 * @method static EloquentBuilder|SubsidyStatus whereUpdatedAt($value)
 * @method static EloquentBuilder|SubsidyStatus whereValue($value)
 * @method static QueryBuilder|SubsidyStatus withTrashed()
 * @method static QueryBuilder|SubsidyStatus withoutTrashed()
 * @mixin Eloquent
 * @property int $id
 * @property string $value
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 */
class SubsidyStatus extends Model
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
