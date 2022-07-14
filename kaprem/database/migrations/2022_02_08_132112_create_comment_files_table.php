<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comment_files', function (Blueprint $table) {
            $table->id();
            $table->foreignId('comment_id')->constrained('object_comments')
                ->onDelete('cascade')->onUpdate('cascade');
            $table->text('server_name');
            $table->text('name');
            $table->integer('size');
            $table->timestamps();
        });
        Schema::table('object_comments', function (Blueprint $table) {
            $table->dropColumn(['file']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('object_comments', function (Blueprint $table) {
            $table->text('file')->nullable();
        });
        Schema::dropIfExists('comment_files');
    }
}
