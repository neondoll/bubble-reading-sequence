<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * App\Models\Contact
 *
 * @property int $id
 * @property string $last_name
 * @property string $name
 * @property string $middle_name
 * @property string $position
 * @property string $role
 * @property string $phone
 * @property string $email
 * @property int $org_id
 * @property int $program_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Contact newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Contact newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Contact query()
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereMiddleName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereOrgId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereProgramId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read string $fio
 * @property-read \App\Models\DictionaryPosition|null $roleData
 * @property-read string $role_label
 */
class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'last_name',
        'name',
        'middle_name',
        'position',
        'role',
        'phone',
        'email',
        'org_id',
        'program_id'
    ];

    public function getAllAttributes(): array
    {
        $columns = $this->getFillable();
        // Another option is to get all columns for the table like so:
        // $columns = \Schema::getColumnListing($this->table);
        // but it's safer to just get the fillable fields

        $attributes = $this->getAttributes();

        foreach ($columns as $column) {
            if (!array_key_exists($column, $attributes)) {
                $attributes[$column] = null;
            }
        }
        return $attributes;
    }

    protected $appends = [
        'fio',
        'role_label'
    ];

    public function getFioAttribute(): string
    {
        return "$this->last_name $this->name $this->middle_name";
    }
    public function setFioAttribute($value)
    {
        $fio = explode(' ', $value);
        $this->attributes['last_name'] = $fio[0] ?? '-';
        $this->attributes['name'] = $fio[1] ?? '-';
        $this->attributes['middle_name'] = $fio[2] ?? '-';
    }

    public function getRoleLabelAttribute(): string
    {
        return $this->roleData?->value ?? '-';
    }

    public function roleData(): HasOne
    {
        return $this->hasOne(DictionaryPosition::class, 'id', 'role');
    }
}
