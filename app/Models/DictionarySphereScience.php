<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DictionarySphereScience
 *
 * @property int $id
 * @property string $value
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|DictionarySphereScience newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionarySphereScience newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionarySphereScience query()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionarySphereScience whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionarySphereScience whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionarySphereScience whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionarySphereScience whereValue($value)
 * @mixin \Eloquent
 */
class DictionarySphereScience extends Model
{
    use HasFactory;


    protected $table = 'dictionary_sphere_science';

    protected $fillable = [
        'value'
    ];
}
