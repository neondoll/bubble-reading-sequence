<?php

namespace App\Console\Commands;

use App\Models\Land;
use App\Models\RealEstate;
use App\Models\Site;
use App\Models\SiteGroup;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class generateEstates extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generateEstates';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): int
    {
        $query = "query { organizationList(subordination: 1, without_global_scope: true, system_status: [1], status_org: [1, 2]) {id} }";
        $http = Http::post("https://api-ias.xn--80apneeq.xn--p1ai/graphql", ['query' => $query]);

        $data = json_decode($http->body(), true);

        $organizations = $data["data"]["organizationList"];

        $url = "https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/api/graph?access-token=23498jfskduespq0";

        echo "-------- Синхронизация земельных участков и недвижимого имущества --------\n";

        foreach ($organizations as $organization) {
            $query = "query { lands(id_org: {$organization['id']}) { id, assignment, objectEgrnAddress, cadastral_number, latitude, longitude, system_status }, realEstates(id_org: {$organization['id']}) { id, id_land, object_name, objectEgrnAddress, cadastral_number, latitude, longitude, system_status } }";

            $http = Http::post($url, ['query' => $query]);

            $data = json_decode($http->body(), true);

            if (in_array("data", array_keys($data))) {
                $api_id_lands = [];

                foreach ($data["data"]["lands"] as $land) {
                    $system_status = (int)$land['system_status'];
                    if ($system_status == 1) {
                        $updateLand = Land::updateOrCreate(['id' => $land['id']], [
                            'id_org' => $organization['id'],
                            'assignment' => $land['assignment'],
                            'address' => $land['objectEgrnAddress'],
                            'cadastral_number' => $land['cadastral_number'],
                            'latitude' => $land['latitude'],
                            'longitude' => $land['longitude']
                        ]);
                        if ($updateLand->trashed()) {
                            $updateLand->restore();
                            echo "org: $updateLand->id_org, land: $updateLand->id - restore\n";
                        } else {
                            echo "org: $updateLand->id_org, land: $updateLand->id - " . ($updateLand->updated_at == $updateLand->created_at ? 'create' : 'update') . "\n";
                        }

                        $api_id_lands[] = (int)$land['id'];
                    }
                }

                foreach (Land::where('id_org', $organization['id'])->whereNotIn('id', $api_id_lands)->get() as $deleteLand) {
                    if (!$deleteLand->trashed()) {
                        $deleteLand->delete();
                        echo "org: $deleteLand->id_org, land: $deleteLand->id - delete\n";
                    }
                }

                $api_id_realEstates = [];

                foreach ($data["data"]["realEstates"] as $realEstate) {
                    $system_status = (int)$realEstate['system_status'];
                    if ($system_status == 1) {
                        $land = Land::find($realEstate['id_land']);

                        $updateRealEstate = RealEstate::updateOrCreate(['id' => $realEstate['id']], [
                            'id_org' => $organization['id'],
                            'land_id' => $land?->id,
                            'name' => $realEstate['object_name'],
                            'address' => $realEstate['objectEgrnAddress'],
                            'cadastral_number' => $realEstate['cadastral_number'],
                            'latitude' => $realEstate['latitude'],
                            'longitude' => $realEstate['longitude']
                        ]);
                        if ($updateRealEstate->trashed()) {
                            $updateRealEstate->restore();
                            echo "org: $updateRealEstate->id_org, realEstate: $updateRealEstate->id - restore\n";
                        } else {
                            echo "org: $updateRealEstate->id_org, realEstate: $updateRealEstate->id - " . ($updateRealEstate->updated_at == $updateRealEstate->created_at ? 'create' : 'update') . "\n";
                        }
                    }
                    $api_id_realEstates[] = (int)$realEstate['id'];
                }

                foreach (RealEstate::where('id_org', $organization['id'])->whereNotIn('id', $api_id_realEstates)->get() as $deleteRealEstate) {
                    if (!$deleteRealEstate->trashed()) {
                        $deleteRealEstate->delete();
                        echo "org: $deleteRealEstate->id_org, realEstate: $deleteRealEstate->id - delete\n";
                    }
                }
            } else {
                echo "org: {$organization['id']} - don't get \"data\"\n";
            }
        }

        return 0;
    }
}
