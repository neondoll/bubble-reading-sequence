<?php

namespace App\GraphQL\Queries;

use App\Models\FileList as model;

class FileList
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args): \Illuminate\Database\Eloquent\Collection|array
    {
        return model::whereType($args['type'])->get();
    }
}
