<?php

namespace App\Http\Controllers;

use App\Models\Subsidy;
use App\Models\SubsidyStage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SubsidyStageController extends Controller
{
    /**
     * @param Request $request
     * @param string $code
     * @param string $subsidy_id
     * @return mixed
     */
    public function add(Request $request, string $code, int $subsidy_id): mixed
    {
        return DB::transaction(function () use ($request, $code, $subsidy_id) {
            $form = json_decode($request->post('form'), true);
            $subsidy = Subsidy::whereId($subsidy_id)->where('code', $code)->first();
            $stage = SubsidyStage::create(array_merge([
                'name' => $form['name'],
                'subsidy_id' => $subsidy->id
            ], self::values($form)));
            return json_encode(['success' => true]);
        });
    }

    /**
     * @param Request $request
     * @param string $code
     * @param int $subsidy_id
     * @param int $id
     * @return mixed
     */
    public function edit(Request $request, string $code, int $subsidy_id, int $id): mixed
    {
        return DB::transaction(function () use ($request, $code, $subsidy_id, $id) {
            $form = json_decode($request->post('form'), true);
            $subsidy = Subsidy::whereId($subsidy_id)->where('code', $code)->first();
            $stage = SubsidyStage::updateOrCreate([
                'name' => $form['name'],
                'subsidy_id' => $subsidy->id
            ], self::values($form));
            return json_encode(['success' => true]);
        });
    }

    /**
     * @param $form
     * @return array
     */
    private static function values($form): array
    {
        $fields = ['begin_date', 'final_date', 'finansee', 'is_nessesary', 'kap_coast', 'realization_cost'];
        $values = [];
        foreach ($form as $key => $value) {
            if (in_array($key, $fields)) {
                $values[$key] = $value;
            }
        }
        return $values;
    }
}
