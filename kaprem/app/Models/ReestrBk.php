<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ReestrBk
 *
 * @property int $id
 * @property int $organization_id
 * @property string $organization_name
 * @property string $number_and_date_protocol
 * @property string $number
 * @property string $date
 * @method static \Illuminate\Database\Eloquent\Builder|ReestrBk newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ReestrBk newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ReestrBk query()
 * @method static \Illuminate\Database\Eloquent\Builder|ReestrBk whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ReestrBk whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ReestrBk whereNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ReestrBk whereNumberAndDateProtocol($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ReestrBk whereOrganizationId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ReestrBk whereOrganizationName($value)
 * @mixin \Eloquent
 */
class ReestrBk extends Model
{
    use HasFactory;

    protected $table = 'reestr_bk';

    protected $fillable = [
        'organization_id',
        'organization_name',
        'number_and_date_protocol',
        'number',
        'date'
    ];

    public $timestamps = false;
}
