<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Addasdsad extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $arr = [
            ['stage' => 1, 'label' => 'Комплексный кап. ремонт', 'value' => 1],
            ['stage' => 1, 'label' => 'Выборочный кап. ремонт', 'value' => 1],
            ['stage' => 2, 'label' => 'Выполнено', 'value' => 0],
            ['stage' => 2, 'label' => 'Требуется ', 'value' => 1],
            ['stage' => 3, 'label' => 'Разработана', 'value' => 0],
            ['stage' => 3, 'label' => 'Требуется ', 'value' => 1],
            ['stage' => 4, 'label' => 'Получено заключение ', 'value' => 0],
            ['stage' => 4, 'label' => 'Требуется проведение', 'value' => 1],
            ['stage' => 4, 'label' => 'Проведение не требуется ', 'value' => 0],
        ];
        foreach ($arr as $item) {
            \App\Models\ObjectEventsType::create($item);
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
