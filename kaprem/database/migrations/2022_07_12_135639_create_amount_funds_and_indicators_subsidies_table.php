<?php

use App\Models\AmountFundsAndIndicatorsSubsidy;
use App\Models\Program;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAmountFundsAndIndicatorsSubsidiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('amount_funds_and_indicators_subsidies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('organization_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->float('amount_funds_0201', 8, 3)->nullable();
            $table->float('amount_funds_0208', 8, 3)->nullable();
            $table->float('amount_funds_0210', 8, 3)->nullable();
            $table->string('indicator_0201')->nullable();
            $table->string('indicator_0208')->nullable();
            $table->string('indicator_0210')->nullable();
            $table->timestamps();
        });
        foreach (Program::get() as $program) {
            $afis = AmountFundsAndIndicatorsSubsidy::updateOrCreate(['organization_id' => $program->org_id], [
                'amount_funds_0201' => $program->p0201,
                'amount_funds_0210' => $program->p0210,
                'indicator_0210' => $program->psd
            ]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('amount_funds_and_indicators_subsidies');
    }
}
