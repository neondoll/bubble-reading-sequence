<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ObjectActivity
 *
 * @property int $id
 * @property int $obj_id
 * @property int $type
 * @property int $stage
 * @property int|null $p01 Наличие на объекте
 * @property string|null $p02 Материал конструкции
 * @property string|null $p03 Срок эксплуатации с момента строительства или предыдущего капитального ремонта
 * @property int|null $p04 Требуется капитальный ремонт
 * @property string|null $p05 Обоснование необходимости
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectActivity newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectActivity newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectActivity query()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectActivity whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectActivity whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectActivity whereObjId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectActivity whereP01($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectActivity whereP02($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectActivity whereP03($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectActivity whereP04($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectActivity whereP05($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectActivity whereStage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectActivity whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectActivity whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read mixed $stage_label
 */
class ObjectActivity extends Model
{
    use HasFactory;

    protected $fillable = [
        'obj_id',
        'type',
        'stage',
        'p01',
        'p02',
        'p03',
        'p04',
        'p05'
    ];

    const LABELS = [
        [
            'Фундаменты',
            'Отмостка',
            'Стены',
            'Колонны',
            'Перегородки',
            'Крыша (покрытия)',
            'Кровля',
            'Перекрытия',
            'Полы',
            'Окна',
            'Двери',
            'Ворота',
            'Лестницы',
            'Крыльца',
            'Балконы/лоджии',
            'Внутренняя отделка',
            'Наружная отделка'
        ],
        [
            'Система электроснабжения',
            'Система водоснабжения',
            'Система водоотведения',
            'Система газоснабжения',
            'Система кондиционирования воздуха',
            'Система вентиляции',
            'Система отопления',
            'Система диспетчеризации',
            'Радиофикация',
            'Телевидение эфирное',
            'Система видеонаблюдения',
            'Система интернет и телефонии',
            'Система контроля управления доступом',
            'Пожарная сигнализация',
            'Охранная сигнализация',
            'Мусоропроводы',
            'Лифты'
        ]
    ];

    public function getStageLabelAttribute()
    {
        return self::LABELS[$this->type][$this->stage - 1];
    }
}
