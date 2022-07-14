<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnSendToRealizationToObjectStatuses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('object_statuses', function (Blueprint $table) {
            $table->boolean('to_realization')->after('is_approved_by_user');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('object_statuses', function (Blueprint $table) {
            $table->dropColumn('to_realization');
        });
    }
}
