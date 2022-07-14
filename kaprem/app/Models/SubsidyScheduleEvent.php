<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

/**
 * App\Models\SubsidyScheduleEvent
 *
 * @method static Builder|SubsidyScheduleEvent newModelQuery()
 * @method static Builder|SubsidyScheduleEvent newQuery()
 * @method static Builder|SubsidyScheduleEvent query()
 * @method static Builder|SubsidyScheduleEvent whereBudgetFunding($value)
 * @method static Builder|SubsidyScheduleEvent whereCreatedAt($value)
 * @method static Builder|SubsidyScheduleEvent whereDateEnd($value)
 * @method static Builder|SubsidyScheduleEvent whereDateStart($value)
 * @method static Builder|SubsidyScheduleEvent whereId($value)
 * @method static Builder|SubsidyScheduleEvent whereOffbudgetFunding($value)
 * @method static Builder|SubsidyScheduleEvent whereSubsidyId($value)
 * @method static Builder|SubsidyScheduleEvent whereTitle($value)
 * @method static Builder|SubsidyScheduleEvent whereType($value)
 * @method static Builder|SubsidyScheduleEvent whereUpdatedAt($value)
 * @mixin Eloquent
 * @property int $id
 * @property int $subsidy_id
 * @property int $type
 * @property string $title
 * @property string|null $date_start
 * @property string|null $date_end
 * @property float|null $budget_funding
 * @property float|null $offbudget_funding
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Collection|SubsidyScheduleEventFile[] $files
 * @property-read int|null $files_count
 */
class SubsidyScheduleEvent extends Model
{
    use HasFactory;

    /**
     * @var string[]
     */
    protected $fillable = [
        'budget_funding', 'date_end', 'date_start', 'offbudget_funding', 'subsidy_id', 'title', 'type'
    ];

    /**
     * @return HasMany
     */
    public function files(): HasMany
    {
        return $this->hasMany(SubsidyScheduleEventFile::class, 'event_id');
    }
}
