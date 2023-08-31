import {reactive} from "vue";
import * as vNG from "v-network-graph";
import Edge from "./interfaces/Edge";
import Node from "./interfaces/Node";

const color_bubble = "#1761ff";
const color_besoboy = "rgb(51, 51, 153)";
const color_mayor_grom = "rgb(255, 94, 0)";
const color_inok = "rgb(255, 255, 51)";
const color_krasnaya_furiya = "rgb(119, 2, 2)";
const color_inok_vs_besoboy = "rgb(153,153,102)"; // color_bubble
const color_ekslibrium = "rgb(137, 255, 108)";
const color_meteora = "rgb(0, 240, 255)";

const size_single = 16;
const size_tome = size_single * 1.5;

const nodes: Record<string, Node> = {
    node_besoboy_single_1: {
        name: "Бесобой #1 Имя ему Бесобой, часть 1",
        number: "1",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_2: {
        name: "Бесобой #2 Имя ему Бесобой, часть 2",
        number: "2",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_3: {
        name: "Бесобой #3 Имя ему Бесобой, часть 3",
        number: "3",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_4: {
        name: "Бесобой #4 Яблоко раздора; Призраки прошлого",
        number: "4",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_5: {
        name: "Бесобой #5 Имя ему Бесобой, часть 4",
        number: "5",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_6: {
        name: "Бесобой #6 Недетские игры, часть 1",
        number: "6",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_7: {
        name: "Бесобой #7 Недетские игры, часть 2",
        number: "7",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_8: {
        name: "Бесобой #8 Страшная тайна, часть 1",
        number: "8",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_9: {
        name: "Бесобой #9 Страшная тайна, часть 2",
        number: "9",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_10: {
        name: "Бесобой #10 Лицо зверя, часть 1",
        number: "10",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_11: {
        name: "Бесобой #11 Лицо зверя, часть 2",
        number: "11",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_12: {
        name: "Бесобой #12 Лицо зверя, часть 3",
        number: "12",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_13: {
        name: "Бесобой #13 Лицо зверя, часть 4",
        number: "13",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_14: {
        name: "Бесобой #14 Лицо зверя: Эпилог",
        number: "14",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_15: {
        name: "Бесобой #15 Инок против Бесобоя, часть 1",
        number: "15",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_16: {
        name: "Бесобой #16 Инок против Бесобоя, часть 4",
        number: "16",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_17: {
        name: "Бесобой #17 Инок против Бесобоя, часть 7",
        number: "17",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_18: {
        name: "Бесобой #18 Три сестры, часть 1",
        number: "18",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_19: {
        name: "Бесобой #19 Три сестры, часть 2",
        number: "19",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_20: {
        name: "Бесобой #20 Три сестры, часть 3",
        number: "20",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_21: {
        name: "Бесобой #21 Три сестры, часть 4",
        number: "21",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_22: {
        name: "Бесобой #22 Три сестры, часть 5",
        number: "22",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_23: {
        name: "Бесобой #23 Равновесие, часть 1",
        number: "23",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_24: {
        name: "Бесобой #24 Равновесие, часть 2",
        number: "24",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_25: {name: "Бесобой #25 Чистая душа", number: "25", size: size_single, color: color_besoboy},
    node_besoboy_single_26: {name: "Бесобой #26 Друг", number: "26", size: size_single, color: color_besoboy},
    node_besoboy_single_27: {name: "Бесобой #27 Балор", number: "27", size: size_single, color: color_besoboy},
    node_besoboy_single_28: {
        name: "Бесобой #28 Курьер; Неизбежность",
        number: "28",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_29: {name: "Бесобой #29 Метро, часть 1", number: "29", size: size_single, color: color_besoboy},
    node_besoboy_single_30: {name: "Бесобой #30 Метро, часть 2", number: "30", size: size_single, color: color_besoboy},
    node_besoboy_single_31: {name: "Бесобой #31 Метро, часть 3", number: "31", size: size_single, color: color_besoboy},
    node_besoboy_single_32: {name: "Бесобой #32 Метро, часть 4", number: "32", size: size_single, color: color_besoboy},
    node_besoboy_single_33: {name: "Бесобой #33 Исповедь", number: "33", size: size_single, color: color_besoboy},
    node_besoboy_single_34: {name: "Бесобой #34 Стая, часть 1", number: "34", size: size_single, color: color_besoboy},

    node_mayor_grom_single_1: {
        name: "Майор Гром #1 Чумной Доктор, часть 1",
        number: "1",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_2: {
        name: "Майор Гром #2 Чумной Доктор, часть 2",
        number: "2",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_3: {
        name: "Майор Гром #3 Чумной Доктор, часть 3",
        number: "3",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_4: {
        name: "Майор Гром #4 Бабочки в животе; Ва-банк",
        number: "4",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_5: {
        name: "Майор Гром #5 Чумной Доктор, часть 4",
        number: "5",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_6: {
        name: "Майор Гром #6 Чумной Доктор, часть 5",
        number: "6",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_7: {
        name: "Майор Гром #7 Чумной Доктор, часть 6",
        number: "7",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_8: {
        name: "Майор Гром #8 Чумной Доктор, часть 7",
        number: "8",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_9: {
        name: "Майор Гром #9 Чумной Доктор, часть 8",
        number: "9",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_10: {
        name: "Майор Гром #10 Блогофобия; Сувенир; Метаморфоза",
        number: "10",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_11: {
        name: "Майор Гром #11 День Святого Патрика, часть 1",
        number: "11",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_12: {
        name: "Майор Гром #12 День Святого Патрика, часть 2",
        number: "12",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_13: {
        name: "Майор Гром #13 День Святого Патрика, часть 3",
        number: "13",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_14: {
        name: "Майор Гром #14 День Святого Патрика, часть 4",
        number: "14",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_15: {
        name: "Майор Гром #15 День Святого Патрика, часть 5",
        number: "15",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_16: {
        name: "Майор Гром #16 День Святого Патрика, часть 6",
        number: "16",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_17: {
        name: "Майор Гром #17 День Святого Патрика, часть 7",
        number: "17",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_18: {
        name: "Майор Гром #18 День Святого Патрика, часть 8",
        number: "18",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_19: {
        name: "Майор Гром #19 Как в сказке, часть 1",
        number: "19",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_20: {
        name: "Майор Гром #20 Как в сказке, часть 2",
        number: "20",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_21: {
        name: "Майор Гром #21 Как в сказке, часть 3",
        number: "21",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_22: {
        name: "Майор Гром #22 Как в сказке, часть 4",
        number: "22",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_23: {
        name: "Майор Гром #23 Как в сказке, часть 5",
        number: "23",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_24: {
        name: "Майор Гром #24 Как в сказке, часть 6",
        number: "24",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_25: {
        name: "Майор Гром #25 Игра, часть 1",
        number: "25",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_26: {
        name: "Майор Гром #26 Игра, часть 2",
        number: "26",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_27: {
        name: "Майор Гром #27 Игра, часть 3",
        number: "27",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_28: {
        name: "Майор Гром #28 Игра, часть 4",
        number: "28",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_29: {
        name: "Майор Гром #29 Игра, часть 5",
        number: "29",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_30: {
        name: "Майор Гром #30 Игра, часть 6",
        number: "30",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_31: {
        name: "Майор Гром #31 Игра, часть 7",
        number: "31",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_32: {
        name: "Майор Гром #32 Игра, часть 8",
        number: "32",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_33: {
        name: "Майор Гром #33 Игра, часть 9",
        number: "33",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_34: {
        name: "Майор Гром #34 Голоса, часть 1",
        number: "34",
        size: size_single,
        color: color_mayor_grom
    },

    node_inok_single_1: {
        name: "Инок #1 Проданная реликвия, часть 1",
        number: "1",
        size: size_single,
        color: color_inok
    },
    node_inok_single_2: {
        name: "Инок #2 Проданная реликвия, часть 2",
        number: "2",
        size: size_single,
        color: color_inok
    },
    node_inok_single_3: {
        name: "Инок #3 Проданная реликвия, часть 3",
        number: "3",
        size: size_single,
        color: color_inok
    },
    node_inok_single_4: {name: "Инок #4 Подарок; По воле совета", number: "4", size: size_single, color: color_inok},
    node_inok_single_5: {
        name: "Инок #5 Проданная реликвия, часть 4",
        number: "5",
        size: size_single,
        color: color_inok
    },
    node_inok_single_6: {
        name: "Инок #6 Проданная реликвия, часть 5",
        number: "6",
        size: size_single,
        color: color_inok
    },
    node_inok_single_7: {
        name: "Инок #7 Проданная реликвия, часть 6",
        number: "7",
        size: size_single,
        color: color_inok
    },
    node_inok_single_8: {
        name: "Инок #8 Проданная реликвия, часть 7",
        number: "8",
        size: size_single,
        color: color_inok
    },
    node_inok_single_9: {
        name: "Инок #9 Проданная реликвия, часть 8",
        number: "9",
        size: size_single,
        color: color_inok
    },
    node_inok_single_10: {
        name: "Инок #10 Проданная реликвия, часть 9",
        number: "10",
        size: size_single,
        color: color_inok
    },
    node_inok_single_11: {
        name: "Инок #11 Проданная реликвия, часть 10",
        number: "11",
        size: size_single,
        color: color_inok
    },
    node_inok_single_12: {
        name: "Инок #12 Проданная реликвия, часть 11",
        number: "12",
        size: size_single,
        color: color_inok
    },
    node_inok_single_13: {
        name: "Инок #13 Проданная реликвия, часть 12",
        number: "13",
        size: size_single,
        color: color_inok
    },
    node_inok_single_14: {
        name: "Инок #14 Крест; Союз; Чёрный Ворон",
        number: "14",
        size: size_single,
        color: color_inok
    },
    node_inok_single_15: {
        name: "Инок #15 Инок против Бесобоя, часть 2",
        number: "15",
        size: size_single,
        color: color_inok
    },
    node_inok_single_16: {
        name: "Инок #16 Инок против Бесобоя, часть 5",
        number: "16",
        size: size_single,
        color: color_inok
    },
    node_inok_single_17: {
        name: "Инок #17 Инок против Бесобоя, часть 8",
        number: "17",
        size: size_single,
        color: color_inok
    },
    node_inok_single_18: {name: "Инок #18 Прощание, часть 1", number: "18", size: size_single, color: color_inok},
    node_inok_single_19: {name: "Инок #19 Прощание, часть 2", number: "19", size: size_single, color: color_inok},
    node_inok_single_20: {name: "Инок #20 Прощание, часть 3", number: "20", size: size_single, color: color_inok},
    node_inok_single_21: {
        name: "Инок #21 Зверь во мне, часть 1",
        number: "21",
        size: size_single,
        color: color_inok
    },
    node_inok_single_22: {
        name: "Инок #22 Зверь во мне, часть 2",
        number: "22",
        size: size_single,
        color: color_inok
    },
    node_inok_single_23: {
        name: "Инок #23 Зверь во мне, часть 3",
        number: "23",
        size: size_single,
        color: color_inok
    },
    node_inok_single_24: {
        name: "Инок #24 Зверь во мне, часть 4",
        number: "24",
        size: size_single,
        color: color_inok
    },
    node_inok_single_25: {name: "Инок #25 Владыка, часть 1", number: "25", size: size_single, color: color_inok},
    node_inok_single_26: {name: "Инок #26 Владыка, часть 2", number: "26", size: size_single, color: color_inok},
    node_inok_single_27: {
        name: "Инок #27 Высокое напряжение, часть 1",
        number: "27",
        size: size_single,
        color: color_inok
    },
    node_inok_single_28: {
        name: "Инок #28 Высокое напряжение, часть 2; Старый новый гад",
        number: "28",
        size: size_single,
        color: color_inok
    },
    node_inok_single_29: {
        name: "Инок #29 Высокое напряжение, часть 3",
        number: "29",
        size: size_single,
        color: color_inok
    },
    node_inok_single_30: {
        name: "Инок #30 Высокое напряжение, часть 4",
        number: "30",
        size: size_single,
        color: color_inok
    },
    node_inok_single_31: {
        name: "Инок #31 Высокое напряжение, часть 5",
        number: "31",
        size: size_single,
        color: color_inok
    },
    node_inok_single_32: {name: "Инок #32 Калинов мост, часть 1", number: "32", size: size_single, color: color_inok},
    node_inok_single_33: {
        name: "Инок #33 Калинов мост, часть 2; Спаситель",
        number: "33",
        size: size_single,
        color: color_inok
    },
    node_inok_single_34: {name: "Инок #34 Калинов мост, часть 3", number: "34", size: size_single, color: color_inok},

    node_krasnaya_furiya_single_1: {
        name: "Красная Фурия #1 В поисках Грааля, часть 1",
        number: "1",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_2: {
        name: "Красная Фурия #2 В поисках Грааля, часть 2",
        number: "2",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_3: {
        name: "Красная Фурия #3 В поисках Грааля, часть 3",
        number: "3",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_4: {
        name: "Красная Фурия #4 Миллионер; Око Шивы",
        number: "4",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_5: {
        name: "Красная Фурия #5 В поисках Грааля, часть 4",
        number: "5",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_6: {
        name: "Красная Фурия #6 В поисках Грааля, часть 5",
        number: "6",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_7: {
        name: "Красная Фурия #7 В поисках Грааля, часть 6",
        number: "7",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_8: {
        name: "Красная Фурия #8 В поисках Грааля, часть 7",
        number: "8",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_9: {
        name: "Красная Фурия #9 В поисках Грааля, часть 8",
        number: "9",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_10: {
        name: "Красная Фурия #10 Арабская ночь; Ангел Смерти; Меч возмездия",
        number: "10",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_11: {
        name: "Красная Фурия #11 Джунгли зовут, часть 1",
        number: "11",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_12: {
        name: "Красная Фурия #12 Джунгли зовут, часть 2",
        number: "12",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_13: {
        name: "Красная Фурия #13 Джунгли зовут, часть 3",
        number: "13",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_14: {
        name: "Красная Фурия #14 Джунгли зовут, часть 4",
        number: "14",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_15: {
        name: "Красная Фурия #15 День Рождения",
        number: "15",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_16: {
        name: "Красная Фурия #16 Затишье перед бурей",
        number: "16",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_16_1: {
        name: "Красная Фурия #16.1 Буря во льдах (спецвыпуск)",
        number: "16.1",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_17: {
        name: "Красная Фурия #17 Тёмное наследие, часть 1",
        number: "17",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_18: {
        name: "Красная Фурия #18 Тёмное наследие, часть 2",
        number: "18",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_19: {
        name: "Красная Фурия #19 Тёмное наследие, часть 3",
        number: "19",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_20: {
        name: "Красная Фурия #20 Тёмное наследие, часть 4",
        number: "20",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_21: {
        name: "Красная Фурия #21 Тёмное наследие, часть 5",
        number: "21",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_22: {
        name: "Красная Фурия #22 Тёмное наследие, часть 6",
        number: "22",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_23: {
        name: "Красная Фурия #23 Потеря",
        number: "23",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_24: {
        name: "Красная Фурия #24 После бури",
        number: "24",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_25: {
        name: "Красная Фурия #25 Ничего личного, просто бизнес, часть 1",
        number: "25",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_26: {
        name: "Красная Фурия #26 Ничего личного, просто бизнес, часть 2",
        number: "26",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_27: {
        name: "Красная Фурия #27 Ничего личного, просто бизнес, часть 3",
        number: "27",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_28: {
        name: "Красная Фурия #28 Ничего личного, просто бизнес, часть 4; Новая Жизнь",
        number: "28",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_29: {
        name: "Красная Фурия #29 Сила мысли, часть 1",
        number: "29",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_30: {
        name: "Красная Фурия #30 Сила мысли, часть 2",
        number: "30",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_31: {
        name: "Красная Фурия #31 Сила мысли, часть 3",
        number: "31",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_32: {
        name: "Красная Фурия #32 Любовь зла",
        number: "32",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_33: {
        name: "Красная Фурия #33 Отто и Лотта",
        number: "33",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_34: {
        name: "Красная Фурия #34 Братство",
        number: "34",
        size: size_single,
        color: color_krasnaya_furiya
    },

    node_inok_vs_besoboy_single_1: {
        name: "Инок против Бесобоя #1 Инок против Бесобоя, часть 3",
        number: "1",
        size: size_single,
        color: color_inok_vs_besoboy
    },
    node_inok_vs_besoboy_single_2: {
        name: "Инок против Бесобоя #2 Инок против Бесобоя, часть 6",
        number: "2",
        size: size_single,
        color: color_inok_vs_besoboy
    },
    node_inok_vs_besoboy_single_3: {
        name: "Инок против Бесобоя #3 Инок против Бесобоя, часть 9",
        number: "3",
        size: size_single,
        color: color_inok_vs_besoboy
    },

    node_besoboy_tome_1: {name: "Бесобой том 1: Имя ему Бесобой", number: "1", size: size_tome, color: color_besoboy},
    node_besoboy_tome_2: {name: "Бесобой том 2: Лицо зверя", number: "2", size: size_tome, color: color_besoboy},
    node_besoboy_tome_3: {name: "Бесобой том 3: Три сестры", number: "3", size: size_tome, color: color_besoboy},

    node_mayor_grom_tome_1: {
        name: "Майор Гром том 1: Чумной Доктор часть 1",
        number: "1",
        size: size_tome,
        color: color_mayor_grom
    },
    node_mayor_grom_tome_2: {
        name: "Майор Гром том 2: Чумной Доктор часть 2",
        number: "2",
        size: size_tome,
        color: color_mayor_grom
    },
    node_mayor_grom_tome_3: {
        name: "Майор Гром том 3: День святого Патрика",
        number: "3",
        size: size_tome,
        color: color_mayor_grom
    },

    node_inok_tome_1: {name: "Инок том 1: Проданная реликвия часть 1", number: "1", size: size_tome, color: color_inok},
    node_inok_tome_2: {name: "Инок том 2: Проданная реликвия часть 2", number: "2", size: size_tome, color: color_inok},
    node_inok_tome_3: {name: "Инок том 3: Зверь во мне часть 1", number: "3", size: size_tome, color: color_inok},

    node_krasnaya_furiya_tome_1: {
        name: "Красная Фурия том 1: В поисках грааля часть 1",
        number: "1",
        size: size_tome,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_tome_2: {
        name: "Красная Фурия том 2: В поисках грааля часть 2",
        number: "2",
        size: size_tome,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_tome_3: {
        name: "Красная Фурия том 3: Тёмное наследие часть 1",
        number: "3",
        size: size_tome,
        color: color_krasnaya_furiya
    },

    node_ekslibrium_single_1: {
        name: "Экслибриум #1 ...и дверь откроется, часть 1",
        number: "1",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_2: {
        name: "Экслибриум #2 ...и дверь откроется, часть 2",
        number: "2",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_3: {
        name: "Экслибриум #3 ...и дверь откроется, часть 3",
        number: "3",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_4: {
        name: "Экслибриум #4 ...и дверь откроется, часть 4; Черная дорога",
        number: "4",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_5: {
        name: "Экслибриум #5 ...и дверь откроется, часть 5",
        number: "5",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_6: {
        name: "Экслибриум #6 Костяной дом, часть 1",
        number: "6",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_7: {
        name: "Экслибриум #7 Костяной дом, часть 2",
        number: "7",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_8: {
        name: "Экслибриум #8 Костяной дом, часть 3",
        number: "8",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_9: {
        name: "Экслибриум #9 Люди библиотеки, часть 1",
        number: "9",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_10: {
        name: "Экслибриум #10 Люди библиотеки, часть 2",
        number: "10",
        size: size_single,
        color: color_ekslibrium
    },

    node_meteora_single_1: {
        name: "Метеора #1 Самая опасная вещь в космосе, часть 1",
        number: "1",
        size: size_single,
        color: color_meteora
    },
    node_meteora_single_2: {
        name: "Метеора #2 Самая опасная вещь в космосе, часть 2",
        number: "2",
        size: size_single,
        color: color_meteora
    },
    node_meteora_single_3: {name: "Метеора #3 Прорыв, часть 1", number: "3", size: size_single, color: color_meteora},
    node_meteora_single_4: {
        name: "Метеора #4 Прорыв, часть 2; Новая реальность",
        number: "4",
        size: size_single,
        color: color_meteora
    },
    node_meteora_single_5: {
        name: "Метеора #5 Дело чести, часть 1",
        number: "5",
        size: size_single,
        color: color_meteora
    },
    node_meteora_single_6: {
        name: "Метеора #6 Дело чести, часть 2",
        number: "6",
        size: size_single,
        color: color_meteora
    },
    node_meteora_single_7: {name: "Метеора #7 Блокада, часть 1", number: "7", size: size_single, color: color_meteora},
    node_meteora_single_8: {name: "Метеора #8 Блокада, часть 2", number: "8", size: size_single, color: color_meteora},
    node_meteora_single_9: {name: "Метеора #9 Блокада, часть 3", number: "9", size: size_single, color: color_meteora},
    node_meteora_single_10: {
        name: "Метеора #10 Блокада, часть 4",
        number: "10",
        size: size_single,
        color: color_meteora
    },

    node_inok_vs_besoboy_tome: {name: "Инок против Бесобоя", size: size_tome, color: color_inok_vs_besoboy}
};

const edges: Record<string, Edge> = {
    edge_besoboy_single_1_single_2: {source: "node_besoboy_single_1", target: "node_besoboy_single_2"},
    edge_besoboy_single_1_tome_1: {source: "node_besoboy_single_1", target: "node_besoboy_tome_1", dashed: true},
    edge_besoboy_single_2_single_3: {source: "node_besoboy_single_2", target: "node_besoboy_single_3"},
    edge_besoboy_single_2_tome_1: {source: "node_besoboy_single_2", target: "node_besoboy_tome_1", dashed: true},
    edge_besoboy_single_3_single_4: {source: "node_besoboy_single_3", target: "node_besoboy_single_4"},
    edge_besoboy_single_3_tome_1: {source: "node_besoboy_single_3", target: "node_besoboy_tome_1", dashed: true},
    edge_besoboy_single_4_single_5: {source: "node_besoboy_single_4", target: "node_besoboy_single_5"},
    edge_besoboy_single_4_tome_1: {source: "node_besoboy_single_4", target: "node_besoboy_tome_1", dashed: true},
    edge_besoboy_single_5_single_6: {source: "node_besoboy_single_5", target: "node_besoboy_single_6"},
    edge_besoboy_single_5_tome_1: {source: "node_besoboy_single_5", target: "node_besoboy_tome_1", dashed: true},
    edge_besoboy_single_6_single_7: {source: "node_besoboy_single_6", target: "node_besoboy_single_7"},
    edge_besoboy_single_6_tome_1: {source: "node_besoboy_single_6", target: "node_besoboy_tome_1", dashed: true},
    edge_besoboy_single_7_single_8: {source: "node_besoboy_single_7", target: "node_besoboy_single_8"},
    edge_besoboy_single_7_tome_1: {source: "node_besoboy_single_7", target: "node_besoboy_tome_1", dashed: true},
    edge_besoboy_single_8_single_9: {source: "node_besoboy_single_8", target: "node_besoboy_single_9"},
    edge_besoboy_single_8_tome_2: {source: "node_besoboy_single_8", target: "node_besoboy_tome_2", dashed: true},
    edge_besoboy_single_9_single_10: {source: "node_besoboy_single_9", target: "node_besoboy_single_10"},
    edge_besoboy_single_9_tome_2: {source: "node_besoboy_single_9", target: "node_besoboy_tome_2", dashed: true},
    edge_besoboy_single_10_single_11: {source: "node_besoboy_single_10", target: "node_besoboy_single_11"},
    edge_besoboy_single_10_tome_2: {source: "node_besoboy_single_10", target: "node_besoboy_tome_2", dashed: true},
    edge_besoboy_single_11_single_12: {source: "node_besoboy_single_11", target: "node_besoboy_single_12"},
    edge_besoboy_single_11_tome_2: {source: "node_besoboy_single_11", target: "node_besoboy_tome_2", dashed: true},
    edge_besoboy_single_12_single_13: {source: "node_besoboy_single_12", target: "node_besoboy_single_13"},
    edge_besoboy_single_12_tome_2: {source: "node_besoboy_single_12", target: "node_besoboy_tome_2", dashed: true},
    edge_besoboy_single_13_single_14: {source: "node_besoboy_single_13", target: "node_besoboy_single_14"},
    edge_besoboy_single_13_tome_2: {source: "node_besoboy_single_13", target: "node_besoboy_tome_2", dashed: true},
    edge_besoboy_single_14_single_15: {source: "node_besoboy_single_14", target: "node_besoboy_single_15"},
    edge_besoboy_single_14_tome_2: {source: "node_besoboy_single_14", target: "node_besoboy_tome_2", dashed: true},
    edge_besoboy_single_15_inok_single_15: {source: "node_besoboy_single_15", target: "node_inok_single_15"},
    edge_besoboy_single_15_inok_vs_besoboy_tome: {
        source: "node_besoboy_single_15",
        target: "node_inok_vs_besoboy_tome",
        dashed: true
    },
    edge_besoboy_single_16_inok_single_16: {source: "node_besoboy_single_16", target: "node_inok_single_16"},
    edge_besoboy_single_16_inok_vs_besoboy_tome: {
        source: "node_besoboy_single_16",
        target: "node_inok_vs_besoboy_tome",
        dashed: true
    },
    edge_besoboy_single_17_inok_single_17: {source: "node_besoboy_single_17", target: "node_inok_single_17"},
    edge_besoboy_single_17_inok_vs_besoboy_tome: {
        source: "node_besoboy_single_17",
        target: "node_inok_vs_besoboy_tome",
        dashed: true
    },
    edge_besoboy_single_18_single_19: {source: "node_besoboy_single_18", target: "node_besoboy_single_19"},
    edge_besoboy_single_18_tome_3: {source: "node_besoboy_single_18", target: "node_besoboy_tome_3", dashed: true},
    edge_besoboy_single_19_single_20: {source: "node_besoboy_single_19", target: "node_besoboy_single_20"},
    edge_besoboy_single_19_tome_3: {source: "node_besoboy_single_19", target: "node_besoboy_tome_3", dashed: true},
    edge_besoboy_single_20_single_21: {source: "node_besoboy_single_20", target: "node_besoboy_single_21"},
    edge_besoboy_single_20_tome_3: {source: "node_besoboy_single_20", target: "node_besoboy_tome_3", dashed: true},
    edge_besoboy_single_21_single_22: {source: "node_besoboy_single_21", target: "node_besoboy_single_22"},
    edge_besoboy_single_21_tome_3: {source: "node_besoboy_single_21", target: "node_besoboy_tome_3", dashed: true},
    edge_besoboy_single_22_single_23: {source: "node_besoboy_single_22", target: "node_besoboy_single_23"},
    edge_besoboy_single_22_tome_3: {source: "node_besoboy_single_22", target: "node_besoboy_tome_3", dashed: true},
    edge_besoboy_single_23_single_24: {source: "node_besoboy_single_23", target: "node_besoboy_single_24"},
    edge_besoboy_single_24_single_25: {source: "node_besoboy_single_24", target: "node_besoboy_single_25"},
    edge_besoboy_single_25_single_26: {source: "node_besoboy_single_25", target: "node_besoboy_single_26"},
    edge_besoboy_single_26_single_27: {source: "node_besoboy_single_26", target: "node_besoboy_single_27"},
    edge_besoboy_single_27_single_28: {source: "node_besoboy_single_27", target: "node_besoboy_single_28"},
    edge_besoboy_single_28_single_29: {source: "node_besoboy_single_28", target: "node_besoboy_single_29"},
    edge_besoboy_single_29_single_30: {source: "node_besoboy_single_29", target: "node_besoboy_single_30"},
    edge_besoboy_single_30_single_31: {source: "node_besoboy_single_30", target: "node_besoboy_single_31"},
    edge_besoboy_single_31_single_32: {source: "node_besoboy_single_31", target: "node_besoboy_single_32"},
    edge_besoboy_single_32_single_33: {source: "node_besoboy_single_32", target: "node_besoboy_single_33"},
    edge_besoboy_single_33_single_34: {source: "node_besoboy_single_33", target: "node_besoboy_single_34"},

    edge_mayor_grom_single_1_single_2: {source: "node_mayor_grom_single_1", target: "node_mayor_grom_single_2"},
    edge_mayor_grom_single_1_tome_1: {
        source: "node_mayor_grom_single_1",
        target: "node_mayor_grom_tome_1",
        dashed: true
    },
    edge_mayor_grom_single_2_single_3: {source: "node_mayor_grom_single_2", target: "node_mayor_grom_single_3"},
    edge_mayor_grom_single_2_tome_1: {
        source: "node_mayor_grom_single_2",
        target: "node_mayor_grom_tome_1",
        dashed: true
    },
    edge_mayor_grom_single_3_single_4: {source: "node_mayor_grom_single_3", target: "node_mayor_grom_single_4"},
    edge_mayor_grom_single_3_tome_1: {
        source: "node_mayor_grom_single_3",
        target: "node_mayor_grom_tome_1",
        dashed: true
    },
    edge_mayor_grom_single_4_single_5: {source: "node_mayor_grom_single_4", target: "node_mayor_grom_single_5"},
    edge_mayor_grom_single_4_tome_1: {
        source: "node_mayor_grom_single_4",
        target: "node_mayor_grom_tome_1",
        dashed: true
    },
    edge_mayor_grom_single_5_single_6: {source: "node_mayor_grom_single_5", target: "node_mayor_grom_single_6"},
    edge_mayor_grom_single_5_tome_1: {
        source: "node_mayor_grom_single_5",
        target: "node_mayor_grom_tome_1",
        dashed: true
    },
    edge_mayor_grom_single_6_single_7: {source: "node_mayor_grom_single_6", target: "node_mayor_grom_single_7"},
    edge_mayor_grom_single_6_tome_1: {
        source: "node_mayor_grom_single_6",
        target: "node_mayor_grom_tome_1",
        dashed: true
    },
    edge_mayor_grom_single_7_single_8: {source: "node_mayor_grom_single_7", target: "node_mayor_grom_single_8"},
    edge_mayor_grom_single_7_tome_2: {
        source: "node_mayor_grom_single_7",
        target: "node_mayor_grom_tome_2",
        dashed: true
    },
    edge_mayor_grom_single_8_single_9: {source: "node_mayor_grom_single_8", target: "node_mayor_grom_single_9"},
    edge_mayor_grom_single_8_tome_2: {
        source: "node_mayor_grom_single_8",
        target: "node_mayor_grom_tome_2",
        dashed: true
    },
    edge_mayor_grom_single_9_single_10: {source: "node_mayor_grom_single_9", target: "node_mayor_grom_single_10"},
    edge_mayor_grom_single_9_tome_2: {
        source: "node_mayor_grom_single_9",
        target: "node_mayor_grom_tome_2",
        dashed: true
    },
    edge_mayor_grom_single_10_single_11: {source: "node_mayor_grom_single_10", target: "node_mayor_grom_single_11"},
    edge_mayor_grom_single_10_tome_2: {
        source: "node_mayor_grom_single_10",
        target: "node_mayor_grom_tome_2",
        dashed: true
    },
    edge_mayor_grom_single_11_single_12: {source: "node_mayor_grom_single_11", target: "node_mayor_grom_single_12"},
    edge_mayor_grom_single_11_tome_3: {
        source: "node_mayor_grom_single_11",
        target: "node_mayor_grom_tome_3",
        dashed: true
    },
    edge_mayor_grom_single_12_single_13: {source: "node_mayor_grom_single_12", target: "node_mayor_grom_single_13"},
    edge_mayor_grom_single_12_tome_3: {
        source: "node_mayor_grom_single_12",
        target: "node_mayor_grom_tome_3",
        dashed: true
    },
    edge_mayor_grom_single_13_single_14: {source: "node_mayor_grom_single_13", target: "node_mayor_grom_single_14"},
    edge_mayor_grom_single_13_tome_3: {
        source: "node_mayor_grom_single_13",
        target: "node_mayor_grom_tome_3",
        dashed: true
    },
    edge_mayor_grom_single_14_single_15: {source: "node_mayor_grom_single_14", target: "node_mayor_grom_single_15"},
    edge_mayor_grom_single_14_tome_3: {
        source: "node_mayor_grom_single_14",
        target: "node_mayor_grom_tome_3",
        dashed: true
    },
    edge_mayor_grom_single_15_single_16: {source: "node_mayor_grom_single_15", target: "node_mayor_grom_single_16"},
    edge_mayor_grom_single_15_tome_3: {
        source: "node_mayor_grom_single_15",
        target: "node_mayor_grom_tome_3",
        dashed: true
    },
    edge_mayor_grom_single_16_single_17: {source: "node_mayor_grom_single_16", target: "node_mayor_grom_single_17"},
    edge_mayor_grom_single_16_tome_3: {
        source: "node_mayor_grom_single_16",
        target: "node_mayor_grom_tome_3",
        dashed: true
    },
    edge_mayor_grom_single_17_single_18: {source: "node_mayor_grom_single_17", target: "node_mayor_grom_single_18"},
    edge_mayor_grom_single_17_tome_3: {
        source: "node_mayor_grom_single_17",
        target: "node_mayor_grom_tome_3",
        dashed: true
    },
    edge_mayor_grom_single_18_single_19: {source: "node_mayor_grom_single_18", target: "node_mayor_grom_single_19"},
    edge_mayor_grom_single_18_tome_3: {
        source: "node_mayor_grom_single_18",
        target: "node_mayor_grom_tome_3",
        dashed: true
    },
    edge_mayor_grom_single_19_single_20: {source: "node_mayor_grom_single_19", target: "node_mayor_grom_single_20"},
    edge_mayor_grom_single_20_single_21: {source: "node_mayor_grom_single_20", target: "node_mayor_grom_single_21"},
    edge_mayor_grom_single_21_single_22: {source: "node_mayor_grom_single_21", target: "node_mayor_grom_single_22"},
    edge_mayor_grom_single_22_single_23: {source: "node_mayor_grom_single_22", target: "node_mayor_grom_single_23"},
    edge_mayor_grom_single_23_single_24: {source: "node_mayor_grom_single_23", target: "node_mayor_grom_single_24"},
    edge_mayor_grom_single_24_single_25: {source: "node_mayor_grom_single_24", target: "node_mayor_grom_single_25"},
    edge_mayor_grom_single_25_single_26: {source: "node_mayor_grom_single_25", target: "node_mayor_grom_single_26"},
    edge_mayor_grom_single_26_single_27: {source: "node_mayor_grom_single_26", target: "node_mayor_grom_single_27"},
    edge_mayor_grom_single_27_single_28: {source: "node_mayor_grom_single_27", target: "node_mayor_grom_single_28"},
    edge_mayor_grom_single_28_single_29: {source: "node_mayor_grom_single_28", target: "node_mayor_grom_single_29"},
    edge_mayor_grom_single_29_single_30: {source: "node_mayor_grom_single_29", target: "node_mayor_grom_single_30"},
    edge_mayor_grom_single_30_single_31: {source: "node_mayor_grom_single_30", target: "node_mayor_grom_single_31"},
    edge_mayor_grom_single_31_single_32: {source: "node_mayor_grom_single_31", target: "node_mayor_grom_single_32"},
    edge_mayor_grom_single_32_single_33: {source: "node_mayor_grom_single_32", target: "node_mayor_grom_single_33"},
    edge_mayor_grom_single_33_single_34: {source: "node_mayor_grom_single_33", target: "node_mayor_grom_single_34"},

    edge_inok_single_1_single_2: {source: "node_inok_single_1", target: "node_inok_single_2"},
    edge_inok_single_1_tome_1: {source: "node_inok_single_1", target: "node_inok_tome_1", dashed: true},
    edge_inok_single_2_single_3: {source: "node_inok_single_2", target: "node_inok_single_3"},
    edge_inok_single_2_tome_1: {source: "node_inok_single_2", target: "node_inok_tome_1", dashed: true},
    edge_inok_single_3_single_4: {source: "node_inok_single_3", target: "node_inok_single_4"},
    edge_inok_single_3_tome_1: {source: "node_inok_single_3", target: "node_inok_tome_1", dashed: true},
    edge_inok_single_4_single_5: {source: "node_inok_single_4", target: "node_inok_single_5"},
    edge_inok_single_4_tome_1: {source: "node_inok_single_4", target: "node_inok_tome_1", dashed: true},
    edge_inok_single_5_single_6: {source: "node_inok_single_5", target: "node_inok_single_6"},
    edge_inok_single_5_tome_1: {source: "node_inok_single_5", target: "node_inok_tome_1", dashed: true},
    edge_inok_single_6_single_7: {source: "node_inok_single_6", target: "node_inok_single_7"},
    edge_inok_single_6_tome_1: {source: "node_inok_single_6", target: "node_inok_tome_1", dashed: true},
    edge_inok_single_7_single_8: {source: "node_inok_single_7", target: "node_inok_single_8"},
    edge_inok_single_7_tome_1: {source: "node_inok_single_7", target: "node_inok_tome_1", dashed: true},
    edge_inok_single_8_single_9: {source: "node_inok_single_8", target: "node_inok_single_9"},
    edge_inok_single_8_tome_2: {source: "node_inok_single_8", target: "node_inok_tome_2", dashed: true},
    edge_inok_single_9_single_10: {source: "node_inok_single_9", target: "node_inok_single_10"},
    edge_inok_single_9_tome_2: {source: "node_inok_single_9", target: "node_inok_tome_2", dashed: true},
    edge_inok_single_10_single_11: {source: "node_inok_single_10", target: "node_inok_single_11"},
    edge_inok_single_10_tome_2: {source: "node_inok_single_10", target: "node_inok_tome_2", dashed: true},
    edge_inok_single_11_single_12: {source: "node_inok_single_11", target: "node_inok_single_12"},
    edge_inok_single_11_tome_2: {source: "node_inok_single_11", target: "node_inok_tome_2", dashed: true},
    edge_inok_single_12_single_13: {source: "node_inok_single_12", target: "node_inok_single_13"},
    edge_inok_single_12_tome_2: {source: "node_inok_single_12", target: "node_inok_tome_2", dashed: true},
    edge_inok_single_13_single_14: {source: "node_inok_single_13", target: "node_inok_single_14"},
    edge_inok_single_13_tome_2: {source: "node_inok_single_13", target: "node_inok_tome_2", dashed: true},
    edge_inok_single_14_besoboy_single_15: {source: "node_inok_single_14", target: "node_besoboy_single_15"},
    edge_inok_single_14_tome_2: {source: "node_inok_single_14", target: "node_inok_tome_2", dashed: true},
    edge_inok_single_15_inok_vs_besoboy_single_1: {
        source: "node_inok_single_15",
        target: "node_inok_vs_besoboy_single_1"
    },
    edge_inok_single_15_inok_vs_besoboy_tome: {
        source: "node_inok_single_15",
        target: "node_inok_vs_besoboy_tome",
        dashed: true
    },
    edge_inok_single_16_inok_vs_besoboy_single_2: {
        source: "node_inok_single_16",
        target: "node_inok_vs_besoboy_single_2"
    },
    edge_inok_single_16_inok_vs_besoboy_tome: {
        source: "node_inok_single_16",
        target: "node_inok_vs_besoboy_tome",
        dashed: true
    },
    edge_inok_single_17_inok_vs_besoboy_single_3: {
        source: "node_inok_single_17",
        target: "node_inok_vs_besoboy_single_3"
    },
    edge_inok_single_17_inok_vs_besoboy_tome: {
        source: "node_inok_single_17",
        target: "node_inok_vs_besoboy_tome",
        dashed: true
    },
    edge_inok_single_18_single_19: {source: "node_inok_single_18", target: "node_inok_single_19"},
    edge_inok_single_18_tome_3: {source: "node_inok_single_18", target: "node_inok_tome_3", dashed: true},
    edge_inok_single_19_single_20: {source: "node_inok_single_19", target: "node_inok_single_20"},
    edge_inok_single_19_tome_3: {source: "node_inok_single_19", target: "node_inok_tome_3", dashed: true},
    edge_inok_single_20_single_21: {source: "node_inok_single_20", target: "node_inok_single_21"},
    edge_inok_single_20_tome_3: {source: "node_inok_single_20", target: "node_inok_tome_3", dashed: true},
    edge_inok_single_21_single_22: {source: "node_inok_single_21", target: "node_inok_single_22"},
    edge_inok_single_21_tome_3: {source: "node_inok_single_21", target: "node_inok_tome_3", dashed: true},
    edge_inok_single_22_single_23: {source: "node_inok_single_22", target: "node_inok_single_23"},
    edge_inok_single_23_single_24: {source: "node_inok_single_23", target: "node_inok_single_24"},
    edge_inok_single_24_single_25: {source: "node_inok_single_24", target: "node_inok_single_25"},
    edge_inok_single_25_single_26: {source: "node_inok_single_25", target: "node_inok_single_26"},
    edge_inok_single_26_single_27: {source: "node_inok_single_26", target: "node_inok_single_27"},
    edge_inok_single_27_single_28: {source: "node_inok_single_27", target: "node_inok_single_28"},
    edge_inok_single_28_single_29: {source: "node_inok_single_28", target: "node_inok_single_29"},
    edge_inok_single_29_single_30: {source: "node_inok_single_29", target: "node_inok_single_30"},
    edge_inok_single_30_single_31: {source: "node_inok_single_30", target: "node_inok_single_31"},
    edge_inok_single_31_single_32: {source: "node_inok_single_31", target: "node_inok_single_32"},
    edge_inok_single_32_single_33: {source: "node_inok_single_32", target: "node_inok_single_33"},
    edge_inok_single_33_single_34: {source: "node_inok_single_33", target: "node_inok_single_34"},

    edge_krasnaya_furiya_single_1_single_2: {
        source: "node_krasnaya_furiya_single_1",
        target: "node_krasnaya_furiya_single_2"
    },
    edge_krasnaya_furiya_single_1_tome_1: {
        source: "node_krasnaya_furiya_single_1",
        target: "node_krasnaya_furiya_tome_1",
        dashed: true
    },
    edge_krasnaya_furiya_single_2_single_3: {
        source: "node_krasnaya_furiya_single_2",
        target: "node_krasnaya_furiya_single_3"
    },
    edge_krasnaya_furiya_single_2_tome_1: {
        source: "node_krasnaya_furiya_single_2",
        target: "node_krasnaya_furiya_tome_1",
        dashed: true
    },
    edge_krasnaya_furiya_single_3_single_4: {
        source: "node_krasnaya_furiya_single_3",
        target: "node_krasnaya_furiya_single_4"
    },
    edge_krasnaya_furiya_single_3_tome_1: {
        source: "node_krasnaya_furiya_single_3",
        target: "node_krasnaya_furiya_tome_1",
        dashed: true
    },
    edge_krasnaya_furiya_single_4_single_5: {
        source: "node_krasnaya_furiya_single_4",
        target: "node_krasnaya_furiya_single_5"
    },
    edge_krasnaya_furiya_single_4_tome_1: {
        source: "node_krasnaya_furiya_single_4",
        target: "node_krasnaya_furiya_tome_1",
        dashed: true
    },
    edge_krasnaya_furiya_single_5_single_6: {
        source: "node_krasnaya_furiya_single_5",
        target: "node_krasnaya_furiya_single_6"
    },
    edge_krasnaya_furiya_single_5_tome_1: {
        source: "node_krasnaya_furiya_single_5",
        target: "node_krasnaya_furiya_tome_1",
        dashed: true
    },
    edge_krasnaya_furiya_single_6_single_7: {
        source: "node_krasnaya_furiya_single_6",
        target: "node_krasnaya_furiya_single_7"
    },
    edge_krasnaya_furiya_single_6_tome_1: {
        source: "node_krasnaya_furiya_single_6",
        target: "node_krasnaya_furiya_tome_1",
        dashed: true
    },
    edge_krasnaya_furiya_single_7_single_8: {
        source: "node_krasnaya_furiya_single_7",
        target: "node_krasnaya_furiya_single_8"
    },
    edge_krasnaya_furiya_single_7_tome_1: {
        source: "node_krasnaya_furiya_single_7",
        target: "node_krasnaya_furiya_tome_1",
        dashed: true
    },
    edge_krasnaya_furiya_single_8_single_9: {
        source: "node_krasnaya_furiya_single_8",
        target: "node_krasnaya_furiya_single_9"
    },
    edge_krasnaya_furiya_single_8_tome_2: {
        source: "node_krasnaya_furiya_single_8",
        target: "node_krasnaya_furiya_tome_2",
        dashed: true
    },
    edge_krasnaya_furiya_single_9_single_10: {
        source: "node_krasnaya_furiya_single_9",
        target: "node_krasnaya_furiya_single_10"
    },
    edge_krasnaya_furiya_single_9_tome_2: {
        source: "node_krasnaya_furiya_single_9",
        target: "node_krasnaya_furiya_tome_2",
        dashed: true
    },
    edge_krasnaya_furiya_single_10_single_11: {
        source: "node_krasnaya_furiya_single_10",
        target: "node_krasnaya_furiya_single_11"
    },
    edge_krasnaya_furiya_single_10_tome_2: {
        source: "node_krasnaya_furiya_single_10",
        target: "node_krasnaya_furiya_tome_2",
        dashed: true
    },
    edge_krasnaya_furiya_single_11_single_12: {
        source: "node_krasnaya_furiya_single_11",
        target: "node_krasnaya_furiya_single_12"
    },
    edge_krasnaya_furiya_single_11_tome_2: {
        source: "node_krasnaya_furiya_single_11",
        target: "node_krasnaya_furiya_tome_2",
        dashed: true
    },
    edge_krasnaya_furiya_single_12_single_13: {
        source: "node_krasnaya_furiya_single_12",
        target: "node_krasnaya_furiya_single_13"
    },
    edge_krasnaya_furiya_single_12_tome_2: {
        source: "node_krasnaya_furiya_single_12",
        target: "node_krasnaya_furiya_tome_2",
        dashed: true
    },
    edge_krasnaya_furiya_single_13_single_14: {
        source: "node_krasnaya_furiya_single_13",
        target: "node_krasnaya_furiya_single_14"
    },
    edge_krasnaya_furiya_single_13_tome_2: {
        source: "node_krasnaya_furiya_single_13",
        target: "node_krasnaya_furiya_tome_2",
        dashed: true
    },
    edge_krasnaya_furiya_single_14_single_15: {
        source: "node_krasnaya_furiya_single_14",
        target: "node_krasnaya_furiya_single_15"
    },
    edge_krasnaya_furiya_single_14_tome_2: {
        source: "node_krasnaya_furiya_single_14",
        target: "node_krasnaya_furiya_tome_2",
        dashed: true
    },
    edge_krasnaya_furiya_single_15_single_16: {
        source: "node_krasnaya_furiya_single_15",
        target: "node_krasnaya_furiya_single_16"
    },
    edge_krasnaya_furiya_single_15_tome_2: {
        source: "node_krasnaya_furiya_single_15",
        target: "node_krasnaya_furiya_tome_2",
        dashed: true
    },
    edge_krasnaya_furiya_single_16_single_16_1: {
        source: "node_krasnaya_furiya_single_16",
        target: "node_krasnaya_furiya_single_16_1"
    },
    edge_krasnaya_furiya_single_16_tome_3: {
        source: "node_krasnaya_furiya_single_16",
        target: "node_krasnaya_furiya_tome_3",
        dashed: true
    },
    edge_krasnaya_furiya_single_16_1_single_17: {
        source: "node_krasnaya_furiya_single_16_1",
        target: "node_krasnaya_furiya_single_17"
    },
    edge_krasnaya_furiya_single_16_1_tome_3: {
        source: "node_krasnaya_furiya_single_16_1",
        target: "node_krasnaya_furiya_tome_3",
        dashed: true
    },
    edge_krasnaya_furiya_single_17_single_18: {
        source: "node_krasnaya_furiya_single_17",
        target: "node_krasnaya_furiya_single_18"
    },
    edge_krasnaya_furiya_single_17_tome_3: {
        source: "node_krasnaya_furiya_single_17",
        target: "node_krasnaya_furiya_tome_3",
        dashed: true
    },
    edge_krasnaya_furiya_single_18_single_19: {
        source: "node_krasnaya_furiya_single_18",
        target: "node_krasnaya_furiya_single_19"
    },
    edge_krasnaya_furiya_single_18_tome_3: {
        source: "node_krasnaya_furiya_single_18",
        target: "node_krasnaya_furiya_tome_3",
        dashed: true
    },
    edge_krasnaya_furiya_single_19_single_20: {
        source: "node_krasnaya_furiya_single_19",
        target: "node_krasnaya_furiya_single_20"
    },
    edge_krasnaya_furiya_single_19_tome_3: {
        source: "node_krasnaya_furiya_single_19",
        target: "node_krasnaya_furiya_tome_3",
        dashed: true
    },
    edge_krasnaya_furiya_single_20_single_21: {
        source: "node_krasnaya_furiya_single_20",
        target: "node_krasnaya_furiya_single_21"
    },
    edge_krasnaya_furiya_single_21_single_22: {
        source: "node_krasnaya_furiya_single_21",
        target: "node_krasnaya_furiya_single_22"
    },
    edge_krasnaya_furiya_single_22_single_23: {
        source: "node_krasnaya_furiya_single_22",
        target: "node_krasnaya_furiya_single_23"
    },
    edge_krasnaya_furiya_single_23_single_24: {
        source: "node_krasnaya_furiya_single_23",
        target: "node_krasnaya_furiya_single_24"
    },
    edge_krasnaya_furiya_single_24_single_25: {
        source: "node_krasnaya_furiya_single_24",
        target: "node_krasnaya_furiya_single_25"
    },
    edge_krasnaya_furiya_single_25_single_26: {
        source: "node_krasnaya_furiya_single_25",
        target: "node_krasnaya_furiya_single_26"
    },
    edge_krasnaya_furiya_single_26_single_27: {
        source: "node_krasnaya_furiya_single_26",
        target: "node_krasnaya_furiya_single_27"
    },
    edge_krasnaya_furiya_single_27_single_28: {
        source: "node_krasnaya_furiya_single_27",
        target: "node_krasnaya_furiya_single_28"
    },
    edge_krasnaya_furiya_single_28_single_29: {
        source: "node_krasnaya_furiya_single_28",
        target: "node_krasnaya_furiya_single_29"
    },
    edge_krasnaya_furiya_single_29_single_30: {
        source: "node_krasnaya_furiya_single_29",
        target: "node_krasnaya_furiya_single_30"
    },
    edge_krasnaya_furiya_single_30_single_31: {
        source: "node_krasnaya_furiya_single_30",
        target: "node_krasnaya_furiya_single_31"
    },
    edge_krasnaya_furiya_single_31_single_32: {
        source: "node_krasnaya_furiya_single_31",
        target: "node_krasnaya_furiya_single_32"
    },
    edge_krasnaya_furiya_single_32_single_33: {
        source: "node_krasnaya_furiya_single_32",
        target: "node_krasnaya_furiya_single_33"
    },
    edge_krasnaya_furiya_single_33_single_34: {
        source: "node_krasnaya_furiya_single_33",
        target: "node_krasnaya_furiya_single_34"
    },

    edge_inok_vs_besoboy_single_1_besoboy_single_16: {
        source: "node_inok_vs_besoboy_single_1",
        target: "node_besoboy_single_16"
    },
    edge_inok_vs_besoboy_single_1_tome: {
        source: "node_inok_vs_besoboy_single_1",
        target: "node_inok_vs_besoboy_tome",
        dashed: true
    },
    edge_inok_vs_besoboy_single_2_besoboy_single_17: {
        source: "node_inok_vs_besoboy_single_2",
        target: "node_besoboy_single_17"
    },
    edge_inok_vs_besoboy_single_2_tome: {
        source: "node_inok_vs_besoboy_single_2",
        target: "node_inok_vs_besoboy_tome",
        dashed: true
    },
    edge_inok_vs_besoboy_single_3_besoboy_single_18: {
        source: "node_inok_vs_besoboy_single_3",
        target: "node_besoboy_single_18"
    },
    edge_inok_vs_besoboy_single_3_inok_single_18: {
        source: "node_inok_vs_besoboy_single_3",
        target: "node_inok_single_18"
    },
    edge_inok_vs_besoboy_single_3_tome: {
        source: "node_inok_vs_besoboy_single_3",
        target: "node_inok_vs_besoboy_tome",
        dashed: true
    },

    edge_besoboy_tome_1_tome_2: {source: "node_besoboy_tome_1", target: "node_besoboy_tome_2"},
    edge_besoboy_tome_2_inok_vs_besoboy_tome: {source: "node_besoboy_tome_2", target: "node_inok_vs_besoboy_tome"},

    edge_mayor_grom_tome_1_tome_2: {source: "node_mayor_grom_tome_1", target: "node_mayor_grom_tome_2"},
    edge_mayor_grom_tome_2_tome_3: {source: "node_mayor_grom_tome_2", target: "node_mayor_grom_tome_3"},

    edge_inok_tome_1_tome_2: {source: "node_inok_tome_1", target: "node_inok_tome_2"},
    edge_inok_tome_2_inok_vs_besoboy_tome: {source: "node_inok_tome_2", target: "node_inok_vs_besoboy_tome"},

    edge_krasnaya_furiya_tome_1_tome_2: {source: "node_krasnaya_furiya_tome_1", target: "node_krasnaya_furiya_tome_2"},
    edge_krasnaya_furiya_tome_2_tome_3: {source: "node_krasnaya_furiya_tome_2", target: "node_krasnaya_furiya_tome_3"},

    edge_ekslibrium_single_1_single_2: {source: "node_ekslibrium_single_1", target: "node_ekslibrium_single_2"},
    edge_ekslibrium_single_2_single_3: {source: "node_ekslibrium_single_2", target: "node_ekslibrium_single_3"},
    edge_ekslibrium_single_3_single_4: {source: "node_ekslibrium_single_3", target: "node_ekslibrium_single_4"},
    edge_ekslibrium_single_4_single_5: {source: "node_ekslibrium_single_4", target: "node_ekslibrium_single_5"},
    edge_ekslibrium_single_5_single_6: {source: "node_ekslibrium_single_5", target: "node_ekslibrium_single_6"},
    edge_ekslibrium_single_6_single_7: {source: "node_ekslibrium_single_6", target: "node_ekslibrium_single_7"},
    edge_ekslibrium_single_7_single_8: {source: "node_ekslibrium_single_7", target: "node_ekslibrium_single_8"},
    edge_ekslibrium_single_8_single_9: {source: "node_ekslibrium_single_8", target: "node_ekslibrium_single_9"},
    edge_ekslibrium_single_9_single_10: {source: "node_ekslibrium_single_9", target: "node_ekslibrium_single_10"},

    edge_meteora_single_1_single_2: {source: "node_meteora_single_1", target: "node_meteora_single_2"},
    edge_meteora_single_2_single_3: {source: "node_meteora_single_2", target: "node_meteora_single_3"},
    edge_meteora_single_3_single_4: {source: "node_meteora_single_3", target: "node_meteora_single_4"},
    edge_meteora_single_4_single_5: {source: "node_meteora_single_4", target: "node_meteora_single_5"},
    edge_meteora_single_5_single_6: {source: "node_meteora_single_5", target: "node_meteora_single_6"},
    edge_meteora_single_6_single_7: {source: "node_meteora_single_6", target: "node_meteora_single_7"},
    edge_meteora_single_7_single_8: {source: "node_meteora_single_7", target: "node_meteora_single_8"},
    edge_meteora_single_8_single_9: {source: "node_meteora_single_8", target: "node_meteora_single_9"},
    edge_meteora_single_9_single_10: {source: "node_meteora_single_9", target: "node_meteora_single_10"},

    edge_inok_vs_besoboy_tome_besoboy_tome_3: {source: "node_inok_vs_besoboy_tome", target: "node_besoboy_tome_3"},
    edge_inok_vs_besoboy_tome_inok_tome_3: {source: "node_inok_vs_besoboy_tome", target: "node_inok_tome_3"}
};

const difference = 60;
const x_single_difference = difference;
const y_mayor_grom_single = difference;
const y_mayor_grom_tome = difference * 2;
const y_besoboy_single = difference * 3;
const y_besoboy_tome = difference * 4;
const y_inok_single = difference * 5;
const y_inok_tome = difference * 6;
const y_inok_vs_besoboy_single = (y_besoboy_single + y_inok_single) / 2;
const y_inok_vs_besoboy_tome = y_inok_vs_besoboy_single + difference;
const y_krasnaya_furiya_single = difference * 7;
const y_krasnaya_furiya_tome = difference * 8;
const y_ekslibrium_single = difference * 9;
const y_meteora_single = difference * 10;

const layouts: vNG.Layouts = reactive({
    nodes: {
        node_besoboy_single_1: {x: x_single_difference, y: y_besoboy_single},
        node_besoboy_single_2: {x: x_single_difference * 2, y: y_besoboy_single},
        node_besoboy_single_3: {x: x_single_difference * 3, y: y_besoboy_single},
        node_besoboy_single_4: {x: x_single_difference * 4, y: y_besoboy_single},
        node_besoboy_single_5: {x: x_single_difference * 5, y: y_besoboy_single},
        node_besoboy_single_6: {x: x_single_difference * 6, y: y_besoboy_single},
        node_besoboy_single_7: {x: x_single_difference * 7, y: y_besoboy_single},
        node_besoboy_single_8: {x: x_single_difference * 8, y: y_besoboy_single},
        node_besoboy_single_9: {x: x_single_difference * 9, y: y_besoboy_single},
        node_besoboy_single_10: {x: x_single_difference * 10, y: y_besoboy_single},
        node_besoboy_single_11: {x: x_single_difference * 11, y: y_besoboy_single},
        node_besoboy_single_12: {x: x_single_difference * 12, y: y_besoboy_single},
        node_besoboy_single_13: {x: x_single_difference * 13, y: y_besoboy_single},
        node_besoboy_single_14: {x: x_single_difference * 14, y: y_besoboy_single},
        node_besoboy_single_15: {x: x_single_difference * 15, y: y_inok_vs_besoboy_single},
        node_besoboy_single_16: {x: x_single_difference * 18, y: y_inok_vs_besoboy_single},
        node_besoboy_single_17: {x: x_single_difference * 21, y: y_inok_vs_besoboy_single},
        node_besoboy_single_18: {x: x_single_difference * 24, y: y_besoboy_single},
        node_besoboy_single_19: {x: x_single_difference * 25, y: y_besoboy_single},
        node_besoboy_single_20: {x: x_single_difference * 26, y: y_besoboy_single},
        node_besoboy_single_21: {x: x_single_difference * 27, y: y_besoboy_single},
        node_besoboy_single_22: {x: x_single_difference * 28, y: y_besoboy_single},
        node_besoboy_single_23: {x: x_single_difference * 29, y: y_besoboy_single},
        node_besoboy_single_24: {x: x_single_difference * 30, y: y_besoboy_single},
        node_besoboy_single_25: {x: x_single_difference * 31, y: y_besoboy_single},
        node_besoboy_single_26: {x: x_single_difference * 32, y: y_besoboy_single},
        node_besoboy_single_27: {x: x_single_difference * 33, y: y_besoboy_single},
        node_besoboy_single_28: {x: x_single_difference * 34, y: y_besoboy_single},
        node_besoboy_single_29: {x: x_single_difference * 35, y: y_besoboy_single},
        node_besoboy_single_30: {x: x_single_difference * 36, y: y_besoboy_single},
        node_besoboy_single_31: {x: x_single_difference * 37, y: y_besoboy_single},
        node_besoboy_single_32: {x: x_single_difference * 38, y: y_besoboy_single},
        node_besoboy_single_33: {x: x_single_difference * 39, y: y_besoboy_single},
        node_besoboy_single_34: {x: x_single_difference * 40, y: y_besoboy_single},

        node_mayor_grom_single_1: {x: x_single_difference, y: y_mayor_grom_single},
        node_mayor_grom_single_2: {x: x_single_difference * 2, y: y_mayor_grom_single},
        node_mayor_grom_single_3: {x: x_single_difference * 3, y: y_mayor_grom_single},
        node_mayor_grom_single_4: {x: x_single_difference * 4, y: y_mayor_grom_single},
        node_mayor_grom_single_5: {x: x_single_difference * 5, y: y_mayor_grom_single},
        node_mayor_grom_single_6: {x: x_single_difference * 6, y: y_mayor_grom_single},
        node_mayor_grom_single_7: {x: x_single_difference * 7, y: y_mayor_grom_single},
        node_mayor_grom_single_8: {x: x_single_difference * 8, y: y_mayor_grom_single},
        node_mayor_grom_single_9: {x: x_single_difference * 9, y: y_mayor_grom_single},
        node_mayor_grom_single_10: {x: x_single_difference * 10, y: y_mayor_grom_single},
        node_mayor_grom_single_11: {x: x_single_difference * 11, y: y_mayor_grom_single},
        node_mayor_grom_single_12: {x: x_single_difference * 12, y: y_mayor_grom_single},
        node_mayor_grom_single_13: {x: x_single_difference * 13, y: y_mayor_grom_single},
        node_mayor_grom_single_14: {x: x_single_difference * 14, y: y_mayor_grom_single},
        node_mayor_grom_single_15: {x: x_single_difference * 15, y: y_mayor_grom_single},
        node_mayor_grom_single_16: {x: x_single_difference * 16, y: y_mayor_grom_single},
        node_mayor_grom_single_17: {x: x_single_difference * 17, y: y_mayor_grom_single},
        node_mayor_grom_single_18: {x: x_single_difference * 18, y: y_mayor_grom_single},
        node_mayor_grom_single_19: {x: x_single_difference * 19, y: y_mayor_grom_single},
        node_mayor_grom_single_20: {x: x_single_difference * 20, y: y_mayor_grom_single},
        node_mayor_grom_single_21: {x: x_single_difference * 21, y: y_mayor_grom_single},
        node_mayor_grom_single_22: {x: x_single_difference * 22, y: y_mayor_grom_single},
        node_mayor_grom_single_23: {x: x_single_difference * 23, y: y_mayor_grom_single},
        node_mayor_grom_single_24: {x: x_single_difference * 24, y: y_mayor_grom_single},
        node_mayor_grom_single_25: {x: x_single_difference * 25, y: y_mayor_grom_single},
        node_mayor_grom_single_26: {x: x_single_difference * 26, y: y_mayor_grom_single},
        node_mayor_grom_single_27: {x: x_single_difference * 27, y: y_mayor_grom_single},
        node_mayor_grom_single_28: {x: x_single_difference * 28, y: y_mayor_grom_single},
        node_mayor_grom_single_29: {x: x_single_difference * 29, y: y_mayor_grom_single},
        node_mayor_grom_single_30: {x: x_single_difference * 30, y: y_mayor_grom_single},
        node_mayor_grom_single_31: {x: x_single_difference * 31, y: y_mayor_grom_single},
        node_mayor_grom_single_32: {x: x_single_difference * 32, y: y_mayor_grom_single},
        node_mayor_grom_single_33: {x: x_single_difference * 33, y: y_mayor_grom_single},
        node_mayor_grom_single_34: {x: x_single_difference * 34, y: y_mayor_grom_single},

        node_inok_single_1: {x: x_single_difference, y: y_inok_single},
        node_inok_single_2: {x: x_single_difference * 2, y: y_inok_single},
        node_inok_single_3: {x: x_single_difference * 3, y: y_inok_single},
        node_inok_single_4: {x: x_single_difference * 4, y: y_inok_single},
        node_inok_single_5: {x: x_single_difference * 5, y: y_inok_single},
        node_inok_single_6: {x: x_single_difference * 6, y: y_inok_single},
        node_inok_single_7: {x: x_single_difference * 7, y: y_inok_single},
        node_inok_single_8: {x: x_single_difference * 8, y: y_inok_single},
        node_inok_single_9: {x: x_single_difference * 9, y: y_inok_single},
        node_inok_single_10: {x: x_single_difference * 10, y: y_inok_single},
        node_inok_single_11: {x: x_single_difference * 11, y: y_inok_single},
        node_inok_single_12: {x: x_single_difference * 12, y: y_inok_single},
        node_inok_single_13: {x: x_single_difference * 13, y: y_inok_single},
        node_inok_single_14: {x: x_single_difference * 14, y: y_inok_single},
        node_inok_single_15: {x: x_single_difference * 16, y: y_inok_vs_besoboy_single},
        node_inok_single_16: {x: x_single_difference * 19, y: y_inok_vs_besoboy_single},
        node_inok_single_17: {x: x_single_difference * 22, y: y_inok_vs_besoboy_single},
        node_inok_single_18: {x: x_single_difference * 24, y: y_inok_single},
        node_inok_single_19: {x: x_single_difference * 25, y: y_inok_single},
        node_inok_single_20: {x: x_single_difference * 26, y: y_inok_single},
        node_inok_single_21: {x: x_single_difference * 27, y: y_inok_single},
        node_inok_single_22: {x: x_single_difference * 28, y: y_inok_single},
        node_inok_single_23: {x: x_single_difference * 29, y: y_inok_single},
        node_inok_single_24: {x: x_single_difference * 30, y: y_inok_single},
        node_inok_single_25: {x: x_single_difference * 31, y: y_inok_single},
        node_inok_single_26: {x: x_single_difference * 32, y: y_inok_single},
        node_inok_single_27: {x: x_single_difference * 33, y: y_inok_single},
        node_inok_single_28: {x: x_single_difference * 34, y: y_inok_single},
        node_inok_single_29: {x: x_single_difference * 35, y: y_inok_single},
        node_inok_single_30: {x: x_single_difference * 36, y: y_inok_single},
        node_inok_single_31: {x: x_single_difference * 37, y: y_inok_single},
        node_inok_single_32: {x: x_single_difference * 38, y: y_inok_single},
        node_inok_single_33: {x: x_single_difference * 39, y: y_inok_single},
        node_inok_single_34: {x: x_single_difference * 40, y: y_inok_single},

        node_krasnaya_furiya_single_1: {x: x_single_difference, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_2: {x: x_single_difference * 2, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_3: {x: x_single_difference * 3, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_4: {x: x_single_difference * 4, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_5: {x: x_single_difference * 5, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_6: {x: x_single_difference * 6, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_7: {x: x_single_difference * 7, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_8: {x: x_single_difference * 8, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_9: {x: x_single_difference * 9, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_10: {x: x_single_difference * 10, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_11: {x: x_single_difference * 11, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_12: {x: x_single_difference * 12, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_13: {x: x_single_difference * 13, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_14: {x: x_single_difference * 14, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_15: {x: x_single_difference * 15, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_16: {x: x_single_difference * 16, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_16_1: {x: x_single_difference * 17, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_17: {x: x_single_difference * 18, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_18: {x: x_single_difference * 19, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_19: {x: x_single_difference * 20, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_20: {x: x_single_difference * 21, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_21: {x: x_single_difference * 22, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_22: {x: x_single_difference * 23, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_23: {x: x_single_difference * 24, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_24: {x: x_single_difference * 25, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_25: {x: x_single_difference * 26, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_26: {x: x_single_difference * 27, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_27: {x: x_single_difference * 28, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_28: {x: x_single_difference * 29, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_29: {x: x_single_difference * 30, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_30: {x: x_single_difference * 31, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_31: {x: x_single_difference * 32, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_32: {x: x_single_difference * 33, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_33: {x: x_single_difference * 34, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_34: {x: x_single_difference * 35, y: y_krasnaya_furiya_single},

        node_inok_vs_besoboy_single_1: {x: x_single_difference * 17, y: y_inok_vs_besoboy_single},
        node_inok_vs_besoboy_single_2: {x: x_single_difference * 20, y: y_inok_vs_besoboy_single},
        node_inok_vs_besoboy_single_3: {x: x_single_difference * 23, y: y_inok_vs_besoboy_single},

        node_besoboy_tome_1: {x: x_single_difference * 8 / 2, y: y_besoboy_tome},
        node_besoboy_tome_2: {x: x_single_difference * 22 / 2, y: y_besoboy_tome},
        node_besoboy_tome_3: {x: x_single_difference * 52 / 2, y: y_besoboy_tome},

        node_mayor_grom_tome_1: {x: x_single_difference * 7 / 2, y: y_mayor_grom_tome},
        node_mayor_grom_tome_2: {x: x_single_difference * 17 / 2, y: y_mayor_grom_tome},
        node_mayor_grom_tome_3: {x: x_single_difference * 29 / 2, y: y_mayor_grom_tome},

        node_inok_tome_1: {x: x_single_difference * 8 / 2, y: y_inok_tome},
        node_inok_tome_2: {x: x_single_difference * 22 / 2, y: y_inok_tome},
        node_inok_tome_3: {x: x_single_difference * 51 / 2, y: y_inok_tome},

        node_krasnaya_furiya_tome_1: {x: x_single_difference * 8 / 2, y: y_krasnaya_furiya_tome},
        node_krasnaya_furiya_tome_2: {x: x_single_difference * 23 / 2, y: y_krasnaya_furiya_tome},
        node_krasnaya_furiya_tome_3: {x: x_single_difference * 36 / 2, y: y_krasnaya_furiya_tome},

        node_ekslibrium_single_1: {x: x_single_difference, y: y_ekslibrium_single},
        node_ekslibrium_single_2: {x: x_single_difference * 2, y: y_ekslibrium_single},
        node_ekslibrium_single_3: {x: x_single_difference * 3, y: y_ekslibrium_single},
        node_ekslibrium_single_4: {x: x_single_difference * 4, y: y_ekslibrium_single},
        node_ekslibrium_single_5: {x: x_single_difference * 5, y: y_ekslibrium_single},
        node_ekslibrium_single_6: {x: x_single_difference * 6, y: y_ekslibrium_single},
        node_ekslibrium_single_7: {x: x_single_difference * 7, y: y_ekslibrium_single},
        node_ekslibrium_single_8: {x: x_single_difference * 8, y: y_ekslibrium_single},
        node_ekslibrium_single_9: {x: x_single_difference * 9, y: y_ekslibrium_single},
        node_ekslibrium_single_10: {x: x_single_difference * 10, y: y_ekslibrium_single},

        node_meteora_single_1: {x: x_single_difference, y: y_meteora_single},
        node_meteora_single_2: {x: x_single_difference * 2, y: y_meteora_single},
        node_meteora_single_3: {x: x_single_difference * 3, y: y_meteora_single},
        node_meteora_single_4: {x: x_single_difference * 4, y: y_meteora_single},
        node_meteora_single_5: {x: x_single_difference * 5, y: y_meteora_single},
        node_meteora_single_6: {x: x_single_difference * 6, y: y_meteora_single},
        node_meteora_single_7: {x: x_single_difference * 7, y: y_meteora_single},
        node_meteora_single_8: {x: x_single_difference * 8, y: y_meteora_single},
        node_meteora_single_9: {x: x_single_difference * 9, y: y_meteora_single},
        node_meteora_single_10: {x: x_single_difference * 10, y: y_meteora_single},

        node_inok_vs_besoboy_tome: {x: x_single_difference * 38 / 2, y: y_inok_vs_besoboy_tome}
    }
});

export default {nodes, edges, layouts};