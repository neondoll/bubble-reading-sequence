<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Addcolumnstoform2 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('forms', function (Blueprint $blueprint) {
            $blueprint->text('chin')->nullable();
            $blueprint->text('ugolov')->nullable();
            $blueprint->text('awards')->nullable();
            $blueprint->text('comerc_uchast')->nullable();
            $blueprint->text('opit_dey')->nullable();
            $blueprint->text('kompetencii')->nullable();
            $blueprint->text('achievements')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('forms', function (Blueprint $blueprint) {
            $blueprint->dropColumn(
                ['chin', 'ugolov', 'awards', 'comerc_uchast', 'opit_dey', 'kompetencii', 'achievements']
            );
        });
    }
}
