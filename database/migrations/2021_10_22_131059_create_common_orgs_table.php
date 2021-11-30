<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommonOrgsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('common_orgs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('form_id')->constrained();
            $table->foreignId('position')->constrained('dictionary_common_org_positions');
            $table->string('years');
            $table->string('locality');
            $table->string('org');
            $table->string('org_goal');
            $table->string('role');
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
        Schema::dropIfExists('common_orgs');
    }
}
