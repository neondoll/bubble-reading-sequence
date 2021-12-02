<?php

namespace App\Models\traits;

trait FindTrashed
{
    public static function active(): \Illuminate\Database\Query\Builder
    {
        return self::whereNull(['deleted_at']);
    }

}
