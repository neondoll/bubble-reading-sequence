<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddData23w32 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $arr = [
            ['level' => 'Среднее специальное'],
            ['level' => 'Бакалавриат'],
            ['level' => 'Специалитет'],
            ['level' => 'Магистратура'],
            ['level' => 'Аспирантура'],
            ['level' => 'Докторантура'],
        ];
        foreach ($arr as $item) {
            \App\Models\DictionaryEducationLevel::firstOrCreate($item);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $arr = [
            ['level' => 'Среднее специальное'],
            ['level' => 'Бакалавриат'],
            ['level' => 'Специалитет'],
            ['level' => 'Магистратура'],
            ['level' => 'Аспирантура'],
            ['level' => 'Докторантура'],
        ];
        foreach ($arr as $item) {
            \App\Models\DictionaryEducationLevel::where($item)->delete();
        }
    }
}
