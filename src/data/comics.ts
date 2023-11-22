import {Comics} from "../interfaces";

export const comics: Comics = {
    comic_besoboy_1                                  : {
        name            : "Бесобой #1 Имя ему Бесобой, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_1"],
        next_comics     : ["comic_besoboy_2"],
        release_at      : {year: 2012, month: 10, day: 1}
    },
    comic_major_grom_1                               : {
        name            : "Майор Гром #1 Чумной Доктор, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_1"],
        next_comics     : ["comic_major_grom_2"],
        release_at      : {year: 2012, month: 10, day: 8}
    },
    comic_enoch_1                                    : {
        name            : "Инок #1 Проданная реликвия, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_1"],
        next_comics     : ["comic_enoch_2"],
        release_at      : {year: 2012, month: 10, day: 15}
    },
    comic_red_fury_1                                 : {
        name            : "Красная Фурия #1 В поисках Грааля, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_1"],
        next_comics     : ["comic_red_fury_2"],
        release_at      : {year: 2012, month: 10, day: 22}
    },
    comic_besoboy_2                                  : {
        name            : "Бесобой #2 Имя ему Бесобой, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_1"],
        previous_comics : ["comic_besoboy_1"],
        next_comics     : ["comic_besoboy_3"],
        release_at      : {year: 2012, month: 11, day: 1}
    },
    comic_major_grom_2                               : {
        name            : "Майор Гром #2 Чумной Доктор, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_1"],
        previous_comics : ["comic_major_grom_1"],
        next_comics     : ["comic_major_grom_3"],
        release_at      : {year: 2012, month: 11, day: 8}
    },
    comic_enoch_2                                    : {
        name            : "Инок #2 Проданная реликвия, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_1"],
        previous_comics : ["comic_enoch_1"],
        next_comics     : ["comic_enoch_3"],
        release_at      : {year: 2012, month: 11, day: 15}
    },
    comic_red_fury_2                                 : {
        name            : "Красная Фурия #2 В поисках Грааля, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_1"],
        previous_comics : ["comic_red_fury_1"],
        next_comics     : ["comic_red_fury_3"],
        release_at      : {year: 2012, month: 11, day: 22}
    },
    comic_besoboy_3                                  : {
        name            : "Бесобой #3 Имя ему Бесобой, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_1"],
        previous_comics : ["comic_besoboy_2"],
        next_comics     : ["comic_besoboy_4"],
        release_at      : {year: 2012, month: 12, day: 1}
    },
    comic_major_grom_3                               : {
        name            : "Майор Гром #3 Чумной Доктор, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_1"],
        previous_comics : ["comic_major_grom_2"],
        next_comics     : ["comic_major_grom_4"],
        release_at      : {year: 2012, month: 12, day: 8}
    },
    comic_enoch_3                                    : {
        name            : "Инок #3 Проданная реликвия, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_1"],
        previous_comics : ["comic_enoch_2"],
        next_comics     : ["comic_enoch_4"],
        release_at      : {year: 2012, month: 12, day: 15}
    },
    comic_red_fury_3                                 : {
        name            : "Красная Фурия #3 В поисках Грааля, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_1"],
        previous_comics : ["comic_red_fury_2"],
        next_comics     : ["comic_red_fury_4"],
        release_at      : {year: 2012, month: 12, day: 22}
    },
    comic_besoboy_4                                  : {
        name            : "Бесобой #4 Яблоко раздора; Призраки прошлого",
        number          : "4",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_1"],
        previous_comics : ["comic_besoboy_3"],
        next_comics     : ["comic_besoboy_5"],
        release_at      : {year: 2013, month: 1, day: 1}
    },
    comic_major_grom_4                               : {
        name            : "Майор Гром #4 Бабочки в животе; Ва-банк",
        number          : "4",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_1"],
        previous_comics : ["comic_major_grom_3"],
        next_comics     : ["comic_major_grom_5"],
        release_at      : {year: 2013, month: 1, day: 8}
    },
    comic_enoch_4                                    : {
        name            : "Инок #4 Подарок; По воле совета",
        number          : "4",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_1"],
        previous_comics : ["comic_enoch_3"],
        next_comics     : ["comic_enoch_5"],
        release_at      : {year: 2013, month: 1, day: 15}
    },
    comic_red_fury_4                                 : {
        name            : "Красная Фурия #4 Миллионер; Око Шивы",
        number          : "4",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_1"],
        previous_comics : ["comic_red_fury_3"],
        next_comics     : ["comic_red_fury_5"],
        release_at      : {year: 2013, month: 1, day: 22}
    },
    comic_besoboy_5                                  : {
        name            : "Бесобой #5 Имя ему Бесобой, часть 4",
        number          : "5",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_1"],
        previous_comics : ["comic_besoboy_4"],
        next_comics     : ["comic_besoboy_6"],
        release_at      : {year: 2013, month: 2, day: 1}
    },
    comic_major_grom_5                               : {
        name            : "Майор Гром #5 Чумной Доктор, часть 4",
        number          : "5",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_1"],
        previous_comics : ["comic_major_grom_4"],
        next_comics     : ["comic_major_grom_6"],
        release_at      : {year: 2013, month: 2, day: 8}
    },
    comic_enoch_5                                    : {
        name            : "Инок #5 Проданная реликвия, часть 4",
        number          : "5",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_1"],
        previous_comics : ["comic_enoch_4"],
        next_comics     : ["comic_enoch_6"],
        release_at      : {year: 2013, month: 2, day: 15}
    },
    comic_red_fury_5                                 : {
        name            : "Красная Фурия #5 В поисках Грааля, часть 4",
        number          : "5",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_1"],
        previous_comics : ["comic_red_fury_4"],
        next_comics     : ["comic_red_fury_6"],
        release_at      : {year: 2013, month: 2, day: 22}
    },
    comic_besoboy_6                                  : {
        name            : "Бесобой #6 Недетские игры, часть 1",
        number          : "6",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_1"],
        previous_comics : ["comic_besoboy_5"],
        next_comics     : ["comic_besoboy_7"],
        release_at      : {year: 2013, month: 3, day: 1}
    },
    comic_major_grom_6                               : {
        name            : "Майор Гром #6 Чумной Доктор, часть 5",
        number          : "6",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_1"],
        previous_comics : ["comic_major_grom_5"],
        next_comics     : ["comic_major_grom_7"],
        release_at      : {year: 2013, month: 3, day: 8}
    },
    comic_enoch_6                                    : {
        name            : "Инок #6 Проданная реликвия, часть 5",
        number          : "6",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_1"],
        previous_comics : ["comic_enoch_5"],
        next_comics     : ["comic_enoch_7"],
        release_at      : {year: 2013, month: 3, day: 15}
    },
    comic_red_fury_6                                 : {
        name            : "Красная Фурия #6 В поисках Грааля, часть 5",
        number          : "6",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_1"],
        previous_comics : ["comic_red_fury_5"],
        next_comics     : ["comic_red_fury_7"],
        release_at      : {year: 2013, month: 3, day: 22}
    },
    comic_besoboy_7                                  : {
        name            : "Бесобой #7 Недетские игры, часть 2",
        number          : "7",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_1"],
        previous_comics : ["comic_besoboy_6"],
        next_comics     : ["comic_besoboy_8"],
        release_at      : {year: 2013, month: 4, day: 1}
    },
    comic_major_grom_7                               : {
        name            : "Майор Гром #7 Чумной Доктор, часть 6",
        number          : "7",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_2"],
        previous_comics : ["comic_major_grom_6"],
        next_comics     : ["comic_major_grom_8"],
        release_at      : {year: 2013, month: 4, day: 8}
    },
    comic_enoch_7                                    : {
        name            : "Инок #7 Проданная реликвия, часть 6",
        number          : "7",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_1"],
        previous_comics : ["comic_enoch_6"],
        next_comics     : ["comic_enoch_8"],
        release_at      : {year: 2013, month: 4, day: 15}
    },
    comic_red_fury_7                                 : {
        name            : "Красная Фурия #7 В поисках Грааля, часть 6",
        number          : "7",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_1"],
        previous_comics : ["comic_red_fury_6"],
        next_comics     : ["comic_red_fury_8"],
        release_at      : {year: 2013, month: 4, day: 22}
    },
    comic_besoboy_8                                  : {
        name            : "Бесобой #8 Страшная тайна, часть 1",
        number          : "8",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_2"],
        previous_comics : ["comic_besoboy_7"],
        next_comics     : ["comic_besoboy_9"],
        release_at      : {year: 2013, month: 5, day: 1}
    },
    comic_major_grom_8                               : {
        name            : "Майор Гром #8 Чумной Доктор, часть 7",
        number          : "8",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_2"],
        previous_comics : ["comic_major_grom_7"],
        next_comics     : ["comic_major_grom_9"],
        release_at      : {year: 2013, month: 5, day: 8}
    },
    comic_enoch_8                                    : {
        name            : "Инок #8 Проданная реликвия, часть 7",
        number          : "8",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_2"],
        previous_comics : ["comic_enoch_7"],
        next_comics     : ["comic_enoch_9"],
        release_at      : {year: 2013, month: 5, day: 15}
    },
    comic_red_fury_8                                 : {
        name            : "Красная Фурия #8 В поисках Грааля, часть 7",
        number          : "8",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_2"],
        previous_comics : ["comic_red_fury_7"],
        next_comics     : ["comic_red_fury_9"],
        release_at      : {year: 2013, month: 5, day: 22}
    },
    comic_besoboy_9                                  : {
        name            : "Бесобой #9 Страшная тайна, часть 2",
        number          : "9",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_2"],
        previous_comics : ["comic_besoboy_8"],
        next_comics     : ["comic_besoboy_10"],
        release_at      : {year: 2013, month: 6, day: 1}
    },
    comic_major_grom_9                               : {
        name            : "Майор Гром #9 Чумной Доктор, часть 8",
        number          : "9",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_2"],
        previous_comics : ["comic_major_grom_8"],
        next_comics     : ["comic_major_grom_10"],
        release_at      : {year: 2013, month: 6, day: 8}
    },
    comic_enoch_9                                    : {
        name            : "Инок #9 Проданная реликвия, часть 8",
        number          : "9",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_2"],
        previous_comics : ["comic_enoch_8"],
        next_comics     : ["comic_enoch_10"],
        release_at      : {year: 2013, month: 6, day: 15}
    },
    comic_red_fury_9                                 : {
        name            : "Красная Фурия #9 В поисках Грааля, часть 8",
        number          : "9",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_2"],
        previous_comics : ["comic_red_fury_8"],
        next_comics     : ["comic_red_fury_10"],
        release_at      : {year: 2013, month: 6, day: 22}
    },
    comic_besoboy_10                                 : {
        name            : "Бесобой #10 Лицо зверя, часть 1",
        number          : "10",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_2"],
        previous_comics : ["comic_besoboy_9"],
        next_comics     : ["comic_besoboy_11"],
        release_at      : {year: 2013, month: 7, day: 1}
    },
    comic_major_grom_10                              : {
        name            : "Майор Гром #10 Блогофобия; Сувенир; Метаморфоза",
        number          : "10",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_2"],
        previous_comics : ["comic_major_grom_9"],
        next_comics     : ["comic_major_grom_11"],
        release_at      : {year: 2013, month: 7, day: 8}
    },
    comic_enoch_10                                   : {
        name            : "Инок #10 Проданная реликвия, часть 9",
        number          : "10",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_2"],
        previous_comics : ["comic_enoch_9"],
        next_comics     : ["comic_enoch_11"],
        release_at      : {year: 2013, month: 7, day: 15}
    },
    comic_red_fury_10                                : {
        name            : "Красная Фурия #10 Арабская ночь; Ангел Смерти; Меч возмездия",
        number          : "10",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_2"],
        previous_comics : ["comic_red_fury_9"],
        next_comics     : ["comic_red_fury_11"],
        release_at      : {year: 2013, month: 7, day: 22}
    },
    comic_besoboy_11                                 : {
        name            : "Бесобой #11 Лицо зверя, часть 2",
        number          : "11",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_2"],
        previous_comics : ["comic_besoboy_10"],
        next_comics     : ["comic_besoboy_12"],
        release_at      : {year: 2013, month: 8, day: 1}
    },
    comic_major_grom_11                              : {
        name            : "Майор Гром #11 День Святого Патрика, часть 1",
        number          : "11",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_3"],
        previous_comics : ["comic_major_grom_10"],
        next_comics     : ["comic_major_grom_12"],
        release_at      : {year: 2013, month: 8, day: 8}
    },
    comic_enoch_11                                   : {
        name            : "Инок #11 Проданная реликвия, часть 10",
        number          : "11",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_2"],
        previous_comics : ["comic_enoch_10"],
        next_comics     : ["comic_enoch_12"],
        release_at      : {year: 2013, month: 8, day: 15}
    },
    comic_red_fury_11                                : {
        name            : "Красная Фурия #11 Джунгли зовут, часть 1",
        number          : "11",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_2"],
        previous_comics : ["comic_red_fury_10"],
        next_comics     : ["comic_red_fury_12"],
        release_at      : {year: 2013, month: 8, day: 22}
    },
    comic_besoboy_12                                 : {
        name            : "Бесобой #12 Лицо зверя, часть 3",
        number          : "12",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_2"],
        previous_comics : ["comic_besoboy_11"],
        next_comics     : ["comic_besoboy_13"],
        release_at      : {year: 2013, month: 9, day: 1}
    },
    comic_major_grom_12                              : {
        name            : "Майор Гром #12 День Святого Патрика, часть 2",
        number          : "12",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_3"],
        previous_comics : ["comic_major_grom_11"],
        next_comics     : ["comic_major_grom_13"],
        release_at      : {year: 2013, month: 9, day: 9}
    },
    comic_enoch_12                                   : {
        name            : "Инок #12 Проданная реликвия, часть 11",
        number          : "12",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_2"],
        previous_comics : ["comic_enoch_11"],
        next_comics     : ["comic_enoch_13"],
        release_at      : {year: 2013, month: 9, day: 15}
    },
    comic_red_fury_12                                : {
        name            : "Красная Фурия #12 Джунгли зовут, часть 2",
        number          : "12",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_2"],
        previous_comics : ["comic_red_fury_11"],
        next_comics     : ["comic_red_fury_13"],
        release_at      : {year: 2013, month: 9, day: 22}
    },
    comic_besoboy_13                                 : {
        name            : "Бесобой #13 Лицо зверя, часть 4",
        number          : "13",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_2"],
        previous_comics : ["comic_besoboy_12"],
        next_comics     : ["comic_besoboy_14"],
        release_at      : {year: 2013, month: 10, day: 1}
    },
    comic_major_grom_13                              : {
        name            : "Майор Гром #13 День Святого Патрика, часть 3",
        number          : "13",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_3"],
        previous_comics : ["comic_major_grom_12"],
        next_comics     : ["comic_major_grom_14"],
        release_at      : {year: 2013, month: 10, day: 8}
    },
    comic_enoch_13                                   : {
        name            : "Инок #13 Проданная реликвия, часть 12",
        number          : "13",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_2"],
        previous_comics : ["comic_enoch_12"],
        next_comics     : ["comic_enoch_14"],
        release_at      : {year: 2013, month: 10, day: 15}
    },
    comic_red_fury_13                                : {
        name            : "Красная Фурия #13 Джунгли зовут, часть 3",
        number          : "13",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_2"],
        previous_comics : ["comic_red_fury_12"],
        next_comics     : ["comic_red_fury_14"],
        release_at      : {year: 2013, month: 10, day: 22}
    },
    comic_besoboy_14                                 : {
        name            : "Бесобой #14 Лицо зверя: Эпилог",
        number          : "14",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_2"],
        previous_comics : ["comic_besoboy_13"],
        next_comics     : ["comic_besoboy_15"],
        release_at      : {year: 2013, month: 11, day: 1}
    },
    comic_major_grom_14                              : {
        name            : "Майор Гром #14 День Святого Патрика, часть 4",
        number          : "14",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_3"],
        previous_comics : ["comic_major_grom_13"],
        next_comics     : ["comic_major_grom_15"],
        release_at      : {year: 2013, month: 11, day: 8}
    },
    comic_enoch_14                                   : {
        name            : "Инок #14 Крест; Союз; Чёрный Ворон",
        number          : "14",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_2"],
        previous_comics : ["comic_enoch_13"],
        next_comics     : ["comic_besoboy_15"],
        release_at      : {year: 2013, month: 11, day: 15}
    },
    comic_red_fury_14                                : {
        name            : "Красная Фурия #14 Джунгли зовут, часть 4",
        number          : "14",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_2"],
        previous_comics : ["comic_red_fury_13"],
        next_comics     : ["comic_red_fury_15"],
        release_at      : {year: 2013, month: 11, day: 22}
    },
    comic_besoboy_15                                 : {
        name            : "Бесобой #15 Инок против Бесобоя, часть 1",
        number          : "15",
        type            : "single",
        ranges          : ["range_besoboy", "range_crossovers"],
        including_comics: ["comic_enoch_vs_besoboy"],
        previous_comics : ["comic_besoboy_14", "comic_enoch_14"],
        next_comics     : ["comic_enoch_15"],
        release_at      : {year: 2013, month: 12, day: 1}
    },
    comic_major_grom_15                              : {
        name            : "Майор Гром #15 День Святого Патрика, часть 5",
        number          : "15",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_3"],
        previous_comics : ["comic_major_grom_14"],
        next_comics     : ["comic_major_grom_16"],
        release_at      : {year: 2013, month: 12, day: 8}
    },
    comic_enoch_15                                   : {
        name            : "Инок #15 Инок против Бесобоя, часть 2",
        number          : "15",
        type            : "single",
        ranges          : ["range_enoch", "range_crossovers"],
        including_comics: ["comic_enoch_vs_besoboy"],
        previous_comics : ["comic_besoboy_15"],
        next_comics     : ["comic_enoch_vs_besoboy_1"],
        release_at      : {year: 2013, month: 12, day: 15}
    },
    comic_red_fury_15                                : {
        name            : "Красная Фурия #15 День Рождения",
        number          : "15",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_2"],
        previous_comics : ["comic_red_fury_14"],
        next_comics     : ["comic_red_fury_16"],
        release_at      : {year: 2013, month: 12, day: 22}
    },
    comic_enoch_vs_besoboy_1                         : {
        name            : "Инок против Бесобоя #1 Инок против Бесобоя, часть 3",
        number          : "1",
        type            : "single",
        ranges          : ["range_besoboy", "range_enoch", "range_crossovers"],
        including_comics: ["comic_enoch_vs_besoboy"],
        previous_comics : ["comic_enoch_15"],
        next_comics     : ["comic_besoboy_16"],
        release_at      : {year: 2013, month: 12, day: 28}
    },
    comic_besoboy_16                                 : {
        name            : "Бесобой #16 Инок против Бесобоя, часть 4",
        number          : "16",
        type            : "single",
        ranges          : ["range_besoboy", "range_crossovers"],
        including_comics: ["comic_enoch_vs_besoboy"],
        previous_comics : ["comic_enoch_vs_besoboy_1"],
        next_comics     : ["comic_enoch_16"],
        release_at      : {year: 2014, month: 1, day: 1}
    },
    comic_major_grom_16                              : {
        name            : "Майор Гром #16 День Святого Патрика, часть 6",
        number          : "16",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_3"],
        previous_comics : ["comic_major_grom_15"],
        next_comics     : ["comic_major_grom_17"],
        release_at      : {year: 2014, month: 1, day: 8}
    },
    comic_enoch_16                                   : {
        name            : "Инок #16 Инок против Бесобоя, часть 5",
        number          : "16",
        type            : "single",
        ranges          : ["range_enoch", "range_crossovers"],
        including_comics: ["comic_enoch_vs_besoboy"],
        previous_comics : ["comic_besoboy_16"],
        next_comics     : ["comic_enoch_vs_besoboy_2"],
        release_at      : {year: 2014, month: 1, day: 15}
    },
    comic_red_fury_16                                : {
        name            : "Красная Фурия #16 Затишье перед бурей",
        number          : "16",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_3"],
        previous_comics : ["comic_red_fury_15"],
        next_comics     : ["comic_red_fury_16_1"],
        release_at      : {year: 2014, month: 1, day: 22}
    },
    comic_enoch_vs_besoboy_2                         : {
        name            : "Инок против Бесобоя #2 Инок против Бесобоя, часть 6",
        number          : "2",
        type            : "single",
        ranges          : ["range_besoboy", "range_enoch", "range_crossovers"],
        including_comics: ["comic_enoch_vs_besoboy"],
        previous_comics : ["comic_enoch_16"],
        next_comics     : ["comic_besoboy_17"],
        release_at      : {year: 2014, month: 1, day: 28}
    },
    comic_besoboy_17                                 : {
        name            : "Бесобой #17 Инок против Бесобоя, часть 7",
        number          : "17",
        type            : "single",
        ranges          : ["range_besoboy", "range_crossovers"],
        including_comics: ["comic_enoch_vs_besoboy"],
        previous_comics : ["comic_enoch_vs_besoboy_2"],
        next_comics     : ["comic_enoch_17"],
        release_at      : {year: 2014, month: 2, day: 1}
    },
    comic_major_grom_17                              : {
        name            : "Майор Гром #17 День Святого Патрика, часть 7",
        number          : "17",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_3"],
        previous_comics : ["comic_major_grom_16"],
        next_comics     : ["comic_major_grom_18"],
        release_at      : {year: 2014, month: 2, day: 2}
    },
    comic_enoch_17                                   : {
        name            : "Инок #17 Инок против Бесобоя, часть 8",
        number          : "17",
        type            : "single",
        ranges          : ["range_enoch", "range_crossovers"],
        including_comics: ["comic_enoch_vs_besoboy"],
        previous_comics : ["comic_besoboy_17"],
        next_comics     : ["comic_enoch_vs_besoboy_3"],
        release_at      : {year: 2014, month: 2, day: 15}
    },
    comic_red_fury_17                                : {
        name            : "Красная Фурия #17 Тёмное наследие, часть 1",
        number          : "17",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_3"],
        previous_comics : ["comic_red_fury_16_1"],
        next_comics     : ["comic_red_fury_18"],
        release_at      : {year: 2014, month: 2, day: 22}
    },
    comic_enoch_vs_besoboy_3                         : {
        name            : "Инок против Бесобоя #3 Инок против Бесобоя, часть 9",
        number          : "3",
        type            : "single",
        ranges          : ["range_besoboy", "range_enoch", "range_crossovers"],
        including_comics: ["comic_enoch_vs_besoboy"],
        previous_comics : ["comic_enoch_17"],
        next_comics     : ["comic_besoboy_18", "comic_enoch_18"],
        release_at      : {year: 2014, month: 2, day: 28}
    },
    comic_besoboy_18                                 : {
        name            : "Бесобой #18 Три сестры, часть 1",
        number          : "18",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_3"],
        previous_comics : ["comic_enoch_vs_besoboy_3"],
        next_comics     : ["comic_besoboy_19"],
        release_at      : {year: 2014, month: 3, day: 1}
    },
    comic_major_grom_18                              : {
        name            : "Майор Гром #18 День Святого Патрика, часть 8",
        number          : "18",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_3"],
        previous_comics : ["comic_major_grom_17"],
        next_comics     : ["comic_major_grom_19"],
        release_at      : {year: 2014, month: 3, day: 8}
    },
    comic_enoch_18                                   : {
        name            : "Инок #18 Прощание, часть 1",
        number          : "18",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_3"],
        previous_comics : ["comic_enoch_vs_besoboy_3"],
        next_comics     : ["comic_enoch_19"],
        release_at      : {year: 2014, month: 3, day: 15}
    },
    comic_red_fury_18                                : {
        name            : "Красная Фурия #18 Тёмное наследие, часть 2",
        number          : "18",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_3"],
        previous_comics : ["comic_red_fury_17"],
        next_comics     : ["comic_red_fury_19"],
        release_at      : {year: 2014, month: 3, day: 22}
    },
    comic_besoboy_19                                 : {
        name            : "Бесобой #19 Три сестры, часть 2",
        number          : "19",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_3"],
        previous_comics : ["comic_besoboy_18"],
        next_comics     : ["comic_besoboy_20"],
        release_at      : {year: 2014, month: 4, day: 1}
    },
    comic_major_grom_19                              : {
        name            : "Майор Гром #19 Как в сказке, часть 1",
        number          : "19",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_4"],
        previous_comics : ["comic_major_grom_18"],
        next_comics     : ["comic_major_grom_20"],
        release_at      : {year: 2014, month: 4, day: 8}
    },
    comic_enoch_19                                   : {
        name            : "Инок #19 Прощание, часть 2",
        number          : "19",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_3"],
        previous_comics : ["comic_enoch_18"],
        next_comics     : ["comic_enoch_20"],
        release_at      : {year: 2014, month: 4, day: 15}
    },
    comic_red_fury_19                                : {
        name            : "Красная Фурия #19 Тёмное наследие, часть 3",
        number          : "19",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_3"],
        previous_comics : ["comic_red_fury_18"],
        next_comics     : ["comic_red_fury_20"],
        release_at      : {year: 2014, month: 4, day: 22}
    },
    comic_besoboy_20                                 : {
        name            : "Бесобой #20 Три сестры, часть 3",
        number          : "20",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_3"],
        previous_comics : ["comic_besoboy_19"],
        next_comics     : ["comic_besoboy_21"],
        release_at      : {year: 2014, month: 5, day: 1}
    },
    comic_major_grom_20                              : {
        name            : "Майор Гром #20 Как в сказке, часть 2",
        number          : "20",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_4"],
        previous_comics : ["comic_major_grom_19"],
        next_comics     : ["comic_major_grom_21"],
        release_at      : {year: 2014, month: 5, day: 8}
    },
    comic_enoch_20                                   : {
        name            : "Инок #20 Прощание, часть 3",
        number          : "20",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_3"],
        previous_comics : ["comic_enoch_19"],
        next_comics     : ["comic_enoch_21"],
        release_at      : {year: 2014, month: 5, day: 15}
    },
    comic_red_fury_20                                : {
        name            : "Красная Фурия #20 Тёмное наследие, часть 4",
        number          : "20",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_4"],
        previous_comics : ["comic_red_fury_19"],
        next_comics     : ["comic_red_fury_21"],
        release_at      : {year: 2014, month: 5, day: 22}
    },
    comic_besoboy_21                                 : {
        name            : "Бесобой #21 Три сестры, часть 4",
        number          : "21",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_3"],
        previous_comics : ["comic_besoboy_20"],
        next_comics     : ["comic_besoboy_22"],
        release_at      : {year: 2014, month: 6, day: 1}
    },
    comic_major_grom_21                              : {
        name            : "Майор Гром #21 Как в сказке, часть 3",
        number          : "21",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_4"],
        previous_comics : ["comic_major_grom_20"],
        next_comics     : ["comic_major_grom_22"],
        release_at      : {year: 2014, month: 6, day: 8}
    },
    comic_enoch_21                                   : {
        name            : "Инок #21 Зверь во мне, часть 1",
        number          : "21",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_3"],
        previous_comics : ["comic_enoch_20"],
        next_comics     : ["comic_enoch_22"],
        release_at      : {year: 2014, month: 6, day: 15}
    },
    comic_red_fury_21                                : {
        name            : "Красная Фурия #21 Тёмное наследие, часть 5",
        number          : "21",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_4"],
        previous_comics : ["comic_red_fury_20"],
        next_comics     : ["comic_red_fury_22"],
        release_at      : {year: 2014, month: 6, day: 22}
    },
    comic_besoboy_22                                 : {
        name            : "Бесобой #22 Три сестры, часть 5",
        number          : "22",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_3"],
        previous_comics : ["comic_besoboy_21"],
        next_comics     : ["comic_besoboy_23"],
        release_at      : {year: 2014, month: 7, day: 1}
    },
    comic_major_grom_22                              : {
        name            : "Майор Гром #22 Как в сказке, часть 4",
        number          : "22",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_4"],
        previous_comics : ["comic_major_grom_21"],
        next_comics     : ["comic_major_grom_23"],
        release_at      : {year: 2014, month: 7, day: 8}
    },
    comic_red_fury_16_1                              : {
        name            : "Красная Фурия #16.1 Буря во льдах (спецвыпуск)",
        number          : "16.1",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_3"],
        previous_comics : ["comic_red_fury_16"],
        next_comics     : ["comic_red_fury_17"],
        release_at      : {year: 2014, month: 7, day: 12}
    },
    comic_enoch_22                                   : {
        name            : "Инок #22 Зверь во мне, часть 2",
        number          : "22",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_4"],
        previous_comics : ["comic_enoch_21"],
        next_comics     : ["comic_enoch_23"],
        release_at      : {year: 2014, month: 7, day: 15}
    },
    comic_red_fury_22                                : {
        name            : "Красная Фурия #22 Тёмное наследие, часть 6",
        number          : "22",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_4"],
        previous_comics : ["comic_red_fury_21"],
        next_comics     : ["comic_red_fury_23"],
        release_at      : {year: 2014, month: 7, day: 22}
    },
    comic_besoboy_23                                 : {
        name            : "Бесобой #23 Равновесие, часть 1",
        number          : "23",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_4"],
        previous_comics : ["comic_besoboy_22"],
        next_comics     : ["comic_besoboy_24"],
        release_at      : {year: 2014, month: 8, day: 1}
    },
    comic_major_grom_23                              : {
        name            : "Майор Гром #23 Как в сказке, часть 5",
        number          : "23",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_4"],
        previous_comics : ["comic_major_grom_22"],
        next_comics     : ["comic_major_grom_24"],
        release_at      : {year: 2014, month: 8, day: 8}
    },
    comic_enoch_23                                   : {
        name            : "Инок #23 Зверь во мне, часть 3",
        number          : "23",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_4"],
        previous_comics : ["comic_enoch_22"],
        next_comics     : ["comic_enoch_24"],
        release_at      : {year: 2014, month: 8, day: 15}
    },
    comic_red_fury_23                                : {
        name            : "Красная Фурия #23 Потеря",
        number          : "23",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_4"],
        previous_comics : ["comic_red_fury_22"],
        next_comics     : ["comic_red_fury_24"],
        release_at      : {year: 2014, month: 8, day: 22}
    },
    comic_besoboy_24                                 : {
        name            : "Бесобой #24 Равновесие, часть 2",
        number          : "24",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_4"],
        previous_comics : ["comic_besoboy_23"],
        next_comics     : ["comic_besoboy_25"],
        release_at      : {year: 2014, month: 9, day: 1}
    },
    comic_major_grom_24                              : {
        name            : "Майор Гром #24 Как в сказке, часть 6",
        number          : "24",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_4"],
        previous_comics : ["comic_major_grom_23"],
        next_comics     : ["comic_major_grom_25"],
        release_at      : {year: 2014, month: 9, day: 8}
    },
    comic_enoch_24                                   : {
        name            : "Инок #24 Зверь во мне, часть 4",
        number          : "24",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_4"],
        previous_comics : ["comic_enoch_23"],
        next_comics     : ["comic_enoch_25"],
        release_at      : {year: 2014, month: 9, day: 15}
    },
    comic_red_fury_24                                : {
        name            : "Красная Фурия #24 После бури",
        number          : "24",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_4"],
        previous_comics : ["comic_red_fury_23"],
        next_comics     : ["comic_red_fury_25"],
        release_at      : {year: 2014, month: 9, day: 22}
    },
    comic_besoboy_25                                 : {
        name            : "Бесобой #25 Чистая душа",
        number          : "25",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_4"],
        previous_comics : ["comic_besoboy_24"],
        next_comics     : ["comic_besoboy_26"],
        release_at      : {year: 2014, month: 10, day: 1}
    },
    comic_besoboy_tome_1                             : {
        name            : "Бесобой том 1: Имя ему Бесобой",
        number          : "1",
        type            : "book",
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_1", "comic_besoboy_2", "comic_besoboy_3", "comic_besoboy_4",
                           "comic_besoboy_5", "comic_besoboy_6", "comic_besoboy_7"],
        next_comics     : ["comic_besoboy_tome_2"],
        release_at      : {year: 2014, month: 10, day: 1}
    },
    comic_major_grom_tome_1                          : {
        name            : "Майор Гром том 1: Чумной Доктор часть 1",
        number          : "1",
        type            : "book",
        ranges          : ["range_major_grom"],
        contained_comics: ["comic_major_grom_1", "comic_major_grom_2", "comic_major_grom_3", "comic_major_grom_4",
                           "comic_major_grom_5", "comic_major_grom_6"],
        next_comics     : ["comic_major_grom_tome_2"],
        release_at      : {year: 2014, month: 10, day: 1}
    },
    comic_enoch_tome_1                               : {
        name            : "Инок том 1: Проданная реликвия часть 1",
        number          : "1",
        type            : "book",
        ranges          : ["range_enoch"],
        contained_comics: ["comic_enoch_1", "comic_enoch_2", "comic_enoch_3", "comic_enoch_4", "comic_enoch_5",
                           "comic_enoch_6", "comic_enoch_7"],
        next_comics     : ["comic_enoch_tome_2"],
        release_at      : {year: 2014, month: 10, day: 1}
    },
    comic_red_fury_tome_1                            : {
        name            : "Красная Фурия том 1: В поисках грааля часть 1",
        number          : "1",
        type            : "book",
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_1", "comic_red_fury_2", "comic_red_fury_3", "comic_red_fury_4",
                           "comic_red_fury_5", "comic_red_fury_6", "comic_red_fury_7"],
        next_comics     : ["comic_red_fury_tome_2"],
        release_at      : {year: 2014, month: 10, day: 1}
    },
    comic_major_grom_25                              : {
        name            : "Майор Гром #25 Игра, часть 1",
        number          : "25",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_5"],
        previous_comics : ["comic_major_grom_24"],
        next_comics     : ["comic_major_grom_26"],
        release_at      : {year: 2014, month: 10, day: 5}
    },
    comic_enoch_25                                   : {
        name            : "Инок #25 Владыка, часть 1",
        number          : "25",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_4"],
        previous_comics : ["comic_enoch_24"],
        next_comics     : ["comic_enoch_26"],
        release_at      : {year: 2014, month: 10, day: 10}
    },
    comic_red_fury_25                                : {
        name            : "Красная Фурия #25 Ничего личного, просто бизнес, часть 1",
        number          : "25",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_5"],
        previous_comics : ["comic_red_fury_24"],
        next_comics     : ["comic_red_fury_26"],
        release_at      : {year: 2014, month: 10, day: 15}
    },
    comic_exlibrium_1                                : {
        name            : "Экслибриум #1 ...и дверь откроется, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_1"],
        next_comics     : ["comic_exlibrium_2"],
        release_at      : {year: 2014, month: 10, day: 20}
    },
    comic_meteora_1                                  : {
        name            : "Метеора #1 Самая опасная вещь в космосе, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_1"],
        next_comics     : ["comic_meteora_2"],
        release_at      : {year: 2014, month: 10, day: 25}
    },
    comic_besoboy_26                                 : {
        name            : "Бесобой #26 Друг",
        number          : "26",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_4"],
        previous_comics : ["comic_besoboy_25"],
        next_comics     : ["comic_besoboy_27"],
        release_at      : {year: 2014, month: 11, day: 1}
    },
    comic_major_grom_26                              : {
        name            : "Майор Гром #26 Игра, часть 2",
        number          : "26",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_5"],
        previous_comics : ["comic_major_grom_25"],
        next_comics     : ["comic_major_grom_27"],
        release_at      : {year: 2014, month: 11, day: 5}
    },
    comic_enoch_26                                   : {
        name            : "Инок #26 Владыка, часть 2",
        number          : "26",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_4"],
        previous_comics : ["comic_enoch_25"],
        next_comics     : ["comic_enoch_27"],
        release_at      : {year: 2014, month: 11, day: 10}
    },
    comic_red_fury_26                                : {
        name            : "Красная Фурия #26 Ничего личного, просто бизнес, часть 2",
        number          : "26",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_5"],
        previous_comics : ["comic_red_fury_25"],
        next_comics     : ["comic_red_fury_27"],
        release_at      : {year: 2014, month: 11, day: 15}
    },
    comic_exlibrium_2                                : {
        name            : "Экслибриум #2 ...и дверь откроется, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_1"],
        previous_comics : ["comic_exlibrium_1"],
        next_comics     : ["comic_exlibrium_3"],
        release_at      : {year: 2014, month: 11, day: 20}
    },
    comic_meteora_2                                  : {
        name            : "Метеора #2 Самая опасная вещь в космосе, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_1"],
        previous_comics : ["comic_meteora_1"],
        next_comics     : ["comic_meteora_3"],
        release_at      : {year: 2014, month: 11, day: 25}
    },
    comic_besoboy_27                                 : {
        name            : "Бесобой #27 Балор",
        number          : "27",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_4"],
        previous_comics : ["comic_besoboy_26"],
        next_comics     : ["comic_besoboy_28"],
        release_at      : {year: 2014, month: 12, day: 1}
    },
    comic_major_grom_27                              : {
        name            : "Майор Гром #27 Игра, часть 3",
        number          : "27",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_5"],
        previous_comics : ["comic_major_grom_26"],
        next_comics     : ["comic_major_grom_28"],
        release_at      : {year: 2014, month: 12, day: 5}
    },
    comic_enoch_27                                   : {
        name            : "Инок #27 Высокое напряжение, часть 1",
        number          : "27",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_5"],
        previous_comics : ["comic_enoch_26"],
        next_comics     : ["comic_enoch_28"],
        release_at      : {year: 2014, month: 12, day: 10}
    },
    comic_red_fury_27                                : {
        name            : "Красная Фурия #27 Ничего личного, просто бизнес, часть 3",
        number          : "27",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_5"],
        previous_comics : ["comic_red_fury_26"],
        next_comics     : ["comic_red_fury_28"],
        release_at      : {year: 2014, month: 12, day: 15}
    },
    comic_exlibrium_3                                : {
        name            : "Экслибриум #3 ...и дверь откроется, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_1"],
        previous_comics : ["comic_exlibrium_2"],
        next_comics     : ["comic_exlibrium_4"],
        release_at      : {year: 2014, month: 12, day: 20}
    },
    comic_besoboy_tome_2                             : {
        name            : "Бесобой том 2: Лицо зверя",
        number          : "2",
        type            : "book",
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_8", "comic_besoboy_9", "comic_besoboy_10", "comic_besoboy_11",
                           "comic_besoboy_12", "comic_besoboy_13", "comic_besoboy_14"],
        previous_comics : ["comic_besoboy_tome_1"],
        next_comics     : ["comic_enoch_vs_besoboy"],
        release_at      : {year: 2014, month: 12, day: 20}
    },
    comic_major_grom_tome_2                          : {
        name            : "Майор Гром том 2: Чумной Доктор часть 2",
        number          : "2",
        type            : "book",
        ranges          : ["range_major_grom"],
        contained_comics: ["comic_major_grom_7", "comic_major_grom_8", "comic_major_grom_9", "comic_major_grom_10"],
        previous_comics : ["comic_major_grom_tome_1"],
        next_comics     : ["comic_major_grom_tome_3"],
        release_at      : {year: 2014, month: 12, day: 20}
    },
    comic_enoch_tome_2                               : {
        name            : "Инок том 2: Проданная реликвия часть 2",
        number          : "2",
        type            : "book",
        ranges          : ["range_enoch"],
        contained_comics: ["comic_enoch_8", "comic_enoch_9", "comic_enoch_10", "comic_enoch_11", "comic_enoch_12",
                           "comic_enoch_13", "comic_enoch_14"],
        previous_comics : ["comic_enoch_tome_1"],
        next_comics     : ["comic_enoch_vs_besoboy"],
        release_at      : {year: 2014, month: 12, day: 20}
    },
    comic_red_fury_tome_2                            : {
        name            : "Красная Фурия том 2: В поисках грааля часть 2",
        number          : "2",
        type            : "book",
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_8", "comic_red_fury_9", "comic_red_fury_10", "comic_red_fury_11",
                           "comic_red_fury_12", "comic_red_fury_13", "comic_red_fury_14", "comic_red_fury_15"],
        previous_comics : ["comic_red_fury_tome_1"],
        next_comics     : ["comic_red_fury_tome_3"],
        release_at      : {year: 2014, month: 12, day: 20}
    },
    comic_meteora_3                                  : {
        name            : "Метеора #3 Прорыв, часть 1",
        number          : "3",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_1"],
        previous_comics : ["comic_meteora_2"],
        next_comics     : ["comic_meteora_4"],
        release_at      : {year: 2014, month: 12, day: 25}
    },
    comic_besoboy_28                                 : {
        name            : "Бесобой #28 Курьер; Неизбежность",
        number          : "28",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_5"],
        previous_comics : ["comic_besoboy_27"],
        next_comics     : ["comic_besoboy_29"],
        release_at      : {year: 2015, month: 1, day: 1}
    },
    comic_major_grom_28                              : {
        name            : "Майор Гром #28 Игра, часть 4",
        number          : "28",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_5"],
        previous_comics : ["comic_major_grom_27"],
        next_comics     : ["comic_major_grom_29"],
        release_at      : {year: 2015, month: 1, day: 12}
    },
    comic_enoch_28                                   : {
        name            : "Инок #28 Высокое напряжение, часть 2; Старый новый гад",
        number          : "28",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_5"],
        previous_comics : ["comic_enoch_27"],
        next_comics     : ["comic_enoch_29"],
        release_at      : {year: 2015, month: 1, day: 12}
    },
    comic_red_fury_28                                : {
        name            : "Красная Фурия #28 Ничего личного, просто бизнес, часть 4; Новая Жизнь",
        number          : "28",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_5"],
        previous_comics : ["comic_red_fury_27"],
        next_comics     : ["comic_red_fury_29"],
        release_at      : {year: 2015, month: 1, day: 15}
    },
    comic_exlibrium_4                                : {
        name            : "Экслибриум #4 ...и дверь откроется, часть 4; Черная дорога",
        number          : "4",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_1"],
        previous_comics : ["comic_exlibrium_3"],
        next_comics     : ["comic_exlibrium_5"],
        release_at      : {year: 2015, month: 1, day: 20}
    },
    comic_meteora_4                                  : {
        name            : "Метеора #4 Прорыв, часть 2; Новая реальность",
        number          : "4",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_1"],
        previous_comics : ["comic_meteora_3"],
        next_comics     : ["comic_meteora_5"],
        release_at      : {year: 2015, month: 1, day: 25}
    },
    comic_besoboy_29                                 : {
        name            : "Бесобой #29 Метро, часть 1",
        number          : "29",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_5"],
        previous_comics : ["comic_besoboy_28"],
        next_comics     : ["comic_besoboy_30"],
        release_at      : {year: 2015, month: 2, day: 2}
    },
    comic_major_grom_29                              : {
        name            : "Майор Гром #29 Игра, часть 5",
        number          : "29",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_5"],
        previous_comics : ["comic_major_grom_28"],
        next_comics     : ["comic_major_grom_30"],
        release_at      : {year: 2015, month: 2, day: 5}
    },
    comic_enoch_29                                   : {
        name            : "Инок #29 Высокое напряжение, часть 3",
        number          : "29",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_5"],
        previous_comics : ["comic_enoch_28"],
        next_comics     : ["comic_enoch_30"],
        release_at      : {year: 2015, month: 2, day: 10}
    },
    comic_red_fury_29                                : {
        name            : "Красная Фурия #29 Сила мысли, часть 1",
        number          : "29",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_5"],
        previous_comics : ["comic_red_fury_28"],
        next_comics     : ["comic_red_fury_30"],
        release_at      : {year: 2015, month: 2, day: 15}
    },
    comic_exlibrium_5                                : {
        name            : "Экслибриум #5 ...и дверь откроется, часть 5",
        number          : "5",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_1"],
        previous_comics : ["comic_exlibrium_4"],
        next_comics     : ["comic_exlibrium_6"],
        release_at      : {year: 2015, month: 2, day: 20}
    },
    comic_meteora_5                                  : {
        name            : "Метеора #5 Дело чести, часть 1",
        number          : "5",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_1"],
        previous_comics : ["comic_meteora_4"],
        next_comics     : ["comic_meteora_6"],
        release_at      : {year: 2015, month: 2, day: 25}
    },
    comic_besoboy_30                                 : {
        name            : "Бесобой #30 Метро, часть 2",
        number          : "30",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_5"],
        previous_comics : ["comic_besoboy_29"],
        next_comics     : ["comic_besoboy_31"],
        release_at      : {year: 2015, month: 3, day: 1}
    },
    comic_major_grom_30                              : {
        name            : "Майор Гром #30 Игра, часть 6",
        number          : "30",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_5"],
        previous_comics : ["comic_major_grom_29"],
        next_comics     : ["comic_major_grom_31"],
        release_at      : {year: 2015, month: 3, day: 5}
    },
    comic_enoch_30                                   : {
        name            : "Инок #30 Высокое напряжение, часть 4",
        number          : "30",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_5"],
        previous_comics : ["comic_enoch_29"],
        next_comics     : ["comic_enoch_31"],
        release_at      : {year: 2015, month: 3, day: 10}
    },
    comic_red_fury_30                                : {
        name            : "Красная Фурия #30 Сила мысли, часть 2",
        number          : "30",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_5"],
        previous_comics : ["comic_red_fury_29"],
        next_comics     : ["comic_red_fury_31"],
        release_at      : {year: 2015, month: 3, day: 15}
    },
    comic_exlibrium_6                                : {
        name            : "Экслибриум #6 Костяной дом, часть 1",
        number          : "6",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_2"],
        previous_comics : ["comic_exlibrium_5"],
        next_comics     : ["comic_exlibrium_7"],
        release_at      : {year: 2015, month: 3, day: 20}
    },
    comic_major_grom_tome_3                          : {
        name            : "Майор Гром том 3: День святого Патрика",
        number          : "3",
        type            : "book",
        ranges          : ["range_major_grom"],
        contained_comics: ["comic_major_grom_11", "comic_major_grom_12", "comic_major_grom_13", "comic_major_grom_14",
                           "comic_major_grom_15", "comic_major_grom_16", "comic_major_grom_17", "comic_major_grom_18"],
        previous_comics : ["comic_major_grom_tome_2"],
        next_comics     : ["comic_major_grom_tome_4"],
        release_at      : {year: 2015, month: 3, day: 21}
    },
    comic_enoch_vs_besoboy                           : {
        name            : "Инок против Бесобоя",
        type            : "book",
        ranges          : ["range_besoboy", "range_enoch", "range_crossovers"],
        contained_comics: ["comic_besoboy_15", "comic_enoch_15", "comic_enoch_vs_besoboy_1", "comic_besoboy_16",
                           "comic_enoch_16", "comic_enoch_vs_besoboy_2", "comic_besoboy_17", "comic_enoch_17",
                           "comic_enoch_vs_besoboy_3"],
        previous_comics : ["comic_besoboy_tome_2", "comic_enoch_tome_2"],
        next_comics     : ["comic_besoboy_tome_3", "comic_enoch_tome_3"],
        release_at      : {year: 2015, month: 3, day: 21}
    },
    comic_meteora_6                                  : {
        name            : "Метеора #6 Дело чести, часть 2",
        number          : "6",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_1"],
        previous_comics : ["comic_meteora_5"],
        next_comics     : ["comic_meteora_7"],
        release_at      : {year: 2015, month: 3, day: 25}
    },
    comic_besoboy_31                                 : {
        name            : "Бесобой #31 Метро, часть 3",
        number          : "31",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_5"],
        previous_comics : ["comic_besoboy_30"],
        next_comics     : ["comic_besoboy_32"],
        release_at      : {year: 2015, month: 4, day: 1}
    },
    comic_major_grom_31                              : {
        name            : "Майор Гром #31 Игра, часть 7",
        number          : "31",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_5"],
        previous_comics : ["comic_major_grom_30"],
        next_comics     : ["comic_major_grom_32"],
        release_at      : {year: 2015, month: 4, day: 5}
    },
    comic_enoch_31                                   : {
        name            : "Инок #31 Высокое напряжение, часть 5",
        number          : "31",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_5"],
        previous_comics : ["comic_enoch_30"],
        next_comics     : ["comic_enoch_32"],
        release_at      : {year: 2015, month: 4, day: 10}
    },
    comic_red_fury_31                                : {
        name            : "Красная Фурия #31 Сила мысли, часть 3",
        number          : "31",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_5"],
        previous_comics : ["comic_red_fury_30"],
        next_comics     : ["comic_red_fury_32"],
        release_at      : {year: 2015, month: 4, day: 13}
    },
    comic_exlibrium_7                                : {
        name            : "Экслибриум #7 Костяной дом, часть 2",
        number          : "7",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_2"],
        previous_comics : ["comic_exlibrium_6"],
        next_comics     : ["comic_exlibrium_8"],
        release_at      : {year: 2015, month: 4, day: 20}
    },
    comic_meteora_7                                  : {
        name            : "Метеора #7 Блокада, часть 1",
        number          : "7",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_2"],
        previous_comics : ["comic_meteora_6"],
        next_comics     : ["comic_meteora_8"],
        release_at      : {year: 2015, month: 4, day: 25}
    },
    comic_besoboy_32                                 : {
        name            : "Бесобой #32 Метро, часть 4",
        number          : "32",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_5"],
        previous_comics : ["comic_besoboy_31"],
        next_comics     : ["comic_besoboy_33"],
        release_at      : {year: 2015, month: 5, day: 1}
    },
    comic_chronicles_of_enoch_single                 : {
        name            : "Хроники Инока: Штурм Берлина",
        type            : "single",
        ranges          : ["range_enoch", "range_crossovers", "range_bubble_legends"],
        including_comics: ["comic_chronicles_of_enoch_book"],
        previous_comics : ["comic_enoch_50"],
        release_at      : {year: 2015, month: 5, day: 1}
    },
    comic_chronicles_of_enoch_book                   : {
        name            : "Хроники Инока: Штурм Берлина",
        type            : "book",
        ranges          : ["range_enoch", "range_crossovers", "range_bubble_legends"],
        contained_comics: ["comic_chronicles_of_enoch_single"],
        previous_comics : ["comic_enoch_tome_8"],
        release_at      : {year: 2015, month: 5, day: 1}
    },
    comic_major_grom_32                              : {
        name            : "Майор Гром #32 Игра, часть 8",
        number          : "32",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_5"],
        previous_comics : ["comic_major_grom_31"],
        next_comics     : ["comic_major_grom_33"],
        release_at      : {year: 2015, month: 5, day: 5}
    },
    comic_enoch_32                                   : {
        name            : "Инок #32 Калинов мост, часть 1",
        number          : "32",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_6"],
        previous_comics : ["comic_enoch_31"],
        next_comics     : ["comic_enoch_33"],
        release_at      : {year: 2015, month: 5, day: 12}
    },
    comic_red_fury_32                                : {
        name            : "Красная Фурия #32 Любовь зла",
        number          : "32",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_6"],
        previous_comics : ["comic_red_fury_31"],
        next_comics     : ["comic_red_fury_33"],
        release_at      : {year: 2015, month: 5, day: 15}
    },
    comic_exlibrium_8                                : {
        name            : "Экслибриум #8 Костяной дом, часть 3",
        number          : "8",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_2"],
        previous_comics : ["comic_exlibrium_7"],
        next_comics     : ["comic_exlibrium_9"],
        release_at      : {year: 2015, month: 5, day: 18}
    },
    comic_meteora_8                                  : {
        name            : "Метеора #8 Блокада, часть 2",
        number          : "8",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_2"],
        previous_comics : ["comic_meteora_7"],
        next_comics     : ["comic_meteora_9"],
        release_at      : {year: 2015, month: 5, day: 25}
    },
    comic_besoboy_33                                 : {
        name            : "Бесобой #33 Исповедь",
        number          : "33",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_5"],
        previous_comics : ["comic_besoboy_32"],
        next_comics     : ["comic_besoboy_34"],
        release_at      : {year: 2015, month: 6, day: 1}
    },
    comic_major_grom_33                              : {
        name            : "Майор Гром #33 Игра, часть 9",
        number          : "33",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_5"],
        previous_comics : ["comic_major_grom_32"],
        next_comics     : ["comic_major_grom_34"],
        release_at      : {year: 2015, month: 6, day: 8}
    },
    comic_enoch_33                                   : {
        name            : "Инок #33 Калинов мост, часть 2; Спаситель",
        number          : "33",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_6"],
        previous_comics : ["comic_enoch_32"],
        next_comics     : ["comic_enoch_34"],
        release_at      : {year: 2015, month: 6, day: 12}
    },
    comic_red_fury_33                                : {
        name            : "Красная Фурия #33 Отто и Лотта",
        number          : "33",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_6"],
        previous_comics : ["comic_red_fury_32"],
        next_comics     : ["comic_red_fury_34"],
        release_at      : {year: 2015, month: 6, day: 16}
    },
    comic_exlibrium_9                                : {
        name            : "Экслибриум #9 Люди библиотеки, часть 1",
        number          : "9",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_2"],
        previous_comics : ["comic_exlibrium_8"],
        next_comics     : ["comic_exlibrium_10"],
        release_at      : {year: 2015, month: 6, day: 18}
    },
    comic_meteora_9                                  : {
        name            : "Метеора #9 Блокада, часть 3",
        number          : "9",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_2"],
        previous_comics : ["comic_meteora_8"],
        next_comics     : ["comic_meteora_10"],
        release_at      : {year: 2015, month: 6, day: 25}
    },
    comic_besoboy_34                                 : {
        name            : "Бесобой #34 Стая, часть 1",
        number          : "34",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_6"],
        previous_comics : ["comic_besoboy_33"],
        next_comics     : ["comic_besoboy_35"],
        release_at      : {year: 2015, month: 7, day: 1}
    },
    comic_major_grom_34                              : {
        name            : "Майор Гром #34 Голоса, часть 1",
        number          : "34",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_6"],
        previous_comics : ["comic_major_grom_33"],
        next_comics     : ["comic_major_grom_35"],
        release_at      : {year: 2015, month: 7, day: 6}
    },
    comic_enoch_34                                   : {
        name            : "Инок #34 Калинов мост, часть 3",
        number          : "34",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_6"],
        previous_comics : ["comic_enoch_33"],
        next_comics     : ["comic_enoch_35"],
        release_at      : {year: 2015, month: 7, day: 10}
    },
    comic_red_fury_34                                : {
        name            : "Красная Фурия #34 Братство",
        number          : "34",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_6"],
        previous_comics : ["comic_red_fury_33"],
        next_comics     : ["comic_red_fury_35"],
        release_at      : {year: 2015, month: 7, day: 16}
    },
    comic_exlibrium_10                               : {
        name            : "Экслибриум #10 Люди библиотеки, часть 2",
        number          : "10",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_2"],
        previous_comics : ["comic_exlibrium_9"],
        next_comics     : ["comic_exlibrium_11"],
        release_at      : {year: 2015, month: 7, day: 20}
    },
    comic_meteora_10                                 : {
        name            : "Метеора #10 Блокада, часть 4",
        number          : "10",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_2"],
        previous_comics : ["comic_meteora_9"],
        next_comics     : ["comic_meteora_11"],
        release_at      : {year: 2015, month: 7, day: 25}
    },
    comic_besoboy_tome_3                             : {
        name            : "Бесобой том 3: Три сестры",
        number          : "3",
        type            : "book",
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_18", "comic_besoboy_19", "comic_besoboy_20", "comic_besoboy_21",
                           "comic_besoboy_22"],
        previous_comics : ["comic_enoch_vs_besoboy"],
        next_comics     : ["comic_besoboy_tome_4"],
        release_at      : {year: 2015, month: 7, day: 30}
    },
    comic_enoch_tome_3                               : {
        name            : "Инок том 3: Зверь во мне часть 1",
        number          : "3",
        type            : "book",
        ranges          : ["range_enoch"],
        contained_comics: ["comic_enoch_18", "comic_enoch_19", "comic_enoch_20", "comic_enoch_21"],
        previous_comics : ["comic_enoch_vs_besoboy"],
        next_comics     : ["comic_enoch_tome_4"],
        release_at      : {year: 2015, month: 7, day: 30}
    },
    comic_red_fury_tome_3                            : {
        name            : "Красная Фурия том 3: Тёмное наследие часть 1",
        number          : "3",
        type            : "book",
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_16", "comic_red_fury_16_1", "comic_red_fury_17", "comic_red_fury_18",
                           "comic_red_fury_19"],
        previous_comics : ["comic_red_fury_tome_2"],
        next_comics     : ["comic_red_fury_tome_4"],
        release_at      : {year: 2015, month: 7, day: 30}
    },
    comic_besoboy_35                                 : {
        name            : "Бесобой #35 Стая, часть 2",
        number          : "35",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_6"],
        previous_comics : ["comic_besoboy_34"],
        next_comics     : ["comic_besoboy_36"],
        release_at      : {year: 2015, month: 7, day: 31}
    },
    comic_major_grom_35                              : {
        name            : "Майор Гром #35 Голоса, часть 2",
        number          : "35",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_6"],
        previous_comics : ["comic_major_grom_34"],
        next_comics     : ["comic_major_grom_36"],
        release_at      : {year: 2015, month: 8, day: 5}
    },
    comic_enoch_35                                   : {
        name            : "Инок #35 Сердце монстра, часть 1",
        number          : "35",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_6"],
        previous_comics : ["comic_enoch_34"],
        next_comics     : ["comic_enoch_36"],
        release_at      : {year: 2015, month: 8, day: 10}
    },
    comic_red_fury_35                                : {
        name            : "Красная Фурия #35 Башня ворона, часть 1",
        number          : "35",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_6"],
        previous_comics : ["comic_red_fury_34"],
        next_comics     : ["comic_red_fury_36"],
        release_at      : {year: 2015, month: 8, day: 14}
    },
    comic_exlibrium_11                               : {
        name            : "Экслибриум #11 Благими намерениями, часть 1",
        number          : "11",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_3"],
        previous_comics : ["comic_exlibrium_10"],
        next_comics     : ["comic_exlibrium_12"],
        release_at      : {year: 2015, month: 8, day: 20}
    },
    comic_meteora_11                                 : {
        name            : "Метеора #11 Блокада, часть 5",
        number          : "11",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_2"],
        previous_comics : ["comic_meteora_10"],
        next_comics     : ["comic_meteora_12"],
        release_at      : {year: 2015, month: 8, day: 25}
    },
    comic_red_fury_tome_4                            : {
        name            : "Красная Фурия том 4: Тёмное наследие часть 2",
        number          : "4",
        type            : "book",
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_20", "comic_red_fury_21", "comic_red_fury_22", "comic_red_fury_23",
                           "comic_red_fury_24"],
        previous_comics : ["comic_red_fury_tome_3"],
        next_comics     : ["comic_red_fury_tome_5"],
        release_at      : {year: 2015, month: 7, day: 30}
    },
    comic_besoboy_36                                 : {
        name            : "Бесобой #36 Стая, часть 3",
        number          : "36",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_6"],
        previous_comics : ["comic_besoboy_35"],
        next_comics     : ["comic_besoboy_37"],
        release_at      : {year: 2015, month: 8, day: 31}
    },
    comic_enoch_tome_4                               : {
        name            : "Инок том 4: Зверь во мне часть 2",
        number          : "4",
        type            : "book",
        ranges          : ["range_enoch"],
        contained_comics: ["comic_enoch_22", "comic_enoch_23", "comic_enoch_24", "comic_enoch_25", "comic_enoch_26"],
        previous_comics : ["comic_enoch_tome_3"],
        next_comics     : ["comic_enoch_tome_5"],
        release_at      : {year: 2015, month: 9, day: 1}
    },
    comic_major_grom_36                              : {
        name            : "Майор Гром #36 Голоса, часть 3",
        number          : "36",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_6"],
        previous_comics : ["comic_major_grom_35"],
        next_comics     : ["comic_major_grom_37"],
        release_at      : {year: 2015, month: 9, day: 4}
    },
    comic_enoch_36                                   : {
        name            : "Инок #36 Сердце монстра, часть 2",
        number          : "36",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_6"],
        previous_comics : ["comic_enoch_35"],
        next_comics     : ["comic_enoch_37"],
        release_at      : {year: 2015, month: 9, day: 9}
    },
    comic_red_fury_36                                : {
        name            : "Красная Фурия #36 Башня ворона, часть 2",
        number          : "36",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_6"],
        previous_comics : ["comic_red_fury_35"],
        next_comics     : ["comic_red_fury_37"],
        release_at      : {year: 2015, month: 9, day: 14}
    },
    comic_exlibrium_12                               : {
        name            : "Экслибриум #12 Благими намерениями, часть 2",
        number          : "12",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_3"],
        previous_comics : ["comic_exlibrium_11"],
        next_comics     : ["comic_exlibrium_13"],
        release_at      : {year: 2015, month: 9, day: 18}
    },
    comic_meteora_12                                 : {
        name            : "Метеора #12 Блокада, часть 6",
        number          : "12",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_2"],
        previous_comics : ["comic_meteora_11"],
        next_comics     : ["comic_meteora_13"],
        release_at      : {year: 2015, month: 9, day: 25}
    },
    comic_besoboy_37                                 : {
        name            : "Бесобой #37 Стая, часть 4",
        number          : "37",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_6"],
        previous_comics : ["comic_besoboy_36"],
        next_comics     : ["comic_time_of_raven_prologue"],
        release_at      : {year: 2015, month: 9, day: 28}
    },
    comic_major_grom_37                              : {
        name            : "Майор Гром #37 Голоса, часть 4",
        number          : "37",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_6"],
        previous_comics : ["comic_major_grom_36"],
        next_comics     : ["comic_time_of_raven_1"],
        release_at      : {year: 2015, month: 10, day: 1}
    },
    comic_ziggi_1                                    : {
        name            : "Зигги: космический хомяк №1. Планета Фастфуд",
        number          : "1",
        type            : "single",
        ranges          : ["range_childrens_comics"],
        including_comics: ["comic_ziggi"],
        next_comics     : ["comic_ziggi_2"],
        release_at      : {year: 2015, month: 10, day: 1}
    },
    comic_besoboy_tome_4                             : {
        name            : "Бесобой том 4: Балор",
        number          : "4",
        type            : "book",
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_23", "comic_besoboy_24", "comic_besoboy_25", "comic_besoboy_26",
                           "comic_besoboy_27"],
        previous_comics : ["comic_besoboy_tome_3"],
        next_comics     : ["comic_besoboy_tome_5"],
        release_at      : {year: 2015, month: 10, day: 1}
    },
    comic_major_grom_tome_4                          : {
        name            : "Майор Гром том 4: Как в сказке",
        number          : "4",
        type            : "book",
        ranges          : ["range_major_grom"],
        contained_comics: ["comic_major_grom_19", "comic_major_grom_20", "comic_major_grom_21", "comic_major_grom_22",
                           "comic_major_grom_23", "comic_major_grom_24"],
        previous_comics : ["comic_major_grom_tome_3"],
        next_comics     : ["comic_major_grom_tome_5"],
        release_at      : {year: 2015, month: 10, day: 1}
    },
    comic_exlibrium_tome_1                           : {
        name            : "Экслибриум том 1: ...И дверь откроется",
        number          : "1",
        type            : "book",
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_1", "comic_exlibrium_2", "comic_exlibrium_3", "comic_exlibrium_4",
                           "comic_exlibrium_5"],
        next_comics     : ["comic_exlibrium_tome_2"],
        release_at      : {year: 2015, month: 10, day: 1}
    },
    comic_meteora_tome_1                             : {
        name            : "Метеора том 1: Самая опасная вещь в космосе",
        number          : "1",
        type            : "book",
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_1", "comic_meteora_2", "comic_meteora_3", "comic_meteora_4",
                           "comic_meteora_5", "comic_meteora_6"],
        next_comics     : ["comic_meteora_tome_2"],
        release_at      : {year: 2015, month: 10, day: 1}
    },
    comic_time_of_raven_backstory_single             : {
        name            : "Время Ворона: Предыстория",
        type            : "single",
        ranges          : ["range_time_of_raven"],
        including_comics: ["comic_time_of_raven_backstory_book"],
        next_comics     : ["comic_time_of_raven_prologue"],
        release_at      : {year: 2015, month: 10, day: 1}
    },
    comic_time_of_raven_backstory_book               : {
        name            : "Время Ворона: Предыстория",
        type            : "book",
        ranges          : ["range_time_of_raven"],
        contained_comics: ["comic_time_of_raven_backstory_single"],
        next_comics     : ["comic_time_of_raven"],
        release_at      : {year: 2015, month: 10, day: 1}
    },
    comic_time_of_raven_prologue                     : {
        name            : "Время Ворона: Пролог",
        type            : "single",
        ranges          : ["range_time_of_raven"],
        including_comics: ["comic_time_of_raven"],
        previous_comics : ["comic_besoboy_37", "comic_time_of_raven_backstory_single"],
        next_comics     : ["comic_time_of_raven_1", "comic_besoboy_38"],
        release_at      : {year: 2015, month: 10, day: 1}
    },
    comic_enoch_37                                   : {
        name            : "Инок #37 Сердце монстра, часть 3",
        number          : "37",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_6"],
        previous_comics : ["comic_enoch_36"],
        next_comics     : ["comic_enoch_38"],
        release_at      : {year: 2015, month: 10, day: 9}
    },
    comic_red_fury_37                                : {
        name            : "Красная Фурия #37 Апгрейд",
        number          : "37",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_6"],
        previous_comics : ["comic_red_fury_36"],
        next_comics     : ["comic_time_of_raven_1"],
        release_at      : {year: 2015, month: 10, day: 14}
    },
    comic_exlibrium_13                               : {
        name            : "Экслибриум #13 Благими намерениями, часть 3",
        number          : "13",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_3"],
        previous_comics : ["comic_exlibrium_12"],
        next_comics     : ["comic_exlibrium_14"],
        release_at      : {year: 2015, month: 10, day: 19}
    },
    comic_meteora_13                                 : {
        name            : "Метеора #13 Свинцовые небеса",
        number          : "13",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_3"],
        previous_comics : ["comic_meteora_12"],
        next_comics     : ["comic_meteora_14"],
        release_at      : {year: 2015, month: 10, day: 26}
    },
    comic_time_of_raven_1                            : {
        name            : "Время Ворона #1",
        number          : "1",
        type            : "single",
        ranges          : ["range_time_of_raven"],
        including_comics: ["comic_time_of_raven"],
        previous_comics : ["comic_major_grom_37", "comic_time_of_raven_prologue", "comic_red_fury_37"],
        next_comics     : ["comic_major_grom_38", "comic_enoch_38", "comic_red_fury_38", "comic_time_of_raven_2"],
        release_at      : {year: 2015, month: 10, day: 28}
    },
    comic_besoboy_38                                 : {
        name            : "Бесобой #38 Хищные сны, часть 1",
        number          : "38",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_7"],
        previous_comics : ["comic_time_of_raven_prologue"],
        next_comics     : ["comic_besoboy_39"],
        release_at      : {year: 2015, month: 11, day: 2}
    },
    comic_major_grom_38                              : {
        name            : "Майор Гром #38 Одержимость",
        number          : "38",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_and_red_fury_tome_7"],
        previous_comics : ["comic_time_of_raven_1"],
        next_comics     : ["comic_time_of_raven_2"],
        release_at      : {year: 2015, month: 11, day: 5}
    },
    comic_enoch_38                                   : {
        name            : "Инок #38 Сердце монстра, часть 4",
        number          : "38",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_6"],
        previous_comics : ["comic_enoch_37", "comic_time_of_raven_1"],
        next_comics     : ["comic_time_of_raven_2", "comic_enoch_39"],
        release_at      : {year: 2015, month: 11, day: 9}
    },
    comic_red_fury_38                                : {
        name            : "Красная Фурия #38 Прозрение",
        number          : "38",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_major_grom_and_red_fury_tome_7"],
        previous_comics : ["comic_time_of_raven_1"],
        next_comics     : ["comic_time_of_raven_2"],
        release_at      : {year: 2015, month: 11, day: 16}
    },
    comic_exlibrium_14                               : {
        name            : "Экслибриум #14 Благими намерениями, часть 4",
        number          : "14",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_3"],
        previous_comics : ["comic_exlibrium_13"],
        next_comics     : ["comic_exlibrium_15"],
        release_at      : {year: 2015, month: 11, day: 20}
    },
    comic_meteora_14                                 : {
        name            : "Метеора #14 Окончательное решение, часть 1",
        number          : "14",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_3"],
        previous_comics : ["comic_meteora_13"],
        next_comics     : ["comic_meteora_15"],
        release_at      : {year: 2015, month: 11, day: 24}
    },
    comic_time_of_raven_2                            : {
        name            : "Время Ворона #2",
        number          : "2",
        type            : "single",
        ranges          : ["range_time_of_raven"],
        including_comics: ["comic_time_of_raven"],
        previous_comics : ["comic_time_of_raven_1", "comic_major_grom_38", "comic_enoch_38", "comic_red_fury_38"],
        next_comics     : ["comic_major_grom_39", "comic_red_fury_39", "comic_time_of_raven_3"],
        release_at      : {year: 2015, month: 11, day: 27}
    },
    comic_besoboy_39                                 : {
        name            : "Бесобой #39 Хищные сны, часть 2",
        number          : "39",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_7"],
        previous_comics : ["comic_besoboy_38"],
        next_comics     : ["comic_time_of_raven_3", "comic_besoboy_40"],
        release_at      : {year: 2015, month: 12, day: 2}
    },
    comic_ziggi_2                                    : {
        name            : "Зигги: космический хомяк №2. Новогоднее чудо",
        number          : "2",
        type            : "single",
        ranges          : ["range_childrens_comics"],
        including_comics: ["comic_ziggi"],
        previous_comics : ["comic_ziggi_1"],
        next_comics     : ["comic_ziggi_3"],
        release_at      : {year: 2015, month: 12, day: 5}
    },
    comic_major_grom_39                              : {
        name            : "Майор Гром #39 Чувство Долга",
        number          : "39",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_and_red_fury_tome_7"],
        previous_comics : ["comic_time_of_raven_2"],
        next_comics     : ["comic_time_of_raven_3"],
        release_at      : {year: 2015, month: 12, day: 5}
    },
    comic_cat_and_mouse_tome_1                       : {
        name       : "Кошки-мышки том 1: Старый новый друг",
        number     : "1",
        type       : "single",
        ranges     : ["range_evgeny_fedotov"],
        next_comics: ["comic_cat_and_mouse_tome_2"],
        release_at : {year: 2015, month: 12, day: 7}
    },
    comic_enoch_39                                   : {
        name            : "Инок #39 Мёртвая хватка, часть 1",
        number          : "39",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_7"],
        previous_comics : ["comic_enoch_38"],
        next_comics     : ["comic_enoch_40"],
        release_at      : {year: 2015, month: 12, day: 10}
    },
    comic_red_fury_39                                : {
        name            : "Красная Фурия #39 Отражение",
        number          : "39",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_major_grom_and_red_fury_tome_7"],
        previous_comics : ["comic_time_of_raven_2"],
        next_comics     : ["comic_time_of_raven_3"],
        release_at      : {year: 2015, month: 12, day: 14}
    },
    comic_exlibrium_15                               : {
        name            : "Экслибриум #15 Меж трех огней, часть 1",
        number          : "15",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_3"],
        previous_comics : ["comic_exlibrium_14"],
        next_comics     : ["comic_exlibrium_16"],
        release_at      : {year: 2015, month: 12, day: 21}
    },
    comic_meteora_15                                 : {
        name            : "Метеора #15 Окончательное решение, часть 2",
        number          : "15",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_3"],
        previous_comics : ["comic_meteora_14"],
        next_comics     : ["comic_meteora_16"],
        release_at      : {year: 2015, month: 12, day: 25}
    },
    comic_time_of_raven_3                            : {
        name            : "Время Ворона #3",
        number          : "3",
        type            : "single",
        ranges          : ["range_time_of_raven"],
        including_comics: ["comic_time_of_raven"],
        previous_comics : ["comic_time_of_raven_2", "comic_besoboy_39", "comic_major_grom_39", "comic_red_fury_39"],
        next_comics     : ["comic_besoboy_40", "comic_major_grom_40", "comic_time_of_raven_4"],
        release_at      : {year: 2015, month: 12, day: 28}
    },
    comic_caesar_magnificent_1                       : {
        name            : "Цезарь Великолепный #1 Когда земля ближе облака",
        number          : "1",
        type            : "single",
        ranges          : ["range_alena_spiridonova"],
        including_comics: ["comic_caesar_magnificent"],
        next_comics     : ["comic_caesar_magnificent_2"],
        release_at      : {year: 2016}
    },
    comic_caesar_magnificent_2                       : {
        name            : "Цезарь Великолепный #2 Связь",
        number          : "2",
        type            : "single",
        ranges          : ["range_alena_spiridonova"],
        including_comics: ["comic_caesar_magnificent"],
        previous_comics : ["comic_caesar_magnificent_1"],
        next_comics     : ["comic_caesar_magnificent_3"],
        release_at      : {year: 2016}
    },
    comic_caesar_magnificent_3                       : {
        name            : "Цезарь Великолепный #3 Ставрополь, прощай",
        number          : "3",
        type            : "single",
        ranges          : ["range_alena_spiridonova"],
        including_comics: ["comic_caesar_magnificent"],
        previous_comics : ["comic_caesar_magnificent_2"],
        next_comics     : ["comic_caesar_magnificent_4"],
        release_at      : {year: 2016}
    },
    comic_caesar_magnificent_4                       : {
        name            : "Цезарь Великолепный #4 Там, где живет легенда",
        number          : "4",
        type            : "single",
        ranges          : ["range_alena_spiridonova"],
        including_comics: ["comic_caesar_magnificent"],
        previous_comics : ["comic_caesar_magnificent_3"],
        next_comics     : ["comic_caesar_magnificent_5"],
        release_at      : {year: 2016}
    },
    comic_caesar_magnificent_5                       : {
        name            : "Цезарь Великолепный #5 В капкане",
        number          : "5",
        type            : "single",
        ranges          : ["range_alena_spiridonova"],
        including_comics: ["comic_caesar_magnificent"],
        previous_comics : ["comic_caesar_magnificent_4"],
        release_at      : {year: 2016}
    },
    comic_besoboy_40                                 : {
        name            : "Бесобой #40 Дьявол в деталях, часть 1",
        number          : "40",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_7"],
        previous_comics : ["comic_besoboy_39", "comic_time_of_raven_3"],
        next_comics     : ["comic_besoboy_41"],
        release_at      : {year: 2016, month: 1, day: 11}
    },
    comic_enoch_40                                   : {
        name            : "Инок #40 Мёртвая хватка, часть 2",
        number          : "40",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_7"],
        previous_comics : ["comic_enoch_39"],
        next_comics     : ["comic_enoch_41"],
        release_at      : {year: 2016, month: 1, day: 11}
    },
    comic_major_grom_40                              : {
        name            : "Майор Гром #40 В сердце тьмы, часть 1",
        number          : "40",
        type            : "single",
        ranges          : ["range_major_grom", "range_crossovers"],
        including_comics: ["comic_major_grom_and_red_fury_tome_7"],
        previous_comics : ["comic_time_of_raven_3"],
        next_comics     : ["comic_red_fury_40"],
        release_at      : {year: 2016, month: 1, day: 18}
    },
    comic_red_fury_40                                : {
        name            : "Красная Фурия #40 В сердце тьмы, часть 2",
        number          : "40",
        type            : "single",
        ranges          : ["range_red_fury", "range_crossovers"],
        including_comics: ["comic_major_grom_and_red_fury_tome_7"],
        previous_comics : ["comic_major_grom_40"],
        next_comics     : ["comic_time_of_raven_4"],
        release_at      : {year: 2016, month: 1, day: 18}
    },
    comic_exlibrium_16                               : {
        name            : "Экслибриум #16 Меж трех огней, часть 2",
        number          : "16",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_3"],
        previous_comics : ["comic_exlibrium_15"],
        next_comics     : ["comic_exlibrium_17"],
        release_at      : {year: 2016, month: 1, day: 20}
    },
    comic_meteora_16                                 : {
        name            : "Метеора #16 Окончательное решение, часть 3",
        number          : "16",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_3"],
        previous_comics : ["comic_meteora_15"],
        next_comics     : ["comic_meteora_17"],
        release_at      : {year: 2016, month: 1, day: 25}
    },
    comic_time_of_raven_4                            : {
        name            : "Время Ворона #4",
        number          : "4",
        type            : "single",
        ranges          : ["range_time_of_raven"],
        including_comics: ["comic_time_of_raven"],
        previous_comics : ["comic_time_of_raven_3", "comic_red_fury_40", "comic_besoboy_41"],
        next_comics     : ["comic_red_fury_41", "comic_major_grom_41", "comic_time_of_raven_5"],
        release_at      : {year: 2016, month: 1, day: 30}
    },
    comic_besoboy_41                                 : {
        name            : "Бесобой #41 Дьявол в деталях, часть 2",
        number          : "41",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_7"],
        previous_comics : ["comic_besoboy_40"],
        next_comics     : ["comic_time_of_raven_4", "comic_besoboy_42"],
        release_at      : {year: 2016, month: 2, day: 1}
    },
    comic_red_fury_41                                : {
        name            : "Красная Фурия #41 Крах",
        number          : "41",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_major_grom_and_red_fury_tome_7"],
        previous_comics : ["comic_time_of_raven_4"],
        next_comics     : ["comic_time_of_raven_5"],
        release_at      : {year: 2016, month: 2, day: 5}
    },
    comic_enoch_41                                   : {
        name            : "Инок #41 Мёртвая хватка, часть 3",
        number          : "41",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_7"],
        previous_comics : ["comic_enoch_40"],
        next_comics     : ["comic_enoch_42"],
        release_at      : {year: 2016, month: 2, day: 10}
    },
    comic_major_grom_41                              : {
        name            : "Майор Гром #41 Идеальный день",
        number          : "41",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_and_red_fury_tome_7"],
        previous_comics : ["comic_time_of_raven_4"],
        next_comics     : ["comic_time_of_raven_5"],
        release_at      : {year: 2016, month: 2, day: 15}
    },
    comic_exlibrium_17                               : {
        name            : "Экслибриум #17 Меж трех огней, часть 3",
        number          : "17",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_3"],
        previous_comics : ["comic_exlibrium_16"],
        next_comics     : ["comic_time_of_raven_epilogue_single", "comic_exlibrium_18"],
        release_at      : {year: 2016, month: 2, day: 19}
    },
    comic_meteora_17                                 : {
        name            : "Метеора #17 Лицо человека",
        number          : "17",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_3"],
        previous_comics : ["comic_meteora_16"],
        next_comics     : ["comic_meteora_18"],
        release_at      : {year: 2016, month: 2, day: 25}
    },
    comic_time_of_raven_5                            : {
        name            : "Время Ворона #5",
        number          : "5",
        type            : "single",
        ranges          : ["range_time_of_raven"],
        including_comics: ["comic_time_of_raven"],
        previous_comics : ["comic_time_of_raven_4", "comic_red_fury_41", "comic_major_grom_41"],
        next_comics     : ["comic_time_of_raven_epilogue_single", "comic_besoboy_42"],
        release_at      : {year: 2016, month: 3, day: 13}
    },
    comic_ziggi_3                                    : {
        name            : "Зигги: космический хомяк №3. Гонки на Планете Вулканов",
        number          : "3",
        type            : "single",
        ranges          : ["range_childrens_comics"],
        including_comics: ["comic_ziggi"],
        previous_comics : ["comic_ziggi_2"],
        next_comics     : ["comic_ziggi_4"],
        release_at      : {year: 2016, month: 3, day: 13}
    },
    comic_besoboy_tome_5                             : {
        name            : "Бесобой том 5: Метро",
        number          : "5",
        type            : "book",
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_28", "comic_besoboy_29", "comic_besoboy_30", "comic_besoboy_31",
                           "comic_besoboy_32", "comic_besoboy_33"],
        previous_comics : ["comic_besoboy_tome_4"],
        next_comics     : ["comic_besoboy_tome_6"],
        release_at      : {year: 2016, month: 3, day: 13}
    },
    comic_major_grom_tome_5                          : {
        name            : "Майор Гром том 5: Игра",
        number          : "5",
        type            : "book",
        ranges          : ["range_major_grom"],
        contained_comics: ["comic_major_grom_25", "comic_major_grom_26", "comic_major_grom_27", "comic_major_grom_28",
                           "comic_major_grom_29", "comic_major_grom_30", "comic_major_grom_31", "comic_major_grom_32",
                           "comic_major_grom_33"],
        previous_comics : ["comic_major_grom_tome_4"],
        next_comics     : ["comic_major_grom_tome_6"],
        release_at      : {year: 2016, month: 3, day: 13}
    },
    comic_exlibrium_tome_2                           : {
        name            : "Экслибриум том 2: Костяной дом",
        number          : "2",
        type            : "book",
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_6", "comic_exlibrium_7", "comic_exlibrium_8", "comic_exlibrium_9",
                           "comic_exlibrium_10"],
        previous_comics : ["comic_exlibrium_tome_1"],
        next_comics     : ["comic_exlibrium_tome_3"],
        release_at      : {year: 2016, month: 3, day: 13}
    },
    comic_time_of_raven_epilogue_single              : {
        name            : "Время Ворона: Эпилог",
        type            : "single",
        ranges          : ["range_time_of_raven"],
        including_comics: ["comic_time_of_raven_epilogue_book"],
        previous_comics : ["comic_exlibrium_17", "comic_time_of_raven_5"],
        next_comics     : ["comic_red_fury_42", "comic_major_grom_42", "comic_exlibrium_18", "comic_enoch_43"],
        release_at      : {year: 2016, month: 3, day: 13}
    },
    comic_time_of_raven_epilogue_book                : {
        name            : "Время Ворона: Эпилог",
        type            : "book",
        ranges          : ["range_time_of_raven"],
        contained_comics: ["comic_time_of_raven_epilogue_single"],
        previous_comics : ["comic_exlibrium_tome_3"],
        next_comics     : ["comic_red_fury_tome_8", "comic_major_grom_tome_8", "comic_enoch_tome_8",
                           "comic_exlibrium_tome_4"],
        release_at      : {year: 2016, month: 3, day: 13}
    },
    comic_red_fury_42                                : {
        name            : "Красная Фурия #42 Агент Симмонс, часть 1",
        number          : "42",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_8"],
        previous_comics : ["comic_time_of_raven_epilogue_single"],
        next_comics     : ["comic_red_fury_43"],
        release_at      : {year: 2016, month: 3, day: 15}
    },
    comic_besoboy_42                                 : {
        name            : "Бесобой #42 Жертвы обстоятельств",
        number          : "42",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_7"],
        previous_comics : ["comic_besoboy_41", "comic_time_of_raven_5"],
        next_comics     : ["comic_besoboy_43"],
        release_at      : {year: 2016, month: 4, day: 1}
    },
    comic_enoch_party_king                           : {
        name       : "Инок: Король вечеринок",
        type       : "single",
        ranges     : ["range_enoch_party_king"],
        next_comics: ["comic_enoch_party_king_no_more_parties"],
        release_at : {year: 2016, month: 4, day: 1}
    },
    comic_major_grom_42                              : {
        name            : "Майор Гром #42 Загадка сфинкса, часть 1",
        number          : "42",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_8"],
        previous_comics : ["comic_time_of_raven_epilogue_single"],
        next_comics     : ["comic_major_grom_43"],
        release_at      : {year: 2016, month: 4, day: 4}
    },
    comic_enoch_42                                   : {
        name            : "Инок #42 Мёртвая хватка, часть 4",
        number          : "42",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_7"],
        previous_comics : ["comic_enoch_41"],
        next_comics     : ["comic_enoch_43"],
        release_at      : {year: 2016, month: 2, day: 10}
    },
    comic_exlibrium_18                               : {
        name            : "Экслибриум #18 Не сахар",
        number          : "18",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_4"],
        previous_comics : ["comic_exlibrium_17", "comic_time_of_raven_epilogue_single"],
        next_comics     : ["comic_exlibrium_19"],
        release_at      : {year: 2016, month: 4, day: 16}
    },
    comic_enoch_tome_5                               : {
        name            : "Инок том 5: Высокое напряжение",
        number          : "5",
        type            : "book",
        ranges          : ["range_enoch"],
        contained_comics: ["comic_enoch_27", "comic_enoch_28", "comic_enoch_29", "comic_enoch_30", "comic_enoch_31"],
        previous_comics : ["comic_enoch_tome_4"],
        next_comics     : ["comic_enoch_tome_6", "comic_time_of_raven"],
        release_at      : {year: 2016, month: 4, day: 16}
    },
    comic_red_fury_tome_5                            : {
        name            : "Красная Фурия том 5: Ничего личного, просто бизнес",
        number          : "5",
        type            : "book",
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_25", "comic_red_fury_26", "comic_red_fury_27", "comic_red_fury_28",
                           "comic_red_fury_29", "comic_red_fury_30", "comic_red_fury_31"],
        previous_comics : ["comic_red_fury_tome_4"],
        next_comics     : ["comic_red_fury_tome_6"],
        release_at      : {year: 2016, month: 4, day: 16}
    },
    comic_meteora_tome_2                             : {
        name            : "Метеора том 2: Блокада",
        number          : "2",
        type            : "book",
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_7", "comic_meteora_8", "comic_meteora_9", "comic_meteora_10",
                           "comic_meteora_11", "comic_meteora_12"],
        previous_comics : ["comic_meteora_tome_1"],
        next_comics     : ["comic_meteora_tome_3"],
        release_at      : {year: 2016, month: 4, day: 16}
    },
    comic_meteora_18                                 : {
        name            : "Метеора #18 Там, где обитают драконы",
        number          : "18",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_4"],
        previous_comics : ["comic_meteora_17"],
        next_comics     : ["comic_meteora_19"],
        release_at      : {year: 2016, month: 4, day: 25}
    },
    comic_besoboy_43                                 : {
        name            : "Бесобой #43 Рыковы",
        number          : "43",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_8"],
        previous_comics : ["comic_besoboy_42"],
        next_comics     : ["comic_besoboy_44"],
        release_at      : {year: 2016, month: 5, day: 2}
    },
    comic_major_grom_43                              : {
        name            : "Майор Гром #43 Загадка сфинкса, часть 2",
        number          : "43",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_8"],
        previous_comics : ["comic_major_grom_42"],
        next_comics     : ["comic_major_grom_44"],
        release_at      : {year: 2016, month: 5, day: 6}
    },
    comic_enoch_43                                   : {
        name            : "Инок #43 Путь к бессмертию, часть 1",
        number          : "43",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_8"],
        previous_comics : ["comic_time_of_raven_epilogue_single", "comic_enoch_42"],
        next_comics     : ["comic_enoch_44"],
        release_at      : {year: 2016, month: 5, day: 10}
    },
    comic_red_fury_43                                : {
        name            : "Красная Фурия #43 Агент Симмонс, часть 2",
        number          : "43",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_8"],
        previous_comics : ["comic_red_fury_42"],
        next_comics     : ["comic_red_fury_44"],
        release_at      : {year: 2016, month: 5, day: 16}
    },
    comic_exlibrium_19                               : {
        name            : "Экслибриум #19 Суд",
        number          : "19",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_4"],
        previous_comics : ["comic_exlibrium_18"],
        next_comics     : ["comic_exlibrium_20"],
        release_at      : {year: 2016, month: 5, day: 20}
    },
    comic_meteora_19                                 : {
        name            : "Метеора #19 Охота, часть 1",
        number          : "19",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_4"],
        previous_comics : ["comic_meteora_18"],
        next_comics     : ["comic_meteora_20"],
        release_at      : {year: 2016, month: 5, day: 23}
    },
    comic_besoboy_44                                 : {
        name            : "Бесобой #44 Гончие Ада, часть 1",
        number          : "44",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_8"],
        previous_comics : ["comic_besoboy_43"],
        next_comics     : ["comic_besoboy_45"],
        release_at      : {year: 2016, month: 6, day: 1}
    },
    comic_major_grom_44                              : {
        name            : "Майор Гром #44 Загадка сфинкса, часть 3",
        number          : "44",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_8"],
        previous_comics : ["comic_major_grom_43"],
        next_comics     : ["comic_major_grom_45"],
        release_at      : {year: 2016, month: 6, day: 6}
    },
    comic_enoch_44                                   : {
        name            : "Инок #44 Путь к бессмертию, часть 2",
        number          : "44",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_8"],
        previous_comics : ["comic_enoch_43"],
        next_comics     : ["comic_enoch_45"],
        release_at      : {year: 2016, month: 6, day: 10}
    },
    comic_red_fury_44                                : {
        name            : "Красная Фурия #44 Жажда смерти",
        number          : "44",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_8"],
        previous_comics : ["comic_red_fury_43"],
        next_comics     : ["comic_red_fury_45"],
        release_at      : {year: 2016, month: 6, day: 14}
    },
    comic_exlibrium_20                               : {
        name            : "Экслибриум #20 Соль на рану, часть 1",
        number          : "20",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_4"],
        previous_comics : ["comic_exlibrium_19"],
        next_comics     : ["comic_exlibrium_21"],
        release_at      : {year: 2016, month: 6, day: 18}
    },
    comic_meteora_20                                 : {
        name            : "Метеора #20 Охота, часть 2",
        number          : "20",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_4"],
        previous_comics : ["comic_meteora_19"],
        next_comics     : ["comic_meteora_21"],
        release_at      : {year: 2016, month: 6, day: 24}
    },
    comic_besoboy_45                                 : {
        name            : "Бесобой #45 Гончие Ада, часть 2",
        number          : "45",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_8"],
        previous_comics : ["comic_besoboy_44"],
        next_comics     : ["comic_besoboy_46"],
        release_at      : {year: 2016, month: 7, day: 1}
    },
    comic_major_grom_45                              : {
        name            : "Майор Гром #45 Последнее дело, часть 1",
        number          : "45",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_8"],
        previous_comics : ["comic_major_grom_44"],
        next_comics     : ["comic_major_grom_46"],
        release_at      : {year: 2016, month: 7, day: 4}
    },
    comic_besoboy_tome_6                             : {
        name            : "Бесобой том 6: Стая",
        number          : "6",
        type            : "book",
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_34", "comic_besoboy_35", "comic_besoboy_36", "comic_besoboy_37"],
        previous_comics : ["comic_besoboy_tome_5"],
        next_comics     : ["comic_besoboy_tome_7", "comic_time_of_raven"],
        release_at      : {year: 2016, month: 7, day: 4}
    },
    comic_major_grom_tome_6                          : {
        name            : "Майор Гром том 6: Голоса",
        number          : "6",
        type            : "book",
        ranges          : ["range_major_grom"],
        contained_comics: ["comic_major_grom_34", "comic_major_grom_35", "comic_major_grom_36", "comic_major_grom_37"],
        previous_comics : ["comic_major_grom_tome_5"],
        next_comics     : ["comic_major_grom_and_red_fury_tome_7", "comic_time_of_raven"],
        release_at      : {year: 2016, month: 7, day: 4}
    },
    comic_enoch_45                                   : {
        name            : "Инок #45 Путь к бессмертию, часть 3",
        number          : "45",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_8"],
        previous_comics : ["comic_enoch_44"],
        next_comics     : ["comic_enoch_46"],
        release_at      : {year: 2016, month: 7, day: 8}
    },
    comic_ziggi_4                                    : {
        name            : "Зигги: космический хомяк №4. За гранью вселеннной",
        number          : "4",
        type            : "single",
        ranges          : ["range_childrens_comics"],
        including_comics: ["comic_ziggi"],
        previous_comics : ["comic_ziggi_3"],
        next_comics     : ["comic_ziggi_5"],
        release_at      : {year: 2016, month: 7, day: 8}
    },
    comic_ziggi_5                                    : {
        name            : "Зигги: космический хомяк №5. Рок и звёзды",
        number          : "5",
        type            : "single",
        ranges          : ["range_childrens_comics"],
        including_comics: ["comic_ziggi"],
        previous_comics : ["comic_ziggi_4"],
        release_at      : {year: 2016, month: 7, day: 8}
    },
    comic_red_fury_tome_6                            : {
        name            : "Красная Фурия том 6: Башня ворона",
        number          : "6",
        type            : "book",
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_32", "comic_red_fury_33", "comic_red_fury_34", "comic_red_fury_35",
                           "comic_red_fury_36", "comic_red_fury_37"],
        previous_comics : ["comic_red_fury_tome_5"],
        next_comics     : ["comic_major_grom_and_red_fury_tome_7", "comic_time_of_raven"],
        release_at      : {year: 2016, month: 7, day: 8}
    },
    comic_red_fury_45                                : {
        name            : "Красная Фурия #45 Идол",
        number          : "45",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_8"],
        previous_comics : ["comic_red_fury_44"],
        next_comics     : ["comic_red_fury_46"],
        release_at      : {year: 2016, month: 7, day: 15}
    },
    comic_exlibrium_21                               : {
        name            : "Экслибриум #21 Соль на рану, часть 2",
        number          : "21",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_4"],
        previous_comics : ["comic_exlibrium_20"],
        next_comics     : ["comic_exlibrium_22"],
        release_at      : {year: 2016, month: 7, day: 20}
    },
    comic_meteora_21                                 : {
        name            : "Метеора #21 Охота, часть 3",
        number          : "21",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_4"],
        previous_comics : ["comic_meteora_20"],
        next_comics     : ["comic_meteora_22"],
        release_at      : {year: 2016, month: 7, day: 25}
    },
    comic_besoboy_46                                 : {
        name            : "Бесобой #46 Меч и зеркало",
        number          : "46",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_8"],
        previous_comics : ["comic_besoboy_45"],
        next_comics     : ["comic_besoboy_47"],
        release_at      : {year: 2016, month: 8, day: 1}
    },
    comic_major_grom_46                              : {
        name            : "Майор Гром #46 Последнее дело, часть 2",
        number          : "46",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_8"],
        previous_comics : ["comic_major_grom_45"],
        next_comics     : ["comic_major_grom_47"],
        release_at      : {year: 2016, month: 8, day: 5}
    },
    comic_enoch_46                                   : {
        name            : "Инок #46 Игрушечный солдат, часть 1",
        number          : "46",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_8"],
        previous_comics : ["comic_enoch_45"],
        next_comics     : ["comic_enoch_47"],
        release_at      : {year: 2016, month: 8, day: 10}
    },
    comic_red_fury_46                                : {
        name            : "Красная Фурия #46 Сам себе враг, часть 1",
        number          : "46",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_9"],
        previous_comics : ["comic_red_fury_45"],
        next_comics     : ["comic_red_fury_47"],
        release_at      : {year: 2016, month: 8, day: 15}
    },
    comic_exlibrium_22                               : {
        name            : "Экслибриум #22 Соль на рану, часть 3",
        number          : "22",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_4"],
        previous_comics : ["comic_exlibrium_21"],
        next_comics     : ["comic_exlibrium_23"],
        release_at      : {year: 2016, month: 8, day: 19}
    },
    comic_meteora_22                                 : {
        name            : "Метеора #22 Охота, часть 4",
        number          : "22",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_4"],
        previous_comics : ["comic_meteora_21"],
        next_comics     : ["comic_meteora_23"],
        release_at      : {year: 2016, month: 8, day: 25}
    },
    comic_caesar_magnificent                         : {
        name            : "Цезарь великолепный",
        type            : "book",
        ranges          : ["range_alena_spiridonova"],
        contained_comics: ["comic_caesar_magnificent_1", "comic_caesar_magnificent_2", "comic_caesar_magnificent_3",
                           "comic_caesar_magnificent_4", "comic_caesar_magnificent_5"],
        release_at      : {year: 2016, month: 9}
    },
    comic_besoboy_47                                 : {
        name            : "Бесобой #47 Чъреба, часть 1",
        number          : "47",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_9"],
        previous_comics : ["comic_besoboy_46"],
        next_comics     : ["comic_besoboy_48"],
        release_at      : {year: 2016, month: 9, day: 1}
    },
    comic_major_grom_47                              : {
        name            : "Майор Гром #47 Последнее дело, часть 3",
        number          : "47",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_8"],
        previous_comics : ["comic_major_grom_46"],
        next_comics     : ["comic_major_grom_48"],
        release_at      : {year: 2016, month: 9, day: 5}
    },
    comic_enoch_tome_6                               : {
        name            : "Инок том 6: Сердце монстра",
        number          : "6",
        type            : "book",
        ranges          : ["range_enoch"],
        contained_comics: ["comic_enoch_32", "comic_enoch_33", "comic_enoch_34", "comic_enoch_35", "comic_enoch_36",
                           "comic_enoch_37", "comic_enoch_38"],
        previous_comics : ["comic_enoch_tome_5"],
        next_comics     : ["comic_enoch_tome_7"],
        release_at      : {year: 2016, month: 9, day: 5}
    },
    comic_enoch_47                                   : {
        name            : "Инок #47 Игрушечный солдат, часть 2",
        number          : "47",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_8"],
        previous_comics : ["comic_enoch_46"],
        next_comics     : ["comic_enoch_48"],
        release_at      : {year: 2016, month: 9, day: 9}
    },
    comic_red_fury_47                                : {
        name            : "Красная Фурия #47 Сам себе враг, часть 2",
        number          : "47",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_9"],
        previous_comics : ["comic_red_fury_46"],
        next_comics     : ["comic_red_fury_48"],
        release_at      : {year: 2016, month: 9, day: 15}
    },
    comic_exlibrium_23                               : {
        name            : "Экслибриум #23 Жить дальше",
        number          : "23",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_4"],
        previous_comics : ["comic_exlibrium_22"],
        next_comics     : ["comic_exlibrium_24"],
        release_at      : {year: 2016, month: 9, day: 19}
    },
    comic_besoboy_tome_7                             : {
        name            : "Бесобой том 7: Жертвы обстоятельств",
        number          : "7",
        type            : "book",
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_38", "comic_besoboy_39", "comic_besoboy_40", "comic_besoboy_41",
                           "comic_besoboy_42"],
        previous_comics : ["comic_besoboy_tome_6"],
        next_comics     : ["comic_besoboy_tome_8"],
        release_at      : {year: 2016, month: 9, day: 19}
    },
    comic_major_grom_and_red_fury_tome_7             : {
        name            : "Майор Гром и Красная Фурия том 7: В сердце тьмы",
        number          : "7",
        type            : "book",
        ranges          : ["range_major_grom", "range_red_fury", "range_crossovers"],
        contained_comics: ["comic_major_grom_38", "comic_red_fury_38", "comic_major_grom_39", "comic_red_fury_39",
                           "comic_major_grom_40", "comic_red_fury_40", "comic_red_fury_41", "comic_major_grom_41"],
        previous_comics : ["comic_major_grom_tome_6", "comic_red_fury_tome_6"],
        next_comics     : ["comic_red_fury_tome_8", "comic_major_grom_tome_8"],
        release_at      : {year: 2016, month: 9, day: 19}
    },
    comic_enoch_tome_7                               : {
        name            : "Инок том 7: Мёртвая хватка",
        number          : "7",
        type            : "book",
        ranges          : ["range_enoch"],
        contained_comics: ["comic_enoch_39", "comic_enoch_40", "comic_enoch_41", "comic_enoch_42"],
        previous_comics : ["comic_enoch_tome_6"],
        next_comics     : ["comic_enoch_tome_8"],
        release_at      : {year: 2016, month: 9, day: 23}
    },
    comic_meteora_23                                 : {
        name            : "Метеора #23 Откровение",
        number          : "23",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_4"],
        previous_comics : ["comic_meteora_22"],
        next_comics     : ["comic_meteora_24"],
        release_at      : {year: 2016, month: 9, day: 26}
    },
    comic_besoboy_48                                 : {
        name            : "Бесобой #48 Чъреба, часть 2",
        number          : "48",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_9"],
        previous_comics : ["comic_besoboy_47"],
        next_comics     : ["comic_besoboy_49"],
        release_at      : {year: 2016, month: 9, day: 29}
    },
    comic_major_grom_48                              : {
        name            : "Майор Гром #48 Последнее дело, часть 4",
        number          : "48",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_8"],
        previous_comics : ["comic_major_grom_47"],
        next_comics     : ["comic_major_grom_49"],
        release_at      : {year: 2016, month: 9, day: 29}
    },
    comic_exlibrium_tome_3                           : {
        name            : "Экслибриум том 3: Меж трёх огней",
        number          : "3",
        type            : "book",
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_11", "comic_exlibrium_12", "comic_exlibrium_13", "comic_exlibrium_14",
                           "comic_exlibrium_15", "comic_exlibrium_16", "comic_exlibrium_17"],
        previous_comics : ["comic_exlibrium_tome_2"],
        next_comics     : ["comic_time_of_raven_epilogue_book", "comic_exlibrium_tome_4"],
        release_at      : {year: 2016, month: 9, day: 29}
    },
    comic_meteora_tome_3                             : {
        name            : "Метеора том 3: Окончательное решение",
        number          : "3",
        type            : "book",
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_13", "comic_meteora_14", "comic_meteora_15", "comic_meteora_16",
                           "comic_meteora_17"],
        previous_comics : ["comic_meteora_tome_2"],
        next_comics     : ["comic_meteora_tome_4"],
        release_at      : {year: 2016, month: 9, day: 29}
    },
    comic_time_of_raven                              : {
        name            : "Время Ворона",
        type            : "book",
        ranges          : ["range_time_of_raven"],
        contained_comics: ["comic_time_of_raven_prologue", "comic_time_of_raven_1", "comic_time_of_raven_2",
                           "comic_time_of_raven_3", "comic_time_of_raven_4", "comic_time_of_raven_5"],
        previous_comics : ["comic_time_of_raven_backstory_book", "comic_enoch_tome_5", "comic_besoboy_tome_6",
                           "comic_major_grom_tome_6", "comic_red_fury_tome_6"],
        next_comics     : ["comic_time_of_raven_epilogue_book", "comic_besoboy_tome_8"],
        release_at      : {year: 2016, month: 9, day: 29}
    },
    comic_cat_and_mouse_tome_2                       : {
        name           : "Кошки-мышки том 2: Подвиг каждый день",
        number         : "2",
        type           : "single",
        ranges         : ["range_evgeny_fedotov"],
        previous_comics: ["comic_cat_and_mouse_tome_1"],
        next_comics    : ["comic_cat_and_mouse_tome_3"],
        release_at     : {year: 2016, month: 9, day: 29}
    },
    comic_enoch_48                                   : {
        name            : "Инок #48 Рука судьбы, часть 1",
        number          : "48",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_8"],
        previous_comics : ["comic_enoch_47"],
        next_comics     : ["comic_enoch_49"],
        release_at      : {year: 2016, month: 10, day: 10}
    },
    comic_red_fury_48                                : {
        name            : "Красная Фурия #48 Финальный рывок, часть 1",
        number          : "48",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_9"],
        previous_comics : ["comic_red_fury_47"],
        next_comics     : ["comic_red_fury_49"],
        release_at      : {year: 2016, month: 10, day: 14}
    },
    comic_exlibrium_24                               : {
        name            : "Экслибриум #24 Моно",
        number          : "24",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_5"],
        previous_comics : ["comic_exlibrium_23"],
        next_comics     : ["comic_exlibrium_25"],
        release_at      : {year: 2016, month: 10, day: 20}
    },
    comic_meteora_24                                 : {
        name            : "Метеора #24 Охота, часть 6",
        number          : "24",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_4"],
        previous_comics : ["comic_meteora_23"],
        next_comics     : ["comic_meteora_25"],
        release_at      : {year: 2016, month: 10, day: 24}
    },
    comic_besoboy_49                                 : {
        name            : "Бесобой #49 И ад следовал за ним, часть 1",
        number          : "49",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_9"],
        previous_comics : ["comic_besoboy_48"],
        next_comics     : ["comic_besoboy_50"],
        release_at      : {year: 2016, month: 10, day: 29}
    },
    comic_major_grom_49                              : {
        name            : "Майор Гром #49 Последнее дело, часть 5",
        number          : "49",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_8"],
        previous_comics : ["comic_major_grom_48"],
        next_comics     : ["comic_major_grom_50"],
        release_at      : {year: 2016, month: 11, day: 4}
    },
    comic_enoch_49                                   : {
        name            : "Инок #49 Рука судьбы, часть 2",
        number          : "49",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_8"],
        previous_comics : ["comic_enoch_48"],
        next_comics     : ["comic_enoch_50"],
        release_at      : {year: 2016, month: 11, day: 10}
    },
    comic_red_fury_49                                : {
        name            : "Красная Фурия #49 Финальный рывок, часть 2",
        number          : "49",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_9"],
        previous_comics : ["comic_red_fury_48"],
        next_comics     : ["comic_red_fury_50"],
        release_at      : {year: 2016, month: 11, day: 14}
    },
    comic_exlibrium_25                               : {
        name            : "Экслибриум #25 Вот дом, который..., часть 1",
        number          : "25",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_5"],
        previous_comics : ["comic_exlibrium_24"],
        next_comics     : ["comic_exlibrium_26"],
        release_at      : {year: 2016, month: 11, day: 21}
    },
    comic_meteora_25                                 : {
        name            : "Метеора #25 Я помню",
        number          : "25",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_4"],
        previous_comics : ["comic_meteora_24"],
        next_comics     : ["comic_meteora_26"],
        release_at      : {year: 2016, month: 11, day: 25}
    },
    comic_besoboy_tome_8                             : {
        name            : "Бесобой том 8: Гончие Ада",
        number          : "8",
        type            : "book",
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_43", "comic_besoboy_44", "comic_besoboy_45", "comic_besoboy_46"],
        previous_comics : ["comic_besoboy_tome_7", "comic_time_of_raven"],
        next_comics     : ["comic_besoboy_tome_9"],
        release_at      : {year: 2016, month: 12, day: 15}
    },
    comic_exlibrium_26                               : {
        name            : "Экслибриум #26 Вот дом, который..., часть 2",
        number          : "26",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_5"],
        previous_comics : ["comic_exlibrium_25"],
        next_comics     : ["comic_exlibrium_27"],
        release_at      : {year: 2016, month: 12, day: 19}
    },
    comic_besoboy_50                                 : {
        name            : "Бесобой #50 И ад следовал за ним, часть 2",
        number          : "50",
        type            : "single",
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_tome_9"],
        previous_comics : ["comic_besoboy_49"],
        next_comics     : ["comic_besoboy_vol_2_1", "comic_black_dog_1", "comic_yarkh_step_forward_1",
                           "comic_balor_and_yana_dream_catcher_single"],
        release_at      : {year: 2016, month: 12, day: 24}
    },
    comic_major_grom_50                              : {
        name            : "Майор Гром #50 Последнее дело, часть 6",
        number          : "50",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_tome_8"],
        previous_comics : ["comic_major_grom_49"],
        next_comics     : ["comic_igor_grom_1", "comic_major_grom_chance_single", "comic_dubin_dima_1",
                           "comic_major_grom_promise", "comic_major_grom_1939_single",
                           "comic_major_grom_like_in_war_1"],
        release_at      : {year: 2016, month: 12, day: 24}
    },
    comic_enoch_50                                   : {
        name            : "Инок #50 Всё, что останется",
        number          : "50",
        type            : "single",
        ranges          : ["range_enoch"],
        including_comics: ["comic_enoch_tome_8"],
        previous_comics : ["comic_enoch_49"],
        next_comics     : ["comic_chronicles_of_enoch_single", "comic_planeswalkers_1", "comic_master_single"],
        release_at      : {year: 2016, month: 12, day: 24}
    },
    comic_red_fury_50                                : {
        name            : "Красная Фурия #50 Финальный рывок, часть 3",
        number          : "50",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_tome_9"],
        previous_comics : ["comic_red_fury_49"],
        next_comics     : ["comic_allies_1"],
        release_at      : {year: 2016, month: 12, day: 24}
    },
    comic_meteora_26                                 : {
        name            : "Метеора #26 Конкуренты, часть 1",
        number          : "26",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_5"],
        previous_comics : ["comic_meteora_25"],
        next_comics     : ["comic_meteora_27"],
        release_at      : {year: 2016, month: 12, day: 24}
    },
    comic_red_fury_tome_8                            : {
        name            : "Красная Фурия том 8: Агент Симмонс",
        number          : "8",
        type            : "book",
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_42", "comic_red_fury_43", "comic_red_fury_44", "comic_red_fury_45"],
        previous_comics : ["comic_time_of_raven_epilogue_book", "comic_major_grom_and_red_fury_tome_7"],
        next_comics     : ["comic_red_fury_tome_9"],
        release_at      : {year: 2016, month: 12, day: 24}
    },
    comic_ziggi                                      : {
        name            : "Зигги: Космический хомяк",
        type            : "book",
        ranges          : ["range_childrens_comics"],
        contained_comics: ["comic_ziggi_1", "comic_ziggi_2", "comic_ziggi_3", "comic_ziggi_4", "comic_ziggi_5"],
        release_at      : {year: 2016, month: 12, day: 24}
    },
    comic_tipping_point                              : {
        name      : "Точка невозврата",
        type      : "single",
        ranges    : ["range_tipping_point"],
        release_at: {year: 2016, month: 12, day: 24}
    },
    comic_besoboy_vol_2_1                            : {
        name            : "Бесобой Vol.2 #1 Исход, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_book_1", "comic_besoboy_vol_2_tome_1"],
        previous_comics : ["comic_besoboy_50"],
        next_comics     : ["comic_besoboy_vol_2_2"],
        release_at      : {year: 2017, month: 1, day: 20}
    },
    comic_igor_grom_1                                : {
        name            : "Игорь Гром #1 Находится на реконструкции, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_book_1", "comic_igor_grom_tome_1"],
        previous_comics : ["comic_major_grom_50"],
        next_comics     : ["comic_igor_grom_2"],
        release_at      : {year: 2017, month: 1, day: 20}
    },
    comic_planeswalkers_1                            : {
        name            : "Мироходцы #1 Кровь богов, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_book_1", "comic_planeswalkers_tome_1"],
        previous_comics : ["comic_enoch_50"],
        next_comics     : ["comic_planeswalkers_2"],
        release_at      : {year: 2017, month: 1, day: 20}
    },
    comic_allies_1                                   : {
        name            : "Союзники #1 Перед рассветом, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_book_1", "comic_allies_tome_1"],
        previous_comics : ["comic_red_fury_50"],
        next_comics     : ["comic_allies_2"],
        release_at      : {year: 2017, month: 1, day: 20}
    },
    comic_exlibrium_27                               : {
        name            : "Экслибриум #27 С новым счастьем",
        number          : "27",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_5"],
        previous_comics : ["comic_exlibrium_26"],
        next_comics     : ["comic_exlibrium_28"],
        release_at      : {year: 2017, month: 1, day: 20}
    },
    comic_meteora_27                                 : {
        name            : "Метеора #27 Конкуренты, часть 2",
        number          : "27",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_5"],
        previous_comics : ["comic_meteora_26"],
        next_comics     : ["comic_meteora_28"],
        release_at      : {year: 2017, month: 1, day: 23}
    },
    comic_allies_2                                   : {
        name            : "Союзники #2 Перед рассветом, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_book_1", "comic_allies_tome_1"],
        previous_comics : ["comic_allies_1"],
        next_comics     : ["comic_allies_3"],
        release_at      : {year: 2017, month: 2, day: 1}
    },
    comic_besoboy_vol_2_2                            : {
        name            : "Бесобой Vol.2 #2 Исход, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_book_1", "comic_besoboy_vol_2_tome_1"],
        previous_comics : ["comic_besoboy_vol_2_1"],
        next_comics     : ["comic_besoboy_vol_2_3"],
        release_at      : {year: 2017, month: 2, day: 6}
    },
    comic_igor_grom_2                                : {
        name            : "Игорь Гром #2 Находится на реконструкции, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_book_1", "comic_igor_grom_tome_1"],
        previous_comics : ["comic_igor_grom_1"],
        next_comics     : ["comic_igor_grom_3"],
        release_at      : {year: 2017, month: 2, day: 10}
    },
    comic_planeswalkers_2                            : {
        name            : "Мироходцы #2 Кровь богов, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_book_1", "comic_planeswalkers_tome_1"],
        previous_comics : ["comic_planeswalkers_1"],
        next_comics     : ["comic_planeswalkers_3"],
        release_at      : {year: 2017, month: 2, day: 14}
    },
    comic_major_grom_chance_single                   : {
        name            : "Майор Гром: Шанс",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_chance_book"],
        previous_comics : ["comic_major_grom_50"],
        release_at      : {year: 2017, month: 2, day: 15}
    },
    comic_major_grom_chance_book                     : {
        name            : "Майор Гром: Шанс",
        type            : "book",
        ranges          : ["range_major_grom"],
        contained_comics: ["comic_major_grom_chance_single"],
        previous_comics : ["comic_major_grom_tome_8"],
        release_at      : {year: 2017, month: 2, day: 15}
    },
    comic_exlibrium_28                               : {
        name            : "Экслибриум #28 Невинная история, часть 1",
        number          : "28",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_5"],
        previous_comics : ["comic_exlibrium_27"],
        next_comics     : ["comic_exlibrium_29"],
        release_at      : {year: 2017, month: 2, day: 20}
    },
    comic_meteora_28                                 : {
        name            : "Метеора #28 Одной крови",
        number          : "28",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_5"],
        previous_comics : ["comic_meteora_27"],
        next_comics     : ["comic_meteora_29"],
        release_at      : {year: 2017, month: 2, day: 23}
    },
    comic_allies_3                                   : {
        name            : "Союзники #3 Перед рассветом, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_book_1", "comic_allies_tome_1"],
        previous_comics : ["comic_allies_2"],
        next_comics     : ["comic_allies_4"],
        release_at      : {year: 2017, month: 3, day: 1}
    },
    comic_besoboy_vol_2_3                            : {
        name            : "Бесобой Vol.2 #3 Исход, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_book_1", "comic_besoboy_vol_2_tome_1"],
        previous_comics : ["comic_besoboy_vol_2_2"],
        next_comics     : ["comic_besoboy_vol_2_4"],
        release_at      : {year: 2017, month: 3, day: 6}
    },
    comic_igor_grom_3                                : {
        name            : "Игорь Гром #3 Находится на реконструкции, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_book_1", "comic_igor_grom_tome_1"],
        previous_comics : ["comic_igor_grom_2"],
        next_comics     : ["comic_igor_grom_4"],
        release_at      : {year: 2017, month: 3, day: 10}
    },
    comic_planeswalkers_3                            : {
        name            : "Мироходцы #3 Кровь богов, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_book_1", "comic_planeswalkers_tome_1"],
        previous_comics : ["comic_planeswalkers_2"],
        next_comics     : ["comic_planeswalkers_4"],
        release_at      : {year: 2017, month: 3, day: 14}
    },
    comic_exlibrium_29                               : {
        name            : "Экслибриум #29 Невинная история, часть 2",
        number          : "29",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_5"],
        previous_comics : ["comic_exlibrium_28"],
        next_comics     : ["comic_exlibrium_30"],
        release_at      : {year: 2017, month: 3, day: 20}
    },
    comic_meteora_29                                 : {
        name            : "Метеора #29 Мышка и кракен",
        number          : "29",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_5"],
        previous_comics : ["comic_meteora_28"],
        next_comics     : ["comic_meteora_30"],
        release_at      : {year: 2017, month: 3, day: 24}
    },
    comic_allies_4                                   : {
        name            : "Союзники #4 Перед рассветом, часть 4",
        number          : "4",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_book_1", "comic_allies_tome_1"],
        previous_comics : ["comic_allies_3"],
        next_comics     : ["comic_allies_5"],
        release_at      : {year: 2017, month: 3, day: 31}
    },
    comic_igor_ugor_tome_1                           : {
        name       : "Игорь Угорь. Том 1",
        number     : "1",
        type       : "book",
        ranges     : ["range_igor_ugor"],
        next_comics: ["comic_igor_ugor_tome_2"],
        release_at : {year: 2017, month: 4, day: 1}
    },
    comic_besoboy_vol_2_4                            : {
        name            : "Бесобой Vol.2 #4 Исход, часть 4",
        number          : "4",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_book_1", "comic_besoboy_vol_2_tome_1"],
        previous_comics : ["comic_besoboy_vol_2_3"],
        next_comics     : ["comic_besoboy_vol_2_5"],
        release_at      : {year: 2017, month: 4, day: 5}
    },
    comic_igor_grom_4                                : {
        name            : "Игорь Гром #4 Дикая охота, часть 1",
        number          : "4",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_book_1", "comic_igor_grom_tome_1"],
        previous_comics : ["comic_igor_grom_3"],
        next_comics     : ["comic_igor_grom_5"],
        release_at      : {year: 2017, month: 4, day: 10}
    },
    comic_planeswalkers_4                            : {
        name            : "Мироходцы #4 Каменный взгляд, часть 1",
        number          : "4",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_book_1", "comic_planeswalkers_tome_1"],
        previous_comics : ["comic_planeswalkers_3"],
        next_comics     : ["comic_planeswalkers_5"],
        release_at      : {year: 2017, month: 4, day: 14}
    },
    comic_exlibrium_30                               : {
        name            : "Экслибриум #30 Бумажный порез, часть 1",
        number          : "30",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_6"],
        previous_comics : ["comic_exlibrium_29"],
        next_comics     : ["comic_exlibrium_31"],
        release_at      : {year: 2017, month: 4, day: 20}
    },
    comic_meteora_30                                 : {
        name            : "Метеора #30 Что есть имя",
        number          : "30",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_5"],
        previous_comics : ["comic_meteora_29"],
        next_comics     : ["comic_meteora_31"],
        release_at      : {year: 2017, month: 4, day: 24}
    },
    comic_allies_5                                   : {
        name            : "Союзники #5 Естественный отбор, часть 1",
        number          : "5",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_book_2", "comic_allies_tome_2"],
        previous_comics : ["comic_allies_4"],
        next_comics     : ["comic_allies_6"],
        release_at      : {year: 2017, month: 5, day: 2}
    },
    comic_besoboy_vol_2_5                            : {
        name            : "Бесобой Vol.2 #5 Исход, часть 5",
        number          : "5",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_book_1", "comic_besoboy_vol_2_tome_1"],
        previous_comics : ["comic_besoboy_vol_2_4"],
        next_comics     : ["comic_besoboy_vol_2_6"],
        release_at      : {year: 2017, month: 5, day: 5}
    },
    comic_igor_grom_5                                : {
        name            : "Игорь Гром #5 Дикая охота, часть 2",
        number          : "5",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_book_1", "comic_igor_grom_tome_1"],
        previous_comics : ["comic_igor_grom_4"],
        next_comics     : ["comic_igor_grom_6"],
        release_at      : {year: 2017, month: 5, day: 10}
    },
    comic_besoboy_tome_9                             : {
        name            : "Бесобой том 9: Чъреба",
        number          : "9",
        type            : "book",
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_47", "comic_besoboy_48", "comic_besoboy_49", "comic_besoboy_50"],
        previous_comics : ["comic_besoboy_tome_8"],
        next_comics     : ["comic_besoboy_vol_2_book_1", "comic_besoboy_vol_2_tome_1", "comic_black_dog",
                           "comic_yarkh_step_forward", "comic_balor_and_yana_dream_catcher_book"],
        release_at      : {year: 2017, month: 5, day: 12}
    },
    comic_planeswalkers_5                            : {
        name            : "Мироходцы #5 Каменный взгляд, часть 2",
        number          : "5",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_book_1", "comic_planeswalkers_tome_1"],
        previous_comics : ["comic_planeswalkers_4"],
        next_comics     : ["comic_planeswalkers_6"],
        release_at      : {year: 2017, month: 5, day: 15}
    },
    comic_exlibrium_31                               : {
        name            : "Экслибриум #31 Бумажный порез, часть 2",
        number          : "31",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_6"],
        previous_comics : ["comic_exlibrium_30"],
        next_comics     : ["comic_exlibrium_32"],
        release_at      : {year: 2017, month: 5, day: 19}
    },
    comic_meteora_31                                 : {
        name            : "Метеора #31 Проверка пульса, часть 1",
        number          : "31",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_6"],
        previous_comics : ["comic_meteora_30"],
        next_comics     : ["comic_meteora_32"],
        release_at      : {year: 2017, month: 5, day: 25}
    },
    comic_allies_6                                   : {
        name            : "Союзники #6 Естественный отбор, часть 2",
        number          : "6",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_book_2", "comic_allies_tome_2"],
        previous_comics : ["comic_allies_5"],
        next_comics     : ["comic_allies_7"],
        release_at      : {year: 2017, month: 6, day: 1}
    },
    comic_major_grom_tome_8                          : {
        name            : "Майор Гром том 8: Последнее дело",
        number          : "8",
        type            : "book",
        ranges          : ["range_major_grom"],
        contained_comics: ["comic_major_grom_42", "comic_major_grom_43", "comic_major_grom_44", "comic_major_grom_45",
                           "comic_major_grom_46", "comic_major_grom_47", "comic_major_grom_48", "comic_major_grom_49",
                           "comic_major_grom_50"],
        previous_comics : ["comic_time_of_raven_epilogue_book", "comic_major_grom_and_red_fury_tome_7"],
        next_comics     : ["comic_major_grom_chance_book", "comic_igor_grom_book_1", "comic_igor_grom_tome_1",
                           "comic_dubin_dima", "comic_major_grom_promise", "comic_major_grom_1939_book",
                           "comic_major_grom_like_in_war"],
        release_at      : {year: 2017, month: 6, day: 1}
    },
    comic_enoch_tome_8                               : {
        name            : "Инок том 8: Путь к бессмертию",
        number          : "8",
        type            : "book",
        ranges          : ["range_enoch"],
        contained_comics: ["comic_enoch_43", "comic_enoch_44", "comic_enoch_45", "comic_enoch_46", "comic_enoch_47",
                           "comic_enoch_48", "comic_enoch_49", "comic_enoch_50"],
        previous_comics : ["comic_time_of_raven_epilogue_book", "comic_enoch_tome_7"],
        next_comics     : ["comic_chronicles_of_enoch_book", "comic_planeswalkers_book_1", "comic_planeswalkers_tome_1",
                           "comic_master_book"],
        release_at      : {year: 2017, month: 6, day: 1}
    },
    comic_besoboy_vol_2_6                            : {
        name            : "Бесобой Vol.2 #6 Мастер войны, часть 1",
        number          : "6",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_tome_2"],
        previous_comics : ["comic_besoboy_vol_2_5"],
        next_comics     : ["comic_besoboy_vol_2_7"],
        release_at      : {year: 2017, month: 6, day: 5}
    },
    comic_igor_grom_6                                : {
        name            : "Игорь Гром #6 Дикая охота, часть 3",
        number          : "6",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_book_1", "comic_igor_grom_tome_1"],
        previous_comics : ["comic_igor_grom_5"],
        next_comics     : ["comic_igor_grom_7"],
        release_at      : {year: 2017, month: 6, day: 10}
    },
    comic_red_fury_tome_9                            : {
        name            : "Красная Фурия том 9: Финальный рывок",
        number          : "9",
        type            : "book",
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_46", "comic_red_fury_47", "comic_red_fury_48", "comic_red_fury_49",
                           "comic_red_fury_50"],
        previous_comics : ["comic_red_fury_tome_8"],
        next_comics     : ["comic_allies_book_1", "comic_allies_tome_1"],
        release_at      : {year: 2017, month: 6, day: 10}
    },
    comic_planeswalkers_6                            : {
        name            : "Мироходцы #6 Каменный взгляд, часть 3",
        number          : "6",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_book_1", "comic_planeswalkers_tome_1"],
        previous_comics : ["comic_planeswalkers_5"],
        next_comics     : ["comic_planeswalkers_7"],
        release_at      : {year: 2017, month: 6, day: 15}
    },
    comic_exlibrium_32                               : {
        name            : "Экслибриум #32 Морок, часть 1",
        number          : "32",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_6"],
        previous_comics : ["comic_exlibrium_31"],
        next_comics     : ["comic_exlibrium_33"],
        release_at      : {year: 2017, month: 6, day: 20}
    },
    comic_meteora_32                                 : {
        name            : "Метеора #32 Проверка пульса, часть 2",
        number          : "32",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_6"],
        previous_comics : ["comic_meteora_31"],
        next_comics     : ["comic_meteora_33"],
        release_at      : {year: 2017, month: 6, day: 26}
    },
    comic_allies_7                                   : {
        name            : "Союзники #7 Естественный отбор, часть 3",
        number          : "7",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_book_2", "comic_allies_tome_2"],
        previous_comics : ["comic_allies_6"],
        next_comics     : ["comic_allies_8"],
        release_at      : {year: 2017, month: 6, day: 30}
    },
    comic_friends_comics_1                           : {
        name            : "ДружКомикс #1",
        number          : "1",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        next_comics     : ["comic_friends_comics_2"],
        release_at      : {year: 2017, month: 7, day: 3}
    },
    comic_besoboy_vol_2_7                            : {
        name            : "Бесобой Vol.2 #7 Мастер войны, часть 2",
        number          : "7",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_tome_2"],
        previous_comics : ["comic_besoboy_vol_2_6"],
        next_comics     : ["comic_besoboy_vol_2_8"],
        release_at      : {year: 2017, month: 7, day: 5}
    },
    comic_friends_comics_2                           : {
        name            : "ДружКомикс #2",
        number          : "2",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_1"],
        next_comics     : ["comic_friends_comics_3"],
        release_at      : {year: 2017, month: 7, day: 5}
    },
    comic_friends_comics_3                           : {
        name            : "ДружКомикс #3",
        number          : "3",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_2"],
        next_comics     : ["comic_friends_comics_4"],
        release_at      : {year: 2017, month: 7, day: 7}
    },
    comic_igor_grom_7                                : {
        name            : "Игорь Гром #7 Голодные духи, часть 1",
        number          : "7",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_book_2", "comic_igor_grom_tome_2"],
        previous_comics : ["comic_igor_grom_6"],
        next_comics     : ["comic_igor_grom_8"],
        release_at      : {year: 2017, month: 7, day: 10}
    },
    comic_friends_comics_4                           : {
        name            : "ДружКомикс #4",
        number          : "4",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_3"],
        next_comics     : ["comic_friends_comics_5"],
        release_at      : {year: 2017, month: 7, day: 10}
    },
    comic_friends_comics_5                           : {
        name            : "ДружКомикс #5",
        number          : "5",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_4"],
        next_comics     : ["comic_friends_comics_6"],
        release_at      : {year: 2017, month: 7, day: 12}
    },
    comic_planeswalkers_7                            : {
        name            : "Мироходцы #7 Луна, часть 1",
        number          : "7",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_book_2", "comic_planeswalkers_tome_2"],
        previous_comics : ["comic_planeswalkers_6"],
        next_comics     : ["comic_planeswalkers_8"],
        release_at      : {year: 2017, month: 7, day: 15}
    },
    comic_friends_comics_6                           : {
        name            : "ДружКомикс #6",
        number          : "6",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_5"],
        next_comics     : ["comic_friends_comics_7"],
        release_at      : {year: 2017, month: 7, day: 17}
    },
    comic_friends_comics_7                           : {
        name            : "ДружКомикс #7",
        number          : "7",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_6"],
        next_comics     : ["comic_friends_comics_8"],
        release_at      : {year: 2017, month: 7, day: 19}
    },
    comic_exlibrium_33                               : {
        name            : "Экслибриум #33 Морок, часть 2",
        number          : "33",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_6"],
        previous_comics : ["comic_exlibrium_32"],
        next_comics     : ["comic_exlibrium_34"],
        release_at      : {year: 2017, month: 7, day: 20}
    },
    comic_friends_comics_8                           : {
        name            : "ДружКомикс #8",
        number          : "8",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_7"],
        next_comics     : ["comic_friends_comics_9"],
        release_at      : {year: 2017, month: 7, day: 21}
    },
    comic_friends_comics_9                           : {
        name            : "ДружКомикс #9",
        number          : "9",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_8"],
        next_comics     : ["comic_friends_comics_10"],
        release_at      : {year: 2017, month: 7, day: 24}
    },
    comic_meteora_33                                 : {
        name            : "Метеора #33 Проверка пульса, часть 3",
        number          : "33",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_6"],
        previous_comics : ["comic_meteora_32"],
        next_comics     : ["comic_meteora_34"],
        release_at      : {year: 2017, month: 7, day: 25}
    },
    comic_friends_comics_10                          : {
        name            : "ДружКомикс #10",
        number          : "10",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_9"],
        next_comics     : ["comic_friends_comics_11"],
        release_at      : {year: 2017, month: 7, day: 27}
    },
    comic_exlibrium_tome_4                           : {
        name            : "Экслибриум том 4: Соль на рану",
        number          : "4",
        type            : "book",
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_18", "comic_exlibrium_19", "comic_exlibrium_20", "comic_exlibrium_21",
                           "comic_exlibrium_22", "comic_exlibrium_23"],
        previous_comics : ["comic_time_of_raven_epilogue_book", "comic_exlibrium_tome_3"],
        next_comics     : ["comic_exlibrium_tome_5"],
        release_at      : {year: 2017, month: 7, day: 28}
    },
    comic_meteora_tome_4                             : {
        name            : "Метеора том 4: Охота",
        number          : "4",
        type            : "book",
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_18", "comic_meteora_19", "comic_meteora_20", "comic_meteora_21",
                           "comic_meteora_22", "comic_meteora_23", "comic_meteora_24", "comic_meteora_25"],
        previous_comics : ["comic_meteora_tome_3"],
        next_comics     : ["comic_meteora_tome_5"],
        release_at      : {year: 2017, month: 7, day: 28}
    },
    comic_friends_comics_11                          : {
        name            : "ДружКомикс #11",
        number          : "11",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_10"],
        next_comics     : ["comic_friends_comics_12"],
        release_at      : {year: 2017, month: 7, day: 31}
    },
    comic_allies_8                                   : {
        name            : "Союзники #8 Условный рефлекс, часть 1",
        number          : "8",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_book_2", "comic_allies_tome_2"],
        previous_comics : ["comic_allies_7"],
        next_comics     : ["comic_allies_9"],
        release_at      : {year: 2017, month: 8, day: 1}
    },
    comic_friends_comics_12                          : {
        name            : "ДружКомикс #12",
        number          : "12",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_11"],
        next_comics     : ["comic_friends_comics_13"],
        release_at      : {year: 2017, month: 8, day: 2}
    },
    comic_friends_comics_13                          : {
        name            : "ДружКомикс #13",
        number          : "13",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_12"],
        next_comics     : ["comic_friends_comics_14"],
        release_at      : {year: 2017, month: 8, day: 4}
    },
    comic_besoboy_vol_2_8                            : {
        name            : "Бесобой Vol.2 #8 Падение, часть 1",
        number          : "8",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_tome_2"],
        previous_comics : ["comic_besoboy_vol_2_7"],
        next_comics     : ["comic_besoboy_vol_2_9"],
        release_at      : {year: 2017, month: 8, day: 5}
    },
    comic_friends_comics_14                          : {
        name            : "ДружКомикс #14",
        number          : "14",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_13"],
        next_comics     : ["comic_friends_comics_15"],
        release_at      : {year: 2017, month: 8, day: 7}
    },
    comic_friends_comics_15                          : {
        name            : "ДружКомикс #15",
        number          : "15",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_14"],
        next_comics     : ["comic_friends_comics_16"],
        release_at      : {year: 2017, month: 8, day: 9}
    },
    comic_igor_grom_8                                : {
        name            : "Игорь Гром #8 Голодные духи, часть 2",
        number          : "8",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_book_2", "comic_igor_grom_tome_2"],
        previous_comics : ["comic_igor_grom_7"],
        next_comics     : ["comic_igor_grom_9"],
        release_at      : {year: 2017, month: 8, day: 10}
    },
    comic_friends_comics_16                          : {
        name            : "ДружКомикс #16",
        number          : "16",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_15"],
        next_comics     : ["comic_friends_comics_17"],
        release_at      : {year: 2017, month: 8, day: 11}
    },
    comic_friends_comics_17                          : {
        name            : "ДружКомикс #17",
        number          : "17",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_16"],
        next_comics     : ["comic_friends_comics_18"],
        release_at      : {year: 2017, month: 8, day: 14}
    },
    comic_planeswalkers_8                            : {
        name            : "Мироходцы #8 Луна, часть 2",
        number          : "8",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_book_2", "comic_planeswalkers_tome_2"],
        previous_comics : ["comic_planeswalkers_7"],
        next_comics     : ["comic_planeswalkers_9"],
        release_at      : {year: 2017, month: 8, day: 15}
    },
    comic_friends_comics_18                          : {
        name            : "ДружКомикс #18",
        number          : "18",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_17"],
        next_comics     : ["comic_friends_comics_19"],
        release_at      : {year: 2017, month: 8, day: 16}
    },
    comic_exlibrium_34                               : {
        name            : "Экслибриум #34 Морок, часть 3",
        number          : "34",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_6"],
        previous_comics : ["comic_exlibrium_33"],
        next_comics     : ["comic_exlibrium_35"],
        release_at      : {year: 2017, month: 8, day: 21}
    },
    comic_friends_comics_19                          : {
        name            : "ДружКомикс #19",
        number          : "19",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_18"],
        next_comics     : ["comic_friends_comics_20"],
        release_at      : {year: 2017, month: 8, day: 21}
    },
    comic_friends_comics_20                          : {
        name            : "ДружКомикс #20",
        number          : "20",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_19"],
        next_comics     : ["comic_friends_comics_21"],
        release_at      : {year: 2017, month: 8, day: 23}
    },
    comic_meteora_34                                 : {
        name            : "Метеора #34 Проверка пульса, часть 4",
        number          : "34",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_6"],
        previous_comics : ["comic_meteora_33"],
        next_comics     : ["comic_meteora_35"],
        release_at      : {year: 2017, month: 8, day: 25}
    },
    comic_friends_comics_21                          : {
        name            : "ДружКомикс #21",
        number          : "21",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_20"],
        next_comics     : ["comic_friends_comics_22"],
        release_at      : {year: 2017, month: 8, day: 25}
    },
    comic_friends_comics_22                          : {
        name            : "ДружКомикс #22",
        number          : "22",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_21"],
        next_comics     : ["comic_friends_comics_23"],
        release_at      : {year: 2017, month: 8, day: 28}
    },
    comic_friends_comics_23                          : {
        name            : "ДружКомикс #23",
        number          : "23",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_22"],
        next_comics     : ["comic_friends_comics_24"],
        release_at      : {year: 2017, month: 8, day: 30}
    },
    comic_allies_9                                   : {
        name            : "Союзники #9 Условный рефлекс, часть 2",
        number          : "9",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_book_2", "comic_allies_tome_2"],
        previous_comics : ["comic_allies_8"],
        next_comics     : ["comic_allies_10"],
        release_at      : {year: 2017, month: 9, day: 1}
    },
    comic_friends_comics_24                          : {
        name            : "ДружКомикс #24",
        number          : "24",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_23"],
        next_comics     : ["comic_friends_comics_25"],
        release_at      : {year: 2017, month: 9, day: 1}
    },
    comic_friends_comics_25                          : {
        name            : "ДружКомикс #25",
        number          : "25",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_24"],
        next_comics     : ["comic_friends_comics_26"],
        release_at      : {year: 2017, month: 9, day: 4}
    },
    comic_besoboy_vol_2_9                            : {
        name            : "Бесобой Vol.2 #9 Падение, часть 2",
        number          : "9",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_tome_2"],
        previous_comics : ["comic_besoboy_vol_2_8"],
        next_comics     : ["comic_besoboy_vol_2_10"],
        release_at      : {year: 2017, month: 9, day: 5}
    },
    comic_friends_comics_26                          : {
        name            : "ДружКомикс #26",
        number          : "26",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_25"],
        next_comics     : ["comic_friends_comics_27"],
        release_at      : {year: 2017, month: 9, day: 6}
    },
    comic_friends_comics_27                          : {
        name            : "ДружКомикс #27",
        number          : "27",
        type            : "single",
        ranges          : ["range_friends_comics"],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_26"],
        release_at      : {year: 2017, month: 9, day: 8}
    },
    comic_igor_grom_9                                : {
        name            : "Игорь Гром #9 Голодные духи, часть 3",
        number          : "9",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_book_2", "comic_igor_grom_tome_2"],
        previous_comics : ["comic_igor_grom_8"],
        next_comics     : ["comic_igor_grom_10"],
        release_at      : {year: 2017, month: 9, day: 11}
    },
    comic_planeswalkers_9                            : {
        name            : "Мироходцы #9 Луна, часть 3",
        number          : "9",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_book_2", "comic_planeswalkers_tome_2"],
        previous_comics : ["comic_planeswalkers_8"],
        next_comics     : ["comic_planeswalkers_10"],
        release_at      : {year: 2017, month: 9, day: 15}
    },
    comic_exlibrium_35                               : {
        name            : "Экслибриум #35 Хозяйка дорог, часть 1",
        number          : "35",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_7"],
        previous_comics : ["comic_exlibrium_34"],
        next_comics     : ["comic_exlibrium_36"],
        release_at      : {year: 2017, month: 9, day: 20}
    },
    comic_meteora_35                                 : {
        name            : "Метеора #35 Танцуй, Серебристая леди",
        number          : "35",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_6"],
        previous_comics : ["comic_meteora_34"],
        next_comics     : ["comic_meteora_36"],
        release_at      : {year: 2017, month: 9, day: 25}
    },
    comic_black_dog_1                                : {
        name            : "Чёрный Пёс: Своё время, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_besoboy", "range_bubble_legends"],
        including_comics: ["comic_black_dog"],
        previous_comics : ["comic_besoboy_50"],
        next_comics     : ["comic_black_dog_2"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_besoboy_vol_2_book_1                       : {
        name            : "Бесобой Vol.2. Книга 1: Исход",
        number          : "1",
        type            : "hardcover_book",
        ranges          : ["range_besoboy_vol_2"],
        contained_comics: ["comic_besoboy_vol_2_1", "comic_besoboy_vol_2_2", "comic_besoboy_vol_2_3",
                           "comic_besoboy_vol_2_4", "comic_besoboy_vol_2_5"],
        previous_comics : ["comic_besoboy_tome_9"],
        next_comics     : ["comic_besoboy_vol_2_book_2"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_besoboy_vol_2_tome_1                       : {
        name            : "Бесобой Vol.2 том 1: Исход",
        number          : "1",
        type            : "book",
        ranges          : ["range_besoboy_vol_2"],
        contained_comics: ["comic_besoboy_vol_2_1", "comic_besoboy_vol_2_2", "comic_besoboy_vol_2_3",
                           "comic_besoboy_vol_2_4", "comic_besoboy_vol_2_5"],
        previous_comics : ["comic_besoboy_tome_9"],
        next_comics     : ["comic_besoboy_vol_2_tome_2"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_igor_grom_book_1                           : {
        name            : "Игорь Гром. Книга 1: Находится на реконструкции",
        number          : "1",
        type            : "hardcover_book",
        ranges          : ["range_igor_grom"],
        contained_comics: ["comic_igor_grom_1", "comic_igor_grom_2", "comic_igor_grom_3", "comic_igor_grom_4",
                           "comic_igor_grom_5", "comic_igor_grom_6"],
        previous_comics : ["comic_major_grom_tome_8"],
        next_comics     : ["comic_igor_grom_book_2"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_igor_grom_tome_1                           : {
        name            : "Игорь Гром том 1: Находится на реконструкции",
        number          : "1",
        type            : "book",
        ranges          : ["range_igor_grom"],
        contained_comics: ["comic_igor_grom_1", "comic_igor_grom_2", "comic_igor_grom_3", "comic_igor_grom_4",
                           "comic_igor_grom_5", "comic_igor_grom_6"],
        previous_comics : ["comic_major_grom_tome_8"],
        next_comics     : ["comic_igor_grom_tome_2"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_allies_book_1                              : {
        name            : "Союзники. Книга 1: Перед рассветом",
        number          : "1",
        type            : "hardcover_book",
        ranges          : ["range_allies"],
        contained_comics: ["comic_allies_1", "comic_allies_2", "comic_allies_3", "comic_allies_4"],
        previous_comics : ["comic_red_fury_tome_9"],
        next_comics     : ["comic_allies_book_2"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_allies_tome_1                              : {
        name            : "Союзники том 1: Перед рассветом",
        number          : "1",
        type            : "book",
        ranges          : ["range_allies"],
        contained_comics: ["comic_allies_1", "comic_allies_2", "comic_allies_3", "comic_allies_4"],
        previous_comics : ["comic_red_fury_tome_9"],
        next_comics     : ["comic_allies_tome_2"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_planeswalkers_book_1                       : {
        name            : "Мироходцы. Книга 1: Кровь богов",
        number          : "1",
        type            : "hardcover_book",
        ranges          : ["range_planeswalkers"],
        contained_comics: ["comic_planeswalkers_1", "comic_planeswalkers_2", "comic_planeswalkers_3",
                           "comic_planeswalkers_4", "comic_planeswalkers_5", "comic_planeswalkers_6"],
        previous_comics : ["comic_enoch_tome_8"],
        next_comics     : ["comic_planeswalkers_book_2"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_planeswalkers_tome_1                       : {
        name            : "Мироходцы том 1: Кровь богов",
        number          : "1",
        type            : "book",
        ranges          : ["range_planeswalkers"],
        contained_comics: ["comic_planeswalkers_1", "comic_planeswalkers_2", "comic_planeswalkers_3",
                           "comic_planeswalkers_4", "comic_planeswalkers_5", "comic_planeswalkers_6"],
        previous_comics : ["comic_enoch_tome_8"],
        next_comics     : ["comic_planeswalkers_tome_2"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_exlibrium_tome_5                           : {
        name            : "Экслибриум том 5: Вот дом, который...",
        number          : "5",
        type            : "book",
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_24", "comic_exlibrium_25", "comic_exlibrium_26", "comic_exlibrium_27",
                           "comic_exlibrium_28", "comic_exlibrium_29"],
        previous_comics : ["comic_exlibrium_tome_4"],
        next_comics     : ["comic_exlibrium_tome_6"],
        release_at      : {year: 2017, month: 8, day: 28}
    },
    comic_meteora_tome_5                             : {
        name            : "Метеора том 5: Одной крови",
        number          : "5",
        type            : "book",
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_26", "comic_meteora_27", "comic_meteora_28", "comic_meteora_29",
                           "comic_meteora_30"],
        previous_comics : ["comic_meteora_tome_4"],
        next_comics     : ["comic_meteora_tome_6"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_adventures_of_kochi_and_friends            : {
        name      : "Приключения Коти и друзей. Весёлые этюды",
        type      : "book",
        ranges    : ["range_childrens_comics", "range_maxim_ananyin"],
        release_at: {year: 2017, month: 9, day: 28}
    },
    comic_jackets_and_revolvers_tome_1               : {
        name       : "Пиджаки и Револьверы. Том 1: Ящик раздора",
        number     : "1",
        type       : "book",
        ranges     : ["range_yulia_zhuravleva"],
        next_comics: ["comic_jackets_and_revolvers_tome_2"],
        release_at : {year: 2017, month: 9, day: 28}
    },
    comic_unicorn_conspiracy_tome_1                  : {
        name      : "Заговор Единорогов. Том 1. Наследие",
        number    : "1",
        type      : "book",
        ranges    : ["range_alex_hatchett"],
        release_at: {year: 2017, month: 9, day: 28}
    },
    comic_tagar_tome_1_prologue                      : {
        name            : "Тагар. Том 1, пролог",
        type            : "single",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        including_comics: ["comic_tagar_tome_1"],
        next_comics     : ["comic_tagar_tome_1_chapter_1"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_tagar_tome_1_chapter_1                     : {
        name            : "Тагар. Том 1, глава 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        including_comics: ["comic_tagar_tome_1"],
        previous_comics : ["comic_tagar_tome_1_prologue"],
        next_comics     : ["comic_tagar_tome_1_chapter_2"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_tagar_tome_1_chapter_2                     : {
        name            : "Тагар. Том 1, глава 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        including_comics: ["comic_tagar_tome_1"],
        previous_comics : ["comic_tagar_tome_1_chapter_1"],
        next_comics     : ["comic_tagar_tome_1_chapter_3"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_tagar_tome_1_chapter_3                     : {
        name            : "Тагар. Том 1, глава 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        including_comics: ["comic_tagar_tome_1"],
        previous_comics : ["comic_tagar_tome_1_chapter_2"],
        next_comics     : ["comic_tagar_tome_1_chapter_4"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_tagar_tome_1_chapter_4                     : {
        name            : "Тагар. Том 1, глава 4",
        number          : "4",
        type            : "single",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        including_comics: ["comic_tagar_tome_1"],
        previous_comics : ["comic_tagar_tome_1_chapter_3"],
        next_comics     : ["comic_tagar_tome_2_chapter_1"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_tagar_tome_1                               : {
        name            : "Тагар. Том 1",
        number          : "1",
        type            : "book",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        contained_comics: ["comic_tagar_tome_1_prologue", "comic_tagar_tome_1_chapter_1",
                           "comic_tagar_tome_1_chapter_2", "comic_tagar_tome_1_chapter_3",
                           "comic_tagar_tome_1_chapter_4"],
        next_comics     : ["comic_tagar_tome_2"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_friends_comics                             : {
        name            : "ДружКомикс: В поисках первородного мема",
        type            : "book",
        ranges          : ["range_friends_comics"],
        contained_comics: ["comic_friends_comics_1", "comic_friends_comics_2", "comic_friends_comics_3",
                           "comic_friends_comics_4", "comic_friends_comics_5", "comic_friends_comics_6",
                           "comic_friends_comics_7", "comic_friends_comics_8", "comic_friends_comics_9",
                           "comic_friends_comics_10", "comic_friends_comics_11", "comic_friends_comics_12",
                           "comic_friends_comics_13", "comic_friends_comics_14", "comic_friends_comics_15",
                           "comic_friends_comics_16", "comic_friends_comics_17", "comic_friends_comics_18",
                           "comic_friends_comics_19", "comic_friends_comics_20", "comic_friends_comics_21",
                           "comic_friends_comics_22", "comic_friends_comics_23", "comic_friends_comics_24",
                           "comic_friends_comics_25", "comic_friends_comics_26", "comic_friends_comics_27"],
        release_at      : {year: 2017, month: 9, day: 28}
    },
    comic_cat_and_mouse_tome_3                       : {
        name           : "Кошки-мышки том 3: Счастье в твоих руках",
        number         : "3",
        type           : "single",
        ranges         : ["range_evgeny_fedotov"],
        previous_comics: ["comic_cat_and_mouse_tome_2"],
        release_at     : {year: 2017, month: 9, day: 28}
    },
    comic_allies_10                                  : {
        name            : "Союзники #10 Условный рефлекс, часть 3",
        number          : "10",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_book_2", "comic_allies_tome_3"],
        previous_comics : ["comic_allies_9"],
        next_comics     : ["comic_allies_11"],
        release_at      : {year: 2017, month: 10, day: 2}
    },
    comic_krutiks_1                                  : {
        name       : "Крутиксы #1",
        number     : "1",
        type       : "single",
        ranges     : ["range_childrens_comics"],
        next_comics: ["comic_krutiks_2"],
        release_at : {year: 2017, month: 10, day: 3}
    },
    comic_besoboy_vol_2_10                           : {
        name            : "Бесобой Vol.2 #10 Падение, часть 3",
        number          : "10",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_tome_2"],
        previous_comics : ["comic_besoboy_vol_2_9"],
        next_comics     : ["comic_besoboy_vol_2_11"],
        release_at      : {year: 2017, month: 10, day: 5}
    },
    comic_igor_grom_10                               : {
        name            : "Игорь Гром #10 Голодные духи, часть 4",
        number          : "10",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_book_2", "comic_igor_grom_tome_2"],
        previous_comics : ["comic_igor_grom_9"],
        next_comics     : ["comic_igor_grom_11"],
        release_at      : {year: 2017, month: 10, day: 10}
    },
    comic_planeswalkers_10                           : {
        name            : "Мироходцы #10 Луна, часть 4",
        number          : "10",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_book_2", "comic_planeswalkers_tome_2"],
        previous_comics : ["comic_planeswalkers_9"],
        next_comics     : ["comic_planeswalkers_11"],
        release_at      : {year: 2017, month: 10, day: 15}
    },
    comic_exlibrium_36                               : {
        name            : "Экслибриум #36 Хозяйка дорог, часть 2",
        number          : "36",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_7"],
        previous_comics : ["comic_exlibrium_35"],
        next_comics     : ["comic_exlibrium_37"],
        release_at      : {year: 2017, month: 10, day: 20}
    },
    comic_meteora_36                                 : {
        name            : "Метеора #36 Зверолов",
        number          : "36",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_7"],
        previous_comics : ["comic_meteora_35"],
        next_comics     : ["comic_meteora_37"],
        release_at      : {year: 2017, month: 10, day: 25}
    },
    comic_black_dog_2                                : {
        name            : "Чёрный Пёс: Своё время, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_besoboy", "range_bubble_legends"],
        including_comics: ["comic_black_dog"],
        previous_comics : ["comic_black_dog_1"],
        next_comics     : ["comic_black_dog_3"],
        release_at      : {year: 2017, month: 10, day: 28}
    },
    comic_allies_11                                  : {
        name            : "Союзники #11 Условный рефлекс, часть 4",
        number          : "11",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_book_2", "comic_allies_tome_3"],
        previous_comics : ["comic_allies_10"],
        next_comics     : ["comic_allies_12"],
        release_at      : {year: 2017, month: 11, day: 1}
    },
    comic_krutiks_2                                  : {
        name           : "Крутиксы #2",
        number         : "2",
        type           : "single",
        ranges         : ["range_childrens_comics"],
        previous_comics: ["comic_krutiks_1"],
        next_comics    : ["comic_krutiks_3"],
        release_at     : {year: 2017, month: 11, day: 3}
    },
    comic_besoboy_vol_2_11                           : {
        name            : "Бесобой Vol.2 #11 Часовой, часть 1",
        number          : "11",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_tome_3"],
        previous_comics : ["comic_besoboy_vol_2_10"],
        next_comics     : ["comic_besoboy_vol_2_12"],
        release_at      : {year: 2017, month: 11, day: 5}
    },
    comic_igor_grom_11                               : {
        name            : "Игорь Гром #11 Умный человек, часть 1",
        number          : "11",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_book_2", "comic_igor_grom_tome_3"],
        previous_comics : ["comic_igor_grom_10"],
        next_comics     : ["comic_igor_grom_12"],
        release_at      : {year: 2017, month: 11, day: 10}
    },
    comic_planeswalkers_11                           : {
        name            : "Мироходцы #11 Притяжение полюсов, часть 1",
        number          : "11",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_book_2", "comic_planeswalkers_tome_3"],
        previous_comics : ["comic_planeswalkers_10"],
        next_comics     : ["comic_planeswalkers_12"],
        release_at      : {year: 2017, month: 11, day: 15}
    },
    comic_exlibrium_37                               : {
        name            : "Экслибриум #37 Хозяйка дорог, часть 3",
        number          : "37",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_7"],
        previous_comics : ["comic_exlibrium_36"],
        next_comics     : ["comic_exlibrium_38"],
        release_at      : {year: 2017, month: 11, day: 20}
    },
    comic_meteora_37                                 : {
        name            : "Метеора #37 Вольная птица, часть 1",
        number          : "37",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_7"],
        previous_comics : ["comic_meteora_36"],
        next_comics     : ["comic_meteora_38"],
        release_at      : {year: 2017, month: 11, day: 24}
    },
    comic_black_dog_3                                : {
        name            : "Чёрный Пёс: Своё время, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_besoboy", "range_bubble_legends"],
        including_comics: ["comic_black_dog"],
        previous_comics : ["comic_black_dog_2"],
        next_comics     : ["comic_black_dog_4"],
        release_at      : {year: 2017, month: 11, day: 27}
    },
    comic_allies_12                                  : {
        name            : "Союзники #12 Огненная земля, часть 1",
        number          : "12",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_book_2", "comic_allies_tome_3"],
        previous_comics : ["comic_allies_11"],
        next_comics     : ["comic_allies_13"],
        release_at      : {year: 2017, month: 12, day: 1}
    },
    comic_krutiks_3                                  : {
        name           : "Крутиксы #3",
        number         : "3",
        type           : "single",
        ranges         : ["range_childrens_comics"],
        previous_comics: ["comic_krutiks_2"],
        next_comics    : ["comic_krutiks_1_2018"],
        release_at     : {year: 2017, month: 12, day: 3}
    },
    comic_besoboy_vol_2_12                           : {
        name            : "Бесобой Vol.2 #12 Часовой, часть 2",
        number          : "12",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_tome_3"],
        previous_comics : ["comic_besoboy_vol_2_11"],
        next_comics     : ["comic_besoboy_vol_2_13"],
        release_at      : {year: 2017, month: 12, day: 5}
    },
    comic_igor_grom_12                               : {
        name            : "Игорь Гром #12 Умный человек, часть 2",
        number          : "12",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_book_2", "comic_igor_grom_tome_3"],
        previous_comics : ["comic_igor_grom_11"],
        next_comics     : ["comic_igor_grom_13"],
        release_at      : {year: 2017, month: 12, day: 11}
    },
    comic_planeswalkers_12                           : {
        name            : "Мироходцы #12 Притяжение полюсов, часть 2",
        number          : "12",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_book_2", "comic_planeswalkers_tome_3"],
        previous_comics : ["comic_planeswalkers_11"],
        next_comics     : ["comic_planeswalkers_13"],
        release_at      : {year: 2017, month: 12, day: 15}
    },
    comic_exlibrium_38                               : {
        name            : "Экслибриум #38 Сказочке конец, часть 1",
        number          : "38",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_7"],
        previous_comics : ["comic_exlibrium_37"],
        next_comics     : ["comic_exlibrium_39"],
        release_at      : {year: 2017, month: 12, day: 20}
    },
    comic_black_dog_4                                : {
        name            : "Чёрный Пёс: Своё время, часть 4",
        number          : "4",
        type            : "single",
        ranges          : ["range_besoboy", "range_bubble_legends"],
        including_comics: ["comic_black_dog"],
        previous_comics : ["comic_black_dog_3"],
        release_at      : {year: 2017, month: 12, day: 22}
    },
    comic_besoboy_and_planeswalkers_single           : {
        name            : "Бесобой и Мироходцы: Новая жизнь",
        type            : "single",
        ranges          : ["range_crossovers", "range_bubble_legends", "range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_and_planeswalkers_book"],
        previous_comics : ["comic_planeswalkers_21"],
        release_at      : {year: 2017, month: 12, day: 23}
    },
    comic_besoboy_and_planeswalkers_book             : {
        name            : "Бесобой и Мироходцы: Новая жизнь",
        type            : "book",
        ranges          : ["range_crossovers", "range_bubble_legends", "range_besoboy_vol_2"],
        contained_comics: ["comic_besoboy_and_planeswalkers_single"],
        previous_comics : ["comic_planeswalkers_tome_4"],
        release_at      : {year: 2017, month: 12, day: 23}
    },
    comic_meteora_38                                 : {
        name            : "Метеора #38 Вольная птица, часть 2",
        number          : "38",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_7"],
        previous_comics : ["comic_meteora_37"],
        next_comics     : ["comic_meteora_39"],
        release_at      : {year: 2017, month: 12, day: 25}
    },
    comic_allies_13                                  : {
        name            : "Союзники #13 Огненная земля, часть 2",
        number          : "13",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_book_2", "comic_allies_tome_3"],
        previous_comics : ["comic_allies_12"],
        next_comics     : ["comic_allies_14"],
        release_at      : {year: 2018, month: 1, day: 1}
    },
    comic_krutiks_1_2018                             : {
        name           : "Крутиксы #1 (2018)",
        number         : "1",
        type           : "single",
        ranges         : ["range_childrens_comics"],
        previous_comics: ["comic_krutiks_3"],
        next_comics    : ["comic_krutiks_2_2018"],
        release_at     : {year: 2018, month: 1, day: 3}
    },
    comic_besoboy_vol_2_13                           : {
        name            : "Бесобой Vol.2 #13 Откровения",
        number          : "13",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_tome_3"],
        previous_comics : ["comic_besoboy_vol_2_12"],
        next_comics     : ["comic_besoboy_vol_2_14"],
        release_at      : {year: 2018, month: 1, day: 5}
    },
    comic_igor_grom_13                               : {
        name            : "Игорь Гром #13 Умный человек, часть 3",
        number          : "13",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_book_2", "comic_igor_grom_tome_3"],
        previous_comics : ["comic_igor_grom_12"],
        next_comics     : ["comic_igor_grom_14"],
        release_at      : {year: 2018, month: 1, day: 5}
    },
    comic_planeswalkers_13                           : {
        name            : "Мироходцы #13 Лицом к лицу, часть 1",
        number          : "13",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_book_2", "comic_planeswalkers_tome_3"],
        previous_comics : ["comic_planeswalkers_12"],
        next_comics     : ["comic_planeswalkers_14"],
        release_at      : {year: 2018, month: 1, day: 15}
    },
    comic_exlibrium_39                               : {
        name            : "Экслибриум #39 Сказочке конец, часть 2",
        number          : "39",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_7"],
        previous_comics : ["comic_exlibrium_38"],
        next_comics     : ["comic_exlibrium_40"],
        release_at      : {year: 2018, month: 1, day: 19}
    },
    comic_meteora_39                                 : {
        name            : "Метеора #39 Вольная птица, часть 3",
        number          : "39",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_7"],
        previous_comics : ["comic_meteora_38"],
        next_comics     : ["comic_meteora_40"],
        release_at      : {year: 2018, month: 1, day: 25}
    },
    comic_teo_1                                      : {
        name            : "Тео: Круги на полях, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_bubble_legends"],
        including_comics: ["comic_teo"],
        previous_comics : ["comic_meteora_50"],
        next_comics     : ["comic_teo_2"],
        release_at      : {year: 2018, month: 1, day: 29}
    },
    comic_allies_14                                  : {
        name            : "Союзники #14 Имаго",
        number          : "14",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_book_2", "comic_allies_tome_3"],
        previous_comics : ["comic_allies_13"],
        next_comics     : ["comic_allies_15"],
        release_at      : {year: 2018, month: 2, day: 1}
    },
    comic_krutiks_2_2018                             : {
        name           : "Крутиксы #2 (2018)",
        number         : "2",
        type           : "single",
        ranges         : ["range_childrens_comics"],
        previous_comics: ["comic_krutiks_1_2018"],
        next_comics    : ["comic_krutiks_3_2018"],
        release_at     : {year: 2018, month: 2, day: 3}
    },
    comic_besoboy_vol_2_14                           : {
        name            : "Бесобой Vol.2 #14 Инструмент Бога",
        number          : "14",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_tome_3"],
        previous_comics : ["comic_besoboy_vol_2_13"],
        next_comics     : ["comic_besoboy_vol_2_15"],
        release_at      : {year: 2018, month: 2, day: 5}
    },
    comic_igor_grom_14                               : {
        name            : "Игорь Гром #14 Умный человек, часть 4",
        number          : "14",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_book_2", "comic_igor_grom_tome_3"],
        previous_comics : ["comic_igor_grom_13"],
        next_comics     : ["comic_igor_grom_15"],
        release_at      : {year: 2018, month: 2, day: 9}
    },
    comic_planeswalkers_14                           : {
        name            : "Мироходцы #14 Лицом к лицу, часть 2",
        number          : "14",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_book_2", "comic_planeswalkers_tome_3"],
        previous_comics : ["comic_planeswalkers_13"],
        next_comics     : ["comic_planeswalkers_15"],
        release_at      : {year: 2018, month: 2, day: 15}
    },
    comic_exlibrium_40                               : {
        name            : "Экслибриум #40 Сказочке конец, часть 3",
        number          : "40",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_7"],
        previous_comics : ["comic_exlibrium_39"],
        next_comics     : ["comic_exlibrium_41"],
        release_at      : {year: 2018, month: 2, day: 19}
    },
    comic_meteora_40                                 : {
        name            : "Метеора #40 Вольная птица, часть 4",
        number          : "40",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_8"],
        previous_comics : ["comic_meteora_39"],
        next_comics     : ["comic_meteora_41"],
        release_at      : {year: 2018, month: 2, day: 26}
    },
    comic_teo_2                                      : {
        name            : "Тео: Круги на полях, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_bubble_legends"],
        including_comics: ["comic_teo"],
        previous_comics : ["comic_teo_1"],
        next_comics     : ["comic_teo_3"],
        release_at      : {year: 2018, month: 2, day: 26}
    },
    comic_witch_hunt_prologue                        : {
        name            : "Охота на ведьм: Пролог",
        type            : "single",
        ranges          : ["range_crossovers", "range_besoboy_vol_2", "range_igor_grom", "range_allies",
                           "range_planeswalkers"],
        including_comics: ["comic_witch_hunt"],
        next_comics     : ["comic_allies_15"],
        release_at      : {year: 2018, month: 3, day: 1}
    },
    comic_krutiks_3_2018                             : {
        name           : "Крутиксы #3 (2018)",
        number         : "3",
        type           : "single",
        ranges         : ["range_childrens_comics"],
        previous_comics: ["comic_krutiks_2_2018"],
        next_comics    : ["comic_krutiks_4_2018"],
        release_at     : {year: 2018, month: 3, day: 3}
    },
    comic_allies_15                                  : {
        name            : "Союзники #15 Охота на ведьм",
        number          : "15",
        type            : "single",
        ranges          : ["range_crossovers", "range_allies"],
        including_comics: ["comic_witch_hunt"],
        previous_comics : ["comic_allies_14", "comic_witch_hunt_prologue"],
        next_comics     : ["comic_besoboy_vol_2_15", "comic_allies_16"],
        release_at      : {year: 2018, month: 3, day: 5}
    },
    comic_besoboy_vol_2_15                           : {
        name            : "Бесобой Vol.2 #15 Охота на ведьм",
        number          : "15",
        type            : "single",
        ranges          : ["range_crossovers", "range_besoboy_vol_2"],
        including_comics: ["comic_witch_hunt"],
        previous_comics : ["comic_besoboy_vol_2_14", "comic_allies_15"],
        next_comics     : ["comic_igor_grom_15", "comic_besoboy_vol_2_16"],
        release_at      : {year: 2018, month: 3, day: 5}
    },
    comic_igor_grom_15                               : {
        name            : "Игорь Гром #15 Охота на ведьм",
        number          : "15",
        type            : "single",
        ranges          : ["range_crossovers", "range_igor_grom"],
        including_comics: ["comic_witch_hunt"],
        previous_comics : ["comic_igor_grom_14", "comic_besoboy_vol_2_15"],
        next_comics     : ["comic_planeswalkers_15", "comic_igor_grom_16"],
        release_at      : {year: 2018, month: 3, day: 9}
    },
    comic_planeswalkers_15                           : {
        name            : "Мироходцы #15 Охота на ведьм",
        number          : "15",
        type            : "single",
        ranges          : ["range_crossovers", "range_planeswalkers"],
        including_comics: ["comic_witch_hunt"],
        previous_comics : ["comic_planeswalkers_14", "comic_igor_grom_15"],
        next_comics     : ["comic_witch_hunt_finale", "comic_planeswalkers_16"],
        release_at      : {year: 2018, month: 3, day: 15}
    },
    comic_exlibrium_41                               : {
        name            : "Экслибриум #41 Переворот, часть 1",
        number          : "41",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_8"],
        previous_comics : ["comic_exlibrium_40"],
        next_comics     : ["comic_exlibrium_42"],
        release_at      : {year: 2018, month: 3, day: 20}
    },
    comic_meteora_41                                 : {
        name            : "Метеора #41 Вольная птица, часть 5",
        number          : "41",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_8"],
        previous_comics : ["comic_meteora_40"],
        next_comics     : ["comic_meteora_42"],
        release_at      : {year: 2018, month: 3, day: 26}
    },
    comic_teo_3                                      : {
        name            : "Тео: Круги на полях, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_bubble_legends"],
        including_comics: ["comic_teo"],
        previous_comics : ["comic_teo_2"],
        next_comics     : ["comic_teo_4"],
        release_at      : {year: 2018, month: 3, day: 28}
    },
    comic_witch_hunt_finale                          : {
        name            : "Охота на ведьм: Финал",
        type            : "single",
        ranges          : ["range_crossovers", "range_besoboy_vol_2", "range_igor_grom", "range_allies",
                           "range_planeswalkers"],
        including_comics: ["comic_witch_hunt"],
        previous_comics : ["comic_planeswalkers_15"],
        release_at      : {year: 2018, month: 4, day: 1}
    },
    comic_exlibrium_tome_6                           : {
        name            : "Экслибриум том 6: Бумажный порез",
        number          : "6",
        type            : "book",
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_30", "comic_exlibrium_31", "comic_exlibrium_32", "comic_exlibrium_33",
                           "comic_exlibrium_34"],
        previous_comics : ["comic_exlibrium_tome_5"],
        next_comics     : ["comic_exlibrium_tome_7"],
        release_at      : {year: 2018, month: 1, day: 1}
    },
    comic_meteora_tome_6                             : {
        name            : "Метеора том 6: Проверка пульса",
        number          : "6",
        type            : "book",
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_31", "comic_meteora_32", "comic_meteora_33", "comic_meteora_34",
                           "comic_meteora_35"],
        previous_comics : ["comic_meteora_tome_5"],
        next_comics     : ["comic_meteora_tome_7"],
        release_at      : {year: 2018, month: 1, day: 1}
    },
    comic_black_dog                                  : {
        name            : "Чёрный Пёс: Своё время",
        type            : "book",
        ranges          : ["range_besoboy", "range_bubble_legends"],
        contained_comics: ["comic_black_dog_1", "comic_black_dog_2", "comic_black_dog_3", "comic_black_dog_4"],
        previous_comics : ["comic_besoboy_tome_9"],
        release_at      : {year: 2018, month: 1, day: 1}
    },
    comic_allies_16                                  : {
        name            : "Союзники #16 Без ума, часть 1",
        number          : "16",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_4"],
        previous_comics : ["comic_allies_15"],
        next_comics     : ["comic_allies_17"],
        release_at      : {year: 2018, month: 4, day: 1}
    },
    comic_ziggy_and_shmyg_destroy_the_bubble_universe: {
        name       : "Зигги и Шмыг уничтожают вселенную BUBBLE",
        type       : "book",
        ranges     : ["range_ziggy_and_shmyg"],
        next_comics: ["comic_ziggy_and_shmyg_save_comiccon"],
        release_at : {year: 2018, month: 1, day: 1}
    },
    comic_krutiks_4_2018                             : {
        name           : "Крутиксы #4 (2018)",
        number         : "4",
        type           : "single",
        ranges         : ["range_childrens_comics"],
        previous_comics: ["comic_krutiks_3_2018"],
        next_comics    : ["comic_krutiks_5_2018"],
        release_at     : {year: 2018, month: 4, day: 3}
    },
    comic_besoboy_vol_2_16                           : {
        name            : "Бесобой Vol.2 #16 Иуда",
        number          : "16",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_4"],
        previous_comics : ["comic_besoboy_vol_2_15"],
        next_comics     : ["comic_besoboy_vol_2_17"],
        release_at      : {year: 2018, month: 4, day: 5}
    },
    comic_igor_grom_16                               : {
        name            : "Игорь Гром #16 Вспоминай",
        number          : "16",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_tome_4"],
        previous_comics : ["comic_igor_grom_15"],
        next_comics     : ["comic_igor_grom_17"],
        release_at      : {year: 2018, month: 4, day: 9}
    },
    comic_planeswalkers_16                           : {
        name            : "Мироходцы #16 Чужая воля",
        number          : "16",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_tome_4"],
        previous_comics : ["comic_planeswalkers_15"],
        next_comics     : ["comic_planeswalkers_17"],
        release_at      : {year: 2018, month: 4, day: 16}
    },
    comic_exlibrium_42                               : {
        name            : "Экслибриум #42 Переворот, часть 2",
        number          : "42",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_8"],
        previous_comics : ["comic_exlibrium_41"],
        next_comics     : ["comic_exlibrium_43"],
        release_at      : {year: 2018, month: 4, day: 20}
    },
    comic_meteora_42                                 : {
        name            : "Метеора #42 Вольная птица, часть 6",
        number          : "42",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_8"],
        previous_comics : ["comic_meteora_41"],
        next_comics     : ["comic_meteora_43"],
        release_at      : {year: 2018, month: 4, day: 25}
    },
    comic_teo_4                                      : {
        name            : "Тео: Круги на полях, часть 4",
        number          : "4",
        type            : "single",
        ranges          : ["range_bubble_legends"],
        including_comics: ["comic_teo"],
        previous_comics : ["comic_teo_3"],
        release_at      : {year: 2018, month: 4, day: 28}
    },
    comic_besoboy_vol_2_17                           : {
        name            : "Бесобой Vol.2 #17 Красный фильтр, часть 1",
        number          : "17",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_4"],
        previous_comics : ["comic_besoboy_vol_2_16"],
        next_comics     : ["comic_besoboy_vol_2_18"],
        release_at      : {year: 2018, month: 4, day: 30}
    },
    comic_allies_17                                  : {
        name            : "Союзники #17 Без ума, часть 2",
        number          : "17",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_4"],
        previous_comics : ["comic_allies_16"],
        next_comics     : ["comic_allies_18"],
        release_at      : {year: 2018, month: 4, day: 30}
    },
    comic_krutiks_5_2018                             : {
        name           : "Крутиксы #5 (2018)",
        number         : "5",
        type           : "single",
        ranges         : ["range_childrens_comics"],
        previous_comics: ["comic_krutiks_4_2018"],
        next_comics    : ["comic_krutiks_6_2018"],
        release_at     : {year: 2018, month: 5, day: 3}
    },
    comic_igor_grom_17                               : {
        name            : "Игорь Гром #17 Метод Локи, часть 1",
        number          : "17",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_tome_4"],
        previous_comics : ["comic_igor_grom_16"],
        next_comics     : ["comic_igor_grom_18"],
        release_at      : {year: 2018, month: 5, day: 10}
    },
    comic_planeswalkers_17                           : {
        name            : "Мироходцы #17 Псы войны, часть 1",
        number          : "17",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_tome_4"],
        previous_comics : ["comic_planeswalkers_16"],
        next_comics     : ["comic_planeswalkers_18"],
        release_at      : {year: 2018, month: 5, day: 15}
    },
    comic_exlibrium_43                               : {
        name            : "Экслибриум #43 Возвращение, часть 1",
        number          : "43",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_8"],
        previous_comics : ["comic_exlibrium_42"],
        next_comics     : ["comic_exlibrium_44"],
        release_at      : {year: 2018, month: 5, day: 21}
    },
    comic_meteora_43                                 : {
        name            : "Метеора #43 Король и плут, часть 1",
        number          : "43",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_8"],
        previous_comics : ["comic_meteora_42"],
        next_comics     : ["comic_meteora_44"],
        release_at      : {year: 2018, month: 5, day: 25}
    },
    comic_dubin_dima_1                               : {
        name            : "Дубин Дима: Провинциальные каникулы, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_major_grom", "range_bubble_legends"],
        including_comics: ["comic_dubin_dima"],
        previous_comics : ["comic_major_grom_50"],
        next_comics     : ["comic_dubin_dima_2"],
        release_at      : {year: 2018, month: 5, day: 28}
    },
    comic_allies_18                                  : {
        name            : "Союзники #18 Без ума, часть 3",
        number          : "18",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_4"],
        previous_comics : ["comic_allies_17"],
        next_comics     : ["comic_allies_19"],
        release_at      : {year: 2018, month: 6, day: 1}
    },
    comic_krutiks_6_2018                             : {
        name           : "Крутиксы #6 (2018)",
        number         : "6",
        type           : "single",
        ranges         : ["range_childrens_comics"],
        previous_comics: ["comic_krutiks_5_2018"],
        next_comics    : ["comic_krutiks_7_2018"],
        release_at     : {year: 2018, month: 6, day: 3}
    },
    comic_besoboy_vol_2_18                           : {
        name            : "Бесобой Vol.2 #18 Красный фильтр, часть 2",
        number          : "18",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_4"],
        previous_comics : ["comic_besoboy_vol_2_17"],
        next_comics     : ["comic_besoboy_vol_2_19"],
        release_at      : {year: 2018, month: 6, day: 5}
    },
    comic_igor_grom_18                               : {
        name            : "Игорь Гром #18 Метод Локи, часть 2",
        number          : "18",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_tome_4"],
        previous_comics : ["comic_igor_grom_17"],
        next_comics     : ["comic_igor_grom_19"],
        release_at      : {year: 2018, month: 6, day: 10}
    },
    comic_dubin_dima_2                               : {
        name            : "Дубин Дима: Провинциальные каникулы, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_major_grom", "range_bubble_legends"],
        including_comics: ["comic_dubin_dima"],
        previous_comics : ["comic_dubin_dima_1"],
        next_comics     : ["comic_dubin_dima_3"],
        release_at      : {year: 2018, month: 6, day: 10}
    },
    comic_teo                                        : {
        name            : "Тео: Круги на полях",
        type            : "book",
        ranges          : ["range_bubble_legends"],
        contained_comics: ["comic_teo_1", "comic_teo_2", "comic_teo_3", "comic_teo_4"],
        previous_comics : ["comic_meteora_tome_9"],
        release_at      : {year: 2018, month: 1, day: 1}
    },
    comic_planeswalkers_18                           : {
        name            : "Мироходцы #18 Псы войны, часть 2",
        number          : "18",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_tome_4"],
        previous_comics : ["comic_planeswalkers_17"],
        next_comics     : ["comic_planeswalkers_19"],
        release_at      : {year: 2018, month: 6, day: 15}
    },
    comic_exlibrium_44                               : {
        name            : "Экслибриум #44 Возвращение, часть 2",
        number          : "44",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_8"],
        previous_comics : ["comic_exlibrium_43"],
        next_comics     : ["comic_exlibrium_45"],
        release_at      : {year: 2018, month: 6, day: 20}
    },
    comic_meteora_44                                 : {
        name            : "Метеора #44 Король и плут, часть 2",
        number          : "44",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_8"],
        previous_comics : ["comic_meteora_43"],
        next_comics     : ["comic_meteora_45"],
        release_at      : {year: 2018, month: 6, day: 25}
    },
    comic_allies_19                                  : {
        name            : "Союзники #19 Отчуждение",
        number          : "19",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_4"],
        previous_comics : ["comic_allies_18"],
        next_comics     : ["comic_allies_20"],
        release_at      : {year: 2018, month: 7, day: 2}
    },
    comic_krutiks_7_2018                             : {
        name           : "Крутиксы #7 (2018)",
        number         : "7",
        type           : "single",
        ranges         : ["range_childrens_comics"],
        previous_comics: ["comic_krutiks_6_2018"],
        next_comics    : ["comic_krutiks_8_2018"],
        release_at     : {year: 2018, month: 7, day: 3}
    },
    comic_besoboy_vol_2_19                           : {
        name            : "Бесобой Vol.2 #19 В расчёте",
        number          : "19",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_4"],
        previous_comics : ["comic_besoboy_vol_2_18"],
        next_comics     : ["comic_besoboy_vol_2_20"],
        release_at      : {year: 2018, month: 7, day: 5}
    },
    comic_igor_grom_19                               : {
        name            : "Игорь Гром #19 Метод Локи, часть 3",
        number          : "19",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_tome_4"],
        previous_comics : ["comic_igor_grom_18"],
        next_comics     : ["comic_igor_grom_20"],
        release_at      : {year: 2018, month: 7, day: 10}
    },
    comic_planeswalkers_19                           : {
        name            : "Мироходцы #19 Битва за Эдем, часть 1",
        number          : "19",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_tome_4"],
        previous_comics : ["comic_planeswalkers_18"],
        next_comics     : ["comic_planeswalkers_20"],
        release_at      : {year: 2018, month: 7, day: 16}
    },
    comic_exlibrium_45                               : {
        name            : "Экслибриум #45 Возвращение, часть 3",
        number          : "45",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_8"],
        previous_comics : ["comic_exlibrium_44"],
        next_comics     : ["comic_exlibrium_46"],
        release_at      : {year: 2018, month: 7, day: 20}
    },
    comic_meteora_45                                 : {
        name            : "Метеора #45 Стоп машина! часть 1",
        number          : "45",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_9"],
        previous_comics : ["comic_meteora_44"],
        next_comics     : ["comic_meteora_46"],
        release_at      : {year: 2018, month: 7, day: 25}
    },
    comic_dubin_dima_3                               : {
        name            : "Дубин Дима: Провинциальные каникулы, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_major_grom", "range_bubble_legends"],
        including_comics: ["comic_dubin_dima"],
        previous_comics : ["comic_dubin_dima_2"],
        next_comics     : ["comic_dubin_dima_4"],
        release_at      : {year: 2018, month: 7, day: 27}
    },
    comic_allies_20                                  : {
        name            : "Союзники #20 Изгои",
        number          : "20",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_5"],
        previous_comics : ["comic_allies_19"],
        next_comics     : ["comic_allies_21"],
        release_at      : {year: 2018, month: 8, day: 1}
    },
    comic_krutiks_8_2018                             : {
        name           : "Крутиксы #8 (2018)",
        number         : "8",
        type           : "single",
        ranges         : ["range_childrens_comics"],
        previous_comics: ["comic_krutiks_7_2018"],
        next_comics    : ["comic_krutiks_9_2018"],
        release_at     : {year: 2018, month: 8, day: 3}
    },
    comic_besoboy_vol_2_20                           : {
        name            : "Бесобой Vol.2 #20 Воля мёртвых, часть 1",
        number          : "20",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_5"],
        previous_comics : ["comic_besoboy_vol_2_19"],
        next_comics     : ["comic_besoboy_vol_2_21"],
        release_at      : {year: 2018, month: 8, day: 6}
    },
    comic_igor_grom_20                               : {
        name            : "Игорь Гром #20 Метод Локи, часть 4",
        number          : "20",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_tome_4"],
        previous_comics : ["comic_igor_grom_19"],
        next_comics     : ["comic_igor_grom_21"],
        release_at      : {year: 2018, month: 8, day: 10}
    },
    comic_planeswalkers_20                           : {
        name            : "Мироходцы #20 Битва за Эдем, часть 2",
        number          : "20",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_tome_4"],
        previous_comics : ["comic_planeswalkers_19"],
        next_comics     : ["comic_planeswalkers_21"],
        release_at      : {year: 2018, month: 8, day: 11}
    },
    comic_wolf_helsing                               : {
        name      : "Вольф Хельсинг",
        type      : "single",
        ranges    : ["range_evgeny_yakovlev"],
        release_at: {year: 2018, month: 8, day: 11}
    },
    comic_besoboy_vol_2_book_2                       : {
        name            : "Бесобой Vol.2. Книга 2: Падение",
        number          : "2",
        type            : "hardcover_book",
        ranges          : ["range_besoboy_vol_2"],
        contained_comics: ["comic_besoboy_vol_2_6", "comic_besoboy_vol_2_7", "comic_besoboy_vol_2_8",
                           "comic_besoboy_vol_2_9", "comic_besoboy_vol_2_10", "comic_besoboy_vol_2_11",
                           "comic_besoboy_vol_2_12", "comic_besoboy_vol_2_13", "comic_besoboy_vol_2_14"],
        previous_comics : ["comic_besoboy_vol_2_book_1"],
        next_comics     : ["comic_witch_hunt"],
        release_at      : {year: 2018, month: 8, day: 13}
    },
    comic_besoboy_vol_2_tome_2                       : {
        name            : "Бесобой Vol.2 том 2: Падение",
        number          : "2",
        type            : "book",
        ranges          : ["range_besoboy_vol_2"],
        contained_comics: ["comic_besoboy_vol_2_6", "comic_besoboy_vol_2_7", "comic_besoboy_vol_2_8",
                           "comic_besoboy_vol_2_9", "comic_besoboy_vol_2_10"],
        previous_comics : ["comic_besoboy_vol_2_tome_1"],
        next_comics     : ["comic_besoboy_vol_2_tome_3"],
        release_at      : {year: 2018, month: 8, day: 13}
    },
    comic_igor_grom_book_2                           : {
        name            : "Игорь Гром. Книга 2: Голодные духи",
        number          : "2",
        type            : "hardcover_book",
        ranges          : ["range_igor_grom"],
        contained_comics: ["comic_igor_grom_7", "comic_igor_grom_8", "comic_igor_grom_9", "comic_igor_grom_10",
                           "comic_igor_grom_11", "comic_igor_grom_12", "comic_igor_grom_13", "comic_igor_grom_14"],
        previous_comics : ["comic_igor_grom_book_1"],
        next_comics     : ["comic_witch_hunt"],
        release_at      : {year: 2018, month: 8, day: 13}
    },
    comic_igor_grom_tome_2                           : {
        name            : "Игорь Гром том 2: Голодные духи",
        number          : "2",
        type            : "book",
        ranges          : ["range_igor_grom"],
        contained_comics: ["comic_igor_grom_7", "comic_igor_grom_8", "comic_igor_grom_9", "comic_igor_grom_10"],
        previous_comics : ["comic_igor_grom_tome_1"],
        next_comics     : ["comic_igor_grom_tome_3"],
        release_at      : {year: 2018, month: 8, day: 13}
    },
    comic_allies_book_2                              : {
        name            : "Союзники. Книга 2: Условный рефлекс",
        number          : "2",
        type            : "hardcover_book",
        ranges          : ["range_allies"],
        contained_comics: ["comic_allies_5", "comic_allies_6", "comic_allies_7", "comic_allies_8", "comic_allies_9",
                           "comic_allies_10", "comic_allies_11", "comic_allies_12", "comic_allies_13",
                           "comic_allies_14"],
        previous_comics : ["comic_allies_book_1"],
        next_comics     : ["comic_witch_hunt"],
        release_at      : {year: 2018, month: 8, day: 13}
    },
    comic_allies_tome_2                              : {
        name            : "Союзники том 2: Условный рефлекс",
        number          : "2",
        type            : "book",
        ranges          : ["range_allies"],
        contained_comics: ["comic_allies_5", "comic_allies_6", "comic_allies_7", "comic_allies_8", "comic_allies_9"],
        previous_comics : ["comic_allies_tome_1"],
        next_comics     : ["comic_allies_tome_3"],
        release_at      : {year: 2018, month: 8, day: 13}
    },
    comic_planeswalkers_book_2                       : {
        name            : "Мироходцы. Книга 2: Притяжение полюсов",
        number          : "2",
        type            : "hardcover_book",
        ranges          : ["range_planeswalkers"],
        contained_comics: ["comic_planeswalkers_7", "comic_planeswalkers_8", "comic_planeswalkers_9",
                           "comic_planeswalkers_10", "comic_planeswalkers_11", "comic_planeswalkers_12",
                           "comic_planeswalkers_13", "comic_planeswalkers_14"],
        previous_comics : ["comic_planeswalkers_book_1"],
        next_comics     : ["comic_witch_hunt"],
        release_at      : {year: 2018, month: 8, day: 13}
    },
    comic_planeswalkers_tome_2                       : {
        name            : "Мироходцы том 2: Луна",
        number          : "2",
        type            : "book",
        ranges          : ["range_planeswalkers"],
        contained_comics: ["comic_planeswalkers_7", "comic_planeswalkers_8", "comic_planeswalkers_9",
                           "comic_planeswalkers_10"],
        previous_comics : ["comic_planeswalkers_tome_1"],
        next_comics     : ["comic_planeswalkers_tome_3"],
        release_at      : {year: 2018, month: 8, day: 13}
    },
    comic_exlibrium_46                               : {
        name            : "Экслибриум #46 Светлая полоса, часть 1",
        number          : "46",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_9"],
        previous_comics : ["comic_exlibrium_45"],
        next_comics     : ["comic_exlibrium_47"],
        release_at      : {year: 2018, month: 8, day: 20}
    },
    comic_meteora_46                                 : {
        name            : "Метеора #46 Стоп машина! часть 2",
        number          : "46",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_9"],
        previous_comics : ["comic_meteora_45"],
        next_comics     : ["comic_meteora_47"],
        release_at      : {year: 2018, month: 8, day: 24}
    },
    comic_dubin_dima_4                               : {
        name            : "Дубин Дима: Провинциальные каникулы, часть 4",
        number          : "4",
        type            : "single",
        ranges          : ["range_major_grom", "range_bubble_legends"],
        including_comics: ["comic_dubin_dima"],
        previous_comics : ["comic_dubin_dima_3"],
        release_at      : {year: 2018, month: 8, day: 28}
    },
    comic_allies_21                                  : {
        name            : "Союзники #21 Оборотная сторона, часть 1",
        number          : "21",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_5"],
        previous_comics : ["comic_allies_20"],
        next_comics     : ["comic_allies_22"],
        release_at      : {year: 2018, month: 8, day: 31}
    },
    comic_krutiks_9_2018                             : {
        name           : "Крутиксы #9 (2018)",
        number         : "9",
        type           : "single",
        ranges         : ["range_childrens_comics"],
        previous_comics: ["comic_krutiks_8_2018"],
        next_comics    : ["comic_krutiks_10_2018"],
        release_at     : {year: 2018, month: 9, day: 3}
    },
    comic_besoboy_vol_2_21                           : {
        name            : "Бесобой Vol.2 #21 Воля мёртвых, часть 2",
        number          : "21",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_5"],
        previous_comics : ["comic_besoboy_vol_2_20"],
        next_comics     : ["comic_besoboy_vol_2_22"],
        release_at      : {year: 2018, month: 9, day: 5}
    },
    comic_igor_grom_21                               : {
        name            : "Игорь Гром #21 На пепелище",
        number          : "21",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_tome_4"],
        previous_comics : ["comic_igor_grom_20"],
        next_comics     : ["comic_igor_grom_22"],
        release_at      : {year: 2018, month: 9, day: 10}
    },
    comic_planeswalkers_21                           : {
        name            : "Мироходцы #21 Просто сон",
        number          : "21",
        type            : "single",
        ranges          : ["range_planeswalkers"],
        including_comics: ["comic_planeswalkers_tome_4"],
        previous_comics : ["comic_planeswalkers_20"],
        next_comics     : ["comic_besoboy_and_planeswalkers_single", "comic_crusade_prologue", "comic_crusade_wolf_1"],
        release_at      : {year: 2018, month: 9, day: 14}
    },
    comic_exlibrium_47                               : {
        name            : "Экслибриум #47 Светлая полоса, часть 2",
        number          : "47",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_9"],
        previous_comics : ["comic_exlibrium_46"],
        next_comics     : ["comic_exlibrium_48"],
        release_at      : {year: 2018, month: 9, day: 20}
    },
    comic_meteora_47                                 : {
        name            : "Метеора #47 Стоп машина! часть 3",
        number          : "47",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_9"],
        previous_comics : ["comic_meteora_46"],
        next_comics     : ["comic_meteora_48"],
        release_at      : {year: 2018, month: 9, day: 24}
    },
    comic_seven_sons_jaykarn                         : {
        name      : "Семь сыновей. Джайкарн. Глава первая",
        type      : "book",
        ranges    : ["range_anastasia_kim"],
        release_at: {year: 2018, month: 10}
    },
    comic_allies_22                                  : {
        name            : "Союзники #22 Оборотная сторона, часть 2",
        number          : "22",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_5"],
        previous_comics : ["comic_allies_21"],
        next_comics     : ["comic_allies_23"],
        release_at      : {year: 2018, month: 10, day: 1}
    },
    comic_krutiks_10_2018                            : {
        name           : "Крутиксы #10 (2018)",
        number         : "10",
        type           : "single",
        ranges         : ["range_childrens_comics"],
        previous_comics: ["comic_krutiks_9_2018"],
        next_comics    : ["comic_krutiks_11_2018"],
        release_at     : {year: 2018, month: 10, day: 3}
    },
    comic_besoboy_vol_2_22                           : {
        name            : "Бесобой Vol.2 #22 Воля мёртвых, часть 3",
        number          : "22",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_5"],
        previous_comics : ["comic_besoboy_vol_2_21"],
        next_comics     : ["comic_besoboy_vol_2_23"],
        release_at      : {year: 2018, month: 10, day: 4}
    },
    comic_igor_grom_22                               : {
        name            : "Игорь Гром #22 Повторяй за мной, часть 1",
        number          : "22",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_tome_5"],
        previous_comics : ["comic_igor_grom_21"],
        next_comics     : ["comic_igor_grom_23"],
        release_at      : {year: 2018, month: 10, day: 4}
    },
    comic_crusade_prologue                           : {
        name            : "Крестовый поход: Пролог",
        type            : "single",
        ranges          : ["range_crossovers", "range_planeswalkers"],
        including_comics: ["comic_crusade"],
        previous_comics : ["comic_planeswalkers_21"],
        next_comics     : ["comic_crusade_1"],
        release_at      : {year: 2018, month: 10, day: 4}
    },
    comic_yarkh_step_forward_1                       : {
        name            : "Ярх. Шаг вперёд, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_bubble_legends"],
        including_comics: ["comic_yarkh_step_forward"],
        previous_comics : ["comic_besoboy_50"],
        next_comics     : ["comic_yarkh_step_forward_2"],
        release_at      : {year: 2018, month: 10, day: 4}
    },
    comic_exlibrium_tome_7                           : {
        name            : "Экслибриум том 7: Сказочке конец",
        number          : "7",
        type            : "book",
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_35", "comic_exlibrium_36", "comic_exlibrium_37", "comic_exlibrium_38",
                           "comic_exlibrium_39", "comic_exlibrium_40"],
        previous_comics : ["comic_exlibrium_tome_6"],
        next_comics     : ["comic_exlibrium_tome_8"],
        release_at      : {year: 2018, month: 10, day: 4}
    },
    comic_meteora_tome_7                             : {
        name            : "Метеора том 7: Вольная птица",
        number          : "7",
        type            : "book",
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_36", "comic_meteora_37", "comic_meteora_38", "comic_meteora_39"],
        previous_comics : ["comic_meteora_tome_6"],
        next_comics     : ["comic_meteora_tome_8"],
        release_at      : {year: 2018, month: 10, day: 4}
    },
    comic_dubin_dima                                 : {
        name            : "Дубин Дима: Провинциальные каникулы",
        type            : "book",
        ranges          : ["range_major_grom", "range_bubble_legends"],
        contained_comics: ["comic_dubin_dima_1", "comic_dubin_dima_2", "comic_dubin_dima_3", "comic_dubin_dima_4"],
        previous_comics : ["comic_major_grom_tome_8"],
        release_at      : {year: 2018, month: 10, day: 4}
    },
    comic_master_single                              : {
        name            : "Магистр. Смерть – это только начало",
        type            : "single",
        ranges          : ["range_enoch", "range_bubble_legends"],
        including_comics: ["comic_master_book"],
        previous_comics : ["comic_enoch_50"],
        release_at      : {year: 2018, month: 10, day: 4}
    },
    comic_master_book                                : {
        name            : "Магистр. Смерть – это только начало",
        type            : "book",
        ranges          : ["range_enoch", "range_bubble_legends"],
        contained_comics: ["comic_master_single"],
        previous_comics : ["comic_enoch_tome_8"],
        release_at      : {year: 2018, month: 10, day: 4}
    },
    comic_ziggy_and_shmyg_save_comiccon              : {
        name           : "Зигги и Шмыг спасают ComicCon",
        type           : "book",
        ranges         : ["range_ziggy_and_shmyg"],
        previous_comics: ["comic_ziggy_and_shmyg_destroy_the_bubble_universe"],
        release_at     : {year: 2018, month: 10, day: 4}
    },
    comic_besoboy_vol_2_tome_3                       : {
        name            : "Бесобой Vol.2 том 3: Откровения",
        number          : "3",
        type            : "book",
        ranges          : ["range_besoboy_vol_2"],
        contained_comics: ["comic_besoboy_vol_2_11", "comic_besoboy_vol_2_12", "comic_besoboy_vol_2_13",
                           "comic_besoboy_vol_2_14"],
        previous_comics : ["comic_besoboy_vol_2_tome_2"],
        next_comics     : ["comic_witch_hunt"],
        release_at      : {year: 2018, month: 10, day: 15}
    },
    comic_igor_grom_tome_3                           : {
        name            : "Игорь Гром том 3: Умный человек",
        number          : "3",
        type            : "book",
        ranges          : ["range_igor_grom"],
        contained_comics: ["comic_igor_grom_11", "comic_igor_grom_12", "comic_igor_grom_13", "comic_igor_grom_14"],
        previous_comics : ["comic_igor_grom_tome_2"],
        next_comics     : ["comic_witch_hunt"],
        release_at      : {year: 2018, month: 8, day: 13}
    },
    comic_planeswalkers_tome_3                       : {
        name            : "Мироходцы том 3: Лицом к лицу",
        number          : "3",
        type            : "book",
        ranges          : ["range_planeswalkers"],
        contained_comics: ["comic_planeswalkers_11", "comic_planeswalkers_12", "comic_planeswalkers_13",
                           "comic_planeswalkers_14"],
        previous_comics : ["comic_planeswalkers_tome_2"],
        next_comics     : ["comic_witch_hunt"],
        release_at      : {year: 2018, month: 10, day: 15}
    },
    comic_allies_tome_3                              : {
        name            : "Союзники том 3: Имаго",
        number          : "3",
        type            : "book",
        ranges          : ["range_allies"],
        contained_comics: ["comic_allies_10", "comic_allies_11", "comic_allies_12", "comic_allies_13",
                           "comic_allies_14"],
        previous_comics : ["comic_allies_tome_2"],
        next_comics     : ["comic_witch_hunt"],
        release_at      : {year: 2018, month: 10, day: 15}
    },
    comic_witch_hunt                                 : {
        name            : "Охота на ведьм",
        type            : "book",
        ranges          : ["range_crossovers", "range_besoboy_vol_2", "range_igor_grom", "range_allies",
                           "range_planeswalkers"],
        contained_comics: ["comic_witch_hunt_prologue", "comic_allies_15", "comic_besoboy_vol_2_15",
                           "comic_igor_grom_15", "comic_planeswalkers_15", "comic_witch_hunt_finale"],
        previous_comics : ["comic_besoboy_vol_2_book_2", "comic_igor_grom_book_2", "comic_allies_book_2",
                           "comic_planeswalkers_book_2", "comic_besoboy_vol_2_tome_3", "comic_igor_grom_tome_3",
                           "comic_planeswalkers_tome_3", "comic_allies_tome_3"],
        next_comics     : ["comic_planeswalkers_tome_4", "comic_besoboy_vol_2_tome_4", "comic_allies_tome_4",
                           "comic_igor_grom_tome_4"],
        release_at      : {year: 2018, month: 10, day: 15}
    },
    comic_jackets_and_revolvers_tome_2               : {
        name           : "Пиджаки и Револьверы. Том 2: Праздник в красных тонах",
        number         : "2",
        type           : "book",
        ranges         : ["range_yulia_zhuravleva"],
        previous_comics: ["comic_jackets_and_revolvers_tome_1"],
        next_comics    : ["comic_jackets_and_revolvers_tome_3"],
        release_at     : {year: 2018, month: 10, day: 17}
    },
    comic_exlibrium_48                               : {
        name            : "Экслибриум #48 Светлая полоса, часть 3",
        number          : "48",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_9"],
        previous_comics : ["comic_exlibrium_47"],
        next_comics     : ["comic_exlibrium_49"],
        release_at      : {year: 2018, month: 10, day: 19}
    },
    comic_meteora_48                                 : {
        name            : "Метеора #48 Стоп машина! часть 4",
        number          : "48",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_9"],
        previous_comics : ["comic_meteora_47"],
        next_comics     : ["comic_meteora_49"],
        release_at      : {year: 2018, month: 10, day: 25}
    },
    comic_yarkh_step_forward_2                       : {
        name            : "Ярх. Шаг вперёд, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_bubble_legends"],
        including_comics: ["comic_yarkh_step_forward"],
        previous_comics : ["comic_yarkh_step_forward_1"],
        next_comics     : ["comic_yarkh_step_forward_3"],
        release_at      : {year: 2018, month: 10, day: 29}
    },
    comic_allies_23                                  : {
        name            : "Союзники #23 Оборотная сторона, часть 3",
        number          : "23",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_5"],
        previous_comics : ["comic_allies_22"],
        next_comics     : ["comic_allies_24"],
        release_at      : {year: 2018, month: 11, day: 1}
    },
    comic_krutiks_11_2018                            : {
        name           : "Крутиксы #11 (2018)",
        number         : "11",
        type           : "single",
        ranges         : ["range_childrens_comics"],
        previous_comics: ["comic_krutiks_10_2018"],
        next_comics    : ["comic_krutiks_12_2018"],
        release_at     : {year: 2018, month: 11, day: 3}
    },
    comic_besoboy_vol_2_23                           : {
        name            : "Бесобой Vol.2 #23 Власть",
        number          : "23",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_5"],
        previous_comics : ["comic_besoboy_vol_2_22"],
        next_comics     : ["comic_besoboy_vol_2_24"],
        release_at      : {year: 2018, month: 11, day: 5}
    },
    comic_igor_grom_23                               : {
        name            : "Игорь Гром #23 Повторяй за мной, часть 2",
        number          : "23",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_tome_5"],
        previous_comics : ["comic_igor_grom_22"],
        next_comics     : ["comic_igor_grom_24"],
        release_at      : {year: 2018, month: 11, day: 9}
    },
    comic_crusade_1                                  : {
        name            : "Крестовый поход #1",
        number          : "1",
        type            : "single",
        ranges          : ["range_crossovers", "range_planeswalkers"],
        including_comics: ["comic_crusade"],
        previous_comics : ["comic_crusade_prologue"],
        next_comics     : ["comic_crusade_2"],
        release_at      : {year: 2018, month: 11, day: 15}
    },
    comic_crusade_wolf_1                             : {
        name            : "Крестовый поход: Волк. Часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_crossovers", "range_planeswalkers"],
        including_comics: ["comic_crusade_wolf"],
        previous_comics : ["comic_planeswalkers_21"],
        next_comics     : ["comic_crusade_wolf_2"],
        release_at      : {year: 2018, month: 11, day: 15}
    },
    comic_exlibrium_49                               : {
        name            : "Экслибриум #49 Светлая полоса, часть 4",
        number          : "49",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_9"],
        previous_comics : ["comic_exlibrium_48"],
        next_comics     : ["comic_exlibrium_50"],
        release_at      : {year: 2018, month: 11, day: 19}
    },
    comic_meteora_49                                 : {
        name            : "Метеора #49 Стоп машина! часть 5",
        number          : "49",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_9"],
        previous_comics : ["comic_meteora_48"],
        next_comics     : ["comic_meteora_50"],
        release_at      : {year: 2018, month: 11, day: 26}
    },
    comic_yarkh_step_forward_3                       : {
        name            : "Ярх. Шаг вперёд, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_bubble_legends"],
        including_comics: ["comic_yarkh_step_forward"],
        previous_comics : ["comic_yarkh_step_forward_2"],
        next_comics     : ["comic_yarkh_step_forward_4"],
        release_at      : {year: 2018, month: 11, day: 28}
    },
    comic_allies_24                                  : {
        name            : "Союзники #24 Работа над ошибками, часть 1",
        number          : "24",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_6"],
        previous_comics : ["comic_allies_23"],
        next_comics     : ["comic_allies_25"],
        release_at      : {year: 2018, month: 11, day: 30}
    },
    comic_krutiks_12_2018                            : {
        name           : "Крутиксы #12 (2018)",
        number         : "12",
        type           : "single",
        ranges         : ["range_childrens_comics"],
        previous_comics: ["comic_krutiks_11_2018"],
        next_comics    : ["comic_krutiks_new_years_special"],
        release_at     : {year: 2018, month: 12, day: 3}
    },
    comic_besoboy_vol_2_24                           : {
        name            : "Бесобой Vol.2 #24 Зачистка, часть 1",
        number          : "24",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_6"],
        previous_comics : ["comic_besoboy_vol_2_23"],
        next_comics     : ["comic_besoboy_vol_2_25"],
        release_at      : {year: 2018, month: 12, day: 5}
    },
    comic_igor_grom_24                               : {
        name            : "Игорь Гром #24 Повторяй за мной, часть 3",
        number          : "24",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_tome_5"],
        previous_comics : ["comic_igor_grom_23"],
        next_comics     : ["comic_igor_grom_25"],
        release_at      : {year: 2018, month: 12, day: 10}
    },
    comic_crusade_wolf_2                             : {
        name            : "Крестовый поход: Волк. Часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_crossovers", "range_planeswalkers"],
        including_comics: ["comic_crusade_wolf"],
        previous_comics : ["comic_crusade_wolf_1"],
        next_comics     : ["comic_crusade_wolf_3"],
        release_at      : {year: 2018, month: 12, day: 14}
    },
    comic_crusade_2                                  : {
        name            : "Крестовый поход #2",
        number          : "2",
        type            : "single",
        ranges          : ["range_crossovers", "range_planeswalkers"],
        including_comics: ["comic_crusade"],
        previous_comics : ["comic_crusade_1"],
        next_comics     : ["comic_besoboy_vol_2_25", "comic_crusade_3"],
        release_at      : {year: 2018, month: 12, day: 20}
    },
    comic_major_grom_promise                         : {
        name           : "Майор Гром. Обещание",
        type           : "single",
        ranges         : ["range_major_grom", "range_bubble_legends", "range_igor_grom"],
        previous_comics: ["comic_major_grom_50", "comic_major_grom_tome_8"],
        release_at     : {year: 2018, month: 12, day: 29}
    },
    comic_exlibrium_50                               : {
        name            : "Экслибриум #50 Светлая полоса, часть 5",
        number          : "50",
        type            : "single",
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_tome_9"],
        previous_comics : ["comic_exlibrium_49"],
        next_comics     : ["comic_exlibrium_blank_sheet_single", "comic_exlibrium_second_life"],
        release_at      : {year: 2018, month: 12, day: 29}
    },
    comic_meteora_50                                 : {
        name            : "Метеора #50 Стоп машина! часть 6",
        number          : "50",
        type            : "single",
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_tome_9"],
        previous_comics : ["comic_meteora_49"],
        next_comics     : ["comic_teo_1"],
        release_at      : {year: 2018, month: 12, day: 30}
    },
    comic_igor_ugor_tome_2                           : {
        name           : "Игорь Угорь. Том 2. Икра",
        number         : "2",
        type           : "book",
        ranges         : ["range_igor_ugor"],
        previous_comics: ["comic_igor_ugor_tome_1"],
        release_at     : {year: 2019}
    },
    comic_russian_folk_tales_in_comics               : {
        name      : "Русские народные сказки в комиксах",
        type      : "book",
        ranges    : ["range_childrens_comics", "range_evgeny_yakovlev"],
        release_at: {year: 2019}
    },
    comic_thief_of_shadows_1                         : {
        name       : "Вор Теней #1 Час Волка",
        number     : "1",
        type       : "single",
        ranges     : ["range_thief_of_shadows"],
        next_comics: ["comic_thief_of_shadows_2"],
        release_at : {year: 2019}
    },
    comic_thief_of_shadows_2                         : {
        name           : "Вор Теней #2 Вор Теней против бандитов-футуристов",
        number         : "2",
        type           : "single",
        ranges         : ["range_thief_of_shadows"],
        previous_comics: ["comic_thief_of_shadows_1"],
        release_at     : {year: 2019}
    },
    comic_allies_25                                  : {
        name            : "Союзники #25 Работа над ошибками, часть 2",
        number          : "25",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_6"],
        previous_comics : ["comic_allies_24"],
        next_comics     : ["comic_allies_26"],
        release_at      : {year: 2019, month: 1, day: 1}
    },
    comic_krutiks_new_years_special                  : {
        name           : "Крутиксы: Новогодний спецвыпуск",
        type           : "single",
        ranges         : ["range_childrens_comics"],
        previous_comics: ["comic_krutiks_12_2018"],
        release_at     : {year: 2019, month: 1, day: 3}
    },
    comic_besoboy_vol_2_25                           : {
        name            : "Бесобой Vol.2 #25 Зачистка, часть 2",
        number          : "25",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_6"],
        previous_comics : ["comic_besoboy_vol_2_24", "comic_crusade_2"],
        next_comics     : ["comic_besoboy_vol_2_26"],
        release_at      : {year: 2019, month: 1, day: 5}
    },
    comic_igor_grom_25                               : {
        name            : "Игорь Гром #25 Повторяй за мной, часть 4",
        number          : "25",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_tome_5"],
        previous_comics : ["comic_igor_grom_24"],
        next_comics     : ["comic_igor_grom_26"],
        release_at      : {year: 2019, month: 1, day: 15}
    },
    comic_crusade_3                                  : {
        name            : "Крестовый поход #3",
        number          : "3",
        type            : "single",
        ranges          : ["range_crossovers", "range_planeswalkers"],
        including_comics: ["comic_crusade"],
        previous_comics : ["comic_crusade_2"],
        next_comics     : ["comic_besoboy_vol_2_26", "comic_crusade_4"],
        release_at      : {year: 2019, month: 1, day: 21}
    },
    comic_crusade_wolf_3                             : {
        name            : "Крестовый поход: Волк. Часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_crossovers", "range_planeswalkers"],
        including_comics: ["comic_crusade_wolf"],
        previous_comics : ["comic_crusade_wolf_2"],
        next_comics     : ["comic_crusade_wolf_4"],
        release_at      : {year: 2019, month: 1, day: 21}
    },
    comic_yarkh_step_forward_4                       : {
        name            : "Ярх. Шаг вперёд, часть 4",
        number          : "4",
        type            : "single",
        ranges          : ["range_bubble_legends"],
        including_comics: ["comic_yarkh_step_forward"],
        previous_comics : ["comic_yarkh_step_forward_3"],
        next_comics     : ["comic_yarkh_step_forward_5"],
        release_at      : {year: 2019, month: 1, day: 28}
    },
    comic_allies_26                                  : {
        name            : "Союзники #26 Работа над ошибками, часть 3",
        number          : "26",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_6"],
        previous_comics : ["comic_allies_25"],
        next_comics     : ["comic_allies_27"],
        release_at      : {year: 2019, month: 2, day: 1}
    },
    comic_besoboy_vol_2_26                           : {
        name            : "Бесобой Vol.2 #26 Зачистка, часть 3",
        number          : "26",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_6"],
        previous_comics : ["comic_besoboy_vol_2_25", "comic_crusade_3"],
        next_comics     : ["comic_besoboy_vol_2_27"],
        release_at      : {year: 2019, month: 2, day: 5}
    },
    comic_igor_grom_26                               : {
        name            : "Игорь Гром #26 Игра в солдатики, часть 1",
        number          : "26",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_tome_6"],
        previous_comics : ["comic_igor_grom_25"],
        next_comics     : ["comic_igor_grom_27"],
        release_at      : {year: 2019, month: 2, day: 11}
    },
    comic_crusade_wolf_4                             : {
        name            : "Крестовый поход: Волк. Часть 4",
        number          : "4",
        type            : "single",
        ranges          : ["range_crossovers", "range_planeswalkers"],
        including_comics: ["comic_crusade_wolf"],
        previous_comics : ["comic_crusade_wolf_3"],
        next_comics     : ["comic_crusade_wolf_5"],
        release_at      : {year: 2019, month: 2, day: 18}
    },
    comic_yarkh_step_forward_5                       : {
        name            : "Ярх. Шаг вперёд, часть 5",
        number          : "5",
        type            : "single",
        ranges          : ["range_bubble_legends"],
        including_comics: ["comic_yarkh_step_forward"],
        previous_comics : ["comic_yarkh_step_forward_4"],
        next_comics     : ["comic_yarkh_step_forward_6"],
        release_at      : {year: 2019, month: 2, day: 28}
    },
    comic_allies_27                                  : {
        name            : "Союзники #27 Работа над ошибками, часть 4",
        number          : "27",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_6"],
        previous_comics : ["comic_allies_26"],
        next_comics     : ["comic_allies_28"],
        release_at      : {year: 2019, month: 3, day: 1}
    },
    comic_crusade_4                                  : {
        name            : "Крестовый поход #4",
        number          : "4",
        type            : "single",
        ranges          : ["range_crossovers", "range_planeswalkers"],
        including_comics: ["comic_crusade"],
        previous_comics : ["comic_crusade_3"],
        next_comics     : ["comic_crusade_epilogue"],
        release_at      : {year: 2019, month: 3, day: 8}
    },
    comic_besoboy_vol_2_27                           : {
        name            : "Бесобой Vol.2 #27 На руинах, часть 1",
        number          : "27",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_6"],
        previous_comics : ["comic_besoboy_vol_2_26"],
        next_comics     : ["comic_besoboy_vol_2_28"],
        release_at      : {year: 2019, month: 3, day: 11}
    },
    comic_igor_grom_27                               : {
        name            : "Игорь Гром #27 Игра в солдатики, часть 2",
        number          : "27",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_tome_6"],
        previous_comics : ["comic_igor_grom_26"],
        next_comics     : ["comic_igor_grom_28"],
        release_at      : {year: 2019, month: 3, day: 15}
    },
    comic_crusade_wolf_5                             : {
        name            : "Крестовый поход: Волк. Часть 5",
        number          : "5",
        type            : "single",
        ranges          : ["range_crossovers", "range_planeswalkers"],
        including_comics: ["comic_crusade_wolf"],
        previous_comics : ["comic_crusade_wolf_4"],
        release_at      : {year: 2019, month: 3, day: 20}
    },
    comic_yarkh_step_forward_6                       : {
        name            : "Ярх. Шаг вперёд, часть 6",
        number          : "6",
        type            : "single",
        ranges          : ["range_bubble_legends"],
        including_comics: ["comic_yarkh_step_forward"],
        previous_comics : ["comic_yarkh_step_forward_5"],
        release_at      : {year: 2019, month: 3, day: 28}
    },
    comic_crusade_epilogue                           : {
        name            : "Крестовый поход: Эпилог",
        type            : "single",
        ranges          : ["range_crossovers", "range_planeswalkers"],
        including_comics: ["comic_crusade"],
        previous_comics : ["comic_crusade_4"],
        release_at      : {year: 2019, month: 3, day: 29}
    },
    comic_allies_28                                  : {
        name            : "Союзники #28 Джали, истребительница упырей",
        number          : "28",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_6"],
        previous_comics : ["comic_allies_27"],
        next_comics     : ["comic_allies_29"],
        release_at      : {year: 2019, month: 4, day: 1}
    },
    comic_besoboy_vol_2_28                           : {
        name            : "Бесобой Vol.2 #28 На руинах, часть 2",
        number          : "28",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_6"],
        previous_comics : ["comic_besoboy_vol_2_27"],
        next_comics     : ["comic_besoboy_vol_2_29"],
        release_at      : {year: 2019, month: 4, day: 8}
    },
    comic_meteora_tome_8                             : {
        name            : "Метеора том 8: Король и плут",
        number          : "8",
        type            : "book",
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_40", "comic_meteora_41", "comic_meteora_42", "comic_meteora_43",
                           "comic_meteora_44"],
        previous_comics : ["comic_meteora_tome_7"],
        next_comics     : ["comic_meteora_tome_9"],
        release_at      : {year: 2019, month: 4, day: 8}
    },
    comic_planeswalkers_tome_4                       : {
        name            : "Мироходцы том 4: Битва за Эдем",
        number          : "4",
        type            : "book",
        ranges          : ["range_planeswalkers"],
        contained_comics: ["comic_planeswalkers_16", "comic_planeswalkers_17", "comic_planeswalkers_18",
                           "comic_planeswalkers_19", "comic_planeswalkers_20", "comic_planeswalkers_21"],
        previous_comics : ["comic_witch_hunt"],
        next_comics     : ["comic_besoboy_and_planeswalkers_book", "comic_crusade", "comic_crusade_wolf"],
        release_at      : {year: 2018, month: 10, day: 15}
    },
    comic_igor_grom_28                               : {
        name            : "Игорь Гром #28 Игра в солдатики, часть 3",
        number          : "28",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_tome_6"],
        previous_comics : ["comic_igor_grom_27"],
        next_comics     : ["comic_igor_grom_29"],
        release_at      : {year: 2019, month: 4, day: 15}
    },
    comic_sister_kukki_1                             : {
        name            : "Сестра. Кукки (часть 1)",
        number          : "1",
        type            : "single",
        ranges          : ["range_bubble_legends", "range_new_bubble_heroes"],
        including_comics: ["comic_sister_kukki"],
        release_at      : {year: 2019, month: 4, day: 21}
    },
    comic_falcon_1                                   : {
        name       : "Сокол #1 Общий интерес",
        number     : "1",
        type       : "single",
        ranges     : ["range_bubble_legends", "range_new_bubble_heroes"],
        next_comics: ["comic_falcon_2"],
        release_at : {year: 2019, month: 4, day: 21}
    },
    comic_plush_policeman_the_perfect_plan           : {
        name      : "Плюшевый полицейский. Идеальный план",
        type      : "single",
        ranges    : ["range_bubble_legends", "range_new_bubble_heroes"],
        release_at: {year: 2019, month: 4, day: 21}
    },
    comic_black_hand_and_mysterious_package          : {
        name      : "Чёрная рука и загадочная посылка",
        type      : "single",
        ranges    : ["range_bubble_legends", "range_new_bubble_heroes"],
        release_at: {year: 2019, month: 4, day: 21}
    },
    comic_exlibrium_blank_sheet_single               : {
        name            : "Экслибриум. Чистый лист",
        type            : "single",
        ranges          : ["range_exlibrium", "range_bubble_legends", "range_exlibrium_second_life"],
        including_comics: ["comic_exlibrium_blank_sheet_book"],
        previous_comics : ["comic_exlibrium_50"],
        release_at      : {year: 2019, month: 4, day: 21}
    },
    comic_exlibrium_blank_sheet_book                 : {
        name            : "Экслибриум. Чистый лист",
        type            : "book",
        ranges          : ["range_exlibrium", "range_bubble_legends", "range_exlibrium_second_life"],
        contained_comics: ["comic_exlibrium_blank_sheet_single"],
        previous_comics : ["comic_exlibrium_tome_9"],
        release_at      : {year: 2019, month: 4, day: 21}
    },
    comic_besoboy_vol_2_tome_4                       : {
        name            : "Бесобой Vol.2 том 4: В расчёте",
        number          : "4",
        type            : "book",
        ranges          : ["range_besoboy_vol_2"],
        contained_comics: ["comic_besoboy_vol_2_16", "comic_besoboy_vol_2_17", "comic_besoboy_vol_2_18",
                           "comic_besoboy_vol_2_19"],
        previous_comics : ["comic_witch_hunt"],
        next_comics     : ["comic_besoboy_vol_2_tome_5"],
        release_at      : {year: 2019, month: 4, day: 25}
    },
    comic_besoboy_vol_2_tome_5                       : {
        name            : "Бесобой Vol.2 том 5: Воля Мёртвых",
        number          : "5",
        type            : "book",
        ranges          : ["range_besoboy_vol_2"],
        contained_comics: ["comic_besoboy_vol_2_20", "comic_besoboy_vol_2_21", "comic_besoboy_vol_2_22",
                           "comic_besoboy_vol_2_23"],
        previous_comics : ["comic_besoboy_vol_2_tome_4"],
        next_comics     : ["comic_besoboy_vol_2_tome_6"],
        release_at      : {year: 2019, month: 4, day: 25}
    },
    comic_allies_29                                  : {
        name            : "Союзники #29 Падение Голиафа",
        number          : "29",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_7"],
        previous_comics : ["comic_allies_28"],
        next_comics     : ["comic_allies_30"],
        release_at      : {year: 2019, month: 5, day: 1}
    },
    comic_besoboy_vol_2_29                           : {
        name            : "Бесобой Vol.2 #29 По душам",
        number          : "29",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_7"],
        previous_comics : ["comic_besoboy_vol_2_28"],
        next_comics     : ["comic_besoboy_vol_2_30"],
        release_at      : {year: 2019, month: 5, day: 8}
    },
    comic_allies_tome_4                              : {
        name            : "Союзники том 4: Без ума",
        number          : "4",
        type            : "book",
        ranges          : ["range_allies"],
        contained_comics: ["comic_allies_16", "comic_allies_17", "comic_allies_18", "comic_allies_19"],
        previous_comics : ["comic_witch_hunt"],
        next_comics     : ["comic_allies_tome_5"],
        release_at      : {year: 2019, month: 5, day: 10}
    },
    comic_igor_grom_29                               : {
        name            : "Игорь Гром #29 Игра в солдатики, часть 4",
        number          : "29",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_tome_6"],
        previous_comics : ["comic_igor_grom_28"],
        next_comics     : ["comic_igor_grom_30"],
        release_at      : {year: 2019, month: 5, day: 17}
    },
    comic_anna_input                                 : {
        name       : "АННА. Input",
        type       : "single",
        ranges     : ["range_bubble_legends", "range_new_bubble_heroes"],
        next_comics: ["comic_anna_space_of_options"],
        release_at : {year: 2019, month: 5, day: 17}
    },
    comic_cell_split                                 : {
        name      : "Клетка. Раскол",
        type      : "single",
        ranges    : ["range_bubble_legends", "range_new_bubble_heroes"],
        release_at: {year: 2019, month: 5, day: 17}
    },
    comic_pulse_heros_voice                          : {
        name       : "Импульс. Голос героя",
        type       : "single",
        ranges     : ["range_bubble_legends", "range_new_bubble_heroes"],
        next_comics: ["comic_pulse_premiere"],
        release_at : {year: 2019, month: 5, day: 17}
    },
    comic_exlibrium_tome_8                           : {
        name            : "Экслибриум том 8: Переворот",
        number          : "8",
        type            : "book",
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_41", "comic_exlibrium_42", "comic_exlibrium_43", "comic_exlibrium_44",
                           "comic_exlibrium_45"],
        previous_comics : ["comic_exlibrium_tome_7"],
        next_comics     : ["comic_exlibrium_tome_9"],
        release_at      : {year: 2019, month: 5, day: 17}
    },
    comic_igor_grom_tome_4                           : {
        name            : "Игорь Гром том 4: Метод Локи",
        number          : "4",
        type            : "book",
        ranges          : ["range_igor_grom"],
        contained_comics: ["comic_igor_grom_16", "comic_igor_grom_17", "comic_igor_grom_18", "comic_igor_grom_19",
                           "comic_igor_grom_20", "comic_igor_grom_21"],
        previous_comics : ["comic_witch_hunt"],
        next_comics     : ["comic_igor_grom_tome_5"],
        release_at      : {year: 2019, month: 5, day: 22}
    },
    comic_tagar_tome_2_chapter_1                     : {
        name            : "Тагар. Том 2, глава 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        including_comics: ["comic_tagar_tome_2"],
        previous_comics : ["comic_tagar_tome_1_chapter_4"],
        next_comics     : ["comic_tagar_tome_2_chapter_2"],
        release_at      : {year: 2019, month: 5, day: 30}
    },
    comic_tagar_tome_2_chapter_2                     : {
        name            : "Тагар. Том 2, глава 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        including_comics: ["comic_tagar_tome_2"],
        previous_comics : ["comic_tagar_tome_2_chapter_1"],
        next_comics     : ["comic_tagar_tome_2_chapter_3"],
        release_at      : {year: 2019, month: 5, day: 30}
    },
    comic_tagar_tome_2_chapter_3                     : {
        name            : "Тагар. Том 2, глава 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        including_comics: ["comic_tagar_tome_2"],
        previous_comics : ["comic_tagar_tome_2_chapter_2"],
        next_comics     : ["comic_tagar_tome_2_chapter_4"],
        release_at      : {year: 2019, month: 5, day: 30}
    },
    comic_tagar_tome_2_chapter_4                     : {
        name            : "Тагар. Том 2, глава 4",
        number          : "4",
        type            : "single",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        including_comics: ["comic_tagar_tome_2"],
        previous_comics : ["comic_tagar_tome_2_chapter_3"],
        next_comics     : ["comic_tagar_tome_2_chapter_5"],
        release_at      : {year: 2019, month: 5, day: 30}
    },
    comic_tagar_tome_2_chapter_5                     : {
        name            : "Тагар. Том 2, глава 5",
        number          : "5",
        type            : "single",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        including_comics: ["comic_tagar_tome_2"],
        previous_comics : ["comic_tagar_tome_2_chapter_4"],
        release_at      : {year: 2019, month: 5, day: 30}
    },
    comic_tagar_tome_2                               : {
        name            : "Тагар. Том 2",
        number          : "2",
        type            : "book",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        contained_comics: ["comic_tagar_tome_2_chapter_1", "comic_tagar_tome_2_chapter_2",
                           "comic_tagar_tome_2_chapter_3", "comic_tagar_tome_2_chapter_4",
                           "comic_tagar_tome_2_chapter_5"],
        previous_comics : ["comic_tagar_tome_1"],
        release_at      : {year: 2019, month: 5, day: 30}
    },
    comic_allies_30                                  : {
        name            : "Союзники #30 Пожинающий бурю, часть 1",
        number          : "30",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_7"],
        previous_comics : ["comic_allies_29"],
        next_comics     : ["comic_allies_31"],
        release_at      : {year: 2019, month: 5, day: 31}
    },
    comic_besoboy_vol_2_30                           : {
        name            : "Бесобой Vol.2 #30 Бунт, часть 1",
        number          : "30",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_7"],
        previous_comics : ["comic_besoboy_vol_2_29"],
        next_comics     : ["comic_besoboy_vol_2_31"],
        release_at      : {year: 2019, month: 6, day: 8}
    },
    comic_igor_grom_30                               : {
        name            : "Игорь Гром #30 Ребята с нашего двора",
        number          : "30",
        type            : "single",
        ranges          : ["range_igor_grom"],
        including_comics: ["comic_igor_grom_tome_6"],
        previous_comics : ["comic_igor_grom_29"],
        next_comics     : ["comic_igor_grom_31"],
        release_at      : {year: 2019, month: 6, day: 17}
    },
    comic_allies_tome_5                              : {
        name            : "Союзники том 5. Оборотная сторона",
        number          : "5",
        type            : "book",
        ranges          : ["range_allies"],
        contained_comics: ["comic_allies_20", "comic_allies_21", "comic_allies_22", "comic_allies_23"],
        previous_comics : ["comic_allies_tome_4"],
        next_comics     : ["comic_allies_tome_6"],
        release_at      : {year: 2019, month: 6, day: 21}
    },
    comic_allies_31                                  : {
        name            : "Союзники #31 Пожинающий бурю, часть 2",
        number          : "31",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_7"],
        previous_comics : ["comic_allies_30"],
        next_comics     : ["comic_allies_32"],
        release_at      : {year: 2019, month: 7, day: 1}
    },
    comic_besoboy_vol_2_31                           : {
        name            : "Бесобой Vol.2 #31 Бунт, часть 2",
        number          : "31",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_7"],
        previous_comics : ["comic_besoboy_vol_2_30"],
        next_comics     : ["comic_besoboy_vol_2_32"],
        release_at      : {year: 2019, month: 7, day: 10}
    },
    comic_igor_grom_31                               : {
        name           : "Игорь Гром #31 Гори-гори ясно, часть 1",
        number         : "31",
        type           : "single",
        ranges         : ["range_igor_grom"],
        previous_comics: ["comic_igor_grom_30"],
        next_comics    : ["comic_igor_grom_32"],
        release_at     : {year: 2019, month: 7, day: 15}
    },
    comic_dont_be_reckless_quatrefoil                : {
        name      : "Не буди лихо. Четырехлистник",
        type      : "single",
        ranges    : ["range_bubble_legends", "range_new_bubble_heroes"],
        release_at: {year: 2019, month: 8}
    },
    comic_besoboy_vol_2_32                           : {
        name            : "Бесобой Vol.2 #32 Бунт, часть 3",
        number          : "32",
        type            : "single",
        ranges          : ["range_besoboy_vol_2"],
        including_comics: ["comic_besoboy_vol_2_tome_7"],
        previous_comics : ["comic_besoboy_vol_2_31"],
        next_comics     : ["comic_besoboy_vol_2_33"],
        release_at      : {year: 2019, month: 8, day: 9}
    },
    comic_igor_grom_32                               : {
        name           : "Игорь Гром #32 Гори-гори ясно, часть 2",
        number         : "32",
        type           : "single",
        ranges         : ["range_igor_grom"],
        previous_comics: ["comic_igor_grom_31"],
        next_comics    : ["comic_igor_grom_33"],
        release_at     : {year: 2019, month: 8, day: 15}
    },
    comic_allies_32                                  : {
        name            : "Союзники #32 Цена прощения, часть 1",
        number          : "32",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_7"],
        previous_comics : ["comic_allies_31"],
        next_comics     : ["comic_allies_33"],
        release_at      : {year: 2019, month: 9, day: 2}
    },
    comic_allies_33                                  : {
        name            : "Союзники #33 Цена прощения, часть 2",
        number          : "33",
        type            : "single",
        ranges          : ["range_allies"],
        including_comics: ["comic_allies_tome_7"],
        previous_comics : ["comic_allies_32"],
        next_comics     : ["comic_allies_34"],
        release_at      : {year: 2019, month: 9, day: 2}
    },
    comic_memento_mori_call_of_the_void              : {
        name      : "Memento Mori. Зов пустоты",
        type      : "single",
        ranges    : ["range_bubble_legends", "range_new_bubble_heroes"],
        release_at: {year: 2019, month: 9, day: 3}
    },
    comic_besoboy_vol_2_tome_6                       : {
        name            : "Бесобой Vol.2 том 6: Зачистка",
        number          : "6",
        type            : "book",
        ranges          : ["range_besoboy_vol_2"],
        contained_comics: ["comic_besoboy_vol_2_24", "comic_besoboy_vol_2_25", "comic_besoboy_vol_2_26",
                           "comic_besoboy_vol_2_27", "comic_besoboy_vol_2_28"],
        previous_comics : ["comic_besoboy_vol_2_tome_5"],
        next_comics     : ["comic_besoboy_vol_2_tome_7"],
        release_at      : {year: 2019, month: 9, day: 5}
    },
    comic_igor_grom_tome_5                           : {
        name            : "Игорь Гром том 5: Повторяй за мной",
        number          : "5",
        type            : "book",
        ranges          : ["range_igor_grom"],
        contained_comics: ["comic_igor_grom_22", "comic_igor_grom_23", "comic_igor_grom_24", "comic_igor_grom_25"],
        previous_comics : ["comic_igor_grom_tome_4"],
        next_comics     : ["comic_igor_grom_tome_6"],
        release_at      : {year: 2019, month: 9, day: 12}
    },
    comic_exlibrium_second_life                      : {
        name            : "Экслибриум: Жизнь вторая",
        number          : "0",
        type            : "single",
        ranges          : ["range_exlibrium_second_life"],
        including_comics: ["comic_exlibrium_second_life_tome_1"],
        previous_comics : ["comic_exlibrium_50"],
        next_comics     : ["comic_exlibrium_second_life_1"],
        release_at      : {year: 2019, month: 10, day: 3}
    },
    comic_crusade                                    : {
        name            : "Крестовый поход",
        type            : "book",
        ranges          : ["range_crossovers", "range_planeswalkers"],
        contained_comics: ["comic_crusade_prologue", "comic_crusade_1", "comic_crusade_2", "comic_crusade_3",
                           "comic_crusade_4", "comic_crusade_epilogue"],
        previous_comics : ["comic_planeswalkers_tome_4"],
        release_at      : {year: 2019, month: 10, day: 3}
    },
    comic_crusade_wolf                               : {
        name            : "Крестовый поход: Волк",
        type            : "book",
        ranges          : ["range_crossovers", "range_planeswalkers"],
        contained_comics: ["comic_crusade_wolf_1", "comic_crusade_wolf_2", "comic_crusade_wolf_3",
                           "comic_crusade_wolf_4", "comic_crusade_wolf_5"],
        previous_comics : ["comic_planeswalkers_tome_4"],
        release_at      : {year: 2019, month: 10, day: 3}
    },
    comic_exlibrium_tome_9                           : {
        name            : "Экслибриум том 9: Светлая полоса",
        number          : "9",
        type            : "book",
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_46", "comic_exlibrium_47", "comic_exlibrium_48", "comic_exlibrium_49",
                           "comic_exlibrium_50"],
        previous_comics : ["comic_exlibrium_tome_8"],
        next_comics     : ["comic_exlibrium_blank_sheet_book", "comic_exlibrium_second_life_tome_1"],
        release_at      : {year: 2019, month: 10, day: 3}
    },
    comic_meteora_tome_9                             : {
        name            : "Метеора том 9: Стоп машина!",
        number          : "9",
        type            : "book",
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_45", "comic_meteora_46", "comic_meteora_47", "comic_meteora_48",
                           "comic_meteora_49", "comic_meteora_50"],
        previous_comics : ["comic_meteora_tome_8"],
        next_comics     : ["comic_teo"],
        release_at      : {year: 2019, month: 10, day: 3}
    },
    comic_allies_tome_6                              : {
        name            : "Союзники том 6: Работа над ошибками",
        number          : "6",
        type            : "book",
        ranges          : ["range_allies"],
        contained_comics: ["comic_allies_24", "comic_allies_25", "comic_allies_26", "comic_allies_27",
                           "comic_allies_28"],
        previous_comics : ["comic_allies_tome_5"],
        next_comics     : ["comic_allies_tome_7"],
        release_at      : {year: 2019, month: 10, day: 3}
    },
    comic_yarkh_step_forward                         : {
        name            : "Ярх. Шаг вперёд",
        type            : "book",
        ranges          : ["range_bubble_legends"],
        contained_comics: ["comic_yarkh_step_forward_1", "comic_yarkh_step_forward_2", "comic_yarkh_step_forward_3",
                           "comic_yarkh_step_forward_4", "comic_yarkh_step_forward_5", "comic_yarkh_step_forward_6"],
        previous_comics : ["comic_besoboy_tome_9"],
        release_at      : {year: 2019, month: 10, day: 3}
    },
    comic_balor_and_yana_dream_catcher_single        : {
        name            : "Балор и Яна. Ловец снов",
        type            : "single",
        ranges          : ["range_bubble_legends"],
        including_comics: ["comic_balor_and_yana_dream_catcher_book"],
        previous_comics : ["comic_besoboy_50"],
        release_at      : {year: 2019, month: 10, day: 3}
    },
    comic_balor_and_yana_dream_catcher_book          : {
        name            : "Балор и Яна. Ловец снов",
        type            : "book",
        ranges          : ["range_bubble_legends"],
        contained_comics: ["comic_balor_and_yana_dream_catcher_single"],
        previous_comics : ["comic_besoboy_tome_9"],
        release_at      : {year: 2019, month: 10, day: 3}
    },
    comic_besoboy_vol_2_33                           : {
        name           : "Бесобой Vol.2 #33 Ва-банк, часть 1",
        number         : "33",
        type           : "single",
        ranges         : ["range_besoboy_vol_2"],
        previous_comics: ["comic_besoboy_vol_2_32"],
        next_comics    : ["comic_besoboy_vol_2_34"],
        release_at     : {year: 2019, month: 10, day: 5}
    },
    comic_igor_grom_33                               : {
        name           : "Игорь Гром #33 Гори-гори ясно, часть 3",
        number         : "33",
        type           : "single",
        ranges         : ["range_igor_grom"],
        previous_comics: ["comic_igor_grom_32"],
        next_comics    : ["comic_igor_grom_34"],
        release_at     : {year: 2019, month: 10, day: 5}
    },
    comic_major_grom_1939_single                     : {
        name            : "Майор Гром: 1939",
        type            : "single",
        ranges          : ["range_major_grom"],
        including_comics: ["comic_major_grom_1939_book"],
        previous_comics : ["comic_major_grom_50"],
        release_at      : {year: 2019, month: 10, day: 21}
    },
    comic_major_grom_1939_book                       : {
        name            : "Майор Гром: 1939",
        type            : "book",
        ranges          : ["range_major_grom"],
        contained_comics: ["comic_major_grom_1939_single"],
        previous_comics : ["comic_major_grom_tome_8"],
        release_at      : {year: 2019, month: 10, day: 21}
    },
    comic_allies_34                                  : {
        name           : "Союзники #34 На круги своя, часть 1",
        number         : "34",
        type           : "single",
        ranges         : ["range_allies"],
        previous_comics: ["comic_allies_33"],
        next_comics    : ["comic_allies_35"],
        release_at     : {year: 2019, month: 10, day: 28}
    },
    comic_besoboy_vol_2_34                           : {
        name           : "Бесобой Vol.2 #34 Ва-банк, часть 2",
        number         : "34",
        type           : "single",
        ranges         : ["range_besoboy_vol_2"],
        previous_comics: ["comic_besoboy_vol_2_33"],
        next_comics    : ["comic_besoboy_vol_2_35"],
        release_at     : {year: 2019, month: 11, day: 8}
    },
    comic_igor_grom_34                               : {
        name           : "Игорь Гром #34 Гори-гори ясно, часть 4",
        number         : "34",
        type           : "single",
        ranges         : ["range_igor_grom"],
        previous_comics: ["comic_igor_grom_33"],
        next_comics    : ["comic_igor_grom_35"],
        release_at     : {year: 2019, month: 11, day: 15}
    },
    comic_major_grom_like_in_war_1                   : {
        name            : "Майор Гром: Как на войне, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_major_grom", "range_bubble_legends"],
        including_comics: ["comic_major_grom_like_in_war"],
        previous_comics : ["comic_major_grom_50"],
        next_comics     : ["comic_major_grom_like_in_war_2"],
        release_at      : {year: 2019, month: 12}
    },
    comic_allies_35                                  : {
        name           : "Союзники #35 На круги своя, часть 2",
        number         : "35",
        type           : "single",
        ranges         : ["range_allies"],
        previous_comics: ["comic_allies_34"],
        next_comics    : ["comic_allies_36"],
        release_at     : {year: 2019, month: 12, day: 2}
    },
    comic_besoboy_vol_2_35                           : {
        name           : "Бесобой Vol.2 #35 Ва-банк, часть 3",
        number         : "35",
        type           : "single",
        ranges         : ["range_besoboy_vol_2"],
        previous_comics: ["comic_besoboy_vol_2_34"],
        next_comics    : ["comic_besoboy_vol_2_36"],
        release_at     : {year: 2019, month: 12, day: 9}
    },
    comic_igor_grom_35                               : {
        name           : "Игорь Гром #35 Вне закона, часть 1",
        number         : "35",
        type           : "single",
        ranges         : ["range_igor_grom"],
        previous_comics: ["comic_igor_grom_34"],
        next_comics    : ["comic_igor_grom_36"],
        release_at     : {year: 2019, month: 12, day: 16}
    },
    comic_exlibrium_second_life_1                    : {
        name            : "Экслибриум. Жизнь вторая #01 Безвозвратно, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_exlibrium_second_life"],
        including_comics: ["comic_exlibrium_second_life_tome_1"],
        previous_comics : ["comic_exlibrium_second_life"],
        next_comics     : ["comic_exlibrium_second_life_2"],
        release_at      : {year: 2019, month: 12, day: 28}
    },
    comic_allies_36                                  : {
        name           : "Союзники #36 На круги своя, часть 3",
        number         : "36",
        type           : "single",
        ranges         : ["range_allies"],
        previous_comics: ["comic_allies_35"],
        next_comics    : ["comic_allies_37"],
        release_at     : {year: 2019, month: 12, day: 30}
    },
    comic_major_grom_like_in_war_2                   : {
        name            : "Майор Гром: Как на войне, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_major_grom", "range_bubble_legends"],
        including_comics: ["comic_major_grom_like_in_war"],
        previous_comics : ["comic_major_grom_like_in_war_1"],
        next_comics     : ["comic_major_grom_like_in_war_3"],
        release_at      : {year: 2020}
    },
    comic_major_grom_like_in_war_3                   : {
        name            : "Майор Гром: Как на войне, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_major_grom", "range_bubble_legends"],
        including_comics: ["comic_major_grom_like_in_war"],
        previous_comics : ["comic_major_grom_like_in_war_2"],
        next_comics     : ["comic_major_grom_like_in_war_4"],
        release_at      : {year: 2020}
    },
    comic_major_grom_like_in_war_4                   : {
        name            : "Майор Гром: Как на войне, часть 4",
        number          : "4",
        type            : "single",
        ranges          : ["range_major_grom", "range_bubble_legends"],
        including_comics: ["comic_major_grom_like_in_war"],
        previous_comics : ["comic_major_grom_like_in_war_3"],
        release_at      : {year: 2020}
    },
    comic_besoboy_vol_2_36                           : {
        name           : "Бесобой Vol.2 #36 Ва-банк, часть 4",
        number         : "36",
        type           : "single",
        ranges         : ["range_besoboy_vol_2"],
        previous_comics: ["comic_besoboy_vol_2_35"],
        next_comics    : ["comic_besoboy_vol_2_37"],
        release_at     : {year: 2020, month: 1, day: 16}
    },
    comic_igor_grom_36                               : {
        name           : "Игорь Гром #36 Вне закона, часть 2",
        number         : "36",
        type           : "single",
        ranges         : ["range_igor_grom"],
        previous_comics: ["comic_igor_grom_35"],
        next_comics    : ["comic_igor_grom_37"],
        release_at     : {year: 2020, month: 1, day: 20}
    },
    comic_exlibrium_second_life_2                    : {
        name            : "Экслибриум. Жизнь вторая #02 Безвозвратно, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_exlibrium_second_life"],
        including_comics: ["comic_exlibrium_second_life_tome_1"],
        previous_comics : ["comic_exlibrium_second_life_1"],
        next_comics     : ["comic_exlibrium_second_life_3"],
        release_at      : {year: 2020, month: 1, day: 28}
    },
    comic_allies_37                                  : {
        name           : "Союзники #37 На круги своя, часть 4",
        number         : "37",
        type           : "single",
        ranges         : ["range_allies"],
        previous_comics: ["comic_allies_36"],
        next_comics    : ["comic_allies_38"],
        release_at     : {year: 2020, month: 2, day: 1}
    },
    comic_igor_grom_37                               : {
        name           : "Игорь Гром #37 Вне закона, часть 3",
        number         : "37",
        type           : "single",
        ranges         : ["range_igor_grom"],
        previous_comics: ["comic_igor_grom_36"],
        next_comics    : ["comic_igor_grom_38"],
        release_at     : {year: 2020, month: 2, day: 7}
    },
    comic_besoboy_vol_2_37                           : {
        name           : "Бесобой Vol.2 #37 Ва-банк, часть 5",
        number         : "37",
        type           : "single",
        ranges         : ["range_besoboy_vol_2"],
        previous_comics: ["comic_besoboy_vol_2_36"],
        next_comics    : ["comic_besoboy_vol_2_38"],
        release_at     : {year: 2020, month: 2, day: 14}
    },
    comic_major_grom_like_in_war                     : {
        name            : "Майор Гром: Как на войне",
        type            : "book",
        ranges          : ["range_major_grom", "range_bubble_legends"],
        contained_comics: ["comic_major_grom_like_in_war_1", "comic_major_grom_like_in_war_2",
                           "comic_major_grom_like_in_war_3", "comic_major_grom_like_in_war_4"],
        previous_comics : ["comic_major_grom_tome_8"],
        release_at      : {year: 2020, month: 2, day: 23}
    },
    comic_exlibrium_second_life_3                    : {
        name            : "Экслибриум. Жизнь вторая #03 Безвозвратно, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_exlibrium_second_life"],
        including_comics: ["comic_exlibrium_second_life_tome_1"],
        previous_comics : ["comic_exlibrium_second_life_2"],
        next_comics     : ["comic_exlibrium_second_life_4"],
        release_at      : {year: 2020, month: 2, day: 28}
    },
    comic_allies_38                                  : {
        name           : "Союзники #38 Цепная реакция, часть 1",
        number         : "38",
        type           : "single",
        ranges         : ["range_allies"],
        previous_comics: ["comic_allies_37"],
        next_comics    : ["comic_allies_39"],
        release_at     : {year: 2020, month: 3, day: 1}
    },
    comic_jackets_and_revolvers_tome_3               : {
        name           : "Пиджаки и Револьверы. Том 3: Украденная магия",
        number         : "3",
        type           : "book",
        ranges         : ["range_yulia_zhuravleva"],
        previous_comics: ["comic_jackets_and_revolvers_tome_2"],
        release_at     : {year: 2020, month: 3, day: 3}
    },
    comic_besoboy_vol_2_38                           : {
        name           : "Бесобой Vol.2 #38 Ва-банк, часть 6",
        number         : "38",
        type           : "single",
        ranges         : ["range_besoboy_vol_2"],
        previous_comics: ["comic_besoboy_vol_2_37"],
        next_comics    : ["comic_besoboy_vol_2_39"],
        release_at     : {year: 2020, month: 3, day: 16}
    },
    comic_allies_tome_7                              : {
        name            : "Союзники том 7: Падение Голиафа",
        number          : "7",
        type            : "book",
        ranges          : ["range_allies"],
        contained_comics: ["comic_allies_29", "comic_allies_30", "comic_allies_31", "comic_allies_32",
                           "comic_allies_33"],
        previous_comics : ["comic_allies_tome_6"],
        release_at      : {year: 2020, month: 3, day: 20}
    },
    comic_igor_grom_tome_6                           : {
        name            : "Игорь Гром том 6: Игра в солдатики",
        number          : "6",
        type            : "book",
        ranges          : ["range_igor_grom"],
        contained_comics: ["comic_igor_grom_26", "comic_igor_grom_27", "comic_igor_grom_28", "comic_igor_grom_29",
                           "comic_igor_grom_30"],
        previous_comics : ["comic_igor_grom_tome_5"],
        release_at      : {year: 2020, month: 3, day: 22}
    },
    comic_exlibrium_second_life_4                    : {
        name            : "Экслибриум. Жизнь вторая #04 Безвозвратно, часть 4",
        number          : "4",
        type            : "single",
        ranges          : ["range_exlibrium_second_life"],
        including_comics: ["comic_exlibrium_second_life_tome_1"],
        previous_comics : ["comic_exlibrium_second_life_3"],
        next_comics     : ["comic_exlibrium_second_life_5"],
        release_at      : {year: 2020, month: 3, day: 28}
    },
    comic_igor_grom_38                               : {
        name           : "Игорь Гром #38 Вне закона, часть 4",
        number         : "38",
        type           : "single",
        ranges         : ["range_igor_grom"],
        previous_comics: ["comic_igor_grom_37"],
        release_at     : {year: 2020, month: 3}
    },
    comic_allies_39                                  : {
        name           : "Союзники #39 Цепная реакция, часть 2",
        number         : "39",
        type           : "single",
        ranges         : ["range_allies"],
        previous_comics: ["comic_allies_38"],
        release_at     : {year: 2020, month: 4, day: 1}
    },
    comic_enoch_party_king_no_more_parties           : {
        name           : "Инок: Король вечеринок. Никаких больше вечерИНОК",
        type           : "single",
        ranges         : ["range_enoch_party_king"],
        previous_comics: ["comic_enoch_party_king"],
        release_at     : {year: 2020, month: 4, day: 1}
    },
    comic_falcon_2                                   : {
        name           : "Сокол #2 Чужие правила",
        number         : "2",
        type           : "single",
        ranges         : ["range_bubble_legends", "range_new_bubble_heroes"],
        previous_comics: ["comic_falcon_1"],
        release_at     : {year: 2020, month: 4, day: 12}
    },
    comic_anna_space_of_options                      : {
        name           : "АННА. Пространство вариантов",
        type           : "single",
        ranges         : ["range_bubble_legends", "range_new_bubble_heroes"],
        previous_comics: ["comic_anna_input"],
        release_at     : {year: 2020, month: 4, day: 12}
    },
    comic_pulse_premiere                             : {
        name           : "Импульс. Премьера",
        type           : "single",
        ranges         : ["range_bubble_legends", "range_new_bubble_heroes"],
        previous_comics: ["comic_pulse_heros_voice"],
        release_at     : {year: 2020, month: 4, day: 12}
    },
    comic_besoboy_vol_2_tome_7                       : {
        name            : "Бесобой Vol.2 том 7: Бунт",
        number          : "7",
        type            : "book",
        ranges          : ["range_besoboy_vol_2"],
        contained_comics: ["comic_besoboy_vol_2_29", "comic_besoboy_vol_2_30", "comic_besoboy_vol_2_31",
                           "comic_besoboy_vol_2_32"],
        previous_comics : ["comic_besoboy_vol_2_tome_6"],
        release_at      : {year: 2020, month: 4, day: 15}
    },
    comic_besoboy_vol_2_39                           : {
        name           : "Бесобой Vol.2 #39 Убить человека",
        number         : "39",
        type           : "single",
        ranges         : ["range_besoboy_vol_2"],
        previous_comics: ["comic_besoboy_vol_2_38"],
        release_at     : {year: 2020, month: 4, day: 16}
    },
    comic_exlibrium_second_life_5                    : {
        name           : "Экслибриум. Жизнь вторая #05 Купель Дракона, часть 1",
        number         : "5",
        type           : "single",
        ranges         : ["range_exlibrium_second_life"],
        previous_comics: ["comic_exlibrium_second_life_4"],
        release_at     : {year: 2020, month: 4, day: 28}
    },
    comic_exlibrium_second_life_tome_1               : {
        name            : "Экслибриум. Жизнь вторая. Том 1. Безвозвратно",
        number          : "1",
        type            : "book",
        ranges          : ["range_exlibrium_second_life"],
        contained_comics: ["comic_exlibrium_second_life", "comic_exlibrium_second_life_1",
                           "comic_exlibrium_second_life_2", "comic_exlibrium_second_life_3",
                           "comic_exlibrium_second_life_4"],
        previous_comics : ["comic_exlibrium_tome_9"],
        release_at      : {year: 2020, month: 4, day: 30}
    },
    comic_sister_kukki                               : {
        name            : "Сестра. Кукки",
        type            : "book",
        ranges          : ["range_bubble_legends", "range_new_bubble_heroes"],
        contained_comics: ["comic_sister_kukki_1"],
        release_at      : {year: 2023}
    },

    /*node_major_grom_tome_zagadka_sfinksa: {name: "Майор Гром.\nЗагадка сфинкса", color: colors.mayor_grom, size: sizes.tome},

    node_enoch_single_naslediye: {name: "Инок.\nНаследие", color: colors.inok, size: sizes.single},

    node_red_fury_tome_1966: {name: "Красная Фурия:\n1966", color: colors.krasnaya_furiya, size: sizes.tome},

    node_exlibrium_tome_krasnaya_stroka: {name: "Экслибриум.\nКрасная строка", color: colors.ekslibrium_krasnaya_stroka, size: sizes.tome},

    node_meteora_single_storibuk: {name: "Метеора.\nСторибук.\nОбманный манёвр", color: colors.meteora, size: sizes.single},

    node_besoboy_vol_2_single_40: {name: "Бесобой Vol.2 #40\nСмерть и ангел,\nчасть 1", color: colors.besoboy_vol_2, number: "40", size: sizes.single},
    node_besoboy_vol_2_single_41: {name: "Бесобой Vol.2 #41\nСмерть и ангел,\nчасть 2", color: colors.besoboy_vol_2, number: "41", size: sizes.single},
    node_besoboy_vol_2_single_42: {name: "Бесобой Vol.2 #42\nИх легионы", color: colors.besoboy_vol_2, number: "42", size: sizes.single},
    node_besoboy_vol_2_single_43: {name: "Бесобой Vol.2 #43\nВойна в Аду,\nчасть 1", color: colors.besoboy_vol_2, number: "43", size: sizes.single},
    node_besoboy_vol_2_single_44: {name: "Бесобой Vol.2 #44\nВойна в Аду,\nчасть 2", color: colors.besoboy_vol_2, number: "44", size: sizes.single},
    node_besoboy_vol_2_single_45: {name: "Бесобой Vol.2 #45\nВойна в Аду,\nчасть 3", color: colors.besoboy_vol_2, number: "45", size: sizes.single},
    node_besoboy_vol_2_single_46: {name: "Бесобой Vol.2 #46\nМесть", color: colors.besoboy_vol_2, number: "46", size: sizes.single},
    node_besoboy_vol_2_single_47: {name: "Бесобой Vol.2 #47\nДостоин,\nчасть 1", color: colors.besoboy_vol_2, number: "47", size: sizes.single},
    node_besoboy_vol_2_single_48: {name: "Бесобой Vol.2 #48\nДостоин,\nчасть 2", color: colors.besoboy_vol_2, number: "48", size: sizes.single},
    node_besoboy_vol_2_single_49: {name: "Бесобой Vol.2 #49\nТворец", color: colors.besoboy_vol_2, number: "49", size: sizes.single},
    node_besoboy_vol_2_single_50: {name: "Бесобой Vol.2 #50\nДанила", color: colors.besoboy_vol_2, number: "50", size: sizes.single},

    node_besoboy_vol_2_tome_8: {name: "Бесобой Vol.2 том 8:\nВа-банк", color: colors.besoboy_vol_2, number: "8", size: sizes.tome},
    node_besoboy_vol_2_tome_9: {name: "Бесобой Vol.2 том 9:\nСмерть и Ангел", color: colors.besoboy_vol_2, number: "9", size: sizes.tome},
    node_besoboy_vol_2_tome_10: {name: "Бесобой Vol.2 том 10:\nВойна в Аду", color: colors.besoboy_vol_2, number: "10", size: sizes.tome},
    node_besoboy_vol_2_tome_11: {name: "Бесобой Vol.2 том 11:\nТворец", color: colors.besoboy_vol_2, number: "11", size: sizes.tome},

    node_igor_grom_single_39: {name: "Игорь Гром #39\nВне закона,\nчасть 5", color: colors.igor_grom, number: "39", size: sizes.single},
    node_igor_grom_single_40: {name: "Игорь Гром #40\nМёртвая вода,\nчасть 1", color: colors.igor_grom, number: "40", size: sizes.single},
    node_igor_grom_single_41: {name: "Игорь Гром #41\nМёртвая вода,\nчасть 2", color: colors.igor_grom, number: "41", size: sizes.single},
    node_igor_grom_single_42: {name: "Игорь Гром #42\nМёртвая вода,\nчасть 3", color: colors.igor_grom, number: "42", size: sizes.single},
    node_igor_grom_single_43: {name: "Игорь Гром #43\nМёртвая вода,\nчасть 4", color: colors.igor_grom, number: "43", size: sizes.single},
    node_igor_grom_single_44: {name: "Игорь Гром #44\nМёртвая вода,\nчасть 5", color: colors.igor_grom, number: "44", size: sizes.single},
    node_igor_grom_single_45: {name: "Игорь Гром #45\nЖивая вода", color: colors.igor_grom, number: "45", size: sizes.single},
    node_igor_grom_single_46: {name: "Игорь Гром #46\nЧужими глазами,\nчасть 1", color: colors.igor_grom, number: "46", size: sizes.single},
    node_igor_grom_single_47: {name: "Игорь Гром #47\nЧужими глазами,\nчасть 2", color: colors.igor_grom, number: "47", size: sizes.single},
    node_igor_grom_single_48: {name: "Игорь Гром #48\nЧужими глазами,\nчасть 3", color: colors.igor_grom, number: "48", size: sizes.single},
    node_igor_grom_single_49: {name: "Игорь Гром #49\nЧужими глазами,\nчасть 4", color: colors.igor_grom, number: "49", size: sizes.single},
    node_igor_grom_single_50: {name: "Игорь Гром #50\nЗавтра", color: colors.igor_grom, number: "50", size: sizes.single},

    node_igor_grom_tome_7: {name: "Игорь Гром том 7:\nГори-гори ясно", color: colors.igor_grom, number: "7", size: sizes.tome},
    node_igor_grom_tome_8: {name: "Игорь Гром том 8:\nВне закона", color: colors.igor_grom, number: "8", size: sizes.tome},
    node_igor_grom_tome_9: {name: "Игорь Гром том 9:\nМёртвая вода", color: colors.igor_grom, number: "9", size: sizes.tome},
    node_igor_grom_tome_10: {name: "Игорь Гром том 10:\nЧужими глазами", color: colors.igor_grom, number: "10", size: sizes.tome},

    node_allies_single_40: {name: "Союзники #40\nЦепная реакция,\nчасть 3", color: colors.soyuzniki, number: "40", size: sizes.single},
    node_allies_single_41: {name: "Союзники #41\nЦепная реакция,\nчасть 4", color: colors.soyuzniki, number: "41", size: sizes.single},
    node_allies_single_spetsvypusk_idilliya: {name: "Союзники.\nСпецвыпуск.\nИдиллия", color: colors.soyuzniki, size: sizes.single},

    node_allies_tome_8: {name: "Союзники том 8:\nЦепная реакция", color: colors.soyuzniki, number: "8", size: sizes.tome},

    node_igor_ugor_single_2_5: {name: "Игорь угорь 2.5:\nPress У to pay respect", color: colors.igor_ugor, number: "2.5", size: sizes.single},
    node_igor_ugor_single_3: {name: "Игорь угорь 3:\nМрачный перезапуск", color: colors.igor_ugor, number: "3", size: sizes.single},

    node_jackets_and_revolvers_tome_4: {name: "Пиджаки и револьверы. Том 4:\nКровные узы", color: colors.copyright_comics.julia_zhuravleva, number: "4", size: sizes.tome},

    node_zagovor_yedinorogov_tome_2: {name: "Заговор единорогов. Том 2.\nСвои", color: colors.copyright_comics.alex_hatchett, number: "2", size: sizes.tome},

    node_tagar_tome_3_single_1: {name: "Тагар. Том 3,\nглава 1", color: colors.tagar, number: "1", size: sizes.single},
    node_tagar_tome_3_single_2: {name: "Тагар. Том 3,\nглава 2", color: colors.tagar, number: "2", size: sizes.single},
    node_tagar_tome_3_single_3: {name: "Тагар. Том 3,\nглава 3", color: colors.tagar, number: "3", size: sizes.single},
    node_tagar_tome_3_single_4: {name: "Тагар. Том 3,\nглава 4", color: colors.tagar, number: "4", size: sizes.single},
    node_tagar_tome_3_single_5: {name: "Тагар. Том 3,\nглава 5", color: colors.tagar, number: "5", size: sizes.single},
    node_tagar_tome_3_single_6: {name: "Тагар. Том 3,\nглава 6", color: colors.tagar, number: "6", size: sizes.single},
    node_tagar_tome_3_single_7: {name: "Тагар. Том 3,\nглава 7", color: colors.tagar, number: "7", size: sizes.single},
    node_tagar_tome_4_single_1: {name: "Тагар. Том 4,\nглава 1", color: colors.tagar, number: "1", size: sizes.single},
    node_tagar_tome_4_single_2: {name: "Тагар. Том 4,\nглава 2", color: colors.tagar, number: "2", size: sizes.single},
    node_tagar_tome_4_single_3: {name: "Тагар. Том 4,\nглава 3", color: colors.tagar, number: "3", size: sizes.single},
    node_tagar_tome_4_single_4: {name: "Тагар. Том 4,\nглава 4", color: colors.tagar, number: "4", size: sizes.single},
    node_tagar_tome_4_single_5: {name: "Тагар. Том 4,\nглава 5", color: colors.tagar, number: "5", size: sizes.single},
    node_tagar_tome_4_single_6: {name: "Тагар. Том 4,\nглава 6", color: colors.tagar, number: "6", size: sizes.single},

    node_tagar_tome_3: {name: "Тагар. Том 3", color: colors.tagar, number: "3", size: sizes.tome},
    node_tagar_tome_4: {name: "Тагар. Том 4", color: colors.tagar, number: "4", size: sizes.tome},

    node_krutiks_tome_1: {name: "Крутиксы.\nКрутые комиксы.\nКнига 1", color: colors.krutiksy, number: "1", size: sizes.tome},
    node_krutiks_tome_2: {name: "Крутиксы.\nКрутые комиксы.\nКнига 2", color: colors.krutiksy, number: "2", size: sizes.tome},
    node_krutiks_tome_3: {name: "Крутиксы.\nКрутые комиксы.\nКнига 3", color: colors.krutiksy, number: "3", size: sizes.tome},

    node_vor_teney_single_3: {name: "Вор Теней #3\nТройка коллекторов", color: colors.vor_teney, number: "3", size: sizes.single},
    node_vor_teney_single_4: {name: "Вор Теней #4\nЧетвёртый глаз", color: colors.vor_teney, number: "4", size: sizes.single},
    node_vor_teney_single_5: {name: "Вор Теней #5\nСомнамбулический поиск неведомого Коврова", color: colors.vor_teney, number: "5", size: sizes.single},
    node_vor_teney_single_6: {name: "Вор Теней #6\nДача Ложных Показаний", color: colors.vor_teney, number: "6", size: sizes.single},
    node_vor_teney_single_7: {name: "Вор Теней #7\nНевидимая рука рынка", color: colors.vor_teney, number: "7", size: sizes.single},
    node_vor_teney_single_8: {name: "Вор Теней #8\nКладбище времени", color: colors.vor_teney, number: "8", size: sizes.single},
    node_vor_teney_single_9: {name: "Вор Теней #9\nПятая... лишняя!", color: colors.vor_teney, number: "9", size: sizes.single},
    node_vor_teney_single_10: {name: "Вор Теней #10\nЧудовищная свадьба бывшей.\nСпецвыпуск", color: colors.vor_teney, number: "10", size: sizes.single},
    node_vor_teney_single_11: {name: "Вор Теней #11\nЛетальный лифт", color: colors.vor_teney, number: "11", size: sizes.single},
    node_vor_teney_single_12: {name: "Вор Теней #12\nОтгадки в остроге и катастрофическая контр-банд", color: colors.vor_teney, number: "12", size: sizes.single},

    node_vor_teney_tome_1: {name: "Вор Теней", color: colors.vor_teney, number: "1", size: sizes.tome},
    node_vor_teney_tome_2: {name: "Вор Теней. Том 2", color: colors.vor_teney, number: "2", size: sizes.tome},
    node_vor_teney_tome_3: {name: "Вор Теней. Том 3", color: colors.vor_teney, number: "3", size: sizes.tome},

    node_sokol_single_3: {name: "Сокол #3\nВ клетке,\nчасть 1", color: colors.sokol, number: "3", size: sizes.single},
    node_sokol_single_4: {name: "Сокол #4\nВ клетке,\nчасть 2", color: colors.sokol, number: "4", size: sizes.single},
    node_sokol_single_5: {name: "Сокол #5\nСлепое пятно", color: colors.sokol, number: "5", size: sizes.single},
    node_sokol_single_6: {name: "Сокол #6\nОшибка выжившего.\nЧасть 1", color: colors.sokol, number: "6", size: sizes.single},
    node_sokol_single_7: {name: "Сокол #7\nОшибка выжившего.\nЧасть 2", color: colors.sokol, number: "7", size: sizes.single},

    node_sokol_tome_1: {name: "Сокол. Том 1", color: colors.sokol, number: "1", size: sizes.tome},
    node_sokol_tome_2: {name: "Сокол. Том 2", color: colors.sokol, number: "2", size: sizes.tome},

    node_impuls_tome_1: {name: "Импульс. Том 1.\nВзлёты и падения", color: colors.impuls, number: "1", size: sizes.tome},

    node_exlibrium_second_life_single_6: {name: "Экслибриум.\nЖизнь вторая #06\nКупель Дракона,\nчасть 2", color: colors.ekslibrium_zhizn_vtoraya, number: "6", size: sizes.single},
    node_exlibrium_second_life_single_7: {name: "Экслибриум.\nЖизнь вторая #07\nКупель Дракона,\nчасть 3", color: colors.ekslibrium_zhizn_vtoraya, number: "7", size: sizes.single},
    node_exlibrium_second_life_single_8: {name: "Экслибриум.\nЖизнь вторая #08\nЗамкнутый", color: colors.ekslibrium_zhizn_vtoraya, number: "8", size: sizes.single},
    node_exlibrium_second_life_single_9: {name: "Экслибриум.\nЖизнь вторая #09\nЩепки,\nчасть 1", color: colors.ekslibrium_zhizn_vtoraya, number: "9", size: sizes.single},
    node_exlibrium_second_life_single_10: {name: "Экслибриум.\nЖизнь вторая #10\nЩепки,\nчасть 2", color: colors.ekslibrium_zhizn_vtoraya, number: "10", size: sizes.single},
    node_exlibrium_second_life_single_11: {name: "Экслибриум.\nЖизнь вторая #11\nЩепки,\nчасть 3", color: colors.ekslibrium_zhizn_vtoraya, number: "11", size: sizes.single},
    node_exlibrium_second_life_single_12: {name: "Экслибриум.\nЖизнь вторая #12\nЩепки,\nчасть 4", color: colors.ekslibrium_zhizn_vtoraya, number: "12", size: sizes.single},
    node_exlibrium_second_life_single_13: {name: "Экслибриум.\nЖизнь вторая #13\nТочка сборки,\nчасть 1", color: colors.ekslibrium_zhizn_vtoraya, number: "13", size: sizes.single},
    node_exlibrium_second_life_single_14: {name: "Экслибриум.\nЖизнь вторая #14\nТочка сборки,\nчасть 2", color: colors.ekslibrium_zhizn_vtoraya, number: "14", size: sizes.single},
    node_exlibrium_second_life_single_15: {name: "Экслибриум.\nЖизнь вторая #15\nПраздник жизни,\nчасть 1", color: colors.ekslibrium_zhizn_vtoraya, number: "15", size: sizes.single},
    node_exlibrium_second_life_single_16: {name: "Экслибриум.\nЖизнь вторая #16\nПраздник жизни,\nчасть 2", color: colors.ekslibrium_zhizn_vtoraya, number: "16", size: sizes.single},
    node_exlibrium_second_life_single_17: {name: "Экслибриум.\nЖизнь вторая #17\nПраздник жизни,\nчасть 3", color: colors.ekslibrium_zhizn_vtoraya, number: "17", size: sizes.single},
    node_exlibrium_second_life_single_18: {name: "Экслибриум.\nЖизнь вторая #18\nПраздник жизни,\nчасть 4", color: colors.ekslibrium_zhizn_vtoraya, number: "18", size: sizes.single},
    node_exlibrium_second_life_single_19: {name: "Экслибриум.\nЖизнь вторая #19\nВенец творения,\nчасть 1", color: colors.ekslibrium_zhizn_vtoraya, number: "19", size: sizes.single},
    node_exlibrium_second_life_single_20: {name: "Экслибриум.\nЖизнь вторая #20\nВенец творения,\nчасть 2", color: colors.ekslibrium_zhizn_vtoraya, number: "20", size: sizes.single},
    node_exlibrium_second_life_single_21: {name: "Экслибриум.\nЖизнь вторая #21\nВенец творения,\nчасть 3", color: colors.ekslibrium_zhizn_vtoraya, number: "21", size: sizes.single},
    node_exlibrium_second_life_single_22: {name: "Экслибриум.\nЖизнь вторая #22\nБабочки в горсти", color: colors.ekslibrium_zhizn_vtoraya, number: "22", size: sizes.single},
    node_exlibrium_second_life_single_23: {name: "Экслибриум.\nЖизнь вторая #23\nПетля,\nчасть 1", color: colors.ekslibrium_zhizn_vtoraya, number: "23", size: sizes.single},
    node_exlibrium_second_life_single_24: {name: "Экслибриум.\nЖизнь вторая #24\nПетля,\nчасть 2", color: colors.ekslibrium_zhizn_vtoraya, number: "24", size: sizes.single},
    node_exlibrium_second_life_single_25: {name: "Экслибриум.\nЖизнь вторая #25\nЧёрные капли,\nчасть 1", color: colors.ekslibrium_zhizn_vtoraya, number: "25", size: sizes.single},
    node_exlibrium_second_life_single_26: {name: "Экслибриум.\nЖизнь вторая #26\nЧёрные капли,\nчасть 2", color: colors.ekslibrium_zhizn_vtoraya, number: "26", size: sizes.single},
    node_exlibrium_second_life_single_27: {name: "Экслибриум.\nЖизнь вторая #27\nЧёрные капли,\nчасть 3", color: colors.ekslibrium_zhizn_vtoraya, number: "27", size: sizes.single},
    node_exlibrium_second_life_single_28: {name: "Экслибриум.\nЖизнь вторая #28\nЧёрные капли,\nчасть 4", color: colors.ekslibrium_zhizn_vtoraya, number: "28", size: sizes.single},
    node_exlibrium_second_life_single_29: {name: "Экслибриум.\nЖизнь вторая #29\nЧёрные капли,\nчасть 5", color: colors.ekslibrium_zhizn_vtoraya, number: "29", size: sizes.single},
    node_exlibrium_second_life_single_30: {name: "Экслибриум.\nЖизнь вторая #30\nНовоселье,\nчасть 1", color: colors.ekslibrium_zhizn_vtoraya, number: "30", size: sizes.single},
    node_exlibrium_second_life_single_31: {name: "Экслибриум.\nЖизнь вторая #31\nНовоселье,\nчасть 2", color: colors.ekslibrium_zhizn_vtoraya, number: "31", size: sizes.single},
    node_exlibrium_second_life_single_32: {name: "Экслибриум.\nЖизнь вторая #32\nНовоселье,\nчасть 3", color: colors.ekslibrium_zhizn_vtoraya, number: "32", size: sizes.single},
    node_exlibrium_second_life_single_33: {name: "Экслибриум.\nЖизнь вторая #33\nПосле дождичка,\nчасть 1", color: colors.ekslibrium_zhizn_vtoraya, number: "33", size: sizes.single},
    node_exlibrium_second_life_single_34: {name: "Экслибриум.\nЖизнь вторая #34\nПосле дождичка,\nчасть 2", color: colors.ekslibrium_zhizn_vtoraya, number: "34", size: sizes.single},
    node_exlibrium_second_life_single_35: {name: "Экслибриум.\nЖизнь вторая #35\nПосле дождичка,\nчасть 3", color: colors.ekslibrium_zhizn_vtoraya, number: "35", size: sizes.single},
    node_exlibrium_second_life_single_36: {name: "Экслибриум.\nЖизнь вторая #36\nПосле дождичка,\nчасть 4", color: colors.ekslibrium_zhizn_vtoraya, number: "36", size: sizes.single},
    node_exlibrium_second_life_single_37: {name: "Экслибриум.\nЖизнь вторая #37\nБудущее – светло,\nчасть 1", color: colors.ekslibrium_zhizn_vtoraya, number: "37", size: sizes.single},
    node_exlibrium_second_life_single_38: {name: "Экслибриум.\nЖизнь вторая #38\nБудущее – светло,\nчасть 2", color: colors.ekslibrium_zhizn_vtoraya, number: "38", size: sizes.single},

    node_exlibrium_second_life_tome_2: {name: "Экслибриум.\nЖизнь вторая. Том 2.\nКупель дракона", color: colors.ekslibrium_zhizn_vtoraya, number: "2", size: sizes.tome},
    node_exlibrium_second_life_tome_3: {name: "Экслибриум.\nЖизнь вторая. Том 3.\nЩепки", color: colors.ekslibrium_zhizn_vtoraya, number: "3", size: sizes.tome},
    node_exlibrium_second_life_tome_4: {name: "Экслибриум.\nЖизнь вторая. Том 4.\nПраздник Жизни", color: colors.ekslibrium_zhizn_vtoraya, number: "4", size: sizes.tome},
    node_exlibrium_second_life_tome_5: {name: "Экслибриум.\nЖизнь вторая. Том 5.\nВенец творения", color: colors.ekslibrium_zhizn_vtoraya, number: "5", size: sizes.tome},
    node_exlibrium_second_life_tome_6: {name: "Экслибриум.\nЖизнь вторая. Том 6.\nЧёрные капли", color: colors.ekslibrium_zhizn_vtoraya, number: "6", size: sizes.tome},
    node_exlibrium_second_life_tome_7: {name: "Экслибриум.\nЖизнь вторая. Том 7.\nНовоселье", color: colors.ekslibrium_zhizn_vtoraya, number: "7", size: sizes.tome},
    node_exlibrium_second_life_tome_8: {name: "Экслибриум.\nЖизнь вторая. Том 8:\nПосле дождичка", color: colors.ekslibrium_zhizn_vtoraya, number: "8", size: sizes.tome},

    node_chumnoy_doktor_single_1: {name: "Чумной Доктор", color: colors.chumnoy_doktor, number: "1", size: sizes.single},
    node_chumnoy_doktor_single_2: {name: "Чумной Доктор №2", color: colors.chumnoy_doktor, number: "2", size: sizes.single},
    node_chumnoy_doktor_single_3: {name: "Чумной Доктор №3", color: colors.chumnoy_doktor, number: "3", size: sizes.single},
    node_chumnoy_doktor_single_4: {name: "Чумной Доктор №4", color: colors.chumnoy_doktor, number: "4", size: sizes.single},
    node_chumnoy_doktor_single_spetsialnyy_zimniy_spetsvypusk: {name: "Специальный зимний\nспецвыпуск \"Чумной Доктор\"", color: colors.chumnoy_doktor, size: sizes.single},
    node_chumnoy_doktor_single_5: {name: "Чумной Доктор №5", color: colors.chumnoy_doktor, number: "5", size: sizes.single},
    node_chumnoy_doktor_single_6: {name: "Чумной Доктор №6", color: colors.chumnoy_doktor, number: "6", size: sizes.single},
    node_chumnoy_doktor_single_7: {name: "Чумной Доктор №7", color: colors.chumnoy_doktor, number: "7", size: sizes.single},
    node_chumnoy_doktor_single_8: {name: "Чумной Доктор №8", color: colors.chumnoy_doktor, number: "8", size: sizes.single},
    node_chumnoy_doktor_single_9: {name: "Чумной Доктор №9", color: colors.chumnoy_doktor, number: "9", size: sizes.single},
    node_chumnoy_doktor_single_10: {name: "Чумной Доктор №10", color: colors.chumnoy_doktor, number: "10", size: sizes.single},
    node_mayor_igor_grom_x_chumnoy_doktor_single_11: {name: "Майор Игорь Гром x\nЧумной Доктор №11\nБрат твой по мраку", color: colors.mayor_igor_grom_x_chumnoy_doktor, number: "11", size: sizes.single},
    node_mayor_igor_grom_x_chumnoy_doktor_single_12: {name: "Майор Игорь Гром x\nЧумной Доктор №12\nБрат твой по мраку,\nчасть 2", color: colors.mayor_igor_grom_x_chumnoy_doktor, number: "12", size: sizes.single},
    node_mayor_igor_grom_x_chumnoy_doktor_single_13: {name: "Майор Игорь Гром x\nЧумной Доктор №13\nБрат твой по мраку,\nчасть 3", color: colors.mayor_igor_grom_x_chumnoy_doktor, number: "13", size: sizes.single},
    node_mayor_igor_grom_x_chumnoy_doktor_single_14: {name: "Майор Игорь Гром x\nЧумной Доктор №14\nБрат твой по мраку,\nэпилог", color: colors.mayor_igor_grom_x_chumnoy_doktor, number: "14", size: sizes.single},
    node_chumnoy_doktor_single_15: {name: "Чумной Доктор №15\nМахаон,\nчасть 1", color: colors.chumnoy_doktor, number: "15", size: sizes.single},
    node_chumnoy_doktor_single_16: {name: "Чумной Доктор №16\nМахаон,\nчасть 2", color: colors.chumnoy_doktor, number: "16", size: sizes.single},
    node_chumnoy_doktor_single_17: {name: "Чумной Доктор №17\nМахаон,\nчасть 3", color: colors.chumnoy_doktor, number: "17", size: sizes.single},
    node_chumnoy_doktor_single_18: {name: "Чумной Доктор №18\nМахаон,\nчасть 4", color: colors.chumnoy_doktor, number: "18", size: sizes.single},
    node_chumnoy_doktor_single_19: {name: "Чумной Доктор №19\nМахаон,\nчасть 5", color: colors.chumnoy_doktor, number: "19", size: sizes.single},
    node_chumnoy_doktor_single_20: {name: "Чумной Доктор №20\nМахаон,\nчасть 6", color: colors.chumnoy_doktor, number: "20", size: sizes.single},
    node_chumnoy_doktor_single_21: {name: "Чумной Доктор №21\nРагнар,\nчасть 1", color: colors.chumnoy_doktor, number: "21", size: sizes.single},
    node_chumnoy_doktor_single_22: {name: "Чумной Доктор №22\nРагнар,\nчасть 2", color: colors.chumnoy_doktor, number: "22", size: sizes.single},
    node_chumnoy_doktor_single_23: {name: "Чумной Доктор №23\nРагнар,\nчасть 3", color: colors.chumnoy_doktor, number: "23", size: sizes.single},
    node_chumnoy_doktor_single_24: {name: "Чумной Доктор №24\nРагнар,\nчасть 4", color: colors.chumnoy_doktor, number: "24", size: sizes.single},
    node_chumnoy_doktor_single_25: {name: "Чумной Доктор №25\nРагнар,\nчасть 5", color: colors.chumnoy_doktor, number: "25", size: sizes.single},
    node_chumnoy_doktor_single_26: {name: "Чумной Доктор №26\nРагнар,\nчасть 6", color: colors.chumnoy_doktor, number: "26", size: sizes.single},
    node_chumnoy_doktor_single_27: {name: "Чумной Доктор №27\nРагнар,\nчасть 7", color: colors.chumnoy_doktor, number: "27", size: sizes.single},
    node_chumnoy_doktor_single_28: {name: "Чумной Доктор №28\nРагнар,\nчасть 8", color: colors.chumnoy_doktor, number: "28", size: sizes.single},
    node_chumnoy_doktor_single_29: {name: "Чумной Доктор №29\nРагнар,\nэпилог", color: colors.chumnoy_doktor, number: "29", size: sizes.single},

    node_chumnoy_doktor_tome_1: {name: "Чумной Доктор. Том 1:\nКапкан", color: colors.chumnoy_doktor, number: "1", size: sizes.tome},
    node_chumnoy_doktor_tome_2: {name: "Чумной Доктор. Том 2:\nЗолотой цветок", color: colors.chumnoy_doktor, number: "2", size: sizes.tome},
    node_chumnoy_doktor_tome_3: {name: "Чумной Доктор. Том 3:\nНа руинах", color: colors.chumnoy_doktor, number: "3", size: sizes.tome},
    node_mayor_igor_grom_x_chumnoy_doktor_tome_4: {name: "Майор Игорь Гром x\nЧумной Доктор. Книга 4.\nБрат твой по мраку", color: colors.mayor_igor_grom_x_chumnoy_doktor, number: "4", size: sizes.tome},
    node_chumnoy_doktor_tome_5: {name: "Чумной Доктор. Том 5:\nМахаон", color: colors.chumnoy_doktor, number: "5", size: sizes.tome},
    node_chumnoy_doktor_tome_6: {name: "Чумной Доктор. Том 6.\nРагнар.\nЧасть 1", color: colors.chumnoy_doktor, number: "6", size: sizes.tome},
    node_chumnoy_doktor_tome_7: {name: "Чумной Доктор. Том 7.\nРагнар.\nЧасть 2", color: colors.chumnoy_doktor, number: "7", size: sizes.tome},

    node_redaktor_single: {name: "Редактор:\nСигнальный экземпляр", color: colors.redaktor, size: sizes.single},

    node_karantinnaya_kniga_tome: {name: "Карантинная книга", color: colors.karantinnaya_kniga, size: sizes.tome},

    node_nechistaya_sila_single_1: {name: "Нечистая Сила #01\nЗаложные покойники", color: colors.nechistaya_sila, number: "1", size: sizes.single},
    node_nechistaya_sila_single_2: {name: "Нечистая Сила #02\nДорогая подачка", color: colors.nechistaya_sila, number: "2", size: sizes.single},
    node_nechistaya_sila_single_3: {name: "Нечистая Сила #03\nТвоё место в саду", color: colors.nechistaya_sila, number: "3", size: sizes.single},
    node_nechistaya_sila_single_4: {name: "Нечистая Сила #04\nНе слишком ли много желаний для одного джинна?", color: colors.nechistaya_sila, number: "4", size: sizes.single},

    node_nechistaya_sila_tome: {name: "Нечистая Сила", color: colors.nechistaya_sila, size: sizes.tome},

    node_izbrannitsa_luny_single_1: {name: "Избранница Луны,\nглава 1", color: colors.izbrannitsa_luny, number: "1", size: sizes.single},
    node_izbrannitsa_luny_single_2: {name: "Избранница Луны,\nглава 2", color: colors.izbrannitsa_luny, number: "2", size: sizes.single},
    node_izbrannitsa_luny_single_3: {name: "Избранница Луны,\nглава 3", color: colors.izbrannitsa_luny, number: "3", size: sizes.single},
    node_izbrannitsa_luny_single_4: {name: "Избранница Луны,\nглава 4", color: colors.izbrannitsa_luny, number: "4", size: sizes.single},
    node_izbrannitsa_luny_single_5: {name: "Избранница Луны,\nглава 5", color: colors.izbrannitsa_luny, number: "5", size: sizes.single},
    node_izbrannitsa_luny_single_6: {name: "Избранница Луны,\nглава 6", color: colors.izbrannitsa_luny, number: "6", size: sizes.single},

    node_izbrannitsa_luny_tome: {name: "Избранница Луны", color: colors.izbrannitsa_luny, size: sizes.tome},

    node_gromada_single_1: {name: "Громада", color: colors.gromada, number: "1", size: sizes.single},
    node_gromada_single_2: {name: "Громада №2", color: colors.gromada, number: "2", size: sizes.single},
    node_gromada_single_3: {name: "Громада №3", color: colors.gromada, number: "3", size: sizes.single},
    node_gromada_single_4: {name: "Громада №4", color: colors.gromada, number: "4", size: sizes.single},
    node_gromada_single_storibuk: {name: "Громада.\nПлюшевый и опасный.\nСторибук", color: colors.gromada_storibuk, size: sizes.single},

    node_gromada_tome: {name: "Громада", color: colors.gromada, size: sizes.tome},

    node_mir_single_1: {name: "МИР #01\nПервый", color: colors.mir, number: "1", size: sizes.single},
    node_mir_single_2: {name: "МИР #02\nДве беды,\nчасть 1", color: colors.mir, number: "2", size: sizes.single},
    node_mir_single_3: {name: "МИР #03\nДве беды,\nчасть 2", color: colors.mir, number: "3", size: sizes.single},
    node_mir_single_4: {name: "МИР #04\nПрощай, оружие,\nчасть 1", color: colors.mir, number: "4", size: sizes.single},
    node_mir_single_5: {name: "МИР #05\nПрощай, оружие,\nчасть 2", color: colors.mir, number: "5", size: sizes.single},
    node_mir_single_vechnaya_pamyat: {name: "МИР:\nВечная Память", color: colors.mir, size: sizes.single},
    node_mir_single_6: {name: "МИР #06\nТебя слышит враг,\nчасть 1", color: colors.mir, number: "6", size: sizes.single},
    node_mir_single_7: {name: "МИР #07\nТебя слышит враг,\nчасть 2", color: colors.mir, number: "7", size: sizes.single},
    node_mir_single_8: {name: "МИР #08\nВторое солнце,\nчасть 1", color: colors.mir, number: "8", size: sizes.single},
    node_mir_single_9: {name: "МИР #09\nВторое солнце,\nчасть 2", color: colors.mir, number: "9", size: sizes.single},
    node_mir_single_10: {name: "МИР #10\nСерый лёд,\nчасть 1", color: colors.mir, number: "10", size: sizes.single},
    node_mir_single_11: {name: "МИР #11\nСерый лёд,\nчасть 2", color: colors.mir, number: "11", size: sizes.single},
    node_mir_single_12: {name: "МИР #12\nЗа гранью", color: colors.mir, number: "12", size: sizes.single},
    node_mir_single_13: {name: "МИР #13\nСыновья,\nчасть 1", color: colors.mir, number: "13", size: sizes.single},
    node_mir_single_14: {name: "МИР #14\nСыновья,\nчасть 2", color: colors.mir, number: "14", size: sizes.single},
    node_mir_single_15: {name: "МИР #15\nЧужие флаги,\nчасть 1", color: colors.mir, number: "15", size: sizes.single},
    node_mir_single_16: {name: "МИР #16\nЧужие флаги,\nчасть 2", color: colors.mir, number: "16", size: sizes.single},
    node_mir_single_17: {name: "МИР #17\nЧужие флаги,\nчасть 3", color: colors.mir, number: "17", size: sizes.single},

    node_mir_tome_1: {name: "МИР. Том 1:\nПервый", color: colors.mir, number: "1", size: sizes.tome},
    node_mir_tome_2: {name: "МИР. Том 2:\nДве беды", color: colors.mir, number: "2", size: sizes.tome},
    node_mir_tome_3: {name: "МИР. Том 3:\nПрощай, оружие", color: colors.mir, number: "3", size: sizes.tome},
    node_mir_tome_4: {name: "МИР. Книга 4.\nТебя слышит враг", color: colors.mir, number: "4", size: sizes.tome},
    node_mir_tome_5: {name: "МИР. Том 5:\nВторое солнце", color: colors.mir, number: "5", size: sizes.tome},
    node_mir_tome_6: {name: "МИР. Том 6:\nСерый лёд", color: colors.mir, number: "6", size: sizes.tome},
    node_mir_tome_7: {name: "МИР. Том 7:\nСыновья", color: colors.mir, number: "7", size: sizes.tome},
    node_mir_tome_8: {name: "МИР. Том 8:\nЧужие флаги", color: colors.mir, number: "8", size: sizes.tome},

    node_mayor_grom_geroy_navsegda_single_1: {name: "Майор Гром:\nГерой Навсегда,\nчасть 1", color: colors.mayor_grom, number: "1", size: sizes.single},

    node_mayor_grom_geroy_navsegda_tome: {name: "Майор Гром:\nГерой Навсегда", color: colors.mayor_grom, size: sizes.tome},

    node_turbocarp_tome: {name: "ТурбоКарп", color: colors.turbocarp, size: sizes.tome},

    node_mayor_igor_grom_single_1: {name: "Майор Игорь Гром #01\nФейк,\nчасть 1", color: colors.mayor_igor_grom, number: "1", size: sizes.single},
    node_mayor_igor_grom_single_2: {name: "Майор Игорь Гром #02\nФейк,\nчасть 2", color: colors.mayor_igor_grom, number: "2", size: sizes.single},
    node_mayor_igor_grom_single_3: {name: "Майор Игорь Гром #03\nФейк,\nчасть 3", color: colors.mayor_igor_grom, number: "3", size: sizes.single},
    node_mayor_igor_grom_single_4: {name: "Майор Игорь Гром #04\nФейк,\nчасть 4", color: colors.mayor_igor_grom, number: "4", size: sizes.single},
    node_mayor_igor_grom_single_5: {name: "Майор Игорь Гром #05\nИдеальный хищник,\nчасть 1", color: colors.mayor_igor_grom, number: "5", size: sizes.single},
    node_mayor_igor_grom_single_6: {name: "Майор Игорь Гром #06\nИдеальный хищник,\nчасть 2", color: colors.mayor_igor_grom, number: "6", size: sizes.single},
    node_mayor_igor_grom_single_7: {name: "Майор Игорь Гром #07\nИдеальный хищник,\nчасть 3", color: colors.mayor_igor_grom, number: "7", size: sizes.single},
    node_mayor_igor_grom_single_8: {name: "Майор Игорь Гром #08\nИдеальный хищник,\nчасть 4", color: colors.mayor_igor_grom, number: "8", size: sizes.single},
    node_mayor_igor_grom_single_9: {name: "Майор Игорь Гром #09\nУлыбка висельника,\nчасть 1", color: colors.mayor_igor_grom, number: "9", size: sizes.single},
    node_mayor_igor_grom_single_10: {name: "Майор Игорь Гром #10\nУлыбка висельника,\nчасть 2", color: colors.mayor_igor_grom, number: "10", size: sizes.single},
    node_mayor_igor_grom_single_11: {name: "Майор Игорь Гром #11\nУлыбка висельника,\nчасть 3", color: colors.mayor_igor_grom, number: "11", size: sizes.single},
    node_mayor_igor_grom_single_12: {name: "Майор Игорь Гром #12\nУлыбка висельника,\nчасть 4", color: colors.mayor_igor_grom, number: "12", size: sizes.single},
    node_mayor_igor_grom_single_13: {name: "Майор Игорь Гром #13\nГде-то под Питером,\nчасть 1", color: colors.mayor_igor_grom, number: "13", size: sizes.single},
    node_mayor_igor_grom_single_14: {name: "Майор Игорь Гром #14\nГде-то под Питером,\nчасть 2", color: colors.mayor_igor_grom, number: "14", size: sizes.single},
    node_mayor_igor_grom_single_15: {name: "Майор Игорь Гром #15\nГде-то под Питером,\nчасть 3", color: colors.mayor_igor_grom, number: "15", size: sizes.single},
    node_mayor_igor_grom_single_16: {name: "Майор Игорь Гром #16\nГде-то под Питером,\nчасть 4", color: colors.mayor_igor_grom, number: "16", size: sizes.single},
    node_mayor_igor_grom_single_spetsvypusk_dolg: {name: "Майор Игорь Гром.\nСпецвыпуск.\nДолг", color: colors.mayor_igor_grom, size: sizes.single},
    node_mayor_igor_grom_single_17: {name: "Майор Игорь Гром #17\nОтпуск,\nчасть 1", color: colors.mayor_igor_grom, number: "17", size: sizes.single},
    node_mayor_igor_grom_single_18: {name: "Майор Игорь Гром #18\nОтпуск,\nчасть 2", color: colors.mayor_igor_grom, number: "18", size: sizes.single},
    node_mayor_igor_grom_single_19: {name: "Майор Игорь Гром #19\nОтпуск,\nчасть 3", color: colors.mayor_igor_grom, number: "19", size: sizes.single},
    node_mayor_igor_grom_single_20: {name: "Майор Игорь Гром #20\nОтпуск,\nчасть 4", color: colors.mayor_igor_grom, number: "20", size: sizes.single},
    node_mayor_igor_grom_single_21: {name: "Майор Игорь Гром #21\nПравда,\nчасть 1", color: colors.mayor_igor_grom, number: "21", size: sizes.single},

    node_mayor_igor_grom_tome_1: {name: "Майор Игорь Гром. Том 1.\nФейк", color: colors.mayor_igor_grom, number: "1", size: sizes.tome},
    node_mayor_igor_grom_tome_2: {name: "Майор Игорь Гром. Том 2.\nИдеальный хищник", color: colors.mayor_igor_grom, number: "2", size: sizes.tome},
    node_mayor_igor_grom_tome_3: {name: "Майор Игорь Гром. Том 3.\nУлыбка Висельника", color: colors.mayor_igor_grom, number: "3", size: sizes.tome},
    node_mayor_igor_grom_tome_4: {name: "Майор Игорь Гром. Том 4.\nГде-то под Питером", color: colors.mayor_igor_grom, number: "4", size: sizes.tome},
    node_mayor_igor_grom_tome_5: {name: "Майор Игорь Гром. Том 5.\nОтпуск", color: colors.mayor_igor_grom, number: "5", size: sizes.tome},

    node_bubble_khellouin_single: {name: "BUBBLE Хэллоуин", color: colors.bubble_khellouin, size: sizes.single},

    node_krutiksy_znakomstvo_s_akademiyey_single: {name: "Крутиксы.\nЗнакомство с академией", color: colors.krutiksy, size: sizes.single},

    node_spetsvypusk_volkov_peklo_single: {name: "Спецвыпуск \"Волков. Пекло\"", color: colors.spetsvypusk_volkov_peklo, size: sizes.single},

    node_spetsvypusk_prokopenko_single: {name: "Спецвыпуск «Прокопенко. Гром на восходе»", color: colors.spetsvypusk_prokopenko, size: sizes.single},

    node_soyuzmultkomiks_single: {name: "СоюзМультКомикс", color: colors.soyuzmultkomiks, size: sizes.single},

    node_ledi_siyaniya_single_1: {name: "Леди Сияния,\nглава 1", color: colors.ledi_siyaniya, number: "1", size: sizes.single},
    node_ledi_siyaniya_single_2: {name: "Леди Сияния,\nглава 2", color: colors.ledi_siyaniya, number: "2", size: sizes.single},
    node_ledi_siyaniya_single_3: {name: "Леди Сияния,\nглава 3", color: colors.ledi_siyaniya, number: "3", size: sizes.single},
    node_ledi_siyaniya_single_4: {name: "Леди Сияния,\nглава 4", color: colors.ledi_siyaniya, number: "4", size: sizes.single},

    node_zolotoy_voin_tome: {name: "Золотой Воин", color: colors.zolotoy_voin, size: sizes.tome},

    node_spetsvypusk_faeton_single: {name: "Спецвыпуск \"Фаэтон\"", color: colors.spetsvypusk_faeton, size: sizes.single},

    node_likoris_single_1: {name: "Ликорис,\nглава 1", color: colors.likoris, number: "1", size: sizes.single},
    node_likoris_single_2: {name: "Ликорис,\nглава 2", color: colors.likoris, number: "2", size: sizes.single},
    node_likoris_single_3: {name: "Ликорис,\nглава 3", color: colors.likoris, number: "3", size: sizes.single},
    node_likoris_single_4: {name: "Ликорис,\nглава 4", color: colors.likoris, number: "4", size: sizes.single},
    node_likoris_single_5: {name: "Ликорис,\nглава 5", color: colors.likoris, number: "5", size: sizes.single},
    node_likoris_single_6: {name: "Ликорис,\nглава 6", color: colors.likoris, number: "6", size: sizes.single},

    node_likoris_tome_1: {name: "Ликорис.\nКнига 1", color: colors.likoris, number: "1", size: sizes.tome},
    node_likoris_tome_2: {name: "Ликорис.\nКнига 2", color: colors.likoris, number: "2", size: sizes.tome},

    node_chernilnyy_prints_i_knizhnyy_rytsar_single_1: {name: "Чернильный принц\nи Книжный рыцарь,\nглава 1", color: colors.chernilnyy_prints_i_knizhnyy_rytsar, number: "1", size: sizes.single},
    node_chernilnyy_prints_i_knizhnyy_rytsar_single_2: {name: "Чернильный принц\nи Книжный рыцарь,\nглава 2", color: colors.chernilnyy_prints_i_knizhnyy_rytsar, number: "2", size: sizes.single},
    node_chernilnyy_prints_i_knizhnyy_rytsar_single_3: {name: "Чернильный принц\nи Книжный рыцарь,\nглава 3", color: colors.chernilnyy_prints_i_knizhnyy_rytsar, number: "3", size: sizes.single},
    node_chernilnyy_prints_i_knizhnyy_rytsar_single_4: {name: "Чернильный принц\nи Книжный рыцарь,\nглава 4", color: colors.chernilnyy_prints_i_knizhnyy_rytsar, number: "4", size: sizes.single},

    node_chernilnyy_prints_i_knizhnyy_rytsar_tome: {name: "Чернильный принц\nи Книжный рыцарь", color: colors.chernilnyy_prints_i_knizhnyy_rytsar, size: sizes.tome},

    node_brat_25_let_tome: {name: "Брат. 25 лет", color: colors.brat_25_let, size: sizes.tome},

    node_chasovoy_single_1: {name: "Часовой.\nВремя против,\nчасть 1", color: colors.chasovoy, number: "1", size: sizes.single},
    node_chasovoy_single_2: {name: "Часовой.\nВремя против,\nчасть 2", color: colors.chasovoy, number: "2", size: sizes.single},
    node_chasovoy_single_3: {name: "Часовой.\nВремя против,\nчасть 3", color: colors.chasovoy, number: "3", size: sizes.single},
    node_chasovoy_single_4: {name: "Часовой.\nВремя против,\nчасть 4", color: colors.chasovoy, number: "4", size: sizes.single},
    node_chasovoy_single_5: {name: "Часовой.\nВремя против,\nчасть 5", color: colors.chasovoy, number: "5", size: sizes.single},

    node_chasovoy_tome: {name: "Часовой.\nВремя против", color: colors.chasovoy, size: sizes.tome},

    node_krutiksy_legendy_galaktiki_single: {name: "Крутиксы.\nЛегенды Галактики", color: colors.krutiksy, size: sizes.single},

    node_caligari_single: {name: "Калигари.\nДурман", color: colors.caligari, size: sizes.single},

    node_reki_single_1: {name: "Реки.\nСтраха нет,\nчасть 1", color: colors.reki, number: "1", size: sizes.single},

    node_grom_tome_trudnoye_detstvo: {name: "Гром:\nТрудное детство.\nВосход Анубиса", color: colors.mayor_grom, size: sizes.tome},

    node_vedma_single_1: {name: "Ведьма №1\nПо проводам,\nчасть 1", color: colors.vedma, number: "1", size: sizes.single},
    node_vedma_single_2: {name: "Ведьма №2\nПо проводам,\nчасть 2", color: colors.vedma, number: "2", size: sizes.single},
    node_vedma_single_3: {name: "Ведьма №3\nПо проводам,\nчасть 3", color: colors.vedma, number: "3", size: sizes.single},

    node_vedma_tome_1: {name: "Ведьма. Том 1.\nПо проводам", color: colors.vedma, number: "1", size: sizes.tome},

    node_geroi_i_monstry_single: {name: "Герои и монстры", color: colors.geroi_i_monstry, size: sizes.single},

    node_bubble_triptih_single_1: {name: "BUBBLE Триптих,\nчасть 1", color: colors.bubble_triptih, number: "1", size: sizes.single},
    node_bubble_triptih_single_2: {name: "BUBBLE Триптих,\nчасть 2", color: colors.bubble_triptih, number: "2", size: sizes.single},
    node_bubble_triptih_single_3: {name: "BUBBLE Триптих,\nчасть 3", color: colors.bubble_triptih, number: "3", size: sizes.single},

    node_bubble_gam_almanakh_single_1: {name: "BUBBLE ГАМ.\nАльманах #1", color: colors.bubble_gam_almanakh, number: "1", size: sizes.single},
    node_bubble_gam_almanakh_single_2: {name: "BUBBLE ГАМ.\nАльманах #2", color: colors.bubble_gam_almanakh, number: "2", size: sizes.single},
    node_bubble_gam_almanakh_single_3: {name: "BUBBLE ГАМ.\nАльманах #3", color: colors.bubble_gam_almanakh, number: "3", size: sizes.single},

    node_shkola_bubble_single_1: {name: "Школа BUBBLE. Том 1.\nУрок жизни", color: colors.shkola_bubble, number: "1", size: sizes.single},

    node_kniga_igra_single_naydi_drakona: {name: "Книга-игра\n\"Найди Дракона\"", color: colors.kniga_igra_naydi_drakona, size: sizes.single},
    node_kniga_igra_single_teper_ty_vor_teney: {name: "Книга-игра.\nТеперь ты - Вор Теней", color: colors.kniga_igra_teper_ty_vor_teney, size: sizes.single},

    node_yablochnyy_spas_single: {name: "Яблочный спас", color: colors.yablochnyy_spas, size: sizes.single},

    node_khudozhestvennyy_roman_book_razumovskiy: {name: "Художественный\nроман\n\"Разумовский\"", color: colors.khudozhestvennyy_roman_razumovskiy, size: sizes.book},
    node_khudozhestvennyy_roman_book_besoboy: {name: "Художественный\nроман\n\"Бесобой\"", color: colors.khudozhestvennyy_roman_besoboy, size: sizes.book},
    node_khudozhestvennyy_roman_book_devyat_zhizney_agaty_zhizn_pervaya_kupel_drakona: {name: "Художественный\nроман\n\"Девять жизней Агаты.\nЖизнь первая.\nКупель Дракона\"", color: colors.khudozhestvennyy_roman_devyat_zhizney_agaty, size: sizes.book},

    node_vera_vulf_tome: {name: "Вера Вульф", color: colors.vera_vulf, size: sizes.tome},

    node_ekslibrium_tsveta_nashikh_chuvstv_raskraska_dosye_single: {name: "Экслибриум:\nЦвета наших чувств.\nРаскраска-досье", color: colors.ekslibrium_tsveta_nashikh_chuvstv_raskraska_dosye, size: sizes.single},

    node_seraya_gonchaya_tome_1_single_1: {name: "Серая Гончая. Том 1,\nглава 1", color: colors.seraya_gonchaya, number: "1", size: sizes.single}*/
};