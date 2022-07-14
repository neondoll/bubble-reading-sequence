@extends('layouts.pdf')
@section('content')
    <htmlpagefooter name="page-footer">
        <div class="text-center">{PAGENO}</div>
    </htmlpagefooter>
    <div class="container pagenum" id="export">
        <div class="text-right">
            <p>Приложение 1</p>
            <h3 style="font-weight: bold;">УТВЕРЖДАЮ</h3>
            <span>_____________________________________</span>
            <p style="font-size: 12px; font-style: italic">(должность руководителя организации)</p>
            <span>_____________________________________</span>
            <p style="font-size: 12px; font-style: italic">(ФИО)</p>
            <p>Дата утверждения: «___» __________2022 г</p>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="text-center">
            <h4 style="font-weight: bold; text-transform: uppercase">
                ПРОГРАММА КАПИТАЛЬНОГО РЕМОНТА <br>
                ОБЪЕКТОВ НЕДВИЖИМОГО ИМУЩЕСТВА, <br>
                В ТОМ ЧИСЛЕ РЕСТАВРАЦИИ, ЗА ИСКЛЮЧЕНИЕМ РЕКОНСТРУКЦИИ <br>
                С ЭЛЕМЕНТАМИ РЕСТАВРАЦИИ «{{ $org->full_name }}» <br>
                В 2022 ГОДУ
            </h4>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="page-break">
            Объём бюджетных ассигнований, <br>
            предусмотренных на реализацию <br>
            программы, утверждён Протоколом <br>
            заседания Бюджетной комиссии <br>
            @if ($org?->reestr?->number_and_date_protocol)
                    от {{ $org?->reestr?->date }} г. № {{ $org?->reestr?->number }}  <br>
            @else
                от «__» ___________ 2022 г. №_____ <br>
            @endif
        </div>
        <!-- PAGE END -->

        <!-- PAGE START -->
        <div class="row page-break">
            <div class="text-center bold">Содержание</div>
            <div style="float: left">
                <span>Раздел 1. Общие сведения</span> <br>
                <span>Раздел 2. Программа капитального ремонта</span> <br>
                <span>2.1 Объекты капитального ремонта</span> <br>
                <span>2.2 Информация об объектах капитального ремонта</span> <br>
                <span>2.2.1. Характеристика объекта</span> <br>
                <span>2.2.2. Сведения о планируемых мероприятиях</span> <br>
                <span>2.2.3. Обоснование необходимости (целесообразности) планируемых мероприятий</span> <br>
                <span>2.2.4. Опись прилагаемых документов</span> <br>
                <span>2.2.5. Ожидаемые результаты</span> <br>

                @if (!$org->isNauch())
                    <p> 2.2.6. Прогнозируемые риски
                @endif
            </div>
        </div>

        <!-- <div class="text-center"> -->
        <div class="text-center"><h3 class="bold">Раздел 1. Общие сведения</h3></div>
        <div class="text-right"><span>Таблица 1.1.</span><br></div>
        <div class="text-center"><span>(форма для образовательных организаций высшего образования)</span></div>
        <!-- </div> -->

        <table class="border">
            <tr class="text-center">
                <th class="text-center border">
                    №
                </th>
                <th class="text-center border">
                    Показатель
                </th>
                <th class="text-center border">
                    Значение
                </th>
            </tr>
            <tr>
                <td>1</td>
                <td>Полное наименование организации</td>
                <td>{{$org->full_name }}</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Сокращенное наименование организации</td>
                <td>{{$org->short_name }}</td>
            </tr>
            @foreach(\App\Models\OrgInfo::$columns[(int)$org->is_nauch] as $index => $info)
                <tr>
                    <td>{{ ++$index + 2 }}</td>
                    <td>{{ $info['label'] }}</td>
                    <td>{{ $orgInfo->{$info['key']} ?? '-' }}</td>
                </tr>
            @endforeach
        </table>


        <div class="landscape">
            <div class="text-center">
                <h3 class="bold">Раздел 2. Программа капитального ремонта</h3>
            </div>
            <br>
            <div class="text-center">
                <h3 class="bold">2.1 Объекты, требующие капитального ремонта</h3>
            </div>
            <br>
            <p class="text-right">
                Таблица 2.1. <span class="bold">Приоритетные объекты</span>
            </p>

            <table class="table border">
                <thead>
                <tr class="text-center">
                    <th class="text-center">№ п/п</th>
                    <th class="text-center">Субъект РФ</th>
                    <th class="text-center">Кадастровый номер объекта</th>
                    <th class="text-center">Наименование объекта, требующего капитального ремонта</th>
                    <th class="text-center">Назначение</th>
                    <th class="text-center">Площадь капитального ремонта</th>
                    <th class="text-center">Адрес объекта</th>
                    <th class="text-center">Год постройки</th>
                    <th class="text-center">Износ здания (%)</th>
                    <th class="text-center">Предписание надзорных органов: МЧС, Роспотребнадзор и т. д. (при наличии)
                    </th>
                    <th class="text-center">Вид планируемого мероприятия</th>
                    <th class="text-center">Сумма бюджетного финансирования на проведение капитального ремонта
                        (тыс.руб.)
                    </th>
                    <th class="text-center">Софинансирование из внебюджетных источников (тыс. руб.)</th>
                    <th class="text-center">Примечание</th>
                </tr>
                </thead>
                <tbody>

                @foreach($priorityObjects as $index => $object)
                    <tr>
                        <td>{{ ++$index }}</td>                             <!--№ -->
                        <td>{{ $object->region?->region }}</td>             <!--Субъект -->
                        <td>{{ $object->cadastral_number }}</td>            <!--Кадастровый -->
                        <td>{{ $object->name }}></td>                       <!--Наименование -->
                        <td>{{ $object->naznach }}</td>                     <!--Назначение -->
                        <td>{{ $object->kap_rem_square }}</td>              <!--Площадь -->
                        <td>{{ $object->address }}</td>                     <!--Адрес -->
                        <td>{{ $object->build_year }}</td>                  <!--Год -->
                        <td>{{ $object->wearLabel }}</td>                   <!--Износ -->
                        <td>{{ $object->nadzor_orgs }}</td>                 <!--Предписание -->
                        <td>{{ $object->getTypeOfRepair()['type'] ?? '-' }}</td>                 <!--Вид -->
                        <td>{{ $object->financeSum }}</td>                  <!--Сумма -->
                        <td>{{ $object->coFinance }}</td>                   <!--Софинансирование -->
                        <td>{{ $object->primechanie }}</td>                 <!--Примечание -->
                    </tr>
                @endforeach

                <tr>
                    <td class="text-right" colspan="4">Итого</td>
                    <td></td>
                    <td>{{ $program->program_objects_total_sums['priority']['totalSquare'] }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{{ $program->program_objects_total_sums['priority']['financeSum'] }}</td>
                    <td>{{ $program->program_objects_total_sums['priority']['coFinance'] }}</td>
                </tr>
                </tbody>
            </table>

            <br>

            <p class="text-right">
                Таблица 2.2. <span class="bold">Резервные объекты</span>
            </p>

            <table class="table border">
                <thead>
                <tr class="text-center">
                    <th class="text-center">№ п/п</th>
                    <th class="text-center">Субъект РФ</th>
                    <th class="text-center">Кадастровый номер объекта</th>
                    <th class="text-center">Наименование объекта, требующего капитального ремонта</th>
                    <th class="text-center">Назначение</th>
                    <th class="text-center">Площадь капитального ремонта</th>
                    <th class="text-center">Адрес объекта</th>
                    <th class="text-center">Год постройки</th>
                    <th class="text-center">Износ здания (%)</th>
                    <th class="text-center">Предписание надзорных органов: МЧС, Роспотребнадзор и т. д. (при
                        наличии)
                    </th>
                    <th class="text-center">Вид планируемого мероприятия</th>
                    <th class="text-center">Сумма бюджетного финансирования на проведение капитального ремонта (тыс.
                        руб.)
                    </th>
                    <th class="text-center">Софинансирование из внебюджетных источников (тыс. руб.)</th>
                    <th class="text-center">Примечание</th>
                </tr>
                </thead>
                <tbody>
                @foreach($reservedObjects as $index=> $object)
                    <tr>
                        <td>{{ ++$index }}</td>                                         <!--№ -->
                        <td>{{ $object->region?->region }}</td>                         <!--Субъект -->
                        <td>{{ $object->cadastral_number }}</td>                        <!--Кадастровый -->
                        <td>{{ $object->name }}></td>                                   <!--Наименование -->
                        <td>{{ $object->naznach }}</td>                                 <!--Назначение -->
                        <td>{{ $object->kaprem_square }}</td>                           <!--Площадь -->
                        <td>{{ $object->address }}</td>                                 <!--Адрес -->
                        <td>{{ $object->build_year }}</td>                              <!--Год -->
                        <td>{{ $object->wearLabel }}</td>                               <!--Износ -->
                        <td>{{ $object->nadzor_orgs }}</td>                             <!--Предписание -->
                        <td>{{ $object->getTypeOfRepair()['type'] ?? '-' }}</td>        <!--Вид -->
                        <td>{{ $object->financeSum }}</td>                              <!--Сумма -->
                        <td>{{ $object->coFinance }}</td>                               <!--Софинансирование -->
                        <td>{{ $object->primechanie }}</td>                             <!--Примечание -->
                    </tr>
                @endforeach
                <tr>
                    <td class="text-right" colspan="4">Итого</td>
                    <td></td>
                    <td>{{ $program->program_objects_total_sums['reserved']['totalSquare'] }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{{ $program->program_objects_total_sums['reserved']['financeSum'] }}</td>
                    <td>{{ $program->program_objects_total_sums['reserved']['coFinance'] }}</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="portrait">
            <div class="text-center">
                <h3 class="bold">2.2 Информация об объектах капитального ремонта</h3>
            </div>
            <br>
            @foreach($objects as $index => $object)
                <div class="text-center">
                    2.2.1. Характеристика объекта
                </div>
                <div class="text-right"><span>Таблица 2.2.1.</span><br></div>
                <table class="border">
                    <thead>
                    <tr class="text-center">
                        <th class="text-center">№</th>
                        <th class="text-center">Показатель</th>
                        <th class="text-center">Значение</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Наименование объекта</td>
                        <td>{{ $object->name ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Адрес объекта</td>
                        <td>{{ $object->address ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Тип объекта</td>
                        <td>{{ $object->typeLabel ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Субъект Российской Федерации</td>
                        <td>{{ $object->region?->region ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Город</td>
                        <td>{{ $object->city ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Кадастровый номер</td>
                        <td>{{ $object->cadastral_number ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Год постройки здания</td>
                        <td>{{ $object->build_year ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Год ввода здания в эксплуатацию</td>
                        <td>{{ $object->exploy_year ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Год проведения последнего капитального ремонта/реконструкции</td>
                        <td>{{ $object->kaprem_year ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Наличие предписаний надзорных органов</td>
                        <td>{{ $object->nadzor_orgs ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Износ здания, %</td>
                        <td>{{ $object->wearLabel ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Основание для использования здания</td>
                        <td>{{ $object->osnovanie ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>Право оперативного управления (регистрационная запись, номер)</td>
                        <td>{{ $object->pravo_oper ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>Назначение</td>
                        <td>{{ $object->naznach ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>Право собственности</td>
                        <td>{{ $object->pravo ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td>Общая площадь здания – всего, кв.м.</td>
                        <td>{{ $object->square ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>17</td>
                        <td>Используется в уставной деятельности, кв.м</td>
                        <td>{{ $object->square_ustav ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td>Не используется в уставной деятельности, кв.м.</td>
                        <td>{{ $object->square_ne_ustav ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>19</td>
                        <td>Предоставлено в аренду, кв.м.</td>
                        <td>{{ $object->arenda ?? '-' }}</td>
                    </tr>
                    <tr>
                        <td>20</td>
                        <td>Примечание:</td>
                        <td>{{ $object->primechanie ?? '-' }}</td>
                    </tr>
                    </tbody>
                </table>

                <div class="page-break"></div>

                <div>
                    <?php $repairInfo = $object->getTypeOfRepair() ?>
                    <div class="text-center"><h3>2.2.2. Сведения о планируемых мероприятиях</h3></div>
                    <p>Вид планируемого мероприятия: {{ $repairInfo['type'] }}</p>
                    <p>Краткое описание планируемых мероприятий: {{ $repairInfo['description'] }}</p>
                </div>

                <div class="text-right"><span>Таблица 2.2.2.</span><br></div>
                <table class="table border">
                    <thead>
                    <tr class="text-center">
                        <th class="text-center">Этап</th>
                        <th class="text-center">Необходимость выполнения</th>
                        <th class="text-center">Дата начала (план.)</th>
                        <th class="text-center">Дата окончания (план.)</th>
                        <th class="text-center">Стоимость реализации (тыс.руб.)</th>
                        <th class="text-center">Сумма бюджетного финансирования на проведение капитального ремонта (тыс.
                            руб.)
                        </th>
                        <th class="text-center">Софинансирование из внебюджетных источников (тыс. руб.)</th>
                    </tr>
                    </thead>
                    <tbody>

                    @foreach($object->getEventStages() as $stage)
                        <tr>
                            <td>{{ $stage['label'] }}</td>
                            <td>{{ $stage['necessity']['label'] }}</td>
                            <td>{{ $stage['date_start'] }}</td>
                            <td>{{ $stage['date_end'] }}</td>
                            <td>{{ $stage['implementation_cost'] }}</td>
                            <td>{{ $stage['budgetary'] }}</td>
                            <td>{{ $stage['not_budgetary'] }}</td>
                        </tr>

                    @endforeach

                    <tr>
                        <td>ИТОГО</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>0</td>
                        <td>{{ $object->finance_sum }}</td>
                        <td>{{ $object->co_finance }}</td>
                    </tr>
                    </tbody>
                </table>

                <div class="page-break"></div>

                <div class="text-center">
                    2.2.3. Обоснование необходимости (целесообразности) планируемых мероприятий
                </div>
                <br>
                <div class="text-right"><span>Таблица 2.2.3.a.</span><br></div>

                <table class="table border">
                    <thead>
                    <tr class="text-center">
                        <th class="text-center">№</th>
                        <th class="text-center">
                            Системы инженерно-технического обеспечения, замена и (или) восстановление которых планируется при капитальном ремонте
                        </th>
                        <th class="text-center">Наличие на объекте (да/нет)</th>
                        <th class="text-center">Материал конструкции</th>
                        <th class="text-center">Срок эксплуатации с момента монтажа или предыдущего капитального
                            ремонта (реконструкции)
                        </th>
                        <th class="text-center">Требуется капитальный ремонт (да/нет)</th>
                        <th class="text-center">Обоснование необходимости</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php
                        $objectActivities = $object->getObjectActivitiesWithLabels();
                        $activitiesTable223a = $objectActivities['table223a'];
                        $activitiesTable223b = $objectActivities['table223b'];
                    ?>
                    @foreach($activitiesTable223a as $index => $params)
                        <tr>
                            <td>{{ ++$index }}</td>
                            <td>{{ $params['label'] }}</td>
                            <td>{{ $params['availability'] }}</td>
                            <td>{{ $params['material'] }}</td>
                            <td>{{ $params['term'] }}</td>
                            <td>{{ $params['require_repair'] }}</td>
                            <td>{{ $params['rationale'] }}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>

                <div class="page-break"></div>
                <div class="text-right"><span>Таблица 2.2.3.б.</span><br></div>
                <table class="table border">
                    <thead>
                    <tr class="text-center">
                        <th class="text-center">№</th>
                        <th class="text-center">Строительные конструкции замена и (или) восстановление которых
                            планируются
                            при капитальном ремонте
                        </th>
                        <th class="text-center">Наличие на объекте (да/нет)</th>
                        <th class="text-center">Срок эксплуатации с момента строительства или предыдущего капитального
                            ремонта (реконструкции)
                        </th>
                        <th class="text-center">Требуется капитальный ремонт (да/нет)</th>
                        <th class="text-center">Обоснование необходимости</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($activitiesTable223b as $index => $params)
                        <tr>
                            <td>{{ ++$index }}</td>
                            <td>{{ $params['label'] }}</td>
                            <td>{{ $params['availability'] }}</td>
                            <td>{{ $params['term'] }}</td>
                            <td>{{ $params['require_repair'] }}</td>
                            <td>{{ $params['rationale'] }}</td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>

                <div class="page-break"></div>

                <div class="text-center">
                    <h3>3.2.4. Опись прилагаемых документов</h3>
                </div>
                <div class="text-right"><span>Таблица 3.2.4.</span><br></div>
                <table class="table border">
                    <thead>
                    <tr class="text-center">
                        <th class="text-center">№</th>
                        <th class="text-center">Документ</th>
                        <th class="text-center">Наличие</th>
                    </tr>
                    </thead>
                    <tbody>

                    @foreach($object->getBuildedFileList() as $index => $raw)
                        <tr>
                            <td>{{ ++$index }}</td>
                            <td>{{ $raw['label'] }}</td>
                            <td>{{ count($raw['files']) ? '+' : '-' }}</td>
                        </tr>
                    @endforeach

                    </tbody>
                </table>

                <div class="page-break"></div>

                <div class="text-center">
                    <h3>3.2.5. Ожидаемые результаты</h3>
                </div>
                <br>
                <div class="text-right"><span>Таблица 3.2.5.</span><br></div>
                <table class="table border">
                    <thead>
                    <tr class="text-center">
                        <th class="text-center">№</th>
                        <th class="text-center">Цели и задачи</th>
                        <th class="text-center">Планируемый показатель</th>
                        <th class="text-center">Ед. измерения</th>
                    </tr>
                    </thead>
                    <tbody>

                    @foreach($object->waited as $index => $stage)
                        @php
                            $plan = in_array($index, [2,3,4]) ? ($stage->plan ? 'Да' : 'Нет') : $stage->plan

                        @endphp
                        <tr>
                            <td>{{ ++$index }}</td>
                            <td>{{ $stage->aim }}</td>
                            <td>{{ $plan }}</td>
                            <td>{{ $stage->changes }}</td>
                        </tr>
                    @endforeach

                    </tbody>
                </table>

                <div class="page-break"></div>
            @endforeach





            <?php /*foreach ($objects as $index => $object): */?>
        <!--





            <div class="text-center">
                2.2.5. Ожидаемые результаты
            </div>

            <table class="table table-bordered">
                <thead>
                <tr class="text-center">
                    <th class="text-center">№</th>
                    <th class="text-center">Цели и задачи</th>
                    <th class="text-center">Планируемый показатель</th>
                    <th class="text-center">Ед. измерения</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Проведение капитального ремонта, общая площадь</td>
                    <td><?/*= getEvent($wai, $index, 0, 'plan') */?></td>
                    <td>кв.м</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Вовлечение в хозяйственную деятельность за счет проведенного капитального ремонта, общая
                        площадь
                    </td>
                    <td><?/*= getEvent($wai, $index, 1, 'plan') */?></td>
                    <td>кв.м</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Снижение затрат на эксплуатацию</td>
                    <td><?/*= getEvent($wai, $index, 2, 'plan') ? 'Да' : 'Нет' */?></td>
                    <td></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Повышение энергоэффективности</td>
                    <td><?/*= getEvent($wai, $index, 3, 'plan') ? 'Да' : 'Нет' */?></td>
                    <td></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Восстановление (ремонт, реставрация, за исключением реконструкции) объектов культурного
                        наследия
                    </td>
                    <td><?/*= getEvent($wai, $index, 4, 'plan') ? 'Да' : 'Нет' */?></td>
                    <td></td>
                </tr>
                <?php /*if (ArrayHelper::keyExists($index, $wai)): */?>
            <?php /*for ($i = 5, $k = 6; $i < count($wai[$index]); $i++, $k++): */?>
                <tr>
                    <td><?/*= $k */?></td>
                    <td><?/*= getEvent($wai, $index, $i, 'aim') */?></td>
                    <td><?/*= getEvent($wai, $index, $i, 'plan') */?></td>
                    <td><?/*= getEvent($wai, $index, $i, 'changes') */?></td>
                </tr>
                <?php /*endfor; */?>
            <?php /*endif; */?>

                </tbody>
            </table>
            <?php /*if (!in_array($org->id_type, [7, 9, 10])): */?>
                <div class="text-center">
                    2.2.6. Прогнозируемые риски
                </div>

                <table class="table table-bordered">
                    <thead class="table-bordered table">
                    <tr>
                        <th class="text-center">№</th>
                        <th class="text-center">Виды рисков</th>
                        <th class="text-center">Отрицательное влияние</th>
                        <th class="text-center">Способы защиты</th>
                    </tr>
                    </thead>
                    <tbody>
<?php /*if (ArrayHelper::keyExists($index, $risks)): */?>
            <?php /*foreach ($risks[$index] as $k => $risk): */?>
                <tr>
                    <td><?/*= $fdshj = $k + 1 */?></td>
                    <td><?/*= getEvent($risks, $index, $k, 'types') */?></td>
                    <td><?/*= getEvent($risks, $index, $k, 'poison') */?></td>
                    <td><?/*= getEvent($risks, $index, $k, 'protect') */?></td>
                </tr>
                <?php /*endforeach; */?>
            <?php /*endif; */?>
                </tbody>
            </table>
            <?php /*endif; */?>

                --><?php /*endforeach; */?>

        </div>
    </div>

    <style>
        .text-right {
            text-align: right;
        }

        body {
            font-family: "Times New Roman", serif;
        }

        table.border {
            border-left: 0.01em solid black;
            border-right: 0;
            border-top: 0.01em solid black;
            border-bottom: 0.01em solid black;
            border-collapse: collapse;
        }

        table.border td,
        table.border th,
        table.border tr {
            padding: 3px;
            border-left: 0;
            border-right: 0.01em solid black;
            border-top: 0;
            border-bottom: 0.01em solid black;
        }

        .page-break {
            page-break-after: always;
        }

        .bold {
            font-weight: bold;
        }

        .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
            border: 0;
            padding: 0;
        }

        th, td {
            text-align: center !important;
            vertical-align: middle !important;
        }

        .row {
            margin: 10px 0 0 0 !important;
            padding: 0 !important;
        }

        @page {
            footer: page-footer;
        }

        @media print {
            @page {
                size: auto;
            }
        }
    </style>

@endsection
