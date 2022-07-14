<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateObjectEventRealFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('object_event_real_files', function (Blueprint $table) {
            $table->id();

            $table->foreignId('event_real_id')->constrained('object_event_reals')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->text('server_name');
            $table->text('name');

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
        Schema::dropIfExists('object_event_real_files');
    }
}
