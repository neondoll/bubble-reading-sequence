<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('forms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->text('name');
            $table->text('lastName');
            $table->text('middleName');
            $table->smallInteger('sex');
            $table->text('old_name');
            $table->text('old_lastName');
            $table->text('old_middleName');
            $table->string('passport_number');
            $table->string('passport_serial');
            $table->string('passport_place');
            $table->date('passport_date');
            $table->text('citizenship');
            $table->date('birthday');
            $table->text('birthplace');

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
        Schema::dropIfExists('forms');
        Schema::enableForeignKeyConstraints();
    }
}
