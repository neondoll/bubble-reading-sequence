<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * App\Models\ObjectWaited
 *
 * @property int $id
 * @property int $obj_id
 * @property int $element
 * @property string $aim
 * @property string $plan
 * @property string $changes
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|ObjectWaited newModelQuery()
 * @method static Builder|ObjectWaited newQuery()
 * @method static Builder|ObjectWaited query()
 * @method static Builder|ObjectWaited whereAim($value)
 * @method static Builder|ObjectWaited whereChanges($value)
 * @method static Builder|ObjectWaited whereCreatedAt($value)
 * @method static Builder|ObjectWaited whereElement($value)
 * @method static Builder|ObjectWaited whereId($value)
 * @method static Builder|ObjectWaited whereObjId($value)
 * @method static Builder|ObjectWaited wherePlan($value)
 * @method static Builder|ObjectWaited whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ObjectWaited extends Model
{
    use HasFactory;

    protected $fillable = [
        'obj_id',
        'element',
        'aim',
        'plan',
        'changes'
    ];
}
