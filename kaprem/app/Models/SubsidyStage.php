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
 * App\Models\SubsidyStage
 *
 * @method static EloquentBuilder|SubsidyStage newModelQuery()
 * @method static EloquentBuilder|SubsidyStage newQuery()
 * @method static QueryBuilder|SubsidyStage onlyTrashed()
 * @method static EloquentBuilder|SubsidyStage query()
 * @method static EloquentBuilder|SubsidyStage whereBeginDate($value)
 * @method static EloquentBuilder|SubsidyStage whereCreatedAt($value)
 * @method static EloquentBuilder|SubsidyStage whereDeletedAt($value)
 * @method static EloquentBuilder|SubsidyStage whereFinalDate($value)
 * @method static EloquentBuilder|SubsidyStage whereFinansee($value)
 * @method static EloquentBuilder|SubsidyStage whereId($value)
 * @method static EloquentBuilder|SubsidyStage whereIsNessesary($value)
 * @method static EloquentBuilder|SubsidyStage whereKapCoast($value)
 * @method static EloquentBuilder|SubsidyStage whereName($value)
 * @method static EloquentBuilder|SubsidyStage whereRealizationCost($value)
 * @method static EloquentBuilder|SubsidyStage whereUpdatedAt($value)
 * @method static QueryBuilder|SubsidyStage withTrashed()
 * @method static QueryBuilder|SubsidyStage withoutTrashed()
 * @mixin Eloquent
 * @property int $id
 * @property int $subsidy_id
 * @property string $name
 * @property int $is_nessesary
 * @property string|null $begin_date
 * @property string|null $final_date
 * @property float|null $realization_cost
 * @property float|null $kap_coast
 * @property float|null $finansee
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 * @method static EloquentBuilder|SubsidyStage whereSubsidyId($value)
 */
class SubsidyStage extends Model
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
        'begin_date', 'final_date', 'finansee', 'is_nessesary', 'kap_coast', 'name', 'realization_cost', 'subsidy_id'
    ];
}
