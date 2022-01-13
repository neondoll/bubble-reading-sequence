<?php

namespace App\Console\Commands;

use App\Models\Site;
use App\Models\SiteGroup;
use Illuminate\Console\Command;
use Symfony\Component\Console\Command\Command as CommandAlias;

class generateSites extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:sites';

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
        $sites = [
            [
                'id' => 1,
                'title' => 'Недвижимое имущество',
                'text' => 'Ведение реестра объектов капитального строительства, выгрузки, актуализация данных',
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/real-estate-list',
                'icon' => 'vector1'
            ],
            [
                'id' => 2,
                'title' => 'Земельные участки',
                'text' => 'Ведение реестра земельных участков, выгрузки, актуализация данных, разметка границ ЗУ',
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/land-list',
                'icon' => 'vector2'
            ],
            [
                'id' => 3,
                'title' => 'ОЦДИ',
                'text' => 'Ведение реестра объектов особо ценного движимого имущества, выгрузки, актуализация данных',
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/ocdi-list',
                'icon' => 'vector19'
            ],
            [
                'id' => 4,
                'title' => 'Незавершенное строительство',
                'text' => 'Ведение реестра объектов незавершенного строительства',
                'href' => 'https://xn--80asbreggi.xn--80apneeq.xn--p1ai/objects/index',
                'icon' => 'vector3'
            ],
            [
                'id' => 5,
                'title' => 'Договоры аренды',
                'text' => 'Ведение реестра объектов капитального строительства, выгрузки, актуализация данных',
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/rent-contract-list',
                'icon' => 'vector4'
            ],
            [
                'id' => 6,
                'title' => 'Договоры безвозмездного пользования',
                'text' => 'Ведение реестра договоров безвозмездного пользования',
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/rent-free-contract-list',
                'icon' => 'vector4'
            ],
            [
                'id' => 7,
                'title' => 'Использование имущества',
                'text' => 'Ведение реестра объектов, используемых организацией',
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/estate-use-contract-list',
                'icon' => 'vector7'
            ],
            [
                'id' => 8,
                'title' => 'Недвижимое имущество',
                'text' => 'Ведение реестра объектов капитального строительства, выгрузки, актуализация данных',
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/real-estate-mon/index',
                'icon' => 'vector1'
            ],
            [
                'id' => 9,
                'title' => 'Земельные участки',
                'text' => 'Ведение реестра земельных участков, выгрузки, актуализация данных, разметка границ ЗУ',
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/land-mon/index',
                'icon' => 'vector2'
            ],
            [
                'id' => 10,
                'title' => 'Договоры аренды',
                'text' => 'Ведение реестра объектов капитального строительства, выгрузки, актуализация данных',
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/rent-contract-mon',
                'icon' => 'vector4'
            ],
            [
                'id' => 11,
                'title' => 'Договоры безвозмездного пользования',
                'text' => 'Ведение реестра договоров безвозмездного пользования',
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/rent-free-contract-mon',
                'icon' => 'vector4'
            ],
            [
                'id' => 12,
                'title' => 'Использование имущества',
                'text' => 'Ведение реестра объектов, используемых организацией',
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/estate-use-mon',
                'icon' => 'vector7'
            ],
            [
                'id' => 13,
                'title' => 'Оценка последствий',
                'text' => 'Получение заключения на оценку последствий для образовательных организаций',
                'href' => 'https://xn--80ajpld2c.xn--80apneeq.xn--p1ai',
                'icon' => 'vector8'
            ],
            [
                'id' => 14,
                'title' => 'Аренда и БП',
                'text' => 'Получение согласия учредителя на передачу объекта в аренду или безвозмездное пользование',
                'href' => 'https://xn--80apneeq.xn--p1ai/index.php?option=service_approveRent',
                'icon' => 'vector9'
            ],
            [
                'id' => 15,
                'title' => 'Перераспределение',
                'text' => 'Отказ от имущества, закрепление имущества, передача на иной уровень собственности',
                'href' => 'https://xn--80aicbaauwtojcl.xn--80apneeq.xn--p1ai/index',
                'icon' => 'vector10',
                'need_token' => 1
            ],
            [
                'id' => 16,
                'title' => 'Списание имущества',
                'text' => 'Согласование крупных и иных сделок с учредителем',
                'href' => 'https://xn--80akhbyjnc.xn--80apneeq.xn--p1ai',
                'icon' => 'vector11'
            ],
            [
                'id' => 17,
                'title' => 'Сделки',
                'text' => 'Ведение реестра объектов, используемых организацией',
                'href' => 'https://xn--d1acjhe7a.xn--80apneeq.xn--p1ai',
                'icon' => 'vector12'
            ],
            [
                'id' => 18,
                'title' => 'АО Дом РФ',
                'text' => 'Изъятие объектов ДОМ.РФ, согласование с подведомственной организацией',
                'href' => 'https://xn--d1aqf.xn--80apneeq.xn--p1ai',
                'icon' => 'vector13'
            ],
            [
                'id' => 19,
                'title' => 'Сервитут',
                'text' => 'Оформление заявок на сервитут, согласование с учредителем',
                'href' => 'https://xn--b1afk4adkah.xn--80apneeq.xn--p1ai/index.php?r=app%2Fadmin-panel%2Findex',
                'icon' => 'vector5'
            ],
            [
                'id' => 20,
                'title' => 'Ядерная безопасность',
                'text' => 'Согласование объектов ядерной и радиационной безопасности с учредителем',
                'href' => 'https://xn--90a3a.xn--80apneeq.xn--p1ai',
                'icon' => 'vector14'
            ],
            [
                'id' => 21,
                'title' => 'Паспорта безопасности',
                'text' => 'Ведение реестров паспортов безопасности, актуализация данных',
                'href' => 'https://xn--80ao6a.xn--80apneeq.xn--p1ai',
                'icon' => 'vector15'
            ],
            [
                'id' => 22,
                'title' => 'Общая повестка',
                'text' => 'Получение заключения на оценку последствий для образовательных организаций',
                'href' => 'https://xn--80adjurfri.xn--80apneeq.xn--p1ai/app/agenda/index',
                'icon' => 'vector16'
            ],
            [
                'id' => 23,
                'title' => 'Жилищный фонд',
                'text' => 'Ведение реестра объектов жилищного фонда, специализированный жилищный фонд',
                'href' => 'https://xn--f1aedhplgi.xn--80apneeq.xn--p1ai/housing-stock/organizations-list',
                'icon' => 'vector17'
            ],
            [
                'id' => 24,
                'title' => 'Генератор отчетов',
                'text' => 'Формирование отчетов по имущественному комплексу в свободной форме',
                'href_in_project' => 1,
                'href' => 'generator-reports',
                'icon' => 'vector18'
            ],
            [
                'id' => 25,
                'title' => 'Панель администратора',
                'text' => 'Служебные функции управления имуществом (перенос, восстановление объектов и прочее)',
                'href_in_project' => 1,
                'href' => 'admin-panel',
                'icon' => 'vector6'
            ],
            [
                'id' => 26,
                'title' => 'Генератор отчетов (недвижимое имущество)',
                'text' => 'Формирование отчетности из выбранных параметров',
                'href' => 'https://недвижимость.иасмон.рф/report-generator-estate',
                'icon' => 'vector21',
                'site_id' => 24
            ],
            [
                'id' => 27,
                'title' => 'Генератор отчетов (земельные участки)',
                'text' => 'Формирование отчетности из выбранных параметров',
                'href' => 'https://недвижимость.иасмон.рф/report-generator-land',
                'icon' => 'vector21',
                'site_id' => 24
            ],
            [
                'id' => 28,
                'title' => 'План-график по регистрации объектов',
                'text' => 'Выгрузка план-графика по форме для Росимущества',
                'href' => 'https://недвижимость.иасмон.рф/report/plan-registry',
                'icon' => 'vector20',
                'site_id' => 24
            ],
            [
                'id' => 29,
                'title' => 'Динамика регистрации прав',
                'text' => 'Формирование графика на отчетную дату',
                'href' => 'https://недвижимость.иасмон.рф/registration-of-rights/index',
                'icon' => 'vector22',
                'site_id' => 24
            ],
            [
                'id' => 30,
                'title' => 'Перенос имущества',
                'text' => 'Перенос объектов НИ, ЗУ, ОЦДИ при реорганизации учреждений и предприятий',
                'href' => 'https://недвижимость.иасмон.рф/archive-form',
                'icon' => 'vector23',
                'site_id' => 25
            ],
            [
                'id' => 31,
                'title' => 'Добавление населенного пункта',
                'text' => 'Внесение населенных пунктов, отсутствующих в форме добавления',
                'href' => 'https://недвижимость.иасмон.рф/adminPanel/city/add',
                'icon' => 'vector23',
                'site_id' => 25
            ],
            [
                'id' => 32,
                'title' => 'Восстановление объекта недвижимого имущества',
                'text' => 'Восстановление удаленного объекта',
                'href' => 'https://недвижимость.иасмон.рф/adminPanel/real-estate/restore',
                'icon' => 'vector23',
                'site_id' => 25
            ],
            [
                'id' => 33,
                'title' => 'Восстановление земельного участка',
                'text' => 'Восстановление удаленного объекта',
                'href' => 'https://недвижимость.иасмон.рф/adminPanel/land/restore',
                'icon' => 'vector23',
                'site_id' => 25
            ]
        ];
        foreach ($sites as $site) {
            $updateSite = Site::updateOrCreate(['id' => $site['id']], [
                'href' => $site['href'] ?? null,
                'icon' => $site['icon'],
                'need_token' => $site['need_token'] ?? 0,
                'site_id' => $site['site_id'] ?? null,
                'text' => $site['text'],
                'title' => $site['title']
            ]);
            $this->info(
                "sites($updateSite->id): $updateSite->title - " .
                ($updateSite->updated_at > $updateSite->created_at ? "update" : "create")
            );
        }

        $siteGroups = [
            ['id' => 1, 'title' => 'Имущество подведомственных организаций', 'sites_id' => [1, 2, 3, 4, 5, 6, 7]],
            ['id' => 2, 'title' => 'Имущество Минобрнауки России', 'sites_id' => [8, 9, 10, 11, 12]],
            ['id' => 3, 'title' => 'Модули взаимодействия', 'sites_id' => [13, 14, 15, 16, 17, 18, 19, 20, 21]],
            ['id' => 4, 'title' => 'Служебные модули', 'sites_id' => [22, 23, 24, 25]]
        ];
        foreach ($siteGroups as $siteGroup) {
            $updateSiteGroup = SiteGroup::updateOrCreate(['id' => $siteGroup['id']], ['title' => $siteGroup['title']]);
            $updateSiteGroup->sites()->detach(Site::withoutTrashed()->get());
            $updateSiteGroup->sites()->attach(Site::find($siteGroup['sites_id']));
            $this->info(
                "site_groups($updateSiteGroup->id): $updateSiteGroup->title - " .
                ($updateSiteGroup->updated_at > $updateSiteGroup->created_at ? "update" : "create")
            );
        }

        return CommandAlias::SUCCESS;
    }
}
