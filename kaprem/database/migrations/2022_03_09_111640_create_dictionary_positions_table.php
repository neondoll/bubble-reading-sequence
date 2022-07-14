<?php

use App\Models\DictionaryPosition;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDictionaryPositionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dictionary_positions', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->timestamps();
        });
        $arr = [
            ['value' => "Лицо, ответсвенное за подготовку программы кап. ремонта"],
            ['value' => "Лицо, ответственное за подготовку и реализацию программы"],
            ['value' => "Лицо, ответственное за подготовку программы в части АТЗ"],
            ['value' => "Лицо, ответственное за проведение закупочных процедур"]

        ];
        foreach ($arr as $item) {
            DictionaryPosition::create($item);
        }
        Schema::table('contacts', function (Blueprint $blueprint) {
            $blueprint->foreignId('role')->nullable()->change()->constrained('dictionary_positions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('contacts', function (Blueprint $blueprint) {
            $blueprint->dropForeign(['role']);
        });
        Schema::dropIfExists('dictionary_positions');
    }
}
