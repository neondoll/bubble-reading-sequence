<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateObjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('objects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('program_id')->constrained('programs')
                ->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('org_id')->constrained('organizations');
            $table->unsignedBigInteger('real_estate_id')->nullable();
            $table->text('name');
            $table->text('name_dbi')->nullable();
            $table->text('short_description');
            $table->text('address');
            $table->text('address_dbi')->nullable();
            $table->integer('type_remont');
            $table->integer('type');
            $table->integer('priority')->nullable();
            $table->foreignId('region_id')->constrained('regions');
            $table->string('city')->nullable();
            $table->string('cadastral_number')->nullable();
            $table->integer('build_year')->nullable();
            $table->integer('exploy_year')->nullable();
            $table->integer('kaprem_year')->nullable();
            $table->string('nadzor_orgs')->nullable();
            $table->integer('wear')->nullable();
            $table->string('osnovanie')->nullable();
            $table->string('pravo_oper')->nullable();
            $table->string('naznach')->nullable();
            $table->string('pravo')->nullable();
            $table->decimal('square',22)->nullable();
            $table->decimal('kaprem_square',22)->nullable();
            $table->decimal('square_ustav',22)->nullable();
            $table->decimal('square_ne_ustav',22)->nullable();
            $table->decimal('arenda',22)->nullable();
            $table->string('primechanie')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('objects');
    }
}
