<?php

namespace App\Models\traits;

use Illuminate\Database\Query\Builder;

trait FindTrashed
{
    public static function active(): Builder
    {
        return self::whereNull(['deleted_at']);
    }
}
