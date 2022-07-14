<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class FillActionPlanFileLabels extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $filesList = [
            'survey' => [
                'stage_number' => 2,
                'labels' => [
                    'договор на выполнение обследования',
                    'отчет о техническом обследовании',
                    'дефектный акт',
                    'другие документы'
                ]
            ],
            'psd' => [
                'stage_number' => 3,
                'labels' => [
                    'утвержденное задание на проектирование (скан)',
                    'Объявление аукциона на разработку ПСД (ссылка на портал zakupki.gov.ru)',
                    'протокол результатов проведения аукциона (ссылка или сканированный документ)',
                    'договор на разработку ПСД (скан)',
                    'акт сдачи-приемки выполненных проектных работ',
                    'проектно-сметная документация',
                    'документы, подтверждающие перечисление бюджетных средств подрядчику',
                    'другие документы',
                ]
            ],
            'gge' => [
                'stage_number' => 4,
                'labels' => [
                    'договор на оказание услуг государственной экспертизы',
                    'заключение государственной экспертизы',
                    'другие документы',
                ]
            ],
            'smr' => [
                'stage_number' => 5,
                'labels' => [
                    'объявление аукциона на выполнение СМР (ссылка на портал zakupki.gov.ru)',
                    'протокол результатов проведения аукциона (ссылка или сканированный документ)',
                    'договор на выполнение работ по капитальному ремонту (скан)',
                    'акт сдачи-приемки выполненных работ.',
                    'фотофиксация выполненных работ',
                    'документы, подтверждающие перечисление бюджетных средств подрядчику',
                    'другие документы'
                ]
            ]
        ];

        foreach($filesList as $stage => $labelsDataArray) {
            foreach ($labelsDataArray['labels'] as $label) {
                DB::table('action_plan_file_labels')->insert([
                    'stage_number' => $labelsDataArray['stage_number'],
                    'stage_name' => $stage,
                    'label' => $label
                ]);
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('action_plan_file_labels')->truncate();
    }
}
