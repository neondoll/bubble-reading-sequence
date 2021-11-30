<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDictionaryFormSpherTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dictionary_form_people', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->timestamps();
        });
        Schema::create('dictionary_form_spher', function (Blueprint $table) {
            $table->id();
            $table->string('value');
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
        Schema::dropIfExists('dictionary_form_spher');
        Schema::dropIfExists('dictionary_form_people');
        Schema::enableForeignKeyConstraints();
    }
}
