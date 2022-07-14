<?php

namespace App\Http\Controllers;

use App\Models\Subsidy;
use App\Models\SubsidyScheduleEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Throwable;

class SubsidyScheduleEventController extends Controller
{
    /**
     * @param Request $request
     * @param string $code
     * @param int $subsidy_id
     * @param int $type
     * @return mixed
     * @throws Throwable
     */
    public function edit(Request $request, string $code, int $subsidy_id, int $type): mixed
    {
        return DB::transaction(function () use ($request, $code, $subsidy_id, $type) {
            $form = json_decode($request->post('form'), true);
            $subsidy = Subsidy::whereId($subsidy_id)->where('code', $code)->first();
            $event = SubsidyScheduleEvent::updateOrCreate([
                'subsidy_id' => $subsidy->id,
                'type' => $type
            ], self::values($form));
            return json_encode(['success' => true, 'item' => $event]);
        });
    }

    /**
     * @param $form
     * @return array
     */
    private static function values($form): array
    {
        $fields = ['budget_funding', 'date_end', 'date_start', 'offbudget_funding', 'title'];
        $values = [];
        foreach ($form as $key => $value) {
            if (in_array($key, $fields)) {
                $values[$key] = $value;
            }
        }
        return $values;
    }
}
