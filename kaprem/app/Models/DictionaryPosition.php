<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DictionaryPosition
 *
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryPosition newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryPosition newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryPosition query()
 * @mixin \Eloquent
 * @property int $id
 * @property string $value
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryPosition whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryPosition whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryPosition whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryPosition whereValue($value)
 */
class DictionaryPosition extends Model
{
    use HasFactory;

    protected $fillable = ['value'];
}
