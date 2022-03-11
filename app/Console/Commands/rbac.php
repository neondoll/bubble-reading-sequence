<?php

namespace App\Console\Commands;

use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Console\Command;

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
        $interactionModulesStatistics = Permission::updateOrCreate(['name' => 'interaction-modules-statistics'], [
            'description' => 'interaction-modules-statistics',
            'display_name' => 'interaction-modules-statistics'
        ]);
        $main = Permission::updateOrCreate(['name' => 'main'], [
            'description' => 'main',
            'display_name' => 'main'
        ]);
        $propertyMinistryStatistics = Permission::updateOrCreate(['name' => 'property-ministry-statistics'], [
            'description' => 'property-ministry-statistics',
            'display_name' => 'property-ministry-statistics'
        ]);
        $propertyOrganizationsStatistics = Permission::updateOrCreate(['name' => 'property-organizations-statistics'], [
            'description' => 'property-organizations-statistics',
            'display_name' => 'property-organizations-statistics'
        ]);
        $serviceModulesStatistics = Permission::updateOrCreate(['name' => 'service-modules-statistics'], [
            'description' => 'service-modules-statistics',
            'display_name' => 'service-modules-statistics'
        ]);
        $summaryStatistics = Permission::updateOrCreate(['name' => 'summary-statistics'], [
            'description' => 'summary-statistics',
            'display_name' => 'summary-statistics'
        ]);

        $mainPermissions = [
            $generatorReports,
            $interactionModulesStatistics,
            $main,
            $propertyMinistryStatistics,
            $propertyOrganizationsStatistics,
            $serviceModulesStatistics,
            $summaryStatistics
        ];
        $admin->syncPermissions(array_merge([$adminPanel], $mainPermissions));
        $mon->syncPermissions($mainPermissions);
        $user->syncPermissions($mainPermissions);

        $userModel = User::whereEmail('admin@admin.ru')->first();
        $userModel->syncRoles([$admin->id]);

        $userModel = User::whereEmail('user@admin.ru')->first();
        $userModel->syncRoles([$user->id]);

        return \Symfony\Component\Console\Command\Command::SUCCESS;
    }
}
