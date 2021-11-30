<?php

namespace Database\Factories;

use App\Models\Form;
use Illuminate\Database\Eloquent\Factories\Factory;

class FormFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Form::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'user_id' => 1,
            'lastName' => $this->faker->lastName,
            'middleName' => $this->faker->lastName,
            'sex' => $this->faker->boolean,
            'old_name' => $this->faker->name,
            'old_lastName' => $this->faker->lastName,
            'old_middleName' => $this->faker->lastName,
            'passport_number' => $this->faker->randomNumber(5, true),
            'passport_serial' => $this->faker->randomNumber(4, true),
            'passport_place' => $this->faker->text(40),
            'passport_date' => $this->faker->date,
            'citizenship' => $this->faker->streetAddress,
            'birthday' => $this->faker->date,
            'birthplace' => $this->faker->streetAddress,
            'region_id' => $this->faker->numberBetween(1, 65),
            'job_place' => $this->faker->text(10),
            'job_position' => $this->faker->text(10),
            'city' => $this->faker->city(),
            'email' => $this->faker->email(),
            'phone' => $this->faker->phoneNumber(),
        ];
    }
}
