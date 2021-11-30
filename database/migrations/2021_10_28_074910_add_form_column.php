<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFormColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('forms', function (Blueprint $table) {
            $table->text('job_place')->nullable();
            $table->text('job_position')->nullable();
            $table->date('job_position_date')->nullable();
            $table->boolean('job_org_min')->nullable();
            $table->integer('stage')->nullable();
            $table->integer('stage_gos')->nullable();
            $table->integer('stage_nauka')->nullable();
            $table->integer('stage_comers')->nullable();
            $table->integer('stage_no_comers')->nullable();
            $table->integer('stage_rukovod')->nullable();
            $table->foreignId('sphere_uprav_id')
                ->unsigned()
                ->nullable()
                ->constrained('dictionary_form_spher')
                ->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('sphere_uprav_dop_id')
                ->unsigned()->nullable()
                ->constrained('dictionary_form_spher')
                ->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('max_count_people_id')
                ->unsigned()->nullable()
                ->constrained('dictionary_form_people')
                ->onDelete('cascade')->onUpdate('cascade');
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
