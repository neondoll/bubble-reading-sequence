<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use app\jwt\Parser;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    protected string $redirectTo = RouteServiceProvider::HOME;

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function loginAuthKey(string $auth_token): \Illuminate\Http\RedirectResponse
    {
        if ($auth_token != "") {
            $parser = new Parser();
            $token = $parser->parse($auth_token);
            $username = $token->claims()->get('login');
            $password = $token->claims()->get('password');
        }
        return response()->redirectTo('/login');
    }

    public function logout(Request $request): \Illuminate\Http\RedirectResponse
    {
        Session::flush();
        Auth::logout();
        Auth::guard('web')->logout();
        return response()->redirectTo('/login');
    }

    protected function sendLoginResponse(Request $request)
    {
        $request->session()->regenerate();

        $this->clearLoginAttempts($request);

        if ($response = $this->authenticated($request, $this->guard()->user())) {
            return $response;
        }

        return response()->json(['success' => true]);
    }

}
