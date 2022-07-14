<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubsidyStagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('subsidy_stages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('subsidy_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('name');
            $table->tinyInteger('is_nessesary');
            $table->date('begin_date')->nullable();
            $table->date('final_date')->nullable();
            $table->float('realization_cost', 8, 3)->nullable();
            $table->float('kap_coast', 8, 3)->nullable();
            $table->float('finansee', 8, 3)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('subsidy_stages');
    }
}
