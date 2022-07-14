<template>
    <v-simple-table dense>
        <tr>
            <th>Показатель</th>
            <th>Значение</th>
        </tr>
        <tr>
            <td>Утвержденное бюджетное финансирование работ по объекту</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Сумма освоенных бюджетных средств</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Экономия бюджетных средств по объекту</td>
            <td>-</td>
        </tr>
    </v-simple-table>
</template>

<script>
export default {
  name: 'objectRealEvent',
  // props: ['events', 'program'],
  // computed: {
  //   costKapRem() {
  //     return this.program?.cost_kaprem || 0;
  //   },
  //   sumCostReal() {
  //     return this.events?.reduce((a, b) => a + parseFloat(b.p04), 0) || 0;
  //   },
  //   sumEco() {
  //     return this.costKapRem - this.sumCostReal;
  //   },
  // },
};
</script>

<style scoped>

</style>
