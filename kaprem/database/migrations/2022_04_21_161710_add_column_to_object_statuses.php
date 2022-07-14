<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToObjectStatuses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('object_statuses', function (Blueprint $table) {
            $table->boolean('is_approved_by_user')
                ->default(false)
                ->after('mgsu_status_id')
                ->comment('Колонка отправлено юзером');
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
            $table->dropColumn('is_approved_by_user');
        });
    }
}
