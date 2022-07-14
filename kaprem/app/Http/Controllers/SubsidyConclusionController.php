<?php

namespace App\Http\Controllers;

use App\Helpers\Traits\FileTrait;
use App\Models\Subsidy;
use App\Models\SubsidyConclusion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Throwable;

class SubsidyConclusionController extends Controller
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
            $conclusion = SubsidyConclusion::create(array_merge([
                'subsidy_id' => $subsidy->id
            ], self::values($form), self::valuesFile($file)));
            $file->storeAs("public/subsidies/conclusions", "{$conclusion->name}_$conclusion->id.$conclusion->extension");
            return json_encode(['success' => true, 'item' => $conclusion]);
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
            $conclusion = SubsidyConclusion::whereId($id)->where('subsidy_id', $subsidy_id)->first();
            $conclusion->delete();
            return json_encode(['success' => true]);
        });
    }

    /**
     * @param Request $request
     * @param int $id
     * @return StreamedResponse
     */
    public function download(Request $request, int $id): StreamedResponse
    {
        $file = SubsidyConclusion::whereId($id)->first();
        return Storage::download("public/subsidies/conclusions/{$file->name}_$file->id.$file->extension", "$file->name.$file->extension");
    }

    /**
     * @param $form
     * @return array
     */
    private static function values($form): array
    {
        $fields = ['comment', 'note'];
        $values = [];
        foreach ($form as $key => $value) {
            if (in_array($key, $fields)) {
                $values[$key] = $value;
            }
        }
        return $values;
    }
}
