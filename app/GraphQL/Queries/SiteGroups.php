<?php

namespace App\GraphQL\Queries;

use App\Models\SiteGroup;
use Illuminate\Database\Eloquent\Collection;

class SiteGroups
{
    /**
     * @param null $_
     * @param array<string, mixed> $args
     */
    public function __invoke($_, array $args): Collection|array
    {
        $query = SiteGroup::query();

        $where = $args["where"] ?? [];

        foreach ($where as $key => $w) {
            switch ($key) {
                case "text":
                {
                    $query->where("title", "like", "%$w%");
                    break;
                }
                default:
                {
                    $query->where($key, "like", "%$w%");
                }
            }
        }

        return $query->get();
    }
}
