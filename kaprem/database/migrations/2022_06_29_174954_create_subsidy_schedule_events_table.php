<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubsidyScheduleEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subsidy_schedule_events', function (Blueprint $table) {
            $table->id();
            $table->foreignId('subsidy_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->integer('type');
            $table->text('title');
            $table->date('date_start')->nullable();
            $table->date('date_end')->nullable();
            $table->float('budget_funding', 8, 3)->nullable();
            $table->float('offbudget_funding', 8, 3)->nullable();
            $table->timestamps();
        });
        Schema::create('subsidy_schedule_event_files', function (Blueprint $table) {
            $table->id();
            $table->foreignId('event_id')->constrained('subsidy_schedule_events')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('subsidy_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->integer('type');
            $table->integer('subtype');
            $table->text('title');
            $table->tinyInteger('is_link')->default(0);
            $table->text('link')->nullable();
            $table->text('name')->nullable();
            $table->text('extension')->nullable();
            $table->integer('size')->nullable();
            $table->tinyInteger('accepted_expert')->default(0);
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
        Schema::dropIfExists('subsidy_schedule_event_files');
        Schema::dropIfExists('subsidy_schedule_events');
    }
}
