<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsOrgInfo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('org_infos', function (Blueprint $blueprint) {
            foreach (range(12, 19) as $i) {
                $blueprint->float('p'.$i)->nullable();
            }
            $blueprint->text('p20')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('org_infos', function (Blueprint $blueprint) {
            foreach (range(12, 19) as $i) {
                $blueprint->dropColumn(['p'.$i]);
            }
            $blueprint->dropColumn(['p20']);
        });
    }
}
