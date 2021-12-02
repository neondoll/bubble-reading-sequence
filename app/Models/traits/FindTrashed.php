<?php

namespace App\Models\traits;

trait FindTrashed
{
    public static function active()
    {
        return self::whereNull(['deleted_at']);
    }

}
