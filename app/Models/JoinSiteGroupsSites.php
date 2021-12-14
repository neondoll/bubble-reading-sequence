<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Support\Carbon;

/**
 * App\Models\JoinSiteGroupsSites
 *
 * @method static EloquentBuilder|JoinSiteGroupsSites newModelQuery()
 * @method static EloquentBuilder|JoinSiteGroupsSites newQuery()
 * @method static EloquentBuilder|JoinSiteGroupsSites query()
 * @method static EloquentBuilder|JoinSiteGroupsSites whereCreatedAt($value)
 * @method static EloquentBuilder|JoinSiteGroupsSites whereDeletedAt($value)
 * @method static EloquentBuilder|JoinSiteGroupsSites whereId($value)
 * @method static EloquentBuilder|JoinSiteGroupsSites whereSiteGroupId($value)
 * @method static EloquentBuilder|JoinSiteGroupsSites whereSiteId($value)
 * @method static EloquentBuilder|JoinSiteGroupsSites whereUpdatedAt($value)
 * @method static QueryBuilder|JoinSiteGroupsSites onlyTrashed()
 * @method static QueryBuilder|JoinSiteGroupsSites withTrashed()
 * @method static QueryBuilder|JoinSiteGroupsSites withoutTrashed()
 * @mixin Eloquent
 * @property int $id
 * @property int $site_group_id
 * @property int $site_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 */
class JoinSiteGroupsSites extends Model
{
    use HasFactory, SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = ['site_group_id', 'site_id'];

    protected $table = 'join_site_groups_sites';
}
