<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Foundation\Auth\User as AuthUser;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Notifications\DatabaseNotificationCollection;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Sanctum\PersonalAccessToken;

/**
 * App\Models\User
 *
 * @method static EloquentBuilder|User newModelQuery()
 * @method static EloquentBuilder|User newQuery()
 * @method static EloquentBuilder|User query()
 * @method static EloquentBuilder|User whereAuthKey($value)
 * @method static EloquentBuilder|User whereCreatedAt($value)
 * @method static EloquentBuilder|User whereDeletedAt($value)
 * @method static EloquentBuilder|User whereEmail($value)
 * @method static EloquentBuilder|User whereEmailVerifiedAt($value)
 * @method static EloquentBuilder|User whereId($value)
 * @method static EloquentBuilder|User whereLastName($value)
 * @method static EloquentBuilder|User whereMiddleName($value)
 * @method static EloquentBuilder|User whereName($value)
 * @method static EloquentBuilder|User wherePassword($value)
 * @method static EloquentBuilder|User whereRememberToken($value)
 * @method static EloquentBuilder|User whereUpdatedAt($value)
 * @method static QueryBuilder|User onlyTrashed()
 * @method static QueryBuilder|User withTrashed()
 * @method static QueryBuilder|User withoutTrashed()
 * @method static UserFactory factory(...$parameters)
 * @mixin Eloquent
 * @property int $id
 * @property string $name
 * @property string $lastName
 * @property string $middleName
 * @property string $email
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property string $auth_key
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 * @property-read DatabaseNotificationCollection|DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read Collection|PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 */
class User extends AuthUser
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    protected $attributes = ['lastName' => '', 'middleName' => '', 'name' => ''];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = ['email_verified_at' => 'datetime'];

    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = ['auth_key', 'email', 'lastName', 'middleName', 'name', 'password'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];
}
