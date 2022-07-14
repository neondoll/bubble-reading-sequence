<?php

namespace App\GraphQL\Queries;

use Illuminate\Support\Facades\DB;

class AdminFilter
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        DB::enableQueryLog();
        $page = $args['pagination']['page'];
        $limit = $args['pagination']['first'];
        $offset = ($page - 1) * $limit;

        $type = $args['where']['type'];

        $query = \App\Models\Program::query();

        if ($type == 'vus') {
            $query->whereHas('org', function ($q) {
                return $q->whereNotIn('type_id', [7, 9, 10]);
            });
        } else {
            $query->whereHas('org', function ($q) {
                return $q->whereIn('type_id', [7, 9, 10]);
            });
        }

        $paginatorInfo = [
            'count' => $query->count(),
            'page' => $page
        ];

        if ($limit !== -1) {
            $query->limit($limit)->offset($offset);
        }

        $data = $query->get()->map(function ($item) {
            return [
                'org_id' => $item->org_id,
                'org_name' => $item->org->name,
                'region' => $item->org->region?->region,
                'file' => $item->file,
                'sent' => $item->sent,
                'inn' => $item->org->inn
            ];
        });

        //   dd(DB::getQueryLog());

        return compact('data', 'paginatorInfo');
    }
}
