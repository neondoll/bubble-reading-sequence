<?php

namespace App\Console\Commands;

use App\Models\Land;
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

        $url = "https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/api/graph?access-token=" . getenv("ACCESS_TOKEN_ESTATE");

        echo "-------- Синхронизация земельных участков --------";

        $lands = Land::active();
        $lands->delete();

        foreach ($organizations as $organization) {
            $query = "query { lands(id_org: {$organization['id']}) {id, assignment, objectEgrnAddress, cadastral_number, latitude, longitude, system_status} }";

            $http = Http::post($url, ['query' => $query]);

            $data = json_decode($http->body(), true);

            $lands = $data["data"]["lands"];

            foreach ($lands as $land) {
                if ((int)$land['system_status'] == 1) {
                    $upLand = Land::updateOrCreate(['id' => $land['id']], [
                        'id_org' => $organization['id'],
                        'assignment' => $land['assignment'],
                        'address' => $land['objectEgrnAddress'],
                        'cadastral_number' => $land['cadastral_number'],
                        'latitude' => $land['latitude'],
                        'longitude' => $land['longitude']
                    ]);
                    echo "org: {$organization['id']}, land: $upLand->id - " . ($upLand->updated_at == $upLand->created_at ? 'create' : 'update') . "\n";
                    if ($upLand->trashed()) {
                        $upLand->restore();
                    }
                } else {
                    if ($delLand = Land::find($land['id'])) {
                        if (!$delLand->trashed()) {
                            $delLand->delete();
                            echo "org: {$organization['id']}, land: {$land['id']} - delete\n";
                        }
                    }
                }
            }
        }

        return 0;
    }
}
