<?php

namespace App\Console\Commands;

use App\Models\Role;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class generateUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:user {username} {role} {password?} {id_org?}';

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
        $username = $this->argument('username');
        $p = $this->argument('password') ?? Str::random(8);
        $org_id = $this->argument('id_org') ?? null;
        $password = Hash::make($p);
        $role = Role::where('name', $this->argument('role'))->first();

        $user = User::updateOrCreate(['email' => $username], ['password' => $password, 'org_id' => $org_id]);

        $user->syncRoles([$role]);

        $this->info("$username:$p");
        return 0;
    }
}
