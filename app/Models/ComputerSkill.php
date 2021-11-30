<?php

namespace App\Models;

use App\Helpers\Interfaces\CollectionToWord;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * App\Models\ComputerSkill
 *
 * @property int $id
 * @property int $level
 * @property int $type
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\DictionaryComputerSkill $level_value
 * @method static \Illuminate\Database\Eloquent\Builder|ComputerSkill newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ComputerSkill newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ComputerSkill query()
 * @method static \Illuminate\Database\Eloquent\Builder|ComputerSkill whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ComputerSkill whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ComputerSkill whereLevel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ComputerSkill whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ComputerSkill whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ComputerSkill whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property int $form_id
 * @method static \Illuminate\Database\Eloquent\Builder|ComputerSkill whereFormId($value)
 */
class ComputerSkill extends Model implements CollectionToWord
{
    use HasFactory;

    protected $fillable = [
        'form_id',
        'type',
        'level',
        'name'
    ];

    public function level_value(): HasOne
    {
        return $this->hasOne(DictionaryComputerSkill::class, 'id', 'level');
    }

    public static function generateArrayToWord(Collection $data, int $type = null, string $prefix = null): array
    {
        return $data->filter(function ($item) use ($type) {
            return $item->type == $type;
        })->map(function ($item) use ($prefix) {
            return [
                "{$prefix}_skill_name" => $item->name,
                "{$prefix}_skill_level" => $item->level_value->name,
            ];
        })->toArray();
    }
}
