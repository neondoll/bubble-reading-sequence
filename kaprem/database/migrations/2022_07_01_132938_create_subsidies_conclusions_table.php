<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubsidiesConclusionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subsidy_conclusions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('subsidy_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->text('name');
            $table->text('extension');
            $table->integer('size');
            $table->string('note');
            $table->text('comment')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subsidy_conclusions');
    }
}
