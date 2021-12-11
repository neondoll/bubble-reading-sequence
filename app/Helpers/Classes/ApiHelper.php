<?php

namespace App\Helpers\Classes;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;

class ApiHelper
{
    private static string $accessToken = "23498jfskduespq0";

    public static function iasmon($query)
    {
        $http = Http::post("https://api-ias.xn--80apneeq.xn--p1ai/graphql", [
            'query' => $query
        ]);

        return json_decode($http->body(), true);
    }

    public static function estate($query): JsonResponse
    {
        $http = Http::post(
            "https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/api/graph?access-token=" . self::$accessToken,
            ['query' => $query]
        );

        return json_decode($http->body(), true);
    }
}
