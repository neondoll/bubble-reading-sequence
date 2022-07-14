<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubsidyExpectedResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subsidy_expected_results', function (Blueprint $table) {
            $table->id();
            $table->foreignId('subsidy_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('goal');
            $table->string('indicator');
            $table->string('unit')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subsidy_expected_results');
    }
}
