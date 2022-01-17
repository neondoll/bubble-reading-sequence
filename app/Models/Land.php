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
 * App\Models\Land
 *
 * @method static EloquentBuilder|Land newModelQuery()
 * @method static EloquentBuilder|Land newQuery()
 * @method static EloquentBuilder|Land query()
 * @method static updateOrCreate(array $attributes, array $values)
 * @method static EloquentBuilder|Land whereAddress($value)
 * @method static EloquentBuilder|Land whereAssignment($value)
 * @method static EloquentBuilder|Land whereCadastralNumber($value)
 * @method static EloquentBuilder|Land whereCreatedAt($value)
 * @method static EloquentBuilder|Land whereDeletedAt($value)
 * @method static EloquentBuilder|Land whereId($value)
 * @method static EloquentBuilder|Land whereIdOrg($value)
 * @method static EloquentBuilder|Land whereLatitude($value)
 * @method static EloquentBuilder|Land whereLongitude($value)
 * @method static EloquentBuilder|Land whereUpdatedAt($value)
 * @method static QueryBuilder|Land onlyTrashed()
 * @method static QueryBuilder|Land withTrashed()
 * @method static QueryBuilder|Land withoutTrashed()
 * @mixin Eloquent
 * @property int $id
 * @property int $id_org
 * @property string $assignment
 * @property string $address
 * @property string $cadastral_number
 * @property string $latitude
 * @property string $longitude
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 */
class Land extends Model
{
    use FindTrashed, HasFactory, SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = ['address', 'assignment', 'cadastral_number', 'latitude', 'longitude', 'id_org'];
}
