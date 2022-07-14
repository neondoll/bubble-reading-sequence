<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateObjectActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('object_activities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('obj_id')->constrained('objects')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->integer('type');
            $table->integer('stage');
            $table->boolean('p01')->nullable()->comment('Наличие на объекте');
            $table->text('p02')->nullable()->comment('Материал конструкции');
            $table->text('p03')->nullable()->comment(
                'Срок эксплуатации с момента строительства или предыдущего капитального ремонта'
            );
            $table->boolean('p04')->nullable()->comment('Требуется капитальный ремонт');
            $table->text('p05')->nullable()->comment('Обоснование необходимости');
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
        Schema::dropIfExists('object_activities');
    }
}
