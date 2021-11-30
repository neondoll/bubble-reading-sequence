<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class UserTest extends TestCase
{

    protected function setUp(): void
    {
        parent::setUp(); // TODO: Change the autogenerated stub
        User::truncate();

    }

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_create_user()
    {
        $user = new User();
        $user->name = 'admin';
        $user->email = 'admin2@admin.ru';
        $user->password = 'password';
        $user = $user->save();
        $this->assertTrue($user);
    }
}
