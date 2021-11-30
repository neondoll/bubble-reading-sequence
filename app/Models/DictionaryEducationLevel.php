<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DictionaryEducationLevel
 *
 * @property int $id
 * @property string $level
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryEducationLevel newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryEducationLevel newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryEducationLevel query()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryEducationLevel whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryEducationLevel whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryEducationLevel whereLevel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryEducationLevel whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class DictionaryEducationLevel extends Model
{
    use HasFactory;

    protected $fillable = [
        'level'
    ];
}
