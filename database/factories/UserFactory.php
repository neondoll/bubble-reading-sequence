<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use JetBrains\PhpStorm\ArrayShape;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    #[ArrayShape([
        'auth_key' => "string",
        'email' => "string",
        'email_verified_at' => "\Illuminate\Support\Carbon",
        'lastName' => "string",
        'middleName' => "string",
        'name' => "string",
        'password' => "string",
        'remember_token' => "string"
    ])] public function definition(): array
    {
        return [
            'auth_key' => Str::random(10),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'lastName' => $this->faker->name(),
            'middleName' => $this->faker->name(),
            'name' => $this->faker->name(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10)
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return Factory
     */
    public function unverified(): Factory
    {
        return $this->state(function (array $attributes) {
            return ['email_verified_at' => null];
        });
    }
}
