<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ActionPlanFile
 *
 * @property int $id
 * @property int $obj_id ID объекта
 * @property int $stage_id ID этапа (ссылается на kaprem.object_events.stage)
 * @property string $file_list_name название документа из App/Models/ActionPlanFile::FileList
 * @property string $file_name фактическое название файла
 * @property string $server_name сгенерированное название файла в файловой системе
 * @property bool $approved_by_expert поле принято экспертом
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ActionPlanFile newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ActionPlanFile newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ActionPlanFile query()
 * @method static \Illuminate\Database\Eloquent\Builder|ActionPlanFile whereApprovedByExpert($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ActionPlanFile whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ActionPlanFile whereFileListName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ActionPlanFile whereFileName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ActionPlanFile whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ActionPlanFile whereObjId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ActionPlanFile whereServerName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ActionPlanFile whereStageId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ActionPlanFile whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ActionPlanFile extends Model
{
    use HasFactory;

    protected $table = 'action_plan_files';

    protected $fillable = [
        'obj_id',
        'stage_id',
        'file_list_name',
        'file_name',
        'server_name',
        'approved_by_expert'
    ];

    protected $casts = ['approved_by_expert' => 'boolean'];
}
