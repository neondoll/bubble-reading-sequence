<?php

namespace App\GraphQL\Queries;

use Illuminate\Support\Facades\Http;

class RealEstate
{
    /**
     * @param null $_
     * @param array<string, mixed> $args
     */
    public function __invoke($_, array $args): array
    {
        $response = Http::post(
            'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/api/graph?access-token=23498jfskduespq0',
            [
                'query' => "{realEstates(id_org:{$args['id_org']}){id,objectFactAddress,object_name}}"
            ]
        );

        return array_map(function ($item) {
            return [
                'id' => $item['id'],
                'adr' => $item['objectFactAddress'],
                'name' => $item['object_name']
            ];
        }, $response->json()['data']['realEstates']);
    }
}
