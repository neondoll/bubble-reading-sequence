<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubsidyNeedJustificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('building_constructions', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->timestamps();
            $table->softDeletes();
        });
        Schema::create('subsidy_need_justifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('subsidy_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('building_construction_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('material');
            $table->string('srok_eks');
            $table->tinyInteger('is_kap_remont');
            $table->string('obosnovanie')->nullable();
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
        Schema::dropIfExists('subsidy_need_justifications');
        Schema::dropIfExists('building_constructions');
    }
}
