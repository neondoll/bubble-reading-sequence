import * as vNG from "v-network-graph";
import Edge from "./interfaces/Edge";
import Node from "./interfaces/Node";

const color_bubble = "#1761ff";
const color_legends_bubble = "rgb(127, 18, 202)";
const color_besoboy = "#333399";
const color_mayor_grom = "rgb(255, 94, 0)";
const color_inok = "rgb(255, 255, 51)";
const color_krasnaya_furiya = "rgb(119, 2, 2)";
const color_inok_vs_besoboy = "rgb(153,153,102)"; // color_bubble
const color_ekslibrium = "rgb(137, 255, 108)";
const color_meteora = "rgb(0, 240, 255)";
const color_inok_i_mayor_grom = "#8bb099";
const color_childrens_comics = "rgb(255, 51, 102)";
const color_ziggi = color_childrens_comics;
const color_vremya_vorona = "rgb(128, 128, 128)"; // "rgb(255, 255, 255)"
const color_copyright_comics = {alena_spiridonova: "rgb(247, 221, 159)", evgeny_fedotov: "rgb(0, 204, 153)"};
const color_inok_korol_vecherinok = color_inok;
const color_mayor_grom_i_krasnaya_furiya = "rgb(187, 48, 1)";
const color_tochka_nevozvrata = "rgb(204, 255, 153)";
const color_besoboy_vol_2_1 = "rgb(0, 68, 188)";
const color_igor_grom = "rgb(255, 153, 42)";
const color_mirokhodtsy = "rgb(247, 221, 159)";
const color_soyuzniki = "rgb(202, 0, 11)";

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
    node_besoboy_single_35: {name: "Бесобой #35 Стая, часть 2", number: "35", size: size_single, color: color_besoboy},
    node_besoboy_single_36: {name: "Бесобой #36 Стая, часть 3", number: "36", size: size_single, color: color_besoboy},
    node_besoboy_single_37: {name: "Бесобой #37 Стая, часть 4", number: "37", size: size_single, color: color_besoboy},
    node_besoboy_single_38: {
        name: "Бесобой #38 Хищные сны, часть 1",
        number: "38",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_39: {
        name: "Бесобой #39 Хищные сны, часть 2",
        number: "39",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_40: {
        name: "Бесобой #40 Дьявол в деталях, часть 1",
        number: "40",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_41: {
        name: "Бесобой #41 Дьявол в деталях, часть 2",
        number: "41",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_42: {
        name: "Бесобой #42 Жертвы обстоятельств",
        number: "42",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_43: {name: "Бесобой #43 Рыковы", number: "43", size: size_single, color: color_besoboy},
    node_besoboy_single_44: {
        name: "Бесобой #44 Гончие Ада, часть 1",
        number: "44",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_45: {
        name: "Бесобой #45 Гончие Ада, часть 2",
        number: "45",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_46: {name: "Бесобой #46 Меч и зеркало", number: "46", size: size_single, color: color_besoboy},
    node_besoboy_single_47: {
        name: "Бесобой #47 Чъреба, часть 1",
        number: "47",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_48: {
        name: "Бесобой #48 Чъреба, часть 2",
        number: "48",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_49: {
        name: "Бесобой #49 И ад следовал за ним, часть 1",
        number: "49",
        size: size_single,
        color: color_besoboy
    },
    node_besoboy_single_50: {
        name: "Бесобой #50 И ад следовал за ним, часть 2",
        number: "50",
        size: size_single,
        color: color_besoboy
    },

    node_besoboy_tome_1: {name: "Бесобой том 1: Имя ему Бесобой", number: "1", size: size_tome, color: color_besoboy},
    node_besoboy_tome_2: {name: "Бесобой том 2: Лицо зверя", number: "2", size: size_tome, color: color_besoboy},
    node_besoboy_tome_3: {name: "Бесобой том 3: Три сестры", number: "3", size: size_tome, color: color_besoboy},
    node_besoboy_tome_4: {name: "Бесобой том 4: Балор", number: "4", size: size_tome, color: color_besoboy},
    node_besoboy_tome_5: {name: "Бесобой том 5: Метро", number: "5", size: size_tome, color: color_besoboy},
    node_besoboy_tome_6: {name: "Бесобой том 6: Стая", number: "6", size: size_tome, color: color_besoboy},
    node_besoboy_tome_7: {
        name: "Бесобой том 7: Жертвы обстоятельств",
        number: "7",
        size: size_tome,
        color: color_besoboy
    },
    node_besoboy_tome_8: {name: "Бесобой том 8: Гончие Ада", number: "8", size: size_tome, color: color_besoboy},

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
    node_mayor_grom_single_35: {
        name: "Майор Гром #35 Голоса, часть 2",
        number: "35",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_36: {
        name: "Майор Гром #36 Голоса, часть 3",
        number: "36",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_37: {
        name: "Майор Гром #37 Голоса, часть 4",
        number: "37",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_38: {
        name: "Майор Гром #38 Одержимость",
        number: "38",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_39: {
        name: "Майор Гром #39 Чувство Долга",
        number: "39",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_40: {
        name: "Майор Гром #40 В сердце тьмы, часть 1",
        number: "40",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_41: {
        name: "Майор Гром #41 Идеальный день",
        number: "41",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_42: {
        name: "Майор Гром #42 Загадка сфинкса, часть 1",
        number: "42",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_43: {
        name: "Майор Гром #43 Загадка сфинкса, часть 2",
        number: "43",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_44: {
        name: "Майор Гром #44 Загадка сфинкса, часть 3",
        number: "44",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_45: {
        name: "Майор Гром #45 Последнее дело, часть 1",
        number: "45",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_46: {
        name: "Майор Гром #46 Последнее дело, часть 2",
        number: "46",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_47: {
        name: "Майор Гром #47 Последнее дело, часть 3",
        number: "47",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_48: {
        name: "Майор Гром #48 Последнее дело, часть 4",
        number: "48",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_49: {
        name: "Майор Гром #49 Последнее дело, часть 5",
        number: "49",
        size: size_single,
        color: color_mayor_grom
    },
    node_mayor_grom_single_50: {
        name: "Майор Гром #50 Последнее дело, часть 6",
        number: "50",
        size: size_single,
        color: color_mayor_grom
    },

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
    node_mayor_grom_tome_4: {
        name: "Майор Гром том 4: Как в сказке",
        number: "4",
        size: size_tome,
        color: color_mayor_grom
    },
    node_mayor_grom_tome_5: {name: "Майор Гром том 5: Игра", number: "5", size: size_tome, color: color_mayor_grom},
    node_mayor_grom_tome_6: {name: "Майор Гром том 6: Голоса", number: "6", size: size_tome, color: color_mayor_grom},
    node_mayor_grom_i_krasnaya_furiya_tome_7: {
        name: "Майор Гром и Красная Фурия том 7: В сердце тьмы",
        number: "7",
        size: size_tome,
        color: color_mayor_grom_i_krasnaya_furiya
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
    node_inok_single_35: {name: "Инок #35 Сердце монстра, часть 1", number: "35", size: size_single, color: color_inok},
    node_inok_single_36: {name: "Инок #36 Сердце монстра, часть 2", number: "36", size: size_single, color: color_inok},
    node_inok_single_37: {name: "Инок #37 Сердце монстра, часть 3", number: "37", size: size_single, color: color_inok},
    node_inok_single_38: {name: "Инок #38 Сердце монстра, часть 4", number: "38", size: size_single, color: color_inok},
    node_inok_single_39: {name: "Инок #39 Мёртвая хватка, часть 1", number: "39", size: size_single, color: color_inok},
    node_inok_single_40: {name: "Инок #40 Мёртвая хватка, часть 2", number: "40", size: size_single, color: color_inok},
    node_inok_single_41: {name: "Инок #41 Мёртвая хватка, часть 3", number: "41", size: size_single, color: color_inok},
    node_inok_single_42: {name: "Инок #42 Мёртвая хватка, часть 4", number: "42", size: size_single, color: color_inok},
    node_inok_single_43: {
        name: "Инок #43 Путь к бессмертию, часть 1",
        number: "43",
        size: size_single,
        color: color_inok
    },
    node_inok_single_44: {
        name: "Инок #44 Путь к бессмертию, часть 2",
        number: "44",
        size: size_single,
        color: color_inok
    },
    node_inok_single_45: {
        name: "Инок #45 Путь к бессмертию, часть 3",
        number: "45",
        size: size_single,
        color: color_inok
    },
    node_inok_single_46: {
        name: "Инок #46 Игрушечный солдат, часть 1",
        number: "46",
        size: size_single,
        color: color_inok
    },
    node_inok_single_47: {
        name: "Инок #47 Игрушечный солдат, часть 2",
        number: "47",
        size: size_single,
        color: color_inok
    },
    node_inok_single_48: {name: "Инок #48 Рука судьбы, часть 1", number: "48", size: size_single, color: color_inok},
    node_inok_single_49: {name: "Инок #49 Рука судьбы, часть 2", number: "49", size: size_single, color: color_inok},
    node_inok_single_50: {name: "Инок #50 Всё, что останется", number: "50", size: size_single, color: color_inok},

    node_inok_tome_1: {name: "Инок том 1: Проданная реликвия часть 1", number: "1", size: size_tome, color: color_inok},
    node_inok_tome_2: {name: "Инок том 2: Проданная реликвия часть 2", number: "2", size: size_tome, color: color_inok},
    node_inok_tome_3: {name: "Инок том 3: Зверь во мне часть 1", number: "3", size: size_tome, color: color_inok},
    node_inok_tome_4: {name: "Инок том 4: Зверь во мне часть 2", number: "4", size: size_tome, color: color_inok},
    node_inok_tome_5: {name: "Инок том 5: Высокое напряжение", number: "5", size: size_tome, color: color_inok},
    node_inok_tome_6: {name: "Инок том 6: Сердце монстра", number: "6", size: size_tome, color: color_inok},
    node_inok_tome_7: {name: "Инок том 7: Мёртвая хватка", number: "7", size: size_tome, color: color_inok},

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
    node_krasnaya_furiya_single_35: {
        name: "Красная Фурия #35 Башня ворона, часть 1",
        number: "35",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_36: {
        name: "Красная Фурия #36 Башня ворона, часть 2",
        number: "36",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_37: {
        name: "Красная Фурия #37 Апгрейд",
        number: "37",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_38: {
        name: "Красная Фурия #38 Прозрение",
        number: "38",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_39: {
        name: "Красная Фурия #39 Отражение",
        number: "39",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_40: {
        name: "Красная Фурия #40 В сердце тьмы, часть 2",
        number: "40",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_41: {
        name: "Красная Фурия #41 Крах",
        number: "41",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_42: {
        name: "Красная Фурия #42 Агент Симмонс, часть 1",
        number: "42",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_43: {
        name: "Красная Фурия #43 Агент Симмонс, часть 2",
        number: "43",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_44: {
        name: "Красная Фурия #44 Жажда смерти",
        number: "44",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_45: {
        name: "Красная Фурия #45 Идол",
        number: "45",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_46: {
        name: "Красная Фурия #46 Сам себе враг, часть 1",
        number: "46",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_47: {
        name: "Красная Фурия #47 Сам себе враг, часть 2",
        number: "47",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_48: {
        name: "Красная Фурия #48 Финальный рывок, часть 1",
        number: "48",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_49: {
        name: "Красная Фурия #49 Финальный рывок, часть 2",
        number: "49",
        size: size_single,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_single_50: {
        name: "Красная Фурия #50 Финальный рывок, часть 3",
        number: "50",
        size: size_single,
        color: color_krasnaya_furiya
    },

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
    node_krasnaya_furiya_tome_4: {
        name: "Красная Фурия том 4: Тёмное наследие часть 2",
        number: "4",
        size: size_tome,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_tome_5: {
        name: "Красная Фурия том 5: Ничего личного, просто бизнес",
        number: "5",
        size: size_tome,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_tome_6: {
        name: "Красная Фурия том 6: Башня ворона",
        number: "6",
        size: size_tome,
        color: color_krasnaya_furiya
    },
    node_krasnaya_furiya_tome_8: {
        name: "Красная Фурия том 8: Агент Симмонс",
        number: "8",
        size: size_tome,
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

    node_inok_vs_besoboy_tome: {name: "Инок против Бесобоя", size: size_tome, color: color_inok_vs_besoboy},

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
    node_ekslibrium_single_11: {
        name: "Экслибриум #11 Благими намерениями, часть 1",
        number: "11",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_12: {
        name: "Экслибриум #12 Благими намерениями, часть 2",
        number: "12",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_13: {
        name: "Экслибриум #13 Благими намерениями, часть 3",
        number: "13",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_14: {
        name: "Экслибриум #14 Благими намерениями, часть 4",
        number: "14",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_15: {
        name: "Экслибриум #15 Меж трех огней, часть 1",
        number: "15",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_16: {
        name: "Экслибриум #16 Меж трех огней, часть 2",
        number: "16",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_17: {
        name: "Экслибриум #17 Меж трех огней, часть 3",
        number: "17",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_18: {
        name: "Экслибриум #18 Не сахар",
        number: "18",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_19: {name: "Экслибриум #19 Суд", number: "19", size: size_single, color: color_ekslibrium},
    node_ekslibrium_single_20: {
        name: "Экслибриум #20 Соль на рану, часть 1",
        number: "20",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_21: {
        name: "Экслибриум #21 Соль на рану, часть 2",
        number: "21",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_22: {
        name: "Экслибриум #22 Соль на рану, часть 3",
        number: "22",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_23: {
        name: "Экслибриум #23 Жить дальше",
        number: "23",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_24: {name: "Экслибриум #24 Моно", number: "24", size: size_single, color: color_ekslibrium},
    node_ekslibrium_single_25: {
        name: "Экслибриум #25 Вот дом, который..., часть 1",
        number: "25",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_26: {
        name: "Экслибриум #26 Вот дом, который..., часть 2",
        number: "26",
        size: size_single,
        color: color_ekslibrium
    },
    node_ekslibrium_single_27: {
        name: "Экслибриум #27 С новым счастьем",
        number: "27",
        size: size_single,
        color: color_ekslibrium
    },

    node_ekslibrium_tome_1: {
        name: "Экслибриум том 1: ...И дверь откроется",
        number: "1",
        size: size_tome,
        color: color_ekslibrium
    },
    node_ekslibrium_tome_2: {
        name: "Экслибриум том 2: Костяной дом",
        number: "2",
        size: size_tome,
        color: color_ekslibrium
    },
    node_ekslibrium_tome_3: {
        name: "Экслибриум том 3: Меж трёх огней",
        number: "3",
        size: size_tome,
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
    node_meteora_single_11: {
        name: "Метеора #11 Блокада, часть 5",
        number: "11",
        size: size_single,
        color: color_meteora
    },
    node_meteora_single_12: {
        name: "Метеора #12 Блокада, часть 6",
        number: "12",
        size: size_single,
        color: color_meteora
    },
    node_meteora_single_13: {
        name: "Метеора #13 Свинцовые небеса",
        number: "13",
        size: size_single,
        color: color_meteora
    },
    node_meteora_single_14: {
        name: "Метеора #14 Окончательное решение, часть 1",
        number: "14",
        size: size_single,
        color: color_meteora
    },
    node_meteora_single_15: {
        name: "Метеора #15 Окончательное решение, часть 2",
        number: "15",
        size: size_single,
        color: color_meteora
    },
    node_meteora_single_16: {
        name: "Метеора #16 Окончательное решение, часть 3",
        number: "16",
        size: size_single,
        color: color_meteora
    },
    node_meteora_single_17: {name: "Метеора #17 Лицо человека", number: "17", size: size_single, color: color_meteora},
    node_meteora_single_18: {
        name: "Метеора #18 Там, где обитают драконы",
        number: "18",
        size: size_single,
        color: color_meteora
    },
    node_meteora_single_19: {name: "Метеора #19 Охота, часть 1", number: "19", size: size_single, color: color_meteora},
    node_meteora_single_20: {name: "Метеора #20 Охота, часть 2", number: "20", size: size_single, color: color_meteora},
    node_meteora_single_21: {name: "Метеора #21 Охота, часть 3", number: "21", size: size_single, color: color_meteora},
    node_meteora_single_22: {name: "Метеора #22 Охота, часть 4", number: "22", size: size_single, color: color_meteora},
    node_meteora_single_23: {name: "Метеора #23 Откровение", number: "23", size: size_single, color: color_meteora},
    node_meteora_single_24: {name: "Метеора #24 Охота, часть 6", number: "24", size: size_single, color: color_meteora},
    node_meteora_single_25: {name: "Метеора #25 Я помню", number: "25", size: size_single, color: color_meteora},
    node_meteora_single_26: {
        name: "Метеора #26 Конкуренты, часть 1",
        number: "26",
        size: size_single,
        color: color_meteora
    },
    node_meteora_single_27: {
        name: "Метеора #27 Конкуренты, часть 2",
        number: "27",
        size: size_single,
        color: color_meteora
    },

    node_meteora_tome_1: {
        name: "Метеора том 1: Самая опасная вещь в космосе",
        number: "1",
        size: size_tome,
        color: color_meteora
    },
    node_meteora_tome_2: {name: "Метеора том 2: Блокада", number: "2", size: size_tome, color: color_meteora},
    node_meteora_tome_3: {
        name: "Метеора том 3: Окончательное решение",
        number: "3",
        size: size_tome,
        color: color_meteora
    },

    node_inok_i_mayor_grom_tome: {
        name: "Хроники Инока: Штурм Берлина",
        size: size_tome,
        color: color_inok_i_mayor_grom
    },

    node_ziggi_single_1: {
        name: "Зигги: космический хомяк №1. Планета Фастфуд",
        number: "1",
        size: size_single,
        color: color_ziggi
    },
    node_ziggi_single_2: {
        name: "Зигги: космический хомяк №2. Новогоднее чудо",
        number: "2",
        size: size_single,
        color: color_ziggi
    },
    node_ziggi_single_3: {
        name: "Зигги: космический хомяк №3. Гонки на Планете Вулканов",
        number: "3",
        size: size_single,
        color: color_ziggi
    },
    node_ziggi_single_4: {
        name: "Зигги: космический хомяк №4. За гранью вселеннной",
        number: "4",
        size: size_single,
        color: color_ziggi
    },
    node_ziggi_single_5: {
        name: "Зигги: космический хомяк №5. Рок и звёзды",
        number: "5",
        size: size_single,
        color: color_ziggi
    },

    node_ziggi_tome: {name: "Зигги: Космический хомяк", size: size_tome, color: color_ziggi},

    node_vremya_vorona_single_prolog: {name: "Время Ворона: Пролог", size: size_single, color: color_vremya_vorona},
    node_vremya_vorona_single_1: {name: "Время Ворона #1", number: "1", size: size_single, color: color_vremya_vorona},
    node_vremya_vorona_single_2: {name: "Время Ворона #2", number: "2", size: size_single, color: color_vremya_vorona},
    node_vremya_vorona_single_3: {name: "Время Ворона #3", number: "3", size: size_single, color: color_vremya_vorona},
    node_vremya_vorona_single_4: {name: "Время Ворона #4", number: "4", size: size_single, color: color_vremya_vorona},
    node_vremya_vorona_single_5: {name: "Время Ворона #5", number: "5", size: size_single, color: color_vremya_vorona},

    node_vremya_vorona_tome_predystoriya: {
        name: "Время Ворона: Предыстория",
        size: size_tome,
        color: color_vremya_vorona
    },
    node_vremya_vorona_tome: {name: "Время Ворона", size: size_tome, color: color_vremya_vorona},
    node_vremya_vorona_tome_epilog: {name: "Время Ворона: Эпилог", size: size_tome, color: color_vremya_vorona},

    node_koshki_myshki_tome_1: {
        name: "Кошки-мышки том 1: Старый новый друг",
        number: "1",
        size: size_tome,
        color: color_copyright_comics.evgeny_fedotov
    },
    node_koshki_myshki_tome_2: {
        name: "Кошки-мышки том 2: Подвиг каждый день",
        number: "2",
        size: size_tome,
        color: color_copyright_comics.evgeny_fedotov
    },

    node_tsezar_velikolepnyy_single_1: {
        name: "Цезарь Великолепный #1 Когда земля ближе облака",
        number: "1",
        size: size_single,
        color: color_copyright_comics.alena_spiridonova
    },
    node_tsezar_velikolepnyy_single_2: {
        name: "Цезарь Великолепный #2 Связь",
        number: "2",
        size: size_single,
        color: color_copyright_comics.alena_spiridonova
    },
    node_tsezar_velikolepnyy_single_3: {
        name: "Цезарь Великолепный #3 Ставрополь, прощай",
        number: "3",
        size: size_single,
        color: color_copyright_comics.alena_spiridonova
    },
    node_tsezar_velikolepnyy_single_4: {
        name: "Цезарь Великолепный #4 Там, где живет легенда",
        number: "4",
        size: size_single,
        color: color_copyright_comics.alena_spiridonova
    },
    node_tsezar_velikolepnyy_single_5: {
        name: "Цезарь Великолепный #5 В капкане",
        number: "5",
        size: size_single,
        color: color_copyright_comics.alena_spiridonova
    },

    node_inok_korol_vecherinok_single: {
        name: "Инок: Король вечеринок",
        size: size_single,
        color: color_inok_korol_vecherinok
    },

    node_tsezar_velikolepnyy_tome: {
        name: "Цезарь великолепный",
        size: size_tome,
        color: color_copyright_comics.alena_spiridonova
    },

    node_tochka_nevozvrata_tome: {name: "Точка невозврата", size: size_tome, color: color_tochka_nevozvrata},

    node_besoboy_vol_2_1_single_1: {
        name: "Бесобой Vol.2 #1 Исход, часть 1",
        number: "1",
        size: size_single,
        color: color_besoboy_vol_2_1
    },

    node_igor_grom_single_1: {
        name: "Игорь Гром #1 Находится на реконструкции, часть 1",
        number: "1",
        size: size_single,
        color: color_igor_grom
    },

    node_mirokhodtsy_single_1: {
        name: "Мироходцы #1 Кровь богов, часть 1",
        number: "1",
        size: size_single,
        color: color_mirokhodtsy
    },

    node_soyuzniki_single_1: {
        name: "Союзники #1 Перед рассветом, часть 1",
        number: "1",
        size: size_single,
        color: color_soyuzniki
    }
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
    edge_besoboy_single_23_tome_4: {source: "node_besoboy_single_23", target: "node_besoboy_tome_4", dashed: true},
    edge_besoboy_single_24_single_25: {source: "node_besoboy_single_24", target: "node_besoboy_single_25"},
    edge_besoboy_single_24_tome_4: {source: "node_besoboy_single_24", target: "node_besoboy_tome_4", dashed: true},
    edge_besoboy_single_25_single_26: {source: "node_besoboy_single_25", target: "node_besoboy_single_26"},
    edge_besoboy_single_25_tome_4: {source: "node_besoboy_single_25", target: "node_besoboy_tome_4", dashed: true},
    edge_besoboy_single_26_single_27: {source: "node_besoboy_single_26", target: "node_besoboy_single_27"},
    edge_besoboy_single_26_tome_4: {source: "node_besoboy_single_26", target: "node_besoboy_tome_4", dashed: true},
    edge_besoboy_single_27_single_28: {source: "node_besoboy_single_27", target: "node_besoboy_single_28"},
    edge_besoboy_single_27_tome_4: {source: "node_besoboy_single_27", target: "node_besoboy_tome_4", dashed: true},
    edge_besoboy_single_28_single_29: {source: "node_besoboy_single_28", target: "node_besoboy_single_29"},
    edge_besoboy_single_28_tome_5: {source: "node_besoboy_single_28", target: "node_besoboy_tome_5", dashed: true},
    edge_besoboy_single_29_single_30: {source: "node_besoboy_single_29", target: "node_besoboy_single_30"},
    edge_besoboy_single_29_tome_5: {source: "node_besoboy_single_29", target: "node_besoboy_tome_5", dashed: true},
    edge_besoboy_single_30_single_31: {source: "node_besoboy_single_30", target: "node_besoboy_single_31"},
    edge_besoboy_single_30_tome_5: {source: "node_besoboy_single_30", target: "node_besoboy_tome_5", dashed: true},
    edge_besoboy_single_31_single_32: {source: "node_besoboy_single_31", target: "node_besoboy_single_32"},
    edge_besoboy_single_31_tome_5: {source: "node_besoboy_single_31", target: "node_besoboy_tome_5", dashed: true},
    edge_besoboy_single_32_single_33: {source: "node_besoboy_single_32", target: "node_besoboy_single_33"},
    edge_besoboy_single_32_tome_5: {source: "node_besoboy_single_32", target: "node_besoboy_tome_5", dashed: true},
    edge_besoboy_single_33_single_34: {source: "node_besoboy_single_33", target: "node_besoboy_single_34"},
    edge_besoboy_single_33_tome_5: {source: "node_besoboy_single_33", target: "node_besoboy_tome_5", dashed: true},
    edge_besoboy_single_34_single_35: {source: "node_besoboy_single_34", target: "node_besoboy_single_35"},
    edge_besoboy_single_34_tome_6: {source: "node_besoboy_single_34", target: "node_besoboy_tome_6", dashed: true},
    edge_besoboy_single_35_single_36: {source: "node_besoboy_single_35", target: "node_besoboy_single_36"},
    edge_besoboy_single_35_tome_6: {source: "node_besoboy_single_35", target: "node_besoboy_tome_6", dashed: true},
    edge_besoboy_single_36_single_37: {source: "node_besoboy_single_36", target: "node_besoboy_single_37"},
    edge_besoboy_single_36_tome_6: {source: "node_besoboy_single_36", target: "node_besoboy_tome_6", dashed: true},
    edge_besoboy_single_37_tome_6: {source: "node_besoboy_single_37", target: "node_besoboy_tome_6", dashed: true},
    edge_besoboy_single_37_vremya_vorona_single_prologa: {
        source: "node_besoboy_single_37",
        target: "node_vremya_vorona_single_prolog"
    },
    edge_besoboy_single_38_single_39: {source: "node_besoboy_single_38", target: "node_besoboy_single_39"},
    edge_besoboy_single_38_tome_7: {source: "node_besoboy_single_38", target: "node_besoboy_tome_7", dashed: true},
    edge_besoboy_single_39_single_40: {source: "node_besoboy_single_39", target: "node_besoboy_single_40"},
    edge_besoboy_single_39_tome_7: {source: "node_besoboy_single_39", target: "node_besoboy_tome_7", dashed: true},
    edge_besoboy_single_39_vremya_vorona_single_3: {
        source: "node_besoboy_single_39",
        target: "node_vremya_vorona_single_3"
    },
    edge_besoboy_single_40_single_41: {source: "node_besoboy_single_40", target: "node_besoboy_single_41"},
    edge_besoboy_single_40_tome_7: {source: "node_besoboy_single_40", target: "node_besoboy_tome_7", dashed: true},
    edge_besoboy_single_41_single_42: {source: "node_besoboy_single_41", target: "node_besoboy_single_42"},
    edge_besoboy_single_41_tome_7: {source: "node_besoboy_single_41", target: "node_besoboy_tome_7", dashed: true},
    edge_besoboy_single_41_vremya_vorona_single_4: {
        source: "node_besoboy_single_41",
        target: "node_vremya_vorona_single_4"
    },
    edge_besoboy_single_42_single_43: {source: "node_besoboy_single_42", target: "node_besoboy_single_43"},
    edge_besoboy_single_42_tome_7: {source: "node_besoboy_single_42", target: "node_besoboy_tome_7", dashed: true},
    edge_besoboy_single_43_single_44: {source: "node_besoboy_single_43", target: "node_besoboy_single_44"},
    edge_besoboy_single_43_tome_8: {source: "node_besoboy_single_43", target: "node_besoboy_tome_8", dashed: true},
    edge_besoboy_single_44_single_45: {source: "node_besoboy_single_44", target: "node_besoboy_single_45"},
    edge_besoboy_single_44_tome_8: {source: "node_besoboy_single_44", target: "node_besoboy_tome_8", dashed: true},
    edge_besoboy_single_45_single_46: {source: "node_besoboy_single_45", target: "node_besoboy_single_46"},
    edge_besoboy_single_45_tome_8: {source: "node_besoboy_single_45", target: "node_besoboy_tome_8", dashed: true},
    edge_besoboy_single_46_single_47: {source: "node_besoboy_single_46", target: "node_besoboy_single_47"},
    edge_besoboy_single_46_tome_8: {source: "node_besoboy_single_46", target: "node_besoboy_tome_8", dashed: true},
    edge_besoboy_single_47_single_48: {source: "node_besoboy_single_47", target: "node_besoboy_single_48"},
    edge_besoboy_single_48_single_49: {source: "node_besoboy_single_48", target: "node_besoboy_single_49"},
    edge_besoboy_single_49_single_50: {source: "node_besoboy_single_49", target: "node_besoboy_single_50"},
    edge_besoboy_single_50_besoboy_vol_2_1_single_1: {
        source: "node_besoboy_single_50",
        target: "node_besoboy_vol_2_1_single_1"
    },

    edge_besoboy_tome_1_tome_2: {source: "node_besoboy_tome_1", target: "node_besoboy_tome_2"},
    edge_besoboy_tome_2_inok_vs_besoboy_tome: {source: "node_besoboy_tome_2", target: "node_inok_vs_besoboy_tome"},
    edge_besoboy_tome_3_tome_4: {source: "node_besoboy_tome_3", target: "node_besoboy_tome_4"},
    edge_besoboy_tome_4_tome_5: {source: "node_besoboy_tome_4", target: "node_besoboy_tome_5"},
    edge_besoboy_tome_5_tome_6: {source: "node_besoboy_tome_5", target: "node_besoboy_tome_6"},
    edge_besoboy_tome_6_tome_7: {source: "node_besoboy_tome_6", target: "node_besoboy_tome_7"},
    edge_besoboy_tome_6_vremya_vorona_tome: {source: "node_besoboy_tome_6", target: "node_vremya_vorona_tome"},
    edge_besoboy_tome_7_tome_8: {source: "node_besoboy_tome_7", target: "node_besoboy_tome_8"},

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
    edge_mayor_grom_single_19_tome_4: {
        source: "node_mayor_grom_single_19",
        target: "node_mayor_grom_tome_4",
        dashed: true
    },
    edge_mayor_grom_single_20_single_21: {source: "node_mayor_grom_single_20", target: "node_mayor_grom_single_21"},
    edge_mayor_grom_single_20_tome_4: {
        source: "node_mayor_grom_single_20",
        target: "node_mayor_grom_tome_4",
        dashed: true
    },
    edge_mayor_grom_single_21_single_22: {source: "node_mayor_grom_single_21", target: "node_mayor_grom_single_22"},
    edge_mayor_grom_single_21_tome_4: {
        source: "node_mayor_grom_single_21",
        target: "node_mayor_grom_tome_4",
        dashed: true
    },
    edge_mayor_grom_single_22_single_23: {source: "node_mayor_grom_single_22", target: "node_mayor_grom_single_23"},
    edge_mayor_grom_single_22_tome_4: {
        source: "node_mayor_grom_single_22",
        target: "node_mayor_grom_tome_4",
        dashed: true
    },
    edge_mayor_grom_single_23_single_24: {source: "node_mayor_grom_single_23", target: "node_mayor_grom_single_24"},
    edge_mayor_grom_single_23_tome_4: {
        source: "node_mayor_grom_single_23",
        target: "node_mayor_grom_tome_4",
        dashed: true
    },
    edge_mayor_grom_single_24_single_25: {source: "node_mayor_grom_single_24", target: "node_mayor_grom_single_25"},
    edge_mayor_grom_single_24_tome_4: {
        source: "node_mayor_grom_single_24",
        target: "node_mayor_grom_tome_4",
        dashed: true
    },
    edge_mayor_grom_single_25_single_26: {source: "node_mayor_grom_single_25", target: "node_mayor_grom_single_26"},
    edge_mayor_grom_single_25_tome_5: {
        source: "node_mayor_grom_single_25",
        target: "node_mayor_grom_tome_5",
        dashed: true
    },
    edge_mayor_grom_single_26_single_27: {source: "node_mayor_grom_single_26", target: "node_mayor_grom_single_27"},
    edge_mayor_grom_single_26_tome_5: {
        source: "node_mayor_grom_single_26",
        target: "node_mayor_grom_tome_5",
        dashed: true
    },
    edge_mayor_grom_single_27_single_28: {source: "node_mayor_grom_single_27", target: "node_mayor_grom_single_28"},
    edge_mayor_grom_single_27_tome_5: {
        source: "node_mayor_grom_single_27",
        target: "node_mayor_grom_tome_5",
        dashed: true
    },
    edge_mayor_grom_single_28_single_29: {source: "node_mayor_grom_single_28", target: "node_mayor_grom_single_29"},
    edge_mayor_grom_single_28_tome_5: {
        source: "node_mayor_grom_single_28",
        target: "node_mayor_grom_tome_5",
        dashed: true
    },
    edge_mayor_grom_single_29_single_30: {source: "node_mayor_grom_single_29", target: "node_mayor_grom_single_30"},
    edge_mayor_grom_single_29_tome_5: {
        source: "node_mayor_grom_single_29",
        target: "node_mayor_grom_tome_5",
        dashed: true
    },
    edge_mayor_grom_single_30_single_31: {source: "node_mayor_grom_single_30", target: "node_mayor_grom_single_31"},
    edge_mayor_grom_single_30_tome_5: {
        source: "node_mayor_grom_single_30",
        target: "node_mayor_grom_tome_5",
        dashed: true
    },
    edge_mayor_grom_single_31_single_32: {source: "node_mayor_grom_single_31", target: "node_mayor_grom_single_32"},
    edge_mayor_grom_single_31_tome_5: {
        source: "node_mayor_grom_single_31",
        target: "node_mayor_grom_tome_5",
        dashed: true
    },
    edge_mayor_grom_single_32_single_33: {source: "node_mayor_grom_single_32", target: "node_mayor_grom_single_33"},
    edge_mayor_grom_single_32_tome_5: {
        source: "node_mayor_grom_single_32",
        target: "node_mayor_grom_tome_5",
        dashed: true
    },
    edge_mayor_grom_single_33_single_34: {source: "node_mayor_grom_single_33", target: "node_mayor_grom_single_34"},
    edge_mayor_grom_single_33_tome_5: {
        source: "node_mayor_grom_single_33",
        target: "node_mayor_grom_tome_5",
        dashed: true
    },
    edge_mayor_grom_single_34_single_35: {source: "node_mayor_grom_single_34", target: "node_mayor_grom_single_35"},
    edge_mayor_grom_single_34_tome_6: {
        source: "node_mayor_grom_single_34",
        target: "node_mayor_grom_tome_6",
        dashed: true
    },
    edge_mayor_grom_single_35_single_36: {source: "node_mayor_grom_single_35", target: "node_mayor_grom_single_36"},
    edge_mayor_grom_single_35_tome_6: {
        source: "node_mayor_grom_single_35",
        target: "node_mayor_grom_tome_6",
        dashed: true
    },
    edge_mayor_grom_single_36_single_37: {source: "node_mayor_grom_single_36", target: "node_mayor_grom_single_37"},
    edge_mayor_grom_single_36_tome_6: {
        source: "node_mayor_grom_single_36",
        target: "node_mayor_grom_tome_6",
        dashed: true
    },
    edge_mayor_grom_single_37_tome_6: {
        source: "node_mayor_grom_single_37",
        target: "node_mayor_grom_tome_6",
        dashed: true
    },
    edge_mayor_grom_single_37_vremya_vorona_single_1: {
        source: "node_mayor_grom_single_37",
        target: "node_vremya_vorona_single_1"
    },
    edge_mayor_grom_single_38_mayor_grom_i_krasnaya_furiya_tome_7: {
        source: "node_mayor_grom_single_38",
        target: "node_mayor_grom_i_krasnaya_furiya_tome_7",
        dashed: true
    },
    edge_mayor_grom_single_38_vremya_vorona_single_2: {
        source: "node_mayor_grom_single_38",
        target: "node_vremya_vorona_single_2"
    },
    edge_mayor_grom_single_39_mayor_grom_i_krasnaya_furiya_tome_7: {
        source: "node_mayor_grom_single_39",
        target: "node_mayor_grom_i_krasnaya_furiya_tome_7",
        dashed: true
    },
    edge_mayor_grom_single_39_vremya_vorona_single_3: {
        source: "node_mayor_grom_single_39",
        target: "node_vremya_vorona_single_3"
    },
    edge_mayor_grom_single_40_mayor_grom_i_krasnaya_furiya_tome_7: {
        source: "node_mayor_grom_single_40",
        target: "node_mayor_grom_i_krasnaya_furiya_tome_7",
        dashed: true
    },
    edge_mayor_grom_single_40_krasnaya_furiya_single_40: {
        source: "node_mayor_grom_single_40",
        target: "node_krasnaya_furiya_single_40"
    },
    edge_mayor_grom_single_41_mayor_grom_i_krasnaya_furiya_tome_7: {
        source: "node_mayor_grom_single_41",
        target: "node_mayor_grom_i_krasnaya_furiya_tome_7",
        dashed: true
    },
    edge_mayor_grom_single_41_vremya_vorona_single_5: {
        source: "node_mayor_grom_single_41",
        target: "node_vremya_vorona_single_5"
    },
    edge_mayor_grom_single_42_single_43: {source: "node_mayor_grom_single_42", target: "node_mayor_grom_single_43"},
    edge_mayor_grom_single_43_single_44: {source: "node_mayor_grom_single_43", target: "node_mayor_grom_single_44"},
    edge_mayor_grom_single_44_single_45: {source: "node_mayor_grom_single_44", target: "node_mayor_grom_single_45"},
    edge_mayor_grom_single_45_single_46: {source: "node_mayor_grom_single_45", target: "node_mayor_grom_single_46"},
    edge_mayor_grom_single_46_single_47: {source: "node_mayor_grom_single_46", target: "node_mayor_grom_single_47"},
    edge_mayor_grom_single_47_single_48: {source: "node_mayor_grom_single_47", target: "node_mayor_grom_single_48"},
    edge_mayor_grom_single_48_single_49: {source: "node_mayor_grom_single_48", target: "node_mayor_grom_single_49"},
    edge_mayor_grom_single_49_single_50: {source: "node_mayor_grom_single_49", target: "node_mayor_grom_single_50"},
    edge_mayor_grom_single_50_igor_grom_single_1: {
        source: "node_mayor_grom_single_50",
        target: "node_igor_grom_single_1"
    },

    edge_mayor_grom_tome_1_tome_2: {source: "node_mayor_grom_tome_1", target: "node_mayor_grom_tome_2"},
    edge_mayor_grom_tome_2_tome_3: {source: "node_mayor_grom_tome_2", target: "node_mayor_grom_tome_3"},
    edge_mayor_grom_tome_3_tome_4: {source: "node_mayor_grom_tome_3", target: "node_mayor_grom_tome_4"},
    edge_mayor_grom_tome_4_tome_5: {source: "node_mayor_grom_tome_4", target: "node_mayor_grom_tome_5"},
    edge_mayor_grom_tome_5_tome_6: {source: "node_mayor_grom_tome_5", target: "node_mayor_grom_tome_6"},
    edge_mayor_grom_tome_6_mayor_grom_i_krasnaya_furiya_tome_7: {
        source: "node_mayor_grom_tome_6",
        target: "node_mayor_grom_i_krasnaya_furiya_tome_7"
    },
    edge_mayor_grom_tome_6_vremya_vorona_tome: {source: "node_mayor_grom_tome_6", target: "node_vremya_vorona_tome"},
    edge_mayor_grom_i_krasnaya_furiya_tome_7_krasnaya_furiya_tome_8: {
        source: "node_mayor_grom_i_krasnaya_furiya_tome_7",
        target: "node_krasnaya_furiya_tome_8"
    },

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
    edge_inok_single_22_tome_4: {source: "node_inok_single_22", target: "node_inok_tome_4", dashed: true},
    edge_inok_single_23_single_24: {source: "node_inok_single_23", target: "node_inok_single_24"},
    edge_inok_single_23_tome_4: {source: "node_inok_single_23", target: "node_inok_tome_4", dashed: true},
    edge_inok_single_24_single_25: {source: "node_inok_single_24", target: "node_inok_single_25"},
    edge_inok_single_24_tome_4: {source: "node_inok_single_24", target: "node_inok_tome_4", dashed: true},
    edge_inok_single_25_single_26: {source: "node_inok_single_25", target: "node_inok_single_26"},
    edge_inok_single_25_tome_4: {source: "node_inok_single_25", target: "node_inok_tome_4", dashed: true},
    edge_inok_single_26_single_27: {source: "node_inok_single_26", target: "node_inok_single_27"},
    edge_inok_single_26_tome_4: {source: "node_inok_single_26", target: "node_inok_tome_4", dashed: true},
    edge_inok_single_27_single_28: {source: "node_inok_single_27", target: "node_inok_single_28"},
    edge_inok_single_27_tome_5: {source: "node_inok_single_27", target: "node_inok_tome_5", dashed: true},
    edge_inok_single_28_single_29: {source: "node_inok_single_28", target: "node_inok_single_29"},
    edge_inok_single_28_tome_5: {source: "node_inok_single_28", target: "node_inok_tome_5", dashed: true},
    edge_inok_single_29_single_30: {source: "node_inok_single_29", target: "node_inok_single_30"},
    edge_inok_single_29_tome_5: {source: "node_inok_single_29", target: "node_inok_tome_5", dashed: true},
    edge_inok_single_30_single_31: {source: "node_inok_single_30", target: "node_inok_single_31"},
    edge_inok_single_30_tome_5: {source: "node_inok_single_30", target: "node_inok_tome_5", dashed: true},
    edge_inok_single_31_single_32: {source: "node_inok_single_31", target: "node_inok_single_32"},
    edge_inok_single_31_tome_5: {source: "node_inok_single_31", target: "node_inok_tome_5", dashed: true},
    edge_inok_single_32_single_33: {source: "node_inok_single_32", target: "node_inok_single_33"},
    edge_inok_single_32_tome_6: {source: "node_inok_single_32", target: "node_inok_tome_6", dashed: true},
    edge_inok_single_33_single_34: {source: "node_inok_single_33", target: "node_inok_single_34"},
    edge_inok_single_33_tome_6: {source: "node_inok_single_33", target: "node_inok_tome_6", dashed: true},
    edge_inok_single_34_single_35: {source: "node_inok_single_34", target: "node_inok_single_35"},
    edge_inok_single_34_tome_6: {source: "node_inok_single_34", target: "node_inok_tome_6", dashed: true},
    edge_inok_single_35_single_36: {source: "node_inok_single_35", target: "node_inok_single_36"},
    edge_inok_single_35_tome_6: {source: "node_inok_single_35", target: "node_inok_tome_6", dashed: true},
    edge_inok_single_36_single_37: {source: "node_inok_single_36", target: "node_inok_single_37"},
    edge_inok_single_36_tome_6: {source: "node_inok_single_36", target: "node_inok_tome_6", dashed: true},
    edge_inok_single_37_single_38: {source: "node_inok_single_37", target: "node_inok_single_38"},
    edge_inok_single_37_tome_6: {source: "node_inok_single_37", target: "node_inok_tome_6", dashed: true},
    edge_inok_single_38_single_39: {source: "node_inok_single_38", target: "node_inok_single_39"},
    edge_inok_single_38_tome_6: {source: "node_inok_single_38", target: "node_inok_tome_6", dashed: true},
    edge_inok_single_38_vremya_vorona_single_2: {source: "node_inok_single_38", target: "node_vremya_vorona_single_2"},
    edge_inok_single_39_single_40: {source: "node_inok_single_39", target: "node_inok_single_40"},
    edge_inok_single_39_tome_7: {source: "node_inok_single_39", target: "node_inok_tome_7", dashed: true},
    edge_inok_single_40_single_41: {source: "node_inok_single_40", target: "node_inok_single_41"},
    edge_inok_single_40_tome_7: {source: "node_inok_single_40", target: "node_inok_tome_7", dashed: true},
    edge_inok_single_41_single_42: {source: "node_inok_single_41", target: "node_inok_single_42"},
    edge_inok_single_41_tome_7: {source: "node_inok_single_41", target: "node_inok_tome_7", dashed: true},
    edge_inok_single_42_single_43: {source: "node_inok_single_42", target: "node_inok_single_43"},
    edge_inok_single_42_tome_7: {source: "node_inok_single_42", target: "node_inok_tome_7", dashed: true},
    edge_inok_single_43_single_44: {source: "node_inok_single_43", target: "node_inok_single_44"},
    edge_inok_single_44_single_45: {source: "node_inok_single_44", target: "node_inok_single_45"},
    edge_inok_single_45_single_46: {source: "node_inok_single_45", target: "node_inok_single_46"},
    edge_inok_single_46_single_47: {source: "node_inok_single_46", target: "node_inok_single_47"},
    edge_inok_single_47_single_48: {source: "node_inok_single_47", target: "node_inok_single_48"},
    edge_inok_single_48_single_49: {source: "node_inok_single_48", target: "node_inok_single_49"},
    edge_inok_single_49_single_50: {source: "node_inok_single_49", target: "node_inok_single_50"},
    //node_inok_single_50_inok_i_mayor_grom_tome: {source: "node_inok_single_50", target: "node_inok_i_mayor_grom_tome"},
    node_inok_single_50_mirokhodtsy_single_1: {source: "node_inok_single_50", target: "node_mirokhodtsy_single_1"},

    edge_inok_tome_1_tome_2: {source: "node_inok_tome_1", target: "node_inok_tome_2"},
    edge_inok_tome_2_inok_vs_besoboy_tome: {source: "node_inok_tome_2", target: "node_inok_vs_besoboy_tome"},
    edge_inok_tome_3_tome_4: {source: "node_inok_tome_3", target: "node_inok_tome_4"},
    edge_inok_tome_4_tome_5: {source: "node_inok_tome_4", target: "node_inok_tome_5"},
    edge_inok_tome_5_tome_6: {source: "node_inok_tome_5", target: "node_inok_tome_6"},
    edge_inok_tome_5_vremya_vorona_tome: {source: "node_inok_tome_5", target: "node_vremya_vorona_tome"},
    edge_inok_tome_6_tome_7: {source: "node_inok_tome_6", target: "node_inok_tome_7"},

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
    edge_krasnaya_furiya_single_20_tome_4: {
        source: "node_krasnaya_furiya_single_20",
        target: "node_krasnaya_furiya_tome_4",
        dashed: true
    },
    edge_krasnaya_furiya_single_21_single_22: {
        source: "node_krasnaya_furiya_single_21",
        target: "node_krasnaya_furiya_single_22"
    },
    edge_krasnaya_furiya_single_21_tome_4: {
        source: "node_krasnaya_furiya_single_21",
        target: "node_krasnaya_furiya_tome_4",
        dashed: true
    },
    edge_krasnaya_furiya_single_22_single_23: {
        source: "node_krasnaya_furiya_single_22",
        target: "node_krasnaya_furiya_single_23"
    },
    edge_krasnaya_furiya_single_22_tome_4: {
        source: "node_krasnaya_furiya_single_22",
        target: "node_krasnaya_furiya_tome_4",
        dashed: true
    },
    edge_krasnaya_furiya_single_23_single_24: {
        source: "node_krasnaya_furiya_single_23",
        target: "node_krasnaya_furiya_single_24"
    },
    edge_krasnaya_furiya_single_23_tome_4: {
        source: "node_krasnaya_furiya_single_23",
        target: "node_krasnaya_furiya_tome_4",
        dashed: true
    },
    edge_krasnaya_furiya_single_24_single_25: {
        source: "node_krasnaya_furiya_single_24",
        target: "node_krasnaya_furiya_single_25"
    },
    edge_krasnaya_furiya_single_24_tome_4: {
        source: "node_krasnaya_furiya_single_24",
        target: "node_krasnaya_furiya_tome_4",
        dashed: true
    },
    edge_krasnaya_furiya_single_25_single_26: {
        source: "node_krasnaya_furiya_single_25",
        target: "node_krasnaya_furiya_single_26"
    },
    edge_krasnaya_furiya_single_25_tome_5: {
        source: "node_krasnaya_furiya_single_25",
        target: "node_krasnaya_furiya_tome_5",
        dashed: true
    },
    edge_krasnaya_furiya_single_26_single_27: {
        source: "node_krasnaya_furiya_single_26",
        target: "node_krasnaya_furiya_single_27"
    },
    edge_krasnaya_furiya_single_26_tome_5: {
        source: "node_krasnaya_furiya_single_26",
        target: "node_krasnaya_furiya_tome_5",
        dashed: true
    },
    edge_krasnaya_furiya_single_27_single_28: {
        source: "node_krasnaya_furiya_single_27",
        target: "node_krasnaya_furiya_single_28"
    },
    edge_krasnaya_furiya_single_27_tome_5: {
        source: "node_krasnaya_furiya_single_27",
        target: "node_krasnaya_furiya_tome_5",
        dashed: true
    },
    edge_krasnaya_furiya_single_28_single_29: {
        source: "node_krasnaya_furiya_single_28",
        target: "node_krasnaya_furiya_single_29"
    },
    edge_krasnaya_furiya_single_28_tome_5: {
        source: "node_krasnaya_furiya_single_28",
        target: "node_krasnaya_furiya_tome_5",
        dashed: true
    },
    edge_krasnaya_furiya_single_29_single_30: {
        source: "node_krasnaya_furiya_single_29",
        target: "node_krasnaya_furiya_single_30"
    },
    edge_krasnaya_furiya_single_29_tome_5: {
        source: "node_krasnaya_furiya_single_29",
        target: "node_krasnaya_furiya_tome_5",
        dashed: true
    },
    edge_krasnaya_furiya_single_30_single_31: {
        source: "node_krasnaya_furiya_single_30",
        target: "node_krasnaya_furiya_single_31"
    },
    edge_krasnaya_furiya_single_30_tome_5: {
        source: "node_krasnaya_furiya_single_30",
        target: "node_krasnaya_furiya_tome_5",
        dashed: true
    },
    edge_krasnaya_furiya_single_31_single_32: {
        source: "node_krasnaya_furiya_single_31",
        target: "node_krasnaya_furiya_single_32"
    },
    edge_krasnaya_furiya_single_31_tome_5: {
        source: "node_krasnaya_furiya_single_31",
        target: "node_krasnaya_furiya_tome_5",
        dashed: true
    },
    edge_krasnaya_furiya_single_32_single_33: {
        source: "node_krasnaya_furiya_single_32",
        target: "node_krasnaya_furiya_single_33"
    },
    edge_krasnaya_furiya_single_32_tome_6: {
        source: "node_krasnaya_furiya_single_32",
        target: "node_krasnaya_furiya_tome_6",
        dashed: true
    },
    edge_krasnaya_furiya_single_33_single_34: {
        source: "node_krasnaya_furiya_single_33",
        target: "node_krasnaya_furiya_single_34"
    },
    edge_krasnaya_furiya_single_33_tome_6: {
        source: "node_krasnaya_furiya_single_33",
        target: "node_krasnaya_furiya_tome_6",
        dashed: true
    },
    edge_krasnaya_furiya_single_34_single_35: {
        source: "node_krasnaya_furiya_single_34",
        target: "node_krasnaya_furiya_single_35"
    },
    edge_krasnaya_furiya_single_34_tome_6: {
        source: "node_krasnaya_furiya_single_34",
        target: "node_krasnaya_furiya_tome_6",
        dashed: true
    },
    edge_krasnaya_furiya_single_35_single_36: {
        source: "node_krasnaya_furiya_single_35",
        target: "node_krasnaya_furiya_single_36"
    },
    edge_krasnaya_furiya_single_35_tome_6: {
        source: "node_krasnaya_furiya_single_35",
        target: "node_krasnaya_furiya_tome_6",
        dashed: true
    },
    edge_krasnaya_furiya_single_36_single_37: {
        source: "node_krasnaya_furiya_single_36",
        target: "node_krasnaya_furiya_single_37"
    },
    edge_krasnaya_furiya_single_36_tome_6: {
        source: "node_krasnaya_furiya_single_36",
        target: "node_krasnaya_furiya_tome_6",
        dashed: true
    },
    edge_krasnaya_furiya_single_37_tome_6: {
        source: "node_krasnaya_furiya_single_37",
        target: "node_krasnaya_furiya_tome_6",
        dashed: true
    },
    edge_krasnaya_furiya_single_37_vremya_vorona_single_1: {
        source: "node_krasnaya_furiya_single_37",
        target: "node_vremya_vorona_single_1"
    },
    edge_krasnaya_furiya_single_38_mayor_grom_i_krasnaya_furiya_tome_7: {
        source: "node_krasnaya_furiya_single_38",
        target: "node_mayor_grom_i_krasnaya_furiya_tome_7",
        dashed: true
    },
    edge_krasnaya_furiya_single_38_vremya_vorona_single_2: {
        source: "node_krasnaya_furiya_single_38",
        target: "node_vremya_vorona_single_2"
    },
    edge_krasnaya_furiya_single_39_mayor_grom_i_krasnaya_furiya_tome_7: {
        source: "node_krasnaya_furiya_single_39",
        target: "node_mayor_grom_i_krasnaya_furiya_tome_7",
        dashed: true
    },
    edge_krasnaya_furiya_single_39_vremya_vorona_single_3: {
        source: "node_krasnaya_furiya_single_39",
        target: "node_vremya_vorona_single_3"
    },
    edge_krasnaya_furiya_single_40_mayor_grom_i_krasnaya_furiya_tome_7: {
        source: "node_krasnaya_furiya_single_40",
        target: "node_mayor_grom_i_krasnaya_furiya_tome_7",
        dashed: true
    },
    edge_krasnaya_furiya_single_40_vremya_vorona_single_4: {
        source: "node_krasnaya_furiya_single_40",
        target: "node_vremya_vorona_single_4"
    },
    edge_krasnaya_furiya_single_41_mayor_grom_i_krasnaya_furiya_tome_7: {
        source: "node_krasnaya_furiya_single_41",
        target: "node_mayor_grom_i_krasnaya_furiya_tome_7",
        dashed: true
    },
    edge_krasnaya_furiya_single_41_vremya_vorona_single_5: {
        source: "node_krasnaya_furiya_single_41",
        target: "node_vremya_vorona_single_5"
    },
    edge_krasnaya_furiya_single_42_single_43: {
        source: "node_krasnaya_furiya_single_42",
        target: "node_krasnaya_furiya_single_43"
    },
    edge_krasnaya_furiya_single_42_tome_8: {
        source: "node_krasnaya_furiya_single_42",
        target: "node_krasnaya_furiya_tome_8",
        dashed: true
    },
    edge_krasnaya_furiya_single_43_single_44: {
        source: "node_krasnaya_furiya_single_43",
        target: "node_krasnaya_furiya_single_44"
    },
    edge_krasnaya_furiya_single_43_tome_8: {
        source: "node_krasnaya_furiya_single_43",
        target: "node_krasnaya_furiya_tome_8",
        dashed: true
    },
    edge_krasnaya_furiya_single_44_single_45: {
        source: "node_krasnaya_furiya_single_44",
        target: "node_krasnaya_furiya_single_45"
    },
    edge_krasnaya_furiya_single_44_tome_8: {
        source: "node_krasnaya_furiya_single_44",
        target: "node_krasnaya_furiya_tome_8",
        dashed: true
    },
    edge_krasnaya_furiya_single_45_single_46: {
        source: "node_krasnaya_furiya_single_45",
        target: "node_krasnaya_furiya_single_46"
    },
    edge_krasnaya_furiya_single_45_tome_8: {
        source: "node_krasnaya_furiya_single_45",
        target: "node_krasnaya_furiya_tome_8",
        dashed: true
    },
    edge_krasnaya_furiya_single_46_single_47: {
        source: "node_krasnaya_furiya_single_46",
        target: "node_krasnaya_furiya_single_47"
    },
    edge_krasnaya_furiya_single_47_single_48: {
        source: "node_krasnaya_furiya_single_47",
        target: "node_krasnaya_furiya_single_48"
    },
    edge_krasnaya_furiya_single_48_single_49: {
        source: "node_krasnaya_furiya_single_48",
        target: "node_krasnaya_furiya_single_49"
    },
    edge_krasnaya_furiya_single_49_single_50: {
        source: "node_krasnaya_furiya_single_49",
        target: "node_krasnaya_furiya_single_50"
    },
    edge_krasnaya_furiya_single_50_soyuzniki_single_1: {
        source: "node_krasnaya_furiya_single_50",
        target: "node_soyuzniki_single_1"
    },

    edge_krasnaya_furiya_tome_1_tome_2: {source: "node_krasnaya_furiya_tome_1", target: "node_krasnaya_furiya_tome_2"},
    edge_krasnaya_furiya_tome_2_tome_3: {source: "node_krasnaya_furiya_tome_2", target: "node_krasnaya_furiya_tome_3"},
    edge_krasnaya_furiya_tome_3_tome_4: {source: "node_krasnaya_furiya_tome_3", target: "node_krasnaya_furiya_tome_4"},
    edge_krasnaya_furiya_tome_4_tome_5: {source: "node_krasnaya_furiya_tome_4", target: "node_krasnaya_furiya_tome_5"},
    edge_krasnaya_furiya_tome_5_tome_6: {source: "node_krasnaya_furiya_tome_5", target: "node_krasnaya_furiya_tome_6"},
    edge_krasnaya_furiya_tome_6_mayor_grom_i_krasnaya_furiya_tome_7: {
        source: "node_krasnaya_furiya_tome_6",
        target: "node_mayor_grom_i_krasnaya_furiya_tome_7"
    },
    edge_krasnaya_furiya_tome_6_vremya_vorona_tome: {
        source: "node_krasnaya_furiya_tome_6",
        target: "node_vremya_vorona_tome"
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

    edge_inok_vs_besoboy_tome_besoboy_tome_3: {source: "node_inok_vs_besoboy_tome", target: "node_besoboy_tome_3"},
    edge_inok_vs_besoboy_tome_inok_tome_3: {source: "node_inok_vs_besoboy_tome", target: "node_inok_tome_3"},

    edge_ekslibrium_single_1_single_2: {source: "node_ekslibrium_single_1", target: "node_ekslibrium_single_2"},
    edge_ekslibrium_single_1_tome_1: {
        source: "node_ekslibrium_single_1",
        target: "node_ekslibrium_tome_1",
        dashed: true
    },
    edge_ekslibrium_single_2_single_3: {source: "node_ekslibrium_single_2", target: "node_ekslibrium_single_3"},
    edge_ekslibrium_single_2_tome_1: {
        source: "node_ekslibrium_single_2",
        target: "node_ekslibrium_tome_1",
        dashed: true
    },
    edge_ekslibrium_single_3_single_4: {source: "node_ekslibrium_single_3", target: "node_ekslibrium_single_4"},
    edge_ekslibrium_single_3_tome_1: {
        source: "node_ekslibrium_single_3",
        target: "node_ekslibrium_tome_1",
        dashed: true
    },
    edge_ekslibrium_single_4_single_5: {source: "node_ekslibrium_single_4", target: "node_ekslibrium_single_5"},
    edge_ekslibrium_single_4_tome_1: {
        source: "node_ekslibrium_single_4",
        target: "node_ekslibrium_tome_1",
        dashed: true
    },
    edge_ekslibrium_single_5_single_6: {source: "node_ekslibrium_single_5", target: "node_ekslibrium_single_6"},
    edge_ekslibrium_single_5_tome_1: {
        source: "node_ekslibrium_single_5",
        target: "node_ekslibrium_tome_1",
        dashed: true
    },
    edge_ekslibrium_single_6_single_7: {source: "node_ekslibrium_single_6", target: "node_ekslibrium_single_7"},
    edge_ekslibrium_single_6_tome_2: {
        source: "node_ekslibrium_single_6",
        target: "node_ekslibrium_tome_2",
        dashed: true
    },
    edge_ekslibrium_single_7_single_8: {source: "node_ekslibrium_single_7", target: "node_ekslibrium_single_8"},
    edge_ekslibrium_single_7_tome_2: {
        source: "node_ekslibrium_single_7",
        target: "node_ekslibrium_tome_2",
        dashed: true
    },
    edge_ekslibrium_single_8_single_9: {source: "node_ekslibrium_single_8", target: "node_ekslibrium_single_9"},
    edge_ekslibrium_single_8_tome_2: {
        source: "node_ekslibrium_single_8",
        target: "node_ekslibrium_tome_2",
        dashed: true
    },
    edge_ekslibrium_single_9_single_10: {source: "node_ekslibrium_single_9", target: "node_ekslibrium_single_10"},
    edge_ekslibrium_single_9_tome_2: {
        source: "node_ekslibrium_single_9",
        target: "node_ekslibrium_tome_2",
        dashed: true
    },
    edge_ekslibrium_single_10_single_11: {source: "node_ekslibrium_single_10", target: "node_ekslibrium_single_11"},
    edge_ekslibrium_single_10_tome_2: {
        source: "node_ekslibrium_single_10",
        target: "node_ekslibrium_tome_2",
        dashed: true
    },
    edge_ekslibrium_single_11_single_12: {source: "node_ekslibrium_single_11", target: "node_ekslibrium_single_12"},
    edge_ekslibrium_single_11_tome_3: {
        source: "node_ekslibrium_single_11",
        target: "node_ekslibrium_tome_3",
        dashed: true
    },
    edge_ekslibrium_single_12_single_13: {source: "node_ekslibrium_single_12", target: "node_ekslibrium_single_13"},
    edge_ekslibrium_single_12_tome_3: {
        source: "node_ekslibrium_single_12",
        target: "node_ekslibrium_tome_3",
        dashed: true
    },
    edge_ekslibrium_single_13_single_14: {source: "node_ekslibrium_single_13", target: "node_ekslibrium_single_14"},
    edge_ekslibrium_single_13_tome_3: {
        source: "node_ekslibrium_single_13",
        target: "node_ekslibrium_tome_3",
        dashed: true
    },
    edge_ekslibrium_single_14_single_15: {source: "node_ekslibrium_single_14", target: "node_ekslibrium_single_15"},
    edge_ekslibrium_single_14_tome_3: {
        source: "node_ekslibrium_single_14",
        target: "node_ekslibrium_tome_3",
        dashed: true
    },
    edge_ekslibrium_single_15_single_16: {source: "node_ekslibrium_single_15", target: "node_ekslibrium_single_16"},
    edge_ekslibrium_single_15_tome_3: {
        source: "node_ekslibrium_single_15",
        target: "node_ekslibrium_tome_3",
        dashed: true
    },
    edge_ekslibrium_single_16_single_17: {source: "node_ekslibrium_single_16", target: "node_ekslibrium_single_17"},
    edge_ekslibrium_single_16_tome_3: {
        source: "node_ekslibrium_single_16",
        target: "node_ekslibrium_tome_3",
        dashed: true
    },
    edge_ekslibrium_single_17_single_18: {source: "node_ekslibrium_single_17", target: "node_ekslibrium_single_18"},
    edge_ekslibrium_single_17_tome_3: {
        source: "node_ekslibrium_single_17",
        target: "node_ekslibrium_tome_3",
        dashed: true
    },
    edge_ekslibrium_single_17_vremya_vorona_tome_epilog: {
        source: "node_ekslibrium_single_17",
        target: "node_vremya_vorona_tome_epilog"
    },
    edge_ekslibrium_single_18_single_19: {source: "node_ekslibrium_single_18", target: "node_ekslibrium_single_19"},
    edge_ekslibrium_single_19_single_20: {source: "node_ekslibrium_single_19", target: "node_ekslibrium_single_20"},
    edge_ekslibrium_single_20_single_21: {source: "node_ekslibrium_single_20", target: "node_ekslibrium_single_21"},
    edge_ekslibrium_single_21_single_22: {source: "node_ekslibrium_single_21", target: "node_ekslibrium_single_22"},
    edge_ekslibrium_single_22_single_23: {source: "node_ekslibrium_single_22", target: "node_ekslibrium_single_23"},
    edge_ekslibrium_single_23_single_24: {source: "node_ekslibrium_single_23", target: "node_ekslibrium_single_24"},
    edge_ekslibrium_single_24_single_25: {source: "node_ekslibrium_single_24", target: "node_ekslibrium_single_25"},
    edge_ekslibrium_single_25_single_26: {source: "node_ekslibrium_single_25", target: "node_ekslibrium_single_26"},
    edge_ekslibrium_single_26_single_27: {source: "node_ekslibrium_single_26", target: "node_ekslibrium_single_27"},

    edge_ekslibrium_tome_1_tome_2: {source: "node_ekslibrium_tome_1", target: "node_ekslibrium_tome_2"},
    edge_ekslibrium_tome_2_tome_3: {source: "node_ekslibrium_tome_2", target: "node_ekslibrium_tome_3"},

    edge_meteora_single_1_single_2: {source: "node_meteora_single_1", target: "node_meteora_single_2"},
    edge_meteora_single_1_tome_1: {source: "node_meteora_single_1", target: "node_meteora_tome_1", dashed: true},
    edge_meteora_single_2_single_3: {source: "node_meteora_single_2", target: "node_meteora_single_3"},
    edge_meteora_single_2_tome_1: {source: "node_meteora_single_2", target: "node_meteora_tome_1", dashed: true},
    edge_meteora_single_3_single_4: {source: "node_meteora_single_3", target: "node_meteora_single_4"},
    edge_meteora_single_3_tome_1: {source: "node_meteora_single_3", target: "node_meteora_tome_1", dashed: true},
    edge_meteora_single_4_single_5: {source: "node_meteora_single_4", target: "node_meteora_single_5"},
    edge_meteora_single_4_tome_1: {source: "node_meteora_single_4", target: "node_meteora_tome_1", dashed: true},
    edge_meteora_single_5_single_6: {source: "node_meteora_single_5", target: "node_meteora_single_6"},
    edge_meteora_single_5_tome_1: {source: "node_meteora_single_5", target: "node_meteora_tome_1", dashed: true},
    edge_meteora_single_6_single_7: {source: "node_meteora_single_6", target: "node_meteora_single_7"},
    edge_meteora_single_6_tome_1: {source: "node_meteora_single_6", target: "node_meteora_tome_1", dashed: true},
    edge_meteora_single_7_single_8: {source: "node_meteora_single_7", target: "node_meteora_single_8"},
    edge_meteora_single_7_tome_2: {source: "node_meteora_single_7", target: "node_meteora_tome_2", dashed: true},
    edge_meteora_single_8_single_9: {source: "node_meteora_single_8", target: "node_meteora_single_9"},
    edge_meteora_single_8_tome_2: {source: "node_meteora_single_8", target: "node_meteora_tome_2", dashed: true},
    edge_meteora_single_9_single_10: {source: "node_meteora_single_9", target: "node_meteora_single_10"},
    edge_meteora_single_9_tome_2: {source: "node_meteora_single_9", target: "node_meteora_tome_2", dashed: true},
    edge_meteora_single_10_single_11: {source: "node_meteora_single_10", target: "node_meteora_single_11"},
    edge_meteora_single_10_tome_2: {source: "node_meteora_single_10", target: "node_meteora_tome_2", dashed: true},
    edge_meteora_single_11_single_12: {source: "node_meteora_single_11", target: "node_meteora_single_12"},
    edge_meteora_single_11_tome_2: {source: "node_meteora_single_11", target: "node_meteora_tome_2", dashed: true},
    edge_meteora_single_12_single_13: {source: "node_meteora_single_12", target: "node_meteora_single_13"},
    edge_meteora_single_12_tome_2: {source: "node_meteora_single_12", target: "node_meteora_tome_2", dashed: true},
    edge_meteora_single_13_single_14: {source: "node_meteora_single_13", target: "node_meteora_single_14"},
    edge_meteora_single_13_tome_3: {source: "node_meteora_single_13", target: "node_meteora_tome_3", dashed: true},
    edge_meteora_single_14_single_15: {source: "node_meteora_single_14", target: "node_meteora_single_15"},
    edge_meteora_single_14_tome_3: {source: "node_meteora_single_14", target: "node_meteora_tome_3", dashed: true},
    edge_meteora_single_15_single_16: {source: "node_meteora_single_15", target: "node_meteora_single_16"},
    edge_meteora_single_15_tome_3: {source: "node_meteora_single_15", target: "node_meteora_tome_3", dashed: true},
    edge_meteora_single_16_single_17: {source: "node_meteora_single_16", target: "node_meteora_single_17"},
    edge_meteora_single_16_tome_3: {source: "node_meteora_single_16", target: "node_meteora_tome_3", dashed: true},
    edge_meteora_single_17_single_18: {source: "node_meteora_single_17", target: "node_meteora_single_18"},
    edge_meteora_single_17_tome_3: {source: "node_meteora_single_17", target: "node_meteora_tome_3", dashed: true},
    edge_meteora_single_18_single_19: {source: "node_meteora_single_18", target: "node_meteora_single_19"},
    edge_meteora_single_19_single_20: {source: "node_meteora_single_19", target: "node_meteora_single_20"},
    edge_meteora_single_20_single_21: {source: "node_meteora_single_20", target: "node_meteora_single_21"},
    edge_meteora_single_21_single_22: {source: "node_meteora_single_21", target: "node_meteora_single_22"},
    edge_meteora_single_22_single_23: {source: "node_meteora_single_22", target: "node_meteora_single_23"},
    edge_meteora_single_23_single_24: {source: "node_meteora_single_23", target: "node_meteora_single_24"},
    edge_meteora_single_24_single_25: {source: "node_meteora_single_24", target: "node_meteora_single_25"},
    edge_meteora_single_25_single_26: {source: "node_meteora_single_25", target: "node_meteora_single_26"},
    edge_meteora_single_26_single_27: {source: "node_meteora_single_26", target: "node_meteora_single_27"},

    edge_meteora_tome_1_tome_2: {source: "node_meteora_tome_1", target: "node_meteora_tome_2"},
    edge_meteora_tome_2_tome_3: {source: "node_meteora_tome_2", target: "node_meteora_tome_3"},

    edge_ziggi_single_1_single_2: {source: "node_ziggi_single_1", target: "node_ziggi_single_2"},
    edge_ziggi_single_1_tome: {source: "node_ziggi_single_1", target: "node_ziggi_tome", dashed: true},
    edge_ziggi_single_2_single_3: {source: "node_ziggi_single_2", target: "node_ziggi_single_3"},
    edge_ziggi_single_2_tome: {source: "node_ziggi_single_2", target: "node_ziggi_tome", dashed: true},
    edge_ziggi_single_3_single_4: {source: "node_ziggi_single_3", target: "node_ziggi_single_4"},
    edge_ziggi_single_3_tome: {source: "node_ziggi_single_3", target: "node_ziggi_tome", dashed: true},
    edge_ziggi_single_4_single_5: {source: "node_ziggi_single_4", target: "node_ziggi_single_5"},
    edge_ziggi_single_4_tome: {source: "node_ziggi_single_4", target: "node_ziggi_tome", dashed: true},
    edge_ziggi_single_5_tome: {source: "node_ziggi_single_5", target: "node_ziggi_tome", dashed: true},

    edge_vremya_vorona_single_prologa_besoboy_single_38: {
        source: "node_vremya_vorona_single_prolog",
        target: "node_besoboy_single_38"
    },
    edge_vremya_vorona_single_prologa_single_1: {
        source: "node_vremya_vorona_single_prolog",
        target: "node_vremya_vorona_single_1"
    },
    edge_vremya_vorona_single_prologa_tome: {
        source: "node_vremya_vorona_single_prolog",
        target: "node_vremya_vorona_tome",
        dashed: true
    },
    edge_vremya_vorona_single_1_mayor_grom_single_38: {
        source: "node_vremya_vorona_single_1",
        target: "node_mayor_grom_single_38"
    },
    edge_vremya_vorona_single_1_inok_single_38: {source: "node_vremya_vorona_single_1", target: "node_inok_single_38"},
    edge_vremya_vorona_single_1_krasnaya_furiya_single_38: {
        source: "node_vremya_vorona_single_1",
        target: "node_krasnaya_furiya_single_38"
    },
    edge_vremya_vorona_single_1_single_2: {
        source: "node_vremya_vorona_single_1",
        target: "node_vremya_vorona_single_2"
    },
    edge_vremya_vorona_single_1_tome: {
        source: "node_vremya_vorona_single_1",
        target: "node_vremya_vorona_tome",
        dashed: true
    },
    edge_vremya_vorona_single_2_mayor_grom_single_39: {
        source: "node_vremya_vorona_single_2",
        target: "node_mayor_grom_single_39"
    },
    edge_vremya_vorona_single_2_krasnaya_furiya_single_39: {
        source: "node_vremya_vorona_single_2",
        target: "node_krasnaya_furiya_single_39"
    },
    edge_vremya_vorona_single_2_single_3: {
        source: "node_vremya_vorona_single_2",
        target: "node_vremya_vorona_single_3"
    },
    edge_vremya_vorona_single_2_tome: {
        source: "node_vremya_vorona_single_2",
        target: "node_vremya_vorona_tome",
        dashed: true
    },
    edge_vremya_vorona_single_3_besoboy_single_40: {
        source: "node_vremya_vorona_single_3",
        target: "node_besoboy_single_40"
    },
    edge_vremya_vorona_single_3_mayor_grom_single_40: {
        source: "node_vremya_vorona_single_3",
        target: "node_mayor_grom_single_40"
    },
    edge_vremya_vorona_single_3_single_4: {
        source: "node_vremya_vorona_single_3",
        target: "node_vremya_vorona_single_4"
    },
    edge_vremya_vorona_single_3_tome: {
        source: "node_vremya_vorona_single_3",
        target: "node_vremya_vorona_tome",
        dashed: true
    },
    edge_vremya_vorona_single_4_mayor_grom_single_41: {
        source: "node_vremya_vorona_single_4",
        target: "node_mayor_grom_single_41"
    },
    edge_vremya_vorona_single_4_krasnaya_furiya_single_41: {
        source: "node_vremya_vorona_single_4",
        target: "node_krasnaya_furiya_single_41"
    },
    edge_vremya_vorona_single_4_single_5: {
        source: "node_vremya_vorona_single_4",
        target: "node_vremya_vorona_single_5"
    },
    edge_vremya_vorona_single_4_tome: {
        source: "node_vremya_vorona_single_4",
        target: "node_vremya_vorona_tome",
        dashed: true
    },
    edge_vremya_vorona_single_5_besoboy_single_42: {
        source: "node_vremya_vorona_single_5",
        target: "node_besoboy_single_42"
    },
    edge_vremya_vorona_single_5_tome_epilog: {
        source: "node_vremya_vorona_single_5",
        target: "node_vremya_vorona_tome_epilog"
    },
    edge_vremya_vorona_single_5_tome: {
        source: "node_vremya_vorona_single_5",
        target: "node_vremya_vorona_tome",
        dashed: true
    },

    edge_vremya_vorona_tome_predystoriy_single_prologa: {
        source: "node_vremya_vorona_tome_predystoriya",
        target: "node_vremya_vorona_single_prolog"
    },
    edge_vremya_vorona_tome_predystoriy_tome: {
        source: "node_vremya_vorona_tome_predystoriya",
        target: "node_vremya_vorona_tome"
    },
    edge_vremya_vorona_tome_besoboy_tome_8: {source: "node_vremya_vorona_tome", target: "node_besoboy_tome_8"},
    edge_vremya_vorona_tome_tome_epilog: {source: "node_vremya_vorona_tome", target: "node_vremya_vorona_tome_epilog"},
    edge_vremya_vorona_tome_epilog_mayor_grom_single_42: {
        source: "node_vremya_vorona_tome_epilog",
        target: "node_mayor_grom_single_42"
    },
    edge_vremya_vorona_tome_epilog_krasnaya_furiya_single_42: {
        source: "node_vremya_vorona_tome_epilog",
        target: "node_krasnaya_furiya_single_42"
    },
    edge_vremya_vorona_tome_epilog_krasnaya_furiya_tome_8: {
        source: "node_vremya_vorona_tome_epilog",
        target: "node_krasnaya_furiya_tome_8"
    },
    edge_vremya_vorona_tome_epilog_ekslibrium_single_18: {
        source: "node_vremya_vorona_tome_epilog",
        target: "node_ekslibrium_single_18"
    },

    edge_koshki_myshki_tome_1_tome_2: {source: "node_koshki_myshki_tome_1", target: "node_koshki_myshki_tome_2"},

    edge_tsezar_velikolepnyy_single_1_single_2: {
        source: "node_tsezar_velikolepnyy_single_1",
        target: "node_tsezar_velikolepnyy_single_2"
    },
    edge_tsezar_velikolepnyy_single_1_tome: {
        source: "node_tsezar_velikolepnyy_single_1",
        target: "node_tsezar_velikolepnyy_tome",
        dashed: true
    },
    edge_tsezar_velikolepnyy_single_2_single_3: {
        source: "node_tsezar_velikolepnyy_single_2",
        target: "node_tsezar_velikolepnyy_single_3"
    },
    edge_tsezar_velikolepnyy_single_2_tome: {
        source: "node_tsezar_velikolepnyy_single_2",
        target: "node_tsezar_velikolepnyy_tome",
        dashed: true
    },
    edge_tsezar_velikolepnyy_single_3_single_4: {
        source: "node_tsezar_velikolepnyy_single_3",
        target: "node_tsezar_velikolepnyy_single_4"
    },
    edge_tsezar_velikolepnyy_single_3_tome: {
        source: "node_tsezar_velikolepnyy_single_3",
        target: "node_tsezar_velikolepnyy_tome",
        dashed: true
    },
    edge_tsezar_velikolepnyy_single_4_single_5: {
        source: "node_tsezar_velikolepnyy_single_4",
        target: "node_tsezar_velikolepnyy_single_5"
    },
    edge_tsezar_velikolepnyy_single_4_tome: {
        source: "node_tsezar_velikolepnyy_single_4",
        target: "node_tsezar_velikolepnyy_tome",
        dashed: true
    },
    edge_tsezar_velikolepnyy_single_5_tome: {
        source: "node_tsezar_velikolepnyy_single_5",
        target: "node_tsezar_velikolepnyy_tome",
        dashed: true
    }
};

const difference = 60;
const x_single_difference = difference;

const y_besoboy_single = difference;
const y_besoboy_tome = difference * 2;
const y_besoboy_vol_2_1_single = y_besoboy_single;
const y_besoboy_vol_2_1_tome = y_besoboy_tome;
const y_inok_single = difference * 3;
const y_inok_tome = difference * 4;
const y_mirokhodtsy_single = y_inok_single;
const y_mirokhodtsy_tome = y_inok_tome;
const y_inok_vs_besoboy_single = (y_besoboy_single + y_inok_single) / 2;
const y_inok_vs_besoboy_tome = y_inok_vs_besoboy_single + difference;
const y_vremya_vorona_single = difference * 5;
const y_vremya_vorona_tome = difference * 6;
const y_mayor_grom_single = difference * 7;
const y_igor_grom_single = y_mayor_grom_single;
const y_mayor_grom_tome = difference * 8;
const y_igor_grom_tome = y_mayor_grom_tome;
const y_krasnaya_furiya_single = difference * 9;
const y_krasnaya_furiya_tome = difference * 10;
const y_soyuzniki_single = y_krasnaya_furiya_single;
const y_soyuzniki_tome = y_krasnaya_furiya_tome;
const y_mayor_grom_i_krasnaya_furiya_single = (y_mayor_grom_single + y_krasnaya_furiya_single) / 2;
const y_mayor_grom_i_krasnaya_furiya_tome = y_mayor_grom_i_krasnaya_furiya_single + difference;
const y_ekslibrium_single = difference * 11;
const y_ekslibrium_tome = difference * 12;
const y_meteora_single = difference * 13;
const y_meteora_tome = difference * 14;
const y_inok_i_mayor_grom_tome = difference * 15;
const y_ziggi_single = difference * 16;
const y_ziggi_tome = difference * 17;
const y_koshki_myshki_tome = difference * 18;
const y_tsezar_velikolepnyy_single = difference * 19;
const y_tsezar_velikolepnyy_tome = difference * 20;
const y_inok_korol_vecherinok_single = difference * 21;
const y_tochka_nevozvrata_tome = difference * 22;

const layouts: vNG.Layouts = {
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
        node_besoboy_single_35: {x: x_single_difference * 41, y: y_besoboy_single},
        node_besoboy_single_36: {x: x_single_difference * 42, y: y_besoboy_single},
        node_besoboy_single_37: {x: x_single_difference * 43, y: y_besoboy_single},
        node_besoboy_single_38: {x: x_single_difference * 45, y: y_besoboy_single},
        node_besoboy_single_39: {x: x_single_difference * 47, y: y_besoboy_single},
        node_besoboy_single_40: {x: x_single_difference * 49, y: y_besoboy_single},
        node_besoboy_single_41: {x: x_single_difference * 52, y: y_besoboy_single},
        node_besoboy_single_42: {x: x_single_difference * 54, y: y_besoboy_single},
        node_besoboy_single_43: {x: x_single_difference * 59, y: y_besoboy_single},
        node_besoboy_single_44: {x: x_single_difference * 60, y: y_besoboy_single},
        node_besoboy_single_45: {x: x_single_difference * 61, y: y_besoboy_single},
        node_besoboy_single_46: {x: x_single_difference * 62, y: y_besoboy_single},
        node_besoboy_single_47: {x: x_single_difference * 63, y: y_besoboy_single},
        node_besoboy_single_48: {x: x_single_difference * 64, y: y_besoboy_single},
        node_besoboy_single_49: {x: x_single_difference * 65, y: y_besoboy_single},
        node_besoboy_single_50: {x: x_single_difference * 66, y: y_besoboy_single},

        node_besoboy_tome_1: {x: x_single_difference * 4, y: y_besoboy_tome},
        node_besoboy_tome_2: {x: x_single_difference * 11, y: y_besoboy_tome},
        node_besoboy_tome_3: {x: x_single_difference * 26, y: y_besoboy_tome},
        node_besoboy_tome_4: {x: x_single_difference * 31, y: y_besoboy_tome},
        node_besoboy_tome_5: {x: x_single_difference * 36.5, y: y_besoboy_tome},
        node_besoboy_tome_6: {x: x_single_difference * 41.5, y: y_besoboy_tome},
        node_besoboy_tome_7: {x: x_single_difference * 51.5, y: y_besoboy_tome},
        node_besoboy_tome_8: {x: x_single_difference * 60.5, y: y_besoboy_tome},

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
        node_mayor_grom_single_16: {x: x_single_difference * 18, y: y_mayor_grom_single},
        node_mayor_grom_single_17: {x: x_single_difference * 21, y: y_mayor_grom_single},
        node_mayor_grom_single_18: {x: x_single_difference * 24, y: y_mayor_grom_single},
        node_mayor_grom_single_19: {x: x_single_difference * 25, y: y_mayor_grom_single},
        node_mayor_grom_single_20: {x: x_single_difference * 26, y: y_mayor_grom_single},
        node_mayor_grom_single_21: {x: x_single_difference * 27, y: y_mayor_grom_single},
        node_mayor_grom_single_22: {x: x_single_difference * 28, y: y_mayor_grom_single},
        node_mayor_grom_single_23: {x: x_single_difference * 29, y: y_mayor_grom_single},
        node_mayor_grom_single_24: {x: x_single_difference * 30, y: y_mayor_grom_single},
        node_mayor_grom_single_25: {x: x_single_difference * 31, y: y_mayor_grom_single},
        node_mayor_grom_single_26: {x: x_single_difference * 32, y: y_mayor_grom_single},
        node_mayor_grom_single_27: {x: x_single_difference * 33, y: y_mayor_grom_single},
        node_mayor_grom_single_28: {x: x_single_difference * 34, y: y_mayor_grom_single},
        node_mayor_grom_single_29: {x: x_single_difference * 35, y: y_mayor_grom_single},
        node_mayor_grom_single_30: {x: x_single_difference * 36, y: y_mayor_grom_single},
        node_mayor_grom_single_31: {x: x_single_difference * 37, y: y_mayor_grom_single},
        node_mayor_grom_single_32: {x: x_single_difference * 38, y: y_mayor_grom_single},
        node_mayor_grom_single_33: {x: x_single_difference * 39, y: y_mayor_grom_single},
        node_mayor_grom_single_34: {x: x_single_difference * 40, y: y_mayor_grom_single},
        node_mayor_grom_single_35: {x: x_single_difference * 41, y: y_mayor_grom_single},
        node_mayor_grom_single_36: {x: x_single_difference * 42, y: y_mayor_grom_single},
        node_mayor_grom_single_37: {x: x_single_difference * 43, y: y_mayor_grom_single},
        node_mayor_grom_single_38: {x: x_single_difference * 45, y: y_mayor_grom_i_krasnaya_furiya_single},
        node_mayor_grom_single_39: {x: x_single_difference * 47, y: y_mayor_grom_i_krasnaya_furiya_single},
        node_mayor_grom_single_40: {x: x_single_difference * 50, y: y_mayor_grom_i_krasnaya_furiya_single},
        node_mayor_grom_single_41: {x: x_single_difference * 53, y: y_mayor_grom_i_krasnaya_furiya_single},
        node_mayor_grom_single_42: {x: x_single_difference * 59, y: y_mayor_grom_single},
        node_mayor_grom_single_43: {x: x_single_difference * 60, y: y_mayor_grom_single},
        node_mayor_grom_single_44: {x: x_single_difference * 61, y: y_mayor_grom_single},
        node_mayor_grom_single_45: {x: x_single_difference * 62, y: y_mayor_grom_single},
        node_mayor_grom_single_46: {x: x_single_difference * 63, y: y_mayor_grom_single},
        node_mayor_grom_single_47: {x: x_single_difference * 64, y: y_mayor_grom_single},
        node_mayor_grom_single_48: {x: x_single_difference * 65, y: y_mayor_grom_single},
        node_mayor_grom_single_49: {x: x_single_difference * 66, y: y_mayor_grom_single},
        node_mayor_grom_single_50: {x: x_single_difference * 67, y: y_mayor_grom_single},

        node_mayor_grom_tome_1: {x: x_single_difference * 3.5, y: y_mayor_grom_tome},
        node_mayor_grom_tome_2: {x: x_single_difference * 8.5, y: y_mayor_grom_tome},
        node_mayor_grom_tome_3: {x: x_single_difference * 17.5, y: y_mayor_grom_tome},
        node_mayor_grom_tome_4: {x: x_single_difference * 27.5, y: y_mayor_grom_tome},
        node_mayor_grom_tome_5: {x: x_single_difference * 35, y: y_mayor_grom_tome},
        node_mayor_grom_tome_6: {x: x_single_difference * 41.5, y: y_mayor_grom_tome},
        node_mayor_grom_i_krasnaya_furiya_tome_7: {x: x_single_difference * 51, y: y_mayor_grom_i_krasnaya_furiya_tome},

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
        node_inok_single_35: {x: x_single_difference * 41, y: y_inok_single},
        node_inok_single_36: {x: x_single_difference * 42, y: y_inok_single},
        node_inok_single_37: {x: x_single_difference * 44, y: y_inok_single},
        node_inok_single_38: {x: x_single_difference * 45, y: y_inok_single},
        node_inok_single_39: {x: x_single_difference * 47, y: y_inok_single},
        node_inok_single_40: {x: x_single_difference * 50, y: y_inok_single},
        node_inok_single_41: {x: x_single_difference * 53, y: y_inok_single},
        node_inok_single_42: {x: x_single_difference * 54, y: y_inok_single},
        node_inok_single_43: {x: x_single_difference * 55, y: y_inok_single},
        node_inok_single_44: {x: x_single_difference * 56, y: y_inok_single},
        node_inok_single_45: {x: x_single_difference * 57, y: y_inok_single},
        node_inok_single_46: {x: x_single_difference * 58, y: y_inok_single},
        node_inok_single_47: {x: x_single_difference * 59, y: y_inok_single},
        node_inok_single_48: {x: x_single_difference * 60, y: y_inok_single},
        node_inok_single_49: {x: x_single_difference * 61, y: y_inok_single},
        node_inok_single_50: {x: x_single_difference * 62, y: y_inok_single},

        node_inok_tome_1: {x: x_single_difference * 4, y: y_inok_tome},
        node_inok_tome_2: {x: x_single_difference * 11, y: y_inok_tome},
        node_inok_tome_3: {x: x_single_difference * 25.5, y: y_inok_tome},
        node_inok_tome_4: {x: x_single_difference * 30, y: y_inok_tome},
        node_inok_tome_5: {x: x_single_difference * 35, y: y_inok_tome},
        node_inok_tome_6: {x: x_single_difference * 41.5, y: y_inok_tome},
        node_inok_tome_7: {x: x_single_difference * 49.5, y: y_inok_tome},

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
        node_krasnaya_furiya_single_15: {x: x_single_difference * 16, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_16: {x: x_single_difference * 19, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_16_1: {x: x_single_difference * 20, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_17: {x: x_single_difference * 21, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_18: {x: x_single_difference * 24, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_19: {x: x_single_difference * 25, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_20: {x: x_single_difference * 26, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_21: {x: x_single_difference * 27, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_22: {x: x_single_difference * 28, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_23: {x: x_single_difference * 29, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_24: {x: x_single_difference * 30, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_25: {x: x_single_difference * 31, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_26: {x: x_single_difference * 32, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_27: {x: x_single_difference * 33, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_28: {x: x_single_difference * 34, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_29: {x: x_single_difference * 35, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_30: {x: x_single_difference * 36, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_31: {x: x_single_difference * 37, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_32: {x: x_single_difference * 38, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_33: {x: x_single_difference * 39, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_34: {x: x_single_difference * 40, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_35: {x: x_single_difference * 41, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_36: {x: x_single_difference * 42, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_37: {x: x_single_difference * 44, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_38: {x: x_single_difference * 46, y: y_mayor_grom_i_krasnaya_furiya_single},
        node_krasnaya_furiya_single_39: {x: x_single_difference * 48, y: y_mayor_grom_i_krasnaya_furiya_single},
        node_krasnaya_furiya_single_40: {x: x_single_difference * 51, y: y_mayor_grom_i_krasnaya_furiya_single},
        node_krasnaya_furiya_single_41: {x: x_single_difference * 52, y: y_mayor_grom_i_krasnaya_furiya_single},
        node_krasnaya_furiya_single_42: {x: x_single_difference * 54, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_43: {x: x_single_difference * 60, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_44: {x: x_single_difference * 61, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_45: {x: x_single_difference * 62, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_46: {x: x_single_difference * 63, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_47: {x: x_single_difference * 64, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_48: {x: x_single_difference * 65, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_49: {x: x_single_difference * 66, y: y_krasnaya_furiya_single},
        node_krasnaya_furiya_single_50: {x: x_single_difference * 67, y: y_krasnaya_furiya_single},

        node_krasnaya_furiya_tome_1: {x: x_single_difference * 4, y: y_krasnaya_furiya_tome},
        node_krasnaya_furiya_tome_2: {x: x_single_difference * 12, y: y_krasnaya_furiya_tome},
        node_krasnaya_furiya_tome_3: {x: x_single_difference * 22, y: y_krasnaya_furiya_tome},
        node_krasnaya_furiya_tome_4: {x: x_single_difference * 28, y: y_krasnaya_furiya_tome},
        node_krasnaya_furiya_tome_5: {x: x_single_difference * 34, y: y_krasnaya_furiya_tome},
        node_krasnaya_furiya_tome_6: {x: x_single_difference * 41, y: y_krasnaya_furiya_tome},
        node_krasnaya_furiya_tome_8: {x: x_single_difference * 60.5, y: y_krasnaya_furiya_tome},

        node_inok_vs_besoboy_single_1: {x: x_single_difference * 17, y: y_inok_vs_besoboy_single},
        node_inok_vs_besoboy_single_2: {x: x_single_difference * 20, y: y_inok_vs_besoboy_single},
        node_inok_vs_besoboy_single_3: {x: x_single_difference * 23, y: y_inok_vs_besoboy_single},

        node_inok_vs_besoboy_tome: {x: x_single_difference * 19, y: y_inok_vs_besoboy_tome},

        node_ekslibrium_single_1: {x: x_single_difference * 31, y: y_ekslibrium_single},
        node_ekslibrium_single_2: {x: x_single_difference * 32, y: y_ekslibrium_single},
        node_ekslibrium_single_3: {x: x_single_difference * 33, y: y_ekslibrium_single},
        node_ekslibrium_single_4: {x: x_single_difference * 34, y: y_ekslibrium_single},
        node_ekslibrium_single_5: {x: x_single_difference * 35, y: y_ekslibrium_single},
        node_ekslibrium_single_6: {x: x_single_difference * 36, y: y_ekslibrium_single},
        node_ekslibrium_single_7: {x: x_single_difference * 37, y: y_ekslibrium_single},
        node_ekslibrium_single_8: {x: x_single_difference * 38, y: y_ekslibrium_single},
        node_ekslibrium_single_9: {x: x_single_difference * 39, y: y_ekslibrium_single},
        node_ekslibrium_single_10: {x: x_single_difference * 40, y: y_ekslibrium_single},
        node_ekslibrium_single_11: {x: x_single_difference * 41, y: y_ekslibrium_single},
        node_ekslibrium_single_12: {x: x_single_difference * 42, y: y_ekslibrium_single},
        node_ekslibrium_single_13: {x: x_single_difference * 44, y: y_ekslibrium_single},
        node_ekslibrium_single_14: {x: x_single_difference * 46, y: y_ekslibrium_single},
        node_ekslibrium_single_15: {x: x_single_difference * 48, y: y_ekslibrium_single},
        node_ekslibrium_single_16: {x: x_single_difference * 51, y: y_ekslibrium_single},
        node_ekslibrium_single_17: {x: x_single_difference * 53, y: y_ekslibrium_single},
        node_ekslibrium_single_18: {x: x_single_difference * 59, y: y_ekslibrium_single},
        node_ekslibrium_single_19: {x: x_single_difference * 60, y: y_ekslibrium_single},
        node_ekslibrium_single_20: {x: x_single_difference * 61, y: y_ekslibrium_single},
        node_ekslibrium_single_21: {x: x_single_difference * 62, y: y_ekslibrium_single},
        node_ekslibrium_single_22: {x: x_single_difference * 63, y: y_ekslibrium_single},
        node_ekslibrium_single_23: {x: x_single_difference * 64, y: y_ekslibrium_single},
        node_ekslibrium_single_24: {x: x_single_difference * 65, y: y_ekslibrium_single},
        node_ekslibrium_single_25: {x: x_single_difference * 66, y: y_ekslibrium_single},
        node_ekslibrium_single_26: {x: x_single_difference * 67, y: y_ekslibrium_single},
        node_ekslibrium_single_27: {x: x_single_difference * 68, y: y_ekslibrium_single},

        node_ekslibrium_tome_1: {x: x_single_difference * 33, y: y_ekslibrium_tome},
        node_ekslibrium_tome_2: {x: x_single_difference * 38, y: y_ekslibrium_tome},
        node_ekslibrium_tome_3: {x: x_single_difference * 47, y: y_ekslibrium_tome},

        node_meteora_single_1: {x: x_single_difference * 31, y: y_meteora_single},
        node_meteora_single_2: {x: x_single_difference * 32, y: y_meteora_single},
        node_meteora_single_3: {x: x_single_difference * 33, y: y_meteora_single},
        node_meteora_single_4: {x: x_single_difference * 34, y: y_meteora_single},
        node_meteora_single_5: {x: x_single_difference * 35, y: y_meteora_single},
        node_meteora_single_6: {x: x_single_difference * 36, y: y_meteora_single},
        node_meteora_single_7: {x: x_single_difference * 37, y: y_meteora_single},
        node_meteora_single_8: {x: x_single_difference * 38, y: y_meteora_single},
        node_meteora_single_9: {x: x_single_difference * 39, y: y_meteora_single},
        node_meteora_single_10: {x: x_single_difference * 40, y: y_meteora_single},
        node_meteora_single_11: {x: x_single_difference * 41, y: y_meteora_single},
        node_meteora_single_12: {x: x_single_difference * 42, y: y_meteora_single},
        node_meteora_single_13: {x: x_single_difference * 44, y: y_meteora_single},
        node_meteora_single_14: {x: x_single_difference * 46, y: y_meteora_single},
        node_meteora_single_15: {x: x_single_difference * 48, y: y_meteora_single},
        node_meteora_single_16: {x: x_single_difference * 51, y: y_meteora_single},
        node_meteora_single_17: {x: x_single_difference * 53, y: y_meteora_single},
        node_meteora_single_18: {x: x_single_difference * 54, y: y_meteora_single},
        node_meteora_single_19: {x: x_single_difference * 55, y: y_meteora_single},
        node_meteora_single_20: {x: x_single_difference * 56, y: y_meteora_single},
        node_meteora_single_21: {x: x_single_difference * 57, y: y_meteora_single},
        node_meteora_single_22: {x: x_single_difference * 58, y: y_meteora_single},
        node_meteora_single_23: {x: x_single_difference * 59, y: y_meteora_single},
        node_meteora_single_24: {x: x_single_difference * 60, y: y_meteora_single},
        node_meteora_single_25: {x: x_single_difference * 61, y: y_meteora_single},
        node_meteora_single_26: {x: x_single_difference * 62, y: y_meteora_single},
        node_meteora_single_27: {x: x_single_difference * 69, y: y_meteora_single},

        node_meteora_tome_1: {x: x_single_difference * 33.5, y: y_meteora_tome},
        node_meteora_tome_2: {x: x_single_difference * 39.5, y: y_meteora_tome},
        node_meteora_tome_3: {x: x_single_difference * 48.5, y: y_meteora_tome},

        node_inok_i_mayor_grom_tome: {x: x_single_difference * 38, y: y_inok_i_mayor_grom_tome},

        node_ziggi_single_1: {x: x_single_difference * 43, y: y_ziggi_single},
        node_ziggi_single_2: {x: x_single_difference * 47, y: y_ziggi_single},
        node_ziggi_single_3: {x: x_single_difference * 54, y: y_ziggi_single},
        node_ziggi_single_4: {x: x_single_difference * 55, y: y_ziggi_single},
        node_ziggi_single_5: {x: x_single_difference * 56, y: y_ziggi_single},

        node_ziggi_tome: {x: x_single_difference * 49.5, y: y_ziggi_tome},

        node_vremya_vorona_single_prolog: {x: x_single_difference * 44, y: y_vremya_vorona_single},
        node_vremya_vorona_single_1: {x: x_single_difference * 45, y: y_vremya_vorona_single},
        node_vremya_vorona_single_2: {x: x_single_difference * 47, y: y_vremya_vorona_single},
        node_vremya_vorona_single_3: {x: x_single_difference * 49, y: y_vremya_vorona_single},
        node_vremya_vorona_single_4: {x: x_single_difference * 52, y: y_vremya_vorona_single},
        node_vremya_vorona_single_5: {x: x_single_difference * 54, y: y_vremya_vorona_single},

        node_vremya_vorona_tome_predystoriya: {x: x_single_difference * 43, y: y_vremya_vorona_tome},
        node_vremya_vorona_tome: {x: x_single_difference * 49, y: y_vremya_vorona_tome},
        node_vremya_vorona_tome_epilog: {x: x_single_difference * 54, y: y_vremya_vorona_tome},

        node_koshki_myshki_tome_1: {x: x_single_difference * 47, y: y_koshki_myshki_tome},
        node_koshki_myshki_tome_2: {x: x_single_difference * 48, y: y_koshki_myshki_tome},

        node_tsezar_velikolepnyy_single_1: {x: x_single_difference * 49, y: y_tsezar_velikolepnyy_single},
        node_tsezar_velikolepnyy_single_2: {x: x_single_difference * 50, y: y_tsezar_velikolepnyy_single},
        node_tsezar_velikolepnyy_single_3: {x: x_single_difference * 51, y: y_tsezar_velikolepnyy_single},
        node_tsezar_velikolepnyy_single_4: {x: x_single_difference * 52, y: y_tsezar_velikolepnyy_single},
        node_tsezar_velikolepnyy_single_5: {x: x_single_difference * 53, y: y_tsezar_velikolepnyy_single},

        node_tsezar_velikolepnyy_tome: {x: x_single_difference * 51, y: y_tsezar_velikolepnyy_tome},

        node_inok_korol_vecherinok_single: {x: x_single_difference, y: y_inok_korol_vecherinok_single},

        node_tochka_nevozvrata_tome: {x: x_single_difference, y: y_tochka_nevozvrata_tome},

        node_besoboy_vol_2_1_single_1: {x: x_single_difference * 68, y: y_besoboy_vol_2_1_single},

        node_igor_grom_single_1: {x: x_single_difference * 68, y: y_igor_grom_single},

        node_mirokhodtsy_single_1: {x: x_single_difference * 68, y: y_mirokhodtsy_single},

        node_soyuzniki_single_1: {x: x_single_difference * 68, y: y_soyuzniki_single}
    }
};

const alpha = "66";

const paths: vNG.Paths = {
    path_besoboy_single: {
        edges: ["edge_besoboy_single_1_single_2", "edge_besoboy_single_2_single_3", "edge_besoboy_single_3_single_4",
            "edge_besoboy_single_4_single_5"],
        color: color_besoboy + alpha
    },
    path2: {edges: ["edge2", "edge4", "edge6", "edge10"]},
};

export default {nodes, edges, layouts, paths};