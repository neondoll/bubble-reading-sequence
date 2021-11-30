<?php

namespace Tests\Unit;

use App\Models\Region;
use Illuminate\Support\Facades\DB;
use Illuminate\Testing\TestResponse;
use Tests\GraphQlTestHelper;
use Tests\TestCase;

class RegionApiTest extends TestCase
{
    use GraphQlTestHelper;

    protected function setUp(): void
    {
        parent::setUp();
        $this->artisan('db:seed --class=RegionSeeder');
    }

    public function test_region_count_all()
    {
        $regions = Region::select(['id', 'name'])->count();

        $this->graphql('{regions{id,name}}')
            ->assertJsonCount($regions, 'data.regions');
    }

    public function test_region_count_one()
    {
        $this->postJson('/graphql', ['query' => '{region(id:1){id,name}}'])
            ->assertJsonCount(1, 'data');
    }

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_region_api()
    {
        $this->postJson('/graphql', ['query' => '{region(id:1){id,name}}'])
            ->assertJson([
                'data' => [
                    'region' => [
                        'id' => 1,
                        'name' => 'Алтайский край'
                    ]
                ]
            ]);
    }
}
