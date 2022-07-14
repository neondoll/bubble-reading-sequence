<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterObjectEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('object_events_types', function (Blueprint $table) {
            $table->id();
            $table->float('stage');
            $table->text('label');
            $table->boolean('value')->default(true);
        });
        Schema::table('object_events', function (Blueprint $table) {
            $table->foreignId('type_id')->nullable()->constrained('object_events_types');
            $table->text('p07')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('object_events', function (Blueprint $table) {
            $table->dropConstrainedForeignId('type_id');
            $table->dropColumn(['p07']);
        });
        Schema::dropIfExists('object_events_types');
    }
}
