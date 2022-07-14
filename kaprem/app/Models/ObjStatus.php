<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ObjStatus
 *
 * @method static \Illuminate\Database\Eloquent\Builder|ObjStatus newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjStatus newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjStatus query()
 * @mixin \Eloquent
 * @property int $id
 * @property string $value
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ObjStatus whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjStatus whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjStatus whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjStatus whereValue($value)
 * @property string $status
 * @method static \Illuminate\Database\Eloquent\Builder|ObjStatus whereStatus($value)
 */
class ObjStatus extends Model
{
    use HasFactory;

    protected $table = 'obj_statuses';

    protected $fillable = ['value', 'status'];

    protected $casts = ['id' => 'string'];

    public static string $REALIZED = 'REALIZED';
}
