<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DictionaryDegree
 *
 * @property int $id
 * @property string $value
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryDegree newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryDegree newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryDegree query()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryDegree whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryDegree whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryDegree whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryDegree whereValue($value)
 * @mixin \Eloquent
 */
class DictionaryDegree extends Model
{
    use HasFactory;

    protected $table = 'dictionary_degrees';

    protected $fillable = [
        'value'
    ];
}
