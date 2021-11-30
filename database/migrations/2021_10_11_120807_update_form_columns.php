<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateFormColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('forms', function (Blueprint $blueprint){
            $blueprint->string('passport_number')->nullable()->change();
            $blueprint->string('passport_serial')->nullable()->change();
            $blueprint->string('passport_place')->nullable()->change();
            $blueprint->date('passport_date')->nullable()->change();
            $blueprint->date('birthday')->nullable()->change();
            $blueprint->text('citizenship')->nullable()->change();
            $blueprint->text('birthplace')->nullable()->change();
            $blueprint->text('old_name')->nullable()->change();
            $blueprint->text('old_lastName')->nullable()->change();
            $blueprint->text('old_middleName')->nullable()->change();
            $blueprint->string('index',10)->nullable();
            $blueprint->text('district')->nullable();
            $blueprint->string('city')->nullable();
            $blueprint->text('street')->nullable();
            $blueprint->string('house')->nullable();
            $blueprint->string('corpus')->nullable();
            $blueprint->string('room')->nullable();
            $blueprint->boolean('ready_to_move')->nullable();
            $blueprint->text('email')->nullable();
            $blueprint->string('phone')->nullable();
            $blueprint->string('job_phone')->nullable();
            $blueprint->text('social_network')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
