<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DictionaryFormSpher
 *
 * @property int $id
 * @property string $value
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryFormSpher newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryFormSpher newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryFormSpher query()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryFormSpher whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryFormSpher whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryFormSpher whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryFormSpher whereValue($value)
 * @mixin \Eloquent
 */
class DictionaryFormSpher extends Model
{
    use HasFactory;

    protected $table = 'dictionary_form_spher';
    protected $fillable = ['value'];
}
