<?php

namespace App\Helpers\Classes\ObjectMutators;

use App\Helpers\Interfaces\ObjectDocumentMutatorContract;
use App\Helpers\Interfaces\ObjectModelInterface;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;

class ObjectDocumentMutator implements ObjectDocumentMutatorContract
{
    public function saveDocumentFile(ObjectModelInterface $model, array $data, UploadedFile $file): array
    {
        return DB::transaction(function () use ($model, $data, $file) {
            $document = $model->files()->create([
                'obj_id' => $model->id,
                'list_id' => $data['fileListItemId'],
                'server_name' => $file->hashName(),
                'name' => $file->getClientOriginalName()
            ]);

            $path = "public/object/{$model->id}/files";
            $file->store($path);

            return $document->toArray();
        });
    }
}
