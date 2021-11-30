<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Data2 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $arr = [
          ['value'=>'Менеджмент'],
          ['value'=>'Soft skills'],
          ['value'=>'Hard skills'],
        ];
        foreach ($arr as $item) {
            \App\Models\DictionaryDpoEducationLevel::firstOrCreate($item);
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
            ['value'=>'Менеджмент'],
            ['value'=>'Soft skills'],
            ['value'=>'Hard skills'],
        ];
        foreach ($arr as $item) {
            \App\Models\DictionaryDpoEducationLevel::where($item)->delete();
        }
    }
}
