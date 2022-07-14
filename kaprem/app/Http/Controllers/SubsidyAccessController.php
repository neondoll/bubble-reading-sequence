<?php

namespace App\Http\Controllers;

use App\Models\SubsidyAccess;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Throwable;

class SubsidyAccessController extends Controller
{
    /**
     * @param Request $request
     * @param string $code
     * @return mixed
     * @throws Throwable
     */
    public function sync(Request $request, string $code): mixed
    {
        return DB::transaction(function () use ($request, $code) {
            $organizations_id = json_decode($request->post('organizations_id'));
            foreach (SubsidyAccess::withTrashed()->whereCode($code)->get() as $access) {
                if (in_array($access->organization_id, $organizations_id)) {
                    $access->restore();
                } else {
                    $access->delete();
                }
            }
            foreach ($organizations_id as $organization_id) {
                SubsidyAccess::firstOrCreate(['code' => $code, 'organization_id' => $organization_id]);
            }
            return json_encode(['success' => true]);
        });
    }
}
