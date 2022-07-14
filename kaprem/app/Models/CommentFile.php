<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\Storage;

/**
 * App\Models\CommentFile
 *
 * @property int $id
 * @property int $comment_id
 * @property string $server_name
 * @property string $name
 * @property int $size
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|CommentFile newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CommentFile newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CommentFile query()
 * @method static \Illuminate\Database\Eloquent\Builder|CommentFile whereCommentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CommentFile whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CommentFile whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CommentFile whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CommentFile whereServerName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CommentFile whereSize($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CommentFile whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read \App\Models\ObjectComments|null $comment
 */
class CommentFile extends Model
{
    use HasFactory;

    public function remove()
    {
        Storage::delete("public/object/{$this->comment->obj_id}/comments/{$this->server_name}");
    }

    public static function removeFile($file)
    {
        $file->remove();
    }

    protected $fillable = [
        'server_name',
        'name',
        'size'
    ];

    public function comment(): HasOne
    {
        return $this->hasOne(ObjectComments::class, 'id', 'comment_id');
    }
}
