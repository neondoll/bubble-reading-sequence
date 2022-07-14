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
 * App\Models\SubsidyConclusion
 *
 * @method static EloquentBuilder|SubsidyConclusion newModelQuery()
 * @method static EloquentBuilder|SubsidyConclusion newQuery()
 * @method static QueryBuilder|SubsidyConclusion onlyTrashed()
 * @method static EloquentBuilder|SubsidyConclusion query()
 * @method static EloquentBuilder|SubsidyConclusion whereComment($value)
 * @method static EloquentBuilder|SubsidyConclusion whereCreatedAt($value)
 * @method static EloquentBuilder|SubsidyConclusion whereDeletedAt($value)
 * @method static EloquentBuilder|SubsidyConclusion whereExtension($value)
 * @method static EloquentBuilder|SubsidyConclusion whereId($value)
 * @method static EloquentBuilder|SubsidyConclusion whereName($value)
 * @method static EloquentBuilder|SubsidyConclusion whereNote($value)
 * @method static EloquentBuilder|SubsidyConclusion whereSize($value)
 * @method static EloquentBuilder|SubsidyConclusion whereSubsidyId($value)
 * @method static EloquentBuilder|SubsidyConclusion whereUpdatedAt($value)
 * @method static QueryBuilder|SubsidyConclusion withTrashed()
 * @method static QueryBuilder|SubsidyConclusion withoutTrashed()
 * @mixin Eloquent
 * @property int $id
 * @property int $subsidy_id
 * @property string $name
 * @property string $extension
 * @property int $size
 * @property string $note
 * @property string|null $comment
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 */
class SubsidyConclusion extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * @var string[]
     */
    protected $dates = ['deleted_at'];

    /**
     * @var string[]
     */
    protected $fillable = ['comment', 'extension', 'name', 'note', 'size', 'subsidy_id'];
}
