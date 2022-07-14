<template>
    <v-card>
        <v-simple-table v-if="!loading">
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="font-inter-normal-700" style="color: #1B202B;">Этап</th>
                    <th class="font-inter-normal-700" style="color: #1B202B;">Дата начала</th>
                    <th class="font-inter-normal-700" style="color: #1B202B;">Дата окончания</th>
                    <th class="font-inter-normal-700" style="color: #1B202B;">
                        Общий фактический объем финансирования (тыс.руб.)
                    </th>
                    <th class="font-inter-normal-700" style="color: #1B202B;">
                        В том числе бюджетное финансирование (тыс. руб.)
                    </th>
                    <th class="font-inter-normal-700" style="color: #1B202B;">
                        В том числе внебюджетное финансирование (тыс. руб.)
                    </th>
                    <th class="font-inter-normal-700" style="color: #1B202B;">Дата загрузки</th>
                    <th class="font-inter-normal-700" style="color: #1B202B;">Принято экспертом</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="(item, i) in items">
                    <tr>
                        <td class="font-inter-normal-400" style="color: #1B202B;">{{ i + 1 }}. {{ item.title }}</td>
                        <td class="font-inter-normal-400" style="color: #1B202B;">
                            {{ item.date_start ? getDate(item.date_start) : '-' }}
                        </td>
                        <td class="font-inter-normal-400" style="color: #1B202B;">
                            {{ item.date_end ? getDate(item.date_end) : '-' }}
                        </td>
                        <td class="font-inter-normal-400" style="color: #1B202B;">
                            {{
                                (item.budget_funding === null && item.offbudget_funding === null)
                                    ? '-'
                                    : (Number(item.budget_funding) + Number(item.offbudget_funding)).toFixed(3)
                            }}
                        </td>
                        <td class="font-inter-normal-400" style="color: #1B202B;">
                            {{ item.budget_funding === null ? '-' : Number(item.budget_funding).toFixed(3) }}
                        </td>
                        <td class="font-inter-normal-400" style="color: #1B202B;">
                            {{ item.offbudget_funding === null ? '-' : Number(item.offbudget_funding).toFixed(3) }}
                        </td>
                        <td class="font-inter-normal-400" style="color: #1B202B;">-</td>
                        <td class="font-inter-normal-400" style="color: #1B202B;">-</td>
                    </tr>
                    <template v-for="(document, j) in item.documents">
                        <tr>
                            <td class="font-inter-normal-400" style="color: #1B202B;" v-if="j === 0"
                                :rowspan="item.documents.length + countFiles(item.documents)">
                                Подтверждающие документы по этапу
                            </td>
                            <td class="font-inter-normal-400" colspan="5" style="color: #1B202B;">
                                {{ i + 1 }}.{{ j + 1 }}. {{ document.title }}
                            </td>
                            <td/>
                            <td/>
                        </tr>
                        <template v-for="(file, k) in document.files">
                            <tr>
                                <td class="font-inter-normal-400" colspan="5">
                                    <a target="_blank" v-if="file.is_link" :href="getLink(file.link)">
                                        {{ file.link }}
                                    </a>
                                    <a v-else @click="downloadFile(file)">{{ file.name }}.{{ file.extension }}</a>
                                </td>
                                <td class="font-inter-normal-400" style="color: #1B202B;">
                                    {{ getDate(file.created_at) }}
                                </td>
                                <td>
                                    <v-checkbox class="mt-0 pt-0" hide-details
                                                v-model="items[i].documents[j].files[k].accepted_expert"
                                                :disabled="!isAcceptedExpert" :false-value="0" :true-value="1"
                                                @change="setAcceptedExpert(i, j, k)"/>
                                </td>
                            </tr>
                        </template>
                    </template>
                </template>
                </tbody>
            </template>
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title class="font-inter-normal-800" style="color: #4E86E2;">
                        План-график мероприятий
                    </v-toolbar-title>
                    <v-divider class="mx-4" inset vertical/>
                    <v-spacer/>
                    <template v-if="isChange">
                        <v-btn color="primary" icon small @click="open">
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-dialog scrollable transition="dialog-bottom-transition" v-model="dialog">
                            <v-card>
                                <v-toolbar color="primary" dark>
                                    <v-toolbar-title>План-график мероприятий: редактирование</v-toolbar-title>
                                    <v-spacer/>
                                    <v-btn dark icon @click="close">
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-toolbar>
                                <v-card-text style="padding: 20px 24px;">
                                    <v-tabs>
                                        <template v-for="(item, i) in items">
                                            <v-tab>{{ i + 1 }}. {{ item.title }}</v-tab>
                                            <v-tab-item>
                                                <v-card flat>
                                                    <v-card-text>
                                                        <v-row>
                                                            <v-col>
                                                                <v-text-field dense hide-details label="Дата начала"
                                                                              outlined type="date"
                                                                              v-model="items[i].date_start"/>
                                                            </v-col>
                                                            <v-col>
                                                                <v-text-field dense hide-details label="Дата окончания"
                                                                              outlined type="date"
                                                                              v-model="items[i].date_end"/>
                                                            </v-col>
                                                        </v-row>
                                                        <v-row>
                                                            <v-col>
                                                                <v-text-field dense hide-details
                                                                              label="Бюджетное финансирование (тыс. руб.)"
                                                                              outlined type="number"
                                                                              v-model="items[i].budget_funding"/>
                                                            </v-col>
                                                            <v-col>
                                                                <v-text-field dense hide-details
                                                                              label="Внебюджетное финансирование (тыс. руб.)"
                                                                              outlined type="number"
                                                                              v-model="items[i].offbudget_funding"/>
                                                            </v-col>
                                                        </v-row>
                                                    </v-card-text>
                                                </v-card>
                                                <v-simple-table>
                                                    <template v-slot:default>
                                                        <tbody>
                                                        <template v-for="(document, j) in item.documents">
                                                            <template v-for="(file, k) in document.files">
                                                                <tr>
                                                                    <td v-if="k === 0"
                                                                        :rowspan="document.files.length + 1">
                                                                        {{ document.title }}
                                                                    </td>
                                                                    <td>
                                                                        <v-switch
                                                                            v-if="document.has_file && document.has_link"
                                                                            v-model="items[i].documents[j].files[k].is_link"/>
                                                                    </td>
                                                                    <td>
                                                                        <v-text-field dense hide-details="auto" outlined
                                                                                      placeholder="Ссылка"
                                                                                      prepend-icon="mdi-link"
                                                                                      v-if="file.is_link"
                                                                                      v-model="items[i].documents[j].files[k].link"/>
                                                                        <a v-else-if="file.name"
                                                                           @click="downloadFile(file)">
                                                                            {{ file.name }}.{{ file.extension }}
                                                                        </a>
                                                                        <v-file-input dense hide-details="auto" outlined
                                                                                      placeholder="Сканированный документ"
                                                                                      v-else
                                                                                      v-model="items[i].documents[j].files[k].file"/>
                                                                    </td>
                                                                    <td>
                                                                        <v-btn color="error" icon small
                                                                               @click="openDelete([i, j, k])">
                                                                            <v-icon>mdi-delete</v-icon>
                                                                        </v-btn>
                                                                    </td>
                                                                </tr>
                                                            </template>
                                                            <tr>
                                                                <td v-if="document.files.length === 0">
                                                                    {{ document.title }}
                                                                </td>
                                                                <td colspan="3">
                                                                    <v-btn block color="green" small text
                                                                           @click="addFile(i, j)">
                                                                        Добавить
                                                                    </v-btn>
                                                                </td>
                                                            </tr>
                                                        </template>
                                                        </tbody>
                                                    </template>
                                                </v-simple-table>
                                            </v-tab-item>
                                        </template>
                                    </v-tabs>
                                </v-card-text>
                                <v-divider/>
                                <v-card-actions>
                                    <v-spacer/>
                                    <v-btn color="blue darken-1" text @click="save">Сохранить</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-dialog max-width="500px" v-model="dialog_delete">
                            <v-card>
                                <v-card-title class="text-h5">Удаление</v-card-title>
                                <v-card-text>Вы точно хотите удалить?</v-card-text>
                                <v-card-actions>
                                    <v-spacer/>
                                    <v-btn text @click="closeDelete">Отмена</v-btn>
                                    <v-btn color="error darken-1" text @click="deleteFile">Удалить</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </template>
                </v-toolbar>
            </template>
        </v-simple-table>
    </v-card>
