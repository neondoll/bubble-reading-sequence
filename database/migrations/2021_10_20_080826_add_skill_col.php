<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSkillCol extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('computer_skills', function (Blueprint $table){
           $table->foreignId('form_id')->nullable()->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('computer_skills', function (Blueprint $table){
            if (DB::getDriverName() !== 'sqlite') {
                $table->dropConstrainedForeignId('form_id');
            } else {
                $table->dropColumn(['form_id',]);
            }
        });
    }
}
