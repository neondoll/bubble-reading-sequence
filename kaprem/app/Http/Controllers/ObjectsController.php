<?php

namespace App\Http\Controllers;

use App\Helpers\Classes\ObjectService;
use App\Http\Requests\ObjectRequest;
use App\Http\Requests\ObjEventRequest;
use App\Http\Requests\ObjFileRequest;
use App\Models\ObjectActivity;
use App\Models\ObjectEvent;
use App\Models\ObjectEventFile;
use App\Models\ObjectEventReal;
use App\Models\ObjectFile;
use App\Models\ObjectStatus;
use App\Models\ObjectWaited;
use App\Models\ObjStatus;
use App\Models\Program;
use App\Models\ProgramObject;
use App\Rules\FloatRule;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Gate;
use SplFileInfo;
use Str;
use ZipArchive;

class ObjectsController extends Controller
{
    public function __construct(
        private ObjectService $service
    ) {
    }

    public function uploadFile(ObjFileRequest $request)
    {
        try {
            $data = $request->post();
            $file = $request->file('file');
            $savedFile =  $this->service->saveDocumentFile($data['objectId'], $data, $file);

            return response()->json(array_merge(['Ok' => true], $savedFile));
        } catch (Exception $e) {
            return response()->json(['Ok' => false], 400);
        }
    }

    public function deleteFile(Request $request)
    {
        try {
            $file = ObjectFile::find($request->post('id'));
            $pathToFile = storage_path("app/public/object/{$file->obj_id}/files/{$file->server_name}");
            $file->delete();

            if ($fileDeleted = file_exists($pathToFile))
                unlink($pathToFile);

            return response()->json(['Ok' => true, 'withFile' => $fileDeleted]);
        } catch (Exception $e) {
            return response()->json(['Ok' => false], 400);
        }
    }

    public function deleteEventFile(Request $request)
    {
        $id = $request->query('id');
        ObjectEventFile::find($id)->delete();
    }

    public function downloadEventFile($id)
    {
        return ObjectEventFile::find($id)->download();
    }

    public function saveEvent(ObjEventRequest $request)
    {
        return DB::transaction(function () use ($request) {
            $obj_id = $request->query('obj_id');
            $id = $request->query('id');

            $data = $request->all();
            $data['obj_id'] = $obj_id;
            //$data['type'] = null;
            $data['type'] = json_decode($data['type'] ?? null, true);
            $data['p01'] = (isset($data['p01']) && ($data['p01'] == true or $data['p01'] == 'true')) ? 1 : 0;
            $data['exp_mon'] = (isset($data['exp_mon']) && ($data['exp_mon'] == true or $data['exp_mon'] == 'true')) ? 1 : 0;
            //dd($data);
            $data['type_id'] = $data['type']['id'] ?? null;

            $model = ObjectEvent::updateOrCreate(['id' => $id], $data);
            $model->setFile($request);


            return response()->json(['id' => $model->id]);
        });
    }

    public function deleteEvent(Request $request)
    {
        ObjectEvent::find($request->post('id'))?->delete();
    }

    public function saveActivities(Request $request)
    {
        $data = json_decode($request->post('data'), true);

        foreach ($data as $item) {
            $d = array_filter($item, function ($key) {
                return $key !== 'id';
            }, ARRAY_FILTER_USE_KEY);
            $d['obj_id'] = $d['obj_id'] ?? $request->query('obj_id');


            ObjectActivity::updateOrCreate(['id' => $item['id'] ?? null], $d);
        }
    }

    public function getObjectsByProgram(int $programId)
    {
        $objects = Program::findOrFail($programId)?->objects;

        $constructedObjects = [];
        foreach ($objects as $object) {
            $constructedObjects[] = $this->service->get($object->id, with: ['events', 'waited', 'activities', 'files', 'filelist', 'actionPlanFiles']);
        }

        return response()->json($constructedObjects);
    }

    public function getObject(int $objectId)
    {
        $object = $this->service->get($objectId, with: ['events', 'waited', 'activities', 'files', 'filelist', 'actionPlanFiles']);

        return response()->json($object);
    }

