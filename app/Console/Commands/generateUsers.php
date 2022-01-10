<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\Console\Command\Command as CommandAlias;

class generateUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:users';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): int
    {
        User::updateOrCreate(['email' => 'admin@admin.ru'], [
            'auth_key' => 'admin',
            'password' => Hash::make('password')
        ]);
        User::updateOrCreate(['email' => 'user@admin.ru'], [
            'auth_key' => 'user',
            'password' => Hash::make('password')
        ]);

        return CommandAlias::SUCCESS;
    }
}
