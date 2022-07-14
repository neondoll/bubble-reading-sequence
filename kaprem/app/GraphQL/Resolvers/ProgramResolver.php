<?php

namespace App\GraphQL\Resolvers;

use App\Models\Program;

class ProgramResolver
{
    public function resolveCanCreateObject(Program $program): bool
    {
        return $program->square != 0 || $program->cost_kaprem != 0;
    }
}