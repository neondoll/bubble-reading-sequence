<?php

namespace App\Http\Controllers;

use App\Models\Subsidy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Throwable;

class SubsidyController extends Controller
{
    /**
     * @param Request $request
     * @param string $code
     * @return mixed
     * @throws Throwable
     */
    public function add(Request $request, string $code): mixed
    {
        return DB::transaction(function () use ($request, $code) {
            $form = json_decode($request->post('form'), true);
            $subsidy = Subsidy::create(array_merge(self::values($form), [
                'code' => $code,
                'organization_id' => $request->user()->org_id,
                'status_id' => 1
            ]));
            return json_encode(['success' => true, 'id' => $subsidy->id]);
        });
    }

    /**
     * @param Request $request
     * @param string $code
     * @param int $id
     * @return mixed
     * @throws Throwable
     */
    public function delete(Request $request, string $code, int $id): mixed
    {
        return DB::transaction(function () use ($request, $code, $id) {
            $subsidy = Subsidy::whereId($id)
                ->where('code', $code)
                ->where('organization_id', $request->user()->org_id)
                ->first();
            $subsidy->delete();
            return json_encode(['success' => true, 'id' => $subsidy->id]);
        });
    }

    /**
     * @param Request $request
     * @param string $code
     * @param int $id
     * @return mixed
     * @throws Throwable
     */
    public function edit(Request $request, string $code, int $id): mixed
    {
        return DB::transaction(function () use ($request, $code, $id) {
            $form = json_decode($request->post('form'), true);
            $subsidy = Subsidy::updateOrCreate(['code' => $code, 'id' => $id], self::values($form));
            return json_encode(['success' => true, 'id' => $subsidy->id]);
        });
    }

    /**
     * @param Request $request
     * @param string $code
     * @param int $id
     * @param int $status_id
     * @return mixed
     * @throws Throwable
     */
    public function setStatus(Request $request, string $code, int $id, int $status_id): mixed
    {
        return DB::transaction(function () use ($request, $code, $id, $status_id) {
            $subsidy = Subsidy::updateOrCreate(['code' => $code, 'id' => $id], ['status_id' => $status_id]);
            return json_encode(['success' => true, 'item' => $subsidy->status]);
        });
    }

    /**
     * @param $form
     * @return array
     */
    private static function values($form): array
    {
        $fields = (new Subsidy)->fillable;
        array_splice($fields, array_search('code', $fields), 1);
        $values = [];
        foreach ($form as $key => $value) {
            if (in_array($key, $fields)) {
                $values[$key] = $value;
            }
        }
        return $values;
    }
}
