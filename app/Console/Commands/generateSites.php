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
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/real-estate-list',
                'icon' => 'vector1',
                'id' => 1,
                'text' => 'Ведение реестра объектов капитального строительства, выгрузки, актуализация данных',
                'title' => 'Недвижимое имущество'
            ],
            [
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/land-list',
                'icon' => 'vector2',
                'id' => 2,
                'text' => 'Ведение реестра земельных участков, выгрузки, актуализация данных, разметка границ ЗУ',
                'title' => 'Земельные участки'
            ],
            [
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/ocdi-list',
                'icon' => 'vector19',
                'id' => 3,
                'text' => 'Ведение реестра объектов особо ценного движимого имущества, выгрузки, актуализация данных',
                'title' => 'ОЦДИ'
            ],
            [
                'href' => 'https://xn--80asbreggi.xn--80apneeq.xn--p1ai/?auth_token=',
                'icon' => 'vector3',
                'id' => 4,
                'need_token' => 1,
                'text' => 'Ведение реестра объектов незавершенного строительства',
                'title' => 'Незавершенное строительство'
            ],
            [
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/rent-contract-list',
                'icon' => 'vector4',
                'id' => 5,
                'text' => 'Ведение реестра объектов капитального строительства, выгрузки, актуализация данных',
                'title' => 'Договоры аренды'
            ],
            [
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/rent-free-contract-list',
                'icon' => 'vector4',
                'id' => 6,
                'text' => 'Ведение реестра договоров безвозмездного пользования',
                'title' => 'Договоры безвозмездного пользования'
            ],
            [
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/estate-use-contract-list',
                'icon' => 'vector7',
                'id' => 7,
                'text' => 'Ведение реестра объектов, используемых организацией',
                'title' => 'Использование имущества'
            ],
            [
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/real-estate-mon/index',
                'icon' => 'vector1',
                'id' => 8,
                'text' => 'Ведение реестра объектов капитального строительства, выгрузки, актуализация данных',
                'title' => 'Недвижимое имущество'
            ],
            [
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/land-mon/index',
                'icon' => 'vector2',
                'id' => 9,
                'text' => 'Ведение реестра земельных участков, выгрузки, актуализация данных, разметка границ ЗУ',
                'title' => 'Земельные участки'
            ],
            [
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/rent-contract-mon',
                'icon' => 'vector4',
                'id' => 10,
                'text' => 'Ведение реестра объектов капитального строительства, выгрузки, актуализация данных',
                'title' => 'Договоры аренды'
            ],
            [
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/rent-free-contract-mon',
                'icon' => 'vector4',
                'id' => 11,
                'text' => 'Ведение реестра договоров безвозмездного пользования',
                'title' => 'Договоры безвозмездного пользования'
            ],
            [
                'href' => 'https://xn--b1adcgjb2abq4al4j.xn--80apneeq.xn--p1ai/estate-use-mon',
                'icon' => 'vector7',
                'id' => 12,
                'text' => 'Ведение реестра объектов, используемых организацией',
                'title' => 'Использование имущества'
            ],
            [
                'href' => 'https://xn--80ajpld2c.xn--80apneeq.xn--p1ai',
                'icon' => 'vector8',
                'id' => 13,
                'text' => 'Получение заключения на оценку последствий для образовательных организаций',
                'title' => 'Оценка последствий'
            ],
            [
                'href' => 'https://xn--80apneeq.xn--p1ai/index.php?option=service_approveRent',
                'icon' => 'vector9',
                'id' => 14,
                'text' => 'Получение согласия учредителя на передачу объекта в аренду или безвозмездное пользование',
                'title' => 'Аренда и БП'
            ],
            [
                'href' => 'https://xn--80aicbaauwtojcl.xn--80apneeq.xn--p1ai/site/login?auth-token=',
                'icon' => 'vector10',
                'id' => 15,
                'need_token' => 1,
                'text' => 'Отказ от имущества, закрепление имущества, передача на иной уровень собственности',
                'title' => 'Перераспределение'
            ],
            [
                'href' => 'https://xn--80akhbyjnc.xn--80apneeq.xn--p1ai',
                'icon' => 'vector11',
                'id' => 16,
                'text' => 'Согласование крупных и иных сделок с учредителем',
                'title' => 'Списание имущества'
            ],
            [
                'href' => 'https://xn--d1acjhe7a.xn--80apneeq.xn--p1ai/?auth_token=',
                'icon' => 'vector12',
                'id' => 17,
                'need_token' => 1,
                'text' => 'Ведение реестра объектов, используемых организацией',
                'title' => 'Сделки'
            ],
            [
                'href' => 'https://xn--d1aqf.xn--80apneeq.xn--p1ai/?auth_token=',
                'icon' => 'vector13',
                'id' => 18,
                'need_token' => 1,
                'text' => 'Изъятие объектов ДОМ.РФ, согласование с подведомственной организацией',
                'title' => 'АО Дом РФ'
            ],
            [
                'href' => 'https://xn--b1afk4adkah.xn--80apneeq.xn--p1ai/?auth_token=',
                'icon' => 'vector5',
                'id' => 19,
                'need_token' => 1,
                'text' => 'Оформление заявок на сервитут, согласование с учредителем',
                'title' => 'Сервитут'
            ],
            [
                'href' => 'https://xn--90a3a.xn--80apneeq.xn--p1ai',
                'icon' => 'vector14',
                'id' => 20,
                'text' => 'Согласование объектов ядерной и радиационной безопасности с учредителем',
                'title' => 'Ядерная безопасность'
            ],
            [
                'href' => 'https://xn--80ao6a.xn--80apneeq.xn--p1ai',
                'icon' => 'vector15',
                'id' => 21,
                'text' => 'Ведение реестров паспортов безопасности, актуализация данных',
                'title' => 'Паспорта безопасности'
            ],
            [
                'href' => 'https://xn--80adjurfri.xn--80apneeq.xn--p1ai/app/agenda/index',
                'icon' => 'vector16',
                'id' => 22,
                'text' => 'Получение заключения на оценку последствий для образовательных организаций',
                'title' => 'Общая повестка'
            ],
            [
                'href' => 'https://xn--f1aedhplgi.xn--80apneeq.xn--p1ai/?auth_token=',
                'icon' => 'vector17',
                'id' => 23,
                'need_token' => 1,
                'text' => 'Ведение реестра объектов жилищного фонда, специализированный жилищный фонд',
                'title' => 'Жилищный фонд'
            ],
            [
                'href' => 'generator-reports',
                'href_in_project' => 1,
                'icon' => 'vector18',
                'id' => 24,
                'text' => 'Формирование отчетов по имущественному комплексу в свободной форме',
                'title' => 'Генератор отчетов'
            ],
            [
                'href' => 'admin-panel',
                'href_in_project' => 1,
                'icon' => 'vector6',
                'id' => 25,
                'text' => 'Служебные функции управления имуществом (перенос, восстановление объектов и прочее)',
                'title' => 'Панель администратора'
            ],
            [
                'href' => 'https://недвижимость.иасмон.рф/report-generator-estate',
                'icon' => 'vector21',
                'id' => 26,
                'site_id' => 24,
                'text' => 'Формирование отчетности из выбранных параметров',
                'title' => 'Генератор отчетов (недвижимое имущество)'
            ],
            [
                'href' => 'https://недвижимость.иасмон.рф/report-generator-land',
                'icon' => 'vector21',
                'id' => 27,
                'site_id' => 24,
                'text' => 'Формирование отчетности из выбранных параметров',
                'title' => 'Генератор отчетов (земельные участки)'
            ],
            [
                'href' => 'https://недвижимость.иасмон.рф/report/plan-registry',
                'icon' => 'vector20',
                'id' => 28,
                'site_id' => 24,
                'text' => 'Выгрузка план-графика по форме для Росимущества',
                'title' => 'План-график по регистрации объектов'
            ],
            [
                'href' => 'https://недвижимость.иасмон.рф/registration-of-rights/index',
                'icon' => 'vector22',
                'id' => 29,
                'site_id' => 24,
                'text' => 'Формирование графика на отчетную дату',
                'title' => 'Динамика регистрации прав'
            ],
            [
                'href' => 'https://недвижимость.иасмон.рф/archive-form',
                'icon' => 'vector23',
                'id' => 30,
                'site_id' => 25,
                'text' => 'Перенос объектов НИ, ЗУ, ОЦДИ при реорганизации учреждений и предприятий',
                'title' => 'Перенос имущества'
            ],
            [
                'href' => 'https://недвижимость.иасмон.рф/adminPanel/city/add',
                'icon' => 'vector23',
                'id' => 31,
                'site_id' => 25,
                'text' => 'Внесение населенных пунктов, отсутствующих в форме добавления',
                'title' => 'Добавление населенного пункта'
            ],
            [
                'href' => 'https://недвижимость.иасмон.рф/adminPanel/real-estate/restore',
                'icon' => 'vector23',
                'id' => 32,
                'site_id' => 25,
                'text' => 'Восстановление удаленного объекта',
                'title' => 'Восстановление объекта недвижимого имущества'
            ],
            [
                'href' => 'https://недвижимость.иасмон.рф/adminPanel/land/restore',
                'icon' => 'vector23',
                'id' => 33,
                'site_id' => 25,
                'text' => 'Восстановление удаленного объекта',
                'title' => 'Восстановление земельного участка'
            ]
        ];
        foreach ($sites as $site) {
            $updateSite = Site::updateOrCreate(['id' => $site['id']], [
                'href' => $site['href'] ?? null,
                'href_in_project' => $site['href_in_project'] ?? 0,
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
            [
                'id' => 1,
                'sites_id' => [1, 2, 3, 4, 5, 6, 7],
                'statistics_page' => 'propertyOrganizationsStatistics',
                'title' => 'Имущество подведомственных организаций'
            ],
            [
                'id' => 2,
                'sites_id' => [8, 9, 10, 11, 12],
                'statistics_page' => 'propertyMinistryStatistics',
                'title' => 'Имущество Минобрнауки России'
            ],
            [
                'id' => 3,
                'sites_id' => [13, 14, 15, 16, 17, 18, 19, 20, 21],
                'statistics_page' => 'interactionModulesStatistics',
                'title' => 'Модули взаимодействия'
            ],
            [
                'id' => 4,
                'sites_id' => [22, 23, 24, 25],
                'statistics_page' => 'serviceModulesStatistics',
                'title' => 'Служебные модули'
            ]
        ];
        foreach ($siteGroups as $siteGroup) {
            $updateSiteGroup = SiteGroup::updateOrCreate(['id' => $siteGroup['id']], [
                'statistics_page' => $siteGroup['statistics_page'],
                'title' => $siteGroup['title']
            ]);
            $updateSiteGroup->sites()->sync($siteGroup['sites_id']);
            $this->info(
                "site_groups($updateSiteGroup->id): $updateSiteGroup->title - " .
                ($updateSiteGroup->updated_at > $updateSiteGroup->created_at ? "update" : "create")
            );
        }

        return \Symfony\Component\Console\Command\Command::SUCCESS;
    }
}
