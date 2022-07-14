<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubsidiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('repair_types', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->timestamps();
            $table->softDeletes();
        });
        Schema::create('subsidy_statuses', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->timestamps();
            $table->softDeletes();
        });
        Schema::create('subsidies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('organization_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('code');
            $table->string('name');
            $table->string('short_description');
            $table->foreignId('repair_type_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('address');
            $table->foreignId('region_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('city');
            $table->string('cadastral_number');
            $table->string('build_year');
            $table->string('start_year');
            $table->string('last_fix_year');
            $table->tinyInteger('is_prescription');
            $table->string('prescription')->nullable();
            $table->string('wear');
            $table->string('reasons');
            $table->string('pravo_op_upr');
            $table->string('assignment');
            $table->string('pravo_sobstv');
            $table->float('square_total');
            $table->float('square_cap_rem');
            $table->float('used');
            $table->float('not_used');
            $table->float('in_rent');
            $table->string('note');
            $table->foreignId('status_id')->constrained('subsidy_statuses')->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subsidies');
        Schema::dropIfExists('subsidy_statuses');
        Schema::dropIfExists('repair_types');
    }
}
