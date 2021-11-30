<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DictionaryUchZvan
 *
 * @property int $id
 * @property string $value
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryUchZvan newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryUchZvan newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryUchZvan query()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryUchZvan whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryUchZvan whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryUchZvan whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryUchZvan whereValue($value)
 * @mixin \Eloquent
 */
class DictionaryUchZvan extends Model
{
    use HasFactory;

    protected $table = 'dictionary_uch_zvan';

    protected $fillable = [
        'value'
    ];
}
