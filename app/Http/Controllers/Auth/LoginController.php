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

    public function loginAuthKey(Request $request)
    {
        //<a href="http://распределение.иасмон.рф/site/login?auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbiI6ImV2bkBtYWlsLnJ1IiwicGFzc3dvcmQiOiJOaWsxMjM0In0.sDV8XMxRM8iiC3hK4kuyrgJH7X81eTqwQdEoT9La3Ss" class="menu-item">Перераспределение имущества
        //                                                </a>
        $auth_token = $request->route('auth_token');
        echo "token: " . $auth_token . "\n";
        if ($auth_token != "") {
            $parser = new Parser();
            $token = $parser->parse($auth_token);
            $login = $token->claims()->get('login');
            $password = $token->claims()->get('password');
            echo "login: " . $login . "\n";
            echo "password: " . $password . "\n";
            $query = "{ user(login: \"$login\") { id, name, login, status, pwd } }";
            $data = ApiHelper::iasmon($query);
            if (in_array('data', array_keys($data)) && in_array('user', array_keys($data['data']))) {
                $user = $data['data']['user'];
                var_dump($user);
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
                    } else {
                        if (!$updateUser->trashed()) {
                            $updateUser->delete();
                        }
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
