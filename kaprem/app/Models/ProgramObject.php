<?php

namespace App\Models;

use App\Helpers\Interfaces\ObjectModelInterface;
use App\Http\Requests\ObjFileRequest;
use Database\Factories\ObjectFactory;
use DB;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

/**
 * App\Models\ProgramObject
 *
 * @property int $id
 * @property int $program_id
 * @property int $org_id
 * @property int|null $real_estate_id
 * @property string $name
 * @property string|null $name_dbi
 * @property string $short_description
 * @property string $address
 * @property string|null $address_dbi
 * @property int $type_remont
 * @property int $type
 * @property int|null $priority
 * @property int $region_id
 * @property string|null $city
 * @property string|null $cadastral_number
 * @property int|null $build_year
 * @property int|null $exploy_year
 * @property int|null $kaprem_year
 * @property string|null $nadzor_orgs
 * @property int|null $wear
 * @property string|null $osnovanie
 * @property string|null $pravo_oper
 * @property string|null $naznach
 * @property string|null $pravo
 * @property string|null $square
 * @property string|null $kaprem_square
 * @property string|null $square_ustav
 * @property string|null $square_ne_ustav
 * @property string|null $arenda
 * @property string|null $primechanie
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|ProgramObject newModelQuery()
 * @method static Builder|ProgramObject newQuery()
 * @method static Builder|ProgramObject query()
 * @method static Builder|ProgramObject whereAddress($value)
 * @method static Builder|ProgramObject whereAddressDbi($value)
 * @method static Builder|ProgramObject whereArenda($value)
 * @method static Builder|ProgramObject whereBuildYear($value)
 * @method static Builder|ProgramObject whereCadastralNumber($value)
 * @method static Builder|ProgramObject whereCity($value)
 * @method static Builder|ProgramObject whereCreatedAt($value)
 * @method static Builder|ProgramObject whereExployYear($value)
 * @method static Builder|ProgramObject whereId($value)
 * @method static Builder|ProgramObject whereKapremSquare($value)
 * @method static Builder|ProgramObject whereKapremYear($value)
 * @method static Builder|ProgramObject whereNadzorOrgs($value)
 * @method static Builder|ProgramObject whereName($value)
 * @method static Builder|ProgramObject whereNameDbi($value)
 * @method static Builder|ProgramObject whereNaznach($value)
 * @method static Builder|ProgramObject whereOrgId($value)
 * @method static Builder|ProgramObject whereOsnovanie($value)
 * @method static Builder|ProgramObject wherePravo($value)
 * @method static Builder|ProgramObject wherePravoOper($value)
 * @method static Builder|ProgramObject wherePrimechanie($value)
 * @method static Builder|ProgramObject wherePriority($value)
 * @method static Builder|ProgramObject whereProgramId($value)
 * @method static Builder|ProgramObject whereRealEstateId($value)
 * @method static Builder|ProgramObject whereRegionId($value)
 * @method static Builder|ProgramObject whereShortDescription($value)
 * @method static Builder|ProgramObject whereSquare($value)
 * @method static Builder|ProgramObject whereSquareNeUstav($value)
 * @method static Builder|ProgramObject whereSquareUstav($value)
 * @method static Builder|ProgramObject whereType($value)
 * @method static Builder|ProgramObject whereTypeRemont($value)
 * @method static Builder|ProgramObject whereUpdatedAt($value)
 * @method static Builder|ProgramObject whereWear($value)
 * @mixin Eloquent
 * @property Carbon|null $deleted_at
 * @method static \Illuminate\Database\Query\Builder|ProgramObject onlyTrashed()
 * @method static Builder|ProgramObject whereDeletedAt($value)
 * @method static \Illuminate\Database\Query\Builder|ProgramObject withTrashed()
 * @method static \Illuminate\Database\Query\Builder|ProgramObject withoutTrashed()
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ObjectEvent[] $events
 * @property-read int|null $events_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ObjectActivity[] $activities
 * @property-read int|null $activities_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ObjectWaited[] $waited
 * @property-read int|null $waited_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ObjectFile[] $files
 * @property-read int|null $files_count
 * @property-read \App\Models\ObjectStatus|null $status
 * @property int|null $status_id
 * @method static Builder|ProgramObject whereStatusId($value)
 * @property-read mixed $co_finance
 * @property-read mixed $finance_sum
 * @property-read mixed $remont_label
 * @property-read mixed $type_label
 * @property-read mixed $wear_label
 * @property-read \App\Models\Region|null $region
 * @property-read mixed $activities_type0
 * @property-read mixed $activities_type1
 * @property string|null $naznach2
 * @method static Builder|ProgramObject whereNaznach2($value)
 * @property-read \App\Models\DepStatus|null $dep_status
 * @property-read \App\Models\ObjStatus|null $mgsu_status
 * @property-read float|null $kap_rem_square
 * @property-read \App\Models\Organization $org
 * @property-read \App\Models\Program|null $program
 * @method static \Database\Factories\ObjectFactory factory(...$parameters)
 */
