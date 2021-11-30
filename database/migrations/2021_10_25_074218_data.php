<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Data extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $arr = [
            ['name' => 'Руководитель'],
            ['name' => 'Член руководящего органа'],
            ['name' => 'Член организации'],
        ];
        foreach ($arr as $item) {
            \App\Models\DictionaryCommonOrgPosition::firstOrCreate($item);
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
            ['name' => 'Руководитель'],
            ['name' => 'Член руководящего органа'],
            ['name' => 'Член организации'],
        ];
        foreach ($arr as $item) {
            \App\Models\DictionaryCommonOrgPosition::where($item)->delete();
        }
    }
}