    public function updateEvents(ObjEventRequest $request, int $objectId)
    {
        $areEventsUpdated = $this->service->updateObjectEvents($objectId, $request->all());

        return response()->json(['Ok' => $areEventsUpdated]);
    }

    public function create(ObjectRequest $request)
    {
        $model = $this->service::createObject($request->all());

        return response()->json($model, 201);
    }

    public function update(ObjectRequest $request, int $object_id)
    {
        $isObjectUpdated = $this->service::updateObject($object_id, $request->all());

        return response()->json(['Ok' => $isObjectUpdated]);
    }

    public function delete(int $object_id)
    {
        $isDeleted = $this->service->delete($object_id);

        return response()->json(['Ok' => $isDeleted]);
    }

    public function saveWaited(Request $request)
    {
        $data = json_decode($request->post('data'), true);

        foreach ($data as $item) {
            $d = array_filter($item, function ($key) {
                return $key !== 'id';
            }, ARRAY_FILTER_USE_KEY);
            $d['obj_id'] = $d['obj_id'] ?? $request->query('obj_id');
            //dd($item,$d);


            ObjectWaited::updateOrCreate(['id' => $item['id'] ?? null], $d);
        }
    }

    public function setDepStatus(Request $request)
    {
        $id = $request->post('id');
        $status = $request->post('status');
        $data = ['dep_status_id' => $status];
        ProgramObject::setStatusData($id, $data);
    }

    public function setObjStatus(Request $request)
    {
        $id = $request->post('id');
        $status = $request->post('status');
        $data = ['mgsu_status_id' => $status];
        ProgramObject::setStatusData($id, $data);
    }

    public function setDateStep(Request $request)
    {
        $id = $request->post('id');
        $date = $request->post('date');
        $data = ['step_date' => $date];
        ProgramObject::setStatusData($id, $data);
    }

    public function downloadFile(int $objectId, string $serverFileName)
    {
        $path = storage_path("app/public/object/{$objectId}/files/{$serverFileName}");

        if (file_exists($path)) return response()->download($path);
    }

    public function getUserPermissions(Request $request)
    {
        if (Auth::user()->hasRole(['admin', 'mon', 'mgsu'])) return response()->json(['Ok' => true, 'canEdit' => true]);
        if (Auth::user()->hasRole('user')) {
            return response()->json([
                'Ok' => true,
                'canEdit' => Gate::check('can-edit-object', [$request->post('objectId')])
            ]);
        }
        return response()->json(['Ok' => false]);
    }

    public function approve(Request $request)
    {
        try {
            $isObjectApproved = $this->service->approve($request->post('objectId'));

            return response()->json(['Ok' => $isObjectApproved]);
        } catch (Exception $e) {
            return response()->json(['Ok' => false], 200);
        }
    }

    public function sendToRealization(Request $request)
    {
        try {
            $isObjectSendToRealization = $this->service->sendToRealization($request->post('objectId'));

            return response()->json(['Ok' => $isObjectSendToRealization], 200);
        } catch (Exception $e) {
            return response()->json(['Ok' => false], 200);
        }
    }

    public function downloadZip(Request $request)
    {
        try {
            $objectId = $request->post('objectId');

            $objectFiles = ProgramObject::findOrFail($objectId)?->files;
            $zipFileName = Str::random() . '.zip';

            if (!file_exists(storage_path("app/temporary"))) {
                File::makeDirectory(storage_path("app/temporary"));
            }

            $zipFilePath = storage_path("app/temporary/{$zipFileName}");
            $zip = new ZipArchive();

            if ($zip->open($zipFilePath, ZipArchive::CREATE) === true) {

                foreach ($objectFiles as $fileInfo) {
                    $zip->addFile(
                        storage_path("app/public/object/{$fileInfo->obj_id}/files/{$fileInfo->server_name}"),
                        ($fileInfo->name) . '_' . Str::random('4') . "." . (new SplFileInfo($fileInfo->name))->getExtension()
                    );
                }

                $zip->close();
            }

            $headers = ['Content-Type' => 'application/octet-stream'];
            if (file_exists($zipFilePath)) {
                return response()->download($zipFilePath, "Объект {$objectId}.zip", $headers)->deleteFileAfterSend();
            }
        } catch (Exception $e) {
            return response()->json(['Ok' => false]);
        }
    }
}
