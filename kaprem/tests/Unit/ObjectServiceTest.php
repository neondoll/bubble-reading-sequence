<?php

namespace Tests\Unit;

use App\Helpers\Classes\ObjectService;
use App\Models\ObjectStatus;
use App\Models\Organization;
use App\Models\Program;
use App\Models\ProgramObject;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ObjectServiceTest extends TestCase
{
    use RefreshDatabase;

    public Program $program;

    protected function setUp(): void
    {
        parent::setUp();

        $organization = Organization::factory()->create();
        $this->program = Program::factory()->create([
            'org_id' => $organization->id
        ]);
    }

    public function test_object_creates()
    {
        $fakedObjectFields = ProgramObject::factory()->make([
            'program_id' => $this->program->id,
            'org_id' => $this->program->org_id
        ])->toArray();

        $service = app(ObjectService::class);
        $newObject = $service->create($fakedObjectFields);

        $this->assertEquals(1, ProgramObject::count());
        $this->assertArrayHasKey('id', $newObject);
        $this->assertInstanceOf(ProgramObject::class, $newObject);
        $this->assertEquals(
            array_merge($fakedObjectFields, ['id' => $newObject->id]),
            collect($newObject->toArray())->except(['created_at', 'updated_at'])->toArray()
        );

        $createdStatus = ObjectStatus::where('object_id', $newObject->id)->first();
        $this->assertNotNull($createdStatus);
        $this->assertEquals($createdStatus->mgsu_status_id, 1);
    }

    public function test_object_updates()
    {
        $object = ProgramObject::factory()->create([
            'program_id' => $this->program->id,
            'org_id' => $this->program->org_id
        ]);

        $updateFields = [
            'name' => 'Some cool name',
            'city' => 'Cupertino',
            'wear' => 1
        ];

        $service = app(ObjectService::class);
        $isObjectUpdated = $service::updateObject($object->id, $updateFields);
        $objectFromDB = ProgramObject::find($object->id);

        $this->assertEquals($isObjectUpdated, true);
        $this->assertEquals($updateFields['name'], $objectFromDB->name);
        $this->assertEquals($updateFields['city'], $objectFromDB->city);
        $this->assertEquals($updateFields['wear'], $objectFromDB->wear);
    }

    public function test_object_deletes()
    {
        $object = ProgramObject::factory()->create([
            'program_id' => $this->program->id,
            'org_id' => $this->program->org_id
        ]);

        $service = app(ObjectService::class);
        $isObjectDeleted = $service->delete($object->id);

        $this->assertEquals($isObjectDeleted, true);
        $this->assertEquals(ProgramObject::count(), 0);
    }

    public function test_update_object_status_ok()
    {
        $fakedObjectFields = ProgramObject::factory()->make([
            'program_id' => $this->program->id,
            'org_id' => $this->program->org_id
        ])->toArray();
        $generatedObject = app(ObjectService::class)->create($fakedObjectFields);


        $service = app(ObjectService::class, ['object_id' => $generatedObject->id]);
        $service->updateDepStatus(2);
        $service->updateMgsuStatus(3);

        $status = ObjectStatus::where('object_id', $generatedObject->id)->first();

        $this->assertEquals($status->dep_status_id, 2);
        $this->assertEquals($status->mgsu_status_id, 3);
    }

    // public function test_update_object_status_ok()
}
