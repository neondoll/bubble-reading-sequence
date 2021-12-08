<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use function response;

class ApiController extends Controller
{
    private static string $accessToken = "23498jfskduespq0";

    public function iasmon(Request $request) {
        $query = $request->input('query');

        $http = Http::post("https://api-ias.xn--80apneeq.xn--p1ai/graphql", [
            'query' => $query
        ]);

        $data = json_decode($http->body(), true);

        return response()->json($data, 200);
    }

    public function estate(Request $request): JsonResponse
    {
        $query = $request->input('query');

        $http = Http::post("https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/api/graph?access-token=" . self::$accessToken, [
            'query' => $query
        ]);

        $data = json_decode($http->body(), true);

        return response()->json($data, 200);
    }

}
