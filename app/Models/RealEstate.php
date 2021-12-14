<?php

namespace App\Models;

use App\Models\traits\FindTrashed;
use Eloquent;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Support\Carbon;

/**
 * App\Models\RealEstate
 *
 * @method static EloquentBuilder|RealEstate newModelQuery()
 * @method static EloquentBuilder|RealEstate newQuery()
 * @method static EloquentBuilder|RealEstate query()
 * @method static EloquentBuilder|RealEstate whereAddress($value)
 * @method static EloquentBuilder|RealEstate whereCadastralNumber($value)
 * @method static EloquentBuilder|RealEstate whereCreatedAt($value)
 * @method static EloquentBuilder|RealEstate whereDeletedAt($value)
 * @method static EloquentBuilder|RealEstate whereId($value)
 * @method static EloquentBuilder|RealEstate whereIdOrg($value)
 * @method static EloquentBuilder|RealEstate whereLandId($value)
 * @method static EloquentBuilder|RealEstate whereLatitude($value)
 * @method static EloquentBuilder|RealEstate whereLongitude($value)
 * @method static EloquentBuilder|RealEstate whereName($value)
 * @method static EloquentBuilder|RealEstate whereUpdatedAt($value)
 * @method static QueryBuilder|RealEstate onlyTrashed()
 * @method static QueryBuilder|RealEstate withTrashed()
 * @method static QueryBuilder|RealEstate withoutTrashed()
 * @mixin Eloquent
 * @property int $id
 * @property int $id_org
 * @property int|null $land_id
 * @property string $name
 * @property string $address
 * @property string $cadastral_number
 * @property string $latitude
 * @property string $longitude
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 */
class RealEstate extends Model
{
    use FindTrashed, HasFactory, SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = ['address', 'cadastral_number', 'id_org', 'land_id', 'latitude', 'longitude', 'name'];
}
