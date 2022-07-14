<?php

namespace App\Http\Controllers;

use App\Models\Subsidy;
use App\Models\SubsidyNeedJustification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SubsidyNeedJustificationController extends Controller
{
    /**
     * @param Request $request
     * @param string $code
     * @param int $subsidy_id
     * @return mixed
     */
    public function add(Request $request, string $code, int $subsidy_id): mixed
    {
        return DB::transaction(function () use ($request, $code, $subsidy_id) {
            $form = json_decode($request->post('form'), true);
            $subsidy = Subsidy::whereId($subsidy_id)->where('code', $code)->first();
            $need_justification = SubsidyNeedJustification::create(array_merge([
                'subsidy_id' => $subsidy->id
            ], self::values($form)));
            return json_encode(['success' => true, 'item' => $need_justification]);
        });
    }

    /**
     * @param Request $request
     * @param string $code
     * @param int $subsidy_id
     * @param int $id
     * @return mixed
     */
    public function delete(Request $request, string $code, int $subsidy_id, int $id): mixed
    {
        return DB::transaction(function () use ($request, $code, $subsidy_id, $id) {
            $need_justification = SubsidyNeedJustification::whereId($id)
                ->where('subsidy_id', $subsidy_id)
                ->first();
            $need_justification->delete();
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
            $need_justification = SubsidyNeedJustification::updateOrCreate([
                'id' => $id,
                'subsidy_id' => $subsidy->id
            ], self::values($form));
            return json_encode(['success' => true, 'item' => $need_justification]);
        });
    }

    /**
     * @param $form
     * @return array
     */
    private static function values($form): array
    {
        $fields = ['building_construction_id', 'is_kap_remont', 'material', 'obosnovanie', 'srok_eks'];
        $values = [];
        foreach ($form as $key => $value) {
            if (in_array($key, $fields)) {
                $values[$key] = $value;
            }
        }
        return $values;
    }
}
