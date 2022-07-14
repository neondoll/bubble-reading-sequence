<?php

namespace App\Http\Controllers;

use App\Helpers\Traits\FileTrait;
use App\Models\Subsidy;
use App\Models\SubsidyFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Throwable;

class SubsidyFileController extends Controller
{
    use FileTrait;

    /**
     * @param Request $request
     * @param string $code
     * @param int $subsidy_id
     * @return mixed
     * @throws Throwable
     */
    public function add(Request $request, string $code, int $subsidy_id): mixed
    {
        return DB::transaction(function () use ($request, $code, $subsidy_id) {
            $file = $request->file('file');
            $form = json_decode($request->post('form'), true);
            $subsidy = Subsidy::whereId($subsidy_id)->where('code', $code)->first();
            $fileSaved = SubsidyFile::create(array_merge([
                'subsidy_id' => $subsidy->id
            ], self::values($form), self::valuesFile($file)));
            $file->storeAs("public/subsidies/files", "{$fileSaved->name}_$fileSaved->id.$fileSaved->extension");
            return json_encode(['success' => true, 'item' => $fileSaved]);
        });
    }

    /**
     * @param Request $request
     * @param string $code
     * @param int $subsidy_id
     * @param int $id
     * @return mixed
     * @throws Throwable
     */
    public function delete(Request $request, string $code, int $subsidy_id, int $id): mixed
    {
        return DB::transaction(function () use ($request, $code, $subsidy_id, $id) {
            $file = SubsidyFile::whereId($id)->where('subsidy_id', $subsidy_id)->first();
            $file->delete();
            return json_encode(['success' => true]);
        });
    }

    /**
     * @param Request $request
     * @param string $code
     * @param int $subsidy_id
     * @param int $id
     * @return StreamedResponse
     */
    public function download(Request $request, string $code, int $subsidy_id, int $id): StreamedResponse
    {
        $file = SubsidyFile::whereId($id)->where('subsidy_id', $subsidy_id)->first();
        return Storage::download("public/subsidies/files/{$file->name}_$file->id.$file->extension", "$file->name.$file->extension");
    }

    /**
     * @param $form
     * @return array
     */
    private static function values($form): array
    {
        $fields = ['title', 'type'];
        $values = [];
        foreach ($form as $key => $value) {
            if (in_array($key, $fields)) {
                $values[$key] = $value;
            }
        }
        return $values;
    }
}
