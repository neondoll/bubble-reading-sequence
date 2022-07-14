<?php

namespace App\Models;

use App\Http\Requests\ObjEventRequest;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Http\UploadedFile;

/**
 * App\Models\ObjectEvent
 *
 * @property int $id
 * @property int $obj_id
 * @property int $stage
 * @property int $p01 Необходимость выполнения
 * @property string $p02 Дата начала
 * @property string $p03 Дата окончания
 * @property string $p04 Стоимость реализации (тыс.руб)
 * @property string $p05 Сумма бюджетного финансирования на проведение кап.ремонта (тыс.руб)
 * @property string $p06 Софинансирование из внебюджетных источников (тыс.руб)
 * @property int $end_stage Отметка о завершении этапа
 * @property string $comment Комментарий
 * @property int $exp_mon Эксперт МОН +/-
 * @property string $comment_mon Комментарий мон
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent query()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereComment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereCommentMon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereEndStage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereExpMon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereObjId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereP01($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereP02($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereP03($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereP04($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereP05($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereP06($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereStage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ObjectEventReal[] $events
 * @property-read int|null $events_count
 * @property int|null $parent
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereParent($value)
 * @property-read \App\Models\ObjectEventFile|null $file
 * @property int|null $type_id
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereTypeId($value)
 * @property string|null $p07
 * @property-read \App\Models\ObjectEventsType|null $type
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereP07($value)
 * @property array|null $references
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEvent whereReferences($value)
 */
class ObjectEvent extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'obj_id',
        'parent',
        'stage',
        'p01',
        'p02',
        'p03',
        'p04',
        'p05',
        'p06',
        'p07',
        'type_id',
        'end_stage',
        'comment',
        'exp_mon',
        'comment_mon',
        'references'
    ];

    protected $casts = ['references' => 'array'];

    // protected $dates = ['p02', 'p03'];

    const STAGES = [
        [
            'label' => 'Выполнение обследования, подготовка и утверждение дефектного акта (дефектной ведомости)',
            'stageNum' => 2,
        ],
        [
            'label' => 'Утверждение задания на проектирование, Подготовка проектно-сметной документации',
            'stageNum' => 3
        ],
        [
            'label' => 'Прохождение государственной экспертизы проектно-сметной документации',
            'stageNum' => 4
        ],
        [
            'label' => 'Выполнение строительно-монтажных работ',
            'stageNum' => 5
        ]
    ];

    public function file(): HasOne
    {
        return $this->hasOne(ObjectEventFile::class, 'event_id', 'id');
    }

    public function type(): HasOne
    {
        return $this->hasOne(ObjectEventsType::class, 'id', 'type_id');
    }

    public function setFile(ObjEventRequest $request)
    {
        if ($uploadedFile = $request->file('file')) {
            $obj_id = $request->query('obj_id');
            $server_name = $uploadedFile->hashName();

            if ($uploadedFile->store("public/object/$obj_id/events/$this->id")) {
                ObjectEventFile::create([
                    'event_id' => $this->id,
                    'server_name' => $server_name,
                    'name' => $uploadedFile->getClientOriginalName(),
                    'label' => $request->post('label')
                ]);
                return true;
            }
            throw new \Exception('Файл не был загружен');
        }
        return true;
    }

    public function events(): HasMany
    {
        return $this->hasMany(self::class, 'parent', 'id');
    }
}
