<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGosTainiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gos_tainies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('form_id')->constrained();
            $table->string('form')->nullable();
            $table->string('org')->nullable();
            $table->string('number')->nullable();
            $table->date('job_date')->nullable();
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
        Schema::dropIfExists('gos_tainies');
    }
}
