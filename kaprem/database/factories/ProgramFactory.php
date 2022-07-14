<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProgramFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'org_id' => 100,
            'square' => round($this->faker->randomFloat(), 2),
            'cost_kaprem' => round($this->faker->randomFloat(), 2),
            'year' => $this->faker->year(),
            'sent' => $this->faker->randomElement([1, 0]),
            'p0201' => 0,
            'p0210' => null,
        ];
    }
}
