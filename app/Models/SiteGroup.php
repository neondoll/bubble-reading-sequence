<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Models\SiteGroup
 *
 * @property int $id
 * @property string $title
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @method static \Illuminate\Database\Eloquent\Builder|SiteGroup newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SiteGroup newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SiteGroup query()
 * @method static \Illuminate\Database\Eloquent\Builder|SiteGroup whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SiteGroup whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SiteGroup whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SiteGroup whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SiteGroup whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class SiteGroup extends Model
{
    use HasFactory, SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = ['title'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function sites(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Site::class, 'join_site_groups_sites');
    }
}
