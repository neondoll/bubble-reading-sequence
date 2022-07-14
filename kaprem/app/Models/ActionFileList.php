<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ActionFileList
 *
 * @property int $id
 * @property string $stage_name
 * @property int $stage_number
 * @property string $label
 * @method static \Illuminate\Database\Eloquent\Builder|ActionFileList newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ActionFileList newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ActionFileList query()
 * @method static \Illuminate\Database\Eloquent\Builder|ActionFileList whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ActionFileList whereLabel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ActionFileList whereStageName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ActionFileList whereStageNumber($value)
 * @mixin \Eloquent
 */
class ActionFileList extends Model
{
    use HasFactory;

    protected $table = 'action_plan_file_labels';
}
