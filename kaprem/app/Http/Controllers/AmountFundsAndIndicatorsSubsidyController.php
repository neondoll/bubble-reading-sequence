<?php

namespace App\Http\Controllers;

use App\Models\AmountFundsAndIndicatorsSubsidy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Throwable;

class AmountFundsAndIndicatorsSubsidyController extends Controller
{
    /**
     * @param Request $request
     * @param int $organization_id
     * @return mixed
     * @throws Throwable
     */
    public function edit(Request $request, int $organization_id): mixed
    {
        return DB::transaction(function () use ($request, $organization_id) {
            $form = json_decode($request->post('form'), true);
            $afis = AmountFundsAndIndicatorsSubsidy::updateOrCreate(['organization_id' => $organization_id], self::values($form));
            return json_encode(['success' => true]);
        });
    }

    /**
     * @param $form
     * @return array
     */
    private static function values($form): array
    {
        $fields = (new AmountFundsAndIndicatorsSubsidy())->fillable;
        array_splice($fields, array_search('organization_id', $fields), 1);
        $values = [];
        foreach ($form as $key => $value) {
            if (in_array($key, $fields)) {
                $values[$key] = $value;
            }
        }
        return $values;
    }
}
