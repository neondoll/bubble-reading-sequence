<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_histories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('form_id')->constrained();
            $table->integer('start_year')->nullable();
            $table->integer('end_year')->nullable();
            $table->string('short_name')->nullable();
            $table->text('org_name')->nullable();
            $table->text('org_place')->nullable();
            $table->text('position')->nullable();
            $table->text('awards')->nullable();
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
        Schema::dropIfExists('job_histories');
    }
}
