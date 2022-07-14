<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * App\Models\ObjectStatus
 *
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectStatus newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectStatus newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectStatus query()
 * @mixin \Eloquent
 * @property int $id
 * @property int $object_id
 * @property int $dep_status_id
 * @property int $dku_status_id
 * @property int $mgsu_status_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\DepStatus|null $dep_status
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectStatus whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectStatus whereDepStatusId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectStatus whereDkuStatusId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectStatus whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectStatus whereMgsuStatusId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectStatus whereObjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectStatus whereUpdatedAt($value)
 * @property-read \App\Models\DepStatus|null $dku_status
 * @property-read \App\Models\ObjStatus|null $mgsu_status
 * @property string|null $step_date
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectStatus whereStepDate($value)
 * @property-read \App\Models\ProgramObject|null $object
 * @property bool $is_approved_by_user Колонка отправлено юзером
 * @property bool $to_realization
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectStatus whereIsApprovedByUser($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectStatus whereToRealization($value)
 */
class ObjectStatus extends Model
{
    use HasFactory;

    protected $fillable = ['mgsu_status_id', 'dep_status_id', 'step_date', 'object_id', 'is_approved_by_user', 'to_realization'];

    protected $attributes = ['is_approved_by_user' => false, 'to_realization' => false];

    protected $casts = ['is_approved_by_user' => 'boolean', 'to_realization' => 'boolean'];


    public function object(): BelongsTo
    {
        return $this->belongsTo(ProgramObject::class, 'object_id', 'id');
    }

    public function dep_status(): HasOne
    {
        return $this->hasOne(DepStatus::class, 'id', 'dep_status_id');
    }

    public function mgsu_status(): HasOne
    {
        return $this->hasOne(ObjStatus::class, 'id', 'mgsu_status_id');
    }
}
