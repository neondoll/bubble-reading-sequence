<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class FormIdasdasd extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('dpos', function (Blueprint $table){
            $table->foreignId('form_id')->unsigned()->nullable()->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('dpos', function (Blueprint $table){
            if (DB::getDriverName() !== 'sqlite') {
                $table->dropConstrainedForeignId('form_id');
            }
            else {
                $table->dropColumn(['form_id']);
            }
        });
    }
}
