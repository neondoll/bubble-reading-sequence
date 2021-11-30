<?php

namespace Database\Seeders;

use App\Models\Form;
use Database\Factories\FormFactory;
use Illuminate\Database\Seeder;

class FormSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Form::factory()->count(50)->create();
    }
}
