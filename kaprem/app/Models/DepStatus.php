<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DepStatus
 *
 * @method static \Illuminate\Database\Eloquent\Builder|DepStatus newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DepStatus newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DepStatus query()
 * @mixin \Eloquent
 * @property int $id
 * @property string $value
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|DepStatus whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DepStatus whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DepStatus whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DepStatus whereValue($value)
 * @property string $status
 * @method static \Illuminate\Database\Eloquent\Builder|DepStatus whereStatus($value)
 */
class DepStatus extends Model
{
    use HasFactory;

    protected $table = 'dep_statuses';

    protected $casts = ['id' => 'string'];

    protected $fillable = ['value','status'];
}
