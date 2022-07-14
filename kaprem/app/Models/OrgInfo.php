<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\OrgInfo
 *
 * @property int $id
 * @property int $program_id
 * @property int $org_id
 * @property string|null $p1 Общая численность обучающихся по программам среднего профессионального образования, бакалавриата, специалитета, магистратуры, аспирантуры, включая очную и заочную формы обучения, из них:
 * @property string|null $p2 Численность профессорско-преподавательского состава
 * @property string|null $p3 Общая площадь всех зданий и сооружений
 * @property string|null $p4 Общая площадь всех зданий и сооружений, требующих капитального ремонта (на основании акта обследования или предписаний надзорных органов)
 * @property string|null $p5 Общая площадь всех зданий и сооружений, находящихся в аварийном состоянии
 * @property string|null $p6 Общая площадь всех зданий и сооружений, находящихся в работоспособном состоянии (на основании акта обследования)
 * @property string|null $p7 Общая площадь всех зданий и сооружений, находящихся в ограниченно-работоспособном состоянии (на основании акта обследования или предписаний надзорных органов)
 * @property string|null $p8 Общая площадь общежитий вуза
 * @property string|null $p9 Общая площадь общежитий вуза, требующих капитального ремонта
 * @property string|null $p10 Ожидаемое увеличение количества мест для проживания в общежитии за счет ввода в эксплуатацию дополнительных площадей после проведенного капитального ремонта
 * @property string|null $p11 Общая численность обучающихся, проживающих в общежитиях вуза, в том числе:
 * @property string|null $p12 численность обучающихся за счет средств федерального бюджета
 * @property string|null $p13 численность обучающихся по договорам об оказании платных образовательных услуг
 * @property string|null $p14 численность иных обучающихся
 * @property string|null $p15 Общее количество общежитий вуза
 * @property string|null $p16 Общее количество мест в общежитиях вуза
 * @property string|null $p17 Дефицит мест в общежитиях вуза
 * @property string|null $p18 Примечание
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo query()
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereOrgId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP1($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP10($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP11($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP12($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP13($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP14($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP15($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP16($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP17($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP18($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP2($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP3($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP4($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP5($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP6($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP7($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP8($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP9($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereProgramId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read \App\Models\Organization $organization
 * @property-read mixed $category
 * @property-read mixed $type
 * @property float|null $p19
 * @property string|null $p20
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP19($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OrgInfo whereP20($value)
 */
class OrgInfo extends Model
{
    use HasFactory;

    protected $fillable = [
        'program_id',
        'org_id',
        'p1',
        'p2',
        'p3',
        'p4',
        'p5',
        'p6',
        'p7',
        'p8',
        'p9',
        'p10',
        'p11',
        'p12',
        'p13',
        'p14',
        'p15',
        'p16',
        'p17',
        'p18',
        'p19',
        'p20'
    ];
    public static array $columns = [
        [
            [
                'label' => 'Общая численность обучающихся по программам среднего профессионального образования, бакалавриата, специалитета, магистратуры, аспирантуры, включая очную и заочную формы обучения.',
                'key' => 'p1',
                'type' => 'number'
            ],
            [
                'label' => 'Численность профессорско-преподавательского состава',
                'key' => 'p2',
                'type' => 'number'
            ],
            [
                'label' => 'Общая площадь всех зданий и сооружений',
                'key' => 'p3',
                'type' => 'number'
            ],
            [
                'label' => 'Общая площадь всех зданий и сооружений, требующих капитального ремонта (на основании акта обследования или предписаний надзорных органов)',
                'key' => 'p4',
                'type' => 'number'
            ],
            [
                'label' => 'Общая площадь всех зданий и сооружений, находящихся в аварийном состоянии (на основании акта обследования или предписаний надзорных органов)',
                'key' => 'p5',
                'type' => 'number'
            ],
            [
                'label' => 'Общая площадь всех зданий и сооружений, находящихся в работоспособном состоянии (на основании акта обследования)',
                'key' => 'p6',
                'type' => 'number'
            ],
            [
                'label' => 'Общая площадь всех зданий и сооружений, находящихся в ограниченно-работоспособном состоянии (на основании акта обследования или предписаний надзорных органов)',
                'key' => 'p7',
                'type' => 'number'
            ],
            [
                'label' => 'Общая площадь общежитий вуза',
                'key' => 'p8',
                'type' => 'number'
            ],
            [
                'label' => 'Общая площадь общежитий вуза, требующих капитального ремонта',
                'key' => 'p9',
                'type' => 'number'
            ],
            [
                'label' => 'Общая численность обучающихся, проживающих в общежитиях вуза',
                'key' => 'p12',
                'type' => 'number'
            ],
            [
                'label' => 'В том числе численность обучающихся за счет средств федерального бюджета',
                'key' => 'p13',
                'type' => 'number'
            ],
            [
                'label' => 'В том числе численность обучающихся по договорам об оказании платных образовательных услуг',
                'key' => 'p14',
                'type' => 'number'
            ],
            [
                'label' => 'Численность иных обучающихся',
                'key' => 'p15',
                'type' => 'number'
            ],
            [
                'label' => 'Общее количество общежитий вуза',
                'key' => 'p16',
                'type' => 'number'
            ],
            [
                'label' => 'Общее количество мест в общежитиях вуза',
                'key' => 'p17',
                'type' => 'number'
            ],
            [
                'label' => 'Дефицит мест в общежитиях вуза',
                'key' => 'p18',
                'type' => 'number'
            ],
            [
                'label' => 'Примечание',
                'key' => 'p11',
                'type' => 'text'
            ]
        ],
        [
            [
                'label' => 'Общая численность сотрудников',
                'key' => 'p2',
                'type' => 'number'
            ],
            [
                'label' => 'Категория научной организации',
                'key' => 'p19',
                'type' => 'number'
            ],
            [
                'label' => 'Сведения о долгосрочной программе развития организации',
                'key' => 'p20',
                'type' => 'text'
            ],
            [
                'label' => 'Общая площадь всех зданий и сооружений',
                'key' => 'p3',
                'type' => 'number'
            ],
            [
                'label' => 'Общая площадь всех зданий и сооружений, требующих капитального ремонта (на основании акта обследования или предписаний надзорных органов)',
                'key' => 'p4',
                'type' => 'number'
            ],
            [
                'label' => 'Общая площадь всех зданий и сооружений, находящихся в аварийном состоянии (на основании акта обследования или предписаний надзорных органов)',
                'key' => 'p5',
                'type' => 'number'
            ],
            [
                'label' => 'Общая площадь всех зданий и сооружений, находящихся в работоспособном состоянии (на основании акта обследования)',
                'key' => 'p6',
                'type' => 'number'
            ],
            [
                'label' => 'Общая площадь всех зданий и сооружений, находящихся в ограниченно-работоспособном состоянии (на основании акта обследования или предписаний надзорных органов)',
                'key' => 'p7',
                'type' => 'number'
            ],
            [
                'label' => 'Примечание',
                'key' => 'p11',
                'type' => 'text'
            ]
        ]
    ];

    public static array $types = [
        '-исследовательский центр',
        '-научный центр',
        '-сельскохозяйственная организация',
        '-организация здравоохранения',
        '-организация культуры',
        '-иное',
    ];

    public static array $categories = [
        '- без категории',
        '- 1 (научные организации – лидеры)',
        '- 2 (стабильные научные организации, демонстрирующие удовлетворительную результативность)',
        '- 3 (научные организации, утратившие научную деятельность в качестве основных видов деятельности и
         перспективы развития) '
    ];

    public function getTypeAttribute()
    {
        //эта хуйня была в старом капреме,
        // а здесь ее решили выпилить, но пусть будет, ведь мы же знаем этих мудаков)))
        // ps. не забудь поле в миграцию добавить и в список полей)))
        return self::$types[$this->p21] ?? self::$types[5];
    }

    public function getCategoryAttribute()
    {
        return self::$categories[$this->p19] ?? self::$categories[0];
    }

    public function organization(): belongsTo
    {
        return $this->belongsTo(Organization::class, 'org_id', 'id');
    }
}
