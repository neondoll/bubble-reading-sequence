<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class OrganizationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->company(),
            'full_name' => $this->faker->company(),
            'short_name' => $this->faker->company(),
            'type_id' => $this->faker->randomElement([13, 9, 10, 12]),
            'founder_id' => $this->faker->randomElement([1, 0]),
            'system_status' => 1,
            'region_id' => 11,
            'inn' => '3016009269',
        ];
    }
}
