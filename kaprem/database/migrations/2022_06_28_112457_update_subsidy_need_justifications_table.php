<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateSubsidyNeedJustificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('building_constructions', function (Blueprint $table) {
            $table->tinyInteger('type')->default(1);
        });
        Schema::table('subsidy_need_justifications', function (Blueprint $table) {
            $table->string('material')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('subsidy_need_justifications', function (Blueprint $table) {
            $table->string('material')->change();
        });
        Schema::table('building_constructions', function (Blueprint $table) {
            $table->dropColumn('type');
        });
    }
}
