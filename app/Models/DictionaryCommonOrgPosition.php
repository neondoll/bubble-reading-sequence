<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DictionaryCommonOrgPosition
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryCommonOrgPosition newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryCommonOrgPosition newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryCommonOrgPosition query()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryCommonOrgPosition whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryCommonOrgPosition whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryCommonOrgPosition whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryCommonOrgPosition whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class DictionaryCommonOrgPosition extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];
}
