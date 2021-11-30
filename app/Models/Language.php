<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Language
 *
 * @property int $id
 * @property int $form_id
 * @property int $level
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Form[] $forms
 * @property-read int|null $forms_count
 * @method static \Illuminate\Database\Eloquent\Builder|Language newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Language newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Language query()
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereFormId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereLevel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Language extends Model
{
    use HasFactory;

    public static array $levels = [
        'Свободно владею',
        'Читаю и могу объясняться',
        'Читаю и перевожу со словарем'
    ];

    protected $fillable = [
        'form_id',
        'name',
        'level'
    ];

    public function forms(): HasMany
    {
        return $this->hasMany(Form::class);
    }

    public static function getLevel($val)
    {
        return self::$levels[$val] ?? '-';
    }

    public function getLang_levelAttribute(): string
    {
        return self::getLevel($this->level);
    }


}
