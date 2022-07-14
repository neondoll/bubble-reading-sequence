<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateObjectStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dep_statuses', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->string('status');
            $table->timestamps();
        });

        Schema::create('obj_statuses', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->string('status');
            $table->timestamps();
        });

        Schema::create('object_statuses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('object_id')->constrained('objects')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('dep_status_id')->nullable()->constrained('dep_statuses');
            $table->foreignId('mgsu_status_id')->constrained('obj_statuses');
            $table->date('step_date')->nullable();
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
        Schema::dropIfExists('object_statuses');
        Schema::dropIfExists('dep_statuses');
        Schema::dropIfExists('dku_statuses');
        Schema::dropIfExists('obj_statuses');
    }
}
