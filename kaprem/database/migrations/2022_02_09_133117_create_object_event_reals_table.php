<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateObjectEventRealsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('object_event_reals', function (Blueprint $table) {
            $table->id();


            $table->foreignId('event_id')->constrained('object_events')
                ->onDelete('cascade')->onUpdate('cascade');
            $table->integer('stage');
            $table->date('p02')->nullable()->comment('Дата начала');
            $table->date('p03')->nullable()->comment('Дата окончания');
            $table->decimal('p04', 22)->nullable()->comment('Стоимость реализации (тыс.руб)');
            $table->decimal('p05', 22)->nullable()->comment('Сумма бюджетного финансирования на проведение кап.ремонта (тыс.руб)');
            $table->decimal('p06', 22)->nullable()->comment('Софинансирование из внебюджетных источников (тыс.руб)');
            $table->boolean('end_stage')->nullable()->comment('Отметка о завершении этапа');
            $table->text('comment')->nullable()->comment('Комментарий');
            $table->boolean('exp_mon')->nullable()->comment('Эксперт МОН +/-');
            $table->text('comment_mon')->nullable()->comment('Комментарий мон');



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
        Schema::dropIfExists('object_event_reals');
    }
}
