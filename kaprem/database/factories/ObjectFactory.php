<?php

namespace Database\Factories;

use App\Models\ProgramObject;
use Illuminate\Database\Eloquent\Factories\Factory;

class ObjectFactory extends Factory
{
    protected $model = ProgramObject::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'program_id' => $this->faker->randomDigit(),
            'org_id' => 100,
            'real_estate_id' => $this->faker->randomDigit(),
            'name' => $this->faker->name(),
            'name_dbi' => 'some name',
            'address' => $this->faker->address(),
            'address_dbi' => $this->faker->address(),
            'type' => $this->faker->randomElement([1, 0]),
            'region_id' => $this->faker->randomDigit(),
            'city' => $this->faker->city(),
            'cadastral_number' => 'fdihg;osd0fig09e8rg;e4',
            'build_year' => $this->faker->year(),
            'exploy_year' => $this->faker->year(),
            'kaprem_year' => $this->faker->year(),
            'nadzor_orgs' => $this->faker->text(20),
            'wear' => $this->faker->randomElement([0, 1, 2, 3, 5, 6, 7]),
            'osnovanie' => $this->faker->text(10),
            'pravo_oper' => $this->faker->text(20),
            'naznach' => $this->faker->text(20),
            'naznach2' => $this->faker->text(20),
            'pravo' => $this->faker->text(20),
            'square' => round($this->faker->randomFloat(null, 50, 60000), 2),
            'kaprem_square' => round($this->faker->randomFloat(null, 50, 60000), 2),
            'square_ustav' => round($this->faker->randomFloat(null, 50, 60000), 2),
            'square_ne_ustav' => round($this->faker->randomFloat(null, 50, 60000), 2),
            'arenda' => round($this->faker->randomFloat(), 2),
            'primechanie' => $this->faker->text(20),
        ];
    }
}
