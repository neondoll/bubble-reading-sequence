<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDictionaryValues extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $arr1 = [
            ['value' => 'В обработке', 'status' => 'IN_DEV'],
            ['value' => 'Рекомендуется к согласованию', 'status' => 'RECOMMEND'],
            ['value' => 'Не рекомендуется к согласованию', 'status' => 'NOT_RECOMMEND'],
            ['value' => 'Возвращено на доработку', 'status' => 'RETURNED'],
            ['value' => 'В реализации', 'status' => 'REALIZED']
        ];
        $arr2 = [
            ['value' => 'В обработке', 'status' => 'IN_DEV'],
            ['value' => 'Рассмотрено ДБИ', 'status' => 'REVIEWED'],
            ['value' => 'Резерв', 'status' => 'RESERVED'],
        ];
        $arr3 = [
            ['value' => 'В обработке', 'status' => 'IN_DEV'],
            ['value' => 'Рассмотрено ДКУ', 'status' => 'REVIEWED'],
            ['value' => 'Резерв', 'status' => 'RESERVED'],
        ];
        foreach ($arr1 as $item) {
            \App\Models\ObjStatus::create($item);
        }
        foreach ($arr2 as $item) {
            \App\Models\DepStatus::create($item);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $arr1 = [
            ['value' => 'В обработке', 'status' => 'IN_DEV'],
            ['value' => 'Рекомендуется к согласованию', 'status' => 'RECOMMEND'],
            ['value' => 'Не рекомендуется к согласованию', 'status' => 'NOT_RECOMMEND'],
            ['value' => 'Возвращено на доработку', 'status' => 'RETURNED'],
            ['value' => 'В реализации', 'status' => 'REALIZED']
        ];
        $arr2 = [
            ['value' => 'В обработке', 'status' => 'IN_DEV'],
            ['value' => 'Рассмотрено ДБИ', 'REVIEWED'],
            ['value' => 'Резерв', 'status' => 'RESERVED'],
        ];
        $arr3 = [
            ['value' => 'В обработке', 'status' => 'IN_DEV'],
            ['value' => 'Рассмотрено ДКУ', 'REVIEWED'],
            ['value' => 'Резерв', 'status' => 'RESERVED'],
        ];
        foreach ($arr1 as $item) {
            \App\Models\ObjStatus::find(['value' => $item['value']])?->each(function ($item) {
                $item->delete();
            });
        }
        foreach ($arr2 as $item) {
            \App\Models\DepStatus::find(['value' => $item['value']])?->each(function ($item) {
                $item->delete();
            });
        }
    }
}
