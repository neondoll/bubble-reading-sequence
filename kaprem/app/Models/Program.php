<?php

namespace App\Models;

use Database\Factories\ProgramFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * App\Models\Program
 *
 * @property int $id
 * @property int $org_id
 * @property string $square
 * @property string $cost_kaprem
 * @property int $year
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Program newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Program newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Program query()
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereCostKaprem($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereOrgId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereSquare($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereYear($value)
 * @mixin \Eloquent
 * @property-read \App\Models\Organization|null $org
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Contact[] $contacts
 * @property-read int|null $contacts_count
 * @property-read \App\Models\OrgInfo|null $org_info
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ProgramObject[] $objects
 * @property-read int|null $objects_count
 * @property int $sent
 * @property-read \App\Models\ProgramFile|null $file
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereSent($value)
 * @property float|null $p0201
 * @property float|null $p0210
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereP0201($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereP0210($value)
 * @property string|null $psd
 * @method static \Illuminate\Database\Eloquent\Builder|Program wherePsd($value)
 * @property-read \App\Models\array{priority: $program_objects_total_sums
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ProgramObject[] $priorityObjects
 * @property-read int|null $priority_objects_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ProgramObject[] $reservedObjects
 * @property-read int|null $reserved_objects_count
 * @method static \Database\Factories\ProgramFactory factory(...$parameters)
 */
class Program extends Model
{
    use HasFactory;

    protected $fillable = [
        'org_id',
        'square',
        'cost_kaprem',
        'year',
        'sent',
        'p0201',
        'p0210'
    ];

    protected static function newFactory()
    {
        return ProgramFactory::new();
    }

    public function org(): BelongsTo
    {
        return $this->belongsTo(Organization::class, 'org_id', 'id');
    }

    public function org_info(): HasOne
    {
        return $this->hasOne(OrgInfo::class, 'program_id', 'id');
    }

    public function contacts(): HasMany
    {
        return $this->hasMany(Contact::class, 'program_id', 'id');
    }
    
    /**
     * program_objects_total_sums
     *
     * @return array{priority: array, reserved: array}
     */
    public function getProgramObjectsTotalSumsAttribute(): array
    {
        $priorityObjectIds = $this->priorityObjects->map(function($object) {
            return $object->id;
        })->flatten();

        $reservedObjectsIds = $this->reservedObjects->map(function($object) {
            return $object->id;
        })->flatten();

        return [
            'priority' => array_merge(
                ObjectEvent::selectRaw('sum(p05) as financeSum, sum(p06) as coFinance')->whereIn('obj_id', $priorityObjectIds)->whereNull('parent')->first()->toArray(),
                ['totalSquare' => $this->priorityObjects->map(fn ($obj) => $obj->kap_rem_square)->sum()]
            ),    
            'reserved' => array_merge(
                ObjectEvent::selectRaw('sum(p05) as financeSum, sum(p06) as coFinance')->whereIn('obj_id', $reservedObjectsIds)->whereNull('parent')->first()->toArray(),
                ['totalSquare' => $this->reservedObjects->map(fn ($obj) => $obj->kap_rem_square)->sum()]
            )
        ];
    }

    public function priorityObjects(): HasMany
    {
        return $this->hasMany(ProgramObject::class, 'program_id', 'id')->where('type', 0);
    }

    public function reservedObjects(): HasMany
    {
        return $this->hasMany(ProgramObject::class, 'program_id', 'id')->where('type', 1);
    }

    public function objects(): HasMany
    {
        return $this->hasMany(ProgramObject::class, 'program_id', 'id');
    }

    public function file(): HasOne
    {
        return $this->hasOne(ProgramFile::class, 'program_id', 'id');
    }

    public function isSent()
    {
        return $this->sent;
    }
}
