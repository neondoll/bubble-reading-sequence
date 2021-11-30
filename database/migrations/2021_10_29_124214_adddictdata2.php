<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Adddictdata2 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $arr = [
            'Нет',
            'Кандидат наук',
            'Доктор наук'
        ];
        $arr2 = [
            'Гуманитарные науки',
            'Инженерно-технические науки',
            'Медицинские науки',
            'Социально-экономические и общественные науки',
            'Науки о земле',
            'Сельскохозяйственные науки',
            'Биологические науки',
            'Химические науки',
            'Физико-математические науки',
        ];
        $arr3 = [
            'Нет',
            'Доцент',
            'Профессор',
            'Член-корреспондент',
            'Академик',
            'Иное (написать ниже)'
        ];
        foreach ($arr as $item) {
            \App\Models\DictionaryDegree::updateOrCreate(['value' => $item]);
        }
        foreach ($arr2 as $item) {
            \App\Models\DictionarySphereScience::updateOrCreate(['value' => $item]);
        }
        foreach ($arr3 as $item) {
            \App\Models\DictionaryUchZvan::updateOrCreate(['value' => $item]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
