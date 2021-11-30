<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Addformcolumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dictionary_degrees', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->timestamps();
        });
        Schema::create('dictionary_sphere_science', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->timestamps();
        });
        Schema::create('dictionary_uch_zvan', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->timestamps();
        });
        Schema::table('forms', function (Blueprint $table) {
            $table->foreignId('degree_id')
                ->unsigned()
                ->nullable()->constrained('dictionary_degrees');
            $table->foreignId('sphere_n_id')->unsigned()->nullable()->constrained('dictionary_sphere_science');
            $table->foreignId('sphere_n_dop_id')->unsigned()->nullable()->constrained('dictionary_sphere_science');
            $table->string('shifr')->nullable();
            $table->foreignId('otrasl')->unsigned()->nullable()->constrained('dictionary_sphere_science');
            $table->foreignId('zvan')->unsigned()->nullable()->constrained('dictionary_uch_zvan');
            $table->integer('hirsh')->nullable();
            $table->integer('scopus')->nullable();
            $table->integer('web_of_science')->nullable();
            $table->integer('inoe')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('forms', function (Blueprint $table) {
            if (DB::getDriverName() !== 'sqlite') {
                $table->dropConstrainedForeignId('degree_id');
            } else {
                $table->dropColumn(['degree_id']);
            }
        });
        Schema::table('forms', function (Blueprint $table) {
            if (DB::getDriverName() !== 'sqlite') {
                $table->dropConstrainedForeignId('sphere_n_id');
            } else {
                $table->dropColumn(['sphere_n_id']);
            }
        });
        Schema::table('forms', function (Blueprint $table) {
            if (DB::getDriverName() !== 'sqlite') {
                $table->dropConstrainedForeignId('sphere_n_dop_id');
            } else {
                $table->dropColumn(['sphere_n_dop_id']);
            }
        });
        Schema::table('forms', function (Blueprint $table) {
            if (DB::getDriverName() !== 'sqlite') {
                $table->dropConstrainedForeignId('otrasl');
            } else {
                $table->dropColumn(['otrasl']);
            }
        });
        Schema::table('forms', function (Blueprint $table) {
            if (DB::getDriverName() !== 'sqlite') {
                $table->dropConstrainedForeignId('zvan');
            } else {
                $table->dropColumn(['zvan']);
            }
        });
        Schema::table('forms', function (Blueprint $table) {
            $table->dropColumn(['shifr', 'hirsh', 'scopus', 'web_of_science', 'inoe']);
        });

        Schema::dropIfExists('dictionary_uch_zvan');
        Schema::dropIfExists('dictionary_sphere_science');
        Schema::dropIfExists('dictionary_degrees');
    }
}
