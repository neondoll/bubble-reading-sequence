<?php

namespace App\Models;

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
 * App\Models\SiteGroup
 *
 * @method static QueryBuilder|SiteGroup onlyTrashed()
 * @method static EloquentBuilder|SiteGroup newModelQuery()
 * @method static EloquentBuilder|SiteGroup newQuery()
 * @method static EloquentBuilder|SiteGroup query()
 * @method static updateOrCreate(array $array, array $array1)
 * @method static EloquentBuilder|SiteGroup whereCreatedAt($value)
 * @method static EloquentBuilder|SiteGroup whereDeletedAt($value)
 * @method static EloquentBuilder|SiteGroup whereId($value)
 * @method static EloquentBuilder|SiteGroup whereStatisticsPage($value)
 * @method static EloquentBuilder|SiteGroup whereTitle($value)
 * @method static EloquentBuilder|SiteGroup whereUpdatedAt($value)
 * @method static QueryBuilder|SiteGroup withTrashed()
 * @method static QueryBuilder|SiteGroup withoutTrashed()
 * @mixin Eloquent
 * @property Carbon|null $created_at
 * @property string|null $deleted_at
 * @property int $id
 * @property string|null $statistics_page
 * @property string $title
 * @property Carbon|null $updated_at
 * @property-read Collection|Site[] $sites
 * @property-read int|null $sites_count
 */
class SiteGroup extends Model
{
    use HasFactory, SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = ['statistics_page', 'title'];

    /**
     * @return BelongsToMany
     */
    public function sites(): BelongsToMany
    {
        return $this->belongsToMany(Site::class, 'join_site_groups_sites');
    }
}
