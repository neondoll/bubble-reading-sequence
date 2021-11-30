<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DictionaryFormPeople
 *
 * @property int $id
 * @property string $value
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryFormPeople newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryFormPeople newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryFormPeople query()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryFormPeople whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryFormPeople whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryFormPeople whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryFormPeople whereValue($value)
 * @mixin \Eloquent
 */
class DictionaryFormPeople extends Model
{
    use HasFactory;

    protected $table = 'dictionary_form_people';

    protected $fillable = ['value'];
}
