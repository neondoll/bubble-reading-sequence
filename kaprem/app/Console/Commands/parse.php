<?php

namespace App\Console\Commands;

use App\Models\ObjectEventsType;
use App\Models\Organization;
use App\Models\Program;
use App\Models\ProgramObject;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx;

class parse extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'parse {type}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    public static function toFloat($val)
    {
        //dump($val, floatval(str_replace(',', '', trim($val))));
        return floatval(str_replace(',', '', trim($val)));
    }

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    private function readFile($fileName): \PhpOffice\PhpSpreadsheet\Spreadsheet
    {
        $reader = new Xlsx();
        return $reader->load($fileName);
    }

    public function limits()
    {
        $path = Storage::path('parsing/progs.xlsx');
        $spr = $this->readFile($path)->getActiveSheet();
        $data = $spr->toArray();
        unset($data[0]);
        foreach ($data as $item) {
            $org = Organization::find($item[0]);
            if ($org) {
                Program::updateOrCreate(['year' => 2022, 'org_id' => $item[0]], [
                    'cost_kaprem' => self::toFloat($item[1]),
                    'p0201' => self::toFloat($item[2]),
                    'p0210' => self::toFloat($item[3]),
                    'square' => self::toFloat($item[4]),
                ]);
            }
        }
    }

    public function objects()
    {
        $path = Storage::path('parsing/objects.xlsx');
        $spr = $this->readFile($path)->getActiveSheet();
        $data = $spr->toArray();
        unset($data[0]);
        foreach ($data as $item) {
            //dd($item);
            $prog = Program::whereOrgId($item[0])->where('year', 2022)->first();
            if ($prog) {
                DB::transaction(function () use ($prog, $item) {
                    $l = trim($item[3]);
                    $l = ObjectEventsType::where('label', 'like', "%{$l}%")->first()?->id;
                    ProgramObject::create([
                        'org_id' => $prog->org_id,
                        'program_id' => $prog->id,
                        'name' => $item[1],
                        'address' => $item[2],
                        'type' => 0,
                        'region_id' => $prog->org->region_id,
                        'primechanie' => $item['4']
                    ])->events()->createMany([
                        [
                            'stage' => 1,
                            'type_id' => $l

                        ],
                        [
                            'stage' => 5,
                            'type_id' => null,
                            'p05' => self::toFloat($item['5'])
                        ],
                        [
                            'stage' => 3,
                            'type_id' => 6,
                            'p05' => self::toFloat($item['6'])
                        ],
                    ]);
                });
            }
        }
    }

    public function handle()
    {
        $this->limits();
        $this->objects();
        return 0;
    }
}
