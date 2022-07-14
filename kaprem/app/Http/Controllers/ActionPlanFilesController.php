<?php

namespace App\Http\Controllers;

use App\Models\ActionPlanFile;
use DB;
use Illuminate\Http\Request;

class ActionPlanFilesController extends Controller
{
    //вынести в сервисы всю логику
    public function saveFile(Request $request)
    {
        $actionFile = DB::transaction(function () use ($request) {
            $file = $request->file('file');
            $objectId = $request->post('objectId');

            $action = ActionPlanFile::create([
                'obj_id' => $objectId,
                'stage_id' => $request->post('stageId'),
                'file_list_name' => $request->post('fileListName'),
                'file_name' => $file->getClientOriginalName(),
                'server_name' => $file->hashName(),
                'approved_by_expert' => false
            ]);

            $path = "public/object/{$objectId}/actionFiles";
            $file->store($path);

            return $action->toArray();
        });

        return response()->json(['Ok' => true, 'file' => $actionFile]);
    }

    public function deleteFile(Request $request)
    {
        $actionFile = ActionPlanFile::find($request->post('fileId'));
        $path = storage_path("app/public/object/{$actionFile->obj_id}/actionFiles/{$actionFile->server_name}");

        if ($withFile = file_exists($path))
            unlink($path);

        $actionFile->delete();

        return response()->json(['Ok' => true, 'withFile' => $withFile]);
    }

    public function download(int $id)
    {
        $actionFile = ActionPlanFile::find($id);


        $path = storage_path("app/public/object/{$actionFile->obj_id}/actionFiles/{$actionFile->server_name}");

        if (file_exists($path))
            return response()->download($path);
    }

    public function approve(int $id)
    {
        $actionFile = ActionPlanFile::find($id);
        $actionFile->approved_by_expert = !$actionFile->approved_by_expert;

        return response()->json(['Ok' => $actionFile->save()]);
    }
}
