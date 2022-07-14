<template>
    <m-page>
        <v-container>
            <v-row dense>
                <v-col cols="10">
                    <v-card outlined color="#f3f3f3">
                        <v-card-text>

                            <div class="mt-2">

                                <div class="d-flex">
                                    <span class="title">
                                        Документы по работе с Информационно-аналитической системой «Мониторинг» Минобрнауки России</span>
                                </div>
                                <!--    <br>-->
                                <a target="_blank" href="/download/manual">Руководство пользователя по программе капитального ремонта</a>
                                <br>

                            </div>
                            <br>

                            <div class="mt-2">
                                <span class="title ">
                                    Программное обеспечение для работы с ИС «Аттестация»</span>
                                <br><small>Рекомендованные интернет-браузеры:</small>
                                <br><span>Opera</span>
                                <br><span>Google Chrome</span>
                                <br><span>Яндекс Браузер</span>
                            </div>
                            <br>

                            <div class="mt-2">
                                <span class="title">Техническая поддержка</span>
                                <br><span>По вопросам технической поддержки обращайтесь по следующим контактам:</span>
                                <br><span><a>8-495-989-84-47</a> (многоканальный)</span>
                                <br><span>адрес электронной почты: <a>ias@mirea.ru</a></span>
                            </div>
                            <div class="mt-2">
                                <br><span>По методическим вопросам реализации программы капитального ремонта необходимо обращаться к экспертам Минобрнауки России.</span>
                                <br><span>Для получения контактных данных эксперта необходимо направить запрос с указанием полного наименования организации по адресу электронной почты:</span>
                                <br><span><a>support_monitoring@mirea.ru</a></span>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </m-page>

</template>

<script>

import MPage from '../../organisms/MPage';
import book from '../../../../assets/book.svg';

export default {
  name: 'Info',
  components: {
    MPage,
  },
  data: () => ({
    book,
  }),
};
</script>

<style scoped>
.blue_header {
    color: #000296;
    font-size: 12px;

}
</style>
