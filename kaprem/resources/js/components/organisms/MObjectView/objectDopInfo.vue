<template>
    <v-simple-table dense>
        <colgroup span="2" width="100%">
            <col span="1" width="30%">
            <col span="1" width="70%">
        </colgroup>
        <tbody>
        <tr>
            <td class="font-weight-bold">
                Вид капитального ремонта
            </td>
            <td>{{ data1 }}</td>
        </tr>
        <tr>
            <td class="font-weight-bold">
                Краткое описание планируемых работ
            </td>
            <td>{{ data2 }}</td>
        </tr>
        <tr>
            <td class="font-weight-bold">
                Площадь капитального ремонта
            </td>
            <td>{{ data3 }}</td>
        </tr>
        </tbody>
    </v-simple-table>
</template>

<script>
export default {
  name: 'objectDopInfo',
  props: ['events', 'waited'],
  computed: {
    data1(){
      const data = this.events?.repairType?.type_event?.label;
      return data ?? '-';
    },
    data2(){
      const data = this.events?.repairType?.short_description;
      return data ?? '-';
    },
    data3(){
      const data = this.waited?.at(0) ?? null;
      return data?.plan || '-'
    }
  }
};
</script>

<style scoped>

</style>
