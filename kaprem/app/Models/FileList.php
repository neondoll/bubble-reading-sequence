<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\FileList
 *
 * @property int $id
 * @property string $label
 * @property string $descriptor
 * @property int $type
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|FileList newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FileList newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FileList query()
 * @method static \Illuminate\Database\Eloquent\Builder|FileList whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FileList whereDescriptor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FileList whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FileList whereLabel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FileList whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FileList whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property int $required
 * @method static \Illuminate\Database\Eloquent\Builder|FileList whereRequired($value)
 */
class FileList extends Model
{
    use HasFactory;

    protected $fillable = [
        'label',
        'descriptor',
        'type',
        'required'
    ];

    public static function getFileListByOrganizationType(int $organizationType = 0)
    {
        return self::where('type', $organizationType)->get();
    }
}
