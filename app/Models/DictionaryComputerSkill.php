<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DictionaryComputerSkill
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryComputerSkill newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryComputerSkill newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryComputerSkill query()
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryComputerSkill whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryComputerSkill whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryComputerSkill whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|DictionaryComputerSkill whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class DictionaryComputerSkill extends Model
{
    use HasFactory;
}
