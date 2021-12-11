<?php

namespace App\Http\Controllers;

use App\Helpers\Classes\ApiHelper;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

use function response;

class ApiController extends Controller
{
    public function iasmon(Request $request)
    {
        $query = $request->input('query');
        $data = ApiHelper::iasmon($query);
        return response()->json($data, 200);
    }

    public function estate(Request $request): JsonResponse
    {
        $query = $request->input('query');
        $data = ApiHelper::estate($query);
        return response()->json($data, 200);
    }
}
