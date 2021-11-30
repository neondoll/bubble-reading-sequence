<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSkillLevels extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $levels = [
            'Нет опыта работы',
            'Начинающий пользователь',
            'Уверенный пользователь',
            'Специальные программные продукты',
            'Эксперт'
        ];
        foreach ($levels as $level) {
            \App\Models\DictionaryComputerSkill::insert(['name' => $level]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $levels = [
            'Нет опыта работы',
            'Начинающий пользователь',
            'Уверенный пользователь',
            'Специальные программные продукты',
            'Эксперт'
        ];
        foreach ($levels as $level) {
            \App\Models\DictionaryComputerSkill::where(['name' => $level])->delete();
        }
    }
}
