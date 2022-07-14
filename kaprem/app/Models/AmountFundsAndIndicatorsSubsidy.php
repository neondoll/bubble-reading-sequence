<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * App\Models\AmountFundsAndIndicatorsSubsidy
 *
 * @method static Builder|AmountFundsAndIndicatorsSubsidy newModelQuery()
 * @method static Builder|AmountFundsAndIndicatorsSubsidy newQuery()
 * @method static Builder|AmountFundsAndIndicatorsSubsidy query()
 * @method static Builder|AmountFundsAndIndicatorsSubsidy whereAmountFunds0201($value)
 * @method static Builder|AmountFundsAndIndicatorsSubsidy whereAmountFunds0208($value)
 * @method static Builder|AmountFundsAndIndicatorsSubsidy whereAmountFunds0210($value)
 * @method static Builder|AmountFundsAndIndicatorsSubsidy whereCreatedAt($value)
 * @method static Builder|AmountFundsAndIndicatorsSubsidy whereId($value)
 * @method static Builder|AmountFundsAndIndicatorsSubsidy whereIndicator0201($value)
 * @method static Builder|AmountFundsAndIndicatorsSubsidy whereIndicator0208($value)
 * @method static Builder|AmountFundsAndIndicatorsSubsidy whereIndicator0210($value)
 * @method static Builder|AmountFundsAndIndicatorsSubsidy whereOrganizationId($value)
 * @method static Builder|AmountFundsAndIndicatorsSubsidy whereUpdatedAt($value)
 * @mixin Eloquent
 * @property int $id
 * @property int $organization_id
 * @property float|null $amount_funds_0201
 * @property float|null $amount_funds_0208
 * @property float|null $amount_funds_0210
 * @property string|null $indicator_0201
 * @property string|null $indicator_0208
 * @property string|null $indicator_0210
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */
class AmountFundsAndIndicatorsSubsidy extends Model
{
    use HasFactory;

    /**
     * @var string[]
     */
    public $fillable = [
        'amount_funds_0201', 'amount_funds_0208', 'amount_funds_0210', 'indicator_0201', 'indicator_0208',
        'indicator_0210', 'organization_id'
    ];
}