class ProgramObject extends Model implements ObjectModelInterface
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'objects';

    protected $fillable = [
        'program_id',
        'org_id',
        'real_estate_id',
        'name',
        'name_dbi',
        'address',
        'address_dbi',
        'type',
        'region_id',
        'city',
        'cadastral_number',
        'build_year',
        'exploy_year',
        'kaprem_year',
        'nadzor_orgs',
        'wear',             //Износ здания
        'osnovanie',        //Основание для использования здания
        'pravo_oper',
        'naznach',
        'naznach2',
        'pravo',
        'square',
        'kaprem_square',
        'square_ustav',
        'square_ne_ustav',
        'arenda',
        'primechanie'
    ];

    protected $casts  = [
        'program_id' => 'integer',
        'org_id' => 'integer',
        'real_estate_id' => 'integer',
        'wear' => 'integer',
        'region_id' => 'integer',
        'type' => 'integer',
        'square' => 'float',
        'kaprem_square' => 'float',
        'square_ustav' => 'float',
        'square_ne_ustav' => 'float',
        'arenda' => 'float',
    ];

    protected static function newFactory()
    {
        return ObjectFactory::new();
    }

    public static array $wears = [
        'От 0 до 10%',
        'От 11% до 20%',
        'От 21% до 30%',
        'От 31% до 40%',
        'От 41% до 60%',
        'От 61% до 75%',
        '75% и выше',
    ];

    public static array $remont = [
        'Комплексный',
        'Выборочный'
    ];

    public static array $types = [
        'Приоритетный',
        'Резервный'
    ];

    public static function getDepStatusClass(): string
    {
        return DepStatus::class;
    }

    public static function getMgsuStatusClass(): string
    {
        return ObjStatus::class;
    }

    public function attachDefaultStatusWhenCreated()
    {
        return $this->status()->create();
    }

    public function getObjectActivitiesWithLabels()
    {
        $activities223aLabels = ObjectActivity::LABELS[0];
        $activities223bLabels = ObjectActivity::LABELS[1];

        $activities223a = array_values($this->activities->where('type', 0)->toArray());
        $activities223b = array_values($this->activities->where('type', 1)->toArray());

        $tableA = [];
        $tableB = [];

        foreach ($activities223aLabels as $index => $label) {
            $tableA[] = [
                'label' => $label,
                'availability' => count($activities223a) ? ($activities223a[$index]['p01'] === 1 ? 'Да' : 'Нет') : 'Нет',
                'material' => count($activities223a) ? ($activities223a[$index]['p02'] ?? '-') : '-',
                'term' => count($activities223a) ? ($activities223a[$index]['p03'] ?? '-') : '-',
                'require_repair' => count($activities223a) ? ($activities223a[$index]['p04'] === 1 ? 'Да' : 'Нет') : 'Нет',
                'rationale' => count($activities223a) ? ($activities223a[$index]['p05'] ?? '-') : '-',
            ];
        }

        foreach ($activities223bLabels as $index => $label) {
            $tableB[] = [
                'label' => $label,
                'availability' => count($activities223b) ? ($activities223b[$index]['p01'] === 1 ? 'Да' : 'Нет') : 'Нет',
                'material' => count($activities223b) ? ($activities223b[$index]['p02'] ?? '-') : '-',
                'term' => count($activities223b) ? ($activities223b[$index]['p03'] ?? '-') : '-',
                'require_repair' => count($activities223b) ? ($activities223b[$index]['p04'] === 1 ? 'Да' : 'Нет') : 'Нет',
                'rationale' => count($activities223b) ? ($activities223b[$index]['p05'] ?? '-') : '-',
            ];
        }

        return [
            'table223a' => $tableA,
            'table223b' => $tableB
        ];
    }

    public function getTypeOfRepair(): array
    {
        $event = $this->events?->where('stage', 1)->first();
        return [
            'type' => $event?->type?->label,
            'description' => $event->p07 ?? '-'
        ];
    }

    public function getEventStages(): array
    {
        $stages = ObjectEvent::STAGES;
        $stagesData = [];

        foreach ($stages as $stage) {
            $event = $this->events?->where('stage', $stage['stageNum'])?->first();
            $stagesData[] = array_merge($stage, [
                'necessity' => $event?->type?->toArray() ?? ['label' => '-'],
                'date_start' => $event->p02 ?? '-',
                'date_end' => $event->p03 ?? '-',
                'implementation_cost' => $event->p04 ?? '-',
                'budgetary' => $event->p05 ?? '-',
                'not_budgetary' => $event->p06 ?? '-',
            ]);
        }

        return $stagesData;
    }

    public function getTypeLabelAttribute()
    {
        return self::$types[$this->type] ?? '-';
    }

    public function getWearLabelAttribute()
    {
        return self::$wears[$this->wear] ?? '-';
    }

    public function getRemontLabelAttribute()
    {
        return self::$remont[$this->type_remont] ?? '-';
    }

    //TODO: переаисать на sql 
    public function getFinanceSumAttribute()
    {
        return $this->events->reduce(function ($a, $item) {
            return $a + $item->p05;
        }, 0);
    }

    //TODO: переаисать на sql 
    public function getCoFinanceAttribute()
    {
        return $this->events->reduce(function ($a, $item) {
            return $a + $item->p06;
        }, 0);
    }

    public static function setStatusData($id, $data)
    {
        if(array_key_exists('mgsu_status_id', $data) && $data['mgsu_status_id'] == 4) {
            $data['is_approved_by_user'] = false;
            $data['to_realization'] = false;
        }

        $data['object_id'] = $id;
        ObjectStatus::updateOrCreate(['object_id' => $id], $data);
    }

    public function status(): HasOne
    {
        return $this->hasOne(ObjectStatus::class, 'object_id', 'id');
    }

    public function upload(ObjFileRequest $request)
    {
        $list = json_decode($request->post('list_data'), true);
        $file = $request->file('file');

        $path = "public/object/{$this->id}/files";

        if ($file and $file->store($path)) {
            $this->files()->save(
                new ObjectFile(
                    [
                        'list_id' => $list['id'],
                        'obj_id' => $this->id,
                        'server_name' => $file->hashName(),
                        'name' => $file->getClientOriginalName()
                    ]
                )
            );
            return true;
        }
        return false;
    }

    public function region()
    {
        return $this->hasOne(Region::class, 'id', 'region_id');
    }

    public function events(): HasMany
    {
        return $this->hasMany(ObjectEvent::class, 'obj_id', 'id')->whereNull('parent');
    }

    public function activities(): HasMany
    {
        return $this->hasMany(ObjectActivity::class, 'obj_id', 'id');
    }

    public function getActivitiesType0Attribute(): array|\Illuminate\Database\Eloquent\Collection
    {
        return $this->activities->filter(fn ($item) => $item->type == 0);
    }

    public function getActivitiesType1Attribute(): array|\Illuminate\Database\Eloquent\Collection
    {
        return $this->activities->filter(fn ($item) => $item->type == 1);
    }

    public function waited(): HasMany
    {
        return $this->hasMany(ObjectWaited::class, 'obj_id', 'id');
    }

    public function getKapRemSquareAttribute(): ?float
    {
        return (float) ObjectWaited::where(['obj_id' => $this->id, 'element' => 0])->first()?->plan;
    }

    public function files(): HasMany
    {
        return $this->hasMany(ObjectFile::class, 'obj_id', 'id');
    }

    public function getDepStatusAttribute(): ?DepStatus
    {
        return $this->status?->dep_status;
    }

    public function getMgsuStatusAttribute(): ?ObjStatus
    {
        return $this->status?->mgsu_status;
    }

    public function org(): BelongsTo
    {
        return $this->belongsTo(Organization::class, 'org_id', 'id');
    }

    public function getBuildedFileList()
    {
        $objectId = $this->id;

        // Это почему-то не работает в продакшене, ругается на group by 
        // Выяснить почему!!!
        // $data = DB::select( DB::raw(
        //     "
        //     select
        //         json_object(
        //             'id', fl.id,
        //             'label', fl.label,
        //             'descriptor', fl.descriptor,
        //             'files', if(count(obf.id) = 0, json_array(),
        //                         json_arrayagg(json_object(
        //                                 'id', obf.id,
        //                                 'list_id', obf.list_id,
        //                                 'server_name', obf.server_name,
        //                                 'name', obf.name
        //                             )
        //                         ))
        //         ) as field
        //     from file_lists fl
        //     left join object_files obf on fl.id = obf.list_id and obf.obj_id = '$objectId'
        //     where type = 0 group by fl.id;
        //     "
        // ));

        $fileList = FileList::selectRaw('id, label, descriptor')->where('type', 0)->get()->toArray();

        $data = [];
        foreach($fileList as $fileListItem) {
            $files = ObjectFile::selectRaw('id, list_id, server_name, name')->where(['list_id' => $fileListItem['id'], 'obj_id' => $objectId])->get();
            $data [] = array_merge(
                $fileListItem,
                ['files' => $files->toArray()]
            );
        }

        return $data;


    
        // return collect($data)->map(fn($el) => json_decode($el->field, true))?->toArray();
    }

    public function getBuildedActionPlanFileList()
    {
        $fileListDb = ActionFileList::get();

        $fileList = [];

        foreach($fileListDb as $fileListItem) {
            $fileList [] = array_merge(
                $fileListItem->toArray(),
                ['files' => ActionPlanFile::where(['obj_id' => $this->id, 'stage_id' => $fileListItem['id']])->get()->toArray()]
            ); 
        }

        return collect($fileList)->groupBy('stage_name')->toArray();
    }

    public function program(): HasOne
    {
        return $this->hasOne(Program::class, 'id', 'program_id');
    }
}
