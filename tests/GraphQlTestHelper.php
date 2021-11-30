<?php

namespace Tests;

use Illuminate\Testing\TestResponse;

trait GraphQlTestHelper
{
    public function graphql(string $query): TestResponse
    {
        return $this->post('/graphql', [
            'query' => $query
        ]);
    }
}
