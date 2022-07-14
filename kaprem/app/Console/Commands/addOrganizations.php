<?php

namespace App\Console\Commands;

use App\Models\Program;
use DB;
use Illuminate\Console\Command;

class addOrganizations extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'secretCommand';

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
    public function handle()
    {
        $organizations = DB::select(
            'select * from organizations where id not in (
                select organizations.id from organizations join programs p on organizations.id = p.org_id
            );'
        );

        foreach ($organizations as $organization) {
            $program = Program::create([
                'org_id' => $organization->id,
                'square' => 0,
                'cost_kaprem' => 0,
                'year' => 2022,
                'sent' => 0,
                'p0201' => 0,
                'p0210' => 0
            ]);
        }

        $this->info('finish!');
    }
}
