<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterForeignKey extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //  var_dump(\DB::connection());
        Schema::disableForeignKeyConstraints();
        Schema::table('computer_skills', function (Blueprint $blueprint) {
            if (DB::getDriverName() !== 'sqlite') {
                $blueprint->dropForeign('computer_skills_form_id_foreign');
            } else {
                $blueprint->dropColumn(['form_id']);
            }
            $blueprint
                ->foreign('form_id')
                ->references('id')
                ->on('forms')
                ->onDelete('cascade')
                ->onDelete('cascade');
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::table('computer_skills', function (Blueprint $blueprint) {
            if (DB::getDriverName() !== 'sqlite') {
                $blueprint->dropConstrainedForeignId('form_id');
            }
        });
        Schema::table('computer_skills', function (Blueprint $blueprint) {
            $blueprint->foreignId('form_id')->nullable()->constrained();
        });
        Schema::enableForeignKeyConstraints();
    }
}
