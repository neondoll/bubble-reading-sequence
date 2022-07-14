<template>
    <div class="object-info-events">
        <v-simple-table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Этап</th>
                    <th>Необходимость выполнения (да/нет)</th>
                    <th>Дата начала (план.)</th>
                    <th>Дата окончания (план.)</th>
                    <th>Стоимость реализации (тыс.руб.)</th>
                    <th>В том числе бюджетное финансирование (тыс. руб.)</th>
                    <th>В том числе внебюджетное финансирование (тыс. руб.) (тыс. руб.)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Выполнение обследования, подготовка и утверждение дефектного акта (дефектной ведомости).</td>
                    <td>-</td>
                    <td>{{ formatDateIfItIsDate(events.survey.start) }}</td>
                    <td>{{ formatDateIfItIsDate(events.survey.end) }}</td>
                    <td></td>
                    <td>{{ events.survey.budjet }}</td>
                    <td>{{ events.survey.cost }}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Утверждение задания на проектирование, Подготовка проектно-сметной документации.</td>
                    <td>{{ events.psd.documentation.label }}</td>
                    <td>{{ formatDateIfItIsDate(events.psd.start) }}</td>
                    <td>{{ formatDateIfItIsDate(events.psd.end) }}</td>
                    <td></td>
                    <td>{{ events.psd.budjet }}</td>
                    <td>{{ events.psd.not_budjet }}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Прохождение государственной экспертизы проектно-сметной документации.</td>
                    <td>{{ events.gge.conclusion.label }}</td>
                    <td>{{ formatDateIfItIsDate(events.gge.start) }}</td>
                    <td>{{ formatDateIfItIsDate(events.gge.end) }}</td>
                    <td></td>
                    <td>{{ events.gge.budjet }}</td>
                    <td>{{ events.gge.not_budjet }}</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Выполнение строительно-монтажных работ.</td>
                    <td>-</td>
                    <td>{{ formatDateIfItIsDate(events.smr.start) }}</td>
                    <td>{{ formatDateIfItIsDate(events.smr.end) }}</td>
                    <td></td>
                    <td>{{ events.smr.budjet }}</td>
                    <td>{{ events.smr.not_budjet }}</td>
                </tr>
                <tr>
                    <td
                        colspan="2"
                        class="font-weight-bold"
                    >Итого</td>
                    <td class="font-weight-bold">-</td>
                    <td class="font-weight-bold">-</td>
                    <td class="font-weight-bold">-</td>
                    <td class="font-weight-bold">-</td>
                    <td class="font-weight-bold">{{ totalBubjet }}</td>
                    <td class="font-weight-bold">{{ totalNotBudjet }}</td>
                </tr>
            </tbody>
        </v-simple-table>
    </div>
</template>

<script>
export default {
    name: "ObjectInfoEvents",
    props: {
        events: {
            require: true
        },
        finance: {
            require: true
        },
        coFinance: {
            require: true
        },
    },
    computed: {
        totalBubjet () {
            return (
                parseFloat( this.events.survey.budjet || 0 ) +
                parseFloat( this.events.psd.budjet || 0 ) +
                parseFloat( this.events.gge.budjet || 0 ) +
                parseFloat( this.events.smr.budjet || 0 )
            ).toFixed( 2 );
        },
        totalNotBudjet () {
            return (
                parseFloat( this.events.survey.cost || 0 ) +
                parseFloat( this.events.psd.not_budjet || 0 ) +
                parseFloat( this.events.gge.not_budjet || 0 ) +
                parseFloat( this.events.smr.not_budjet || 0 )
            ).toFixed( 2 );
        }
    },
    methods: {
        formatDateIfItIsDate ( dateOrNot ) {
            if ( dateOrNot === '-' || dateOrNot === null ) return '-';

            const dateTime = new Date( dateOrNot );
            const month = dateTime.getMonth() + 1;
            return `${dateTime.getDate()}.${month < 10 ? '0' + month : month}.${dateTime.getFullYear()}`;
        },
    }
}
</script>

<style scoped>
</style>
