<?php

namespace App\Console\Commands;

use App\Models\Site;
use App\Models\SiteGroup;
use Illuminate\Console\Command;

class generateSites extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generateSites';

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
        Site::updateOrCreate(['id' => 1], [
            'title' => 'Недвижимое имущество',
            'text' => 'Ведение реестра объектов капитального строительства, выгрузки, актуализация данных',
            'href' => 'https://недвижимость.иасмон.рф/real-estate-list',
            'icon' => 'vector1'
        ]);
        Site::updateOrCreate(['id' => 2], [
            'title' => 'Земельные участки',
            'text' => 'Ведение реестра земельных участков, выгрузки, актуализация данных, разметка границ ЗУ',
            'href' => 'https://недвижимость.иасмон.рф/land-list',
            'icon' => 'vector2'
        ]);
        Site::updateOrCreate(['id' => 3], [
            'title' => 'ОЦДИ',
            'text' => 'Ведение реестра объектов особо ценного движимого имущества, выгрузки, актуализация данных',
            'href' => null,
            'icon' => 'vector19'
        ]);
        Site::updateOrCreate(['id' => 4], [
            'title' => 'Незавершенное строительство',
            'text' => 'Ведение реестра объектов незавершенного строительства',
            'href' => null,
            'icon' => 'vector3'
        ]);
        Site::updateOrCreate(['id' => 5], [
            'title' => 'Договоры аренды',
            'text' => 'Ведение реестра объектов капитального строительства, выгрузки, актуализация данных',
            'href' => null,
            'icon' => 'vector4'
        ]);
        Site::updateOrCreate(['id' => 6], [
            'title' => 'Договоры безвозмездного пользования',
            'text' => 'Ведение реестра договоров безвозмездного пользования',
            'href' => null,
            'icon' => 'vector4'
        ]);
        Site::updateOrCreate(['id' => 7], [
            'title' => 'Использование имущества',
            'text' => 'Ведение реестра объектов, используемых организацией',
            'href' => null,
            'icon' => 'vector7'
        ]);
        Site::updateOrCreate(['id' => 8], [
            'title' => 'Оценка последствий',
            'text' => 'Получение заключения на оценку последствий для образовательных организаций',
            'href' => null,
            'icon' => 'vector8'
        ]);
        Site::updateOrCreate(['id' => 9], [
            'title' => 'Аренда и БП',
            'text' => 'Получение согласия учредителя на передачу объекта в аренду или безвозмездное пользование',
            'href' => null,
            'icon' => 'vector9'
        ]);
        Site::updateOrCreate(['id' => 10], [
            'title' => 'Перераспределение',
            'text' => 'Отказ от имущества, закрепление имущества, передача на иной уровень собственности',
            'href' => 'https://распределение.иасмон.рф/',
            'icon' => 'vector10'
        ]);
        Site::updateOrCreate(['id' => 11], [
            'title' => 'Списание имущества',
            'text' => 'Согласование крупных и иных сделок с учредителем',
            'href' => null,
            'icon' => 'vector11'
        ]);
        Site::updateOrCreate(['id' => 12], [
            'title' => 'Сделки',
            'text' => 'Ведение реестра объектов, используемых организацией',
            'href' => null,
            'icon' => 'vector12'
        ]);
        Site::updateOrCreate(['id' => 13], [
            'title' => 'АО Дом РФ',
            'text' => 'Изъятие объектов ДОМ.РФ, согласование с подведомственной организацией',
            'href' => null,
            'icon' => 'vector13'
        ]);
        Site::updateOrCreate(['id' => 14], [
            'title' => 'Сервитут',
            'text' => 'Оформление заявок на сервитут, согласование с учредителем',
            'href' => null,
            'icon' => 'vector5'
        ]);
        Site::updateOrCreate(['id' => 15], [
            'title' => 'Ядерная безопасность',
            'text' => 'Согласование объектов ядерной и радиационной безопасности с учредителем',
            'href' => null,
            'icon' => 'vector14'
        ]);
        Site::updateOrCreate(['id' => 16], [
            'title' => 'Паспорта безопасности',
            'text' => 'Ведение реестров паспортов безопасности, актуализация данных',
            'href' => null,
            'icon' => 'vector15'
        ]);
        Site::updateOrCreate(['id' => 17], [
            'title' => 'Общая повестка',
            'text' => 'Получение заключения на оценку последствий для образовательных организаций',
            'href' => null,
            'icon' => 'vector16'
        ]);
        Site::updateOrCreate(['id' => 18], [
            'title' => 'Жилищный фонд',
            'text' => 'Ведение реестра объектов жилищного фонда, специализированный жилищный фонд',
            'href' => null,
            'icon' => 'vector17'
        ]);
        Site::updateOrCreate(['id' => 19], [
            'title' => 'Генератор отчетов',
            'text' => 'Формирование отчетов по имущественному комплексу в свободной форме',
            'href' => null,
            'icon' => 'vector18'
        ]);
        Site::updateOrCreate(['id' => 20], [
            'title' => 'Панель администратора',
            'text' => 'Служебные функции управления имуществом (перенос, восстановление объектов и прочее)',
            'href' => null,
            'icon' => 'vector6'
        ]);

        $site_group = SiteGroup::updateOrCreate(['id' => 1], ['title' => 'Имущество подведомственных организаций']);
        $site_group->sites()->detach(Site::active()->get());
        $site_group->sites()->attach(Site::find([1, 2, 3, 4, 5, 6, 7]));

        $site_group = SiteGroup::updateOrCreate(['id' => 2], ['title' => 'Имущество Минобрнауки России']);
        $site_group->sites()->detach(Site::active()->get());
        $site_group->sites()->attach(Site::find([1, 2, 5, 6, 7]));

        $site_group = SiteGroup::updateOrCreate(['id' => 3], ['title' => 'Модули взаимодействия']);
        $site_group->sites()->detach(Site::active()->get());
        $site_group->sites()->attach(Site::find([8, 9, 10, 11, 12, 13, 14, 15, 16]));

        $site_group = SiteGroup::updateOrCreate(['id' => 4], ['title' => 'Служебные модули']);
        $site_group->sites()->detach(Site::active()->get());
        $site_group->sites()->attach(Site::find([17, 18, 19, 20]));

        return 0;
    }
}
