<?php

namespace App\Console\Commands;

use App\Helpers\Classes\ApiHelper;
use App\Helpers\Classes\ArrayHelper;
use App\Models\Land;
use App\Models\RealEstate;
use Illuminate\Console\Command;

class generateEstates extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:estates';

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
        $data = ApiHelper::iasmon(ArrayHelper::toString([
            "query" => [
                "organizationList(subordination: 1, without_global_scope: true, system_status: [1], status_org: [1, 2])" => "id"
            ]
        ]));

        $organizations = $data["data"]["organizationList"];

        $this->info("-------- Синхронизация земельных участков и недвижимого имущества --------");

        foreach ($organizations as $organization) {
            $data = ApiHelper::estate([
                "query" => [
                    "lands(id_org: {$organization['id']})" => [
                        "id",
                        "assignment",
                        "objectEgrnAddress",
                        "cadastral_number",
                        "latitude",
                        "longitude",
                        "system_status"
                    ],
                    "realEstates(id_org: {$organization['id']})" => [
                        "id",
                        "id_land",
                        "object_name",
                        "objectEgrnAddress",
                        "cadastral_number",
                        "latitude",
                        "longitude",
                        "system_status"
                    ]
                ]
            ]);

            if (in_array("data", array_keys($data))) {
                $api_id_lands = [];

                foreach ($data["data"]["lands"] as $land) {
                    if ((int)$land['system_status'] == 1) {
                        $updateLand = Land::updateOrCreate(['id' => $land['id']], [
                            'address' => $land['objectEgrnAddress'],
                            'assignment' => $land['assignment'],
                            'cadastral_number' => $land['cadastral_number'],
                            'id_org' => $organization['id'],
                            'latitude' => $land['latitude'],
                            'longitude' => $land['longitude']
                        ]);
                        if ($updateLand->trashed()) {
                            $updateLand->restore();
                            $this->info("lands(id: $updateLand->id, id_org: $updateLand->id_org) - restore");
                        } else {
                            $this->info("lands(id: $updateLand->id, id_org: $updateLand->id_org) - " . ($updateLand->updated_at == $updateLand->created_at ? 'create' : 'update'));
                        }
                        $api_id_lands[] = (int)$land['id'];
                    }
                }

                foreach (Land::where('id_org', $organization['id'])->whereNotIn('id', $api_id_lands)->get() as $deleteLand) {
                    if (!$deleteLand->trashed()) {
                        $deleteLand->delete();
                        $this->info("lands(id: $deleteLand->id, id_org: $deleteLand->id_org) - delete");
                    }
                }

                $api_id_realEstates = [];

                foreach ($data["data"]["realEstates"] as $realEstate) {
                    if ((int)$realEstate['system_status'] == 1) {
                        $land = Land::find($realEstate['id_land']);

                        $updateRealEstate = RealEstate::updateOrCreate(['id' => $realEstate['id']], [
                            'address' => $realEstate['objectEgrnAddress'],
                            'cadastral_number' => $realEstate['cadastral_number'],
                            'id_org' => $organization['id'],
                            'land_id' => $land?->id,
                            'latitude' => $realEstate['latitude'],
                            'longitude' => $realEstate['longitude'],
                            'name' => $realEstate['object_name']
                        ]);
                        if ($updateRealEstate->trashed()) {
                            $updateRealEstate->restore();
                            $this->info("real_estates(id: $updateRealEstate->id, id_org: $updateRealEstate->id_org) - restore");
                        } else {
                            $this->info("real_estates(id: $updateRealEstate->id, id_org: $updateRealEstate->id_org) - " . ($updateRealEstate->updated_at == $updateRealEstate->created_at ? 'create' : 'update'));
                        }
                    }
                    $api_id_realEstates[] = (int)$realEstate['id'];
                }

                foreach (RealEstate::where('id_org', $organization['id'])->whereNotIn('id', $api_id_realEstates)->get() as $deleteRealEstate) {
                    if (!$deleteRealEstate->trashed()) {
                        $deleteRealEstate->delete();
                        $this->info("real_estates(id: $deleteRealEstate->id, id_org: $deleteRealEstate->id_org) - delete");
                    }
                }
            } else {
                $this->error("The organization (id: {$organization['id']}) has no data");
            }
        }

        return 0;
    }
}
