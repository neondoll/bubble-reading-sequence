<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('regions', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->timestamps();
        });
        Schema::table('forms', function (Blueprint $table) {
            $table->foreignId('region_id')->nullable()->constrained();
            $table->foreignId('fact_region_id')->nullable()->constrained('regions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::table('forms', function (Blueprint $table) {
            if (DB::getDriverName() !== 'sqlite') {
                $table->dropConstrainedForeignId('region_id');
                $table->dropConstrainedForeignId('fact_region_id');
            } else {
                $table->dropColumn(['region_id', 'fact_region_id']);
            }
        });
        Schema::enableForeignKeyConstraints();
        Schema::dropIfExists('regions');
    }
}
