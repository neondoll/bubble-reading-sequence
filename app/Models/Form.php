<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Carbon;
use JetBrains\PhpStorm\ArrayShape;

/**
 * App\Models\Form
 *
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property string $lastName
 * @property string $middleName
 * @property int $sex
 * @property string $old_name
 * @property string $old_lastName
 * @property string $old_middleName
 * @property string $passport_number
 * @property string $passport_serial
 * @property string $passport_place
 * @property string $passport_date
 * @property string $citizenship
 * @property string $birthday
 * @property string $birthplace
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|Form newModelQuery()
 * @method static Builder|Form newQuery()
 * @method static Builder|Form query()
 * @method static Builder|Form whereBirthday($value)
 * @method static Builder|Form whereBirthplace($value)
 * @method static Builder|Form whereCitizenship($value)
 * @method static Builder|Form whereCreatedAt($value)
 * @method static Builder|Form whereId($value)
 * @method static Builder|Form whereLastName($value)
 * @method static Builder|Form whereMiddleName($value)
 * @method static Builder|Form whereName($value)
 * @method static Builder|Form whereOldLastName($value)
 * @method static Builder|Form whereOldMiddleName($value)
 * @method static Builder|Form whereOldName($value)
 * @method static Builder|Form wherePassportDate($value)
 * @method static Builder|Form wherePassportNumber($value)
 * @method static Builder|Form wherePassportPlace($value)
 * @method static Builder|Form wherePassportSerial($value)
 * @method static Builder|Form whereSex($value)
 * @method static Builder|Form whereUpdatedAt($value)
 * @method static Builder|Form whereUserId($value)
 * @mixin Eloquent
 * @property string|null $index
 * @property string|null $district
 * @property string|null $city
 * @property string|null $street
 * @property string|null $house
 * @property string|null $corpus
 * @property string|null $room
 * @property int|null $ready_to_move
 * @property string|null $email
 * @property string|null $phone
 * @property string|null $job_phone
 * @property string|null $social_network
 * @property int $region_id
 * @property int $fact_region_id
 * @method static \Database\Factories\FormFactory factory(...$parameters)
 * @method static Builder|Form whereCity($value)
 * @method static Builder|Form whereCorpus($value)
 * @method static Builder|Form whereDistrict($value)
 * @method static Builder|Form whereEmail($value)
 * @method static Builder|Form whereFactRegionId($value)
 * @method static Builder|Form whereHouse($value)
 * @method static Builder|Form whereIndex($value)
 * @method static Builder|Form whereJobPhone($value)
 * @method static Builder|Form wherePhone($value)
 * @method static Builder|Form whereReadyToMove($value)
 * @method static Builder|Form whereRegionId($value)
 * @method static Builder|Form whereRoom($value)
 * @method static Builder|Form whereSocialNetwork($value)
 * @method static Builder|Form whereStreet($value)
 * @property int|null $education_level
 * @property string|null $job_place
 * @property string|null $job_position
 * @property string|null $job_position_date
 * @property int|null $job_org_min
 * @property int|null $stage
 * @property int|null $stage_gos
 * @property int|null $stage_nauka
 * @property int|null $stage_comers
 * @property int|null $stage_no_comers
 * @property int|null $stage_rukovod
 * @property int|null $sphere_uprav_id
 * @property int|null $sphere_uprav_dop_id
 * @property int|null $max_count_people_id
 * @property int|null $degree_id
 * @property int|null $sphere_n_id
 * @property int|null $sphere_n_dop_id
 * @property string|null $shifr
 * @property int|null $otrasl
 * @property int|null $zvan
 * @property int|null $hirsh
 * @property int|null $scopus
 * @property int|null $web_of_science
 * @property int|null $inoe
 * @property-read Collection|CommonOrg[] $common_orgs
 * @property-read int|null $common_orgs_count
 * @property-read Collection|ComputerSkill[] $computer_skills
 * @property-read int|null $computer_skills_count
 * @property-read Collection|Dpo[] $dpos
 * @property-read int|null $dpos_count
 * @property-read Collection|Education[] $educations
 * @property-read int|null $educations_count
 * @property-read Collection|JobHistory[] $job_history
 * @property-read int|null $job_history_count
 * @property-read Collection|Language[] $languages
 * @property-read int|null $languages_count
 * @method static Builder|Form whereDegreeId($value)
 * @method static Builder|Form whereEducationLevel($value)
 * @method static Builder|Form whereHirsh($value)
 * @method static Builder|Form whereInoe($value)
 * @method static Builder|Form whereJobOrgMin($value)
 * @method static Builder|Form whereJobPlace($value)
 * @method static Builder|Form whereJobPosition($value)
 * @method static Builder|Form whereJobPositionDate($value)
 * @method static Builder|Form whereMaxCountPeopleId($value)
 * @method static Builder|Form whereOtrasl($value)
 * @method static Builder|Form whereScopus($value)
 * @method static Builder|Form whereShifr($value)
 * @method static Builder|Form whereSphereNDopId($value)
 * @method static Builder|Form whereSphereNId($value)
 * @method static Builder|Form whereSphereUpravDopId($value)
 * @method static Builder|Form whereSphereUpravId($value)
 * @method static Builder|Form whereStage($value)
 * @method static Builder|Form whereStageComers($value)
 * @method static Builder|Form whereStageGos($value)
 * @method static Builder|Form whereStageNauka($value)
 * @method static Builder|Form whereStageNoComers($value)
 * @method static Builder|Form whereStageRukovod($value)
 * @method static Builder|Form whereWebOfScience($value)
 * @method static Builder|Form whereZvan($value)
 * @property string|null $chin
 * @property string|null $ugolov
 * @property string|null $awards
 * @property string|null $comerc_uchast
 * @property string|null $opit_dey
 * @property string|null $kompetencii
 * @property string|null $achievements
 * @property-read Collection|GosTainy[] $gos_tainy
 * @property-read int|null $gos_tainy_count
 * @method static Builder|Form whereAchievements($value)
 * @method static Builder|Form whereAwards($value)
 * @method static Builder|Form whereChin($value)
 * @method static Builder|Form whereComercUchast($value)
 * @method static Builder|Form whereKompetencii($value)
 * @method static Builder|Form whereOpitDey($value)
 * @method static Builder|Form whereUgolov($value)
 * @property-read string $fio
 * @property-read string $old_fio
 * @property-read string $passport
 * @property-read Region $region
 * @property-read Region $region_fact
 * @property-read DictionaryEducationLevel $education
 */
