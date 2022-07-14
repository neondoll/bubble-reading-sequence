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
 * App\Models\SubsidyScheduleEventFile
 *
 * @method static EloquentBuilder|SubsidyScheduleEventFile newModelQuery()
 * @method static EloquentBuilder|SubsidyScheduleEventFile newQuery()
 * @method static QueryBuilder|SubsidyScheduleEventFile onlyTrashed()
 * @method static EloquentBuilder|SubsidyScheduleEventFile query()
 * @method static EloquentBuilder|SubsidyScheduleEventFile whereAcceptedExpert($value)
 * @method static EloquentBuilder|SubsidyScheduleEventFile whereCreatedAt($value)
 * @method static EloquentBuilder|SubsidyScheduleEventFile whereDeletedAt($value)
 * @method static EloquentBuilder|SubsidyScheduleEventFile whereEventId($value)
 * @method static EloquentBuilder|SubsidyScheduleEventFile whereExtension($value)
 * @method static EloquentBuilder|SubsidyScheduleEventFile whereId($value)
 * @method static EloquentBuilder|SubsidyScheduleEventFile whereIsLink($value)
 * @method static EloquentBuilder|SubsidyScheduleEventFile whereLink($value)
 * @method static EloquentBuilder|SubsidyScheduleEventFile whereName($value)
 * @method static EloquentBuilder|SubsidyScheduleEventFile whereSize($value)
 * @method static EloquentBuilder|SubsidyScheduleEventFile whereSubsidyId($value)
 * @method static EloquentBuilder|SubsidyScheduleEventFile whereSubtype($value)
 * @method static EloquentBuilder|SubsidyScheduleEventFile whereTitle($value)
 * @method static EloquentBuilder|SubsidyScheduleEventFile whereType($value)
 * @method static EloquentBuilder|SubsidyScheduleEventFile whereUpdatedAt($value)
 * @method static QueryBuilder|SubsidyScheduleEventFile withTrashed()
 * @method static QueryBuilder|SubsidyScheduleEventFile withoutTrashed()
 * @mixin Eloquent
 * @property int $id
 * @property int $event_id
 * @property int $subsidy_id
 * @property int $type
 * @property int $subtype
 * @property string $title
 * @property int $is_link
 * @property string|null $link
 * @property string|null $name
 * @property string|null $extension
 * @property int|null $size
 * @property int $accepted_expert
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 */
class SubsidyScheduleEventFile extends Model
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
        'accepted_expert', 'event_id', 'extension', 'is_link', 'link', 'name', 'size', 'subsidy_id', 'subtype', 'title',
        'type'
    ];
}
