<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasTimestamps;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ObjectEventsType
 *
 * @property int $id
 * @property float $stage
 * @property string $label
 * @property int $value
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventsType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventsType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventsType query()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventsType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventsType whereLabel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventsType whereStage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventsType whereValue($value)
 * @mixin \Eloquent
 */
class ObjectEventsType extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'object_events_types';

    protected $fillable = ['value', 'stage', 'label'];

    protected $casts = ['id' => 'string'];
}
