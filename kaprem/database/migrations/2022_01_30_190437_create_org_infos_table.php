<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrgInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('org_infos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('program_id')->constrained('programs')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('org_id')->constrained('organizations');
            $table->decimal('p1')->nullable()->comment('Общая численность обучающихся по программам среднего профессионального образования, бакалавриата, специалитета, магистратуры, аспирантуры, включая очную и заочную формы обучения, из них:');
            $table->decimal('p2')->nullable()->comment('Численность профессорско-преподавательского состава');
            $table->decimal('p3')->nullable()->comment('Общая площадь всех зданий и сооружений');
            $table->decimal('p4')->nullable()->comment('Общая площадь всех зданий и сооружений, требующих капитального ремонта (на основании акта обследования или предписаний надзорных органов)');
            $table->decimal('p5')->nullable()->comment('Общая площадь всех зданий и сооружений, находящихся в аварийном состоянии');
            $table->decimal('p6')->nullable()->comment('Общая площадь всех зданий и сооружений, находящихся в работоспособном состоянии (на основании акта обследования)');
            $table->decimal('p7')->nullable()->comment('Общая площадь всех зданий и сооружений, находящихся в ограниченно-работоспособном состоянии (на основании акта обследования или предписаний надзорных органов)');
            $table->decimal('p8')->nullable()->comment('Общая площадь общежитий вуза');
            $table->decimal('p9')->nullable()->comment('Общая площадь общежитий вуза, требующих капитального ремонта');
            $table->decimal('p10')->nullable()->comment('Ожидаемое увеличение количества мест для проживания в общежитии за счет ввода в эксплуатацию дополнительных площадей после проведенного капитального ремонта');
            $table->decimal('p11')->nullable()->comment('Общая численность обучающихся, проживающих в общежитиях вуза, в том числе:');
            $table->decimal('p12')->nullable()->comment('численность обучающихся за счет средств федерального бюджета');
            $table->decimal('p13')->nullable()->comment('численность обучающихся по договорам об оказании платных образовательных услуг');
            $table->decimal('p14')->nullable()->comment('численность иных обучающихся');
            $table->decimal('p15')->nullable()->comment('Общее количество общежитий вуза');
            $table->decimal('p16')->nullable()->comment('Общее количество мест в общежитиях вуза');
            $table->decimal('p17')->nullable()->comment('Дефицит мест в общежитиях вуза');
            $table->text('p18')->nullable()->comment('Примечание');
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
        Schema::dropIfExists('org_infos');
    }
}
