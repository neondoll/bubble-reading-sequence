<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDposTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dictionary_dpo_education_level', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->timestamps();
        });
        Schema::create('dpos', function (Blueprint $table) {
            $table->id();
            $table->text('education_program');
            $table->text('org');
            $table->integer('end_year');
            $table->integer('hours');
            $table->foreignId('category')->constrained('dictionary_dpo_education_level');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('dictionary_dpo_education_level');
        Schema::dropIfExists('dpos');
        Schema::enableForeignKeyConstraints();
    }
}
