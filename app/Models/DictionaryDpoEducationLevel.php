<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DictionaryDpoEducationLevel
 *
 * @property int $id
 * @property string $value
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryDpoEducationLevel newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryDpoEducationLevel newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryDpoEducationLevel query()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryDpoEducationLevel whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryDpoEducationLevel whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryDpoEducationLevel whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryDpoEducationLevel whereValue($value)
 * @mixin \Eloquent
 */
class DictionaryDpoEducationLevel extends Model
{
    use HasFactory;

    protected $table = 'dictionary_dpo_education_level';

    protected $fillable = [
        'value'
    ];
}
