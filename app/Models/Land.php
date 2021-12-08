<?php

namespace App\Models;

use App\Models\traits\FindTrashed;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Models\Land
 *
 * @property int $id
 * @property int $id_org
 * @property string $assignment
 * @property string $address
 * @property string $cadastral_number
 * @property string $latitude
 * @property string $longitude
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @method static \Illuminate\Database\Eloquent\Builder|Land newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Land newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Land query()
 * @method static \Illuminate\Database\Eloquent\Builder|Land whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Land whereAssignment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Land whereCadastralNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Land whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Land whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Land whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Land whereIdOrg($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Land whereLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Land whereLongitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Land whereUpdatedAt($value)
 * @mixin \Eloquent
 * @method static \Illuminate\Database\Query\Builder|Land onlyTrashed()
 * @method static \Illuminate\Database\Query\Builder|Land withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Land withoutTrashed()
 */
class Land extends Model
{
    use HasFactory, SoftDeletes, FindTrashed;

    protected $dates = ['deleted_at'];

    protected $fillable = ['id_org', 'assignment', 'address', 'cadastral_number', 'latitude', 'longitude'];
}
