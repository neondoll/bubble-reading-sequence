<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Models\JoinSiteGroupsSites
 *
 * @property int $id
 * @property int $site_group_id
 * @property int $site_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @method static \Illuminate\Database\Eloquent\Builder|JoinSiteGroupsSites newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|JoinSiteGroupsSites newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|JoinSiteGroupsSites query()
 * @method static \Illuminate\Database\Eloquent\Builder|JoinSiteGroupsSites whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JoinSiteGroupsSites whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JoinSiteGroupsSites whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JoinSiteGroupsSites whereSiteGroupId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JoinSiteGroupsSites whereSiteId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JoinSiteGroupsSites whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class JoinSiteGroupsSites extends Model
{
    use HasFactory, SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = ['site_group_id', 'site_id'];

    protected $table = 'join_site_groups_sites';
}