class Form extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'user_id',
        'name',
        'lastName',
        'middleName',
        'sex',
        'old_name',
        'old_lastName',
        'old_middleName',
        'passport_number',
        'passport_serial',
        'passport_place',
        'passport_date',
        'citizenship',
        'birthday',
        'birthplace',
        'created_at',
        'updated_at',
        'index',
        'district',
        'city',
        'street',
        'house',
        'corpus',
        'room',
        'ready_to_move',
        'email',
        'phone',
        'job_phone',
        'social_network',
        'region_id',
        'fact_region_id',
        'education_level',
        'job_place',
        'job_position',
        'job_position_date',
        'job_org_min',
        'stage',
        'stage_gos',
        'stage_nauka',
        'stage_comers',
        'stage_no_comers',
        'stage_rukovod',
        'sphere_uprav_id',
        'sphere_uprav_dop_id',
        'max_count_people_id',
        'degree_id',
        'sphere_n_id',
        'sphere_n_dop_id',
        'shifr',
        'otrasl',
        'zvan',
        'hirsh',
        'scopus',
        'web_of_science',
        'inoe',
        'chin',
        'ugolov',
        'awards',
        'comerc_uchast',
        'opit_dey',
        'kompetencii',
        'achievements',
    ];

    protected $attributes = [
        'sex' => 1,
        'old_name' => null,
        'old_lastName' => null,
        'old_middleName' => null,
        'passport_number' => null,
        'passport_serial' => null,
        'passport_place' => null,
        'passport_date' => null,
        'citizenship' => null,
        'birthday' => null,
        'birthplace' => null,
        'created_at' => null,
        'updated_at' => null,
        'index' => null,
        'district' => null,
        'city' => null,
        'street' => null,
        'house' => null,
        'corpus' => null,
        'room' => null,
        'ready_to_move' => null,
        'email' => null,
        'phone' => null,
        'job_phone' => null,
        'social_network' => null,
        'region_id' => null,
        'fact_region_id' => null,
        'education_level' => null,
        'job_place' => null,
        'job_position' => null,
        'job_position_date' => null,
        'job_org_min' => null,
        'stage' => null,
        'stage_gos' => null,
        'stage_nauka' => null,
        'stage_comers' => null,
        'stage_no_comers' => null,
        'stage_rukovod' => null,
        'sphere_uprav_id' => null,
        'sphere_uprav_dop_id' => null,
        'max_count_people_id' => null,
        'degree_id' => null,
        'sphere_n_id' => null,
        'sphere_n_dop_id' => null,
        'shifr' => null,
        'otrasl' => null,
        'zvan' => null,
        'hirsh' => null,
        'scopus' => null,
        'web_of_science' => null,
        'inoe' => null,
        'chin' => null,
        'ugolov' => null,
        'awards' => null,
        'comerc_uchast' => null,
        'opit_dey' => null,
        'kompetencii' => null,
        'achievements' => null
    ];

    public static function getSexValue($sex): string
    {
        $s = [
            'Мужской',
            'Женский'
        ];
        return $s[$sex] ?? '-';
    }

    public function getGeneratedAttributes(): array
    {
        return [
            'fio' => $this->fio,
            'old_fio' => $this->old_fio,
            'passport' => $this->passport,
            'region' => $this->region->name,
            'region_fact' => $this->region_fact->name,
            'education' => $this->education->level,
            'job_org' => $this->job_org_min == 1 ? 'Да' : 'Нет',
            'sphere_uprav' => $this->sphere_uprav->value,
            'sphere_uprav_dop' => $this->sphere_uprav_dop->value,
            'max_count_people' => $this->max_count_people->value,
            'degree' => $this->degree->value,
            'sphere_n' => $this->sphere_n->value,
            'sphere_n_dop' => $this->sphere_n_dop->value,
            'otrasl_val' => $this->otrasl_val->value,
            'zvan_val' => $this->zvan_val->value,
        ];
    }

    public function sphere_uprav(): HasOne
    {
        return $this->hasOne(DictionaryFormSpher::class, 'id', 'sphere_uprav_id');
    }

    public function otrasl_val(): HasOne
    {
        return $this->hasOne(DictionaryFormSpher::class, 'id', 'otrasl');
    }

    public function zvan_val(): HasOne
    {
        return $this->hasOne(DictionaryUchZvan::class, 'id', 'zvan');
    }

    public function degree(): HasOne
    {
        return $this->hasOne(DictionaryDegree::class, 'id', 'degree_id');
    }

    public function sphere_n(): HasOne
    {
        return $this->hasOne(DictionarySphereScience::class, 'id', 'sphere_n_id');
    }

    public function sphere_n_dop(): HasOne
    {
        return $this->hasOne(DictionarySphereScience::class, 'id', 'sphere_n_dop_id');
    }

    public function max_count_people(): HasOne
    {
        return $this->hasOne(DictionaryFormPeople::class, 'id', 'max_count_people_id');
    }

    public function sphere_uprav_dop(): HasOne
    {
        return $this->hasOne(DictionaryFormSpher::class, 'id', 'sphere_uprav_dop_id');
    }

    public function getFioAttribute(): string
    {
        return "$this->lastName $this->name $this->middleName";
    }

    public function education(): HasOne
    {
        return $this->hasOne(DictionaryEducationLevel::class, 'id', 'education_level');
    }

    public function getPassportAttribute(): string
    {
        return "$this->passport_number $this->passport_serial $this->passport_place $this->passport_date";
    }

    public function getOld_fioAttribute(): string
    {
        return "$this->old_lastName $this->old_name $this->old_middleName";
    }

    public function languages(): HasMany
    {
        return $this->hasMany(Language::class);
    }

    public function computer_skills(): HasMany
    {
        return $this->hasMany(ComputerSkill::class);
    }

    public function educations(): HasMany
    {
        return $this->hasMany(Education::class);
    }

    public function dpos(): HasMany
    {
        return $this->hasMany(Dpo::class);
    }

    public function common_orgs(): HasMany
    {
        return $this->hasMany(CommonOrg::class);
    }

    public function job_history(): HasMany
    {
        return $this->hasMany(JobHistory::class);
    }

    public function gos_tainy(): HasMany
    {
        return $this->hasMany(GosTainy::class);
    }

    public function region(): HasOne
    {
        return $this->hasOne(Region::class, 'id', 'region_id');
    }

    public function region_fact(): HasOne
    {
        return $this->hasOne(Region::class, 'id', 'fact_region_id');
    }

}
