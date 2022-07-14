<?php

namespace App\Http\Controllers;

use Illuminate\Http\Client\HttpClientException;
use Illuminate\Http\Request;
use JetBrains\PhpStorm\ArrayShape;

class SecureController extends Controller
{
    #[ArrayShape(['org_id' => "mixed", 'permissions' => "mixed", 'roles' => "mixed", 'verified' => "bool"])]
    public function getRolesAndPermissions(Request $request): array
    {
        $user = $request->user();
        return [
            'org_id' => $user->org_id,
            'permissions' => $user->allPermissions() ?? [],
            'roles' => $user->roles()->get() ?? ['guest'],
            'verified' => true
        ];
    }

    public function error403()
    {
        abort(403, 'У вас не достаточно прав.');
    }
}
