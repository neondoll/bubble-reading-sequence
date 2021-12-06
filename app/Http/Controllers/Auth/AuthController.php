<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(['success' => Auth::user() != null]);
    }
}
