<?php

namespace App\Console\Commands;

use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Console\Command;
use Symfony\Component\Console\Command\Command as CommandAlias;

class rbac extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'rbac';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'rbac generate';

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
        $admin = Role::updateOrCreate(['name' => 'admin'], [
            'description' => 'full admin',
            'display_name' => 'admin'
        ]);
        $mon = Role::updateOrCreate(['name' => 'mon'], [
            'description' => 'user of mon',
            'display_name' => 'mon'
        ]);
        $user = Role::updateOrCreate(['name' => 'user'], [
            'description' => 'simple user',
            'display_name' => 'user'
        ]);

        $adminPanel = Permission::updateOrCreate(['name' => 'admin-panel'], [
            'description' => 'admin-panel',
            'display_name' => 'admin-panel'
        ]);
        $generatorReports = Permission::updateOrCreate(['name' => 'generator-reports'], [
            'description' => 'generator-reports',
            'display_name' => 'generator-reports'
        ]);
        $main = Permission::updateOrCreate(['name' => 'main'], [
            'description' => 'main',
            'display_name' => 'main',
        ]);
        $summaryStatistics = Permission::updateOrCreate(['name' => 'summary-statistics'], [
            'description' => 'summary-statistics',
            'display_name' => 'summary-statistics',
        ]);

        $admin->syncPermissions([$adminPanel, $generatorReports, $main, $summaryStatistics]);
        $mon->syncPermissions([$adminPanel, $generatorReports, $main, $summaryStatistics]);
        $user->syncPermissions([$generatorReports, $main, $summaryStatistics]);

        $userModel = User::whereEmail('admin@admin.ru')->first();
        $userModel->syncRoles([$admin->id]);

        $userModel = User::whereEmail('user@admin.ru')->first();
        $userModel->syncRoles([$user->id]);

        return CommandAlias::SUCCESS;
    }
}
