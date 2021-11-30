<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDictionaryEducationLevelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('dictionary_education_levels');
        Schema::create('dictionary_education_levels', function (Blueprint $table) {
            $table->id();
            $table->string('level');
            $table->timestamps();
        });
        Schema::table('forms', function (Blueprint $table) {
            $table->bigInteger('education_level')->unsigned()->nullable();
            $table->foreign('education_level')->on('dictionary_education_levels')->references('id')->onDelete(
                'CASCADE'
            );
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
        Schema::dropIfExists('dictionary_education_levels');

        Schema::table('forms', function (Blueprint $table) {
            if (DB::getDriverName() !== 'sqlite') {
                $table->dropConstrainedForeignId('education_level');
            } else {
                $table->dropColumn(['education_level',]);
            }
        });
        Schema::enableForeignKeyConstraints();
    }
}
