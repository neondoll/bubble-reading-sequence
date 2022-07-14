<?php

namespace App\Http\Controllers;

use App\Models\Subsidy;
use App\Models\SubsidyExpectedResult;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Throwable;

class SubsidyExpectedResultController extends Controller
{
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
            $form = json_decode($request->post('form'), true);
            $subsidy = Subsidy::whereId($subsidy_id)->where('code', $code)->first();
            $result = SubsidyExpectedResult::create(array_merge([
                'subsidy_id' => $subsidy->id
            ], self::values($form)));
            return json_encode(['success' => true, 'item' => $result]);
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
            $result = SubsidyExpectedResult::whereId($id)->where('subsidy_id', $subsidy_id)->first();
            $result->delete();
            return json_encode(['success' => true]);
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
    public function edit(Request $request, string $code, int $subsidy_id, int $id): mixed
    {
        return DB::transaction(function () use ($request, $code, $subsidy_id, $id) {
            $form = json_decode($request->post('form'), true);
            $subsidy = Subsidy::whereId($subsidy_id)->where('code', $code)->first();
            $result = SubsidyExpectedResult::updateOrCreate([
                'id' => $id,
                'subsidy_id' => $subsidy->id
            ], self::values($form));
            return json_encode(['success' => true, 'item' => $result]);
        });
    }

    /**
     * @param $form
     * @return array
     */
    private static function values($form): array
    {
        $fields = ['goal', 'indicator', 'unit'];
        $values = [];
        foreach ($form as $key => $value) {
            if (in_array($key, $fields)) {
                $values[$key] = $value;
            }
        }
        return $values;
    }
}
