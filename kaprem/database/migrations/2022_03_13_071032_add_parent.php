<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddParent extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('object_events', function (Blueprint $table) {
            $table->float('stage')->change();
            $table->foreignId('parent')->nullable()
                ->after('stage')->constrained('object_events')
                ->onDelete('cascade')->onUpdate('cascade');
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
            $table->dropConstrainedForeignId('parent');
        });
    }
}
