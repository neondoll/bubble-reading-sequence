<template>
    <div>
        <div v-if="hasLength" id="gantt"></div>
        <v-alert v-else outlined type="error">
            Сведения о планируемых мероприятиях не заполнены или заполнены неверно
        </v-alert>
    </div>
</template>

<script>

import Highcharts from 'highcharts/highcharts-gantt';
import {objectEventsMixin} from '../../../mixins/objectEventsMixin';

export default {
  name: 'objectGantt',
  props: ['events'],
  data: () => ({
    xAxis: [
      {
        tickInterval: 1000 * 60 * 60 * 24 * 30, // Month
      },
    ],

    series: [{data: []}],

    exporting: {
      sourceWidth: 1000,
    },
  }),
  mounted() {
    this.initHighCharts();
  },
  mixins: [objectEventsMixin],
  computed: {
    hasLength() {
      return this.series[0].data.length > 0;
    },
  },
  methods: {
    updateGanttCharts() {
      this.series[0].data = this.events.map((item, index) => {
        if (item.p02 && item.p03 && item.p01) {
          //console.log(item);
          let name = this.eventStages.find(i => i.stage === parseInt(item.stage));
          let date = item.p02.split('-').map(i => parseInt(i));
          let date2 = item.p03.split('-').map(i => parseInt(i));
          return {
            start: Date.UTC(date[0], date[1] - 1, date[2]),
            end: Date.UTC(date2[0], date2[1] - 1, date2[2]),
            name: name.text,
            y: index,
          };
        }
      }).filter(item => item);
      this.$nextTick(function() {
        if (this.hasLength) {
          Highcharts.ganttChart('gantt', {
            title: this.title,
            xAxis: this.xAxis,
            series: this.series,
            // exporting: this.exporting,
          });
        }
      });

      //console.log(this.series[0].data);

    },
    initHighCharts() {
      Highcharts.setOptions({
        lang: {
          months: [
            'Январь', 'Февраль', 'Март', 'Апрель',
            'Май', 'Июнь', 'Июль', 'Август',
            'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
          ],
          shortMonths: [
            'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек',
          ],
        },

      });
      this.updateGanttCharts();

    },
  },
};
</script>

<style scoped>

</style>
