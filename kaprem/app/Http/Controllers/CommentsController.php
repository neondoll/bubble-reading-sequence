<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Models\CommentFile;
use App\Models\ObjectComments;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class CommentsController extends Controller
{
    public function index(Request $request)
    {
        return ObjectComments::with(['user', 'files'])
            ->where('obj_id', $request->query('obj_id'))->get();
    }

    /**
     * @throws \Throwable
     */
    public function save(CommentRequest $request)
    {
        return DB::transaction(function () use ($request) {
            $msg = $request->post('msg');

            $obj_id = $request->post('obj_id');

            $model = ObjectComments::create(['msg' => $msg, 'obj_id' => $obj_id, 'user_id' => $request->user()->id]);

            if ($request->hasFile('file')) {
                $file = $request->file('file');
                $file->store("public/object/{$obj_id}/comments");
                $model->files()->create([
                    'server_name' => $file->hashName(),
                    'name' => $file->getClientOriginalName(),
                    'size' => $file->getSize()
                ]);
            }
            return response()->json(['success' => true]);
        });
    }

    public function delete(Request $request)
    {
        $id = $request->query('id');

        ObjectComments::whereId($id)->first()->delete();
    }

    public function download($id)
    {
        $file = CommentFile::whereId($id)->first();

        $path = Storage::path("public/object/{$file->comment->obj_id}/comments/{$file->server_name}");

        return response()->download($path, $file->name);
    }
}
