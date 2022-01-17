<?php

namespace App\Models;

use App\Models\traits\FindTrashed;
use Eloquent;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Support\Carbon;

/**
 * App\Models\Site
 *
 * @method static QueryBuilder|Site onlyTrashed()
 * @method static EloquentBuilder|Site newModelQuery()
 * @method static EloquentBuilder|Site newQuery()
 * @method static EloquentBuilder|Site query()
 * @method static updateOrCreate(array $attributes, array $values)
 * @method static EloquentBuilder|Site whereCreatedAt($value)
 * @method static EloquentBuilder|Site whereDeletedAt($value)
 * @method static EloquentBuilder|Site whereHref($value)
 * @method static EloquentBuilder|Site whereHrefInProject($value)
 * @method static EloquentBuilder|Site whereIcon($value)
 * @method static EloquentBuilder|Site whereId($value)
 * @method static EloquentBuilder|Site whereNeedToken($value)
 * @method static EloquentBuilder|Site whereSiteId($value)
 * @method static EloquentBuilder|Site whereText($value)
 * @method static EloquentBuilder|Site whereTitle($value)
 * @method static EloquentBuilder|Site whereUpdatedAt($value)
 * @method static QueryBuilder|Site withTrashed()
 * @method static QueryBuilder|Site withoutTrashed()
 * @mixin Eloquent
 * @property Carbon|null $created_at
 * @property string|null $deleted_at
 * @property string $href
 * @property int $href_in_project
 * @property string $icon
 * @property int $id
 * @property int $need_token
 * @property int|null $site_id
 * @property string $text
 * @property string $title
 * @property Carbon|null $updated_at
 * @property-read Collection|SiteGroup[] $site_groups
 * @property-read int|null $site_groups_count
 */
class Site extends Model
{
    use HasFactory, SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = ['icon', 'href', 'href_in_project', 'need_token', 'site_id', 'text', 'title'];

    /**
     * @return BelongsToMany
     */
    public function site_groups(): BelongsToMany
    {
        return $this->belongsToMany(SiteGroup::class, 'join_site_groups_sites');
    }
}
