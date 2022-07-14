<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateObjectFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('object_files', function (Blueprint $table) {
            $table->id();
            $table->foreignId('obj_id')->constrained('objects')
                ->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('list_id')->constrained('file_lists');
            $table->text('label')->nullable();
            $table->string('server_name');
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
        Schema::dropIfExists('object_files');
    }
}
