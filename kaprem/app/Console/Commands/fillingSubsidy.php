<?php

namespace App\Console\Commands;

use App\Models\BuildingConstruction;
use App\Models\RepairType;
use App\Models\SubsidyStatus;
use Illuminate\Console\Command;

class fillingSubsidy extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'filling:subsidy {table}';

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
        switch ($this->argument('table')) {
            case 'all':
            {
                $this->building_constructions();
                $this->repair_types();
                $this->subsidy_statuses();
                break;
            }
            case 'building_constructions':
            {
                $this->building_constructions();
                break;
            }
            case 'repair_types':
            {
                $this->repair_types();
                break;
            }
            case 'subsidy_statuses':
            {
                $this->subsidy_statuses();
                break;
            }
            default:
            {
                $this->error("Не верный аргумент {table}\nДоступные: all, building_constructions, repair_types, subsidy_statuses");
            }
        }
        return \Symfony\Component\Console\Command\Command::SUCCESS;
    }

    /**
     * @return void
     */
    public function building_constructions(): void
    {
        echo "\n--- Загрузка строительных конструкций ---\n";
        $constructions = [
            ['id' => 1, 'type' => 1, 'value' => 'Фундаменты'],
            ['id' => 2, 'type' => 1, 'value' => 'Отмостка'],
            ['id' => 3, 'type' => 1, 'value' => 'Стены'],
            ['id' => 4, 'type' => 1, 'value' => 'Колонны'],
            ['id' => 5, 'type' => 1, 'value' => 'Перегородки'],
            ['id' => 6, 'type' => 1, 'value' => 'Крыша (покрытия)'],
            ['id' => 7, 'type' => 1, 'value' => 'Кровля'],
            ['id' => 8, 'type' => 1, 'value' => 'Перекрытия'],
            ['id' => 9, 'type' => 1, 'value' => 'Полы'],
            ['id' => 10, 'type' => 1, 'value' => 'Окна'],
            ['id' => 11, 'type' => 1, 'value' => 'Двери'],
            ['id' => 12, 'type' => 1, 'value' => 'Ворота'],
            ['id' => 13, 'type' => 1, 'value' => 'Лестницы'],
            ['id' => 14, 'type' => 1, 'value' => 'Крыльца'],
            ['id' => 15, 'type' => 1, 'value' => 'Балконы/Лоджии'],
            ['id' => 16, 'type' => 1, 'value' => 'Внутренняя отделка'],
            ['id' => 17, 'type' => 1, 'value' => 'Наружняя отделка'],
            ['id' => 18, 'type' => 2, 'value' => 'Электроснабжение'],
            ['id' => 19, 'type' => 2, 'value' => 'Водоснабжение'],
            ['id' => 20, 'type' => 2, 'value' => 'Водоотведение'],
            ['id' => 21, 'type' => 2, 'value' => 'Газоснабжение'],
            ['id' => 22, 'type' => 2, 'value' => 'Кондиционирование'],
            ['id' => 23, 'type' => 2, 'value' => 'Вентиляция'],
            ['id' => 24, 'type' => 2, 'value' => 'Отопление'],
            ['id' => 25, 'type' => 2, 'value' => 'Диспетчеризация'],
            ['id' => 26, 'type' => 2, 'value' => 'Радиофикация'],
            ['id' => 27, 'type' => 2, 'value' => 'Телевидение'],
            ['id' => 28, 'type' => 2, 'value' => 'Видеонаблюдение'],
            ['id' => 29, 'type' => 2, 'value' => 'Интернет, телефония'],
            ['id' => 30, 'type' => 2, 'value' => 'СКУД'],
            ['id' => 31, 'type' => 2, 'value' => 'Пожарная сиг-я'],
            ['id' => 32, 'type' => 2, 'value' => 'Охранная сиг-я'],
            ['id' => 33, 'type' => 2, 'value' => 'Мусоропроводы'],
            ['id' => 34, 'type' => 2, 'value' => 'Лифты']
        ];
        foreach ($constructions as $data) {
            $construction = BuildingConstruction::updateOrCreate(['id' => $data['id']], [
                'type' => $data['type'],
                'value' => $data['value']
            ]);
            if ($construction->exists) {
                $this->info("$construction->value - сохранена");
            } else {
                $this->error("$construction->value - ошибка");
            }
        }
    }

    /**
     * @return void
     */
    private function repair_types(): void
    {
        echo "\n--- Загрузка видов ремонта ---\n";
        $types = [
            ['id' => 1, 'value' => 'Комплексный'],
            ['id' => 2, 'value' => 'Выборочный']
        ];
        foreach ($types as $data) {
            $type = RepairType::updateOrCreate(['id' => $data['id']], ['value' => $data['value']]);
            if ($type->exists) {
                $this->info("$type->value - сохранена");
            } else {
                $this->error("$type->value - ошибка");
            }
        }
    }

    /**
     * @return void
     */
    private function subsidy_statuses(): void
    {
        echo "\n--- Загрузка статусов субсидий ---\n";
        $statuses = [
            ['id' => 1, 'value' => 'Черновик'],
            ['id' => 2, 'value' => 'Отправлено на проверку'],
            ['id' => 3, 'value' => 'Возвращено на доработку'],
            ['id' => 4, 'value' => 'Согласовано экспертом Минобрнауки РФ'],
            ['id' => 5, 'value' => 'Получено отрицательное решение бюджетной комиссии'],
            ['id' => 6, 'value' => 'Заявка не согласована'],
            ['id' => 7, 'value' => 'В реализации'],
            ['id' => 8, 'value' => 'Завершено']
        ];
        foreach ($statuses as $data) {
            $status = SubsidyStatus::updateOrCreate(['id' => $data['id']], ['value' => $data['value']]);
            if ($status->exists) {
                $this->info("$status->value - сохранена");
            } else {
                $this->error("$status->value - ошибка");
            }
        }
    }
}
