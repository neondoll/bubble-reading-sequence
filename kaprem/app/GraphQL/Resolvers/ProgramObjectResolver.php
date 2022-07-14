<?php

namespace App\GraphQL\Resolvers;

use App\Models\ProgramObject;

class ProgramObjectResolver
{
    public function resolveTotalFinance(ProgramObject $programObject)
    {
        return $programObject->finance_sum;
    }

    public function resolveTotalCoFinance(ProgramObject $programObject)
    {
        return $programObject->co_finance;
    }
}