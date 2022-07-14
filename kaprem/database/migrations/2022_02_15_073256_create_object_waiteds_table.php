<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateObjectWaitedsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('object_waiteds', function (Blueprint $table) {
            $table->id();
            $table->foreignId('obj_id')->constrained('objects')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->integer('element');
            $table->text('aim')->nullable();
            $table->string('plan')->nullable();
            $table->string('changes')->nullable();
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
        Schema::dropIfExists('object_waiteds');
    }
}
