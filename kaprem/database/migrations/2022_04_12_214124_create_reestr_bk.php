<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReestrBk extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reestr_bk', function (Blueprint $table) {
            $table->id();
            $table->integer('organization_id');
            $table->string('organization_name');
            $table->string('number_and_date_protocol');
            $table->string('number');
            $table->string('date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reestr_bk');
    }
}
