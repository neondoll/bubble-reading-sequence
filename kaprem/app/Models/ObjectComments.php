<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * App\Models\ObjectComments
 *
 * @property int $id
 * @property int $user_id
 * @property int $org_id
 * @property string $msg
 * @property string $file
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectComments newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectComments newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectComments query()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectComments whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectComments whereFile($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectComments whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectComments whereMsg($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectComments whereOrgId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectComments whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectComments whereUserId($value)
 * @mixin \Eloquent
 * @property int $obj_id
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectComments whereObjId($value)
 * @property-read \App\Models\User|null $user
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\CommentFile[] $files
 * @property-read int|null $files_count
 */
class ObjectComments extends Model
{
    use HasFactory;

    protected static function boot()
    {
        parent::boot();

        self::deleting(function ($comment) {
            $comment->files->each(function ($item) {
                $item->remove();
            });
        });
    }

    protected $fillable = [
        'id',
        'user_id',
        'obj_id',
        'msg',
        'file'
    ];

    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    protected function serializeDate(DateTimeInterface $date): string
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function files(): HasMany
    {
        return $this->hasMany(CommentFile::class, 'comment_id', 'id');
    }
}
