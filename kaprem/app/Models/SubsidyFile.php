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
 * App\Models\SubsidyFile
 *
 * @method static EloquentBuilder|SubsidyFile newModelQuery()
 * @method static EloquentBuilder|SubsidyFile newQuery()
 * @method static QueryBuilder|SubsidyFile onlyTrashed()
 * @method static EloquentBuilder|SubsidyFile query()
 * @method static EloquentBuilder|SubsidyFile whereCreatedAt($value)
 * @method static EloquentBuilder|SubsidyFile whereDeletedAt($value)
 * @method static EloquentBuilder|SubsidyFile whereExtension($value)
 * @method static EloquentBuilder|SubsidyFile whereId($value)
 * @method static EloquentBuilder|SubsidyFile whereName($value)
 * @method static EloquentBuilder|SubsidyFile whereSize($value)
 * @method static EloquentBuilder|SubsidyFile whereSubsidyId($value)
 * @method static EloquentBuilder|SubsidyFile whereTitle($value)
 * @method static EloquentBuilder|SubsidyFile whereType($value)
 * @method static EloquentBuilder|SubsidyFile whereUpdatedAt($value)
 * @method static QueryBuilder|SubsidyFile withTrashed()
 * @method static QueryBuilder|SubsidyFile withoutTrashed()
 * @mixin Eloquent
 * @property int $id
 * @property int $subsidy_id
 * @property string $title
 * @property int $type
 * @property string $name
 * @property string $extension
 * @property int $size
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 */
class SubsidyFile extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * @var string[]
     */
    protected $dates = ['deleted_at'];

    /**
     * @var string[]
     */
    protected $fillable = ['extension', 'name', 'size', 'subsidy_id', 'title', 'type'];
}
