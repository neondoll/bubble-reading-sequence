<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActionPlanFiles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('action_plan_files', function (Blueprint $table) {
            $table->id();
            $table->integer('obj_id')->comment('ID объекта');
            $table->integer('stage_id')->comment('ID этапа (ссылается на kaprem.object_events.stage)');
            $table->string('file_list_name')->comment('название документа из App/Models/ActionPlanFile::FileList');
            $table->string('file_name')->comment('фактическое название файла');
            $table->string('server_name')->comment('сгенерированное название файла в файловой системе');
            $table->boolean('approved_by_expert')->comment('поле принято экспертом');
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
        Schema::dropIfExists('action_plan_files');
    }
}
