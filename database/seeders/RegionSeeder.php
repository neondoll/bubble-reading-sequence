<?php

namespace Database\Seeders;

use App\Models\Region;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class RegionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $response = Http::post('https://api-ias.xn--80apneeq.xn--p1ai/graphql', [
            'query' => '{regions{id,name}}'
        ]);
        $regions = $response->json()['data']['regions'];

        foreach ($regions as $region) {
           Region::updateOrCreate(['id' => $region['id']], ['name' => $region['name']]);
        }
    }
}
