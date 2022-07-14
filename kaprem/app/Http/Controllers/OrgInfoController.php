<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use App\Models\OrgInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class OrgInfoController extends Controller
{
    public function saveInfo(Request $request)
    {
        OrgInfo::updateOrCreate(['program_id' => $request->query('program_id')], $request->all());
        return response()->json(['success' => true]);
    }

    public function getColumns($org_id)
    {
        return OrgInfo::$columns[(int)Organization::find($org_id)->isNauch()];
    }
}