</template>

<script>
import {SubsidiesMixin} from "../../mixins/SubsidiesMixin";

export default {
    data: () => ({
        dialog: false,
        delete_indexes: null,
        dialog_delete: false,
        items: [],
        templates: {
            '02-01': [
                /*{
                    title: 'Соглашение о предоставлении субсидии',
                    type: 1, date_start: null, date_end: null, budget_funding: null, offbudget_funding: null,
                    documents: [
                        {
                            title: 'Соглашение о предоставлении субсидии, заключенное с Минобрнауки РФ (сканированная копия)',
                            subtype: 1, has_file: true, has_link: false, files: []
                        },
                        {title: 'Другие документы', subtype: 2, has_file: true, has_link: true, files: []}
                    ]
                },
                {
                    title: 'Техническое обследование',
                    type: 2, date_start: null, date_end: null, budget_funding: null, offbudget_funding: null,
                    documents: [
                        {
                            title: 'Объявление аукциона на выполнение обследования (ссылка на портал zakupki.gov.ru)',
                            subtype: 1, has_file: false, has_link: true, files: []
                        },
                        {
                            title: 'Протокол результатов проведения аукциона (ссылка или сканированный документ)',
                            subtype: 2, has_file: true, has_link: true, files: []
                        },
                        {
                            title: 'Договор на выполнение обследования',
                            subtype: 3, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Отчет о техническом обследовании',
                            subtype: 4, has_file: true, has_link: false, files: []
                        },
                        {title: 'Дефектный акт', subtype: 5, has_file: true, has_link: false, files: []},
                        {title: 'Другие документы', subtype: 6, has_file: true, has_link: true, files: []}
                    ]
                },
                {
                    title: 'Разработка проектно-сметной документации',
                    type: 3, date_start: null, date_end: null, budget_funding: null, offbudget_funding: null,
                    documents: [
                        {
                            title: 'Утвержденное задание на проектирование (скан)',
                            subtype: 1, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Объявление аукциона на разработку ПСД (ссылка на портал zakupki.gov.ru)',
                            subtype: 2, has_file: false, has_link: true, files: []
                        },
                        {
                            title: 'Протокол результатов проведения аукциона (ссылка или сканированный документ)',
                            subtype: 3, has_file: true, has_link: true, files: []
                        },
                        {
                            title: 'Договор на разработку ПСД (скан)',
                            subtype: 4, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Акт сдачи-приемки выполненных проектных работ',
                            subtype: 5, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Проектно-сметная документация',
                            subtype: 6, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Документы, подтверждающие перечисление бюджетных средств подрядчику',
                            subtype: 7, has_file: true, has_link: false, files: []
                        },
                        {title: 'Другие документы', subtype: 8, has_file: true, has_link: true, files: []}
                    ]
                },
                {
                    title: 'Государственная экспертиза проектно-сметной документации',
                    type: 4, date_start: null, date_end: null, budget_funding: null, offbudget_funding: null,
                    documents: [
                        {
                            title: 'Договор на оказание услуг государственной экспертизы',
                            subtype: 1, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Заключение государственной экспертизы',
                            subtype: 2, has_file: true, has_link: false, files: []
                        },
                        {title: 'Другие документы', subtype: 3, has_file: true, has_link: true, files: []}
                    ]
                },*/
                {
                    title: 'Строительно-монтажные работы',
                    type: 5, date_start: null, date_end: null, budget_funding: null, offbudget_funding: null,
                    documents: [
                        {
                            title: 'Объявление аукциона на выполнение СМР (ссылка на портал zakupki.gov.ru)',
                            subtype: 1, has_file: false, has_link: true, files: []
                        },
                        {
                            title: 'Протокол результатов проведения аукциона (ссылка или сканированный документ)',
                            subtype: 2, has_file: true, has_link: true, files: []
                        },
                        {
                            title: 'Договор на выполнение работ по капитальному ремонту (скан)',
                            subtype: 3, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Акт сдачи-приемки выполненных работ',
                            subtype: 4, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Фотофиксация выполненных работ',
                            subtype: 5, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Документы, подтверждающие перечисление бюджетных средств подрядчику',
                            subtype: 6, has_file: true, has_link: false, files: []
                        },
                        {title: 'Другие документы', subtype: 7, has_file: true, has_link: true, files: []}
                    ]
                }
            ],
            '02-08': [
                /*{
                    title: 'Соглашение о предоставлении субсидии',
                    type: 1, date_start: null, date_end: null, budget_funding: null, offbudget_funding: null,
                    documents: [
                        {
                            title: 'Соглашение о предоставлении субсидии, заключенное с Минобрнауки РФ (сканированная копия)',
                            subtype: 1, has_file: true, has_link: false, files: []
                        },
                        {title: 'Другие документы', subtype: 2, has_file: true, has_link: true, files: []}
                    ]
                },*/
                {
                    title: 'Техническое обследование',
                    type: 2, date_start: null, date_end: null, budget_funding: null, offbudget_funding: null,
                    documents: [
                        /*{
                            title: 'Объявление аукциона на выполнение обследования (ссылка на портал zakupki.gov.ru)',
                            subtype: 1, has_file: false, has_link: true, files: []
                        },
                        {
                            title: 'Протокол результатов проведения аукциона (ссылка или сканированный документ)',
                            subtype: 2, has_file: true, has_link: true, files: []
                        },*/
                        {
                            title: 'Договор на выполнение обследования',
                            subtype: 3, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Отчет о техническом обследовании',
                            subtype: 4, has_file: true, has_link: false, files: []
                        },
                        {title: 'Дефектный акт', subtype: 5, has_file: true, has_link: false, files: []},
                        {title: 'Другие документы', subtype: 6, has_file: true, has_link: true, files: []}
                    ]
                },
                /*{
                    title: 'Разработка проектно-сметной документации',
                    type: 3, date_start: null, date_end: null, budget_funding: null, offbudget_funding: null,
                    documents: [
                        {
                            title: 'Утвержденное задание на проектирование (скан)',
                            subtype: 1, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Объявление аукциона на разработку ПСД (ссылка на портал zakupki.gov.ru)',
                            subtype: 2, has_file: false, has_link: true, files: []
                        },
                        {
                            title: 'Протокол результатов проведения аукциона (ссылка или сканированный документ)',
                            subtype: 3, has_file: true, has_link: true, files: []
                        },
                        {
                            title: 'Договор на разработку ПСД (скан)',
                            subtype: 4, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Акт сдачи-приемки выполненных проектных работ',
                            subtype: 5, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Проектно-сметная документация',
                            subtype: 6, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Документы, подтверждающие перечисление бюджетных средств подрядчику',
                            subtype: 7, has_file: true, has_link: false, files: []
                        },
                        {title: 'Другие документы', subtype: 8, has_file: true, has_link: true, files: []}
                    ]
                },
                {
                    title: 'Государственная экспертиза проектно-сметной документации',
                    type: 4, date_start: null, date_end: null, budget_funding: null, offbudget_funding: null,
                    documents: [
                        {
                            title: 'Договор на оказание услуг государственной экспертизы',
                            subtype: 1, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Заключение государственной экспертизы',
                            subtype: 2, has_file: true, has_link: false, files: []
                        },
                        {title: 'Другие документы', subtype: 3, has_file: true, has_link: true, files: []}
                    ]
                },
                {
                    title: 'Строительно-монтажные работы',
                    type: 5, date_start: null, date_end: null, budget_funding: null, offbudget_funding: null,
                    documents: [
                        {
                            title: 'Объявление аукциона на выполнение СМР (ссылка на портал zakupki.gov.ru)',
                            subtype: 1, has_file: false, has_link: true, files: []
                        },
                        {
                            title: 'Протокол результатов проведения аукциона (ссылка или сканированный документ)',
                            subtype: 2, has_file: true, has_link: true, files: []
                        },
                        {
                            title: 'Договор на выполнение работ по капитальному ремонту (скан)',
                            subtype: 3, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Акт сдачи-приемки выполненных работ',
                            subtype: 4, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Фотофиксация выполненных работ',
                            subtype: 5, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Документы, подтверждающие перечисление бюджетных средств подрядчику',
                            subtype: 6, has_file: true, has_link: false, files: []
                        },
                        {title: 'Другие документы', subtype: 7, has_file: true, has_link: true, files: []}
                    ]
                }*/
            ],
            '02-10': [
                /*{
                    title: 'Соглашение о предоставлении субсидии',
                    type: 1, date_start: null, date_end: null, budget_funding: null, offbudget_funding: null,
                    documents: [
                        {
                            title: 'Соглашение о предоставлении субсидии, заключенное с Минобрнауки РФ (сканированная копия)',
                            subtype: 1, has_file: true, has_link: false, files: []
                        },
                        {title: 'Другие документы', subtype: 2, has_file: true, has_link: true, files: []}
                    ]
                },
                {
                    title: 'Техническое обследование',
                    type: 2, date_start: null, date_end: null, budget_funding: null, offbudget_funding: null,
                    documents: [
                        {
                            title: 'Объявление аукциона на выполнение обследования (ссылка на портал zakupki.gov.ru)',
                            subtype: 1, has_file: false, has_link: true, files: []
                        },
                        {
                            title: 'Протокол результатов проведения аукциона (ссылка или сканированный документ)',
                            subtype: 2, has_file: true, has_link: true, files: []
                        },
                        {
                            title: 'Договор на выполнение обследования',
                            subtype: 3, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Отчет о техническом обследовании',
                            subtype: 4, has_file: true, has_link: false, files: []
                        },
                        {title: 'Дефектный акт', subtype: 5, has_file: true, has_link: false, files: []},
                        {title: 'Другие документы', subtype: 6, has_file: true, has_link: true, files: []}
                    ]
                },*/
                {
                    title: 'Разработка проектно-сметной документации',
                    type: 3, date_start: null, date_end: null, budget_funding: null, offbudget_funding: null,
                    documents: [
                        {
                            title: 'Утвержденное задание на проектирование (скан)',
                            subtype: 1, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Объявление аукциона на разработку ПСД (ссылка на портал zakupki.gov.ru)',
                            subtype: 2, has_file: false, has_link: true, files: []
                        },
                        {
                            title: 'Протокол результатов проведения аукциона (ссылка или сканированный документ)',
                            subtype: 3, has_file: true, has_link: true, files: []
                        },
                        {
                            title: 'Договор на разработку ПСД (скан)',
                            subtype: 4, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Акт сдачи-приемки выполненных проектных работ',
                            subtype: 5, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Проектно-сметная документация',
                            subtype: 6, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Документы, подтверждающие перечисление бюджетных средств подрядчику',
                            subtype: 7, has_file: true, has_link: false, files: []
                        },
                        {title: 'Другие документы', subtype: 8, has_file: true, has_link: true, files: []}
                    ]
                },
                {
                    title: 'Государственная экспертиза проектно-сметной документации',
                    type: 4, date_start: null, date_end: null, budget_funding: null, offbudget_funding: null,
                    documents: [
                        {
                            title: 'Договор на оказание услуг государственной экспертизы',
                            subtype: 1, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Заключение государственной экспертизы',
                            subtype: 2, has_file: true, has_link: false, files: []
                        },
                        {title: 'Другие документы', subtype: 3, has_file: true, has_link: true, files: []}
                    ]
                },
                /*{
                    title: 'Строительно-монтажные работы',
                    type: 5, date_start: null, date_end: null, budget_funding: null, offbudget_funding: null,
                    documents: [
                        {
                            title: 'Объявление аукциона на выполнение СМР (ссылка на портал zakupki.gov.ru)',
                            subtype: 1, has_file: false, has_link: true, files: []
                        },
                        {
                            title: 'Протокол результатов проведения аукциона (ссылка или сканированный документ)',
                            subtype: 2, has_file: true, has_link: true, files: []
                        },
                        {
                            title: 'Договор на выполнение работ по капитальному ремонту (скан)',
                            subtype: 3, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Акт сдачи-приемки выполненных работ',
                            subtype: 4, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Фотофиксация выполненных работ',
                            subtype: 5, has_file: true, has_link: false, files: []
                        },
                        {
                            title: 'Документы, подтверждающие перечисление бюджетных средств подрядчику',
                            subtype: 6, has_file: true, has_link: false, files: []
                        },
                        {title: 'Другие документы', subtype: 7, has_file: true, has_link: true, files: []}
                    ]
                }*/
            ]
        },
        loading: true
    }),
    methods: {
        addFile(i, j) {
            this.items[i].documents[j].files.push({
                is_link: (!this.items[i].documents[j].has_file && this.items[i].documents[j].has_link),
                link: null, file: null
            })
        },
        countFiles(documents) {
            let count = 0
            documents.forEach(document => {
                count += document.files.length
            })
            return count
        },
        close() {
            this.dialog = false
        },
        closeDelete() {
            this.dialog_delete = false
            this.$nextTick(() => {
                this.delete_indexes = null
            })
        },
        async deleteFile() {
            const i = this.delete_indexes[0],
                j = this.delete_indexes[1],
                k = this.delete_indexes[2]
            if (this.items[i].documents[j].files[k].id) {
                const file = this.items[i].documents[j].files[k]
                const submitter = Axios.post(
                    `/subsidies/${this.code}/${this.subsidyId}/schedule-events/${file.type}/files/${file.subtype}/${file.id}/delete`,
                    new FormData()
                )
                submitter.catch(({response}) => {
                    console.log(response.data.errors)
                })
                submitter.then(async ({data}) => {
                    console.log(data)
                    if (data.success) {
                        this.items[i].documents[j].files.splice(k, 1)
                        this.closeDelete()
                    }
                })
                await submitter
            } else {
                this.items[i].documents[j].files.splice(k, 1)
            }
        },
        downloadFile(item) {
            window.open(`/subsidies/${this.code}/${this.subsidyId}/schedule-events/${item.type}/files/${item.subtype}/${item.id}/download`)
        },
        async getItems() {
            this.loading = true
            this.items = [...this.templates[this.code]]
            const items = await this.fetch('subsidy_schedule_events', {
                budget_funding: true,
                date_end: true,
                date_start: true,
                files: {
                    accepted_expert: true,
                    created_at: true,
                    extension: true,
                    id: true,
                    is_link: true,
                    link: true,
                    name: true,
                    subtype: true,
                    title: true,
                    type: true
                },
                id: true,
                offbudget_funding: true,
                type: true
            }, {subsidy_id: parseInt(this.subsidyId)})
            items.forEach(item => {
                const i = this.items.findIndex(element => element.type === item.type)
                this.items[i].id = item.id
                this.items[i].date_start = item.date_start
                this.items[i].date_end = item.date_end
                this.items[i].budget_funding = item.budget_funding
                this.items[i].offbudget_funding = item.offbudget_funding
                item.files.forEach(file => {
                    const j = this.items[i].documents.findIndex(element => element.subtype === file.subtype)
                    this.items[i].documents[j].files.push(file)
                })
            })
            this.loading = false
        },
        getLink(link) {
            if (link) {
                if (link.indexOf('http://') !== -1 || link.indexOf('https://') !== -1) {
                    return link
                }
                return `https://${link}`
            }
            return null
        },
        open() {
            this.dialog = true
        },
        openDelete(arr) {
            this.delete_indexes = arr
            this.dialog_delete = true
        },
        async save() {
            let check = true
            console.log(this.items)
            for (let i = 0; i < this.items.length; i++) {
                const item = this.items[i]
                const formData = new FormData()
                formData.append('form', JSON.stringify(item))
                const submitter = Axios.post(`/subsidies/${this.code}/${this.subsidyId}/schedule-events/${item.type}/edit`, formData)
                submitter.catch(({response}) => {
                    console.log(response.data.errors)
                })
                submitter.then(async ({data}) => {
                    console.log(data)
                    if (data.success) {
                        this.items[i].id = data.item.id
                        this.items[i].date_start = data.item.date_start
                        this.items[i].date_end = data.item.date_end
                        this.items[i].budget_funding = data.item.budget_funding
                        this.items[i].offbudget_funding = data.item.offbudget_funding
                        for (let j = 0; j < item.documents.length; j++) {
                            const document = item.documents[j]
                            for (let k = 0; k < document.files.length; k++) {
                                const file = document.files[k]
                                if (file.link || file.file) {
                                    const formData = new FormData()
                                    formData.append('file', file.file)
                                    formData.append('form', JSON.stringify({
                                        title: document.title,
                                        is_link: file.is_link,
                                        link: file.link
                                    }))
                                    const submitter = Axios.post(
                                        file.id
                                            ? `/subsidies/${this.code}/${this.subsidyId}/schedule-events/${item.type}/files/${document.subtype}/${file.id}/edit`
                                            : `/subsidies/${this.code}/${this.subsidyId}/schedule-events/${item.type}/files/${document.subtype}/add`,
                                        formData
                                    )
                                    submitter.catch(({response}) => {
                                        console.log(response.data.errors)
                                    })
                                    submitter.then(async ({data}) => {
                                        console.log(data)
                                        if (data.success) {
                                            Object.assign(this.items[i].documents[j].files[k], data.item)
                                        } else {
                                            check = false
                                        }
                                    })
                                    await submitter
                                }
                            }
                        }
                    } else {
                        check = false
                    }
                })
                await submitter
            }
            if (check) {
                this.close()
            }
        },
        async setAcceptedExpert(i, j, k) {
            const file = this.items[i].documents[j].files[k]
            const formData = new FormData()
            formData.append('accepted_expert', JSON.stringify(file.accepted_expert))
            const submitter = Axios.post(
                `/subsidies/${this.code}/${this.subsidyId}/schedule-events/${file.type}/files/${file.subtype}/${file.id}/set-accepted-expert`,
                formData
            )
            submitter.catch(({response}) => {
                console.log(response.data.errors)
            })
            submitter.then(async ({data}) => {
                console.log(data)
                if (!data.success) {
                    this.items[i].documents[j].files[k] = (file.accepted_expert ? 0 : 1)
                }
            })
            await submitter
        }
    },
    mixins: [SubsidiesMixin],
    async mounted() {
        console.log('--- SubsidyScheduleEvents mounted start ---')
        await this.getItems()
        console.log('--- SubsidyScheduleEvents mounted end ---')
    },
    name: "SubsidyScheduleEvents",
    props: {
        code: {require: true, type: String},
        isAcceptedExpert: {default: false, type: Boolean},
        isChange: {default: false, type: Boolean},
        subsidyId: {require: true, type: Number | String}
    }
}
</script>
