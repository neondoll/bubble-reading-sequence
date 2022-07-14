<?php

namespace App\GraphQL\Queries;

use App\Models\Program as ProgramModel;

class Program
{
    /**
     * @param null $_
     * @param array<string, mixed> $args
     */
    public function __invoke($_, array $args): ProgramModel|null
    {

        $query = ProgramModel::query();

        if (isset($args['id'])) {
            $query = ProgramModel::whereId($args['id']);
        }
        if (isset($args['org_id'])) {
            $query = ProgramModel::whereOrgId($args['org_id']);
        }
        return $query->first();
    }
}
