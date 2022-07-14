<?php

namespace App\Helpers\Interfaces;

use Illuminate\Database\Eloquent\Collection;

interface CollectionToWord
{
    public static function generateArrayToWord(Collection $data, int $type = null, string $prefix = null): array;
}
