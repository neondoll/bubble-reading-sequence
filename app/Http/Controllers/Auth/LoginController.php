<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\Classes\ApiHelper;
use App\Helpers\Jwt\Parser;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    protected string $redirectTo = RouteServiceProvider::HOME;

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function loginAuthToken(Request $request): \Illuminate\Http\RedirectResponse
    {
        $auth_token = $request->route('auth_token');
        if ($auth_token != "") {
            $parser = new Parser();
            $token = $parser->parse($auth_token);
            $login = $token->claims()->get('login');
            $password = $token->claims()->get('password');
            $query = "{ user(login: \"$login\") { id, name, login, status, pwd } }";
            $data = ApiHelper::iasmon($query);
            if (in_array('data', array_keys($data)) && in_array('user', array_keys($data['data']))) {
                $user = $data['data']['user'];
                if ($user['login'] == $login && $user['pwd'] == $password) {
                    $updateUser = User::updateOrCreate(['email' => $login], [
                        'name' => $user['name'],
                        'password' => Hash::make($password),
                        'auth_key' => $auth_token
                    ]);
                    if ((int)$user['status'] == 1) {
                        if ($updateUser->trashed()) {
                            $updateUser->restore();
                        }
                        if (Auth::attempt(['email' => $login, 'password' => $password])) {
                            $request->session()->regenerate();
                            return redirect()->intended();
                        }
                    } elseif (!$updateUser->trashed()) {
                        $updateUser->delete();
                    }
                }
            }
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
