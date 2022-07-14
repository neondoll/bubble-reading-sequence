<?php

namespace Tests\Feature;

use App\Helpers\Classes\ObjectService;
use App\Models\Organization;
use App\Models\Program;
use App\Models\ProgramObject;
use App\Models\Region;
use Illuminate\Support\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProgramObjectControllerTest extends TestCase
{
    use RefreshDatabase;

    public Program $program;

    public Region $region;

    protected function setUp(): void
    {
        parent::setUp();

        $organization = Organization::factory()->create();
        $this->program = Program::factory()->create([
            'org_id' => $organization->id
        ]);
        $this->region = Region::factory()->create();
    }

    public function test_create_method()
    {
        $this->withoutMiddleware();
        $fakedObjectFields = ProgramObject::factory()->make([
            'program_id' => $this->program->id,
            'org_id' => $this->program->org_id,
            'region_id' => $this->region->id
        ])->toArray();

        $response = $this->post('/kaprem/object/create', $fakedObjectFields);

        $response->assertStatus(201);
        $response->assertJson($fakedObjectFields);
    }

    public function test_update_method()
    {
        $this->withoutMiddleware();

        $objectToUpdate = ProgramObject::factory()->create([
            'program_id' => $this->program->id,
            'org_id' => $this->program->org_id,
            'region_id' => $this->region->id
        ]);

        $updateFields = ProgramObject::factory()->make([
            'program_id' => $this->program->id,
            'org_id' => $this->program->org_id,
            'region_id' => $this->region->id
        ])->toArray();

        $response = $this->post("/kaprem/object/update/{$objectToUpdate->id}", $updateFields);

        $response->assertStatus(200);
        $response->assertJson(['Ok' => true]);
        $this->assertEquals(
            $updateFields,
            collect(ProgramObject::first())->except('id', 'created_at', 'updated_at', 'deleted_at')->toArray()
        );
    }

    public function test_delete_method()
    {
        $this->withoutMiddleware();
        $objectsToDelete = ProgramObject::factory()->count(3)->create([
            'program_id' => $this->program->id,
            'org_id' => $this->program->org_id
        ]);

        $response = $this->post("/kaprem/object/delete/{$objectsToDelete[2]->id}");

        $response->assertStatus(200);
        $this->assertEquals(ProgramObject::count(), 2);
        $this->assertDatabaseHas('objects', ['id' => 1]);
        $this->assertDatabaseHas('objects', ['id' => 2]);
    }

    public function test_update_object_events()
    {
        $this->withoutMiddleware();

        $fakedObjectFields = ProgramObject::factory()->make([
            'program_id' => $this->program->id,
            'org_id' => $this->program->org_id
        ])->toArray();

        $createdObject = app(ObjectService::class)->create($fakedObjectFields);

        $newEvents = [
            'repairType' => [
                'type_event' => [
                    'id' => '1',
                    'stage' => '1.0',
                    'label' => 'Комплексный кап. ремонт',
                    'value' => '1'
                ], //[1, 2]
                'short_description' => 'some description for repair'
            ],
            'survey' => [
                'technical_survey' => [
                    'id' => '3',
                    'stage' => '2.0',
                    'label' => 'Выполнено',
                    'value' => '0',
                ], //[3, 4]
                'start' => Carbon::create(2020, 1, 21),
                'end' => Carbon::create(2021, 2, 12),
                'cost' => 239483
            ],
            'psd' => [
                'documentation' => [
                    'id' => '5',
                    'stage' => '3.0',
                    'label' => 'Разработана',
                    'value' => '0',
                ], //[5, 6]
                'start' => Carbon::create(2020, 1, 21),
                'end' => Carbon::create(2021, 2, 12),
                'budjet' => 234844,
                'not_budjet' => 495830,
            ],
            'gge' => [
                'conclusion' => [
                    'id' => '7',
                    'stage' => '4.0',
                    'label' => 'Получено заключение ',
                    'value' => '0',
                ], //[7, 8, 9]
                'start' => Carbon::create(2020, 1, 21),
                'end' => Carbon::create(2021, 2, 12),
                'budjet' => 5556,
                'not_budjet' => 4221
            ],
            'smr' => [
                'start' => Carbon::create(2020, 3, 11),
                'end' => Carbon::create(2021, 5, 22),
                'budjet' => 32423,
                'not_budjet' => 23344,
                'short_description' => 'some another description'
            ]
        ];

        $request = $this->post("/kaprem/object/update-events/{$createdObject->id}", $newEvents);

        $request->assertStatus(200);
        $request->assertJson(['Ok' => true]);

        $object = app(ObjectService::class)->get($createdObject->id, ['events']);
        $this->assertEquals($object['events'], $newEvents);
    }
}
