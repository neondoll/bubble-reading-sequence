<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('org_infos', function (Blueprint $table) {
            $table->decimal('p1')->nullable()->change()
                ->comment(
                    'Общая численность обучающихся по программам среднего профессионального образования, 
                    бакалавриата, специалитета, магистратуры, 
                    аспирантуры, включая очную и заочную формы обучения, из них:'
                );
            $table->decimal('p2')->nullable()->change()->comment('Численность профессорско-преподавательского состава');
            $table->decimal('p3')->nullable()->change()->comment(
                'Численность инвалидов и лиц с ограниченными возможностями здоровья'
            );
            $table->decimal('p4')->nullable()->change()->comment(
                'Общая площадь всех зданий и сооружений'
            );
            $table->decimal('p5')->nullable()->change()->comment(
                'Общая площадь всех зданий и сооружений, требующих капитального ремонта
                 (на основании акта обследования или предписаний надзорных органов)'
            );
            $table->decimal('p6')->nullable()->change()->comment(
                'Общая площадь всех зданий и сооружений, находящихся в аварийном состоянии'
            );

            $table->decimal('p7')->nullable()->change()->comment(
                'Общая численность сотрудников'
            );
            $table->decimal('p8')->nullable()->change()->comment(
                'Общая площадь всех зданий и сооружений, находящихся в работоспособном состоянии (на основании
                        акта
                        обследования)'
            );
            $table->decimal('p9')->nullable()->change()->comment(
                'Общая площадь всех зданий и сооружений, находящихся в ограниченно-работоспособном состоянии (на
                        основании акта обследования или предписаний надзорных органов)'
            );
            $table->decimal('p10')->nullable()->change()->comment(
                'Динамика развития / эффективность научной деятельности'
            );
            $table->text('p11')->nullable()->change()->comment(
                'Примечание'
            );
            $table->dropColumn(['p12', 'p13', 'p14', 'p15', 'p16', 'p17', 'p18']);
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
