<?php

namespace App\Models;

use App\Models\traits\FindTrashed;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Models\RealEstate
 *
 * @property int $id
 * @property int $id_org
 * @property int|null $land_id
 * @property string $name
 * @property string $address
 * @property string $cadastral_number
 * @property string $latitude
 * @property string $longitude
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @method static \Illuminate\Database\Eloquent\Builder|RealEstate newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|RealEstate newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|RealEstate query()
 * @method static \Illuminate\Database\Eloquent\Builder|RealEstate whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RealEstate whereCadastralNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RealEstate whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RealEstate whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RealEstate whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RealEstate whereIdOrg($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RealEstate whereLandId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RealEstate whereLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RealEstate whereLongitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RealEstate whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RealEstate whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class RealEstate extends Model
{
    use HasFactory, SoftDeletes, FindTrashed;

    protected $dates = ['deleted_at'];

    protected $fillable = ['id_org', 'land_id', 'name', 'address', 'cadastral_number', 'latitude', 'longitude'];
}
