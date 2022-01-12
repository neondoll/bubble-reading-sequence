<?php

namespace App\Console\Commands;

use App\Helpers\Classes\ApiHelper;
use App\Helpers\Classes\ArrayHelper;
use App\Models\Land;
use App\Models\RealEstate;
use Illuminate\Console\Command;

class test extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test';

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

        foreach ($organizations as $organization) {
            var_dump(ApiHelper::estate([
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
            ]));
        }

        return 0;
    }
}
