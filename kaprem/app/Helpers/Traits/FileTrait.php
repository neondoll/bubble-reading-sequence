<?php

namespace App\Helpers\Traits;

use Illuminate\Http\UploadedFile;
use JetBrains\PhpStorm\ArrayShape;

trait FileTrait
{
    #[ArrayShape(['extension' => "string", 'name' => "array|string|string[]", 'size' => "false|int"])]
    private static function valuesFile(UploadedFile $file): array
    {
        return [
            'extension' => $file->getClientOriginalExtension(),
            'name' => pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME),
            'size' => $file->getSize()
        ];
    }
}
