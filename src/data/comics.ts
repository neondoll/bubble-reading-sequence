import {Comic, Comics} from "./interfaces";

const comicImagePath: string = "/src/assets/images/comics";

const comic_time_of_raven_backstory: Comic = {
    name      : "Время Ворона: Предыстория",
    type      : "book",
    cover_file: {url: `${comicImagePath}/time_of_raven/time-of-raven-backstory.jpg`, aspect_ratio: 1339 / 2048},
    ranges    : ["range_crossovers", "range_time_of_raven"],
    characters: ["character_bulat_gadzhiev", "character_dzhina_stivens", "character_dimitrios", "character_kuth",
                 "character_magistr", "character_svartzhel", "character_chumnoi_doktor", "character_nika_chaikina",
                 "character_igor_grom", "character_besoboi", "character_andrei_radov"],
    authors   : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                 {author_id: "author_anastasia_kim", positions: ["artist"]},
                 {author_id: "author_andrey_vasin", positions: ["artist"]},
                 {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                 {author_id: "author_lada_akishina", positions: ["colorist"]},
                 {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                 {author_id: "author_natalya_zaidova", positions: ["artist"]},
                 {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                 {author_id: "author_anastasia_katerinich", positions: ["artist"]},
                 {author_id: "author_anna_rud", positions: ["artist"]},
                 {author_id: "author_anna_sidorova", positions: ["colorist"]},
                 {author_id: "author_artyom_bizyaev", positions: ["artist"]},
                 {author_id: "author_artyom_myasnikov", positions: ["artist"]},
                 {author_id: "author_vitaly_smirnov", positions: ["artist"]},
                 {author_id: "author_ivan_yelyasov", positions: ["artist"]},
                 {author_id: "author_igor_khudaev", positions: ["screenwriter"]},
                 {author_id: "author_kirill_perepelitsyn", positions: ["colorist"]},
                 {author_id: "author_nina_vakueva", positions: ["artist"]},
                 {author_id: "author_tatiana_yakubets", positions: ["colorist"]},
                 {author_id: "author_eduard_petrovich", positions: ["artist"]}],
    release_at: {year: 2015, month: 10, day: 1}
};
const comic_time_of_raven_epilogue: Comic = {
    name      : "Время Ворона: Эпилог",
    type      : "book",
    cover_file: {url: `${comicImagePath}/time_of_raven/time-of-raven-epilogue.jpg`, aspect_ratio: 1339 / 2048},
    ranges    : ["range_crossovers", "range_time_of_raven"],
    characters: ["character_avgust_van_der_holt", "character_angelina_evgenevna", "character_antihrist",
                 "character_bulat_gadzhiev", "character_dzhessi_rodrigez", "character_dmitrii_dubin",
                 "character_koschei", "character_magistr", "character_myordok_makalister", "character_semiaza",
                 "character_tatyana_aleksandrovna", "character_feliks_dzerzhinskii", "character_chumnoi_doktor",
                 "character_shebu_predvechnyi", "character_yarh_smertonosnyi", "character_nika_chaikina",
                 "character_igor_grom", "character_alyona_kuznetsova", "character_besoboi", "character_andrei_radov"],
    authors   : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                 {author_id: "author_anastasia_kim", positions: ["artist"]},
                 {author_id: "author_andrey_vasin", positions: ["artist"]},
                 {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                 {author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                 {author_id: "author_konstantin_tarasov", positions: ["artist"]},
                 {author_id: "author_lada_akishina", positions: ["colorist"]},
                 {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                 {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                 {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                 {author_id: "author_andrey_rodin", positions: ["artist"]},
                 {author_id: "author_anna_rud", positions: ["artist"]},
                 {author_id: "author_anna_sidorova", positions: ["colorist"]},
                 {author_id: "author_artyom_bizyaev", positions: ["artist"]},
                 {author_id: "author_victoria_tirtilova", positions: ["colorist"]},
                 {author_id: "author_igor_loboda", positions: ["colorist"]},
                 {author_id: "author_igor_khudaev", positions: ["screenwriter"]},
                 {author_id: "author_margarita_kablukova", positions: ["colorist"]},
                 {author_id: "author_natalya_martinovich", positions: ["colorist"]},
                 {author_id: "author_nina_vakueva", positions: ["artist"]},
                 {author_id: "author_eduard_petrovich", positions: ["artist"]}],
    release_at: {year: 2016, month: 3, day: 13}
};
const comic_major_grom_chance: Comic = {
    name      : "Майор Гром: Шанс",
    type      : "single",
    cover_file: {url: `${comicImagePath}/major_grom/major-grom-chance.jpg`, aspect_ratio: 1339 / 2048},
    ranges    : ["range_major_grom"],
    authors   : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                 {author_id: "author_marina_privalova", positions: ["artist"]},
                 {author_id: "author_anna_sidorova", positions: ["colorist"]}],
    release_at: {year: 2017, month: 2, day: 15}
};
const comic_besoboy_and_planeswalkers_new_life: Comic = {
    name      : "Бесобой и Мироходцы: Новая жизнь",
    type      : "book",
    cover_file: {url: `${comicImagePath}/besoboy-and-planeswalkers-new-life.png`, aspect_ratio: 643 / 983},
    ranges    : ["range_crossovers", "range_bubble_legends", "range_besoboy_vol_2"],
    characters: ["character_balor", "character_vasilisa_premudraya", "character_koschei", "character_pavel_ocheredko",
                 "character_seryi_volk", "character_yana", "character_besoboi", "character_andrei_radov",
                 "character_kseniya_radova"],
    authors   : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                 {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                 {author_id: "author_natalya_zaidova", positions: ["artist"]},
                 {author_id: "author_roman_kotkov", positions: ["screenwriter"]}],
    release_at: {year: 2017, month: 12, day: 23}
};
const comic_master_death_is_just_beginning: Comic = {
    name      : "Магистр. Смерть – это только начало",
    type      : "book",
    cover_file: {url: `${comicImagePath}/bubble_legends/master-death-is-just-beginning.png`, aspect_ratio: 582 / 900},
    ranges    : ["range_bubble_legends"],
    characters: ["character_antihrist", "character_magistr"],
    authors   : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                 {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                 {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                 {author_id: "author_anna_sidorova", positions: ["colorist"]},
                 {author_id: "author_eric_bragalyan", positions: ["artist"]}],
    release_at: {year: 2018, month: 10, day: 4}
};
const comic_exlibrium_blank_sheet: Comic = {
    name      : "Экслибриум. Чистый лист",
    type      : "book",
    cover_file: {url: `${comicImagePath}/exlibrium/exlibrium-blank-sheet.jpg`, aspect_ratio: 1004 / 1536},
    ranges    : ["range_exlibrium"],
    characters: ["character_demien_egorov", "character_zoya_safyanova", "character_margarita_volnova",
                 "character_yadviga_tvirinova", "character_yanvar_tvirinov"],
    authors   : [{author_id: "author_konstantin_tarasov", positions: ["artist", "screenwriter"]},
                 {author_id: "author_marina_privalova", positions: ["artist"]},
                 {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                 {author_id: "author_adela_adienova", positions: ["colorist"]},
                 {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                 {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]},
                 {author_id: "author_natalya_martinovich", positions: ["colorist"]},
                 {author_id: "author_oksana_turlyay", positions: ["artist"]},
                 {author_id: "author_taya_makarevich", positions: ["artist"]}],
    release_at: {year: 2019, month: 4, day: 21}
};
const comic_balor_and_yana_dream_catcher: Comic = {
    name      : "Балор и Яна. Ловец снов",
    type      : "book",
    cover_file: {url: `${comicImagePath}/bubble_legends/balor-and-yana-dream-catcher.jpg`, aspect_ratio: 1004 / 1536},
    ranges    : ["range_bubble_legends"],
    characters: ["character_balor", "character_yana"],
    authors   : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                 {author_id: "author_andrey_rodin", positions: ["artist"]},
                 {author_id: "author_margarita_kablukova", positions: ["colorist"]}],
    release_at: {year: 2019, month: 10, day: 3}
};
const comic_major_grom_1939: Comic = {
    name      : "Майор Гром: 1939",
    type      : "book",
    cover_file: {url: `${comicImagePath}/major_grom/major-grom-1939.jpg`, aspect_ratio: 1339 / 2047},
    ranges    : ["range_major_grom"],
    characters: ["character_dmitrii_dubin", "character_chumnoi_doktor", "character_uliya_pchyolkina",
                 "character_igor_grom"],
    authors   : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                 {author_id: "author_alexey_gorbut", positions: ["artist"]},
                 {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
    release_at: {year: 2019, month: 10, day: 21}
};
const comic_quarantine_book: Comic = {
    name      : "Карантинная книга",
    type      : "book",
    cover_file: {url: `${comicImagePath}/besoboy_vol_2/quarantine-book.jpg`, aspect_ratio: 1444 / 2048},
    ranges    : ["range_besoboy_vol_2"],
    characters: ["character_balor", "character_satana", "character_tanahiya_neumolimaya", "character_chyornyi_pyos",
                 "character_yana", "character_bordzh"],
    authors   : [{author_id: "author_anastasia_kim", positions: ["artist", "screenwriter"]}],
    release_at: {year: 2020, month: 6, day: 1}
};
const comic_mir_eternal_memory: Comic = {
    name      : "МИР: Вечная Память",
    type      : "single",
    cover_file: {url: `${comicImagePath}/mir/mir-eternal-memory.jpg`, aspect_ratio: 1339 / 2048},
    ranges    : ["range_mir"],
    characters: ["character_andrei_radov_ded", "character_mir", "character_aleksandra_makedonskaya"],
    authors   : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                 {author_id: "author_alexey_gorbut", positions: ["artist"]},
                 {author_id: "author_andrey_vasin", positions: ["artist"]},
                 {author_id: "author_madibek_musabekov", positions: ["artist"]},
                 {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                 {author_id: "author_anna_antoshchenkova", positions: ["colorist"]},
                 {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
    release_at: {year: 2021, month: 5, day: 9}
};
const comic_exlibrium_red_line: Comic = {
    name      : "Экслибриум. Красная строка",
    type      : "book",
    cover_file: {url: `${comicImagePath}/exlibrium/exlibrium-red-line.jpg`, aspect_ratio: 1339 / 2048},
    ranges    : ["range_exlibrium", "range_exlibrium_second_life"],
    characters: ["character_anton_varchuk", "character_grigorii_loktev", "character_evgeniya_lunyova",
                 "character_matvei_koretskii", "character_snezhana_lebed"],
    authors   : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                 {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                 {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                 {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                 {author_id: "author_yulia_zhuravleva", positions: ["artist"]},
                 {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                 {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
    release_at: {year: 2021, month: 7, day: 30}
};
const comic_special_volkov_inferno: Comic = {
    name      : "Спецвыпуск \"Волков. Пекло\"",
    type      : "single",
    cover_file: {url: `${comicImagePath}/plague_doctor/special-volkov-inferno.jpg`, aspect_ratio: 1339 / 2048},
    ranges    : ["range_plague_doctor"],
    characters: ["character_dzhessi_rodrigez", "character_oleg_volkov"],
    authors   : [{author_id: "author_ekaterina_grishchenko", positions: ["artist"]},
                 {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]}],
    release_at: {year: 2021, month: 10, day: 30}
};
const comic_special_prokopenko_grom_at_sunrise: Comic = {
    name      : "Спецвыпуск «Прокопенко. Гром на восходе»",
    type      : "single",
    cover_file: {url: `${comicImagePath}/special-prokopenko-grom-at-sunrise.jpg`, aspect_ratio: 1339 / 2048},
    ranges    : ["range_major_grom", "range_bubble_legends", "range_major_igor_grom"],
    characters: ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_igor_grom"],
    authors   : [{author_id: "author_kirill_kutuzov", positions: ["screenwriter"]},
                 {author_id: "author_evgeniy_bornyakov", positions: ["artist"]},
                 {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
    release_at: {year: 2021, month: 12}
};
const comic_meteora_storybook_deception_maneuver: Comic = {
    name      : "Метеора. Сторибук. Обманный манёвр",
    type      : "single",
    cover_file: {url: `${comicImagePath}/meteora/meteora-storybook-deception-maneuver.jpeg`, aspect_ratio: 406 / 407},
    ranges    : ["range_meteora"],
    characters: ["character_ziggi", "character_push", "character_alyona_kuznetsova"],
    authors   : [{author_id: "author_evgeny_eronin", positions: ["screenwriter"]}],
    release_at: {year: 2022, month: 5}
};
const comic_special_phaeton: Comic = {
    name      : "Спецвыпуск \"Фаэтон\"",
    type      : "single",
    cover_file: {url: `${comicImagePath}/mir/special-phaeton.jpg`, aspect_ratio: 1339 / 2048},
    ranges    : ["range_mir"],
    authors   : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                 {author_id: "author_alexey_gorbut", positions: ["artist"]},
                 {author_id: "author_danil_panchenko", positions: ["artist"]},
                 {author_id: "author_rene_bartang", positions: ["colorist"]}],
    release_at: {year: 2022, month: 6, day: 17}
};
const comic_allies_special_idyll: Comic = {
    name      : "Союзники. Спецвыпуск. Идиллия",
    type      : "single",
    cover_file: {url: `${comicImagePath}/allies/allies-special-idyll.jpg`, aspect_ratio: 1339 / 2048},
    ranges    : ["range_allies"],
    characters: ["character_artur_haksli", "character_dzhessi_rodrigez"],
    authors   : [{author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                 {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                 {author_id: "author_irina_ivanova", positions: ["artist", "colorist"]}],
    release_at: {year: 2023, month: 2, day: 6}
};

const comics: Comics = {
    comic_besoboy_1                                                         : {
        name            : "Бесобой #1 Имя ему Бесобой, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-1-his-name-is-besoboy-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_1"],
        next_comics     : ["comic_besoboy_2"],
        release_at      : {year: 2012, month: 10, day: 1},
        show            : false
    },
    comic_major_grom_1                                                      : {
        name            : "Майор Гром #1 Чумной Доктор, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-1-plague-doctor-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_chumnoi_doktor", "character_uliya_pchyolkina",
                           "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_alexandra_shchastlivaya", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_1"],
        next_comics     : ["comic_major_grom_2"],
        release_at      : {year: 2012, month: 10, day: 8},
        show            : false
    },
    comic_monk_1                                                            : {
        name            : "Инок #1 Проданная реликвия, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-1-sold-relic-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_1"],
        next_comics     : ["comic_monk_2"],
        release_at      : {year: 2012, month: 10, day: 15},
        show            : false
    },
    comic_red_fury_1                                                        : {
        name            : "Красная Фурия #1 В поисках Грааля, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-1-quest-for-grail-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_1"],
        next_comics     : ["comic_red_fury_2"],
        release_at      : {year: 2012, month: 10, day: 22},
        show            : false
    },
    comic_besoboy_2                                                         : {
        name            : "Бесобой #2 Имя ему Бесобой, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-2-his-name-is-besoboy-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_1"],
        previous_comics : ["comic_besoboy_1"],
        next_comics     : ["comic_besoboy_3"],
        release_at      : {year: 2012, month: 11, day: 1},
        show            : false
    },
    comic_major_grom_2                                                      : {
        name            : "Майор Гром #2 Чумной Доктор, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-2-plague-doctor-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_alexandra_shchastlivaya", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_1"],
        previous_comics : ["comic_major_grom_1"],
        next_comics     : ["comic_major_grom_3"],
        release_at      : {year: 2012, month: 11, day: 8},
        show            : false
    },
    comic_monk_2                                                            : {
        name            : "Инок #2 Проданная реликвия, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-2-sold-relic-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_1"],
        previous_comics : ["comic_monk_1"],
        next_comics     : ["comic_monk_3"],
        release_at      : {year: 2012, month: 11, day: 15},
        show            : false
    },
    comic_red_fury_2                                                        : {
        name            : "Красная Фурия #2 В поисках Грааля, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-2-quest-for-grail-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_1"],
        previous_comics : ["comic_red_fury_1"],
        next_comics     : ["comic_red_fury_3"],
        release_at      : {year: 2012, month: 11, day: 22},
        show            : false
    },
    comic_besoboy_3                                                         : {
        name            : "Бесобой #3 Имя ему Бесобой, часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-3-his-name-is-besoboy-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_1"],
        previous_comics : ["comic_besoboy_2"],
        next_comics     : ["comic_besoboy_4"],
        release_at      : {year: 2012, month: 12, day: 1},
        show            : false
    },
    comic_major_grom_3                                                      : {
        name            : "Майор Гром #3 Чумной Доктор, часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-3-plague-doctor-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_alexandra_shchastlivaya", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_1"],
        previous_comics : ["comic_major_grom_2"],
        next_comics     : ["comic_major_grom_4"],
        release_at      : {year: 2012, month: 12, day: 8},
        show            : false
    },
    comic_monk_3                                                            : {
        name            : "Инок #3 Проданная реликвия, часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-3-sold-relic-part-3.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_1"],
        previous_comics : ["comic_monk_2"],
        next_comics     : ["comic_monk_4"],
        release_at      : {year: 2012, month: 12, day: 15},
        show            : false
    },
    comic_red_fury_3                                                        : {
        name            : "Красная Фурия #3 В поисках Грааля, часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-3-quest-for-grail-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_1"],
        previous_comics : ["comic_red_fury_2"],
        next_comics     : ["comic_red_fury_4"],
        release_at      : {year: 2012, month: 12, day: 22},
        show            : false
    },
    comic_besoboy_4                                                         : {
        name            : "Бесобой #4 Яблоко раздора; Призраки прошлого",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-4-apple-of-discord-ghosts-of-past.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_1"],
        previous_comics : ["comic_besoboy_3"],
        next_comics     : ["comic_besoboy_5"],
        release_at      : {year: 2013, month: 1, day: 1},
        show            : false
    },
    comic_major_grom_4                                                      : {
        name            : "Майор Гром #4 Бабочки в животе; Ва-банк",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-4-butterflies-in-stomach-all-in.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_alexandra_shchastlivaya", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_1"],
        previous_comics : ["comic_major_grom_3"],
        next_comics     : ["comic_major_grom_5"],
        release_at      : {year: 2013, month: 1, day: 8},
        show            : false
    },
    comic_monk_4                                                            : {
        name            : "Инок #4 Подарок; По воле совета",
        number          : "4",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-4-gift-by-will-of-council.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_1"],
        previous_comics : ["comic_monk_3"],
        next_comics     : ["comic_monk_5"],
        release_at      : {year: 2013, month: 1, day: 15},
        show            : false
    },
    comic_red_fury_4                                                        : {
        name            : "Красная Фурия #4 Миллионер; Око Шивы",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-4-millionaire-eye-of-shiva.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_1"],
        previous_comics : ["comic_red_fury_3"],
        next_comics     : ["comic_red_fury_5"],
        release_at      : {year: 2013, month: 1, day: 22},
        show            : false
    },
    comic_besoboy_5                                                         : {
        name            : "Бесобой #5 Имя ему Бесобой, часть 4",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-5-his-name-is-besoboy-part-4.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_1"],
        previous_comics : ["comic_besoboy_4"],
        next_comics     : ["comic_besoboy_6"],
        release_at      : {year: 2013, month: 2, day: 1},
        show            : false
    },
    comic_major_grom_5                                                      : {
        name            : "Майор Гром #5 Чумной Доктор, часть 4",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-5-plague-doctor-part-4.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_alexandra_shchastlivaya", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_1"],
        previous_comics : ["comic_major_grom_4"],
        next_comics     : ["comic_major_grom_6"],
        release_at      : {year: 2013, month: 2, day: 8},
        show            : false
    },
    comic_monk_5                                                            : {
        name            : "Инок #5 Проданная реликвия, часть 4",
        number          : "5",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-5-sold-relic-part-4.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_1"],
        previous_comics : ["comic_monk_4"],
        next_comics     : ["comic_monk_6"],
        release_at      : {year: 2013, month: 2, day: 15},
        show            : false
    },
    comic_red_fury_5                                                        : {
        name            : "Красная Фурия #5 В поисках Грааля, часть 4",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-5-quest-for-grail-part-4.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_1"],
        previous_comics : ["comic_red_fury_4"],
        next_comics     : ["comic_red_fury_6"],
        release_at      : {year: 2013, month: 2, day: 22},
        show            : false
    },
    comic_besoboy_6                                                         : {
        name            : "Бесобой #6 Недетские игры, часть 1",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-6-not-for-childrens-games-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_1"],
        previous_comics : ["comic_besoboy_5"],
        next_comics     : ["comic_besoboy_7"],
        release_at      : {year: 2013, month: 3, day: 1},
        show            : false
    },
    comic_major_grom_6                                                      : {
        name            : "Майор Гром #6 Чумной Доктор, часть 5",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-6-plague-doctor-part-5.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_alexandra_shchastlivaya", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_1"],
        previous_comics : ["comic_major_grom_5"],
        next_comics     : ["comic_major_grom_7"],
        release_at      : {year: 2013, month: 3, day: 8},
        show            : false
    },
    comic_monk_6                                                            : {
        name            : "Инок #6 Проданная реликвия, часть 5",
        number          : "6",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-6-sold-relic-part-5.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_1"],
        previous_comics : ["comic_monk_5"],
        next_comics     : ["comic_monk_7"],
        release_at      : {year: 2013, month: 3, day: 15},
        show            : false
    },
    comic_red_fury_6                                                        : {
        name            : "Красная Фурия #6 В поисках Грааля, часть 5",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-6-quest-for-grail-part-5.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_1"],
        previous_comics : ["comic_red_fury_5"],
        next_comics     : ["comic_red_fury_7"],
        release_at      : {year: 2013, month: 3, day: 22},
        show            : false
    },
    comic_besoboy_7                                                         : {
        name            : "Бесобой #7 Недетские игры, часть 2",
        number          : "7",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-7-not-for-childrens-games-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_1"],
        previous_comics : ["comic_besoboy_6"],
        next_comics     : ["comic_besoboy_8"],
        release_at      : {year: 2013, month: 4, day: 1},
        show            : false
    },
    comic_major_grom_7                                                      : {
        name            : "Майор Гром #7 Чумной Доктор, часть 6",
        number          : "7",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-7-plague-doctor-part-6.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_alexandra_shchastlivaya", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_2"],
        previous_comics : ["comic_major_grom_6"],
        next_comics     : ["comic_major_grom_8"],
        release_at      : {year: 2013, month: 4, day: 8},
        show            : false
    },
    comic_monk_7                                                            : {
        name            : "Инок #7 Проданная реликвия, часть 6",
        number          : "7",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-7-sold-relic-part-6.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_1"],
        previous_comics : ["comic_monk_6"],
        next_comics     : ["comic_monk_8"],
        release_at      : {year: 2013, month: 4, day: 15},
        show            : false
    },
    comic_red_fury_7                                                        : {
        name            : "Красная Фурия #7 В поисках Грааля, часть 6",
        number          : "7",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-7-quest-for-grail-part-6.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_1"],
        previous_comics : ["comic_red_fury_6"],
        next_comics     : ["comic_red_fury_8"],
        release_at      : {year: 2013, month: 4, day: 22},
        show            : false
    },
    comic_besoboy_8                                                         : {
        name            : "Бесобой #8 Страшная тайна, часть 1",
        number          : "8",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-8-terrible-secret-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_2"],
        previous_comics : ["comic_besoboy_7"],
        next_comics     : ["comic_besoboy_9"],
        release_at      : {year: 2013, month: 5, day: 1},
        show            : false
    },
    comic_major_grom_8                                                      : {
        name            : "Майор Гром #8 Чумной Доктор, часть 7",
        number          : "8",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-8-plague-doctor-part-7.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_alexandra_shchastlivaya", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_2"],
        previous_comics : ["comic_major_grom_7"],
        next_comics     : ["comic_major_grom_9"],
        release_at      : {year: 2013, month: 5, day: 8},
        show            : false
    },
    comic_monk_8                                                            : {
        name            : "Инок #8 Проданная реликвия, часть 7",
        number          : "8",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-8-sold-relic-part-7.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_2"],
        previous_comics : ["comic_monk_7"],
        next_comics     : ["comic_monk_9"],
        release_at      : {year: 2013, month: 5, day: 15},
        show            : false
    },
    comic_red_fury_8                                                        : {
        name            : "Красная Фурия #8 В поисках Грааля, часть 7",
        number          : "8",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-8-quest-for-grail-part-7.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_2"],
        previous_comics : ["comic_red_fury_7"],
        next_comics     : ["comic_red_fury_9"],
        release_at      : {year: 2013, month: 5, day: 22},
        show            : false
    },
    comic_besoboy_9                                                         : {
        name            : "Бесобой #9 Страшная тайна, часть 2",
        number          : "9",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-9-terrible-secret-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_2"],
        previous_comics : ["comic_besoboy_8"],
        next_comics     : ["comic_besoboy_10"],
        release_at      : {year: 2013, month: 6, day: 1},
        show            : false
    },
    comic_major_grom_9                                                      : {
        name            : "Майор Гром #9 Чумной Доктор, часть 8",
        number          : "9",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-9-plague-doctor-part-8.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_alexandra_shchastlivaya", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_2"],
        previous_comics : ["comic_major_grom_8"],
        next_comics     : ["comic_major_grom_10"],
        release_at      : {year: 2013, month: 6, day: 8},
        show            : false
    },
    comic_monk_9                                                            : {
        name            : "Инок #9 Проданная реликвия, часть 8",
        number          : "9",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-9-sold-relic-part-8.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_2"],
        previous_comics : ["comic_monk_8"],
        next_comics     : ["comic_monk_10"],
        release_at      : {year: 2013, month: 6, day: 15},
        show            : false
    },
    comic_red_fury_9                                                        : {
        name            : "Красная Фурия #9 В поисках Грааля, часть 8",
        number          : "9",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-9-quest-for-grail-part-8.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_2"],
        previous_comics : ["comic_red_fury_8"],
        next_comics     : ["comic_red_fury_10"],
        release_at      : {year: 2013, month: 6, day: 22},
        show            : false
    },
    comic_besoboy_10                                                        : {
        name            : "Бесобой #10 Лицо зверя, часть 1",
        number          : "10",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-10-face-of-beast-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_2"],
        previous_comics : ["comic_besoboy_9"],
        next_comics     : ["comic_besoboy_11"],
        release_at      : {year: 2013, month: 7, day: 1},
        show            : false
    },
    comic_major_grom_10                                                     : {
        name            : "Майор Гром #10 Блогофобия; Сувенир; Метаморфоза",
        number          : "10",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-10-blogophobia-souvenir-metamorphosis.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_alexandra_shchastlivaya", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_2"],
        previous_comics : ["comic_major_grom_9"],
        next_comics     : ["comic_major_grom_11"],
        release_at      : {year: 2013, month: 7, day: 8},
        show            : false
    },
    comic_monk_10                                                           : {
        name            : "Инок #10 Проданная реликвия, часть 9",
        number          : "10",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-10-sold-relic-part-9.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_2"],
        previous_comics : ["comic_monk_9"],
        next_comics     : ["comic_monk_11"],
        release_at      : {year: 2013, month: 7, day: 15},
        show            : false
    },
    comic_red_fury_10                                                       : {
        name            : "Красная Фурия #10 Арабская ночь; Ангел Смерти; Меч возмездия",
        number          : "10",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-10-arabian-night-angel-of-death-sword-of-vengeance.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_2"],
        previous_comics : ["comic_red_fury_9"],
        next_comics     : ["comic_red_fury_11"],
        release_at      : {year: 2013, month: 7, day: 22},
        show            : false
    },
    comic_besoboy_11                                                        : {
        name            : "Бесобой #11 Лицо зверя, часть 2",
        number          : "11",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-11-face-of-beast-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_2"],
        previous_comics : ["comic_besoboy_10"],
        next_comics     : ["comic_besoboy_12"],
        release_at      : {year: 2013, month: 8, day: 1},
        show            : false
    },
    comic_major_grom_11                                                     : {
        name            : "Майор Гром #11 День Святого Патрика, часть 1",
        number          : "11",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-11-st-patricks-day-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_alexandra_shchastlivaya", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_3"],
        previous_comics : ["comic_major_grom_10"],
        next_comics     : ["comic_major_grom_12"],
        release_at      : {year: 2013, month: 8, day: 8},
        show            : false
    },
    comic_monk_11                                                           : {
        name            : "Инок #11 Проданная реликвия, часть 10",
        number          : "11",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-11-sold-relic-part-10.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_2"],
        previous_comics : ["comic_monk_10"],
        next_comics     : ["comic_monk_12"],
        release_at      : {year: 2013, month: 8, day: 15},
        show            : false
    },
    comic_red_fury_11                                                       : {
        name            : "Красная Фурия #11 Джунгли зовут, часть 1",
        number          : "11",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-11-jungle-is-calling-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_2"],
        previous_comics : ["comic_red_fury_10"],
        next_comics     : ["comic_red_fury_12"],
        release_at      : {year: 2013, month: 8, day: 22},
        show            : false
    },
    comic_besoboy_12                                                        : {
        name            : "Бесобой #12 Лицо зверя, часть 3",
        number          : "12",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-12-face-of-beast-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_2"],
        previous_comics : ["comic_besoboy_11"],
        next_comics     : ["comic_besoboy_13"],
        release_at      : {year: 2013, month: 9, day: 1},
        show            : false
    },
    comic_major_grom_12                                                     : {
        name            : "Майор Гром #12 День Святого Патрика, часть 2",
        number          : "12",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-12-st-patricks-day-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_yulia_zhuravleva", positions: ["artist", "colorist"]},
                           {author_id: "author_tatiana_yakubets", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_3"],
        previous_comics : ["comic_major_grom_11"],
        next_comics     : ["comic_major_grom_13"],
        release_at      : {year: 2013, month: 9, day: 9},
        show            : false
    },
    comic_monk_12                                                           : {
        name            : "Инок #12 Проданная реликвия, часть 11",
        number          : "12",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-12-sold-relic-part-11.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_2"],
        previous_comics : ["comic_monk_11"],
        next_comics     : ["comic_monk_13"],
        release_at      : {year: 2013, month: 9, day: 15},
        show            : false
    },
    comic_red_fury_12                                                       : {
        name            : "Красная Фурия #12 Джунгли зовут, часть 2",
        number          : "12",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-12-jungle-is-calling-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_2"],
        previous_comics : ["comic_red_fury_11"],
        next_comics     : ["comic_red_fury_13"],
        release_at      : {year: 2013, month: 9, day: 22},
        show            : false
    },
    comic_besoboy_13                                                        : {
        name            : "Бесобой #13 Лицо зверя, часть 4",
        number          : "13",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-13-face-of-beast-part-4.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_2"],
        previous_comics : ["comic_besoboy_12"],
        next_comics     : ["comic_besoboy_14"],
        release_at      : {year: 2013, month: 10, day: 1},
        show            : false
    },
    comic_major_grom_13                                                     : {
        name            : "Майор Гром #13 День Святого Патрика, часть 3",
        number          : "13",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-13-st-patricks-day-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_tatiana_yakubets", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_3"],
        previous_comics : ["comic_major_grom_12"],
        next_comics     : ["comic_major_grom_14"],
        release_at      : {year: 2013, month: 10, day: 8},
        show            : false
    },
    comic_monk_13                                                           : {
        name            : "Инок #13 Проданная реликвия, часть 12",
        number          : "13",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-13-sold-relic-part-12.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_2"],
        previous_comics : ["comic_monk_12"],
        next_comics     : ["comic_monk_14"],
        release_at      : {year: 2013, month: 10, day: 15},
        show            : false
    },
    comic_red_fury_13                                                       : {
        name            : "Красная Фурия #13 Джунгли зовут, часть 3",
        number          : "13",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-13-jungle-is-calling-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_2"],
        previous_comics : ["comic_red_fury_12"],
        next_comics     : ["comic_red_fury_14"],
        release_at      : {year: 2013, month: 10, day: 22},
        show            : false
    },
    comic_besoboy_14                                                        : {
        name            : "Бесобой #14 Лицо зверя: Эпилог",
        number          : "14",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-14-face-of-beast-epilogue.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_2"],
        previous_comics : ["comic_besoboy_13"],
        next_comics     : ["comic_besoboy_15"],
        release_at      : {year: 2013, month: 11, day: 1},
        show            : false
    },
    comic_major_grom_14                                                     : {
        name            : "Майор Гром #14 День Святого Патрика, часть 4",
        number          : "14",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-14-st-patricks-day-part-4.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_kirk_oraili", "character_myordok_makalister", "character_uliya_pchyolkina",
                           "character_igor_grom"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_tatiana_yakubets", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_3"],
        previous_comics : ["comic_major_grom_13"],
        next_comics     : ["comic_major_grom_15"],
        release_at      : {year: 2013, month: 11, day: 8},
        show            : false
    },
    comic_monk_14                                                           : {
        name            : "Инок #14 Крест; Союз; Чёрный Ворон",
        number          : "14",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-14-cross-union-black-raven.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_2"],
        previous_comics : ["comic_monk_13"],
        next_comics     : ["comic_besoboy_15"],
        release_at      : {year: 2013, month: 11, day: 15},
        show            : false
    },
    comic_red_fury_14                                                       : {
        name            : "Красная Фурия #14 Джунгли зовут, часть 4",
        number          : "14",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-14-jungle-is-calling-part-4.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_2"],
        previous_comics : ["comic_red_fury_13"],
        next_comics     : ["comic_red_fury_15"],
        release_at      : {year: 2013, month: 11, day: 22},
        show            : false
    },
    comic_besoboy_15                                                        : {
        name            : "Бесобой #15 Инок против Бесобоя, часть 1",
        number          : "15",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-15-monk-vs-besoboy-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy", "range_crossovers"],
        including_comics: ["comic_monk_vs_besoboy"],
        previous_comics : ["comic_besoboy_14", "comic_monk_14"],
        next_comics     : ["comic_monk_15"],
        release_at      : {year: 2013, month: 12, day: 1},
        show            : false
    },
    comic_major_grom_15                                                     : {
        name            : "Майор Гром #15 День Святого Патрика, часть 5",
        number          : "15",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-15-st-patricks-day-part-5.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_tatiana_yakubets", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_3"],
        previous_comics : ["comic_major_grom_14"],
        next_comics     : ["comic_major_grom_16"],
        release_at      : {year: 2013, month: 12, day: 8},
        show            : false
    },
    comic_monk_15                                                           : {
        name            : "Инок #15 Инок против Бесобоя, часть 2",
        number          : "15",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-15-monk-vs-besoboy-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk", "range_crossovers"],
        including_comics: ["comic_monk_vs_besoboy"],
        previous_comics : ["comic_besoboy_15"],
        next_comics     : ["comic_monk_vs_besoboy_1"],
        release_at      : {year: 2013, month: 12, day: 15},
        show            : false
    },
    comic_red_fury_15                                                       : {
        name            : "Красная Фурия #15 День Рождения",
        number          : "15",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/red_fury/red-fury-15-birthday.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_2"],
        previous_comics : ["comic_red_fury_14"],
        next_comics     : ["comic_red_fury_16"],
        release_at      : {year: 2013, month: 12, day: 22},
        show            : false
    },
    comic_monk_vs_besoboy_1                                                 : {
        name            : "Инок против Бесобоя #1 Инок против Бесобоя, часть 3",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/monk_vs_besoboy/monk-vs-besoboy-1-monk-vs-besoboy-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy", "range_monk", "range_crossovers"],
        including_comics: ["comic_monk_vs_besoboy"],
        previous_comics : ["comic_monk_15"],
        next_comics     : ["comic_besoboy_16"],
        release_at      : {year: 2013, month: 12, day: 28},
        show            : false
    },
    comic_besoboy_16                                                        : {
        name            : "Бесобой #16 Инок против Бесобоя, часть 4",
        number          : "16",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-16-monk-vs-besoboy-part-4.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy", "range_crossovers"],
        including_comics: ["comic_monk_vs_besoboy"],
        previous_comics : ["comic_monk_vs_besoboy_1"],
        next_comics     : ["comic_monk_16"],
        release_at      : {year: 2014, month: 1, day: 1},
        show            : false
    },
    comic_major_grom_16                                                     : {
        name            : "Майор Гром #16 День Святого Патрика, часть 6",
        number          : "16",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-16-st-patricks-day-part-6.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_kirk_oraili", "character_myordok_makalister", "character_uliya_pchyolkina",
                           "character_igor_grom"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_tatiana_yakubets", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_3"],
        previous_comics : ["comic_major_grom_15"],
        next_comics     : ["comic_major_grom_17"],
        release_at      : {year: 2014, month: 1, day: 8},
        show            : false
    },
    comic_monk_16                                                           : {
        name            : "Инок #16 Инок против Бесобоя, часть 5",
        number          : "16",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-16-monk-vs-besoboy-part-5.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk", "range_crossovers"],
        including_comics: ["comic_monk_vs_besoboy"],
        previous_comics : ["comic_besoboy_16"],
        next_comics     : ["comic_monk_vs_besoboy_2"],
        release_at      : {year: 2014, month: 1, day: 15},
        show            : false
    },
    comic_red_fury_16                                                       : {
        name            : "Красная Фурия #16 Затишье перед бурей",
        number          : "16",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-16-calm-before-storm.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_3"],
        previous_comics : ["comic_red_fury_15"],
        next_comics     : ["comic_red_fury_16_1"],
        release_at      : {year: 2014, month: 1, day: 22},
        show            : false
    },
    comic_monk_vs_besoboy_2                                                 : {
        name            : "Инок против Бесобоя #2 Инок против Бесобоя, часть 6",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/monk_vs_besoboy/monk-vs-besoboy-2-monk-vs-besoboy-part-6.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy", "range_monk", "range_crossovers"],
        including_comics: ["comic_monk_vs_besoboy"],
        previous_comics : ["comic_monk_16"],
        next_comics     : ["comic_besoboy_17"],
        release_at      : {year: 2014, month: 1, day: 28},
        show            : false
    },
    comic_besoboy_17                                                        : {
        name            : "Бесобой #17 Инок против Бесобоя, часть 7",
        number          : "17",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-17-monk-vs-besoboy-part-7.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy", "range_crossovers"],
        including_comics: ["comic_monk_vs_besoboy"],
        previous_comics : ["comic_monk_vs_besoboy_2"],
        next_comics     : ["comic_monk_17"],
        release_at      : {year: 2014, month: 2, day: 1},
        show            : false
    },
    comic_major_grom_17                                                     : {
        name            : "Майор Гром #17 День Святого Патрика, часть 7",
        number          : "17",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-17-st-patricks-day-part-7.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_tatiana_yakubets", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_3"],
        previous_comics : ["comic_major_grom_16"],
        next_comics     : ["comic_major_grom_18"],
        release_at      : {year: 2014, month: 2, day: 2},
        show            : false
    },
    comic_monk_17                                                           : {
        name            : "Инок #17 Инок против Бесобоя, часть 8",
        number          : "17",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-17-monk-vs-besoboy-part-8.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk", "range_crossovers"],
        including_comics: ["comic_monk_vs_besoboy"],
        previous_comics : ["comic_besoboy_17"],
        next_comics     : ["comic_monk_vs_besoboy_3"],
        release_at      : {year: 2014, month: 2, day: 15},
        show            : false
    },
    comic_red_fury_17                                                       : {
        name            : "Красная Фурия #17 Тёмное наследие, часть 1",
        number          : "17",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-17-dark-legacy-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_3"],
        previous_comics : ["comic_red_fury_16_1"],
        next_comics     : ["comic_red_fury_18"],
        release_at      : {year: 2014, month: 2, day: 22},
        show            : false
    },
    comic_monk_vs_besoboy_3                                                 : {
        name            : "Инок против Бесобоя #3 Инок против Бесобоя, часть 9",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/monk_vs_besoboy/monk-vs-besoboy-3-monk-vs-besoboy-part-9.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy", "range_monk", "range_crossovers"],
        including_comics: ["comic_monk_vs_besoboy"],
        previous_comics : ["comic_monk_17"],
        next_comics     : ["comic_besoboy_18", "comic_monk_18"],
        release_at      : {year: 2014, month: 2, day: 28},
        show            : false
    },
    comic_besoboy_18                                                        : {
        name            : "Бесобой #18 Три сестры, часть 1",
        number          : "18",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-18-three-sisters-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_3"],
        previous_comics : ["comic_monk_vs_besoboy_3"],
        next_comics     : ["comic_besoboy_19"],
        release_at      : {year: 2014, month: 3, day: 1},
        show            : false
    },
    comic_major_grom_18                                                     : {
        name            : "Майор Гром #18 День Святого Патрика, часть 8",
        number          : "18",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-18-st-patricks-day-part-8.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_tatiana_yakubets", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_3"],
        previous_comics : ["comic_major_grom_17"],
        next_comics     : ["comic_major_grom_19"],
        release_at      : {year: 2014, month: 3, day: 8},
        show            : false
    },
    comic_monk_18                                                           : {
        name            : "Инок #18 Прощание, часть 1",
        number          : "18",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-18-farewell-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_3"],
        previous_comics : ["comic_monk_vs_besoboy_3"],
        next_comics     : ["comic_monk_19"],
        release_at      : {year: 2014, month: 3, day: 15},
        show            : false
    },
    comic_red_fury_18                                                       : {
        name            : "Красная Фурия #18 Тёмное наследие, часть 2",
        number          : "18",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-18-dark-legacy-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_3"],
        previous_comics : ["comic_red_fury_17"],
        next_comics     : ["comic_red_fury_19"],
        release_at      : {year: 2014, month: 3, day: 22},
        show            : false
    },
    comic_besoboy_19                                                        : {
        name            : "Бесобой #19 Три сестры, часть 2",
        number          : "19",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-19-three-sisters-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_3"],
        previous_comics : ["comic_besoboy_18"],
        next_comics     : ["comic_besoboy_20"],
        release_at      : {year: 2014, month: 4, day: 1},
        show            : false
    },
    comic_major_grom_19                                                     : {
        name            : "Майор Гром #19 Как в сказке, часть 1",
        number          : "19",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-19-like-in-fairy-tale-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_yulia_zhuravleva", positions: ["artist"]},
                           {author_id: "author_tatiana_yakubets", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_4"],
        previous_comics : ["comic_major_grom_18"],
        next_comics     : ["comic_major_grom_20"],
        release_at      : {year: 2014, month: 4, day: 8},
        show            : false
    },
    comic_monk_19                                                           : {
        name            : "Инок #19 Прощание, часть 2",
        number          : "19",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-19-farewell-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_3"],
        previous_comics : ["comic_monk_18"],
        next_comics     : ["comic_monk_20"],
        release_at      : {year: 2014, month: 4, day: 15},
        show            : false
    },
    comic_red_fury_19                                                       : {
        name            : "Красная Фурия #19 Тёмное наследие, часть 3",
        number          : "19",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-19-dark-legacy-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_3"],
        previous_comics : ["comic_red_fury_18"],
        next_comics     : ["comic_red_fury_20"],
        release_at      : {year: 2014, month: 4, day: 22},
        show            : false
    },
    comic_besoboy_20                                                        : {
        name            : "Бесобой #20 Три сестры, часть 3",
        number          : "20",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-20-three-sisters-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_3"],
        previous_comics : ["comic_besoboy_19"],
        next_comics     : ["comic_besoboy_21"],
        release_at      : {year: 2014, month: 5, day: 1},
        show            : false
    },
    comic_major_grom_20                                                     : {
        name            : "Майор Гром #20 Как в сказке, часть 2",
        number          : "20",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-20-like-in-fairy-tale-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_anna_arhipova", "character_viktor_isaev", "character_dmitrii_dubin",
                           "character_olga_isaeva", "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_yulia_zhuravleva", positions: ["artist"]},
                           {author_id: "author_tatiana_yakubets", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_4"],
        previous_comics : ["comic_major_grom_19"],
        next_comics     : ["comic_major_grom_21"],
        release_at      : {year: 2014, month: 5, day: 8},
        show            : false
    },
    comic_monk_20                                                           : {
        name            : "Инок #20 Прощание, часть 3",
        number          : "20",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-20-farewell-part-3.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_3"],
        previous_comics : ["comic_monk_19"],
        next_comics     : ["comic_monk_21"],
        release_at      : {year: 2014, month: 5, day: 15},
        show            : false
    },
    comic_red_fury_20                                                       : {
        name            : "Красная Фурия #20 Тёмное наследие, часть 4",
        number          : "20",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-20-dark-legacy-part-4.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_4"],
        previous_comics : ["comic_red_fury_19"],
        next_comics     : ["comic_red_fury_21"],
        release_at      : {year: 2014, month: 5, day: 22},
        show            : false
    },
    comic_besoboy_21                                                        : {
        name            : "Бесобой #21 Три сестры, часть 4",
        number          : "21",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-21-three-sisters-part-4.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_3"],
        previous_comics : ["comic_besoboy_20"],
        next_comics     : ["comic_besoboy_22"],
        release_at      : {year: 2014, month: 6, day: 1},
        show            : false
    },
    comic_major_grom_21                                                     : {
        name            : "Майор Гром #21 Как в сказке, часть 3",
        number          : "21",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-21-like-in-fairy-tale-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_yulia_zhuravleva", positions: ["artist"]},
                           {author_id: "author_tatiana_yakubets", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_4"],
        previous_comics : ["comic_major_grom_20"],
        next_comics     : ["comic_major_grom_22"],
        release_at      : {year: 2014, month: 6, day: 8},
        show            : false
    },
    comic_monk_21                                                           : {
        name            : "Инок #21 Зверь во мне, часть 1",
        number          : "21",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-21-beast-in-me-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_3"],
        previous_comics : ["comic_monk_20"],
        next_comics     : ["comic_monk_22"],
        release_at      : {year: 2014, month: 6, day: 15},
        show            : false
    },
    comic_red_fury_21                                                       : {
        name            : "Красная Фурия #21 Тёмное наследие, часть 5",
        number          : "21",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-21-dark-legacy-part-5.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_4"],
        previous_comics : ["comic_red_fury_20"],
        next_comics     : ["comic_red_fury_22"],
        release_at      : {year: 2014, month: 6, day: 22},
        show            : false
    },
    comic_besoboy_22                                                        : {
        name            : "Бесобой #22 Три сестры, часть 5",
        number          : "22",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-22-three-sisters-part-5.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_3"],
        previous_comics : ["comic_besoboy_21"],
        next_comics     : ["comic_besoboy_23"],
        release_at      : {year: 2014, month: 7, day: 1},
        show            : false
    },
    comic_major_grom_22                                                     : {
        name            : "Майор Гром #22 Как в сказке, часть 4",
        number          : "22",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-22-like-in-fairy-tale-part-4.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_yulia_zhuravleva", positions: ["artist"]},
                           {author_id: "author_tatiana_yakubets", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_4"],
        previous_comics : ["comic_major_grom_21"],
        next_comics     : ["comic_major_grom_23"],
        release_at      : {year: 2014, month: 7, day: 8},
        show            : false
    },
    comic_red_fury_16_1                                                     : {
        name            : "Красная Фурия #16.1 Буря во льдах (спецвыпуск)",
        number          : "16.1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-16-1-storm-in-ice-special.png`,
            aspect_ratio: 644 / 983
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_3"],
        previous_comics : ["comic_red_fury_16"],
        next_comics     : ["comic_red_fury_17"],
        release_at      : {year: 2014, month: 7, day: 12},
        show            : false
    },
    comic_monk_22                                                           : {
        name            : "Инок #22 Зверь во мне, часть 2",
        number          : "22",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-22-beast-in-me-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_4"],
        previous_comics : ["comic_monk_21"],
        next_comics     : ["comic_monk_23"],
        release_at      : {year: 2014, month: 7, day: 15},
        show            : false
    },
    comic_red_fury_22                                                       : {
        name            : "Красная Фурия #22 Тёмное наследие, часть 6",
        number          : "22",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-22-dark-legacy-part-6.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_4"],
        previous_comics : ["comic_red_fury_21"],
        next_comics     : ["comic_red_fury_23"],
        release_at      : {year: 2014, month: 7, day: 22},
        show            : false
    },
    comic_besoboy_23                                                        : {
        name            : "Бесобой #23 Равновесие, часть 1",
        number          : "23",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-23-balance-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_4"],
        previous_comics : ["comic_besoboy_22"],
        next_comics     : ["comic_besoboy_24"],
        release_at      : {year: 2014, month: 8, day: 1},
        show            : false
    },
    comic_major_grom_23                                                     : {
        name            : "Майор Гром #23 Как в сказке, часть 5",
        number          : "23",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-23-like-in-fairy-tale-part-5.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_ekaterina_menabde", positions: ["artist"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_4"],
        previous_comics : ["comic_major_grom_22"],
        next_comics     : ["comic_major_grom_24"],
        release_at      : {year: 2014, month: 8, day: 8},
        show            : false
    },
    comic_monk_23                                                           : {
        name            : "Инок #23 Зверь во мне, часть 3",
        number          : "23",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-23-beast-in-me-part-3.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_4"],
        previous_comics : ["comic_monk_22"],
        next_comics     : ["comic_monk_24"],
        release_at      : {year: 2014, month: 8, day: 15},
        show            : false
    },
    comic_red_fury_23                                                       : {
        name            : "Красная Фурия #23 Потеря",
        number          : "23",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/red_fury/red-fury-23-loss.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_4"],
        previous_comics : ["comic_red_fury_22"],
        next_comics     : ["comic_red_fury_24"],
        release_at      : {year: 2014, month: 8, day: 22},
        show            : false
    },
    comic_besoboy_24                                                        : {
        name            : "Бесобой #24 Равновесие, часть 2",
        number          : "24",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-24-balance-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_4"],
        previous_comics : ["comic_besoboy_23"],
        next_comics     : ["comic_besoboy_25"],
        release_at      : {year: 2014, month: 9, day: 1},
        show            : false
    },
    comic_major_grom_24                                                     : {
        name            : "Майор Гром #24 Как в сказке, часть 6",
        number          : "24",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-24-like-in-fairy-tale-part-6.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_ekaterina_menabde", positions: ["artist"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_4"],
        previous_comics : ["comic_major_grom_23"],
        next_comics     : ["comic_major_grom_25"],
        release_at      : {year: 2014, month: 9, day: 8},
        show            : false
    },
    comic_monk_24                                                           : {
        name            : "Инок #24 Зверь во мне, часть 4",
        number          : "24",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-24-beast-in-me-part-4.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_4"],
        previous_comics : ["comic_monk_23"],
        next_comics     : ["comic_monk_25"],
        release_at      : {year: 2014, month: 9, day: 15},
        show            : false
    },
    comic_red_fury_24                                                       : {
        name            : "Красная Фурия #24 После бури",
        number          : "24",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/red_fury/red-fury-24-after-storm.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_4"],
        previous_comics : ["comic_red_fury_23"],
        next_comics     : ["comic_red_fury_25"],
        release_at      : {year: 2014, month: 9, day: 22},
        show            : false
    },
    comic_besoboy_25                                                        : {
        name            : "Бесобой #25 Чистая душа",
        number          : "25",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-25-pure-soul.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_4"],
        previous_comics : ["comic_besoboy_24"],
        next_comics     : ["comic_besoboy_26"],
        release_at      : {year: 2014, month: 10, day: 1},
        show            : false
    },
    comic_besoboy_volume_1                                                  : {
        name            : "Бесобой том 1: Имя ему Бесобой",
        number          : "1",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-volume-1-his-name-is-besoboy.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_1", "comic_besoboy_2", "comic_besoboy_3", "comic_besoboy_4",
                           "comic_besoboy_5", "comic_besoboy_6", "comic_besoboy_7"],
        next_comics     : ["comic_besoboy_volume_2"],
        release_at      : {year: 2014, month: 10, day: 1},
        show            : true
    },
    comic_major_grom_volume_1                                               : {
        name            : "Майор Гром. Том 1: Чумной Доктор. Часть 1",
        number          : "1",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-volume-1-plague-doctor-part-1.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom", "character_sergei_razumovskii"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_alexandra_shchastlivaya", positions: ["colorist"]},
                           {author_id: "author_anton_startsev", positions: ["colorist"]}],
        contained_comics: ["comic_major_grom_1", "comic_major_grom_2", "comic_major_grom_3", "comic_major_grom_4",
                           "comic_major_grom_5", "comic_major_grom_6"],
        next_comics     : ["comic_major_grom_volume_2"],
        release_at      : {year: 2014, month: 10, day: 1},
        show            : true
    },
    comic_monk_volume_1                                                     : {
        name            : "Инок том 1: Проданная реликвия часть 1",
        number          : "1",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/monk/monk-volume-1-sold-relic-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        contained_comics: ["comic_monk_1", "comic_monk_2", "comic_monk_3", "comic_monk_4", "comic_monk_5",
                           "comic_monk_6", "comic_monk_7"],
        next_comics     : ["comic_monk_volume_2"],
        release_at      : {year: 2014, month: 10, day: 1},
        show            : true
    },
    comic_red_fury_volume_1                                                 : {
        name            : "Красная Фурия том 1: В поисках грааля часть 1",
        number          : "1",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-volume-1-quest-for-grail-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_1", "comic_red_fury_2", "comic_red_fury_3", "comic_red_fury_4",
                           "comic_red_fury_5", "comic_red_fury_6", "comic_red_fury_7"],
        next_comics     : ["comic_red_fury_volume_2"],
        release_at      : {year: 2014, month: 10, day: 1},
        show            : true
    },
    comic_major_grom_25                                                     : {
        name            : "Майор Гром #25 Игра, часть 1",
        number          : "25",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/major_grom/major-grom-25-game-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_oleg_volkov", "character_fyodor_prokopenko",
                           "character_chumnoi_doktor", "character_uliya_pchyolkina", "character_igor_grom",
                           "character_sergei_razumovskii"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_5"],
        previous_comics : ["comic_major_grom_24"],
        next_comics     : ["comic_major_grom_26"],
        release_at      : {year: 2014, month: 10, day: 5},
        show            : false
    },
    comic_monk_25                                                           : {
        name            : "Инок #25 Владыка, часть 1",
        number          : "25",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-25-lord-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_4"],
        previous_comics : ["comic_monk_24"],
        next_comics     : ["comic_monk_26"],
        release_at      : {year: 2014, month: 10, day: 10},
        show            : false
    },
    comic_red_fury_25                                                       : {
        name            : "Красная Фурия #25 Ничего личного, просто бизнес, часть 1",
        number          : "25",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-25-nothing-personal-just-business-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_5"],
        previous_comics : ["comic_red_fury_24"],
        next_comics     : ["comic_red_fury_26"],
        release_at      : {year: 2014, month: 10, day: 15},
        show            : false
    },
    comic_exlibrium_1                                                       : {
        name            : "Экслибриум #1 ...и дверь откроется, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-1-and-door-will-open-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_1"],
        next_comics     : ["comic_exlibrium_2"],
        release_at      : {year: 2014, month: 10, day: 20},
        show            : false
    },
    comic_meteora_1                                                         : {
        name            : "Метеора #1 Самая опасная вещь в космосе, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-1-most-dangerous-thing-in-space-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_1"],
        next_comics     : ["comic_meteora_2"],
        release_at      : {year: 2014, month: 10, day: 25},
        show            : false
    },
    comic_besoboy_26                                                        : {
        name            : "Бесобой #26 Друг",
        number          : "26",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-26-friend.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_4"],
        previous_comics : ["comic_besoboy_25"],
        next_comics     : ["comic_besoboy_27"],
        release_at      : {year: 2014, month: 11, day: 1},
        show            : false
    },
    comic_major_grom_26                                                     : {
        name            : "Майор Гром #26 Игра, часть 2",
        number          : "26",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/major_grom/major-grom-26-game-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_oleg_volkov", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom", "character_sergei_razumovskii"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_tatiana_yakubets", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_5"],
        previous_comics : ["comic_major_grom_25"],
        next_comics     : ["comic_major_grom_27"],
        release_at      : {year: 2014, month: 11, day: 5},
        show            : false
    },
    comic_monk_26                                                           : {
        name            : "Инок #26 Владыка, часть 2",
        number          : "26",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-26-lord-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_4"],
        previous_comics : ["comic_monk_25"],
        next_comics     : ["comic_monk_27"],
        release_at      : {year: 2014, month: 11, day: 10},
        show            : false
    },
    comic_red_fury_26                                                       : {
        name            : "Красная Фурия #26 Ничего личного, просто бизнес, часть 2",
        number          : "26",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-26-nothing-personal-just-business-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_5"],
        previous_comics : ["comic_red_fury_25"],
        next_comics     : ["comic_red_fury_27"],
        release_at      : {year: 2014, month: 11, day: 15},
        show            : false
    },
    comic_exlibrium_2                                                       : {
        name            : "Экслибриум #2 ...и дверь откроется, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-2-and-door-will-open-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_1"],
        previous_comics : ["comic_exlibrium_1"],
        next_comics     : ["comic_exlibrium_3"],
        release_at      : {year: 2014, month: 11, day: 20},
        show            : false
    },
    comic_meteora_2                                                         : {
        name            : "Метеора #2 Самая опасная вещь в космосе, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-2-most-dangerous-thing-in-space-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_1"],
        previous_comics : ["comic_meteora_1"],
        next_comics     : ["comic_meteora_3"],
        release_at      : {year: 2014, month: 11, day: 25},
        show            : false
    },
    comic_besoboy_27                                                        : {
        name            : "Бесобой #27 Балор",
        number          : "27",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-27-balor.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_4"],
        previous_comics : ["comic_besoboy_26"],
        next_comics     : ["comic_besoboy_28"],
        release_at      : {year: 2014, month: 12, day: 1},
        show            : false
    },
    comic_major_grom_27                                                     : {
        name            : "Майор Гром #27 Игра, часть 3",
        number          : "27",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/major_grom/major-grom-27-game-part-3.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_oleg_volkov", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom", "character_sergei_razumovskii"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_5"],
        previous_comics : ["comic_major_grom_26"],
        next_comics     : ["comic_major_grom_28"],
        release_at      : {year: 2014, month: 12, day: 5},
        show            : false
    },
    comic_monk_27                                                           : {
        name            : "Инок #27 Высокое напряжение, часть 1",
        number          : "27",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-27-high-voltage-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_5"],
        previous_comics : ["comic_monk_26"],
        next_comics     : ["comic_monk_28"],
        release_at      : {year: 2014, month: 12, day: 10},
        show            : false
    },
    comic_red_fury_27                                                       : {
        name            : "Красная Фурия #27 Ничего личного, просто бизнес, часть 3",
        number          : "27",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-27-nothing-personal-just-business-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_5"],
        previous_comics : ["comic_red_fury_26"],
        next_comics     : ["comic_red_fury_28"],
        release_at      : {year: 2014, month: 12, day: 15},
        show            : false
    },
    comic_exlibrium_3                                                       : {
        name            : "Экслибриум #3 ...и дверь откроется, часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-3-and-door-will-open-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_1"],
        previous_comics : ["comic_exlibrium_2"],
        next_comics     : ["comic_exlibrium_4"],
        release_at      : {year: 2014, month: 12, day: 20},
        show            : false
    },
    comic_besoboy_volume_2                                                  : {
        name            : "Бесобой том 2: Лицо зверя",
        number          : "2",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-volume-2-face-of-beast.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_8", "comic_besoboy_9", "comic_besoboy_10", "comic_besoboy_11",
                           "comic_besoboy_12", "comic_besoboy_13", "comic_besoboy_14"],
        previous_comics : ["comic_besoboy_volume_1"],
        next_comics     : ["comic_monk_vs_besoboy"],
        release_at      : {year: 2014, month: 12, day: 20},
        show            : true
    },
    comic_major_grom_volume_2                                               : {
        name            : "Майор Гром. Том 2: Чумной Доктор. Часть 2",
        number          : "2",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-volume-2-plague-doctor-part-2.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom", "character_sergei_razumovskii"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_alexandra_shchastlivaya", positions: ["colorist"]},
                           {author_id: "author_alena_karpova", positions: ["colorist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]},
                           {author_id: "author_tatiana_yakubets", positions: ["colorist"]}],
        contained_comics: ["comic_major_grom_7", "comic_major_grom_8", "comic_major_grom_9", "comic_major_grom_10"],
        previous_comics : ["comic_major_grom_volume_1"],
        next_comics     : ["comic_major_grom_volume_3"],
        release_at      : {year: 2014, month: 12, day: 20},
        show            : true
    },
    comic_monk_volume_2                                                     : {
        name            : "Инок том 2: Проданная реликвия часть 2",
        number          : "2",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/monk/monk-volume-2-sold-relic-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        contained_comics: ["comic_monk_8", "comic_monk_9", "comic_monk_10", "comic_monk_11", "comic_monk_12",
                           "comic_monk_13", "comic_monk_14"],
        previous_comics : ["comic_monk_volume_1"],
        next_comics     : ["comic_monk_vs_besoboy"],
        release_at      : {year: 2014, month: 12, day: 20},
        show            : true
    },
    comic_red_fury_volume_2                                                 : {
        name            : "Красная Фурия том 2: В поисках грааля часть 2",
        number          : "2",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-volume-2-quest-for-grail-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_8", "comic_red_fury_9", "comic_red_fury_10", "comic_red_fury_11",
                           "comic_red_fury_12", "comic_red_fury_13", "comic_red_fury_14", "comic_red_fury_15"],
        previous_comics : ["comic_red_fury_volume_1"],
        next_comics     : ["comic_red_fury_volume_3"],
        release_at      : {year: 2014, month: 12, day: 20},
        show            : true
    },
    comic_meteora_3                                                         : {
        name            : "Метеора #3 Прорыв, часть 1",
        number          : "3",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-3-breakthrough-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_1"],
        previous_comics : ["comic_meteora_2"],
        next_comics     : ["comic_meteora_4"],
        release_at      : {year: 2014, month: 12, day: 25},
        show            : false
    },
    comic_besoboy_28                                                        : {
        name            : "Бесобой #28 Курьер; Неизбежность",
        number          : "28",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-28-courier-inevitability.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_5"],
        previous_comics : ["comic_besoboy_27"],
        next_comics     : ["comic_besoboy_29"],
        release_at      : {year: 2015, month: 1, day: 1},
        show            : false
    },
    comic_major_grom_28                                                     : {
        name            : "Майор Гром #28 Игра, часть 4",
        number          : "28",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/major_grom/major-grom-28-game-part-4.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_oleg_volkov", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom", "character_sergei_razumovskii"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_5"],
        previous_comics : ["comic_major_grom_27"],
        next_comics     : ["comic_major_grom_29"],
        release_at      : {year: 2015, month: 1, day: 12},
        show            : false
    },
    comic_monk_28                                                           : {
        name            : "Инок #28 Высокое напряжение, часть 2; Старый новый гад",
        number          : "28",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/monk/monk-28-high-voltage-part-2-old-new-bastard.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_5"],
        previous_comics : ["comic_monk_27"],
        next_comics     : ["comic_monk_29"],
        release_at      : {year: 2015, month: 1, day: 12},
        show            : false
    },
    comic_red_fury_28                                                       : {
        name            : "Красная Фурия #28 Ничего личного, просто бизнес, часть 4; Новая Жизнь",
        number          : "28",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-28-nothing-personal-just-business-part-4-new-life.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_5"],
        previous_comics : ["comic_red_fury_27"],
        next_comics     : ["comic_red_fury_29"],
        release_at      : {year: 2015, month: 1, day: 15},
        show            : false
    },
    comic_exlibrium_4                                                       : {
        name            : "Экслибриум #4 ...и дверь откроется, часть 4; Черная дорога",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-4-and-door-will-open-part-4-black-road.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_1"],
        previous_comics : ["comic_exlibrium_3"],
        next_comics     : ["comic_exlibrium_5"],
        release_at      : {year: 2015, month: 1, day: 20},
        show            : false
    },
    comic_meteora_4                                                         : {
        name            : "Метеора #4 Прорыв, часть 2; Новая реальность",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-4-breakthrough-part-2-new-reality.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_1"],
        previous_comics : ["comic_meteora_3"],
        next_comics     : ["comic_meteora_5"],
        release_at      : {year: 2015, month: 1, day: 25},
        show            : false
    },
    comic_besoboy_29                                                        : {
        name            : "Бесобой #29 Метро, часть 1",
        number          : "29",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-29-metro-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_5"],
        previous_comics : ["comic_besoboy_28"],
        next_comics     : ["comic_besoboy_30"],
        release_at      : {year: 2015, month: 2, day: 2},
        show            : false
    },
    comic_major_grom_29                                                     : {
        name            : "Майор Гром #29 Игра, часть 5",
        number          : "29",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/major_grom/major-grom-29-game-part-5.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_oleg_volkov", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom", "character_sergei_razumovskii"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_5"],
        previous_comics : ["comic_major_grom_28"],
        next_comics     : ["comic_major_grom_30"],
        release_at      : {year: 2015, month: 2, day: 5},
        show            : false
    },
    comic_monk_29                                                           : {
        name            : "Инок #29 Высокое напряжение, часть 3",
        number          : "29",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-29-high-voltage-part-3.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_5"],
        previous_comics : ["comic_monk_28"],
        next_comics     : ["comic_monk_30"],
        release_at      : {year: 2015, month: 2, day: 10},
        show            : false
    },
    comic_red_fury_29                                                       : {
        name            : "Красная Фурия #29 Сила мысли, часть 1",
        number          : "29",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-29-power-of-thought-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_5"],
        previous_comics : ["comic_red_fury_28"],
        next_comics     : ["comic_red_fury_30"],
        release_at      : {year: 2015, month: 2, day: 15},
        show            : false
    },
    comic_exlibrium_5                                                       : {
        name            : "Экслибриум #5 ...и дверь откроется, часть 5",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-5-and-door-will-open-part-5.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_1"],
        previous_comics : ["comic_exlibrium_4"],
        next_comics     : ["comic_exlibrium_6"],
        release_at      : {year: 2015, month: 2, day: 20},
        show            : false
    },
    comic_meteora_5                                                         : {
        name            : "Метеора #5 Дело чести, часть 1",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-5-matter-of-honor-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_1"],
        previous_comics : ["comic_meteora_4"],
        next_comics     : ["comic_meteora_6"],
        release_at      : {year: 2015, month: 2, day: 25},
        show            : false
    },
    comic_besoboy_30                                                        : {
        name            : "Бесобой #30 Метро, часть 2",
        number          : "30",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-30-metro-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_5"],
        previous_comics : ["comic_besoboy_29"],
        next_comics     : ["comic_besoboy_31"],
        release_at      : {year: 2015, month: 3, day: 1},
        show            : false
    },
    comic_major_grom_30                                                     : {
        name            : "Майор Гром #30 Игра, часть 6",
        number          : "30",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/major_grom/major-grom-30-game-part-6.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_oleg_volkov", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom", "character_sergei_razumovskii"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_5"],
        previous_comics : ["comic_major_grom_29"],
        next_comics     : ["comic_major_grom_31"],
        release_at      : {year: 2015, month: 3, day: 5},
        show            : false
    },
    comic_monk_30                                                           : {
        name            : "Инок #30 Высокое напряжение, часть 4",
        number          : "30",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-30-high-voltage-part-4.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_5"],
        previous_comics : ["comic_monk_29"],
        next_comics     : ["comic_monk_31"],
        release_at      : {year: 2015, month: 3, day: 10},
        show            : false
    },
    comic_red_fury_30                                                       : {
        name            : "Красная Фурия #30 Сила мысли, часть 2",
        number          : "30",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-30-power-of-thought-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_5"],
        previous_comics : ["comic_red_fury_29"],
        next_comics     : ["comic_red_fury_31"],
        release_at      : {year: 2015, month: 3, day: 15},
        show            : false
    },
    comic_exlibrium_6                                                       : {
        name            : "Экслибриум #6 Костяной дом, часть 1",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-6-bone-house-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_2"],
        previous_comics : ["comic_exlibrium_5"],
        next_comics     : ["comic_exlibrium_7"],
        release_at      : {year: 2015, month: 3, day: 20},
        show            : false
    },
    comic_major_grom_volume_3                                               : {
        name            : "Майор Гром. Том 3: День святого Патрика",
        number          : "3",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-volume-3-st-patricks-day.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom", "character_sergei_razumovskii"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_yulia_zhuravleva", positions: ["artist"]},
                           {author_id: "author_alena_karpova", positions: ["colorist"]},
                           {author_id: "author_ivan_skorokhodov", positions: ["screenwriter"]},
                           {author_id: "author_tatiana_yakubets", positions: ["colorist"]}],
        contained_comics: ["comic_major_grom_11", "comic_major_grom_12", "comic_major_grom_13", "comic_major_grom_14",
                           "comic_major_grom_15", "comic_major_grom_16", "comic_major_grom_17", "comic_major_grom_18"],
        previous_comics : ["comic_major_grom_volume_2"],
        next_comics     : ["comic_major_grom_volume_4"],
        release_at      : {year: 2015, month: 3, day: 21},
        show            : true
    },
    comic_monk_vs_besoboy                                                   : {
        name            : "Инок против Бесобоя",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/monk_vs_besoboy/monk-vs-besoboy.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_besoboy", "range_monk", "range_crossovers"],
        contained_comics: ["comic_besoboy_15", "comic_monk_15", "comic_monk_vs_besoboy_1", "comic_besoboy_16",
                           "comic_monk_16", "comic_monk_vs_besoboy_2", "comic_besoboy_17", "comic_monk_17",
                           "comic_monk_vs_besoboy_3"],
        previous_comics : ["comic_besoboy_volume_2", "comic_monk_volume_2"],
        next_comics     : ["comic_besoboy_volume_3", "comic_monk_volume_3"],
        release_at      : {year: 2015, month: 3, day: 21},
        show            : true
    },
    comic_meteora_6                                                         : {
        name            : "Метеора #6 Дело чести, часть 2",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-6-matter-of-honor-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_1"],
        previous_comics : ["comic_meteora_5"],
        next_comics     : ["comic_meteora_7"],
        release_at      : {year: 2015, month: 3, day: 25},
        show            : false
    },
    comic_besoboy_31                                                        : {
        name            : "Бесобой #31 Метро, часть 3",
        number          : "31",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-31-metro-part-3.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_5"],
        previous_comics : ["comic_besoboy_30"],
        next_comics     : ["comic_besoboy_32"],
        release_at      : {year: 2015, month: 4, day: 1},
        show            : false
    },
    comic_major_grom_31                                                     : {
        name            : "Майор Гром #31 Игра, часть 7",
        number          : "31",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/major_grom/major-grom-31-game-part-7.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_oleg_volkov", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom", "character_sergei_razumovskii"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_5"],
        previous_comics : ["comic_major_grom_30"],
        next_comics     : ["comic_major_grom_32"],
        release_at      : {year: 2015, month: 4, day: 5},
        show            : false
    },
    comic_monk_31                                                           : {
        name            : "Инок #31 Высокое напряжение, часть 5",
        number          : "31",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-31-high-voltage-part-5.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_5"],
        previous_comics : ["comic_monk_30"],
        next_comics     : ["comic_monk_32"],
        release_at      : {year: 2015, month: 4, day: 10},
        show            : false
    },
    comic_red_fury_31                                                       : {
        name            : "Красная Фурия #31 Сила мысли, часть 3",
        number          : "31",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-31-power-of-thought-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_5"],
        previous_comics : ["comic_red_fury_30"],
        next_comics     : ["comic_red_fury_32"],
        release_at      : {year: 2015, month: 4, day: 13},
        show            : false
    },
    comic_exlibrium_7                                                       : {
        name            : "Экслибриум #7 Костяной дом, часть 2",
        number          : "7",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-7-bone-house-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_2"],
        previous_comics : ["comic_exlibrium_6"],
        next_comics     : ["comic_exlibrium_8"],
        release_at      : {year: 2015, month: 4, day: 20},
        show            : false
    },
    comic_meteora_7                                                         : {
        name            : "Метеора #7 Блокада, часть 1",
        number          : "7",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-7-blockade-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_2"],
        previous_comics : ["comic_meteora_6"],
        next_comics     : ["comic_meteora_8"],
        release_at      : {year: 2015, month: 4, day: 25},
        show            : false
    },
    comic_besoboy_32                                                        : {
        name            : "Бесобой #32 Метро, часть 4",
        number          : "32",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-32-metro-part-4.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_5"],
        previous_comics : ["comic_besoboy_31"],
        next_comics     : ["comic_besoboy_33"],
        release_at      : {year: 2015, month: 5, day: 1},
        show            : false
    },
    comic_monk_and_major_grom_storm_of_berlin                               : {
        name            : "Инок и Майор Гром. Штурм Берлина",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/monk-and-major-grom-storm-of-berlin.png`,
            aspect_ratio: 454 / 695
        },
        ranges          : ["range_crossovers", "range_bubble_legends"],
        characters      : ["character_andrei_radov_ded", "character_igor_grom_ded"],
        authors         : [{author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]},
                           {author_id: "author_nina_vakueva", positions: ["colorist"]}],
        including_comics: ["comic_chronicles_of_monk_storm_of_berlin"],
        previous_comics : ["comic_monk_50"],
        release_at      : {year: 2015, month: 5, day: 1},
        show            : false
    },
    comic_chronicles_of_monk_storm_of_berlin                                : {
        name            : "Хроники Инока: Штурм Берлина",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/chronicles-of-monk-storm-of-berlin.png`,
            aspect_ratio: 643 / 983
        },
        ranges          : ["range_crossovers", "range_bubble_legends"],
        characters      : ["character_andrei_radov_ded", "character_igor_grom_ded"],
        authors         : [{author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]},
                           {author_id: "author_nina_vakueva", positions: ["colorist"]}],
        contained_comics: ["comic_monk_and_major_grom_storm_of_berlin"],
        previous_comics : ["comic_monk_volume_8"],
        release_at      : {year: 2015, month: 5, day: 1},
        show            : true
    },
    comic_major_grom_32                                                     : {
        name            : "Майор Гром #32 Игра, часть 8",
        number          : "32",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/major_grom/major-grom-32-game-part-8.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_oleg_volkov", "character_chumnoi_doktor",
                           "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_5"],
        previous_comics : ["comic_major_grom_31"],
        next_comics     : ["comic_major_grom_33"],
        release_at      : {year: 2015, month: 5, day: 5},
        show            : false
    },
    comic_monk_32                                                           : {
        name            : "Инок #32 Калинов мост, часть 1",
        number          : "32",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-32-kalinov-bridge-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_6"],
        previous_comics : ["comic_monk_31"],
        next_comics     : ["comic_monk_33"],
        release_at      : {year: 2015, month: 5, day: 12},
        show            : false
    },
    comic_red_fury_32                                                       : {
        name            : "Красная Фурия #32 Любовь зла",
        number          : "32",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/red_fury/red-fury-32-love-is-evil.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_6"],
        previous_comics : ["comic_red_fury_31"],
        next_comics     : ["comic_red_fury_33"],
        release_at      : {year: 2015, month: 5, day: 15},
        show            : false
    },
    comic_exlibrium_8                                                       : {
        name            : "Экслибриум #8 Костяной дом, часть 3",
        number          : "8",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-8-bone-house-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_2"],
        previous_comics : ["comic_exlibrium_7"],
        next_comics     : ["comic_exlibrium_9"],
        release_at      : {year: 2015, month: 5, day: 18},
        show            : false
    },
    comic_meteora_8                                                         : {
        name            : "Метеора #8 Блокада, часть 2",
        number          : "8",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-8-blockade-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_2"],
        previous_comics : ["comic_meteora_7"],
        next_comics     : ["comic_meteora_9"],
        release_at      : {year: 2015, month: 5, day: 25},
        show            : false
    },
    comic_besoboy_33                                                        : {
        name            : "Бесобой #33 Исповедь",
        number          : "33",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-33-confession.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_5"],
        previous_comics : ["comic_besoboy_32"],
        next_comics     : ["comic_besoboy_34"],
        release_at      : {year: 2015, month: 6, day: 1},
        show            : false
    },
    comic_major_grom_33                                                     : {
        name            : "Майор Гром #33 Игра, часть 9",
        number          : "33",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/major_grom/major-grom-33-game-part-9.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_oleg_volkov", "character_fyodor_prokopenko",
                           "character_chumnoi_doktor", "character_uliya_pchyolkina", "character_igor_grom",
                           "character_sergei_razumovskii"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_5"],
        previous_comics : ["comic_major_grom_32"],
        next_comics     : ["comic_major_grom_34"],
        release_at      : {year: 2015, month: 6, day: 8},
        show            : false
    },
    comic_monk_33                                                           : {
        name            : "Инок #33 Калинов мост, часть 2; Спаситель",
        number          : "33",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/monk/monk-33-kalinov-bridge-part-2-savior.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_6"],
        previous_comics : ["comic_monk_32"],
        next_comics     : ["comic_monk_34"],
        release_at      : {year: 2015, month: 6, day: 12},
        show            : false
    },
    comic_red_fury_33                                                       : {
        name            : "Красная Фурия #33 Отто и Лотта",
        number          : "33",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/red_fury/red-fury-33-otto-and-lotta.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_6"],
        previous_comics : ["comic_red_fury_32"],
        next_comics     : ["comic_red_fury_34"],
        release_at      : {year: 2015, month: 6, day: 16},
        show            : false
    },
    comic_exlibrium_9                                                       : {
        name            : "Экслибриум #9 Люди библиотеки, часть 1",
        number          : "9",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-9-library-people-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_2"],
        previous_comics : ["comic_exlibrium_8"],
        next_comics     : ["comic_exlibrium_10"],
        release_at      : {year: 2015, month: 6, day: 18},
        show            : false
    },
    comic_meteora_9                                                         : {
        name            : "Метеора #9 Блокада, часть 3",
        number          : "9",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-9-blockade-part-3.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_2"],
        previous_comics : ["comic_meteora_8"],
        next_comics     : ["comic_meteora_10"],
        release_at      : {year: 2015, month: 6, day: 25},
        show            : false
    },
    comic_besoboy_34                                                        : {
        name            : "Бесобой #34 Стая, часть 1",
        number          : "34",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-34-flock-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_6"],
        previous_comics : ["comic_besoboy_33"],
        next_comics     : ["comic_besoboy_35"],
        release_at      : {year: 2015, month: 7, day: 1},
        show            : false
    },
    comic_major_grom_34                                                     : {
        name            : "Майор Гром #34 Голоса, часть 1",
        number          : "34",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-34-voices-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_anna_rud", positions: ["artist"]},
                           {author_id: "author_kirill_perepelitsyn", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_6"],
        previous_comics : ["comic_major_grom_33"],
        next_comics     : ["comic_major_grom_35"],
        release_at      : {year: 2015, month: 7, day: 6},
        show            : false
    },
    comic_monk_34                                                           : {
        name            : "Инок #34 Калинов мост, часть 3",
        number          : "34",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-34-kalinov-bridge-part-3.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_6"],
        previous_comics : ["comic_monk_33"],
        next_comics     : ["comic_monk_35"],
        release_at      : {year: 2015, month: 7, day: 10},
        show            : false
    },
    comic_red_fury_34                                                       : {
        name            : "Красная Фурия #34 Братство",
        number          : "34",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/red_fury/red-fury-34-brotherhood.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_6"],
        previous_comics : ["comic_red_fury_33"],
        next_comics     : ["comic_red_fury_35"],
        release_at      : {year: 2015, month: 7, day: 16},
        show            : false
    },
    comic_exlibrium_10                                                      : {
        name            : "Экслибриум #10 Люди библиотеки, часть 2",
        number          : "10",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-10-library-people-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_2"],
        previous_comics : ["comic_exlibrium_9"],
        next_comics     : ["comic_exlibrium_11"],
        release_at      : {year: 2015, month: 7, day: 20},
        show            : false
    },
    comic_meteora_10                                                        : {
        name            : "Метеора #10 Блокада, часть 4",
        number          : "10",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-10-blockade-part-4.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_2"],
        previous_comics : ["comic_meteora_9"],
        next_comics     : ["comic_meteora_11"],
        release_at      : {year: 2015, month: 7, day: 25},
        show            : false
    },
    comic_besoboy_volume_3                                                  : {
        name            : "Бесобой том 3: Три сестры",
        number          : "3",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-volume-3-three-sisters.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_18", "comic_besoboy_19", "comic_besoboy_20", "comic_besoboy_21",
                           "comic_besoboy_22"],
        previous_comics : ["comic_monk_vs_besoboy"],
        next_comics     : ["comic_besoboy_volume_4"],
        release_at      : {year: 2015, month: 7, day: 30},
        show            : true
    },
    comic_monk_volume_3                                                     : {
        name            : "Инок том 3: Зверь во мне часть 1",
        number          : "3",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/monk/monk-volume-3-beast-in-me-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        contained_comics: ["comic_monk_18", "comic_monk_19", "comic_monk_20", "comic_monk_21"],
        previous_comics : ["comic_monk_vs_besoboy"],
        next_comics     : ["comic_monk_volume_4"],
        release_at      : {year: 2015, month: 7, day: 30},
        show            : true
    },
    comic_red_fury_volume_3                                                 : {
        name            : "Красная Фурия том 3: Тёмное наследие часть 1",
        number          : "3",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-volume-3-dark-legacy-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_16", "comic_red_fury_16_1", "comic_red_fury_17", "comic_red_fury_18",
                           "comic_red_fury_19"],
        previous_comics : ["comic_red_fury_volume_2"],
        next_comics     : ["comic_red_fury_volume_4"],
        release_at      : {year: 2015, month: 7, day: 30},
        show            : true
    },
    comic_besoboy_35                                                        : {
        name            : "Бесобой #35 Стая, часть 2",
        number          : "35",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-35-flock-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_6"],
        previous_comics : ["comic_besoboy_34"],
        next_comics     : ["comic_besoboy_36"],
        release_at      : {year: 2015, month: 7, day: 31},
        show            : false
    },
    comic_major_grom_35                                                     : {
        name            : "Майор Гром #35 Голоса, часть 2",
        number          : "35",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-35-voices-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_anna_rud", positions: ["artist"]},
                           {author_id: "author_kirill_perepelitsyn", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_6"],
        previous_comics : ["comic_major_grom_34"],
        next_comics     : ["comic_major_grom_36"],
        release_at      : {year: 2015, month: 8, day: 5},
        show            : false
    },
    comic_monk_35                                                           : {
        name            : "Инок #35 Сердце монстра, часть 1",
        number          : "35",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-35-heart-of-monster-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_6"],
        previous_comics : ["comic_monk_34"],
        next_comics     : ["comic_monk_36"],
        release_at      : {year: 2015, month: 8, day: 10},
        show            : false
    },
    comic_red_fury_35                                                       : {
        name            : "Красная Фурия #35 Башня ворона, часть 1",
        number          : "35",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-35-raven-tower-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_6"],
        previous_comics : ["comic_red_fury_34"],
        next_comics     : ["comic_red_fury_36"],
        release_at      : {year: 2015, month: 8, day: 14},
        show            : false
    },
    comic_exlibrium_11                                                      : {
        name            : "Экслибриум #11 Благими намерениями, часть 1",
        number          : "11",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-11-good-intentions-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_3"],
        previous_comics : ["comic_exlibrium_10"],
        next_comics     : ["comic_exlibrium_12"],
        release_at      : {year: 2015, month: 8, day: 20},
        show            : false
    },
    comic_meteora_11                                                        : {
        name            : "Метеора #11 Блокада, часть 5",
        number          : "11",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-11-blockade-part-5.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_2"],
        previous_comics : ["comic_meteora_10"],
        next_comics     : ["comic_meteora_12"],
        release_at      : {year: 2015, month: 8, day: 25},
        show            : false
    },
    comic_red_fury_volume_4                                                 : {
        name            : "Красная Фурия том 4: Тёмное наследие часть 2",
        number          : "4",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-volume-4-dark-legacy-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_20", "comic_red_fury_21", "comic_red_fury_22", "comic_red_fury_23",
                           "comic_red_fury_24"],
        previous_comics : ["comic_red_fury_volume_3"],
        next_comics     : ["comic_red_fury_volume_5"],
        release_at      : {year: 2015, month: 7, day: 30},
        show            : true
    },
    comic_besoboy_36                                                        : {
        name            : "Бесобой #36 Стая, часть 3",
        number          : "36",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-36-flock-part-3.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_6"],
        previous_comics : ["comic_besoboy_35"],
        next_comics     : ["comic_besoboy_37"],
        release_at      : {year: 2015, month: 8, day: 31},
        show            : false
    },
    comic_monk_volume_4                                                     : {
        name            : "Инок том 4: Зверь во мне часть 2",
        number          : "4",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/monk/monk-volume-4-beast-in-me-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        contained_comics: ["comic_monk_22", "comic_monk_23", "comic_monk_24", "comic_monk_25", "comic_monk_26"],
        previous_comics : ["comic_monk_volume_3"],
        next_comics     : ["comic_monk_volume_5"],
        release_at      : {year: 2015, month: 9, day: 1},
        show            : true
    },
    comic_major_grom_36                                                     : {
        name            : "Майор Гром #36 Голоса, часть 3",
        number          : "36",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-36-voices-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_anna_rud", positions: ["artist"]},
                           {author_id: "author_kirill_perepelitsyn", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_6"],
        previous_comics : ["comic_major_grom_35"],
        next_comics     : ["comic_major_grom_37"],
        release_at      : {year: 2015, month: 9, day: 4},
        show            : false
    },
    comic_monk_36                                                           : {
        name            : "Инок #36 Сердце монстра, часть 2",
        number          : "36",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-36-heart-of-monster-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_6"],
        previous_comics : ["comic_monk_35"],
        next_comics     : ["comic_monk_37"],
        release_at      : {year: 2015, month: 9, day: 9},
        show            : false
    },
    comic_red_fury_36                                                       : {
        name            : "Красная Фурия #36 Башня ворона, часть 2",
        number          : "36",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-36-raven-tower-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_6"],
        previous_comics : ["comic_red_fury_35"],
        next_comics     : ["comic_red_fury_37"],
        release_at      : {year: 2015, month: 9, day: 14},
        show            : false
    },
    comic_exlibrium_12                                                      : {
        name            : "Экслибриум #12 Благими намерениями, часть 2",
        number          : "12",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-12-good-intentions-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_3"],
        previous_comics : ["comic_exlibrium_11"],
        next_comics     : ["comic_exlibrium_13"],
        release_at      : {year: 2015, month: 9, day: 18},
        show            : false
    },
    comic_meteora_12                                                        : {
        name            : "Метеора #12 Блокада, часть 6",
        number          : "12",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-12-blockade-part-6.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_2"],
        previous_comics : ["comic_meteora_11"],
        next_comics     : ["comic_meteora_13"],
        release_at      : {year: 2015, month: 9, day: 25},
        show            : false
    },
    comic_besoboy_37                                                        : {
        name            : "Бесобой #37 Стая, часть 4",
        number          : "37",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-37-flock-part-4.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_6"],
        previous_comics : ["comic_besoboy_36"],
        next_comics     : ["comic_time_of_raven_prologue"],
        release_at      : {year: 2015, month: 9, day: 28},
        show            : false
    },
    comic_major_grom_37                                                     : {
        name            : "Майор Гром #37 Голоса, часть 4",
        number          : "37",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-37-voices-part-4.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_anna_rud", positions: ["artist"]},
                           {author_id: "author_kirill_perepelitsyn", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_6"],
        previous_comics : ["comic_major_grom_36"],
        next_comics     : ["comic_time_of_raven_1", "comic_major_grom_38"],
        release_at      : {year: 2015, month: 10, day: 1},
        show            : false
    },
    comic_ziggy_space_hamster_1                                             : {
        name            : "Зигги: космический хомяк №1. Планета Фастфуд",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/ziggy_space_hamster/ziggy-space-hamster-1-planet-fast-food.jpg`,
            aspect_ratio: 1050 / 1600
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist", "screenwriter"]}],
        including_comics: ["comic_ziggy_space_hamster"],
        next_comics     : ["comic_ziggy_space_hamster_2"],
        release_at      : {year: 2015, month: 10, day: 1},
        show            : false
    },
    comic_besoboy_volume_4                                                  : {
        name            : "Бесобой том 4: Балор",
        number          : "4",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-volume-4-balor.jpg`, aspect_ratio: 1004 / 1535},
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_23", "comic_besoboy_24", "comic_besoboy_25", "comic_besoboy_26",
                           "comic_besoboy_27"],
        previous_comics : ["comic_besoboy_volume_3"],
        next_comics     : ["comic_besoboy_volume_5"],
        release_at      : {year: 2015, month: 10, day: 1},
        show            : true
    },
    comic_major_grom_volume_4                                               : {
        name            : "Майор Гром. Том 4: Как в сказке",
        number          : "4",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-volume-4-like-in-fairy-tale.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_anna_arhipova", "character_viktor_isaev", "character_dmitrii_dubin",
                           "character_olga_isaeva", "character_fyodor_prokopenko", "character_uliya_pchyolkina",
                           "character_igor_grom", "character_printsessy"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_yulia_zhuravleva", positions: ["artist"]},
                           {author_id: "author_anastasia_glazunova", positions: ["colorist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_ekaterina_menabde", positions: ["artist"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]},
                           {author_id: "author_tatiana_yakubets", positions: ["colorist"]}],
        contained_comics: ["comic_major_grom_19", "comic_major_grom_20", "comic_major_grom_21", "comic_major_grom_22",
                           "comic_major_grom_23", "comic_major_grom_24"],
        previous_comics : ["comic_major_grom_volume_3"],
        next_comics     : ["comic_major_grom_volume_5"],
        release_at      : {year: 2015, month: 10, day: 1},
        show            : true
    },
    comic_exlibrium_volume_1                                                : {
        name            : "Экслибриум том 1: ...И дверь откроется",
        number          : "1",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-volume-1-and-door-will-open.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_1", "comic_exlibrium_2", "comic_exlibrium_3", "comic_exlibrium_4",
                           "comic_exlibrium_5"],
        next_comics     : ["comic_exlibrium_volume_2"],
        release_at      : {year: 2015, month: 10, day: 1},
        show            : true
    },
    comic_meteora_volume_1                                                  : {
        name            : "Метеора том 1: Самая опасная вещь в космосе",
        number          : "1",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-volume-1-most-dangerous-thing-in-space.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_1", "comic_meteora_2", "comic_meteora_3", "comic_meteora_4",
                           "comic_meteora_5", "comic_meteora_6"],
        next_comics     : ["comic_meteora_volume_2"],
        release_at      : {year: 2015, month: 10, day: 1},
        show            : true
    },
    comic_time_of_raven_backstory_electronic                                : {
        ...comic_time_of_raven_backstory,
        including_comics: ["comic_time_of_raven_backstory_printed"],
        next_comics     : ["comic_time_of_raven_prologue"],
        show            : false
    },
    comic_time_of_raven_backstory_printed                                   : {
        ...comic_time_of_raven_backstory,
        contained_comics: ["comic_time_of_raven_backstory_electronic"],
        next_comics     : ["comic_time_of_raven"],
        show            : true
    },
    comic_time_of_raven_prologue                                            : {
        name            : "Время Ворона: Пролог",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/time_of_raven/time-of-raven-prologue.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_crossovers", "range_time_of_raven"],
        characters      : ["character_avgust_van_der_holt", "character_dzhessi_rodrigez", "character_magistr",
                           "character_myordok_makalister", "character_svartzhel"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]}],
        including_comics: ["comic_time_of_raven"],
        previous_comics : ["comic_besoboy_37", "comic_time_of_raven_backstory_electronic"],
        next_comics     : ["comic_time_of_raven_1", "comic_besoboy_38"],
        release_at      : {year: 2015, month: 10, day: 1},
        show            : false
    },
    comic_monk_37                                                           : {
        name            : "Инок #37 Сердце монстра, часть 3",
        number          : "37",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-37-heart-of-monster-part-3.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_6"],
        previous_comics : ["comic_monk_36"],
        next_comics     : ["comic_monk_38"],
        release_at      : {year: 2015, month: 10, day: 9},
        show            : false
    },
    comic_red_fury_37                                                       : {
        name            : "Красная Фурия #37 Апгрейд",
        number          : "37",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/red_fury/red-fury-37-upgrade.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_6"],
        previous_comics : ["comic_red_fury_36"],
        next_comics     : ["comic_time_of_raven_1", "comic_major_grom_38"],
        release_at      : {year: 2015, month: 10, day: 14},
        show            : false
    },
    comic_exlibrium_13                                                      : {
        name            : "Экслибриум #13 Благими намерениями, часть 3",
        number          : "13",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-13-good-intentions-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_3"],
        previous_comics : ["comic_exlibrium_12"],
        next_comics     : ["comic_exlibrium_14"],
        release_at      : {year: 2015, month: 10, day: 19},
        show            : false
    },
    comic_meteora_13                                                        : {
        name            : "Метеора #13 Свинцовые небеса",
        number          : "13",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-13-leaden-skies.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_3"],
        previous_comics : ["comic_meteora_12"],
        next_comics     : ["comic_meteora_14"],
        release_at      : {year: 2015, month: 10, day: 26},
        show            : false
    },
    comic_time_of_raven_1                                                   : {
        name            : "Время Ворона #1",
        number          : "1",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/time_of_raven/time-of-raven-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_crossovers", "range_time_of_raven"],
        characters      : ["character_kuth", "character_magistr", "character_chumnoi_doktor", "character_igor_grom"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_maria_zalogina", positions: ["colorist"]}],
        including_comics: ["comic_time_of_raven"],
        previous_comics : ["comic_major_grom_37", "comic_time_of_raven_prologue", "comic_red_fury_37"],
        next_comics     : ["comic_major_grom_38", "comic_monk_38", "comic_red_fury_38", "comic_time_of_raven_2"],
        release_at      : {year: 2015, month: 10, day: 28},
        show            : false
    },
    comic_besoboy_38                                                        : {
        name            : "Бесобой #38 Хищные сны, часть 1",
        number          : "38",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-38-predatory-dreams-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_7"],
        previous_comics : ["comic_time_of_raven_prologue"],
        next_comics     : ["comic_besoboy_39"],
        release_at      : {year: 2015, month: 11, day: 2},
        show            : false
    },
    comic_major_grom_38                                                     : {
        name            : "Майор Гром #38 Одержимость",
        number          : "38",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/major_grom/major-grom-38-obsession.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]},
                           {author_id: "author_nina_vakueva", positions: ["artist"]}],
        including_comics: ["comic_major_grom_and_red_fury_volume_7"],
        previous_comics : ["comic_major_grom_37", "comic_red_fury_37", "comic_time_of_raven_1"],
        next_comics     : ["comic_red_fury_38", "comic_time_of_raven_2"],
        release_at      : {year: 2015, month: 11, day: 5},
        show            : false
    },
    comic_monk_38                                                           : {
        name            : "Инок #38 Сердце монстра, часть 4",
        number          : "38",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-38-heart-of-monster-part-4.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_6"],
        previous_comics : ["comic_monk_37", "comic_time_of_raven_1"],
        next_comics     : ["comic_time_of_raven_2", "comic_monk_39"],
        release_at      : {year: 2015, month: 11, day: 9},
        show            : false
    },
    comic_red_fury_38                                                       : {
        name            : "Красная Фурия #38 Прозрение",
        number          : "38",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/red_fury/red-fury-38-epiphany.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_red_fury"],
        characters      : ["character_artur_haksli", "character_gamma", "character_delta", "character_dzhoshua_donato",
                           "character_lotta_lemke", "character_nika_chaikina"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_anna_rud", positions: ["artist"]},
                           {author_id: "author_kirill_perepelitsyn", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_and_red_fury_volume_7"],
        previous_comics : ["comic_time_of_raven_1", "comic_major_grom_38"],
        next_comics     : ["comic_time_of_raven_2", "comic_major_grom_39"],
        release_at      : {year: 2015, month: 11, day: 16},
        show            : false
    },
    comic_exlibrium_14                                                      : {
        name            : "Экслибриум #14 Благими намерениями, часть 4",
        number          : "14",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-14-good-intentions-part-4.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_3"],
        previous_comics : ["comic_exlibrium_13"],
        next_comics     : ["comic_exlibrium_15"],
        release_at      : {year: 2015, month: 11, day: 20},
        show            : false
    },
    comic_meteora_14                                                        : {
        name            : "Метеора #14 Окончательное решение, часть 1",
        number          : "14",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-14-final-solution-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_3"],
        previous_comics : ["comic_meteora_13"],
        next_comics     : ["comic_meteora_15"],
        release_at      : {year: 2015, month: 11, day: 24},
        show            : false
    },
    comic_time_of_raven_2                                                   : {
        name            : "Время Ворона #2",
        number          : "2",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/time_of_raven/time-of-raven-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_crossovers", "range_time_of_raven"],
        characters      : ["character_avgust_van_der_holt", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhoshua_donato", "character_dimitrios", "character_kuth",
                           "character_lotta_lemke", "character_magistr", "character_myordok_makalister",
                           "character_svartzhel", "character_chyornyi_pyos", "character_shmyg",
                           "character_nika_chaikina", "character_igor_grom", "character_besoboi",
                           "character_andrei_radov"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_artyom_bizyaev", positions: ["artist"]},
                           {author_id: "author_maria_zalogina", positions: ["colorist"]}],
        including_comics: ["comic_time_of_raven"],
        previous_comics : ["comic_time_of_raven_1", "comic_major_grom_38", "comic_monk_38", "comic_red_fury_38"],
        next_comics     : ["comic_major_grom_39", "comic_red_fury_39", "comic_time_of_raven_3"],
        release_at      : {year: 2015, month: 11, day: 27},
        show            : false
    },
    comic_besoboy_39                                                        : {
        name            : "Бесобой #39 Хищные сны, часть 2",
        number          : "39",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-39-predatory-dreams-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_7"],
        previous_comics : ["comic_besoboy_38"],
        next_comics     : ["comic_time_of_raven_3", "comic_besoboy_40"],
        release_at      : {year: 2015, month: 12, day: 2},
        show            : false
    },
    comic_ziggy_space_hamster_2                                             : {
        name            : "Зигги: космический хомяк №2. Новогоднее чудо",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/ziggy_space_hamster/ziggy-space-hamster-2-new-years-miracle.jpg`,
            aspect_ratio: 1050 / 1600
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist", "screenwriter"]}],
        including_comics: ["comic_ziggy_space_hamster"],
        previous_comics : ["comic_ziggy_space_hamster_1"],
        next_comics     : ["comic_ziggy_space_hamster_3"],
        release_at      : {year: 2015, month: 12, day: 5},
        show            : false
    },
    comic_major_grom_39                                                     : {
        name            : "Майор Гром #39 Чувство Долга",
        number          : "39",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-39-sense-of-duty.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_avgust_van_der_holt", "character_dmitrii_dubin", "character_kirk_oraili",
                           "character_myordok_makalister", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]},
                           {author_id: "author_nina_vakueva", positions: ["artist"]}],
        including_comics: ["comic_major_grom_and_red_fury_volume_7"],
        previous_comics : ["comic_red_fury_38", "comic_time_of_raven_2"],
        next_comics     : ["comic_red_fury_39", "comic_time_of_raven_3"],
        release_at      : {year: 2015, month: 12, day: 5},
        show            : false
    },
    comic_cat_and_mouse_volume_1                                            : {
        name       : "Кошки-мышки том 1: Старый новый друг",
        number     : "1",
        type       : "single",
        cover_file : {
            url         : `${comicImagePath}/authors_comics/cat_and_mouse/cat-and-mouse-volume-1-old-new-friend.png`,
            aspect_ratio: 622 / 467
        },
        ranges     : ["range_authors_comics"],
        authors    : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]}],
        next_comics: ["comic_cat_and_mouse_volume_2"],
        release_at : {year: 2015, month: 12, day: 7},
        show       : true
    },
    comic_monk_39                                                           : {
        name            : "Инок #39 Мёртвая хватка, часть 1",
        number          : "39",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-39-death-grip-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_7"],
        previous_comics : ["comic_monk_38"],
        next_comics     : ["comic_monk_40"],
        release_at      : {year: 2015, month: 12, day: 10},
        show            : false
    },
    comic_red_fury_39                                                       : {
        name            : "Красная Фурия #39 Отражение",
        number          : "39",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/red_fury/red-fury-39-reflection.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_red_fury"],
        characters      : ["character_artur_haksli", "character_dzhina_stivens", "character_dzhoshua_donato",
                           "character_lotta_lemke", "character_rihard_rippe", "character_helga_lemke",
                           "character_nika_chaikina"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_anna_rud", positions: ["artist"]},
                           {author_id: "author_kirill_perepelitsyn", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_and_red_fury_volume_7"],
        previous_comics : ["comic_time_of_raven_2", "comic_major_grom_39"],
        next_comics     : ["comic_time_of_raven_3", "comic_major_grom_40"],
        release_at      : {year: 2015, month: 12, day: 14},
        show            : false
    },
    comic_exlibrium_15                                                      : {
        name            : "Экслибриум #15 Меж трех огней, часть 1",
        number          : "15",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-15-between-three-fires-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_3"],
        previous_comics : ["comic_exlibrium_14"],
        next_comics     : ["comic_exlibrium_16"],
        release_at      : {year: 2015, month: 12, day: 21},
        show            : false
    },
    comic_meteora_15                                                        : {
        name            : "Метеора #15 Окончательное решение, часть 2",
        number          : "15",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-15-final-solution-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_3"],
        previous_comics : ["comic_meteora_14"],
        next_comics     : ["comic_meteora_16"],
        release_at      : {year: 2015, month: 12, day: 25},
        show            : false
    },
    comic_time_of_raven_3                                                   : {
        name            : "Время Ворона #3",
        number          : "3",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/time_of_raven/time-of-raven-3.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_crossovers", "range_time_of_raven"],
        characters      : ["character_avgust_van_der_holt", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhoshua_donato", "character_kuth", "character_lotta_lemke", "character_magistr",
                           "character_myordok_makalister", "character_svartzhel", "character_chyornyi_pyos",
                           "character_shmyg", "character_nika_chaikina", "character_igor_grom", "character_besoboi",
                           "character_andrei_radov"],
        authors         : [{author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_artyom_bizyaev", positions: ["artist"]}],
        including_comics: ["comic_time_of_raven"],
        previous_comics : ["comic_time_of_raven_2", "comic_besoboy_39", "comic_major_grom_39", "comic_red_fury_39"],
        next_comics     : ["comic_besoboy_40", "comic_major_grom_40", "comic_time_of_raven_4"],
        release_at      : {year: 2015, month: 12, day: 28},
        show            : false
    },
    comic_caesar_magnificent_1                                              : {
        name            : "Цезарь Великолепный #1 Когда земля ближе облака",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/authors_comics/caesar_magnificent/caesar-magnificent-1-when-earth-is-closer-to-clouds.jpeg`,
            aspect_ratio: 696 / 1024
        },
        ranges          : ["range_authors_comics"],
        authors         : [{author_id: "author_alena_spiridonova", positions: ["screenwriter"]}],
        including_comics: ["comic_caesar_magnificent"],
        next_comics     : ["comic_caesar_magnificent_2"],
        release_at      : {year: 2016},
        show            : false
    },
    comic_caesar_magnificent_2                                              : {
        name            : "Цезарь Великолепный #2 Связь",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/authors_comics/caesar_magnificent/caesar-magnificent-2-communication.jpeg`,
            aspect_ratio: 1004 / 1477
        },
        ranges          : ["range_authors_comics"],
        authors         : [{author_id: "author_alena_spiridonova", positions: ["screenwriter"]}],
        including_comics: ["comic_caesar_magnificent"],
        previous_comics : ["comic_caesar_magnificent_1"],
        next_comics     : ["comic_caesar_magnificent_3"],
        release_at      : {year: 2016},
        show            : false
    },
    comic_caesar_magnificent_3                                              : {
        name            : "Цезарь Великолепный #3 Ставрополь, прощай",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/authors_comics/caesar_magnificent/caesar-magnificent-3-stavropol-goodbye.jpg`,
            aspect_ratio: 1004 / 1477
        },
        ranges          : ["range_authors_comics"],
        authors         : [{author_id: "author_alena_spiridonova", positions: ["screenwriter"]}],
        including_comics: ["comic_caesar_magnificent"],
        previous_comics : ["comic_caesar_magnificent_2"],
        next_comics     : ["comic_caesar_magnificent_4"],
        release_at      : {year: 2016},
        show            : false
    },
    comic_caesar_magnificent_4                                              : {
        name            : "Цезарь Великолепный #4 Там, где живет легенда",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/authors_comics/caesar_magnificent/caesar-magnificent-4-where-legend-lives.jpg`,
            aspect_ratio: 1004 / 1477
        },
        ranges          : ["range_authors_comics"],
        authors         : [{author_id: "author_alena_spiridonova", positions: ["screenwriter"]}],
        including_comics: ["comic_caesar_magnificent"],
        previous_comics : ["comic_caesar_magnificent_3"],
        next_comics     : ["comic_caesar_magnificent_5"],
        release_at      : {year: 2016},
        show            : false
    },
    comic_caesar_magnificent_5                                              : {
        name            : "Цезарь Великолепный #5 В капкане",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/authors_comics/caesar_magnificent/caesar-magnificent-5-in-trap.jpg`,
            aspect_ratio: 1004 / 1477
        },
        ranges          : ["range_authors_comics"],
        authors         : [{author_id: "author_alena_spiridonova", positions: ["screenwriter"]}],
        including_comics: ["comic_caesar_magnificent"],
        previous_comics : ["comic_caesar_magnificent_4"],
        release_at      : {year: 2016},
        show            : false
    },
    comic_besoboy_40                                                        : {
        name            : "Бесобой #40 Дьявол в деталях, часть 1",
        number          : "40",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-40-devil-is-in-details-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_7"],
        previous_comics : ["comic_besoboy_39", "comic_time_of_raven_3"],
        next_comics     : ["comic_besoboy_41"],
        release_at      : {year: 2016, month: 1, day: 11},
        show            : false
    },
    comic_monk_40                                                           : {
        name            : "Инок #40 Мёртвая хватка, часть 2",
        number          : "40",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-40-death-grip-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_7"],
        previous_comics : ["comic_monk_39"],
        next_comics     : ["comic_monk_41"],
        release_at      : {year: 2016, month: 1, day: 11},
        show            : false
    },
    comic_major_grom_40                                                     : {
        name            : "Майор Гром #40 В сердце тьмы, часть 1",
        number          : "40",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-40-in-heart-of-darkness-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom", "range_crossovers"],
        characters      : ["character_artur_haksli", "character_dzhoshua_donato", "character_dmitrii_dubin",
                           "character_lotta_lemke", "character_fyodor_prokopenko", "character_nika_chaikina",
                           "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]},
                           {author_id: "author_nina_vakueva", positions: ["artist"]}],
        including_comics: ["comic_major_grom_and_red_fury_volume_7"],
        previous_comics : ["comic_red_fury_39", "comic_time_of_raven_3"],
        next_comics     : ["comic_red_fury_40"],
        release_at      : {year: 2016, month: 1, day: 18},
        show            : false
    },
    comic_red_fury_40                                                       : {
        name            : "Красная Фурия #40 В сердце тьмы, часть 2",
        number          : "40",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-40-in-heart-of-darkness-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury", "range_crossovers"],
        characters      : ["character_dzhoshua_donato", "character_lotta_lemke", "character_myordok_makalister",
                           "character_nika_chaikina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]},
                           {author_id: "author_nina_vakueva", positions: ["artist"]}],
        including_comics: ["comic_major_grom_and_red_fury_volume_7"],
        previous_comics : ["comic_major_grom_40"],
        next_comics     : ["comic_time_of_raven_4", "comic_red_fury_41"],
        release_at      : {year: 2016, month: 1, day: 18},
        show            : false
    },
    comic_exlibrium_16                                                      : {
        name            : "Экслибриум #16 Меж трех огней, часть 2",
        number          : "16",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-16-between-three-fires-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_3"],
        previous_comics : ["comic_exlibrium_15"],
        next_comics     : ["comic_exlibrium_17"],
        release_at      : {year: 2016, month: 1, day: 20},
        show            : false
    },
    comic_meteora_16                                                        : {
        name            : "Метеора #16 Окончательное решение, часть 3",
        number          : "16",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-16-final-solution-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_3"],
        previous_comics : ["comic_meteora_15"],
        next_comics     : ["comic_meteora_17"],
        release_at      : {year: 2016, month: 1, day: 25},
        show            : false
    },
    comic_time_of_raven_4                                                   : {
        name            : "Время Ворона #4",
        number          : "4",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/time_of_raven/time-of-raven-4.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_crossovers", "range_time_of_raven"],
        characters      : ["character_avgust_van_der_holt", "character_artur_haksli", "character_delta",
                           "character_dzhessi_rodrigez", "character_dzhoshua_donato", "character_kuth",
                           "character_lotta_lemke", "character_magistr", "character_svartzhel",
                           "character_nika_chaikina", "character_igor_grom", "character_besoboi",
                           "character_andrei_radov"],
        authors         : [{author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]}],
        including_comics: ["comic_time_of_raven"],
        previous_comics : ["comic_time_of_raven_3", "comic_red_fury_40", "comic_besoboy_41"],
        next_comics     : ["comic_red_fury_41", "comic_major_grom_41", "comic_time_of_raven_5"],
        release_at      : {year: 2016, month: 1, day: 30},
        show            : false
    },
    comic_besoboy_41                                                        : {
        name            : "Бесобой #41 Дьявол в деталях, часть 2",
        number          : "41",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-41-devil-is-in-details-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_7"],
        previous_comics : ["comic_besoboy_40"],
        next_comics     : ["comic_time_of_raven_4", "comic_besoboy_42"],
        release_at      : {year: 2016, month: 2, day: 1},
        show            : false
    },
    comic_red_fury_41                                                       : {
        name            : "Красная Фурия #41 Крах",
        number          : "41",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/red_fury/red-fury-41-collapse.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_red_fury"],
        characters      : ["character_artur_haksli", "character_gamma", "character_delta", "character_dzhessi_rodrigez",
                           "character_rihard_rippe", "character_helga_lemke"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_anna_rud", positions: ["artist"]},
                           {author_id: "author_kirill_perepelitsyn", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_and_red_fury_volume_7"],
        previous_comics : ["comic_red_fury_40", "comic_time_of_raven_4"],
        next_comics     : ["comic_major_grom_41", "comic_time_of_raven_5"],
        release_at      : {year: 2016, month: 2, day: 5},
        show            : false
    },
    comic_monk_41                                                           : {
        name            : "Инок #41 Мёртвая хватка, часть 3",
        number          : "41",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-41-death-grip-part-3.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_7"],
        previous_comics : ["comic_monk_40"],
        next_comics     : ["comic_monk_42"],
        release_at      : {year: 2016, month: 2, day: 10},
        show            : false
    },
    comic_major_grom_41                                                     : {
        name            : "Майор Гром #41 Идеальный день",
        number          : "41",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/major_grom/major-grom-41-perfect-day.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_uliya_pchyolkina",
                           "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]},
                           {author_id: "author_nina_vakueva", positions: ["artist"]}],
        including_comics: ["comic_major_grom_and_red_fury_volume_7"],
        previous_comics : ["comic_time_of_raven_4", "comic_red_fury_41"],
        next_comics     : ["comic_time_of_raven_5", "comic_red_fury_42", "comic_major_grom_42"],
        release_at      : {year: 2016, month: 2, day: 15},
        show            : false
    },
    comic_exlibrium_17                                                      : {
        name            : "Экслибриум #17 Меж трех огней, часть 3",
        number          : "17",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-17-between-three-fires-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_3"],
        previous_comics : ["comic_exlibrium_16"],
        next_comics     : ["comic_time_of_raven_epilogue_electronic", "comic_exlibrium_18"],
        release_at      : {year: 2016, month: 2, day: 19},
        show            : false
    },
    comic_meteora_17                                                        : {
        name            : "Метеора #17 Лицо человека",
        number          : "17",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-17-human-face.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_3"],
        previous_comics : ["comic_meteora_16"],
        next_comics     : ["comic_meteora_18"],
        release_at      : {year: 2016, month: 2, day: 25},
        show            : false
    },
    comic_time_of_raven_5                                                   : {
        name            : "Время Ворона #5",
        number          : "5",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/time_of_raven/time-of-raven-5.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_crossovers", "range_time_of_raven"],
        characters      : ["character_avaddon_bezzhalostnyi", "character_avgust_van_der_holt",
                           "character_dzhoshua_donato", "character_kuth", "character_lotta_lemke", "character_magistr",
                           "character_myordok_makalister", "character_satana", "character_svartzhel", "character_shmyg",
                           "character_yarh_smertonosnyi", "character_nika_chaikina", "character_igor_grom",
                           "character_besoboi", "character_andrei_radov"],
        authors         : [{author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_time_of_raven"],
        previous_comics : ["comic_time_of_raven_4", "comic_red_fury_41", "comic_major_grom_41"],
        next_comics     : ["comic_time_of_raven_epilogue_electronic", "comic_besoboy_42"],
        release_at      : {year: 2016, month: 3, day: 13},
        show            : false
    },
    comic_ziggy_space_hamster_3                                             : {
        name            : "Зигги: космический хомяк №3. Гонки на Планете Вулканов",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/ziggy_space_hamster/ziggy-space-hamster-3-racing-on-planet-of-volcanoes.jpg`,
            aspect_ratio: 1050 / 1600
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist", "screenwriter"]}],
        including_comics: ["comic_ziggy_space_hamster"],
        previous_comics : ["comic_ziggy_space_hamster_2"],
        next_comics     : ["comic_ziggy_space_hamster_4"],
        release_at      : {year: 2016, month: 3, day: 13},
        show            : false
    },
    comic_besoboy_volume_5                                                  : {
        name            : "Бесобой том 5: Метро",
        number          : "5",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-volume-5-metro.jpg`, aspect_ratio: 1004 / 1535},
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_28", "comic_besoboy_29", "comic_besoboy_30", "comic_besoboy_31",
                           "comic_besoboy_32", "comic_besoboy_33"],
        previous_comics : ["comic_besoboy_volume_4"],
        next_comics     : ["comic_besoboy_volume_6"],
        release_at      : {year: 2016, month: 3, day: 13},
        show            : true
    },
    comic_major_grom_volume_5                                               : {
        name            : "Майор Гром. Том 5: Игра",
        number          : "5",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/major_grom/major-grom-volume-5-game.jpg`, aspect_ratio: 1004 / 1535},
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_oleg_volkov", "character_fyodor_prokopenko",
                           "character_chumnoi_doktor", "character_uliya_pchyolkina", "character_igor_grom"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]},
                           {author_id: "author_nina_vakueva", positions: ["artist"]},
                           {author_id: "author_tatiana_yakubets", positions: ["colorist"]}],
        contained_comics: ["comic_major_grom_25", "comic_major_grom_26", "comic_major_grom_27", "comic_major_grom_28",
                           "comic_major_grom_29", "comic_major_grom_30", "comic_major_grom_31", "comic_major_grom_32",
                           "comic_major_grom_33"],
        previous_comics : ["comic_major_grom_volume_4"],
        next_comics     : ["comic_major_grom_volume_6"],
        release_at      : {year: 2016, month: 3, day: 13},
        show            : true
    },
    comic_exlibrium_volume_2                                                : {
        name            : "Экслибриум том 2: Костяной дом",
        number          : "2",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-volume-2-house-of-bone.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_6", "comic_exlibrium_7", "comic_exlibrium_8", "comic_exlibrium_9",
                           "comic_exlibrium_10"],
        previous_comics : ["comic_exlibrium_volume_1"],
        next_comics     : ["comic_exlibrium_volume_3"],
        release_at      : {year: 2016, month: 3, day: 13},
        show            : true
    },
    comic_time_of_raven_epilogue_electronic                                 : {
        ...comic_time_of_raven_epilogue,
        including_comics: ["comic_time_of_raven_epilogue_printed"],
        previous_comics : ["comic_exlibrium_17", "comic_time_of_raven_5"],
        next_comics     : ["comic_red_fury_42", "comic_major_grom_42", "comic_exlibrium_18", "comic_monk_43"],
        show            : false
    },
    comic_time_of_raven_epilogue_printed                                    : {
        ...comic_time_of_raven_epilogue,
        contained_comics: ["comic_time_of_raven_epilogue_electronic"],
        previous_comics : ["comic_exlibrium_volume_3"],
        next_comics     : ["comic_red_fury_volume_8", "comic_major_grom_volume_8", "comic_monk_volume_8",
                           "comic_exlibrium_volume_4"],
        show            : true
    },
    comic_red_fury_42                                                       : {
        name            : "Красная Фурия #42 Агент Симмонс, часть 1",
        number          : "42",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-42-agent-simmons-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_8"],
        previous_comics : ["comic_major_grom_41", "comic_time_of_raven_epilogue_electronic"],
        next_comics     : ["comic_red_fury_43"],
        release_at      : {year: 2016, month: 3, day: 15},
        show            : false
    },
    comic_besoboy_42                                                        : {
        name            : "Бесобой #42 Жертвы обстоятельств",
        number          : "42",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-42-victims-of-circumstances.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_7"],
        previous_comics : ["comic_besoboy_41", "comic_time_of_raven_5"],
        next_comics     : ["comic_besoboy_43"],
        release_at      : {year: 2016, month: 4, day: 1},
        show            : false
    },
    comic_monk_king_of_parties                                              : {
        name       : "Инок: Король вечеринок",
        type       : "single",
        cover_file : {url: `${comicImagePath}/monk_king_of_parties/monk-king-of-parties.png`, aspect_ratio: 559 / 794},
        ranges     : ["range_monk_king_of_parties"],
        characters : ["character_vasilisa_premudraya", "character_vladyka", "character_magistr", "character_seryi_volk",
                      "character_andrei_radov", "character_kseniya_radova"],
        authors    : [{author_id: "author_vitaly_terletsky", positions: ["artist", "screenwriter"]}],
        next_comics: ["comic_monk_king_of_parties_no_more_parties"],
        release_at : {year: 2016, month: 4, day: 1},
        show       : true
    },
    comic_major_grom_42                                                     : {
        name            : "Майор Гром #42 Загадка сфинкса, часть 1",
        number          : "42",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-42-riddle-of-sphinx-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_veniamin_rubinshtein", "character_dmitrii_dubin", "character_fyodor_prokopenko",
                           "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_eduard_petrovich", positions: ["artist"]}],
        including_comics: ["comic_major_grom_volume_8", "comic_major_grom_riddle_of_the_sphinx"],
        previous_comics : ["comic_major_grom_41", "comic_time_of_raven_epilogue_electronic"],
        next_comics     : ["comic_major_grom_43"],
        release_at      : {year: 2016, month: 4, day: 4},
        show            : false
    },
    comic_monk_42                                                           : {
        name            : "Инок #42 Мёртвая хватка, часть 4",
        number          : "42",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-42-death-grip-part-4.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_7"],
        previous_comics : ["comic_monk_41"],
        next_comics     : ["comic_monk_43"],
        release_at      : {year: 2016, month: 2, day: 10},
        show            : false
    },
    comic_exlibrium_18                                                      : {
        name            : "Экслибриум #18 Не сахар",
        number          : "18",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/exlibrium/exlibrium-18-not-sugar.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_4"],
        previous_comics : ["comic_exlibrium_17", "comic_time_of_raven_epilogue_electronic"],
        next_comics     : ["comic_exlibrium_19"],
        release_at      : {year: 2016, month: 4, day: 16},
        show            : false
    },
    comic_monk_volume_5                                                     : {
        name            : "Инок том 5: Высокое напряжение",
        number          : "5",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/monk/monk-volume-5-high-voltage.jpg`, aspect_ratio: 1004 / 1535},
        ranges          : ["range_monk"],
        contained_comics: ["comic_monk_27", "comic_monk_28", "comic_monk_29", "comic_monk_30", "comic_monk_31"],
        previous_comics : ["comic_monk_volume_4"],
        next_comics     : ["comic_monk_volume_6", "comic_time_of_raven"],
        release_at      : {year: 2016, month: 4, day: 16},
        show            : true
    },
    comic_red_fury_volume_5                                                 : {
        name            : "Красная Фурия том 5: Ничего личного, просто бизнес",
        number          : "5",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-volume-5-nothing-personal-just-business.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_25", "comic_red_fury_26", "comic_red_fury_27", "comic_red_fury_28",
                           "comic_red_fury_29", "comic_red_fury_30", "comic_red_fury_31"],
        previous_comics : ["comic_red_fury_volume_4"],
        next_comics     : ["comic_red_fury_volume_6"],
        release_at      : {year: 2016, month: 4, day: 16},
        show            : true
    },
    comic_meteora_volume_2                                                  : {
        name            : "Метеора том 2: Блокада",
        number          : "2",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-volume-2-blockade.jpg`, aspect_ratio: 1004 / 1535},
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_7", "comic_meteora_8", "comic_meteora_9", "comic_meteora_10",
                           "comic_meteora_11", "comic_meteora_12"],
        previous_comics : ["comic_meteora_volume_1"],
        next_comics     : ["comic_meteora_volume_3"],
        release_at      : {year: 2016, month: 4, day: 16},
        show            : true
    },
    comic_meteora_18                                                        : {
        name            : "Метеора #18 Там, где обитают драконы",
        number          : "18",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-18-where-dragons-are.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_4"],
        previous_comics : ["comic_meteora_17"],
        next_comics     : ["comic_meteora_19"],
        release_at      : {year: 2016, month: 4, day: 25},
        show            : false
    },
    comic_besoboy_43                                                        : {
        name            : "Бесобой #43 Рыковы",
        number          : "43",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-43-rykovs.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_8"],
        previous_comics : ["comic_besoboy_42"],
        next_comics     : ["comic_besoboy_44"],
        release_at      : {year: 2016, month: 5, day: 2},
        show            : false
    },
    comic_major_grom_43                                                     : {
        name            : "Майор Гром #43 Загадка сфинкса, часть 2",
        number          : "43",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-43-riddle-of-sphinx-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_veniamin_rubinshtein", "character_dmitrii_dubin", "character_fyodor_prokopenko",
                           "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_eduard_petrovich", positions: ["artist"]}],
        including_comics: ["comic_major_grom_volume_8", "comic_major_grom_riddle_of_the_sphinx"],
        previous_comics : ["comic_major_grom_42"],
        next_comics     : ["comic_major_grom_44"],
        release_at      : {year: 2016, month: 5, day: 6},
        show            : false
    },
    comic_monk_43                                                           : {
        name            : "Инок #43 Путь к бессмертию, часть 1",
        number          : "43",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/monk/monk-43-path-to-immortality-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_8"],
        previous_comics : ["comic_time_of_raven_epilogue_electronic", "comic_monk_42"],
        next_comics     : ["comic_monk_44"],
        release_at      : {year: 2016, month: 5, day: 10},
        show            : false
    },
    comic_red_fury_43                                                       : {
        name            : "Красная Фурия #43 Агент Симмонс, часть 2",
        number          : "43",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-43-agent-simmons-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_8"],
        previous_comics : ["comic_red_fury_42"],
        next_comics     : ["comic_red_fury_44"],
        release_at      : {year: 2016, month: 5, day: 16},
        show            : false
    },
    comic_exlibrium_19                                                      : {
        name            : "Экслибриум #19 Суд",
        number          : "19",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/exlibrium/exlibrium-19-court.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_4"],
        previous_comics : ["comic_exlibrium_18"],
        next_comics     : ["comic_exlibrium_20"],
        release_at      : {year: 2016, month: 5, day: 20},
        show            : false
    },
    comic_meteora_19                                                        : {
        name            : "Метеора #19 Охота, часть 1",
        number          : "19",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-19-hunting-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_4"],
        previous_comics : ["comic_meteora_18"],
        next_comics     : ["comic_meteora_20"],
        release_at      : {year: 2016, month: 5, day: 23},
        show            : false
    },
    comic_besoboy_44                                                        : {
        name            : "Бесобой #44 Гончие Ада, часть 1",
        number          : "44",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-44-hounds-of-hell-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_8"],
        previous_comics : ["comic_besoboy_43"],
        next_comics     : ["comic_besoboy_45"],
        release_at      : {year: 2016, month: 6, day: 1},
        show            : false
    },
    comic_major_grom_44                                                     : {
        name            : "Майор Гром #44 Загадка сфинкса, часть 3",
        number          : "44",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-44-riddle-of-sphinx-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_veniamin_rubinshtein", "character_dmitrii_dubin", "character_fyodor_prokopenko",
                           "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_eduard_petrovich", positions: ["artist"]}],
        including_comics: ["comic_major_grom_volume_8", "comic_major_grom_riddle_of_the_sphinx"],
        previous_comics : ["comic_major_grom_43"],
        next_comics     : ["comic_major_grom_45"],
        release_at      : {year: 2016, month: 6, day: 6},
        show            : false
    },
    comic_monk_44                                                           : {
        name            : "Инок #44 Путь к бессмертию, часть 2",
        number          : "44",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/monk/monk-44-path-to-immortality-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_8"],
        previous_comics : ["comic_monk_43"],
        next_comics     : ["comic_monk_45"],
        release_at      : {year: 2016, month: 6, day: 10},
        show            : false
    },
    comic_red_fury_44                                                       : {
        name            : "Красная Фурия #44 Жажда смерти",
        number          : "44",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/red_fury/red-fury-44-death-wish.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_8"],
        previous_comics : ["comic_red_fury_43"],
        next_comics     : ["comic_red_fury_45"],
        release_at      : {year: 2016, month: 6, day: 14},
        show            : false
    },
    comic_exlibrium_20                                                      : {
        name            : "Экслибриум #20 Соль на рану, часть 1",
        number          : "20",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-20-salt-in-wound-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_4"],
        previous_comics : ["comic_exlibrium_19"],
        next_comics     : ["comic_exlibrium_21"],
        release_at      : {year: 2016, month: 6, day: 18},
        show            : false
    },
    comic_meteora_20                                                        : {
        name            : "Метеора #20 Охота, часть 2",
        number          : "20",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-20-hunting-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_4"],
        previous_comics : ["comic_meteora_19"],
        next_comics     : ["comic_meteora_21"],
        release_at      : {year: 2016, month: 6, day: 24},
        show            : false
    },
    comic_besoboy_45                                                        : {
        name            : "Бесобой #45 Гончие Ада, часть 2",
        number          : "45",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-45-hounds-of-hell-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_8"],
        previous_comics : ["comic_besoboy_44"],
        next_comics     : ["comic_besoboy_46"],
        release_at      : {year: 2016, month: 7, day: 1},
        show            : false
    },
    comic_major_grom_45                                                     : {
        name            : "Майор Гром #45 Последнее дело, часть 1",
        number          : "45",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-45-last-case-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_veniamin_rubinshtein", "character_dmitrii_dubin", "character_fyodor_prokopenko",
                           "character_igor_grom"],
        authors         : [{author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_nina_vakueva", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_8"],
        previous_comics : ["comic_major_grom_44"],
        next_comics     : ["comic_major_grom_46"],
        release_at      : {year: 2016, month: 7, day: 4},
        show            : false
    },
    comic_besoboy_volume_6                                                  : {
        name            : "Бесобой том 6: Стая",
        number          : "6",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-volume-6-flock.jpg`, aspect_ratio: 1004 / 1535},
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_34", "comic_besoboy_35", "comic_besoboy_36", "comic_besoboy_37"],
        previous_comics : ["comic_besoboy_volume_5"],
        next_comics     : ["comic_besoboy_volume_7", "comic_time_of_raven"],
        release_at      : {year: 2016, month: 7, day: 4},
        show            : true
    },
    comic_major_grom_volume_6                                               : {
        name            : "Майор Гром. Том 6: Голоса",
        number          : "6",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-volume-6-voices.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_andrey_rodin", positions: ["artist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]},
                           {author_id: "author_kirill_perepelitsyn", positions: ["colorist"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]}],
        contained_comics: ["comic_major_grom_34", "comic_major_grom_35", "comic_major_grom_36", "comic_major_grom_37"],
        previous_comics : ["comic_major_grom_volume_5"],
        next_comics     : ["comic_major_grom_and_red_fury_volume_7", "comic_time_of_raven"],
        release_at      : {year: 2016, month: 7, day: 4},
        show            : true
    },
    comic_monk_45                                                           : {
        name            : "Инок #45 Путь к бессмертию, часть 3",
        number          : "45",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/monk/monk-45-path-to-immortality-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_8"],
        previous_comics : ["comic_monk_44"],
        next_comics     : ["comic_monk_46"],
        release_at      : {year: 2016, month: 7, day: 8},
        show            : false
    },
    comic_ziggy_space_hamster_4                                             : {
        name            : "Зигги: космический хомяк №4. За гранью вселеннной",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/ziggy_space_hamster/ziggy-space-hamster-4-beyond-universe.jpg`,
            aspect_ratio: 1050 / 1600
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist", "screenwriter"]}],
        including_comics: ["comic_ziggy_space_hamster"],
        previous_comics : ["comic_ziggy_space_hamster_3"],
        next_comics     : ["comic_ziggy_space_hamster_5"],
        release_at      : {year: 2016, month: 7, day: 8},
        show            : false
    },
    comic_ziggy_space_hamster_5                                             : {
        name            : "Зигги: космический хомяк №5. Рок и звёзды",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/ziggy_space_hamster/ziggy-space-hamster-5-rock-and-stars.jpg`,
            aspect_ratio: 1050 / 1600
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist", "screenwriter"]}],
        including_comics: ["comic_ziggy_space_hamster"],
        previous_comics : ["comic_ziggy_space_hamster_4"],
        release_at      : {year: 2016, month: 7, day: 8},
        show            : false
    },
    comic_red_fury_volume_6                                                 : {
        name            : "Красная Фурия том 6: Башня ворона",
        number          : "6",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-volume-6-raven-tower.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_32", "comic_red_fury_33", "comic_red_fury_34", "comic_red_fury_35",
                           "comic_red_fury_36", "comic_red_fury_37"],
        previous_comics : ["comic_red_fury_volume_5"],
        next_comics     : ["comic_major_grom_and_red_fury_volume_7", "comic_time_of_raven"],
        release_at      : {year: 2016, month: 7, day: 8},
        show            : true
    },
    comic_red_fury_45                                                       : {
        name            : "Красная Фурия #45 Идол",
        number          : "45",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/red_fury/red-fury-45-idol.jpg`, aspect_ratio: 375 / 580},
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_8"],
        previous_comics : ["comic_red_fury_44"],
        next_comics     : ["comic_red_fury_46"],
        release_at      : {year: 2016, month: 7, day: 15},
        show            : false
    },
    comic_exlibrium_21                                                      : {
        name            : "Экслибриум #21 Соль на рану, часть 2",
        number          : "21",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-21-salt-in-wound-part-2.jpg`,
            aspect_ratio: 375 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_4"],
        previous_comics : ["comic_exlibrium_20"],
        next_comics     : ["comic_exlibrium_22"],
        release_at      : {year: 2016, month: 7, day: 20},
        show            : false
    },
    comic_meteora_21                                                        : {
        name            : "Метеора #21 Охота, часть 3",
        number          : "21",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-21-hunting-part-3.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_4"],
        previous_comics : ["comic_meteora_20"],
        next_comics     : ["comic_meteora_22"],
        release_at      : {year: 2016, month: 7, day: 25},
        show            : false
    },
    comic_besoboy_46                                                        : {
        name            : "Бесобой #46 Меч и зеркало",
        number          : "46",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-46-sword-and-mirror.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_8"],
        previous_comics : ["comic_besoboy_45"],
        next_comics     : ["comic_besoboy_47"],
        release_at      : {year: 2016, month: 8, day: 1},
        show            : false
    },
    comic_major_grom_46                                                     : {
        name            : "Майор Гром #46 Последнее дело, часть 2",
        number          : "46",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-46-last-case-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_veniamin_rubinshtein", "character_dmitrii_dubin", "character_fyodor_prokopenko",
                           "character_igor_grom"],
        authors         : [{author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_nina_vakueva", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_8"],
        previous_comics : ["comic_major_grom_45"],
        next_comics     : ["comic_major_grom_47"],
        release_at      : {year: 2016, month: 8, day: 5},
        show            : false
    },
    comic_monk_46                                                           : {
        name            : "Инок #46 Игрушечный солдат, часть 1",
        number          : "46",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-46-toy-soldier-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_8"],
        previous_comics : ["comic_monk_45"],
        next_comics     : ["comic_monk_47"],
        release_at      : {year: 2016, month: 8, day: 10},
        show            : false
    },
    comic_red_fury_46                                                       : {
        name            : "Красная Фурия #46 Сам себе враг, часть 1",
        number          : "46",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-46-your-own-enemy-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_9"],
        previous_comics : ["comic_red_fury_45"],
        next_comics     : ["comic_red_fury_47"],
        release_at      : {year: 2016, month: 8, day: 15},
        show            : false
    },
    comic_exlibrium_22                                                      : {
        name            : "Экслибриум #22 Соль на рану, часть 3",
        number          : "22",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-22-salt-in-wound-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_4"],
        previous_comics : ["comic_exlibrium_21"],
        next_comics     : ["comic_exlibrium_23"],
        release_at      : {year: 2016, month: 8, day: 19},
        show            : false
    },
    comic_meteora_22                                                        : {
        name            : "Метеора #22 Охота, часть 4",
        number          : "22",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-22-hunting-part-4.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_4"],
        previous_comics : ["comic_meteora_21"],
        next_comics     : ["comic_meteora_23"],
        release_at      : {year: 2016, month: 8, day: 25},
        show            : false
    },
    comic_caesar_magnificent                                                : {
        name            : "Цезарь великолепный",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/authors_comics/caesar_magnificent/caesar-magnificent.jpg`,
            aspect_ratio: 1421 / 2048
        },
        ranges          : ["range_authors_comics"],
        authors         : [{author_id: "author_alena_spiridonova", positions: ["screenwriter"]}],
        contained_comics: ["comic_caesar_magnificent_1", "comic_caesar_magnificent_2", "comic_caesar_magnificent_3",
                           "comic_caesar_magnificent_4", "comic_caesar_magnificent_5"],
        release_at      : {year: 2016, month: 9},
        show            : true
    },
    comic_besoboy_47                                                        : {
        name            : "Бесобой #47 Чъреба, часть 1",
        number          : "47",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-47-chreba-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_9"],
        previous_comics : ["comic_besoboy_46"],
        next_comics     : ["comic_besoboy_48"],
        release_at      : {year: 2016, month: 9, day: 1},
        show            : false
    },
    comic_major_grom_47                                                     : {
        name            : "Майор Гром #47 Последнее дело, часть 3",
        number          : "47",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-47-last-case-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_veniamin_rubinshtein", "character_dmitrii_dubin", "character_fyodor_prokopenko",
                           "character_igor_grom", "character_ilya_kosygin"],
        authors         : [{author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_nina_vakueva", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_8"],
        previous_comics : ["comic_major_grom_46"],
        next_comics     : ["comic_major_grom_48"],
        release_at      : {year: 2016, month: 9, day: 5},
        show            : false
    },
    comic_monk_volume_6                                                     : {
        name            : "Инок том 6: Сердце монстра",
        number          : "6",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/monk/monk-volume-6-heart-of-monster.jpg`, aspect_ratio: 1004 / 1535},
        ranges          : ["range_monk"],
        contained_comics: ["comic_monk_32", "comic_monk_33", "comic_monk_34", "comic_monk_35", "comic_monk_36",
                           "comic_monk_37", "comic_monk_38"],
        previous_comics : ["comic_monk_volume_5"],
        next_comics     : ["comic_monk_volume_7"],
        release_at      : {year: 2016, month: 9, day: 5},
        show            : true
    },
    comic_monk_47                                                           : {
        name            : "Инок #47 Игрушечный солдат, часть 2",
        number          : "47",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-47-toy-soldier-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_8"],
        previous_comics : ["comic_monk_46"],
        next_comics     : ["comic_monk_48"],
        release_at      : {year: 2016, month: 9, day: 9},
        show            : false
    },
    comic_red_fury_47                                                       : {
        name            : "Красная Фурия #47 Сам себе враг, часть 2",
        number          : "47",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-47-your-own-enemy-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_9"],
        previous_comics : ["comic_red_fury_46"],
        next_comics     : ["comic_red_fury_48"],
        release_at      : {year: 2016, month: 9, day: 15},
        show            : false
    },
    comic_exlibrium_23                                                      : {
        name            : "Экслибриум #23 Жить дальше",
        number          : "23",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/exlibrium/exlibrium-23-live-on.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_4"],
        previous_comics : ["comic_exlibrium_22"],
        next_comics     : ["comic_exlibrium_24"],
        release_at      : {year: 2016, month: 9, day: 19},
        show            : false
    },
    comic_besoboy_volume_7                                                  : {
        name            : "Бесобой том 7: Жертвы обстоятельств",
        number          : "7",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-volume-7-victims-of-circumstances.jpg`,
            aspect_ratio: 1339 / 2046
        },
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_38", "comic_besoboy_39", "comic_besoboy_40", "comic_besoboy_41",
                           "comic_besoboy_42"],
        previous_comics : ["comic_besoboy_volume_6"],
        next_comics     : ["comic_besoboy_volume_8"],
        release_at      : {year: 2016, month: 9, day: 19},
        show            : true
    },
    comic_major_grom_and_red_fury_volume_7                                  : {
        name            : "Майор Гром и Красная Фурия том 7: В сердце тьмы",
        number          : "7",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/major-grom-and-red-fury-volume-7-in-heart-of-darkness.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_major_grom", "range_red_fury", "range_crossovers"],
        characters      : ["character_artur_haksli", "character_gamma", "character_delta", "character_dzhoshua_donato",
                           "character_dmitrii_dubin", "character_kirk_oraili", "character_lotta_lemke",
                           "character_myordok_makalister", "character_rihard_rippe", "character_helga_lemke",
                           "character_nika_chaikina", "character_igor_grom"],
        authors         : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_anna_rud", positions: ["artist"]},
                           {author_id: "author_kirill_perepelitsyn", positions: ["colorist"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]},
                           {author_id: "author_nina_vakueva", positions: ["artist"]}],
        contained_comics: ["comic_major_grom_38", "comic_red_fury_38", "comic_major_grom_39", "comic_red_fury_39",
                           "comic_major_grom_40", "comic_red_fury_40", "comic_red_fury_41", "comic_major_grom_41"],
        previous_comics : ["comic_major_grom_volume_6", "comic_red_fury_volume_6"],
        next_comics     : ["comic_red_fury_volume_8", "comic_major_grom_volume_8"],
        release_at      : {year: 2016, month: 9, day: 19},
        show            : true
    },
    comic_monk_volume_7                                                     : {
        name            : "Инок том 7: Мёртвая хватка",
        number          : "7",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/monk/monk-volume-7-death-grip.jpg`, aspect_ratio: 1004 / 1535},
        ranges          : ["range_monk"],
        contained_comics: ["comic_monk_39", "comic_monk_40", "comic_monk_41", "comic_monk_42"],
        previous_comics : ["comic_monk_volume_6"],
        next_comics     : ["comic_monk_volume_8"],
        release_at      : {year: 2016, month: 9, day: 23},
        show            : true
    },
    comic_meteora_23                                                        : {
        name            : "Метеора #23 Откровение",
        number          : "23",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-23-revelation.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_4"],
        previous_comics : ["comic_meteora_22"],
        next_comics     : ["comic_meteora_24"],
        release_at      : {year: 2016, month: 9, day: 26},
        show            : false
    },
    comic_besoboy_48                                                        : {
        name            : "Бесобой #48 Чъреба, часть 2",
        number          : "48",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-48-chreba-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_9"],
        previous_comics : ["comic_besoboy_47"],
        next_comics     : ["comic_besoboy_49"],
        release_at      : {year: 2016, month: 9, day: 29},
        show            : false
    },
    comic_major_grom_48                                                     : {
        name            : "Майор Гром #48 Последнее дело, часть 4",
        number          : "48",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-48-last-case-part-4.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_veniamin_rubinshtein", "character_dmitrii_dubin", "character_fyodor_prokopenko",
                           "character_igor_grom", "character_ilya_kosygin"],
        authors         : [{author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_8"],
        previous_comics : ["comic_major_grom_47"],
        next_comics     : ["comic_major_grom_49"],
        release_at      : {year: 2016, month: 9, day: 29},
        show            : false
    },
    comic_exlibrium_volume_3                                                : {
        name            : "Экслибриум том 3: Меж трёх огней",
        number          : "3",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-volume-3-between-three-fires.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_11", "comic_exlibrium_12", "comic_exlibrium_13", "comic_exlibrium_14",
                           "comic_exlibrium_15", "comic_exlibrium_16", "comic_exlibrium_17"],
        previous_comics : ["comic_exlibrium_volume_2"],
        next_comics     : ["comic_time_of_raven_epilogue_printed", "comic_exlibrium_volume_4"],
        release_at      : {year: 2016, month: 9, day: 29},
        show            : true
    },
    comic_meteora_volume_3                                                  : {
        name            : "Метеора том 3: Окончательное решение",
        number          : "3",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-volume-3-final-solution.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_13", "comic_meteora_14", "comic_meteora_15", "comic_meteora_16",
                           "comic_meteora_17"],
        previous_comics : ["comic_meteora_volume_2"],
        next_comics     : ["comic_meteora_volume_4"],
        release_at      : {year: 2016, month: 9, day: 29},
        show            : true
    },
    comic_time_of_raven                                                     : {
        name            : "Время Ворона",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/time_of_raven/time-of-raven.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_crossovers", "range_time_of_raven"],
        characters      : ["character_avaddon_bezzhalostnyi", "character_avgust_van_der_holt", "character_artur_haksli",
                           "character_dzhessi_rodrigez", "character_dzhonni", "character_dzhoshua_donato",
                           "character_kuth", "character_lotta_lemke", "character_magistr",
                           "character_myordok_makalister", "character_satana", "character_svartzhel",
                           "character_semiaza", "character_chyornyi_pyos", "character_chumnoi_doktor",
                           "character_shmyg", "character_uliya_pchyolkina", "character_yarh_smertonosnyi",
                           "character_nika_chaikina", "character_igor_grom", "character_besoboi",
                           "character_andrei_radov", "character_sergei_razumovskii"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anna_mozaikina", positions: ["colorist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_artyom_bizyaev", positions: ["artist"]},
                           {author_id: "author_maria_zalogina", positions: ["colorist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        contained_comics: ["comic_time_of_raven_prologue", "comic_time_of_raven_1", "comic_time_of_raven_2",
                           "comic_time_of_raven_3", "comic_time_of_raven_4", "comic_time_of_raven_5"],
        previous_comics : ["comic_time_of_raven_backstory_printed", "comic_monk_volume_5", "comic_besoboy_volume_6",
                           "comic_major_grom_volume_6", "comic_red_fury_volume_6"],
        next_comics     : ["comic_time_of_raven_epilogue_printed", "comic_besoboy_volume_8"],
        release_at      : {year: 2016, month: 9, day: 29},
        show            : true
    },
    comic_cat_and_mouse_volume_2                                            : {
        name           : "Кошки-мышки том 2: Подвиг каждый день",
        number         : "2",
        type           : "single",
        cover_file     : {
            url         : `${comicImagePath}/authors_comics/cat_and_mouse/cat-and-mouse-volume-2-feat-every-day.png`,
            aspect_ratio: 794 / 556
        },
        ranges         : ["range_authors_comics"],
        authors        : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]}],
        previous_comics: ["comic_cat_and_mouse_volume_1"],
        next_comics    : ["comic_cat_and_mouse_volume_3"],
        release_at     : {year: 2016, month: 9, day: 29},
        show           : true
    },
    comic_monk_48                                                           : {
        name            : "Инок #48 Рука судьбы, часть 1",
        number          : "48",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-48-hand-of-fate-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_8"],
        previous_comics : ["comic_monk_47"],
        next_comics     : ["comic_monk_49"],
        release_at      : {year: 2016, month: 10, day: 10},
        show            : false
    },
    comic_red_fury_48                                                       : {
        name            : "Красная Фурия #48 Финальный рывок, часть 1",
        number          : "48",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-48-final-charge-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_9"],
        previous_comics : ["comic_red_fury_47"],
        next_comics     : ["comic_red_fury_49"],
        release_at      : {year: 2016, month: 10, day: 14},
        show            : false
    },
    comic_exlibrium_24                                                      : {
        name            : "Экслибриум #24 Моно",
        number          : "24",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/exlibrium/exlibrium-24-mono.jpg`, aspect_ratio: 1050 / 1600},
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_5"],
        previous_comics : ["comic_exlibrium_23"],
        next_comics     : ["comic_exlibrium_25"],
        release_at      : {year: 2016, month: 10, day: 20},
        show            : false
    },
    comic_meteora_24                                                        : {
        name            : "Метеора #24 Охота, часть 6",
        number          : "24",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-24-hunting-part-6.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_4"],
        previous_comics : ["comic_meteora_23"],
        next_comics     : ["comic_meteora_25"],
        release_at      : {year: 2016, month: 10, day: 24},
        show            : false
    },
    comic_besoboy_49                                                        : {
        name            : "Бесобой #49 И ад следовал за ним, часть 1",
        number          : "49",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-49-and-hell-followed-him-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_9"],
        previous_comics : ["comic_besoboy_48"],
        next_comics     : ["comic_besoboy_50"],
        release_at      : {year: 2016, month: 10, day: 29},
        show            : false
    },
    comic_major_grom_49                                                     : {
        name            : "Майор Гром #49 Последнее дело, часть 5",
        number          : "49",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-49-last-case-part-5.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_veniamin_rubinshtein", "character_dmitrii_dubin", "character_fyodor_prokopenko",
                           "character_igor_grom", "character_ilya_kosygin"],
        authors         : [{author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_8"],
        previous_comics : ["comic_major_grom_48"],
        next_comics     : ["comic_major_grom_50"],
        release_at      : {year: 2016, month: 11, day: 4},
        show            : false
    },
    comic_monk_49                                                           : {
        name            : "Инок #49 Рука судьбы, часть 2",
        number          : "49",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-49-hand-of-fate-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_8"],
        previous_comics : ["comic_monk_48"],
        next_comics     : ["comic_monk_50"],
        release_at      : {year: 2016, month: 11, day: 10},
        show            : false
    },
    comic_red_fury_49                                                       : {
        name            : "Красная Фурия #49 Финальный рывок, часть 2",
        number          : "49",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-49-final-charge-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_9"],
        previous_comics : ["comic_red_fury_48"],
        next_comics     : ["comic_red_fury_50"],
        release_at      : {year: 2016, month: 11, day: 14},
        show            : false
    },
    comic_exlibrium_25                                                      : {
        name            : "Экслибриум #25 Вот дом, который..., часть 1",
        number          : "25",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-25-here-is-house-that-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_5"],
        previous_comics : ["comic_exlibrium_24"],
        next_comics     : ["comic_exlibrium_26"],
        release_at      : {year: 2016, month: 11, day: 21},
        show            : false
    },
    comic_meteora_25                                                        : {
        name            : "Метеора #25 Я помню",
        number          : "25",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-25-i-remember.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_4"],
        previous_comics : ["comic_meteora_24"],
        next_comics     : ["comic_meteora_26"],
        release_at      : {year: 2016, month: 11, day: 25},
        show            : false
    },
    comic_besoboy_volume_8                                                  : {
        name            : "Бесобой том 8: Гончие Ада",
        number          : "8",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-volume-8-hounds-of-hell.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_43", "comic_besoboy_44", "comic_besoboy_45", "comic_besoboy_46"],
        previous_comics : ["comic_besoboy_volume_7", "comic_time_of_raven"],
        next_comics     : ["comic_besoboy_volume_9"],
        release_at      : {year: 2016, month: 12, day: 15},
        show            : true
    },
    comic_exlibrium_26                                                      : {
        name            : "Экслибриум #26 Вот дом, который..., часть 2",
        number          : "26",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-26-here-is-house-that-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_5"],
        previous_comics : ["comic_exlibrium_25"],
        next_comics     : ["comic_exlibrium_27"],
        release_at      : {year: 2016, month: 12, day: 19},
        show            : false
    },
    comic_besoboy_50                                                        : {
        name            : "Бесобой #50 И ад следовал за ним, часть 2",
        number          : "50",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy/besoboy-50-and-hell-followed-him-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_besoboy"],
        including_comics: ["comic_besoboy_volume_9"],
        previous_comics : ["comic_besoboy_49"],
        next_comics     : ["comic_besoboy_vol_2_1", "comic_black_dog_1", "comic_yarkh_step_forward_1",
                           "comic_balor_and_yana_dream_catcher_electronic", "comic_hourly_time_against_1"],
        release_at      : {year: 2016, month: 12, day: 24},
        show            : false
    },
    comic_major_grom_50                                                     : {
        name            : "Майор Гром #50 Последнее дело, часть 6",
        number          : "50",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-50-last-case-part-6.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_veniamin_rubinshtein", "character_fyodor_prokopenko",
                           "character_uliya_pchyolkina", "character_igor_grom", "character_ilya_kosygin"],
        authors         : [{author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_volume_8"],
        previous_comics : ["comic_major_grom_49"],
        next_comics     : ["comic_igor_grom_1", "comic_major_grom_chance_electronic",
                           "comic_dubin_dima_provincial_holidays_1", "comic_major_grom_1939_electronic",
                           "comic_major_grom_like_in_war_1", "comic_major_grom_hero_forever_1",
                           "comic_special_prokopenko_grom_at_sunrise_electronic",
                           "comic_grom_difficult_childhood_anubis_rising_single"],
        release_at      : {year: 2016, month: 12, day: 24},
        show            : false
    },
    comic_monk_50                                                           : {
        name            : "Инок #50 Всё, что останется",
        number          : "50",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/monk/monk-50-all-that-remains.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_volume_8"],
        previous_comics : ["comic_monk_49"],
        next_comics     : ["comic_monk_and_major_grom_storm_of_berlin", "comic_planeswalkers_1",
                           "comic_master_death_is_just_beginning_electronic", "comic_monk_legacy_single"],
        release_at      : {year: 2016, month: 12, day: 24},
        show            : false
    },
    comic_red_fury_50                                                       : {
        name            : "Красная Фурия #50 Финальный рывок, часть 3",
        number          : "50",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-50-final-charge-part-3.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_volume_9"],
        previous_comics : ["comic_red_fury_49"],
        next_comics     : ["comic_allies_1", "comic_red_fury_1966_single"],
        release_at      : {year: 2016, month: 12, day: 24},
        show            : false
    },
    comic_meteora_26                                                        : {
        name            : "Метеора #26 Конкуренты, часть 1",
        number          : "26",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-26-competitors-part-1.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_5"],
        previous_comics : ["comic_meteora_25"],
        next_comics     : ["comic_meteora_27"],
        release_at      : {year: 2016, month: 12, day: 24},
        show            : false
    },
    comic_red_fury_volume_8                                                 : {
        name            : "Красная Фурия том 8: Агент Симмонс",
        number          : "8",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-volume-8-agent-simmons.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_42", "comic_red_fury_43", "comic_red_fury_44", "comic_red_fury_45"],
        previous_comics : ["comic_time_of_raven_epilogue_printed", "comic_major_grom_and_red_fury_volume_7"],
        next_comics     : ["comic_red_fury_volume_9"],
        release_at      : {year: 2016, month: 12, day: 24},
        show            : true
    },
    comic_ziggy_space_hamster                                               : {
        name            : "Зигги: Космический хомяк",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/ziggy_space_hamster/ziggy-space-hamster.jpg`,
            aspect_ratio: 737 / 1123
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist", "screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]}],
        contained_comics: ["comic_ziggy_space_hamster_1", "comic_ziggy_space_hamster_2", "comic_ziggy_space_hamster_3",
                           "comic_ziggy_space_hamster_4", "comic_ziggy_space_hamster_5"],
        release_at      : {year: 2016, month: 12, day: 24},
        show            : true
    },
    comic_point_of_no_return                                                : {
        name      : "Точка невозврата",
        type      : "single",
        cover_file: {url: `${comicImagePath}/inadequate_galaxy/point-of-no-return.jpg`, aspect_ratio: 1339 / 2048},
        ranges    : ["range_inadequate_galaxy"],
        characters: ["character_nika_chaikina", "character_igor_grom", "character_alyona_kuznetsova",
                     "character_liliya_romanova", "character_besoboi", "character_andrei_radov"],
        release_at: {year: 2016, month: 12, day: 24},
        show      : true
    },
    comic_besoboy_vol_2_1                                                   : {
        name            : "Бесобой Vol.2 #1 Исход, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-1-exodus-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_pavel_ocheredko", "character_shmyg", "character_yana",
                           "character_besoboi", "character_dzhanijsh"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_book_1", "comic_besoboy_vol_2_volume_1"],
        previous_comics : ["comic_besoboy_50"],
        next_comics     : ["comic_besoboy_vol_2_2"],
        release_at      : {year: 2017, month: 1, day: 20},
        show            : false
    },
    comic_igor_grom_1                                                       : {
        name            : "Игорь Гром #1 Находится на реконструкции, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-1-under-reconstruction-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom", "character_kocit", "character_stiks"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_igor_grom_book_1", "comic_igor_grom_volume_1"],
        previous_comics : ["comic_major_grom_50"],
        next_comics     : ["comic_igor_grom_2"],
        release_at      : {year: 2017, month: 1, day: 20},
        show            : false
    },
    comic_planeswalkers_1                                                   : {
        name            : "Мироходцы #1 Кровь богов, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-1-blood-of-gods-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_mars", "character_seryi_volk", "character_andrei_radov",
                           "character_kseniya_radova"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]}],
        including_comics: ["comic_planeswalkers_book_1", "comic_planeswalkers_volume_1"],
        previous_comics : ["comic_monk_50"],
        next_comics     : ["comic_planeswalkers_2"],
        release_at      : {year: 2017, month: 1, day: 20},
        show            : false
    },
    comic_allies_1                                                          : {
        name            : "Союзники #1 Перед рассветом, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/allies/allies-1-before-dawn-part-1.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhonni", "character_dzhoshua_donato", "character_lotta_lemke",
                           "character_sadap_rahmani", "character_nika_chaikina"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_book_1", "comic_allies_volume_1"],
        previous_comics : ["comic_red_fury_50"],
        next_comics     : ["comic_allies_2"],
        release_at      : {year: 2017, month: 1, day: 20},
        show            : false
    },
    comic_exlibrium_27                                                      : {
        name            : "Экслибриум #27 С новым счастьем",
        number          : "27",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-27-with-new-happiness.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_5"],
        previous_comics : ["comic_exlibrium_26"],
        next_comics     : ["comic_exlibrium_28"],
        release_at      : {year: 2017, month: 1, day: 20},
        show            : false
    },
    comic_meteora_27                                                        : {
        name            : "Метеора #27 Конкуренты, часть 2",
        number          : "27",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-27-competitors-part-2.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_5"],
        previous_comics : ["comic_meteora_26"],
        next_comics     : ["comic_meteora_28"],
        release_at      : {year: 2017, month: 1, day: 23},
        show            : false
    },
    comic_allies_2                                                          : {
        name            : "Союзники #2 Перед рассветом, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/allies/allies-2-before-dawn-part-2.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhonni", "character_dzhoshua_donato", "character_lotta_lemke",
                           "character_sadap_rahmani", "character_nika_chaikina"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_book_1", "comic_allies_volume_1"],
        previous_comics : ["comic_allies_1"],
        next_comics     : ["comic_allies_3"],
        release_at      : {year: 2017, month: 2, day: 1},
        show            : false
    },
    comic_besoboy_vol_2_2                                                   : {
        name            : "Бесобой Vol.2 #2 Исход, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-2-exodus-part-2.jpg`,
            aspect_ratio: 1327 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_pavel_ocheredko", "character_shmyg", "character_yana",
                           "character_besoboi", "character_dzhanijsh"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_book_1", "comic_besoboy_vol_2_volume_1"],
        previous_comics : ["comic_besoboy_vol_2_1"],
        next_comics     : ["comic_besoboy_vol_2_3"],
        release_at      : {year: 2017, month: 2, day: 6},
        show            : false
    },
    comic_igor_grom_2                                                       : {
        name            : "Игорь Гром #2 Находится на реконструкции, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-2-under-reconstruction-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom", "character_kocit", "character_stiks"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_igor_grom_book_1", "comic_igor_grom_volume_1"],
        previous_comics : ["comic_igor_grom_1"],
        next_comics     : ["comic_igor_grom_3"],
        release_at      : {year: 2017, month: 2, day: 10},
        show            : false
    },
    comic_planeswalkers_2                                                   : {
        name            : "Мироходцы #2 Кровь богов, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-2-blood-of-gods-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_mars", "character_seryi_volk", "character_andrei_radov",
                           "character_kseniya_radova"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]}],
        including_comics: ["comic_planeswalkers_book_1", "comic_planeswalkers_volume_1"],
        previous_comics : ["comic_planeswalkers_1"],
        next_comics     : ["comic_planeswalkers_3"],
        release_at      : {year: 2017, month: 2, day: 14},
        show            : false
    },
    comic_major_grom_chance_electronic                                      : {
        ...comic_major_grom_chance,
        including_comics: ["comic_major_grom_chance_printed"],
        previous_comics : ["comic_major_grom_50"],
        show            : false
    },
    comic_major_grom_chance_printed                                         : {
        ...comic_major_grom_chance,
        contained_comics: ["comic_major_grom_chance_electronic"],
        previous_comics : ["comic_major_grom_volume_8"],
        show            : true
    },
    comic_exlibrium_28                                                      : {
        name            : "Экслибриум #28 Невинная история, часть 1",
        number          : "28",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-28-innocent-story-part-1.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_5"],
        previous_comics : ["comic_exlibrium_27"],
        next_comics     : ["comic_exlibrium_29"],
        release_at      : {year: 2017, month: 2, day: 20},
        show            : false
    },
    comic_meteora_28                                                        : {
        name            : "Метеора #28 Одной крови",
        number          : "28",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-28-of-same-blood.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_5"],
        previous_comics : ["comic_meteora_27"],
        next_comics     : ["comic_meteora_29"],
        release_at      : {year: 2017, month: 2, day: 23},
        show            : false
    },
    comic_allies_3                                                          : {
        name            : "Союзники #3 Перед рассветом, часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/allies/allies-3-before-dawn-part-3.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhonni", "character_dzhoshua_donato", "character_lotta_lemke",
                           "character_sadap_rahmani", "character_nika_chaikina"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_book_1", "comic_allies_volume_1"],
        previous_comics : ["comic_allies_2"],
        next_comics     : ["comic_allies_4"],
        release_at      : {year: 2017, month: 3, day: 1},
        show            : false
    },
    comic_besoboy_vol_2_3                                                   : {
        name            : "Бесобой Vol.2 #3 Исход, часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-3-exodus-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_pavel_ocheredko", "character_shmyg", "character_yana",
                           "character_besoboi", "character_dzhanijsh"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_book_1", "comic_besoboy_vol_2_volume_1"],
        previous_comics : ["comic_besoboy_vol_2_2"],
        next_comics     : ["comic_besoboy_vol_2_4"],
        release_at      : {year: 2017, month: 3, day: 6},
        show            : false
    },
    comic_igor_grom_3                                                       : {
        name            : "Игорь Гром #3 Находится на реконструкции, часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-3-under-reconstruction-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom", "character_kocit", "character_stiks"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_igor_grom_book_1", "comic_igor_grom_volume_1"],
        previous_comics : ["comic_igor_grom_2"],
        next_comics     : ["comic_igor_grom_4"],
        release_at      : {year: 2017, month: 3, day: 10},
        show            : false
    },
    comic_planeswalkers_3                                                   : {
        name            : "Мироходцы #3 Кровь богов, часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-3-blood-of-gods-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_mars", "character_seryi_volk", "character_andrei_radov",
                           "character_kseniya_radova", "character_luna"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]}],
        including_comics: ["comic_planeswalkers_book_1", "comic_planeswalkers_volume_1"],
        previous_comics : ["comic_planeswalkers_2"],
        next_comics     : ["comic_planeswalkers_4"],
        release_at      : {year: 2017, month: 3, day: 14},
        show            : false
    },
    comic_exlibrium_29                                                      : {
        name            : "Экслибриум #29 Невинная история, часть 2",
        number          : "29",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-29-innocent-story-part-2.jpg`,
            aspect_ratio: 379 / 580
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_5"],
        previous_comics : ["comic_exlibrium_28"],
        next_comics     : ["comic_exlibrium_30"],
        release_at      : {year: 2017, month: 3, day: 20},
        show            : false
    },
    comic_meteora_29                                                        : {
        name            : "Метеора #29 Мышка и кракен",
        number          : "29",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-29-mouse-and-kraken.jpg`, aspect_ratio: 379 / 580},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_5"],
        previous_comics : ["comic_meteora_28"],
        next_comics     : ["comic_meteora_30"],
        release_at      : {year: 2017, month: 3, day: 24},
        show            : false
    },
    comic_allies_4                                                          : {
        name            : "Союзники #4 Перед рассветом, часть 4",
        number          : "4",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/allies/allies-4-before-dawn-part-4.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhonni", "character_dzhoshua_donato", "character_lotta_lemke",
                           "character_sadap_rahmani", "character_nika_chaikina"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_book_1", "comic_allies_volume_1"],
        previous_comics : ["comic_allies_3"],
        next_comics     : ["comic_allies_5"],
        release_at      : {year: 2017, month: 3, day: 31},
        show            : false
    },
    comic_igor_ugor_volume_1                                                : {
        name       : "Игорь Угорь. Том 1",
        number     : "1",
        type       : "book",
        cover_file : {
            url         : `${comicImagePath}/inadequate_galaxy/igor_ugor/igor-ugor-volume-1.jpg`,
            aspect_ratio: 1165 / 1654
        },
        ranges     : ["range_inadequate_galaxy"],
        authors    : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                      {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                      {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                      {author_id: "author_roman_kotkov", positions: ["screenwriter"]}],
        next_comics: ["comic_igor_ugor_volume_2"],
        release_at : {year: 2017, month: 4, day: 1},
        show       : true
    },
    comic_besoboy_vol_2_4                                                   : {
        name            : "Бесобой Vol.2 #4 Исход, часть 4",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-4-exodus-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_pavel_ocheredko", "character_shmyg", "character_yana",
                           "character_besoboi", "character_dzhanijsh"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_book_1", "comic_besoboy_vol_2_volume_1"],
        previous_comics : ["comic_besoboy_vol_2_3"],
        next_comics     : ["comic_besoboy_vol_2_5"],
        release_at      : {year: 2017, month: 4, day: 5},
        show            : false
    },
    comic_igor_grom_4                                                       : {
        name            : "Игорь Гром #4 Дикая охота, часть 1",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-4-wild-hunt-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_ivan_yelyasov", positions: ["artist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_book_1", "comic_igor_grom_volume_1"],
        previous_comics : ["comic_igor_grom_3"],
        next_comics     : ["comic_igor_grom_5"],
        release_at      : {year: 2017, month: 4, day: 10},
        show            : false
    },
    comic_planeswalkers_4                                                   : {
        name            : "Мироходцы #4 Каменный взгляд, часть 1",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-4-stone-gaze-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_diana_de_maridor", "character_seryi_volk", "character_andrei_radov",
                           "character_kseniya_radova"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        including_comics: ["comic_planeswalkers_book_1", "comic_planeswalkers_volume_1"],
        previous_comics : ["comic_planeswalkers_3"],
        next_comics     : ["comic_planeswalkers_5"],
        release_at      : {year: 2017, month: 4, day: 14},
        show            : false
    },
    comic_exlibrium_30                                                      : {
        name            : "Экслибриум #30 Бумажный порез, часть 1",
        number          : "30",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-30-paper-cut-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_6"],
        previous_comics : ["comic_exlibrium_29"],
        next_comics     : ["comic_exlibrium_31"],
        release_at      : {year: 2017, month: 4, day: 20},
        show            : false
    },
    comic_meteora_30                                                        : {
        name            : "Метеора #30 Что есть имя",
        number          : "30",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-30-what-is-name.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_5"],
        previous_comics : ["comic_meteora_29"],
        next_comics     : ["comic_meteora_31"],
        release_at      : {year: 2017, month: 4, day: 24},
        show            : false
    },
    comic_allies_5                                                          : {
        name            : "Союзники #5 Естественный отбор, часть 1",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-5-natural-selection-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhonni", "character_dzhoshua_donato", "character_lotta_lemke",
                           "character_sadap_rahmani", "character_nika_chaikina"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_yulia_loganova", positions: ["colorist"]}],
        including_comics: ["comic_allies_book_2", "comic_allies_volume_2"],
        previous_comics : ["comic_allies_4"],
        next_comics     : ["comic_allies_6"],
        release_at      : {year: 2017, month: 5, day: 2},
        show            : false
    },
    comic_besoboy_vol_2_5                                                   : {
        name            : "Бесобой Vol.2 #5 Исход, часть 5",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-5-exodus-part-5.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_pavel_ocheredko", "character_shmyg", "character_yana",
                           "character_besoboi", "character_dzhanijsh"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_book_1", "comic_besoboy_vol_2_volume_1"],
        previous_comics : ["comic_besoboy_vol_2_4"],
        next_comics     : ["comic_besoboy_vol_2_6"],
        release_at      : {year: 2017, month: 5, day: 5},
        show            : false
    },
    comic_igor_grom_5                                                       : {
        name            : "Игорь Гром #5 Дикая охота, часть 2",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-5-wild-hunt-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_ivan_yelyasov", positions: ["artist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_book_1", "comic_igor_grom_volume_1"],
        previous_comics : ["comic_igor_grom_4"],
        next_comics     : ["comic_igor_grom_6"],
        release_at      : {year: 2017, month: 5, day: 10},
        show            : false
    },
    comic_besoboy_volume_9                                                  : {
        name            : "Бесобой том 9: Чъреба",
        number          : "9",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/besoboy/besoboy-volume-9-chreba.jpg`, aspect_ratio: 1004 / 1535},
        ranges          : ["range_besoboy"],
        contained_comics: ["comic_besoboy_47", "comic_besoboy_48", "comic_besoboy_49", "comic_besoboy_50"],
        previous_comics : ["comic_besoboy_volume_8"],
        next_comics     : ["comic_besoboy_vol_2_book_1", "comic_besoboy_vol_2_volume_1", "comic_black_dog_its_time",
                           "comic_yarkh_step_forward", "comic_balor_and_yana_dream_catcher_printed",
                           "comic_hourly_time_against"],
        release_at      : {year: 2017, month: 5, day: 12},
        show            : true
    },
    comic_planeswalkers_5                                                   : {
        name            : "Мироходцы #5 Каменный взгляд, часть 2",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-5-stone-gaze-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_diana_de_maridor", "character_seryi_volk", "character_andrei_radov",
                           "character_kseniya_radova"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        including_comics: ["comic_planeswalkers_book_1", "comic_planeswalkers_volume_1"],
        previous_comics : ["comic_planeswalkers_4"],
        next_comics     : ["comic_planeswalkers_6"],
        release_at      : {year: 2017, month: 5, day: 15},
        show            : false
    },
    comic_exlibrium_31                                                      : {
        name            : "Экслибриум #31 Бумажный порез, часть 2",
        number          : "31",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-31-paper-cut-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_6"],
        previous_comics : ["comic_exlibrium_30"],
        next_comics     : ["comic_exlibrium_32"],
        release_at      : {year: 2017, month: 5, day: 19},
        show            : false
    },
    comic_meteora_31                                                        : {
        name            : "Метеора #31 Проверка пульса, часть 1",
        number          : "31",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-31-pulse-check-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_6"],
        previous_comics : ["comic_meteora_30"],
        next_comics     : ["comic_meteora_32"],
        release_at      : {year: 2017, month: 5, day: 25},
        show            : false
    },
    comic_allies_6                                                          : {
        name            : "Союзники #6 Естественный отбор, часть 2",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-6-natural-selection-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhonni", "character_dzhoshua_donato", "character_lotta_lemke",
                           "character_sadap_rahmani", "character_nika_chaikina"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_book_2", "comic_allies_volume_2"],
        previous_comics : ["comic_allies_5"],
        next_comics     : ["comic_allies_7"],
        release_at      : {year: 2017, month: 6, day: 1},
        show            : false
    },
    comic_major_grom_volume_8                                               : {
        name            : "Майор Гром. Том 8: Последнее дело",
        number          : "8",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-volume-8-last-case.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_veniamin_rubinshtein", "character_dmitrii_dubin", "character_fyodor_prokopenko",
                           "character_igor_grom"],
        authors         : [{author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]},
                           {author_id: "author_nina_vakueva", positions: ["colorist"]},
                           {author_id: "author_eduard_petrovich", positions: ["artist"]}],
        contained_comics: ["comic_major_grom_42", "comic_major_grom_43", "comic_major_grom_44", "comic_major_grom_45",
                           "comic_major_grom_46", "comic_major_grom_47", "comic_major_grom_48", "comic_major_grom_49",
                           "comic_major_grom_50"],
        previous_comics : ["comic_time_of_raven_epilogue_printed", "comic_major_grom_and_red_fury_volume_7"],
        next_comics     : ["comic_major_grom_chance_printed", "comic_igor_grom_book_1", "comic_igor_grom_volume_1",
                           "comic_dubin_dima_provincial_holidays", "comic_major_grom_1939_printed",
                           "comic_major_grom_like_in_war", "comic_major_grom_hero_forever",
                           "comic_special_prokopenko_grom_at_sunrise_printed",
                           "comic_grom_difficult_childhood_anubis_rising_book"],
        release_at      : {year: 2017, month: 6, day: 1},
        show            : true
    },
    comic_monk_volume_8                                                     : {
        name            : "Инок том 8: Путь к бессмертию",
        number          : "8",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/monk/monk-volume-8-path-to-immortality.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_monk"],
        contained_comics: ["comic_monk_43", "comic_monk_44", "comic_monk_45", "comic_monk_46", "comic_monk_47",
                           "comic_monk_48", "comic_monk_49", "comic_monk_50"],
        previous_comics : ["comic_time_of_raven_epilogue_printed", "comic_monk_volume_7"],
        next_comics     : ["comic_chronicles_of_monk_storm_of_berlin", "comic_planeswalkers_book_1",
                           "comic_planeswalkers_volume_1", "comic_master_death_is_just_beginning_printed",
                           "comic_monk_legacy_book"],
        release_at      : {year: 2017, month: 6, day: 1},
        show            : true
    },
    comic_besoboy_vol_2_6                                                   : {
        name            : "Бесобой Vol.2 #6 Мастер войны, часть 1",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-6-master-of-war-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_balor", "character_pavel_ocheredko",
                           "character_chyornyi_pyos", "character_shmyg", "character_yana", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_elena_doronina", positions: ["colorist"]},
                           {author_id: "author_eric_bragalyan", positions: ["artist"]}],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_volume_2"],
        previous_comics : ["comic_besoboy_vol_2_5"],
        next_comics     : ["comic_besoboy_vol_2_7"],
        release_at      : {year: 2017, month: 6, day: 5},
        show            : false
    },
    comic_igor_grom_6                                                       : {
        name            : "Игорь Гром #6 Дикая охота, часть 3",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-6-wild-hunt-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_ivan_yelyasov", positions: ["artist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_book_1", "comic_igor_grom_volume_1"],
        previous_comics : ["comic_igor_grom_5"],
        next_comics     : ["comic_igor_grom_7"],
        release_at      : {year: 2017, month: 6, day: 10},
        show            : false
    },
    comic_red_fury_volume_9                                                 : {
        name            : "Красная Фурия том 9: Финальный рывок",
        number          : "9",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/red_fury/red-fury-volume-9-final-charge.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_46", "comic_red_fury_47", "comic_red_fury_48", "comic_red_fury_49",
                           "comic_red_fury_50"],
        previous_comics : ["comic_red_fury_volume_8"],
        next_comics     : ["comic_allies_book_1", "comic_allies_volume_1", "comic_red_fury_1966_book"],
        release_at      : {year: 2017, month: 6, day: 10},
        show            : true
    },
    comic_planeswalkers_6                                                   : {
        name            : "Мироходцы #6 Каменный взгляд, часть 3",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-6-stone-gaze-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_diana_de_maridor", "character_seryi_volk", "character_andrei_radov",
                           "character_kseniya_radova"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        including_comics: ["comic_planeswalkers_book_1", "comic_planeswalkers_volume_1"],
        previous_comics : ["comic_planeswalkers_5"],
        next_comics     : ["comic_planeswalkers_7"],
        release_at      : {year: 2017, month: 6, day: 15},
        show            : false
    },
    comic_exlibrium_32                                                      : {
        name            : "Экслибриум #32 Морок, часть 1",
        number          : "32",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/exlibrium/exlibrium-32-morok-part-1.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_6"],
        previous_comics : ["comic_exlibrium_31"],
        next_comics     : ["comic_exlibrium_33"],
        release_at      : {year: 2017, month: 6, day: 20},
        show            : false
    },
    comic_meteora_32                                                        : {
        name            : "Метеора #32 Проверка пульса, часть 2",
        number          : "32",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-32-pulse-check-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_6"],
        previous_comics : ["comic_meteora_31"],
        next_comics     : ["comic_meteora_33"],
        release_at      : {year: 2017, month: 6, day: 26},
        show            : false
    },
    comic_allies_7                                                          : {
        name            : "Союзники #7 Естественный отбор, часть 3",
        number          : "7",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-7-natural-selection-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhonni", "character_dzhoshua_donato", "character_lotta_lemke",
                           "character_sadap_rahmani", "character_nika_chaikina"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_book_2", "comic_allies_volume_2"],
        previous_comics : ["comic_allies_6"],
        next_comics     : ["comic_allies_8"],
        release_at      : {year: 2017, month: 6, day: 30},
        show            : false
    },
    comic_friends_comics_1                                                  : {
        name            : "ДружКомикс #1",
        number          : "1",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-1.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-1-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-1-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-1-page-3.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        next_comics     : ["comic_friends_comics_2"],
        release_at      : {year: 2017, month: 7, day: 3},
        show            : false
    },
    comic_besoboy_vol_2_7                                                   : {
        name            : "Бесобой Vol.2 #7 Мастер войны, часть 2",
        number          : "7",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-7-master-of-war-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_balor", "character_pavel_ocheredko",
                           "character_chyornyi_pyos", "character_shmyg", "character_yana", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_elena_doronina", positions: ["colorist"]},
                           {author_id: "author_eric_bragalyan", positions: ["artist"]}],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_volume_2"],
        previous_comics : ["comic_besoboy_vol_2_6"],
        next_comics     : ["comic_besoboy_vol_2_8"],
        release_at      : {year: 2017, month: 7, day: 5},
        show            : false
    },
    comic_friends_comics_2                                                  : {
        name            : "ДружКомикс #2",
        number          : "2",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-2.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-2-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-2-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-2-page-3.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-2-page-4.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-2-page-5.png`, aspect_ratio: 1000 / 1415}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_1"],
        next_comics     : ["comic_friends_comics_3"],
        release_at      : {year: 2017, month: 7, day: 5},
        show            : false
    },
    comic_friends_comics_3                                                  : {
        name            : "ДружКомикс #3",
        number          : "3",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-3.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-3-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-3-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-3-page-3.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-3-page-4.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-3-page-5.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-3-page-6.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_2"],
        next_comics     : ["comic_friends_comics_4"],
        release_at      : {year: 2017, month: 7, day: 7},
        show            : false
    },
    comic_igor_grom_7                                                       : {
        name            : "Игорь Гром #7 Голодные духи, часть 1",
        number          : "7",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-7-hungry-ghosts-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom", "character_valentin_kaligari_gashparov"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_igor_grom_book_2", "comic_igor_grom_volume_2"],
        previous_comics : ["comic_igor_grom_6"],
        next_comics     : ["comic_igor_grom_8"],
        release_at      : {year: 2017, month: 7, day: 10},
        show            : false
    },
    comic_friends_comics_4                                                  : {
        name            : "ДружКомикс #4",
        number          : "4",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-4.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-4-page-1.png`, aspect_ratio: 1000 / 477},
            {url: `${comicImagePath}/friends_comics/friends-comics-4-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-4-page-3.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_3"],
        next_comics     : ["comic_friends_comics_5"],
        release_at      : {year: 2017, month: 7, day: 10},
        show            : false
    },
    comic_friends_comics_5                                                  : {
        name            : "ДружКомикс #5",
        number          : "5",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-5.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-5-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-5-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-5-page-3.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_4"],
        next_comics     : ["comic_friends_comics_6"],
        release_at      : {year: 2017, month: 7, day: 12},
        show            : false
    },
    comic_planeswalkers_7                                                   : {
        name            : "Мироходцы #7 Луна, часть 1",
        number          : "7",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-7-moon-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_seryi_volk", "character_luna"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]}],
        including_comics: ["comic_planeswalkers_book_2", "comic_planeswalkers_volume_2"],
        previous_comics : ["comic_planeswalkers_6"],
        next_comics     : ["comic_planeswalkers_8"],
        release_at      : {year: 2017, month: 7, day: 15},
        show            : false
    },
    comic_friends_comics_6                                                  : {
        name            : "ДружКомикс #6",
        number          : "6",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-6.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-6-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-6-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-6-page-3.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-6-page-4.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_5"],
        next_comics     : ["comic_friends_comics_7"],
        release_at      : {year: 2017, month: 7, day: 17},
        show            : false
    },
    comic_friends_comics_7                                                  : {
        name            : "ДружКомикс #7",
        number          : "7",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-7.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-7-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-7-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-7-page-3.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-7-page-4.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-7-page-5.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_6"],
        next_comics     : ["comic_friends_comics_8"],
        release_at      : {year: 2017, month: 7, day: 19},
        show            : false
    },
    comic_exlibrium_33                                                      : {
        name            : "Экслибриум #33 Морок, часть 2",
        number          : "33",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/exlibrium/exlibrium-33-morok-part-2.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_6"],
        previous_comics : ["comic_exlibrium_32"],
        next_comics     : ["comic_exlibrium_34"],
        release_at      : {year: 2017, month: 7, day: 20},
        show            : false
    },
    comic_friends_comics_8                                                  : {
        name            : "ДружКомикс #8",
        number          : "8",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-8.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-8-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-8-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-8-page-3.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_7"],
        next_comics     : ["comic_friends_comics_9"],
        release_at      : {year: 2017, month: 7, day: 21},
        show            : false
    },
    comic_friends_comics_9                                                  : {
        name            : "ДружКомикс #9",
        number          : "9",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-9.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-9-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-9-page-2.png`, aspect_ratio: 1000 / 477},
            {url: `${comicImagePath}/friends_comics/friends-comics-9-page-3.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-9-page-4.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-9-page-5.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-9-page-6.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-9-page-7.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-9-page-8.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_8"],
        next_comics     : ["comic_friends_comics_10"],
        release_at      : {year: 2017, month: 7, day: 24},
        show            : false
    },
    comic_meteora_33                                                        : {
        name            : "Метеора #33 Проверка пульса, часть 3",
        number          : "33",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-33-pulse-check-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_6"],
        previous_comics : ["comic_meteora_32"],
        next_comics     : ["comic_meteora_34"],
        release_at      : {year: 2017, month: 7, day: 25},
        show            : false
    },
    comic_friends_comics_10                                                 : {
        name            : "ДружКомикс #10",
        number          : "10",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-10.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-10-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-10-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-10-page-3.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_9"],
        next_comics     : ["comic_friends_comics_11"],
        release_at      : {year: 2017, month: 7, day: 27},
        show            : false
    },
    comic_exlibrium_volume_4                                                : {
        name            : "Экслибриум том 4: Соль на рану",
        number          : "4",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-volume-4-salt-in-wound.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_18", "comic_exlibrium_19", "comic_exlibrium_20", "comic_exlibrium_21",
                           "comic_exlibrium_22", "comic_exlibrium_23"],
        previous_comics : ["comic_time_of_raven_epilogue_printed", "comic_exlibrium_volume_3"],
        next_comics     : ["comic_exlibrium_volume_5"],
        release_at      : {year: 2017, month: 7, day: 28},
        show            : true
    },
    comic_meteora_volume_4                                                  : {
        name            : "Метеора том 4: Охота",
        number          : "4",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-volume-4-hunt.jpg`, aspect_ratio: 1004 / 1535},
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_18", "comic_meteora_19", "comic_meteora_20", "comic_meteora_21",
                           "comic_meteora_22", "comic_meteora_23", "comic_meteora_24", "comic_meteora_25"],
        previous_comics : ["comic_meteora_volume_3"],
        next_comics     : ["comic_meteora_volume_5"],
        release_at      : {year: 2017, month: 7, day: 28},
        show            : true
    },
    comic_friends_comics_11                                                 : {
        name            : "ДружКомикс #11",
        number          : "11",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-11.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-11-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-11-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-11-page-3.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_10"],
        next_comics     : ["comic_friends_comics_12"],
        release_at      : {year: 2017, month: 7, day: 31},
        show            : false
    },
    comic_allies_8                                                          : {
        name            : "Союзники #8 Условный рефлекс, часть 1",
        number          : "8",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-8-conditioned-reflex-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_artur_haksli", "character_dzhessi_rodrigez", "character_dzhonni",
                           "character_dzhoshua_donato", "character_lotta_lemke", "character_sadap_rahmani",
                           "character_nika_chaikina"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_book_2", "comic_allies_volume_2"],
        previous_comics : ["comic_allies_7"],
        next_comics     : ["comic_allies_9"],
        release_at      : {year: 2017, month: 8, day: 1},
        show            : false
    },
    comic_friends_comics_12                                                 : {
        name            : "ДружКомикс #12",
        number          : "12",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-12.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-12-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-12-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-12-page-3.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-12-page-4.png`, aspect_ratio: 1000 / 1416}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_11"],
        next_comics     : ["comic_friends_comics_13"],
        release_at      : {year: 2017, month: 8, day: 2},
        show            : false
    },
    comic_friends_comics_13                                                 : {
        name            : "ДружКомикс #13",
        number          : "13",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-13.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-13-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-13-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-13-page-3.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_12"],
        next_comics     : ["comic_friends_comics_14"],
        release_at      : {year: 2017, month: 8, day: 4},
        show            : false
    },
    comic_besoboy_vol_2_8                                                   : {
        name            : "Бесобой Vol.2 #8 Падение, часть 1",
        number          : "8",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-8-fall-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_avaddon_bezzhalostnyi", "character_baffort_rakshor", "character_satana",
                           "character_tanahiya_neumolimaya", "character_shmyg", "character_yarh_smertonosnyi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_volume_2"],
        previous_comics : ["comic_besoboy_vol_2_7"],
        next_comics     : ["comic_besoboy_vol_2_9"],
        release_at      : {year: 2017, month: 8, day: 5},
        show            : false
    },
    comic_friends_comics_14                                                 : {
        name            : "ДружКомикс #14",
        number          : "14",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-14.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-14-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-14-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-14-page-3.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_13"],
        next_comics     : ["comic_friends_comics_15"],
        release_at      : {year: 2017, month: 8, day: 7},
        show            : false
    },
    comic_friends_comics_15                                                 : {
        name            : "ДружКомикс #15",
        number          : "15",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-15.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-15-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-15-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-15-page-3.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_14"],
        next_comics     : ["comic_friends_comics_16"],
        release_at      : {year: 2017, month: 8, day: 9},
        show            : false
    },
    comic_igor_grom_8                                                       : {
        name            : "Игорь Гром #8 Голодные духи, часть 2",
        number          : "8",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-8-hungry-ghosts-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom", "character_valentin_kaligari_gashparov", "character_irina_sharlotta"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_igor_grom_book_2", "comic_igor_grom_volume_2"],
        previous_comics : ["comic_igor_grom_7"],
        next_comics     : ["comic_igor_grom_9"],
        release_at      : {year: 2017, month: 8, day: 10},
        show            : false
    },
    comic_friends_comics_16                                                 : {
        name            : "ДружКомикс #16",
        number          : "16",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-16.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-16-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-16-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-16-page-3.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_15"],
        next_comics     : ["comic_friends_comics_17"],
        release_at      : {year: 2017, month: 8, day: 11},
        show            : false
    },
    comic_friends_comics_17                                                 : {
        name            : "ДружКомикс #17",
        number          : "17",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-17.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-17-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-17-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-17-page-3.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_16"],
        next_comics     : ["comic_friends_comics_18"],
        release_at      : {year: 2017, month: 8, day: 14},
        show            : false
    },
    comic_planeswalkers_8                                                   : {
        name            : "Мироходцы #8 Луна, часть 2",
        number          : "8",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-8-moon-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_seryi_volk", "character_luna"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]}],
        including_comics: ["comic_planeswalkers_book_2", "comic_planeswalkers_volume_2"],
        previous_comics : ["comic_planeswalkers_7"],
        next_comics     : ["comic_planeswalkers_9"],
        release_at      : {year: 2017, month: 8, day: 15},
        show            : false
    },
    comic_friends_comics_18                                                 : {
        name            : "ДружКомикс #18",
        number          : "18",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-18.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-18-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-18-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-18-page-3.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_17"],
        next_comics     : ["comic_friends_comics_19"],
        release_at      : {year: 2017, month: 8, day: 16},
        show            : false
    },
    comic_exlibrium_34                                                      : {
        name            : "Экслибриум #34 Морок, часть 3",
        number          : "34",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/exlibrium/exlibrium-34-morok-part-3.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_6"],
        previous_comics : ["comic_exlibrium_33"],
        next_comics     : ["comic_exlibrium_35"],
        release_at      : {year: 2017, month: 8, day: 21},
        show            : false
    },
    comic_friends_comics_19                                                 : {
        name            : "ДружКомикс #19",
        number          : "19",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-19.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-19-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-19-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-19-page-3.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-19-page-4.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-19-page-5.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-19-page-6.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_18"],
        next_comics     : ["comic_friends_comics_20"],
        release_at      : {year: 2017, month: 8, day: 21},
        show            : false
    },
    comic_friends_comics_20                                                 : {
        name            : "ДружКомикс #20",
        number          : "20",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-20.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-20-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-20-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-20-page-3.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-20-page-4.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-20-page-5.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-20-page-6.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_19"],
        next_comics     : ["comic_friends_comics_21"],
        release_at      : {year: 2017, month: 8, day: 23},
        show            : false
    },
    comic_meteora_34                                                        : {
        name            : "Метеора #34 Проверка пульса, часть 4",
        number          : "34",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-34-pulse-check-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_6"],
        previous_comics : ["comic_meteora_33"],
        next_comics     : ["comic_meteora_35"],
        release_at      : {year: 2017, month: 8, day: 25},
        show            : false
    },
    comic_friends_comics_21                                                 : {
        name            : "ДружКомикс #21",
        number          : "21",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-21.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-21-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-21-page-2.png`, aspect_ratio: 1000 / 478},
            {url: `${comicImagePath}/friends_comics/friends-comics-21-page-3.png`, aspect_ratio: 1000 / 478}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_20"],
        next_comics     : ["comic_friends_comics_22"],
        release_at      : {year: 2017, month: 8, day: 25},
        show            : false
    },
    comic_friends_comics_22                                                 : {
        name            : "ДружКомикс #22",
        number          : "22",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-22.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-22-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-22-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-22-page-3.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_21"],
        next_comics     : ["comic_friends_comics_23"],
        release_at      : {year: 2017, month: 8, day: 28},
        show            : false
    },
    comic_friends_comics_23                                                 : {
        name            : "ДружКомикс #23",
        number          : "23",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-23.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-23-page-1.png`, aspect_ratio: 752 / 1080},
            {url: `${comicImagePath}/friends_comics/friends-comics-23-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-23-page-3.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-23-page-4.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_22"],
        next_comics     : ["comic_friends_comics_24"],
        release_at      : {year: 2017, month: 8, day: 30},
        show            : false
    },
    comic_allies_9                                                          : {
        name            : "Союзники #9 Условный рефлекс, часть 2",
        number          : "9",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-9-conditioned-reflex-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_artur_haksli", "character_dzhessi_rodrigez", "character_dzhonni",
                           "character_dzhoshua_donato", "character_lotta_lemke", "character_sadap_rahmani",
                           "character_nika_chaikina"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_book_2", "comic_allies_volume_2"],
        previous_comics : ["comic_allies_8"],
        next_comics     : ["comic_allies_10"],
        release_at      : {year: 2017, month: 9, day: 1},
        show            : false
    },
    comic_friends_comics_24                                                 : {
        name            : "ДружКомикс #24",
        number          : "24",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-24.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-24-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-24-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-24-page-3.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_23"],
        next_comics     : ["comic_friends_comics_25"],
        release_at      : {year: 2017, month: 9, day: 1},
        show            : false
    },
    comic_friends_comics_25                                                 : {
        name            : "ДружКомикс #25",
        number          : "25",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-25.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-25-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-25-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-25-page-3.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_24"],
        next_comics     : ["comic_friends_comics_26"],
        release_at      : {year: 2017, month: 9, day: 4},
        show            : false
    },
    comic_besoboy_vol_2_9                                                   : {
        name            : "Бесобой Vol.2 #9 Падение, часть 2",
        number          : "9",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-9-fall-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_avaddon_bezzhalostnyi", "character_baffort_rakshor", "character_satana",
                           "character_tanahiya_neumolimaya", "character_shmyg", "character_yarh_smertonosnyi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_volume_2"],
        previous_comics : ["comic_besoboy_vol_2_8"],
        next_comics     : ["comic_besoboy_vol_2_10"],
        release_at      : {year: 2017, month: 9, day: 5},
        show            : false
    },
    comic_friends_comics_26                                                 : {
        name            : "ДружКомикс #26",
        number          : "26",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-26.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-26-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-26-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-26-page-3.png`, aspect_ratio: 1000 / 481}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_25"],
        next_comics     : ["comic_friends_comics_27"],
        release_at      : {year: 2017, month: 9, day: 6},
        show            : false
    },
    comic_friends_comics_27                                                 : {
        name            : "ДружКомикс #27",
        number          : "27",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/friends_comics/friends-comics-27.png`, aspect_ratio: 1000 / 481},
        content_files   : [
            {url: `${comicImagePath}/friends_comics/friends-comics-27-page-1.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-27-page-2.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-27-page-3.png`, aspect_ratio: 1000 / 481},
            {url: `${comicImagePath}/friends_comics/friends-comics-27-page-4.png`, aspect_ratio: 1000 / 719}
        ],
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_friends_comics"],
        previous_comics : ["comic_friends_comics_26"],
        release_at      : {year: 2017, month: 9, day: 8},
        show            : false
    },
    comic_igor_grom_9                                                       : {
        name            : "Игорь Гром #9 Голодные духи, часть 3",
        number          : "9",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-9-hungry-ghosts-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom", "character_valentin_kaligari_gashparov"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_igor_grom_book_2", "comic_igor_grom_volume_2"],
        previous_comics : ["comic_igor_grom_8"],
        next_comics     : ["comic_igor_grom_10"],
        release_at      : {year: 2017, month: 9, day: 11},
        show            : false
    },
    comic_planeswalkers_9                                                   : {
        name            : "Мироходцы #9 Луна, часть 3",
        number          : "9",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-9-moon-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_seryi_volk", "character_luna"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]}],
        including_comics: ["comic_planeswalkers_book_2", "comic_planeswalkers_volume_2"],
        previous_comics : ["comic_planeswalkers_8"],
        next_comics     : ["comic_planeswalkers_10"],
        release_at      : {year: 2017, month: 9, day: 15},
        show            : false
    },
    comic_exlibrium_35                                                      : {
        name            : "Экслибриум #35 Хозяйка дорог, часть 1",
        number          : "35",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-35-mistress-of-roads-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_7"],
        previous_comics : ["comic_exlibrium_34"],
        next_comics     : ["comic_exlibrium_36"],
        release_at      : {year: 2017, month: 9, day: 20},
        show            : false
    },
    comic_meteora_35                                                        : {
        name            : "Метеора #35 Танцуй, Серебристая леди",
        number          : "35",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-35-dance-silver-lady.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_6"],
        previous_comics : ["comic_meteora_34"],
        next_comics     : ["comic_meteora_36"],
        release_at      : {year: 2017, month: 9, day: 25},
        show            : false
    },
    comic_black_dog_its_time_1                                              : {
        name            : "Чёрный Пёс: Своё время, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/black_dog_its_time/black-dog-its-time-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_koroleva_gnili", "character_chyornyi_pyos"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_black_dog_its_time"],
        previous_comics : ["comic_besoboy_50"],
        next_comics     : ["comic_black_dog_its_time_2"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : false
    },
    comic_besoboy_vol_2_book_1                                              : {
        name            : "Бесобой Vol.2. Книга 1: Исход",
        number          : "1",
        type            : "hardcover_book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-book-1-exodus.png`,
            aspect_ratio: 598 / 900
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_pavel_ocheredko", "character_shmyg", "character_yana",
                           "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        contained_comics: ["comic_besoboy_vol_2_1", "comic_besoboy_vol_2_2", "comic_besoboy_vol_2_3",
                           "comic_besoboy_vol_2_4", "comic_besoboy_vol_2_5"],
        previous_comics : ["comic_besoboy_volume_9"],
        next_comics     : ["comic_besoboy_vol_2_book_2"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : true
    },
    comic_besoboy_vol_2_volume_1                                            : {
        name            : "Бесобой Vol.2. Том 1: Исход",
        number          : "1",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-volume-1-exodus.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_pavel_ocheredko", "character_shmyg", "character_yana",
                           "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        contained_comics: ["comic_besoboy_vol_2_1", "comic_besoboy_vol_2_2", "comic_besoboy_vol_2_3",
                           "comic_besoboy_vol_2_4", "comic_besoboy_vol_2_5"],
        previous_comics : ["comic_besoboy_volume_9"],
        next_comics     : ["comic_besoboy_vol_2_volume_2"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : true
    },
    comic_igor_grom_book_1                                                  : {
        name            : "Игорь Гром. Книга 1: Находится на реконструкции",
        number          : "1",
        type            : "hardcover_book",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-book-1-under-reconstruction.png`,
            aspect_ratio: 598 / 900
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom", "character_kocit", "character_stiks"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_ivan_yelyasov", positions: ["artist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        contained_comics: ["comic_igor_grom_1", "comic_igor_grom_2", "comic_igor_grom_3", "comic_igor_grom_4",
                           "comic_igor_grom_5", "comic_igor_grom_6"],
        previous_comics : ["comic_major_grom_volume_8"],
        next_comics     : ["comic_igor_grom_book_2"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : true
    },
    comic_igor_grom_volume_1                                                : {
        name            : "Игорь Гром. Том 1: Находится на реконструкции",
        number          : "1",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-volume-1-under-reconstruction.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom", "character_kocit", "character_stiks"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_ivan_yelyasov", positions: ["artist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        contained_comics: ["comic_igor_grom_1", "comic_igor_grom_2", "comic_igor_grom_3", "comic_igor_grom_4",
                           "comic_igor_grom_5", "comic_igor_grom_6"],
        previous_comics : ["comic_major_grom_volume_8"],
        next_comics     : ["comic_igor_grom_volume_2"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : true
    },
    comic_allies_book_1                                                     : {
        name            : "Союзники. Книга 1: Перед рассветом",
        number          : "1",
        type            : "hardcover_book",
        cover_file      : {url: `${comicImagePath}/allies/allies-book-1-before-dawn.png`, aspect_ratio: 598 / 900},
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhonni", "character_dzhoshua_donato", "character_lotta_lemke",
                           "character_sadap_rahmani", "character_nika_chaikina"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        contained_comics: ["comic_allies_1", "comic_allies_2", "comic_allies_3", "comic_allies_4"],
        previous_comics : ["comic_red_fury_volume_9"],
        next_comics     : ["comic_allies_book_2"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : true
    },
    comic_allies_volume_1                                                   : {
        name            : "Союзники. Том 1: Перед рассветом",
        number          : "1",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/allies/allies-volume-1-before-dawn.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhonni", "character_dzhoshua_donato", "character_lotta_lemke",
                           "character_sadap_rahmani", "character_nika_chaikina"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        contained_comics: ["comic_allies_1", "comic_allies_2", "comic_allies_3", "comic_allies_4"],
        previous_comics : ["comic_red_fury_volume_9"],
        next_comics     : ["comic_allies_volume_2"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : true
    },
    comic_planeswalkers_book_1                                              : {
        name            : "Мироходцы. Книга 1: Кровь богов",
        number          : "1",
        type            : "hardcover_book",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-book-1-blood-of-gods.jpg`,
            aspect_ratio: 598 / 900
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_diana_de_maridor", "character_mars", "character_seryi_volk",
                           "character_andrei_radov", "character_kseniya_radova"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        contained_comics: ["comic_planeswalkers_1", "comic_planeswalkers_2", "comic_planeswalkers_3",
                           "comic_planeswalkers_4", "comic_planeswalkers_5", "comic_planeswalkers_6"],
        previous_comics : ["comic_monk_volume_8"],
        next_comics     : ["comic_planeswalkers_book_2"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : true
    },
    comic_planeswalkers_volume_1                                            : {
        name            : "Мироходцы. Том 1: Кровь богов",
        number          : "1",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-volume-1-blood-of-gods.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_diana_de_maridor", "character_mars", "character_seryi_volk",
                           "character_andrei_radov", "character_kseniya_radova"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        contained_comics: ["comic_planeswalkers_1", "comic_planeswalkers_2", "comic_planeswalkers_3",
                           "comic_planeswalkers_4", "comic_planeswalkers_5", "comic_planeswalkers_6"],
        previous_comics : ["comic_monk_volume_8"],
        next_comics     : ["comic_planeswalkers_volume_2"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : true
    },
    comic_exlibrium_volume_5                                                : {
        name            : "Экслибриум том 5: Вот дом, который...",
        number          : "5",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-volume-5-here-is-house-that.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_24", "comic_exlibrium_25", "comic_exlibrium_26", "comic_exlibrium_27",
                           "comic_exlibrium_28", "comic_exlibrium_29"],
        previous_comics : ["comic_exlibrium_volume_4"],
        next_comics     : ["comic_exlibrium_volume_6"],
        release_at      : {year: 2017, month: 8, day: 28},
        show            : true
    },
    comic_meteora_volume_5                                                  : {
        name            : "Метеора том 5: Одной крови",
        number          : "5",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-volume-5-of-same-blood.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_26", "comic_meteora_27", "comic_meteora_28", "comic_meteora_29",
                           "comic_meteora_30"],
        previous_comics : ["comic_meteora_volume_4"],
        next_comics     : ["comic_meteora_volume_6"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : true
    },
    comic_adventures_of_kochi_and_friends_funny_sketches                    : {
        name      : "Приключения Коти и друзей. Весёлые этюды",
        type      : "book",
        cover_file: {
            url         : `${comicImagePath}/childrens_comics/adventures-of-kochi-and-friends-funny-sketches.png`,
            aspect_ratio: 907 / 604
        },
        ranges    : ["range_childrens_comics", "range_authors_comics"],
        authors   : [{author_id: "author_maxim_ananyin", positions: ["artist", "colorist", "screenwriter"]}],
        release_at: {year: 2017, month: 9, day: 28},
        show      : true
    },
    comic_jackets_and_revolvers_volume_1                                    : {
        name       : "Пиджаки и Револьверы. Том 1: Ящик раздора",
        number     : "1",
        type       : "book",
        cover_file : {
            url         : `${comicImagePath}/authors_comics/jackets_and_revolvers/jackets-and-revolvers-volume-1-box-of-discord.jpg`,
            aspect_ratio: 1004 / 1536
        },
        ranges     : ["range_authors_comics"],
        authors    : [{author_id: "author_yulia_zhuravleva", positions: ["artist", "colorist", "screenwriter"]},
                      {author_id: "author_ekaterina_morozova", positions: ["screenwriter"]}],
        next_comics: ["comic_jackets_and_revolvers_volume_2"],
        release_at : {year: 2017, month: 9, day: 28},
        show       : true
    },
    comic_unicorn_conspiracy_volume_1                                       : {
        name       : "Заговор Единорогов. Том 1. Наследие",
        number     : "1",
        type       : "book",
        cover_file : {
            url         : `${comicImagePath}/authors_comics/unicorn_conspiracy/unicorn-conspiracy-volume-1-legacy.jpg`,
            aspect_ratio: 911 / 1280
        },
        ranges     : ["range_authors_comics"],
        authors    : [{author_id: "author_alex_hatchett", positions: ["artist", "screenwriter"]}],
        next_comics: ["comic_unicorn_conspiracy_volume_2"],
        release_at : {year: 2017, month: 9, day: 28},
        show       : true
    },
    comic_tagar_volume_1_prologue                                           : {
        name            : "Тагар. Том 1, пролог",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-1-prologue.jpg`,
            aspect_ratio: 1213 / 1717
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_1"],
        next_comics     : ["comic_tagar_volume_1_chapter_1"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : false
    },
    comic_tagar_volume_1_chapter_1                                          : {
        name            : "Тагар. Том 1, глава 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-1-chapter-1.jpg`,
            aspect_ratio: 1213 / 1717
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_1"],
        previous_comics : ["comic_tagar_volume_1_prologue"],
        next_comics     : ["comic_tagar_volume_1_chapter_2"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : false
    },
    comic_tagar_volume_1_chapter_2                                          : {
        name            : "Тагар. Том 1, глава 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-1-chapter-2.jpg`,
            aspect_ratio: 1213 / 1717
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_1"],
        previous_comics : ["comic_tagar_volume_1_chapter_1"],
        next_comics     : ["comic_tagar_volume_1_chapter_3"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : false
    },
    comic_tagar_volume_1_chapter_3                                          : {
        name            : "Тагар. Том 1, глава 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-1-chapter-3.jpg`,
            aspect_ratio: 1213 / 1717
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_1"],
        previous_comics : ["comic_tagar_volume_1_chapter_2"],
        next_comics     : ["comic_tagar_volume_1_chapter_4"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : false
    },
    comic_tagar_volume_1_chapter_4                                          : {
        name            : "Тагар. Том 1, глава 4",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-1-chapter-4.jpg`,
            aspect_ratio: 1213 / 1717
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_1"],
        previous_comics : ["comic_tagar_volume_1_chapter_3"],
        next_comics     : ["comic_tagar_volume_2_chapter_1"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : false
    },
    comic_tagar_volume_1                                                    : {
        name            : "Тагар. Том 1",
        number          : "1",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/bubble_manga/tagar/tagar-volume-1.jpg`, aspect_ratio: 1050 / 1600},
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        contained_comics: ["comic_tagar_volume_1_prologue", "comic_tagar_volume_1_chapter_1",
                           "comic_tagar_volume_1_chapter_2", "comic_tagar_volume_1_chapter_3",
                           "comic_tagar_volume_1_chapter_4"],
        next_comics     : ["comic_tagar_volume_2"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : true
    },
    comic_friends_comics                                                    : {
        name            : "ДружКомикс: В поисках первородного мема",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/friends_comics/friends-comics-in-search-of-original-meme.jpeg`,
            aspect_ratio: 600 / 869
        },
        ranges          : ["range_friends_comics"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["artist", "screenwriter"]}],
        contained_comics: ["comic_friends_comics_1", "comic_friends_comics_2", "comic_friends_comics_3",
                           "comic_friends_comics_4", "comic_friends_comics_5", "comic_friends_comics_6",
                           "comic_friends_comics_7", "comic_friends_comics_8", "comic_friends_comics_9",
                           "comic_friends_comics_10", "comic_friends_comics_11", "comic_friends_comics_12",
                           "comic_friends_comics_13", "comic_friends_comics_14", "comic_friends_comics_15",
                           "comic_friends_comics_16", "comic_friends_comics_17", "comic_friends_comics_18",
                           "comic_friends_comics_19", "comic_friends_comics_20", "comic_friends_comics_21",
                           "comic_friends_comics_22", "comic_friends_comics_23", "comic_friends_comics_24",
                           "comic_friends_comics_25", "comic_friends_comics_26", "comic_friends_comics_27"],
        release_at      : {year: 2017, month: 9, day: 28},
        show            : true
    },
    comic_cat_and_mouse_volume_3                                            : {
        name           : "Кошки-мышки том 3: Счастье в твоих руках",
        number         : "3",
        type           : "single",
        cover_file     : {
            url         : `${comicImagePath}/authors_comics/cat_and_mouse/cat-and-mouse-volume-3-happiness-is-in-your-hands.png`,
            aspect_ratio: 900 / 628
        },
        ranges         : ["range_authors_comics"],
        authors        : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]}],
        previous_comics: ["comic_cat_and_mouse_volume_2"],
        release_at     : {year: 2017, month: 9, day: 28},
        show           : true
    },
    comic_allies_10                                                         : {
        name            : "Союзники #10 Условный рефлекс, часть 3",
        number          : "10",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-10-conditioned-reflex-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_artur_haksli", "character_dzhessi_rodrigez", "character_dzhonni",
                           "character_dzhoshua_donato", "character_lotta_lemke", "character_sadap_rahmani",
                           "character_nika_chaikina"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_book_2", "comic_allies_volume_3"],
        previous_comics : ["comic_allies_9"],
        next_comics     : ["comic_allies_11"],
        release_at      : {year: 2017, month: 10, day: 2},
        show            : false
    },
    comic_krutiks_1                                                         : {
        name            : "Крутиксы #1",
        number          : "1",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/childrens_comics/krutiks/krutiks-1.jpg`, aspect_ratio: 1535 / 2338},
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist", "screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_natalya_nesterenko", positions: ["artist"]},
                           {author_id: "author_yulia_garibova", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_krutiks_cool_comics_book_1"],
        next_comics     : ["comic_krutiks_2"],
        release_at      : {year: 2017, month: 10, day: 3},
        show            : false
    },
    comic_besoboy_vol_2_10                                                  : {
        name            : "Бесобой Vol.2 #10 Падение, часть 3",
        number          : "10",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-10-fall-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_avaddon_bezzhalostnyi", "character_baffort_rakshor", "character_satana",
                           "character_tanahiya_neumolimaya", "character_shmyg", "character_yarh_smertonosnyi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_volume_2"],
        previous_comics : ["comic_besoboy_vol_2_9"],
        next_comics     : ["comic_besoboy_vol_2_11"],
        release_at      : {year: 2017, month: 10, day: 5},
        show            : false
    },
    comic_igor_grom_10                                                      : {
        name            : "Игорь Гром #10 Голодные духи, часть 4",
        number          : "10",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-10-hungry-ghosts-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_igor_grom_book_2", "comic_igor_grom_volume_2"],
        previous_comics : ["comic_igor_grom_9"],
        next_comics     : ["comic_igor_grom_11"],
        release_at      : {year: 2017, month: 10, day: 10},
        show            : false
    },
    comic_planeswalkers_10                                                  : {
        name            : "Мироходцы #10 Луна, часть 4",
        number          : "10",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-10-moon-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_seryi_volk", "character_luna"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]}],
        including_comics: ["comic_planeswalkers_book_2", "comic_planeswalkers_volume_2"],
        previous_comics : ["comic_planeswalkers_9"],
        next_comics     : ["comic_planeswalkers_11"],
        release_at      : {year: 2017, month: 10, day: 15},
        show            : false
    },
    comic_exlibrium_36                                                      : {
        name            : "Экслибриум #36 Хозяйка дорог, часть 2",
        number          : "36",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-36-mistress-of-roads-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_7"],
        previous_comics : ["comic_exlibrium_35"],
        next_comics     : ["comic_exlibrium_37"],
        release_at      : {year: 2017, month: 10, day: 20},
        show            : false
    },
    comic_meteora_36                                                        : {
        name            : "Метеора #36 Зверолов",
        number          : "36",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-36-trapper.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_7"],
        previous_comics : ["comic_meteora_35"],
        next_comics     : ["comic_meteora_37"],
        release_at      : {year: 2017, month: 10, day: 25},
        show            : false
    },
    comic_black_dog_its_time_2                                              : {
        name            : "Чёрный Пёс: Своё время, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/black_dog_its_time/black-dog-its-time-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_koroleva_gnili", "character_chyornyi_pyos"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_black_dog_its_time"],
        previous_comics : ["comic_black_dog_its_time_1"],
        next_comics     : ["comic_black_dog_its_time_3"],
        release_at      : {year: 2017, month: 10, day: 28},
        show            : false
    },
    comic_allies_11                                                         : {
        name            : "Союзники #11 Условный рефлекс, часть 4",
        number          : "11",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-11-conditioned-reflex-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_artur_haksli", "character_dzhessi_rodrigez", "character_dzhonni",
                           "character_dzhoshua_donato", "character_lotta_lemke", "character_sadap_rahmani",
                           "character_nika_chaikina"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_book_2", "comic_allies_volume_3"],
        previous_comics : ["comic_allies_10"],
        next_comics     : ["comic_allies_12"],
        release_at      : {year: 2017, month: 11, day: 1},
        show            : false
    },
    comic_krutiks_2                                                         : {
        name            : "Крутиксы #2",
        number          : "2",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/childrens_comics/krutiks/krutiks-2.jpg`, aspect_ratio: 1535 / 2338},
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist", "screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]}],
        including_comics: ["comic_krutiks_cool_comics_book_1"],
        previous_comics : ["comic_krutiks_1"],
        next_comics     : ["comic_krutiks_3"],
        release_at      : {year: 2017, month: 11, day: 3},
        show            : false
    },
    comic_besoboy_vol_2_11                                                  : {
        name            : "Бесобой Vol.2 #11 Часовой, часть 1",
        number          : "11",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-11-sentinel-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_pavel_ocheredko", "character_semiaza", "character_shmyg",
                           "character_yana", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]},
                           {author_id: "author_eric_bragalyan", positions: ["artist"]}],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_volume_3"],
        previous_comics : ["comic_besoboy_vol_2_10"],
        next_comics     : ["comic_besoboy_vol_2_12"],
        release_at      : {year: 2017, month: 11, day: 5},
        show            : false
    },
    comic_igor_grom_11                                                      : {
        name            : "Игорь Гром #11 Умный человек, часть 1",
        number          : "11",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-11-smart-man-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_igor_grom",
                           "character_aheron", "character_kocit", "character_stiks", "character_flegeton",
                           "character_umnyj_chelovek"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_book_2", "comic_igor_grom_volume_3"],
        previous_comics : ["comic_igor_grom_10"],
        next_comics     : ["comic_igor_grom_12"],
        release_at      : {year: 2017, month: 11, day: 10},
        show            : false
    },
    comic_planeswalkers_11                                                  : {
        name            : "Мироходцы #11 Притяжение полюсов, часть 1",
        number          : "11",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-11-polar-attraction-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_vasilisa_premudraya", "character_diana_de_maridor", "character_koschei",
                           "character_magistr", "character_seryi_volk", "character_andrei_radov",
                           "character_kseniya_radova"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        including_comics: ["comic_planeswalkers_book_2", "comic_planeswalkers_volume_3"],
        previous_comics : ["comic_planeswalkers_10"],
        next_comics     : ["comic_planeswalkers_12"],
        release_at      : {year: 2017, month: 11, day: 15},
        show            : false
    },
    comic_exlibrium_37                                                      : {
        name            : "Экслибриум #37 Хозяйка дорог, часть 3",
        number          : "37",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-37-mistress-of-roads-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_7"],
        previous_comics : ["comic_exlibrium_36"],
        next_comics     : ["comic_exlibrium_38"],
        release_at      : {year: 2017, month: 11, day: 20},
        show            : false
    },
    comic_meteora_37                                                        : {
        name            : "Метеора #37 Вольная птица, часть 1",
        number          : "37",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-37-free-bird-part-1.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_7"],
        previous_comics : ["comic_meteora_36"],
        next_comics     : ["comic_meteora_38"],
        release_at      : {year: 2017, month: 11, day: 24},
        show            : false
    },
    comic_black_dog_its_time_3                                              : {
        name            : "Чёрный Пёс: Своё время, часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/black_dog_its_time/black-dog-its-time-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_koroleva_gnili", "character_chyornyi_pyos"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_black_dog_its_time"],
        previous_comics : ["comic_black_dog_its_time_2"],
        next_comics     : ["comic_black_dog_its_time_4"],
        release_at      : {year: 2017, month: 11, day: 27},
        show            : false
    },
    comic_allies_12                                                         : {
        name            : "Союзники #12 Огненная земля, часть 1",
        number          : "12",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-12-tierra-del-fuego-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_artur_haksli", "character_dzhessi_rodrigez", "character_dzhonni",
                           "character_sadap_rahmani", "character_morel"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]}],
        including_comics: ["comic_allies_book_2", "comic_allies_volume_3"],
        previous_comics : ["comic_allies_11"],
        next_comics     : ["comic_allies_13"],
        release_at      : {year: 2017, month: 12, day: 1},
        show            : false
    },
    comic_krutiks_3                                                         : {
        name            : "Крутиксы #3",
        number          : "3",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/childrens_comics/krutiks/krutiks-3.jpg`, aspect_ratio: 1535 / 2338},
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_evgeny_yakovlev", positions: ["colorist", "screenwriter"]},
                           {author_id: "author_marina_sukhareva", positions: ["artist"]}],
        including_comics: ["comic_krutiks_cool_comics_book_1"],
        previous_comics : ["comic_krutiks_2"],
        next_comics     : ["comic_krutiks_1_2018"],
        release_at      : {year: 2017, month: 12, day: 3},
        show            : false
    },
    comic_besoboy_vol_2_12                                                  : {
        name            : "Бесобой Vol.2 #12 Часовой, часть 2",
        number          : "12",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-12-sentinel-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_pavel_ocheredko", "character_semiaza", "character_shmyg",
                           "character_yana", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]},
                           {author_id: "author_eric_bragalyan", positions: ["artist"]}],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_volume_3"],
        previous_comics : ["comic_besoboy_vol_2_11"],
        next_comics     : ["comic_besoboy_vol_2_13"],
        release_at      : {year: 2017, month: 12, day: 5},
        show            : false
    },
    comic_igor_grom_12                                                      : {
        name            : "Игорь Гром #12 Умный человек, часть 2",
        number          : "12",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-12-smart-man-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_igor_grom",
                           "character_aheron", "character_kocit", "character_stiks", "character_flegeton",
                           "character_umnyj_chelovek"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_book_2", "comic_igor_grom_volume_3"],
        previous_comics : ["comic_igor_grom_11"],
        next_comics     : ["comic_igor_grom_13"],
        release_at      : {year: 2017, month: 12, day: 11},
        show            : false
    },
    comic_planeswalkers_12                                                  : {
        name            : "Мироходцы #12 Притяжение полюсов, часть 2",
        number          : "12",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-12-polar-attraction-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_vasilisa_premudraya", "character_diana_de_maridor", "character_koschei",
                           "character_magistr", "character_seryi_volk", "character_andrei_radov",
                           "character_kseniya_radova"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        including_comics: ["comic_planeswalkers_book_2", "comic_planeswalkers_volume_3"],
        previous_comics : ["comic_planeswalkers_11"],
        next_comics     : ["comic_planeswalkers_13"],
        release_at      : {year: 2017, month: 12, day: 15},
        show            : false
    },
    comic_exlibrium_38                                                      : {
        name            : "Экслибриум #38 Сказочке конец, часть 1",
        number          : "38",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-38-end-of-fairy-tale-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_7"],
        previous_comics : ["comic_exlibrium_37"],
        next_comics     : ["comic_exlibrium_39"],
        release_at      : {year: 2017, month: 12, day: 20},
        show            : false
    },
    comic_black_dog_its_time_4                                              : {
        name            : "Чёрный Пёс: Своё время, часть 4",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/black_dog_its_time/black-dog-its-time-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_koroleva_gnili", "character_chyornyi_pyos"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_black_dog_its_time"],
        previous_comics : ["comic_black_dog_its_time_3"],
        release_at      : {year: 2017, month: 12, day: 22},
        show            : false
    },
    comic_besoboy_and_planeswalkers_new_life_electronic                     : {
        ...comic_besoboy_and_planeswalkers_new_life,
        including_comics: ["comic_besoboy_and_planeswalkers_new_life_printed"],
        previous_comics : ["comic_planeswalkers_21", "comic_besoboy_vol_2_50"],
        show            : false
    },
    comic_besoboy_and_planeswalkers_new_life_printed                        : {
        ...comic_besoboy_and_planeswalkers_new_life,
        contained_comics: ["comic_besoboy_and_planeswalkers_new_life_electronic"],
        previous_comics : ["comic_planeswalkers_volume_4", "comic_besoboy_vol_2_volume_11"],
        show            : true
    },
    comic_meteora_38                                                        : {
        name            : "Метеора #38 Вольная птица, часть 2",
        number          : "38",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-38-free-bird-part-2.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_7"],
        previous_comics : ["comic_meteora_37"],
        next_comics     : ["comic_meteora_39"],
        release_at      : {year: 2017, month: 12, day: 25},
        show            : false
    },
    comic_allies_13                                                         : {
        name            : "Союзники #13 Огненная земля, часть 2",
        number          : "13",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-13-tierra-del-fuego-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_artur_haksli", "character_dzhessi_rodrigez", "character_dzhonni",
                           "character_sadap_rahmani", "character_morel"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]}],
        including_comics: ["comic_allies_book_2", "comic_allies_volume_3"],
        previous_comics : ["comic_allies_12"],
        next_comics     : ["comic_allies_14"],
        release_at      : {year: 2018, month: 1, day: 1},
        show            : false
    },
    comic_krutiks_1_2018                                                    : {
        name            : "Крутиксы #1 (2018)",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-1-2018.jpg`,
            aspect_ratio: 1535 / 2338
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_evgeny_yakovlev", positions: ["colorist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_yulia_garibova", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_krutiks_cool_comics_book_1"],
        previous_comics : ["comic_krutiks_3"],
        next_comics     : ["comic_krutiks_2_2018"],
        release_at      : {year: 2018, month: 1, day: 3},
        show            : false
    },
    comic_besoboy_vol_2_13                                                  : {
        name            : "Бесобой Vol.2 #13 Откровения",
        number          : "13",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-13-revelations.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_volume_3"],
        previous_comics : ["comic_besoboy_vol_2_12"],
        next_comics     : ["comic_besoboy_vol_2_14"],
        release_at      : {year: 2018, month: 1, day: 5},
        show            : false
    },
    comic_igor_grom_13                                                      : {
        name            : "Игорь Гром #13 Умный человек, часть 3",
        number          : "13",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-13-smart-man-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_igor_grom",
                           "character_aheron", "character_kocit", "character_stiks", "character_flegeton",
                           "character_umnyj_chelovek"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_book_2", "comic_igor_grom_volume_3"],
        previous_comics : ["comic_igor_grom_12"],
        next_comics     : ["comic_igor_grom_14"],
        release_at      : {year: 2018, month: 1, day: 5},
        show            : false
    },
    comic_planeswalkers_13                                                  : {
        name            : "Мироходцы #13 Лицом к лицу, часть 1",
        number          : "13",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-13-face-to-face-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_diana_de_maridor", "character_magistr", "character_mars", "character_seryi_volk",
                           "character_andrei_radov", "character_kseniya_radova", "character_luna"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        including_comics: ["comic_planeswalkers_book_2", "comic_planeswalkers_volume_3"],
        previous_comics : ["comic_planeswalkers_12"],
        next_comics     : ["comic_planeswalkers_14"],
        release_at      : {year: 2018, month: 1, day: 15},
        show            : false
    },
    comic_exlibrium_39                                                      : {
        name            : "Экслибриум #39 Сказочке конец, часть 2",
        number          : "39",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-39-end-of-fairy-tale-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_7"],
        previous_comics : ["comic_exlibrium_38"],
        next_comics     : ["comic_exlibrium_40"],
        release_at      : {year: 2018, month: 1, day: 19},
        show            : false
    },
    comic_meteora_39                                                        : {
        name            : "Метеора #39 Вольная птица, часть 3",
        number          : "39",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-39-free-bird-part-3.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_7"],
        previous_comics : ["comic_meteora_38"],
        next_comics     : ["comic_meteora_40"],
        release_at      : {year: 2018, month: 1, day: 25},
        show            : false
    },
    comic_teo_crop_circles_1                                                : {
        name            : "Тео: Круги на полях, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/teo_crop_circles/teo-crop-circles-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_teo"],
        authors         : [{author_id: "author_anna_bulatova", positions: ["screenwriter"]},
                           {author_id: "author_roman_titov", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        including_comics: ["comic_teo_crop_circles"],
        previous_comics : ["comic_meteora_50"],
        next_comics     : ["comic_teo_crop_circles_2"],
        release_at      : {year: 2018, month: 1, day: 29},
        show            : false
    },
    comic_allies_14                                                         : {
        name            : "Союзники #14 Имаго",
        number          : "14",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/allies/allies-14-imago.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_agness_ignis", "character_dzhoshua_donato", "character_ilaias",
                           "character_lotta_lemke", "character_nika_chaikina"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_allies_book_2", "comic_allies_volume_3"],
        previous_comics : ["comic_allies_13"],
        next_comics     : ["comic_allies_15"],
        release_at      : {year: 2018, month: 2, day: 1},
        show            : false
    },
    comic_krutiks_2_2018                                                    : {
        name            : "Крутиксы #2 (2018)",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-2-2018.jpg`,
            aspect_ratio: 1535 / 2339
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist", "screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]}],
        including_comics: ["comic_krutiks_cool_comics_book_1"],
        previous_comics : ["comic_krutiks_1_2018"],
        next_comics     : ["comic_krutiks_3_2018"],
        release_at      : {year: 2018, month: 2, day: 3},
        show            : false
    },
    comic_besoboy_vol_2_14                                                  : {
        name            : "Бесобой Vol.2 #14 Инструмент Бога",
        number          : "14",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-14-instrument-of-god.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_satana", "character_yana"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_book_2", "comic_besoboy_vol_2_volume_3"],
        previous_comics : ["comic_besoboy_vol_2_13"],
        next_comics     : ["comic_besoboy_vol_2_15"],
        release_at      : {year: 2018, month: 2, day: 5},
        show            : false
    },
    comic_igor_grom_14                                                      : {
        name            : "Игорь Гром #14 Умный человек, часть 4",
        number          : "14",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-14-smart-man-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_igor_grom",
                           "character_aheron", "character_kocit", "character_stiks", "character_flegeton",
                           "character_umnyj_chelovek"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_book_2", "comic_igor_grom_volume_3"],
        previous_comics : ["comic_igor_grom_13"],
        next_comics     : ["comic_igor_grom_15"],
        release_at      : {year: 2018, month: 2, day: 9},
        show            : false
    },
    comic_planeswalkers_14                                                  : {
        name            : "Мироходцы #14 Лицом к лицу, часть 2",
        number          : "14",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-14-face-to-face-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_diana_de_maridor", "character_magistr", "character_mars", "character_seryi_volk",
                           "character_andrei_radov", "character_kseniya_radova"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        including_comics: ["comic_planeswalkers_book_2", "comic_planeswalkers_volume_3"],
        previous_comics : ["comic_planeswalkers_13"],
        next_comics     : ["comic_planeswalkers_15"],
        release_at      : {year: 2018, month: 2, day: 15},
        show            : false
    },
    comic_exlibrium_40                                                      : {
        name            : "Экслибриум #40 Сказочке конец, часть 3",
        number          : "40",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-40-end-of-fairy-tale-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_7"],
        previous_comics : ["comic_exlibrium_39"],
        next_comics     : ["comic_exlibrium_41"],
        release_at      : {year: 2018, month: 2, day: 19},
        show            : false
    },
    comic_meteora_40                                                        : {
        name            : "Метеора #40 Вольная птица, часть 4",
        number          : "40",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-40-free-bird-part-4.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_8"],
        previous_comics : ["comic_meteora_39"],
        next_comics     : ["comic_meteora_41"],
        release_at      : {year: 2018, month: 2, day: 26},
        show            : false
    },
    comic_teo_crop_circles_2                                                : {
        name            : "Тео: Круги на полях, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/teo_crop_circles/teo-crop-circles-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_teo"],
        authors         : [{author_id: "author_anna_bulatova", positions: ["screenwriter"]},
                           {author_id: "author_roman_titov", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        including_comics: ["comic_teo_crop_circles"],
        previous_comics : ["comic_teo_crop_circles_1"],
        next_comics     : ["comic_teo_crop_circles_3"],
        release_at      : {year: 2018, month: 2, day: 26},
        show            : false
    },
    comic_witch_hunt_prologue                                               : {
        name            : "Охота на ведьм: Пролог",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/witch_hunt/witch-hunt-prologue.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_crossovers"],
        characters      : ["character_avgust_van_der_holt"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]}],
        including_comics: ["comic_witch_hunt"],
        next_comics     : ["comic_allies_15"],
        release_at      : {year: 2018, month: 3, day: 1},
        show            : false
    },
    comic_krutiks_3_2018                                                    : {
        name            : "Крутиксы #3 (2018)",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-3-2018.jpg`,
            aspect_ratio: 1535 / 2338
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_alexandra_bizyaeva", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist"]}],
        including_comics: ["comic_krutiks_cool_comics_book_2"],
        previous_comics : ["comic_krutiks_2_2018"],
        next_comics     : ["comic_krutiks_4_2018"],
        release_at      : {year: 2018, month: 3, day: 3},
        show            : false
    },
    comic_allies_15                                                         : {
        name            : "Союзники #15 Охота на ведьм",
        number          : "15",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/allies/allies-15-witch-hunt.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_crossovers", "range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_agness_ignis", "character_artur_haksli",
                           "character_dzhessi_rodrigez", "character_dzhonni", "character_dzhoshua_donato",
                           "character_ilaias", "character_lotta_lemke", "character_sadap_rahmani",
                           "character_nika_chaikina", "character_miko_van_der_holt"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_witch_hunt"],
        previous_comics : ["comic_allies_14", "comic_witch_hunt_prologue"],
        next_comics     : ["comic_besoboy_vol_2_15", "comic_allies_16"],
        release_at      : {year: 2018, month: 3, day: 5},
        show            : false
    },
    comic_besoboy_vol_2_15                                                  : {
        name            : "Бесобой Vol.2 #15 Охота на ведьм",
        number          : "15",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-15-witch-hunt.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_crossovers", "range_besoboy_vol_2"],
        characters      : ["character_balor", "character_pavel_ocheredko", "character_shmyg", "character_yana",
                           "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_witch_hunt"],
        previous_comics : ["comic_besoboy_vol_2_14", "comic_allies_15"],
        next_comics     : ["comic_igor_grom_15", "comic_besoboy_vol_2_16"],
        release_at      : {year: 2018, month: 3, day: 5},
        show            : false
    },
    comic_igor_grom_15                                                      : {
        name            : "Игорь Гром #15 Охота на ведьм",
        number          : "15",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/igor_grom/igor-grom-15-witch-hunt.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_crossovers", "range_igor_grom"],
        characters      : ["character_ulya"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_oksana_turlyay", positions: ["artist"]}],
        including_comics: ["comic_witch_hunt"],
        previous_comics : ["comic_igor_grom_14", "comic_besoboy_vol_2_15"],
        next_comics     : ["comic_planeswalkers_15", "comic_igor_grom_16"],
        release_at      : {year: 2018, month: 3, day: 9},
        show            : false
    },
    comic_planeswalkers_15                                                  : {
        name            : "Мироходцы #15 Охота на ведьм",
        number          : "15",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-15-witch-hunt.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_crossovers", "range_planeswalkers"],
        characters      : ["character_avgust_van_der_holt", "character_bulat_gadzhiev", "character_diana_de_maridor",
                           "character_magistr", "character_seryi_volk", "character_andrei_radov"],
        authors         : [{author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_eric_bragalyan", positions: ["artist"]}],
        including_comics: ["comic_witch_hunt"],
        previous_comics : ["comic_planeswalkers_14", "comic_igor_grom_15"],
        next_comics     : ["comic_witch_hunt_finale", "comic_planeswalkers_16"],
        release_at      : {year: 2018, month: 3, day: 15},
        show            : false
    },
    comic_exlibrium_41                                                      : {
        name            : "Экслибриум #41 Переворот, часть 1",
        number          : "41",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-41-revolution-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_8"],
        previous_comics : ["comic_exlibrium_40"],
        next_comics     : ["comic_exlibrium_42"],
        release_at      : {year: 2018, month: 3, day: 20},
        show            : false
    },
    comic_meteora_41                                                        : {
        name            : "Метеора #41 Вольная птица, часть 5",
        number          : "41",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-41-free-bird-part-5.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_8"],
        previous_comics : ["comic_meteora_40"],
        next_comics     : ["comic_meteora_42"],
        release_at      : {year: 2018, month: 3, day: 26},
        show            : false
    },
    comic_teo_crop_circles_3                                                : {
        name            : "Тео: Круги на полях, часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/teo_crop_circles/teo-crop-circles-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_teo"],
        authors         : [{author_id: "author_anna_bulatova", positions: ["screenwriter"]},
                           {author_id: "author_roman_titov", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        including_comics: ["comic_teo_crop_circles"],
        previous_comics : ["comic_teo_crop_circles_2"],
        next_comics     : ["comic_teo_crop_circles_4"],
        release_at      : {year: 2018, month: 3, day: 28},
        show            : false
    },
    comic_witch_hunt_finale                                                 : {
        name            : "Охота на ведьм: Финал",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/witch_hunt/witch-hunt-finale.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_crossovers"],
        including_comics: ["comic_witch_hunt"],
        previous_comics : ["comic_planeswalkers_15"],
        release_at      : {year: 2018, month: 4, day: 1},
        show            : false
    },
    comic_exlibrium_volume_6                                                : {
        name            : "Экслибриум том 6: Бумажный порез",
        number          : "6",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-volume-6-paper-cut.jpg`,
            aspect_ratio: 643 / 982
        },
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_30", "comic_exlibrium_31", "comic_exlibrium_32", "comic_exlibrium_33",
                           "comic_exlibrium_34"],
        previous_comics : ["comic_exlibrium_volume_5"],
        next_comics     : ["comic_exlibrium_volume_7"],
        release_at      : {year: 2018, month: 1, day: 1},
        show            : true
    },
    comic_meteora_volume_6                                                  : {
        name            : "Метеора том 6: Проверка пульса",
        number          : "6",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-volume-6-pulse-check.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_31", "comic_meteora_32", "comic_meteora_33", "comic_meteora_34",
                           "comic_meteora_35"],
        previous_comics : ["comic_meteora_volume_5"],
        next_comics     : ["comic_meteora_volume_7"],
        release_at      : {year: 2018, month: 1, day: 1},
        show            : true
    },
    comic_black_dog_its_time                                                : {
        name            : "Чёрный Пёс: Своё время",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/black_dog_its_time/black-dog-its-time.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_koroleva_gnili", "character_chyornyi_pyos"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        contained_comics: ["comic_black_dog_its_time_1", "comic_black_dog_its_time_2", "comic_black_dog_its_time_3",
                           "comic_black_dog_its_time_4"],
        previous_comics : ["comic_besoboy_volume_9"],
        release_at      : {year: 2018, month: 1, day: 1},
        show            : true
    },
    comic_allies_16                                                         : {
        name            : "Союзники #16 Без ума, часть 1",
        number          : "16",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/allies/allies-16-crazy-part-1.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_artur_haksli", "character_dzhessi_rodrigez", "character_dzhonni",
                           "character_sadap_rahmani", "character_nika_chaikina", "character_mihail_alvaris"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_volume_4"],
        previous_comics : ["comic_allies_15"],
        next_comics     : ["comic_allies_17"],
        release_at      : {year: 2018, month: 4, day: 1},
        show            : false
    },
    comic_ziggy_and_shmyg_destroy_bubble_universe                           : {
        name       : "Зигги и Шмыг уничтожают вселенную BUBBLE",
        type       : "book",
        cover_file : {
            url         : `${comicImagePath}/inadequate_galaxy/ziggy_and_shmyg/ziggy-and-shmyg-destroy-bubble-universe.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges     : ["range_inadequate_galaxy"],
        characters : ["character_ziggi", "character_shmyg"],
        authors    : [{author_id: "author_vitaly_terletsky", positions: ["screenwriter"]},
                      {author_id: "author_evgeniy_bornyakov", positions: ["artist"]},
                      {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        next_comics: ["comic_ziggy_and_shmyg_save_comiccon"],
        release_at : {year: 2018, month: 4, day: 1},
        show       : true
    },
    comic_krutiks_4_2018                                                    : {
        name            : "Крутиксы #4 (2018)",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-4-2018.jpg`,
            aspect_ratio: 1345 / 2048
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_evgeny_yakovlev", positions: ["colorist", "screenwriter"]},
                           {author_id: "author_marina_sukhareva", positions: ["artist"]}],
        including_comics: ["comic_krutiks_cool_comics_book_2"],
        previous_comics : ["comic_krutiks_3_2018"],
        next_comics     : ["comic_krutiks_5_2018"],
        release_at      : {year: 2018, month: 4, day: 3},
        show            : false
    },
    comic_besoboy_vol_2_16                                                  : {
        name            : "Бесобой Vol.2 #16 Иуда",
        number          : "16",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-16-judas.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_baffort_rakshor", "character_viktor_zelenin"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_alexey_efremov", positions: ["artist"]},
                           {author_id: "author_denis_barbe", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_4"],
        previous_comics : ["comic_besoboy_vol_2_15"],
        next_comics     : ["comic_besoboy_vol_2_17"],
        release_at      : {year: 2018, month: 4, day: 5},
        show            : false
    },
    comic_igor_grom_16                                                      : {
        name            : "Игорь Гром #16 Вспоминай",
        number          : "16",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/igor_grom/igor-grom-16-remember.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_igor_grom"],
        characters      : ["character_ulya", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_4"],
        previous_comics : ["comic_igor_grom_15"],
        next_comics     : ["comic_igor_grom_17"],
        release_at      : {year: 2018, month: 4, day: 9},
        show            : false
    },
    comic_planeswalkers_16                                                  : {
        name            : "Мироходцы #16 Чужая воля",
        number          : "16",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-16-alien-will.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_diana_de_maridor", "character_seryi_volk", "character_andrei_radov",
                           "character_kseniya_radova"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        including_comics: ["comic_planeswalkers_volume_4"],
        previous_comics : ["comic_planeswalkers_15"],
        next_comics     : ["comic_planeswalkers_17"],
        release_at      : {year: 2018, month: 4, day: 16},
        show            : false
    },
    comic_exlibrium_42                                                      : {
        name            : "Экслибриум #42 Переворот, часть 2",
        number          : "42",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-42-revolution-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_8"],
        previous_comics : ["comic_exlibrium_41"],
        next_comics     : ["comic_exlibrium_43"],
        release_at      : {year: 2018, month: 4, day: 20},
        show            : false
    },
    comic_meteora_42                                                        : {
        name            : "Метеора #42 Вольная птица, часть 6",
        number          : "42",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-42-free-bird-part-6.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_8"],
        previous_comics : ["comic_meteora_41"],
        next_comics     : ["comic_meteora_43"],
        release_at      : {year: 2018, month: 4, day: 25},
        show            : false
    },
    comic_teo_crop_circles_4                                                : {
        name            : "Тео: Круги на полях, часть 4",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/teo_crop_circles/teo-crop-circles-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_teo"],
        authors         : [{author_id: "author_anna_bulatova", positions: ["screenwriter"]},
                           {author_id: "author_roman_titov", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        including_comics: ["comic_teo_crop_circles"],
        previous_comics : ["comic_teo_crop_circles_3"],
        release_at      : {year: 2018, month: 4, day: 28},
        show            : false
    },
    comic_besoboy_vol_2_17                                                  : {
        name            : "Бесобой Vol.2 #17 Красный фильтр, часть 1",
        number          : "17",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-17-red-filter-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_pavel_ocheredko", "character_porfirii_petrovich",
                           "character_feliks_dzerzhinskii", "character_yana"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_4"],
        previous_comics : ["comic_besoboy_vol_2_16"],
        next_comics     : ["comic_besoboy_vol_2_18"],
        release_at      : {year: 2018, month: 4, day: 30},
        show            : false
    },
    comic_allies_17                                                         : {
        name            : "Союзники #17 Без ума, часть 2",
        number          : "17",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/allies/allies-17-crazy-part-2.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_artur_haksli", "character_dzhessi_rodrigez", "character_dzhonni",
                           "character_sadap_rahmani", "character_nika_chaikina", "character_mihail_alvaris"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_volume_4"],
        previous_comics : ["comic_allies_16"],
        next_comics     : ["comic_allies_18"],
        release_at      : {year: 2018, month: 4, day: 30},
        show            : false
    },
    comic_krutiks_5_2018                                                    : {
        name            : "Крутиксы #5 (2018)",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-5-2018.jpg`,
            aspect_ratio: 1535 / 2338
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_evgeny_yakovlev", positions: ["colorist"]},
                           {author_id: "author_yulia_garibova", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_krutiks_cool_comics_book_2"],
        previous_comics : ["comic_krutiks_4_2018"],
        next_comics     : ["comic_krutiks_6_2018"],
        release_at      : {year: 2018, month: 5, day: 3},
        show            : false
    },
    comic_igor_grom_17                                                      : {
        name            : "Игорь Гром #17 Метод Локи, часть 1",
        number          : "17",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-17-loki-method-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_ulya", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_igor_grom_volume_4"],
        previous_comics : ["comic_igor_grom_16"],
        next_comics     : ["comic_igor_grom_18"],
        release_at      : {year: 2018, month: 5, day: 10},
        show            : false
    },
    comic_planeswalkers_17                                                  : {
        name            : "Мироходцы #17 Псы войны, часть 1",
        number          : "17",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-17-dogs-of-war-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_bulat_gadzhiev", "character_vasilisa_premudraya", "character_diana_de_maridor",
                           "character_seryi_volk", "character_andrei_radov", "character_kseniya_radova",
                           "character_luna"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexander_kirillov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        including_comics: ["comic_planeswalkers_volume_4"],
        previous_comics : ["comic_planeswalkers_16"],
        next_comics     : ["comic_planeswalkers_18"],
        release_at      : {year: 2018, month: 5, day: 15},
        show            : false
    },
    comic_exlibrium_43                                                      : {
        name            : "Экслибриум #43 Возвращение, часть 1",
        number          : "43",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-43-return-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_8"],
        previous_comics : ["comic_exlibrium_42"],
        next_comics     : ["comic_exlibrium_44"],
        release_at      : {year: 2018, month: 5, day: 21},
        show            : false
    },
    comic_meteora_43                                                        : {
        name            : "Метеора #43 Король и плут, часть 1",
        number          : "43",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-43-king-and-rogue-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_8"],
        previous_comics : ["comic_meteora_42"],
        next_comics     : ["comic_meteora_44"],
        release_at      : {year: 2018, month: 5, day: 25},
        show            : false
    },
    comic_dubin_dima_provincial_holidays_1                                  : {
        name            : "Дубин Дима: Провинциальные каникулы, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/dubin_dima_provincial_holidays/dubin-dima-provincial-holidays-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_dmitrii_dubin"],
        authors         : [{author_id: "author_artyom_bizyaev", positions: ["artist", "colorist", "screenwriter"]}],
        including_comics: ["comic_dubin_dima_provincial_holidays"],
        previous_comics : ["comic_major_grom_50"],
        next_comics     : ["comic_dubin_dima_provincial_holidays_2"],
        release_at      : {year: 2018, month: 5, day: 28},
        show            : false
    },
    comic_allies_18                                                         : {
        name            : "Союзники #18 Без ума, часть 3",
        number          : "18",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/allies/allies-18-crazy-part-3.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_artur_haksli", "character_dzhessi_rodrigez", "character_dzhonni",
                           "character_sadap_rahmani", "character_nika_chaikina", "character_mihail_alvaris"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_volume_4"],
        previous_comics : ["comic_allies_17"],
        next_comics     : ["comic_allies_19"],
        release_at      : {year: 2018, month: 6, day: 1},
        show            : false
    },
    comic_krutiks_6_2018                                                    : {
        name            : "Крутиксы #6 (2018)",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-6-2018.jpg`,
            aspect_ratio: 1345 / 2048
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist", "screenwriter"]}],
        including_comics: ["comic_krutiks_cool_comics_book_2"],
        previous_comics : ["comic_krutiks_5_2018"],
        next_comics     : ["comic_krutiks_7_2018"],
        release_at      : {year: 2018, month: 6, day: 3},
        show            : false
    },
    comic_besoboy_vol_2_18                                                  : {
        name            : "Бесобой Vol.2 #18 Красный фильтр, часть 2",
        number          : "18",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-18-red-filter-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_pavel_ocheredko", "character_porfirii_petrovich",
                           "character_feliks_dzerzhinskii", "character_yana"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_4"],
        previous_comics : ["comic_besoboy_vol_2_17"],
        next_comics     : ["comic_besoboy_vol_2_19"],
        release_at      : {year: 2018, month: 6, day: 5},
        show            : false
    },
    comic_igor_grom_18                                                      : {
        name            : "Игорь Гром #18 Метод Локи, часть 2",
        number          : "18",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-18-loki-method-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_ulya", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_igor_grom_volume_4"],
        previous_comics : ["comic_igor_grom_17"],
        next_comics     : ["comic_igor_grom_19"],
        release_at      : {year: 2018, month: 6, day: 10},
        show            : false
    },
    comic_dubin_dima_provincial_holidays_2                                  : {
        name            : "Дубин Дима: Провинциальные каникулы, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/dubin_dima_provincial_holidays/dubin-dima-provincial-holidays-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_dmitrii_dubin"],
        authors         : [{author_id: "author_artyom_bizyaev", positions: ["artist", "colorist", "screenwriter"]}],
        including_comics: ["comic_dubin_dima_provincial_holidays"],
        previous_comics : ["comic_dubin_dima_provincial_holidays_1"],
        next_comics     : ["comic_dubin_dima_provincial_holidays_3"],
        release_at      : {year: 2018, month: 6, day: 10},
        show            : false
    },
    comic_teo_crop_circles                                                  : {
        name            : "Тео: Круги на полях",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/teo_crop_circles/teo-crop-circles.png`,
            aspect_ratio: 643 / 983
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_teo"],
        authors         : [{author_id: "author_anna_bulatova", positions: ["screenwriter"]},
                           {author_id: "author_roman_titov", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        contained_comics: ["comic_teo_crop_circles_1", "comic_teo_crop_circles_2", "comic_teo_crop_circles_3",
                           "comic_teo_crop_circles_4"],
        previous_comics : ["comic_meteora_volume_9"],
        release_at      : {year: 2018, month: 1, day: 1},
        show            : true
    },
    comic_planeswalkers_18                                                  : {
        name            : "Мироходцы #18 Псы войны, часть 2",
        number          : "18",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-18-dogs-of-war-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_bulat_gadzhiev", "character_vasilisa_premudraya", "character_diana_de_maridor",
                           "character_seryi_volk", "character_andrei_radov", "character_kseniya_radova",
                           "character_luna"],
        authors         : [{author_id: "author_alexander_kirillov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        including_comics: ["comic_planeswalkers_volume_4"],
        previous_comics : ["comic_planeswalkers_17"],
        next_comics     : ["comic_planeswalkers_19"],
        release_at      : {year: 2018, month: 6, day: 15},
        show            : false
    },
    comic_exlibrium_44                                                      : {
        name            : "Экслибриум #44 Возвращение, часть 2",
        number          : "44",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-44-return-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_8"],
        previous_comics : ["comic_exlibrium_43"],
        next_comics     : ["comic_exlibrium_45"],
        release_at      : {year: 2018, month: 6, day: 20},
        show            : false
    },
    comic_meteora_44                                                        : {
        name            : "Метеора #44 Король и плут, часть 2",
        number          : "44",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-44-king-and-rogue-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_8"],
        previous_comics : ["comic_meteora_43"],
        next_comics     : ["comic_meteora_45"],
        release_at      : {year: 2018, month: 6, day: 25},
        show            : false
    },
    comic_allies_19                                                         : {
        name            : "Союзники #19 Отчуждение",
        number          : "19",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/allies/allies-19-alienation.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_agness_ignis", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhonni", "character_dzhoshua_donato", "character_ilaias",
                           "character_lotta_lemke", "character_sadap_rahmani", "character_nika_chaikina",
                           "character_mihail_alvaris"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_volume_4"],
        previous_comics : ["comic_allies_18"],
        next_comics     : ["comic_allies_20"],
        release_at      : {year: 2018, month: 7, day: 2},
        show            : false
    },
    comic_krutiks_7_2018                                                    : {
        name            : "Крутиксы #7 (2018)",
        number          : "7",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-7-2018.jpg`,
            aspect_ratio: 1535 / 2338
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist", "screenwriter"]}],
        including_comics: ["comic_krutiks_cool_comics_book_2"],
        previous_comics : ["comic_krutiks_6_2018"],
        next_comics     : ["comic_krutiks_8_2018"],
        release_at      : {year: 2018, month: 7, day: 3},
        show            : false
    },
    comic_besoboy_vol_2_19                                                  : {
        name            : "Бесобой Vol.2 #19 В расчёте",
        number          : "19",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-19-counting-on.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_koroleva_gnili", "character_chyornyi_pyos", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_alexey_efremov", positions: ["artist"]},
                           {author_id: "author_denis_barbe", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_4"],
        previous_comics : ["comic_besoboy_vol_2_18"],
        next_comics     : ["comic_besoboy_vol_2_20"],
        release_at      : {year: 2018, month: 7, day: 5},
        show            : false
    },
    comic_igor_grom_19                                                      : {
        name            : "Игорь Гром #19 Метод Локи, часть 3",
        number          : "19",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-19-loki-method-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_ulya", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_igor_grom_volume_4"],
        previous_comics : ["comic_igor_grom_18"],
        next_comics     : ["comic_igor_grom_20"],
        release_at      : {year: 2018, month: 7, day: 10},
        show            : false
    },
    comic_planeswalkers_19                                                  : {
        name            : "Мироходцы #19 Битва за Эдем, часть 1",
        number          : "19",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-19-battle-for-eden-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_vasilisa_premudraya", "character_diana_de_maridor", "character_koschei",
                           "character_seryi_volk", "character_andrei_radov", "character_kseniya_radova"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        including_comics: ["comic_planeswalkers_volume_4"],
        previous_comics : ["comic_planeswalkers_18"],
        next_comics     : ["comic_planeswalkers_20"],
        release_at      : {year: 2018, month: 7, day: 16},
        show            : false
    },
    comic_exlibrium_45                                                      : {
        name            : "Экслибриум #45 Возвращение, часть 3",
        number          : "45",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-45-return-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_8"],
        previous_comics : ["comic_exlibrium_44"],
        next_comics     : ["comic_exlibrium_46"],
        release_at      : {year: 2018, month: 7, day: 20},
        show            : false
    },
    comic_meteora_45                                                        : {
        name            : "Метеора #45 Стоп машина! часть 1",
        number          : "45",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-45-stop-machine-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_9"],
        previous_comics : ["comic_meteora_44"],
        next_comics     : ["comic_meteora_46"],
        release_at      : {year: 2018, month: 7, day: 25},
        show            : false
    },
    comic_dubin_dima_provincial_holidays_3                                  : {
        name            : "Дубин Дима: Провинциальные каникулы, часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/dubin_dima_provincial_holidays/dubin-dima-provincial-holidays-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_dmitrii_dubin"],
        authors         : [{author_id: "author_artyom_bizyaev", positions: ["artist", "colorist", "screenwriter"]}],
        including_comics: ["comic_dubin_dima_provincial_holidays"],
        previous_comics : ["comic_dubin_dima_provincial_holidays_2"],
        next_comics     : ["comic_dubin_dima_provincial_holidays_4"],
        release_at      : {year: 2018, month: 7, day: 27},
        show            : false
    },
    comic_allies_20                                                         : {
        name            : "Союзники #20 Изгои",
        number          : "20",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/allies/allies-20-outcasts.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_bulat_gadzhiev", "character_ember", "character_piyavka", "character_sonya",
                           "character_nursultan"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_allies_volume_5"],
        previous_comics : ["comic_allies_19"],
        next_comics     : ["comic_allies_21"],
        release_at      : {year: 2018, month: 8, day: 1},
        show            : false
    },
    comic_krutiks_8_2018                                                    : {
        name            : "Крутиксы #8 (2018)",
        number          : "8",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-8-2018.jpg`,
            aspect_ratio: 1536 / 2339
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_alexandra_bizyaeva", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist"]}],
        including_comics: ["comic_krutiks_cool_comics_book_3"],
        previous_comics : ["comic_krutiks_7_2018"],
        next_comics     : ["comic_krutiks_9_2018"],
        release_at      : {year: 2018, month: 8, day: 3},
        show            : false
    },
    comic_besoboy_vol_2_20                                                  : {
        name            : "Бесобой Vol.2 #20 Воля мёртвых, часть 1",
        number          : "20",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-20-will-of-dead-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_koroleva_gnili", "character_chyornyi_pyos", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_5"],
        previous_comics : ["comic_besoboy_vol_2_19"],
        next_comics     : ["comic_besoboy_vol_2_21"],
        release_at      : {year: 2018, month: 8, day: 6},
        show            : false
    },
    comic_igor_grom_20                                                      : {
        name            : "Игорь Гром #20 Метод Локи, часть 4",
        number          : "20",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-20-loki-method-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_ulya", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_igor_grom_volume_4"],
        previous_comics : ["comic_igor_grom_19"],
        next_comics     : ["comic_igor_grom_21"],
        release_at      : {year: 2018, month: 8, day: 10},
        show            : false
    },
    comic_planeswalkers_20                                                  : {
        name            : "Мироходцы #20 Битва за Эдем, часть 2",
        number          : "20",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-20-battle-for-eden-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_vasilisa_premudraya", "character_diana_de_maridor", "character_koschei",
                           "character_seryi_volk", "character_andrei_radov"],
        authors         : [{author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]}],
        including_comics: ["comic_planeswalkers_volume_4"],
        previous_comics : ["comic_planeswalkers_19"],
        next_comics     : ["comic_planeswalkers_21"],
        release_at      : {year: 2018, month: 8, day: 11},
        show            : false
    },
    comic_wolf_helsing                                                      : {
        name      : "Вольф Хельсинг",
        type      : "single",
        cover_file: {url: `${comicImagePath}/authors_comics/wolf-helsing.png`, aspect_ratio: 718 / 1020},
        ranges    : ["range_authors_comics"],
        authors   : [{author_id: "author_evgeny_yakovlev", positions: ["artist"]}],
        release_at: {year: 2018, month: 8, day: 11},
        show      : true
    },
    comic_besoboy_vol_2_book_2                                              : {
        name            : "Бесобой Vol.2. Книга 2: Падение",
        number          : "2",
        type            : "hardcover_book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-book-2-fall.jpg`,
            aspect_ratio: 970 / 1460
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_avaddon_bezzhalostnyi", "character_antihrist", "character_balor",
                           "character_baffort_rakshor", "character_pavel_ocheredko", "character_satana",
                           "character_semiaza", "character_tanahiya_neumolimaya", "character_shmyg", "character_yana",
                           "character_yarh_smertonosnyi", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_elena_doronina", positions: ["colorist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]},
                           {author_id: "author_eric_bragalyan", positions: ["artist"]}],
        contained_comics: ["comic_besoboy_vol_2_6", "comic_besoboy_vol_2_7", "comic_besoboy_vol_2_8",
                           "comic_besoboy_vol_2_9", "comic_besoboy_vol_2_10", "comic_besoboy_vol_2_11",
                           "comic_besoboy_vol_2_12", "comic_besoboy_vol_2_13", "comic_besoboy_vol_2_14"],
        previous_comics : ["comic_besoboy_vol_2_book_1"],
        next_comics     : ["comic_witch_hunt"],
        release_at      : {year: 2018, month: 8, day: 13},
        show            : true
    },
    comic_besoboy_vol_2_volume_2                                            : {
        name            : "Бесобой Vol.2. Том 2: Падение",
        number          : "2",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-volume-2-fall.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_avaddon_bezzhalostnyi", "character_antihrist", "character_balor",
                           "character_baffort_rakshor", "character_pavel_ocheredko", "character_satana",
                           "character_tanahiya_neumolimaya", "character_shmyg", "character_yana",
                           "character_yarh_smertonosnyi", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_elena_doronina", positions: ["colorist"]},
                           {author_id: "author_eric_bragalyan", positions: ["artist"]}],
        contained_comics: ["comic_besoboy_vol_2_6", "comic_besoboy_vol_2_7", "comic_besoboy_vol_2_8",
                           "comic_besoboy_vol_2_9", "comic_besoboy_vol_2_10"],
        previous_comics : ["comic_besoboy_vol_2_volume_1"],
        next_comics     : ["comic_besoboy_vol_2_volume_3"],
        release_at      : {year: 2018, month: 8, day: 13},
        show            : true
    },
    comic_igor_grom_book_2                                                  : {
        name            : "Игорь Гром. Книга 2: Голодные духи",
        number          : "2",
        type            : "hardcover_book",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-book-2-hungry-ghosts.jpg`,
            aspect_ratio: 1000 / 1505
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        contained_comics: ["comic_igor_grom_7", "comic_igor_grom_8", "comic_igor_grom_9", "comic_igor_grom_10",
                           "comic_igor_grom_11", "comic_igor_grom_12", "comic_igor_grom_13", "comic_igor_grom_14"],
        previous_comics : ["comic_igor_grom_book_1"],
        next_comics     : ["comic_witch_hunt"],
        release_at      : {year: 2018, month: 8, day: 13},
        show            : true
    },
    comic_igor_grom_volume_2                                                : {
        name            : "Игорь Гром. Том 2: Голодные духи",
        number          : "2",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-volume-2-hungry-ghosts.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        contained_comics: ["comic_igor_grom_7", "comic_igor_grom_8", "comic_igor_grom_9", "comic_igor_grom_10"],
        previous_comics : ["comic_igor_grom_volume_1"],
        next_comics     : ["comic_igor_grom_volume_3"],
        release_at      : {year: 2018, month: 8, day: 13},
        show            : true
    },
    comic_allies_book_2                                                     : {
        name            : "Союзники. Книга 2: Условный рефлекс",
        number          : "2",
        type            : "hardcover_book",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-book-2-conditioned-reflex.jpg`,
            aspect_ratio: 1111 / 1672
        },
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_agness_ignis", "character_artur_haksli",
                           "character_dzhessi_rodrigez", "character_dzhonni", "character_dzhoshua_donato",
                           "character_ilaias", "character_lotta_lemke", "character_sadap_rahmani",
                           "character_nika_chaikina"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]},
                           {author_id: "author_yulia_loganova", positions: ["colorist"]}],
        contained_comics: ["comic_allies_5", "comic_allies_6", "comic_allies_7", "comic_allies_8", "comic_allies_9",
                           "comic_allies_10", "comic_allies_11", "comic_allies_12", "comic_allies_13",
                           "comic_allies_14"],
        previous_comics : ["comic_allies_book_1"],
        next_comics     : ["comic_witch_hunt"],
        release_at      : {year: 2018, month: 8, day: 13},
        show            : true
    },
    comic_allies_volume_2                                                   : {
        name            : "Союзники. Том 2: Условный рефлекс",
        number          : "2",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-volume-2-conditioned-reflex.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_agness_ignis", "character_artur_haksli",
                           "character_dzhessi_rodrigez", "character_dzhonni", "character_dzhoshua_donato",
                           "character_ilaias", "character_lotta_lemke", "character_sadap_rahmani",
                           "character_nika_chaikina"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_yulia_loganova", positions: ["colorist"]}],
        contained_comics: ["comic_allies_5", "comic_allies_6", "comic_allies_7", "comic_allies_8", "comic_allies_9"],
        previous_comics : ["comic_allies_volume_1"],
        next_comics     : ["comic_allies_volume_3"],
        release_at      : {year: 2018, month: 8, day: 13},
        show            : true
    },
    comic_planeswalkers_book_2                                              : {
        name            : "Мироходцы. Книга 2: Притяжение полюсов",
        number          : "2",
        type            : "hardcover_book",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-book-2-polar-attraction.jpg`,
            aspect_ratio: 1111 / 1672
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_vasilisa_premudraya", "character_diana_de_maridor", "character_koschei",
                           "character_magistr", "character_mars", "character_seryi_volk", "character_andrei_radov",
                           "character_kseniya_radova", "character_luna"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        contained_comics: ["comic_planeswalkers_7", "comic_planeswalkers_8", "comic_planeswalkers_9",
                           "comic_planeswalkers_10", "comic_planeswalkers_11", "comic_planeswalkers_12",
                           "comic_planeswalkers_13", "comic_planeswalkers_14"],
        previous_comics : ["comic_planeswalkers_book_1"],
        next_comics     : ["comic_witch_hunt"],
        release_at      : {year: 2018, month: 8, day: 13},
        show            : true
    },
    comic_planeswalkers_volume_2                                            : {
        name            : "Мироходцы. Том 2: Луна",
        number          : "2",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-volume-2-moon.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_seryi_volk", "character_luna"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]}],
        contained_comics: ["comic_planeswalkers_7", "comic_planeswalkers_8", "comic_planeswalkers_9",
                           "comic_planeswalkers_10"],
        previous_comics : ["comic_planeswalkers_volume_1"],
        next_comics     : ["comic_planeswalkers_volume_3"],
        release_at      : {year: 2018, month: 8, day: 13},
        show            : true
    },
    comic_exlibrium_46                                                      : {
        name            : "Экслибриум #46 Светлая полоса, часть 1",
        number          : "46",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-46-light-stripe-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_9"],
        previous_comics : ["comic_exlibrium_45"],
        next_comics     : ["comic_exlibrium_47"],
        release_at      : {year: 2018, month: 8, day: 20},
        show            : false
    },
    comic_meteora_46                                                        : {
        name            : "Метеора #46 Стоп машина! часть 2",
        number          : "46",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-46-stop-machine-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_9"],
        previous_comics : ["comic_meteora_45"],
        next_comics     : ["comic_meteora_47"],
        release_at      : {year: 2018, month: 8, day: 24},
        show            : false
    },
    comic_dubin_dima_provincial_holidays_4                                  : {
        name            : "Дубин Дима: Провинциальные каникулы, часть 4",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/dubin_dima_provincial_holidays/dubin-dima-provincial-holidays-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_dmitrii_dubin"],
        authors         : [{author_id: "author_artyom_bizyaev", positions: ["artist", "colorist", "screenwriter"]}],
        including_comics: ["comic_dubin_dima_provincial_holidays"],
        previous_comics : ["comic_dubin_dima_provincial_holidays_3"],
        release_at      : {year: 2018, month: 8, day: 28},
        show            : false
    },
    comic_allies_21                                                         : {
        name            : "Союзники #21 Оборотная сторона, часть 1",
        number          : "21",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/allies/allies-21-verso-part-1.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_zebedaiya_trenk", "character_kirk_oraili", "character_myordok_makalister",
                           "character_miko_van_der_holt"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_allies_volume_5"],
        previous_comics : ["comic_allies_20"],
        next_comics     : ["comic_allies_22"],
        release_at      : {year: 2018, month: 8, day: 31},
        show            : false
    },
    comic_krutiks_9_2018                                                    : {
        name            : "Крутиксы #9 (2018)",
        number          : "9",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-9-2018.jpg`,
            aspect_ratio: 1535 / 2339
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_alexandra_bizyaeva", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist"]}],
        including_comics: ["comic_krutiks_cool_comics_book_3"],
        previous_comics : ["comic_krutiks_8_2018"],
        next_comics     : ["comic_krutiks_10_2018"],
        release_at      : {year: 2018, month: 9, day: 3},
        show            : false
    },
    comic_besoboy_vol_2_21                                                  : {
        name            : "Бесобой Vol.2 #21 Воля мёртвых, часть 2",
        number          : "21",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-21-will-of-dead-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_koroleva_gnili", "character_chyornyi_pyos", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_5"],
        previous_comics : ["comic_besoboy_vol_2_20"],
        next_comics     : ["comic_besoboy_vol_2_22"],
        release_at      : {year: 2018, month: 9, day: 5},
        show            : false
    },
    comic_igor_grom_21                                                      : {
        name            : "Игорь Гром #21 На пепелище",
        number          : "21",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/igor_grom/igor-grom-21-on-ashes.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_mark_simonov", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        including_comics: ["comic_igor_grom_volume_4"],
        previous_comics : ["comic_igor_grom_20"],
        next_comics     : ["comic_igor_grom_22"],
        release_at      : {year: 2018, month: 9, day: 10},
        show            : false
    },
    comic_planeswalkers_21                                                  : {
        name            : "Мироходцы #21 Просто сон",
        number          : "21",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-21-just-dream.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_andrei_radov", "character_kseniya_radova"],
        authors         : [{author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_yulia_zhuravleva", positions: ["artist"]},
                           {author_id: "author_anna_mozaikina", positions: ["colorist"]}],
        including_comics: ["comic_planeswalkers_volume_4"],
        previous_comics : ["comic_planeswalkers_20"],
        next_comics     : ["comic_besoboy_and_planeswalkers_new_life_electronic", "comic_crusade_prologue",
                           "comic_crusade_wolf_1"],
        release_at      : {year: 2018, month: 9, day: 14},
        show            : false
    },
    comic_exlibrium_47                                                      : {
        name            : "Экслибриум #47 Светлая полоса, часть 2",
        number          : "47",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-47-light-streak-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_9"],
        previous_comics : ["comic_exlibrium_46"],
        next_comics     : ["comic_exlibrium_48"],
        release_at      : {year: 2018, month: 9, day: 20},
        show            : false
    },
    comic_meteora_47                                                        : {
        name            : "Метеора #47 Стоп машина! часть 3",
        number          : "47",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-47-stop-machine-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_9"],
        previous_comics : ["comic_meteora_46"],
        next_comics     : ["comic_meteora_48"],
        release_at      : {year: 2018, month: 9, day: 24},
        show            : false
    },
    comic_seven_sons_jaykarn                                                : {
        name      : "Семь сыновей. Джайкарн. Глава первая",
        type      : "book",
        cover_file: {
            url         : `${comicImagePath}/authors_comics/seven-sons-jaykarn-chapter-first.jpeg`,
            aspect_ratio: 635 / 900
        },
        ranges    : ["range_authors_comics"],
        authors   : [{author_id: "author_anastasia_kim", positions: ["artist"]}],
        release_at: {year: 2018, month: 10},
        show      : true
    },
    comic_allies_22                                                         : {
        name            : "Союзники #22 Оборотная сторона, часть 2",
        number          : "22",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/allies/allies-22-verso-part-2.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_zebedaiya_trenk", "character_kirk_oraili", "character_myordok_makalister",
                           "character_miko_van_der_holt"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_allies_volume_5"],
        previous_comics : ["comic_allies_21"],
        next_comics     : ["comic_allies_23"],
        release_at      : {year: 2018, month: 10, day: 1},
        show            : false
    },
    comic_krutiks_10_2018                                                   : {
        name            : "Крутиксы #10 (2018)",
        number          : "10",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-10-2018.jpg`,
            aspect_ratio: 1535 / 2339
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_alexandra_bizyaeva", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist"]}],
        including_comics: ["comic_krutiks_cool_comics_book_3"],
        previous_comics : ["comic_krutiks_9_2018"],
        next_comics     : ["comic_krutiks_11_2018"],
        release_at      : {year: 2018, month: 10, day: 3},
        show            : false
    },
    comic_besoboy_vol_2_22                                                  : {
        name            : "Бесобой Vol.2 #22 Воля мёртвых, часть 3",
        number          : "22",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-22-will-of-dead-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_koroleva_gnili", "character_chyornyi_pyos", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_5"],
        previous_comics : ["comic_besoboy_vol_2_21"],
        next_comics     : ["comic_besoboy_vol_2_23"],
        release_at      : {year: 2018, month: 10, day: 4},
        show            : false
    },
    comic_igor_grom_22                                                      : {
        name            : "Игорь Гром #22 Повторяй за мной, часть 1",
        number          : "22",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-22-repeat-after-me-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_5"],
        previous_comics : ["comic_igor_grom_21"],
        next_comics     : ["comic_igor_grom_23"],
        release_at      : {year: 2018, month: 10, day: 4},
        show            : false
    },
    comic_crusade_prologue                                                  : {
        name            : "Крестовый поход: Пролог",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/crossovers/crusade/crusade-prologue.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_crossovers"],
        characters      : ["character_magistr", "character_andrei_radov"],
        including_comics: ["comic_crusade"],
        previous_comics : ["comic_planeswalkers_21"],
        next_comics     : ["comic_crusade_1"],
        release_at      : {year: 2018, month: 10, day: 4},
        show            : false
    },
    comic_yarkh_step_forward_1                                              : {
        name            : "Ярх. Шаг вперёд, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/yarkh_step_forward/yarkh-step-forward-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_satana", "character_tanahiya_neumolimaya", "character_yarh_smertonosnyi"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist", "screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_yarkh_step_forward"],
        previous_comics : ["comic_besoboy_50"],
        next_comics     : ["comic_yarkh_step_forward_2"],
        release_at      : {year: 2018, month: 10, day: 4},
        show            : false
    },
    comic_exlibrium_volume_7                                                : {
        name            : "Экслибриум том 7: Сказочке конец",
        number          : "7",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-volume-7-end-of-fairy-tale.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_35", "comic_exlibrium_36", "comic_exlibrium_37", "comic_exlibrium_38",
                           "comic_exlibrium_39", "comic_exlibrium_40"],
        previous_comics : ["comic_exlibrium_volume_6"],
        next_comics     : ["comic_exlibrium_volume_8"],
        release_at      : {year: 2018, month: 10, day: 4},
        show            : true
    },
    comic_meteora_volume_7                                                  : {
        name            : "Метеора том 7: Вольная птица",
        number          : "7",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/meteora/meteora-volume-7-free-bird.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_36", "comic_meteora_37", "comic_meteora_38", "comic_meteora_39"],
        previous_comics : ["comic_meteora_volume_6"],
        next_comics     : ["comic_meteora_volume_8"],
        release_at      : {year: 2018, month: 10, day: 4},
        show            : true
    },
    comic_dubin_dima_provincial_holidays                                    : {
        name            : "Дубин Дима: Провинциальные каникулы",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/dubin_dima_provincial_holidays/dubin-dima-provincial-holidays.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_dmitrii_dubin"],
        authors         : [{author_id: "author_artyom_bizyaev", positions: ["artist", "colorist", "screenwriter"]}],
        contained_comics: ["comic_dubin_dima_provincial_holidays_1", "comic_dubin_dima_provincial_holidays_2",
                           "comic_dubin_dima_provincial_holidays_3", "comic_dubin_dima_provincial_holidays_4"],
        previous_comics : ["comic_major_grom_volume_8"],
        release_at      : {year: 2018, month: 10, day: 4},
        show            : true
    },
    comic_master_death_is_just_beginning_electronic                         : {
        ...comic_master_death_is_just_beginning,
        including_comics: ["comic_master_death_is_just_beginning_printed"],
        previous_comics : ["comic_monk_50"],
        show            : false
    },
    comic_master_death_is_just_beginning_printed                            : {
        ...comic_master_death_is_just_beginning,
        contained_comics: ["comic_master_death_is_just_beginning_electronic"],
        previous_comics : ["comic_monk_volume_8"],
        show            : true
    },
    comic_ziggy_and_shmyg_save_comiccon                                     : {
        name           : "Зигги и Шмыг спасают ComicCon",
        type           : "book",
        cover_file     : {
            url         : `${comicImagePath}/inadequate_galaxy/ziggy_and_shmyg/ziggy-and-shmyg-save-comiccon.jpg`,
            aspect_ratio: 2416 / 3721
        },
        ranges         : ["range_inadequate_galaxy"],
        characters     : ["character_ziggi", "character_shmyg"],
        authors        : [{author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                          {author_id: "author_evgeniy_bornyakov", positions: ["artist"]},
                          {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        previous_comics: ["comic_ziggy_and_shmyg_destroy_bubble_universe"],
        release_at     : {year: 2018, month: 10, day: 4},
        show           : true
    },
    comic_besoboy_vol_2_volume_3                                            : {
        name            : "Бесобой Vol.2. Том 3: Откровения",
        number          : "3",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-volume-3-revelations.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_balor", "character_pavel_ocheredko", "character_satana",
                           "character_semiaza", "character_shmyg", "character_yana", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]},
                           {author_id: "author_eric_bragalyan", positions: ["artist"]}],
        contained_comics: ["comic_besoboy_vol_2_11", "comic_besoboy_vol_2_12", "comic_besoboy_vol_2_13",
                           "comic_besoboy_vol_2_14"],
        previous_comics : ["comic_besoboy_vol_2_volume_2"],
        next_comics     : ["comic_witch_hunt"],
        release_at      : {year: 2018, month: 10, day: 15},
        show            : true
    },
    comic_igor_grom_volume_3                                                : {
        name            : "Игорь Гром. Том 3: Умный человек",
        number          : "3",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-volume-3-smart-man.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        contained_comics: ["comic_igor_grom_11", "comic_igor_grom_12", "comic_igor_grom_13", "comic_igor_grom_14"],
        previous_comics : ["comic_igor_grom_volume_2"],
        next_comics     : ["comic_witch_hunt"],
        release_at      : {year: 2018, month: 8, day: 13},
        show            : true
    },
    comic_planeswalkers_volume_3                                            : {
        name            : "Мироходцы. Том 3: Лицом к лицу",
        number          : "3",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-volume-3-face-to-face.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_vasilisa_premudraya", "character_diana_de_maridor", "character_koschei",
                           "character_magistr", "character_mars", "character_seryi_volk", "character_andrei_radov",
                           "character_kseniya_radova"],
        authors         : [{author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        contained_comics: ["comic_planeswalkers_11", "comic_planeswalkers_12", "comic_planeswalkers_13",
                           "comic_planeswalkers_14"],
        previous_comics : ["comic_planeswalkers_volume_2"],
        next_comics     : ["comic_witch_hunt"],
        release_at      : {year: 2018, month: 10, day: 15},
        show            : true
    },
    comic_allies_volume_3                                                   : {
        name            : "Союзники. Том 3: Имаго",
        number          : "3",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/allies/allies-volume-3-imago.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_agness_ignis", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhonni", "character_dzhoshua_donato", "character_ilaias",
                           "character_lotta_lemke", "character_sadap_rahmani", "character_nika_chaikina"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_rud", positions: ["artist"]}],
        contained_comics: ["comic_allies_10", "comic_allies_11", "comic_allies_12", "comic_allies_13",
                           "comic_allies_14"],
        previous_comics : ["comic_allies_volume_2"],
        next_comics     : ["comic_witch_hunt"],
        release_at      : {year: 2018, month: 10, day: 15},
        show            : true
    },
    comic_witch_hunt                                                        : {
        name            : "Охота на ведьм",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/crossovers/witch_hunt/witch-hunt.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_crossovers"],
        characters      : ["character_avgust_van_der_holt", "character_magistr", "character_nika_chaikina",
                           "character_igor_grom", "character_besoboi", "character_andrei_radov"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_oksana_turlyay", positions: ["artist"]},
                           {author_id: "author_eric_bragalyan", positions: ["artist"]}],
        contained_comics: ["comic_witch_hunt_prologue", "comic_allies_15", "comic_besoboy_vol_2_15",
                           "comic_igor_grom_15", "comic_planeswalkers_15", "comic_witch_hunt_finale"],
        previous_comics : ["comic_besoboy_vol_2_book_2", "comic_igor_grom_book_2", "comic_allies_book_2",
                           "comic_planeswalkers_book_2", "comic_besoboy_vol_2_volume_3", "comic_igor_grom_volume_3",
                           "comic_planeswalkers_volume_3", "comic_allies_volume_3"],
        next_comics     : ["comic_planeswalkers_volume_4", "comic_besoboy_vol_2_volume_4", "comic_allies_volume_4",
                           "comic_igor_grom_volume_4"],
        release_at      : {year: 2018, month: 10, day: 15},
        show            : true
    },
    comic_jackets_and_revolvers_volume_2                                    : {
        name           : "Пиджаки и Револьверы. Том 2: Праздник в красных тонах",
        number         : "2",
        type           : "book",
        cover_file     : {
            url         : `${comicImagePath}/authors_comics/jackets_and_revolvers/jackets-and-revolvers-volume-2-holiday-in-red-colors.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges         : ["range_authors_comics"],
        authors        : [{author_id: "author_yulia_zhuravleva", positions: ["artist", "colorist", "screenwriter"]},
                          {author_id: "author_ekaterina_morozova", positions: ["screenwriter"]}],
        previous_comics: ["comic_jackets_and_revolvers_volume_1"],
        next_comics    : ["comic_jackets_and_revolvers_volume_3"],
        release_at     : {year: 2018, month: 10, day: 17},
        show           : true
    },
    comic_exlibrium_48                                                      : {
        name            : "Экслибриум #48 Светлая полоса, часть 3",
        number          : "48",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-48-light-stripe-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_9"],
        previous_comics : ["comic_exlibrium_47"],
        next_comics     : ["comic_exlibrium_49"],
        release_at      : {year: 2018, month: 10, day: 19},
        show            : false
    },
    comic_meteora_48                                                        : {
        name            : "Метеора #48 Стоп машина! часть 4",
        number          : "48",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-48-stop-machine-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_9"],
        previous_comics : ["comic_meteora_47"],
        next_comics     : ["comic_meteora_49"],
        release_at      : {year: 2018, month: 10, day: 25},
        show            : false
    },
    comic_yarkh_step_forward_2                                              : {
        name            : "Ярх. Шаг вперёд, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/yarkh_step_forward/yarkh-step-forward-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_yarh_smertonosnyi"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist", "screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_yarkh_step_forward"],
        previous_comics : ["comic_yarkh_step_forward_1"],
        next_comics     : ["comic_yarkh_step_forward_3"],
        release_at      : {year: 2018, month: 10, day: 29},
        show            : false
    },
    comic_allies_23                                                         : {
        name            : "Союзники #23 Оборотная сторона, часть 3",
        number          : "23",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/allies/allies-23-verso-part-3.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_zebedaiya_trenk", "character_kirk_oraili", "character_myordok_makalister",
                           "character_miko_van_der_holt"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_allies_volume_5"],
        previous_comics : ["comic_allies_22"],
        next_comics     : ["comic_allies_24"],
        release_at      : {year: 2018, month: 11, day: 1},
        show            : false
    },
    comic_krutiks_11_2018                                                   : {
        name            : "Крутиксы #11 (2018)",
        number          : "11",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-11-2018.jpg`,
            aspect_ratio: 1535 / 2339
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_alexandra_bizyaeva", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_yakovlev", positions: ["artist"]},
                           {author_id: "author_tatiana_goryacheva", positions: ["artist"]},
                           {author_id: "author_yulia_garibova", positions: ["colorist"]}],
        including_comics: ["comic_krutiks_cool_comics_book_3"],
        previous_comics : ["comic_krutiks_10_2018"],
        next_comics     : ["comic_krutiks_12_2018"],
        release_at      : {year: 2018, month: 11, day: 3},
        show            : false
    },
    comic_besoboy_vol_2_23                                                  : {
        name            : "Бесобой Vol.2 #23 Власть",
        number          : "23",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-23-power.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_koroleva_gnili", "character_chyornyi_pyos", "character_shmyg",
                           "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_5"],
        previous_comics : ["comic_besoboy_vol_2_22"],
        next_comics     : ["comic_besoboy_vol_2_24"],
        release_at      : {year: 2018, month: 11, day: 5},
        show            : false
    },
    comic_igor_grom_23                                                      : {
        name            : "Игорь Гром #23 Повторяй за мной, часть 2",
        number          : "23",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-23-repeat-after-me-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_5"],
        previous_comics : ["comic_igor_grom_22"],
        next_comics     : ["comic_igor_grom_24"],
        release_at      : {year: 2018, month: 11, day: 9},
        show            : false
    },
    comic_crusade_1                                                         : {
        name            : "Крестовый поход #1",
        number          : "1",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/crossovers/crusade/crusade-1.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_crossovers"],
        characters      : ["character_magistr", "character_andrei_radov"],
        authors         : [{author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]}],
        including_comics: ["comic_crusade"],
        previous_comics : ["comic_crusade_prologue"],
        next_comics     : ["comic_crusade_2"],
        release_at      : {year: 2018, month: 11, day: 15},
        show            : false
    },
    comic_crusade_wolf_1                                                    : {
        name            : "Крестовый поход: Волк. Часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/crusade_wolf/crusade-wolf-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_crossovers"],
        characters      : ["character_seryi_volk"],
        authors         : [{author_id: "author_alexander_kirillov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_gleb_melnikov", positions: ["artist"]},
                           {author_id: "author_roman_titov", positions: ["colorist"]}],
        including_comics: ["comic_crusade_wolf"],
        previous_comics : ["comic_planeswalkers_21"],
        next_comics     : ["comic_crusade_wolf_2"],
        release_at      : {year: 2018, month: 11, day: 15},
        show            : false
    },
    comic_exlibrium_49                                                      : {
        name            : "Экслибриум #49 Светлая полоса, часть 4",
        number          : "49",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-49-light-streak-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_9"],
        previous_comics : ["comic_exlibrium_48"],
        next_comics     : ["comic_exlibrium_50"],
        release_at      : {year: 2018, month: 11, day: 19},
        show            : false
    },
    comic_meteora_49                                                        : {
        name            : "Метеора #49 Стоп машина! часть 5",
        number          : "49",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-49-stop-machine-part-5.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_9"],
        previous_comics : ["comic_meteora_48"],
        next_comics     : ["comic_meteora_50"],
        release_at      : {year: 2018, month: 11, day: 26},
        show            : false
    },
    comic_yarkh_step_forward_3                                              : {
        name            : "Ярх. Шаг вперёд, часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/yarkh_step_forward/yarkh-step-forward-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_tanahiya_neumolimaya", "character_yarh_smertonosnyi", "character_kigal"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist", "screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_yarkh_step_forward"],
        previous_comics : ["comic_yarkh_step_forward_2"],
        next_comics     : ["comic_yarkh_step_forward_4"],
        release_at      : {year: 2018, month: 11, day: 28},
        show            : false
    },
    comic_allies_24                                                         : {
        name            : "Союзники #24 Работа над ошибками, часть 1",
        number          : "24",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-24-working-on-mistakes-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_agness_ignis", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhoshua_donato", "character_ilaias", "character_kirk_oraili",
                           "character_lotta_lemke", "character_myordok_makalister", "character_sadap_rahmani",
                           "character_nika_chaikina", "character_miko_van_der_holt"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_volume_6"],
        previous_comics : ["comic_allies_23"],
        next_comics     : ["comic_allies_25"],
        release_at      : {year: 2018, month: 11, day: 30},
        show            : false
    },
    comic_krutiks_12_2018                                                   : {
        name            : "Крутиксы #12 (2018)",
        number          : "12",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-12-2018.jpg`,
            aspect_ratio: 1535 / 2339
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_alexandra_bizyaeva", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist"]}],
        including_comics: ["comic_krutiks_cool_comics_book_3"],
        previous_comics : ["comic_krutiks_11_2018"],
        next_comics     : ["comic_krutiks_13_2018"],
        release_at      : {year: 2018, month: 12, day: 3},
        show            : false
    },
    comic_krutiks_13_2018                                                   : {
        name            : "Крутиксы #13 (2018)",
        number          : "13",
        type            : "single",
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        including_comics: ["comic_krutiks_cool_comics_book_3"],
        previous_comics : ["comic_krutiks_12_2018"],
        next_comics     : ["comic_krutiks_new_year_special"],
        release_at      : {year: 2018},
        show            : false
    },
    comic_besoboy_vol_2_24                                                  : {
        name            : "Бесобой Vol.2 #24 Зачистка, часть 1",
        number          : "24",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-24-cleanup-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_koroleva_gnili", "character_magistr",
                           "character_pavel_ocheredko", "character_shmyg", "character_yana", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_alexey_efremov", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_6"],
        previous_comics : ["comic_besoboy_vol_2_23"],
        next_comics     : ["comic_besoboy_vol_2_25"],
        release_at      : {year: 2018, month: 12, day: 5},
        show            : false
    },
    comic_igor_grom_24                                                      : {
        name            : "Игорь Гром #24 Повторяй за мной, часть 3",
        number          : "24",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-24-repeat-after-me-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_5"],
        previous_comics : ["comic_igor_grom_23"],
        next_comics     : ["comic_igor_grom_25"],
        release_at      : {year: 2018, month: 12, day: 10},
        show            : false
    },
    comic_crusade_wolf_2                                                    : {
        name            : "Крестовый поход: Волк. Часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/crusade_wolf/crusade-wolf-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_crossovers"],
        characters      : ["character_seryi_volk"],
        authors         : [{author_id: "author_alexander_kirillov", positions: ["screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_gleb_melnikov", positions: ["artist", "colorist"]},
                           {author_id: "author_roman_titov", positions: ["colorist"]}],
        including_comics: ["comic_crusade_wolf"],
        previous_comics : ["comic_crusade_wolf_1"],
        next_comics     : ["comic_crusade_wolf_3"],
        release_at      : {year: 2018, month: 12, day: 14},
        show            : false
    },
    comic_crusade_2                                                         : {
        name            : "Крестовый поход #2",
        number          : "2",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/crossovers/crusade/crusade-2.jpg`, aspect_ratio: 1327 / 2048},
        ranges          : ["range_crossovers"],
        characters      : ["character_magistr", "character_besoboi", "character_andrei_radov"],
        authors         : [{author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]}],
        including_comics: ["comic_crusade"],
        previous_comics : ["comic_crusade_1"],
        next_comics     : ["comic_besoboy_vol_2_25", "comic_crusade_3"],
        release_at      : {year: 2018, month: 12, day: 20},
        show            : false
    },
    comic_major_grom_promise                                                : {
        name            : "Майор Гром. Обещание",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/major_grom/major-grom-promise.png`, aspect_ratio: 643 / 983},
        ranges          : ["range_major_grom", "range_bubble_legends"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_uliya_pchyolkina",
                           "character_igor_grom"],
        authors         : [{author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_7"],
        previous_comics : ["comic_igor_grom_34"],
        next_comics     : ["comic_igor_grom_35"],
        release_at      : {year: 2018, month: 12, day: 29},
        show            : false
    },
    comic_exlibrium_50                                                      : {
        name            : "Экслибриум #50 Светлая полоса, часть 5",
        number          : "50",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-50-light-strip-part-5.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium"],
        including_comics: ["comic_exlibrium_volume_9"],
        previous_comics : ["comic_exlibrium_49"],
        next_comics     : ["comic_exlibrium_blank_sheet_electronic", "comic_exlibrium_second_life",
                           "comic_exlibrium_red_line_electronic",
                           "comic_exlibrium_colors_of_our_feelings_coloring_dossier"],
        release_at      : {year: 2018, month: 12, day: 29},
        show            : false
    },
    comic_meteora_50                                                        : {
        name            : "Метеора #50 Стоп машина! часть 6",
        number          : "50",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-50-stop-machine-part-6.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_meteora"],
        including_comics: ["comic_meteora_volume_9"],
        previous_comics : ["comic_meteora_49"],
        next_comics     : ["comic_teo_crop_circles_1", "comic_meteora_storybook_deception_maneuver_electronic"],
        release_at      : {year: 2018, month: 12, day: 30},
        show            : false
    },
    comic_igor_ugor_volume_2                                                : {
        name           : "Игорь Угорь. Том 2. Икра",
        number         : "2",
        type           : "book",
        cover_file     : {
            url         : `${comicImagePath}/inadequate_galaxy/igor_ugor/igor-ugor-volume-2-caviar.jpg`,
            aspect_ratio: 874 / 1240
        },
        ranges         : ["range_inadequate_galaxy"],
        authors        : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                          {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                          {author_id: "author_roman_kotkov", positions: ["screenwriter"]}],
        previous_comics: ["comic_igor_ugor_volume_1"],
        next_comics    : ["comic_igor_ugor_2_5"],
        release_at     : {year: 2019},
        show           : true
    },
    comic_russian_folk_tales_in_comics                                      : {
        name      : "Русские народные сказки в комиксах",
        type      : "book",
        cover_file: {
            url         : `${comicImagePath}/childrens_comics/russian-folk-tales-in-comics.jpg`,
            aspect_ratio: 1122 / 1595
        },
        ranges    : ["range_childrens_comics", "range_authors_comics"],
        authors   : [{author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist", "screenwriter"]}],
        release_at: {year: 2019},
        show      : true
    },
    comic_thief_of_shadows_1                                                : {
        name            : "Вор Теней #1 Час Волка",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/thief_of_shadows/thief-of-shadows-1-hour-of-wolf.jpg`,
            aspect_ratio: 1050 / 1600
        },
        ranges          : ["range_thief_of_shadows"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_kirill_kutuzov", positions: ["screenwriter"]}],
        including_comics: ["comic_thief_of_shadows_volume_1"],
        next_comics     : ["comic_thief_of_shadows_2"],
        release_at      : {year: 2019},
        show            : false
    },
    comic_thief_of_shadows_2                                                : {
        name            : "Вор Теней #2 Вор Теней против бандитов-футуристов",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/thief_of_shadows/thief-of-shadows-2-thief-of-shadows-vs-futurist-bandits.jpg`,
            aspect_ratio: 1050 / 1600
        },
        ranges          : ["range_thief_of_shadows"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_kirill_kutuzov", positions: ["screenwriter"]}],
        including_comics: ["comic_thief_of_shadows_volume_1"],
        previous_comics : ["comic_thief_of_shadows_1"],
        next_comics     : ["comic_thief_of_shadows_3"],
        release_at      : {year: 2019},
        show            : false
    },
    comic_allies_25                                                         : {
        name            : "Союзники #25 Работа над ошибками, часть 2",
        number          : "25",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-25-working-on-mistakes-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_agness_ignis", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhoshua_donato", "character_ilaias", "character_kirk_oraili",
                           "character_lotta_lemke", "character_myordok_makalister", "character_sadap_rahmani",
                           "character_nika_chaikina", "character_miko_van_der_holt", "character_mihail_alvaris"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_volume_6"],
        previous_comics : ["comic_allies_24"],
        next_comics     : ["comic_allies_26"],
        release_at      : {year: 2019, month: 1, day: 1},
        show            : false
    },
    comic_krutiks_new_year_special                                          : {
        name            : "Крутиксы: Новогодний спецвыпуск",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-new-year-special.jpg`,
            aspect_ratio: 1535 / 2339
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_alexandra_bizyaeva", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_yakovlev", positions: ["artist", "colorist"]}],
        including_comics: ["comic_krutiks_cool_comics_book_3"],
        previous_comics : ["comic_krutiks_13_2018"],
        release_at      : {year: 2019, month: 1, day: 3},
        show            : false
    },
    comic_besoboy_vol_2_25                                                  : {
        name            : "Бесобой Vol.2 #25 Зачистка, часть 2",
        number          : "25",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-25-cleanup-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_gleb_zheglov", "character_pavel_ocheredko", "character_chyornyi_pyos"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_alexey_efremov", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_6"],
        previous_comics : ["comic_besoboy_vol_2_24", "comic_crusade_2"],
        next_comics     : ["comic_besoboy_vol_2_26"],
        release_at      : {year: 2019, month: 1, day: 5},
        show            : false
    },
    comic_igor_grom_25                                                      : {
        name            : "Игорь Гром #25 Повторяй за мной, часть 4",
        number          : "25",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-25-repeat-after-me-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_5"],
        previous_comics : ["comic_igor_grom_24"],
        next_comics     : ["comic_igor_grom_26"],
        release_at      : {year: 2019, month: 1, day: 15},
        show            : false
    },
    comic_crusade_3                                                         : {
        name            : "Крестовый поход #3",
        number          : "3",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/crossovers/crusade/crusade-3.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_crossovers"],
        characters      : ["character_magistr", "character_besoboi", "character_andrei_radov"],
        authors         : [{author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]}],
        including_comics: ["comic_crusade"],
        previous_comics : ["comic_crusade_2"],
        next_comics     : ["comic_besoboy_vol_2_26", "comic_crusade_4"],
        release_at      : {year: 2019, month: 1, day: 21},
        show            : false
    },
    comic_crusade_wolf_3                                                    : {
        name            : "Крестовый поход: Волк. Часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/crusade_wolf/crusade-wolf-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_crossovers", "range_planeswalkers"],
        characters      : ["character_seryi_volk"],
        authors         : [{author_id: "author_alexander_kirillov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_crusade_wolf"],
        previous_comics : ["comic_crusade_wolf_2"],
        next_comics     : ["comic_crusade_wolf_4"],
        release_at      : {year: 2019, month: 1, day: 21},
        show            : false
    },
    comic_yarkh_step_forward_4                                              : {
        name            : "Ярх. Шаг вперёд, часть 4",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/yarkh_step_forward/yarkh-step-forward-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_tanahiya_neumolimaya", "character_yarh_smertonosnyi", "character_kigal"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist", "screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_yarkh_step_forward"],
        previous_comics : ["comic_yarkh_step_forward_3"],
        next_comics     : ["comic_yarkh_step_forward_5"],
        release_at      : {year: 2019, month: 1, day: 28},
        show            : false
    },
    comic_allies_26                                                         : {
        name            : "Союзники #26 Работа над ошибками, часть 3",
        number          : "26",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-26-working-on-mistakes-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_agness_ignis", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhoshua_donato", "character_ilaias", "character_kirk_oraili",
                           "character_lotta_lemke", "character_myordok_makalister", "character_sadap_rahmani",
                           "character_nika_chaikina", "character_miko_van_der_holt"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_volume_6"],
        previous_comics : ["comic_allies_25"],
        next_comics     : ["comic_allies_27"],
        release_at      : {year: 2019, month: 2, day: 1},
        show            : false
    },
    comic_besoboy_vol_2_26                                                  : {
        name            : "Бесобой Vol.2 #26 Зачистка, часть 3",
        number          : "26",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-26-cleanup-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_evgenii_tamantsev", "character_pavel_ocheredko",
                           "character_shmyg", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_alexey_efremov", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_6"],
        previous_comics : ["comic_besoboy_vol_2_25", "comic_crusade_3"],
        next_comics     : ["comic_besoboy_vol_2_27"],
        release_at      : {year: 2019, month: 2, day: 5},
        show            : false
    },
    comic_igor_grom_26                                                      : {
        name            : "Игорь Гром #26 Игра в солдатики, часть 1",
        number          : "26",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-26-game-of-soldiers-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom", "character_valentin_kaligari_gashparov"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_gleb_melnikov", positions: ["artist"]},
                           {author_id: "author_roman_titov", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_6"],
        previous_comics : ["comic_igor_grom_25"],
        next_comics     : ["comic_igor_grom_27"],
        release_at      : {year: 2019, month: 2, day: 11},
        show            : false
    },
    comic_crusade_wolf_4                                                    : {
        name            : "Крестовый поход: Волк. Часть 4",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/crusade_wolf/crusade-wolf-part-4.jpg`,
            aspect_ratio: 643 / 983
        },
        ranges          : ["range_crossovers"],
        characters      : ["character_seryi_volk"],
        authors         : [{author_id: "author_alexander_kirillov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        including_comics: ["comic_crusade_wolf"],
        previous_comics : ["comic_crusade_wolf_3"],
        next_comics     : ["comic_crusade_wolf_5"],
        release_at      : {year: 2019, month: 2, day: 18},
        show            : false
    },
    comic_yarkh_step_forward_5                                              : {
        name            : "Ярх. Шаг вперёд, часть 5",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/yarkh_step_forward/yarkh-step-forward-part-5.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_tanahiya_neumolimaya", "character_yarh_smertonosnyi", "character_kigal"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist", "screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_yarkh_step_forward"],
        previous_comics : ["comic_yarkh_step_forward_4"],
        next_comics     : ["comic_yarkh_step_forward_6"],
        release_at      : {year: 2019, month: 2, day: 28},
        show            : false
    },
    comic_allies_27                                                         : {
        name            : "Союзники #27 Работа над ошибками, часть 4",
        number          : "27",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-27-working-on-mistakes-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_agness_ignis", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhoshua_donato", "character_ilaias", "character_kirk_oraili",
                           "character_lotta_lemke", "character_myordok_makalister", "character_sadap_rahmani",
                           "character_nika_chaikina", "character_miko_van_der_holt"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_allies_volume_6"],
        previous_comics : ["comic_allies_26"],
        next_comics     : ["comic_allies_28"],
        release_at      : {year: 2019, month: 3, day: 1},
        show            : false
    },
    comic_crusade_4                                                         : {
        name            : "Крестовый поход #4",
        number          : "4",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/crossovers/crusade/crusade-4.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_crossovers"],
        characters      : ["character_vasilisa_premudraya", "character_magistr", "character_besoboi",
                           "character_andrei_radov"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]}],
        including_comics: ["comic_crusade"],
        previous_comics : ["comic_crusade_3"],
        next_comics     : ["comic_crusade_epilogue"],
        release_at      : {year: 2019, month: 3, day: 8},
        show            : false
    },
    comic_besoboy_vol_2_27                                                  : {
        name            : "Бесобой Vol.2 #27 На руинах, часть 1",
        number          : "27",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-27-in-ruins-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_6"],
        previous_comics : ["comic_besoboy_vol_2_26"],
        next_comics     : ["comic_besoboy_vol_2_28"],
        release_at      : {year: 2019, month: 3, day: 11},
        show            : false
    },
    comic_igor_grom_27                                                      : {
        name            : "Игорь Гром #27 Игра в солдатики, часть 2",
        number          : "27",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-27-game-of-soldiers-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom", "character_valentin_kaligari_gashparov"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_gleb_melnikov", positions: ["artist"]},
                           {author_id: "author_roman_titov", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_6"],
        previous_comics : ["comic_igor_grom_26"],
        next_comics     : ["comic_igor_grom_28"],
        release_at      : {year: 2019, month: 3, day: 15},
        show            : false
    },
    comic_crusade_wolf_5                                                    : {
        name            : "Крестовый поход: Волк. Часть 5",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/crusade_wolf/crusade-wolf-part-5.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_crossovers"],
        characters      : ["character_seryi_volk"],
        authors         : [{author_id: "author_alexander_kirillov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_crusade_wolf"],
        previous_comics : ["comic_crusade_wolf_4"],
        release_at      : {year: 2019, month: 3, day: 20},
        show            : false
    },
    comic_yarkh_step_forward_6                                              : {
        name            : "Ярх. Шаг вперёд, часть 6",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/yarkh_step_forward/yarkh-step-forward-part-6.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_tanahiya_neumolimaya", "character_yarh_smertonosnyi", "character_kigal"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist", "screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_yarkh_step_forward"],
        previous_comics : ["comic_yarkh_step_forward_5"],
        release_at      : {year: 2019, month: 3, day: 28},
        show            : false
    },
    comic_crusade_epilogue                                                  : {
        name            : "Крестовый поход: Эпилог",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/crossovers/crusade/crusade-epilogue.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_crossovers"],
        characters      : ["character_magistr", "character_besoboi", "character_andrei_radov"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]}],
        including_comics: ["comic_crusade"],
        previous_comics : ["comic_crusade_4"],
        release_at      : {year: 2019, month: 3, day: 29},
        show            : false
    },
    comic_allies_28                                                         : {
        name            : "Союзники #28 Джали, истребительница упырей",
        number          : "28",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/allies/allies-28-jali-ghoul-slayer.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_agness_ignis", "character_dzhessi_rodrigez", "character_dzhonni",
                           "character_dzhoshua_donato", "character_ilaias", "character_kirk_oraili",
                           "character_lotta_lemke", "character_myordok_makalister", "character_nika_chaikina",
                           "character_miko_van_der_holt"],
        authors         : [{author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_volume_6"],
        previous_comics : ["comic_allies_27"],
        next_comics     : ["comic_allies_29"],
        release_at      : {year: 2019, month: 4, day: 1},
        show            : false
    },
    comic_besoboy_vol_2_28                                                  : {
        name            : "Бесобой Vol.2 #28 На руинах, часть 2",
        number          : "28",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-28-in-ruins-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_koroleva_gnili", "character_pavel_ocheredko",
                           "character_chyornyi_pyos", "character_shmyg", "character_yana"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_6"],
        previous_comics : ["comic_besoboy_vol_2_27"],
        next_comics     : ["comic_besoboy_vol_2_29"],
        release_at      : {year: 2019, month: 4, day: 8},
        show            : false
    },
    comic_meteora_volume_8                                                  : {
        name            : "Метеора том 8: Король и плут",
        number          : "8",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-volume-8-king-and-rogue.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_40", "comic_meteora_41", "comic_meteora_42", "comic_meteora_43",
                           "comic_meteora_44"],
        previous_comics : ["comic_meteora_volume_7"],
        next_comics     : ["comic_meteora_volume_9"],
        release_at      : {year: 2019, month: 4, day: 8},
        show            : true
    },
    comic_planeswalkers_volume_4                                            : {
        name            : "Мироходцы. Том 4: Битва за Эдем",
        number          : "4",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/planeswalkers/planeswalkers-volume-4-battle-for-eden.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_planeswalkers"],
        characters      : ["character_bulat_gadzhiev", "character_vasilisa_premudraya", "character_diana_de_maridor",
                           "character_koschei", "character_seryi_volk", "character_andrei_radov",
                           "character_kseniya_radova"],
        authors         : [{author_id: "author_alexander_kirillov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_yulia_zhuravleva", positions: ["artist"]},
                           {author_id: "author_anna_mozaikina", positions: ["colorist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        contained_comics: ["comic_planeswalkers_16", "comic_planeswalkers_17", "comic_planeswalkers_18",
                           "comic_planeswalkers_19", "comic_planeswalkers_20", "comic_planeswalkers_21"],
        previous_comics : ["comic_witch_hunt"],
        next_comics     : ["comic_besoboy_and_planeswalkers_new_life_printed", "comic_crusade", "comic_crusade_wolf"],
        release_at      : {year: 2018, month: 10, day: 15},
        show            : true
    },
    comic_igor_grom_28                                                      : {
        name            : "Игорь Гром #28 Игра в солдатики, часть 3",
        number          : "28",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-28-game-of-soldiers-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom", "character_valentin_kaligari_gashparov"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_gleb_melnikov", positions: ["artist"]},
                           {author_id: "author_roman_titov", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_6"],
        previous_comics : ["comic_igor_grom_27"],
        next_comics     : ["comic_igor_grom_29"],
        release_at      : {year: 2019, month: 4, day: 15},
        show            : false
    },
    comic_sister_kukki_1                                                    : {
        name            : "Сестра. Кукки (часть 1)",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/sister_kukki/sister-kukki-part-1.jpg`,
            aspect_ratio: 1342 / 2048
        },
        ranges          : ["range_bubble_legends"],
        authors         : [{author_id: "author_alexandra_zvyagina", positions: ["screenwriter"]},
                           {author_id: "author_victoria_bykova", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_sister_kukki"],
        release_at      : {year: 2019, month: 4, day: 21},
        show            : false
    },
    comic_falcon_1                                                          : {
        name            : "Сокол #1 Общий интерес",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/falcon/falcon-1-general-interest.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        authors         : [{author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_valeria_frantseva", positions: ["screenwriter"]},
                           {author_id: "author_evgeniy_frantsev", positions: ["artist"]},
                           {author_id: "author_inga_kanareeva", positions: ["screenwriter"]}],
        including_comics: ["comic_falcon_volume_1"],
        next_comics     : ["comic_falcon_2"],
        release_at      : {year: 2019, month: 4, day: 21},
        show            : false
    },
    comic_plush_policeman_perfect_plan                                      : {
        name      : "Плюшевый полицейский. Идеальный план",
        type      : "single",
        cover_file: {
            url         : `${comicImagePath}/bubble_legends/plush-policeman-perfect-plan.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges    : ["range_bubble_legends"],
        authors   : [{author_id: "author_vasily_snigirev", positions: ["screenwriter"]},
                     {author_id: "author_evgeniy_pivnev", positions: ["artist"]},
                     {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        release_at: {year: 2019, month: 4, day: 21},
        show      : true
    },
    comic_black_hand_and_mysterious_package                                 : {
        name      : "Чёрная рука и загадочная посылка",
        type      : "single",
        cover_file: {
            url         : `${comicImagePath}/bubble_legends/black-hand-and-mysterious-package.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges    : ["range_bubble_legends", "range_new_bubble_heroes"],
        authors   : [{author_id: "author_adela_adienova", positions: ["colorist"]},
                     {author_id: "author_maxim_ivankov", positions: ["screenwriter"]},
                     {author_id: "author_maria_sukhikh", positions: ["artist", "colorist"]}],
        release_at: {year: 2019, month: 4, day: 21},
        show      : true
    },
    comic_exlibrium_blank_sheet_electronic                                  : {
        ...comic_exlibrium_blank_sheet,
        including_comics: ["comic_exlibrium_blank_sheet_printed"],
        previous_comics : ["comic_exlibrium_50", "comic_exlibrium_second_life_39"],
        show            : false
    },
    comic_exlibrium_blank_sheet_printed                                     : {
        ...comic_exlibrium_blank_sheet,
        contained_comics: ["comic_exlibrium_blank_sheet_electronic"],
        previous_comics : ["comic_exlibrium_volume_9", "comic_exlibrium_second_life_39"],
        show            : true
    },
    comic_besoboy_vol_2_volume_4                                            : {
        name            : "Бесобой Vol.2. Том 4: В расчёте",
        number          : "4",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-volume-4-counting-on.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_baffort_rakshor", "character_viktor_zelenin",
                           "character_koroleva_gnili", "character_pavel_ocheredko", "character_porfirii_petrovich",
                           "character_feliks_dzerzhinskii", "character_chyornyi_pyos", "character_yana",
                           "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_alexey_efremov", positions: ["artist"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]}],
        contained_comics: ["comic_besoboy_vol_2_16", "comic_besoboy_vol_2_17", "comic_besoboy_vol_2_18",
                           "comic_besoboy_vol_2_19"],
        previous_comics : ["comic_witch_hunt"],
        next_comics     : ["comic_besoboy_vol_2_volume_5"],
        release_at      : {year: 2019, month: 4, day: 25},
        show            : true
    },
    comic_besoboy_vol_2_volume_5                                            : {
        name            : "Бесобой Vol.2. Том 5: Воля Мёртвых",
        number          : "5",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-volume-5-will-of-dead.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_koroleva_gnili", "character_satana", "character_chyornyi_pyos", "character_shmyg",
                           "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]}],
        contained_comics: ["comic_besoboy_vol_2_20", "comic_besoboy_vol_2_21", "comic_besoboy_vol_2_22",
                           "comic_besoboy_vol_2_23"],
        previous_comics : ["comic_besoboy_vol_2_volume_4"],
        next_comics     : ["comic_besoboy_vol_2_volume_6"],
        release_at      : {year: 2019, month: 4, day: 25},
        show            : true
    },
    comic_allies_29                                                         : {
        name            : "Союзники #29 Падение Голиафа",
        number          : "29",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/allies/allies-29-fall-of-goliath.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_agness_ignis", "character_dzhessi_rodrigez",
                           "character_dzhonni", "character_dzhoshua_donato", "character_ilaias",
                           "character_kirk_oraili", "character_lotta_lemke", "character_myordok_makalister",
                           "character_nika_chaikina", "character_miko_van_der_holt"],
        authors         : [{author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_volume_7"],
        previous_comics : ["comic_allies_28"],
        next_comics     : ["comic_allies_30"],
        release_at      : {year: 2019, month: 5, day: 1},
        show            : false
    },
    comic_besoboy_vol_2_29                                                  : {
        name            : "Бесобой Vol.2 #29 По душам",
        number          : "29",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-29-heart-to-heart.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_7"],
        previous_comics : ["comic_besoboy_vol_2_28"],
        next_comics     : ["comic_besoboy_vol_2_30"],
        release_at      : {year: 2019, month: 5, day: 8},
        show            : false
    },
    comic_allies_volume_4                                                   : {
        name            : "Союзники. Том 4: Без ума",
        number          : "4",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/allies/allies-volume-4-crazy.jpg`, aspect_ratio: 1004 / 1535},
        ranges          : ["range_allies"],
        characters      : ["character_agness_ignis", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhonni", "character_dzhoshua_donato", "character_ilaias",
                           "character_lotta_lemke", "character_sadap_rahmani", "character_nika_chaikina",
                           "character_mihail_alvaris"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        contained_comics: ["comic_allies_16", "comic_allies_17", "comic_allies_18", "comic_allies_19"],
        previous_comics : ["comic_witch_hunt"],
        next_comics     : ["comic_allies_volume_5"],
        release_at      : {year: 2019, month: 5, day: 10},
        show            : true
    },
    comic_igor_grom_29                                                      : {
        name            : "Игорь Гром #29 Игра в солдатики, часть 4",
        number          : "29",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-29-game-of-soldiers-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom", "character_valentin_kaligari_gashparov"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_gleb_melnikov", positions: ["artist"]},
                           {author_id: "author_roman_titov", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_6"],
        previous_comics : ["comic_igor_grom_28"],
        next_comics     : ["comic_igor_grom_30"],
        release_at      : {year: 2019, month: 5, day: 17},
        show            : false
    },
    comic_anna_input                                                        : {
        name       : "АННА. Input",
        type       : "single",
        cover_file : {url: `${comicImagePath}/bubble_legends/anna/anna-input.jpg`, aspect_ratio: 1339 / 2048},
        ranges     : ["range_bubble_legends"],
        authors    : [{author_id: "author_lada_akishina", positions: ["colorist"]},
                      {author_id: "author_ekaterina_ovchinnikova", positions: ["artist"]},
                      {author_id: "author_maxim_karganov", positions: ["screenwriter"]}],
        next_comics: ["comic_anna_space_of_options"],
        release_at : {year: 2019, month: 5, day: 17},
        show       : true
    },
    comic_cage_split                                                        : {
        name      : "Клетка. Раскол",
        type      : "single",
        cover_file: {url: `${comicImagePath}/bubble_legends/cage-split.jpg`, aspect_ratio: 1339 / 2048},
        ranges    : ["range_bubble_legends"],
        authors   : [{author_id: "author_alexander_malyshev", positions: ["artist"]},
                     {author_id: "author_evgeniy_aisberg", positions: ["screenwriter"]},
                     {author_id: "author_yulia_smirnova", positions: ["colorist"]}],
        release_at: {year: 2019, month: 5, day: 17},
        show      : true
    },
    comic_impulse_heros_voice                                               : {
        name            : "Импульс. Голос героя",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/impulse/impulse-heros-voice.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends", "range_new_bubble_heroes"],
        authors         : [{author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_denis_nechiporenko", positions: ["screenwriter"]},
                           {author_id: "author_ivan_dovbnya", positions: ["artist"]}],
        including_comics: ["comic_impulse_volume_1"],
        next_comics     : ["comic_impulse_premiere"],
        release_at      : {year: 2019, month: 5, day: 17},
        show            : false
    },
    comic_exlibrium_volume_8                                                : {
        name            : "Экслибриум том 8: Переворот",
        number          : "8",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-volume-8-revolution.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_41", "comic_exlibrium_42", "comic_exlibrium_43", "comic_exlibrium_44",
                           "comic_exlibrium_45"],
        previous_comics : ["comic_exlibrium_volume_7"],
        next_comics     : ["comic_exlibrium_volume_9"],
        release_at      : {year: 2019, month: 5, day: 17},
        show            : true
    },
    comic_igor_grom_volume_4                                                : {
        name            : "Игорь Гром. Том 4: Метод Локи",
        number          : "4",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-volume-4-loki-method.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_ulya", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        contained_comics: ["comic_igor_grom_16", "comic_igor_grom_17", "comic_igor_grom_18", "comic_igor_grom_19",
                           "comic_igor_grom_20", "comic_igor_grom_21"],
        previous_comics : ["comic_witch_hunt"],
        next_comics     : ["comic_igor_grom_volume_5"],
        release_at      : {year: 2019, month: 5, day: 22},
        show            : true
    },
    comic_tagar_volume_2_chapter_1                                          : {
        name            : "Тагар. Том 2, глава 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-2-chapter-1.jpg`,
            aspect_ratio: 1213 / 1717
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_2"],
        previous_comics : ["comic_tagar_volume_1_chapter_4"],
        next_comics     : ["comic_tagar_volume_2_chapter_2"],
        release_at      : {year: 2019, month: 5, day: 30},
        show            : false
    },
    comic_tagar_volume_2_chapter_2                                          : {
        name            : "Тагар. Том 2, глава 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-2-chapter-2.jpg`,
            aspect_ratio: 1213 / 1717
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_2"],
        previous_comics : ["comic_tagar_volume_2_chapter_1"],
        next_comics     : ["comic_tagar_volume_2_chapter_3"],
        release_at      : {year: 2019, month: 5, day: 30},
        show            : false
    },
    comic_tagar_volume_2_chapter_3                                          : {
        name            : "Тагар. Том 2, глава 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-2-chapter-3.jpg`,
            aspect_ratio: 1213 / 1717
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_2"],
        previous_comics : ["comic_tagar_volume_2_chapter_2"],
        next_comics     : ["comic_tagar_volume_2_chapter_4"],
        release_at      : {year: 2019, month: 5, day: 30},
        show            : false
    },
    comic_tagar_volume_2_chapter_4                                          : {
        name            : "Тагар. Том 2, глава 4",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-2-chapter-4.jpg`,
            aspect_ratio: 1213 / 1717
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_2"],
        previous_comics : ["comic_tagar_volume_2_chapter_3"],
        next_comics     : ["comic_tagar_volume_2_chapter_5"],
        release_at      : {year: 2019, month: 5, day: 30},
        show            : false
    },
    comic_tagar_volume_2_chapter_5                                          : {
        name            : "Тагар. Том 2, глава 5",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-2-chapter-5.jpg`,
            aspect_ratio: 1213 / 1717
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_2"],
        previous_comics : ["comic_tagar_volume_2_chapter_4"],
        next_comics     : ["comic_tagar_volume_3_chapter_1"],
        release_at      : {year: 2019, month: 5, day: 30},
        show            : false
    },
    comic_tagar_volume_2                                                    : {
        name            : "Тагар. Том 2",
        number          : "2",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/bubble_manga/tagar/tagar-volume-2.jpg`, aspect_ratio: 1344 / 2048},
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        contained_comics: ["comic_tagar_volume_2_chapter_1", "comic_tagar_volume_2_chapter_2",
                           "comic_tagar_volume_2_chapter_3", "comic_tagar_volume_2_chapter_4",
                           "comic_tagar_volume_2_chapter_5"],
        previous_comics : ["comic_tagar_volume_1"],
        next_comics     : ["comic_tagar_volume_3"],
        release_at      : {year: 2019, month: 5, day: 30},
        show            : true
    },
    comic_allies_30                                                         : {
        name            : "Союзники #30 Пожинающий бурю, часть 1",
        number          : "30",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-30-reaper-of-storm-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_zebedaiya_trenk", "character_nika_chaikina",
                           "character_miko_van_der_holt"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_allies_volume_7"],
        previous_comics : ["comic_allies_29"],
        next_comics     : ["comic_allies_31"],
        release_at      : {year: 2019, month: 5, day: 31},
        show            : false
    },
    comic_besoboy_vol_2_30                                                  : {
        name            : "Бесобой Vol.2 #30 Бунт, часть 1",
        number          : "30",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-30-riot-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_baffort_rakshor", "character_viktor_zelenin"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_7"],
        previous_comics : ["comic_besoboy_vol_2_29"],
        next_comics     : ["comic_besoboy_vol_2_31"],
        release_at      : {year: 2019, month: 6, day: 8},
        show            : false
    },
    comic_igor_grom_30                                                      : {
        name            : "Игорь Гром #30 Ребята с нашего двора",
        number          : "30",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-30-guys-from-our-yard.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_liliya_abramenko", "character_ulya"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_anastasia_ozerova", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_6"],
        previous_comics : ["comic_igor_grom_29"],
        next_comics     : ["comic_igor_grom_31"],
        release_at      : {year: 2019, month: 6, day: 17},
        show            : false
    },
    comic_allies_volume_5                                                   : {
        name            : "Союзники. Том 5: Оборотная сторона",
        number          : "5",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/allies/allies-volume-5-back-side.jpg`, aspect_ratio: 1004 / 1535},
        ranges          : ["range_allies"],
        characters      : ["character_artur_haksli", "character_bulat_gadzhiev", "character_dzhessi_rodrigez",
                           "character_dzhoshua_donato", "character_kirk_oraili", "character_lotta_lemke",
                           "character_myordok_makalister", "character_nika_chaikina", "character_miko_van_der_holt"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        contained_comics: ["comic_allies_20", "comic_allies_21", "comic_allies_22", "comic_allies_23"],
        previous_comics : ["comic_allies_volume_4"],
        next_comics     : ["comic_allies_volume_6"],
        release_at      : {year: 2019, month: 6, day: 21},
        show            : true
    },
    comic_allies_31                                                         : {
        name            : "Союзники #31 Пожинающий бурю, часть 2",
        number          : "31",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-31-reaper-of-storm-part-2.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_nika_chaikina", "character_miko_van_der_holt"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_allies_volume_7"],
        previous_comics : ["comic_allies_30"],
        next_comics     : ["comic_allies_32"],
        release_at      : {year: 2019, month: 7, day: 1},
        show            : false
    },
    comic_besoboy_vol_2_31                                                  : {
        name            : "Бесобой Vol.2 #31 Бунт, часть 2",
        number          : "31",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-31-riot-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_baffort_rakshor", "character_viktor_zelenin", "character_tanahiya_neumolimaya"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_7"],
        previous_comics : ["comic_besoboy_vol_2_30"],
        next_comics     : ["comic_besoboy_vol_2_32"],
        release_at      : {year: 2019, month: 7, day: 10},
        show            : false
    },
    comic_igor_grom_31                                                      : {
        name            : "Игорь Гром #31 Гори-гори ясно, часть 1",
        number          : "31",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-31-burn-burn-clear-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_7"],
        previous_comics : ["comic_igor_grom_30"],
        next_comics     : ["comic_igor_grom_32"],
        release_at      : {year: 2019, month: 7, day: 15},
        show            : false
    },
    comic_dont_be_reckless_quatrefoil                                       : {
        name      : "Не буди лихо. Четырехлистник",
        type      : "single",
        cover_file: {
            url         : `${comicImagePath}/bubble_legends/dont-be-reckless-quatrefoil.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges    : ["range_bubble_legends"],
        authors   : [{author_id: "author_adela_adienova", positions: ["colorist"]},
                     {author_id: "author_maria_stepunina", positions: ["screenwriter"]},
                     {author_id: "author_polina_shaposhnikova", positions: ["artist"]}],
        release_at: {year: 2019, month: 8},
        show      : true
    },
    comic_besoboy_vol_2_32                                                  : {
        name            : "Бесобой Vol.2 #32 Бунт, часть 3",
        number          : "32",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-32-riot-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_viktor_zelenin", "character_tanahiya_neumolimaya", "character_yarh_smertonosnyi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_7"],
        previous_comics : ["comic_besoboy_vol_2_31"],
        next_comics     : ["comic_besoboy_vol_2_33"],
        release_at      : {year: 2019, month: 8, day: 9},
        show            : false
    },
    comic_igor_grom_32                                                      : {
        name            : "Игорь Гром #32 Гори-гори ясно, часть 2",
        number          : "32",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-32-burn-burn-clear-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_7"],
        previous_comics : ["comic_igor_grom_31"],
        next_comics     : ["comic_igor_grom_33"],
        release_at      : {year: 2019, month: 8, day: 15},
        show            : false
    },
    comic_allies_32                                                         : {
        name            : "Союзники #32 Цена прощения, часть 1",
        number          : "32",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-32-price-of-forgiveness-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_dzhoshua_donato", "character_zebedaiya_trenk",
                           "character_lotta_lemke", "character_nika_chaikina", "character_miko_van_der_holt"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_volume_7"],
        previous_comics : ["comic_allies_31"],
        next_comics     : ["comic_allies_33"],
        release_at      : {year: 2019, month: 9, day: 2},
        show            : false
    },
    comic_allies_33                                                         : {
        name            : "Союзники #33 Цена прощения, часть 2",
        number          : "33",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-33-price-of-forgiveness-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_dzhoshua_donato", "character_zebedaiya_trenk",
                           "character_lotta_lemke", "character_nika_chaikina", "character_miko_van_der_holt",
                           "character_morel"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_volume_7"],
        previous_comics : ["comic_allies_32"],
        next_comics     : ["comic_allies_34"],
        release_at      : {year: 2019, month: 9, day: 2},
        show            : false
    },
    comic_memento_mori_call_of_void                                         : {
        name      : "Memento Mori. Зов пустоты",
        type      : "single",
        cover_file: {url: `${comicImagePath}/bubble_legends/memento-mori-call-of-void.jpg`, aspect_ratio: 1339 / 2048},
        ranges    : ["range_bubble_legends"],
        authors   : [{author_id: "author_andrey_tevlyukov", positions: ["screenwriter"]},
                     {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]},
                     {author_id: "author_tatiana_kuzmina", positions: ["artist"]}],
        release_at: {year: 2019, month: 9, day: 3},
        show      : true
    },
    comic_besoboy_vol_2_volume_6                                            : {
        name            : "Бесобой Vol.2. Том 6: Зачистка",
        number          : "6",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-volume-6-cleanup.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_balor", "character_magistr", "character_pavel_ocheredko",
                           "character_shmyg", "character_yana", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_alexey_efremov", positions: ["artist"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        contained_comics: ["comic_besoboy_vol_2_24", "comic_besoboy_vol_2_25", "comic_besoboy_vol_2_26",
                           "comic_besoboy_vol_2_27", "comic_besoboy_vol_2_28"],
        previous_comics : ["comic_besoboy_vol_2_volume_5"],
        next_comics     : ["comic_besoboy_vol_2_volume_7"],
        release_at      : {year: 2019, month: 9, day: 5},
        show            : true
    },
    comic_igor_grom_volume_5                                                : {
        name            : "Игорь Гром. Том 5: Повторяй за мной",
        number          : "5",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-volume-5-repeat-after-me.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]}],
        contained_comics: ["comic_igor_grom_22", "comic_igor_grom_23", "comic_igor_grom_24", "comic_igor_grom_25"],
        previous_comics : ["comic_igor_grom_volume_4"],
        next_comics     : ["comic_igor_grom_volume_6"],
        release_at      : {year: 2019, month: 9, day: 12},
        show            : true
    },
    comic_exlibrium_second_life                                             : {
        name            : "Экслибриум: Жизнь вторая",
        number          : "0",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life.jpg`,
            aspect_ratio: 706 / 1080
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_agata", "character_aleksandr_alinovskii", "character_liliya_romanova",
                           "character_zina", "character_ameliya", "character_lena_pyatkina", "character_apollon"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_1"],
        previous_comics : ["comic_exlibrium_50"],
        next_comics     : ["comic_exlibrium_second_life_1"],
        release_at      : {year: 2019, month: 10, day: 3},
        show            : false
    },
    comic_crusade                                                           : {
        name            : "Крестовый поход",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/crossovers/crusade/crusade.jpg`, aspect_ratio: 1000 / 1531},
        ranges          : ["range_crossovers"],
        characters      : ["character_avgust_van_der_holt", "character_balor", "character_bulat_gadzhiev",
                           "character_vasilisa_premudraya", "character_dzhessi_rodrigez", "character_dzhoshua_donato",
                           "character_diana_de_maridor", "character_zebedaiya_trenk", "character_koschei",
                           "character_lotta_lemke", "character_magistr", "character_pavel_ocheredko",
                           "character_seryi_volk", "character_chyornyi_pyos", "character_shmyg", "character_yana",
                           "character_nika_chaikina", "character_besoboi", "character_andrei_radov",
                           "character_kseniya_radova"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]}],
        contained_comics: ["comic_crusade_prologue", "comic_crusade_1", "comic_crusade_2", "comic_crusade_3",
                           "comic_crusade_4", "comic_crusade_epilogue"],
        previous_comics : ["comic_planeswalkers_volume_4"],
        release_at      : {year: 2019, month: 10, day: 3},
        show            : true
    },
    comic_crusade_wolf                                                      : {
        name            : "Крестовый поход: Волк",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/crusade_wolf/crusade-wolf.jpg`,
            aspect_ratio: 1003 / 1536
        },
        ranges          : ["range_crossovers"],
        characters      : ["character_vasilisa_premudraya", "character_magistr", "character_seryi_volk",
                           "character_luna"],
        authors         : [{author_id: "author_alexander_kirillov", positions: ["screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_gleb_melnikov", positions: ["artist", "colorist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]},
                           {author_id: "author_roman_titov", positions: ["artist"]}],
        contained_comics: ["comic_crusade_wolf_1", "comic_crusade_wolf_2", "comic_crusade_wolf_3",
                           "comic_crusade_wolf_4", "comic_crusade_wolf_5"],
        previous_comics : ["comic_planeswalkers_volume_4"],
        release_at      : {year: 2019, month: 10, day: 3},
        show            : true
    },
    comic_exlibrium_volume_9                                                : {
        name            : "Экслибриум том 9: Светлая полоса",
        number          : "9",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium/exlibrium-volume-9-light-streak.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_exlibrium"],
        contained_comics: ["comic_exlibrium_46", "comic_exlibrium_47", "comic_exlibrium_48", "comic_exlibrium_49",
                           "comic_exlibrium_50"],
        previous_comics : ["comic_exlibrium_volume_8"],
        next_comics     : ["comic_exlibrium_blank_sheet_printed", "comic_exlibrium_second_life_volume_1",
                           "comic_exlibrium_red_line_printed",
                           "comic_exlibrium_colors_of_our_feelings_coloring_dossier"],
        release_at      : {year: 2019, month: 10, day: 3},
        show            : true
    },
    comic_meteora_volume_9                                                  : {
        name            : "Метеора том 9: Стоп машина!",
        number          : "9",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/meteora/meteora-volume-9-stop-machine.jpg`,
            aspect_ratio: 706 / 1080
        },
        ranges          : ["range_meteora"],
        contained_comics: ["comic_meteora_45", "comic_meteora_46", "comic_meteora_47", "comic_meteora_48",
                           "comic_meteora_49", "comic_meteora_50"],
        previous_comics : ["comic_meteora_volume_8"],
        next_comics     : ["comic_teo_crop_circles", "comic_meteora_storybook_deception_maneuver_printed"],
        release_at      : {year: 2019, month: 10, day: 3},
        show            : true
    },
    comic_allies_volume_6                                                   : {
        name            : "Союзники. Том 6: Работа над ошибками",
        number          : "6",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-volume-6-working-on-mistakes.jpg`,
            aspect_ratio: 643 / 982
        },
        ranges          : ["range_allies"],
        characters      : ["character_agness_ignis", "character_artur_haksli", "character_dzhessi_rodrigez",
                           "character_dzhoshua_donato", "character_ilaias", "character_kirk_oraili",
                           "character_lotta_lemke", "character_myordok_makalister", "character_sadap_rahmani",
                           "character_nika_chaikina", "character_miko_van_der_holt", "character_mihail_alvaris"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_ozerova", positions: ["colorist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        contained_comics: ["comic_allies_24", "comic_allies_25", "comic_allies_26", "comic_allies_27",
                           "comic_allies_28"],
        previous_comics : ["comic_allies_volume_5"],
        next_comics     : ["comic_allies_volume_7"],
        release_at      : {year: 2019, month: 10, day: 3},
        show            : true
    },
    comic_yarkh_step_forward                                                : {
        name            : "Ярх. Шаг вперёд",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/yarkh_step_forward/yarkh-step-forward.jpg`,
            aspect_ratio: 1004 / 1536
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_tanahiya_neumolimaya", "character_yarh_smertonosnyi", "character_bordzh",
                           "character_kigal"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist", "screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        contained_comics: ["comic_yarkh_step_forward_1", "comic_yarkh_step_forward_2", "comic_yarkh_step_forward_3",
                           "comic_yarkh_step_forward_4", "comic_yarkh_step_forward_5", "comic_yarkh_step_forward_6"],
        previous_comics : ["comic_besoboy_volume_9"],
        release_at      : {year: 2019, month: 10, day: 3},
        show            : true
    },
    comic_balor_and_yana_dream_catcher_electronic                           : {
        ...comic_balor_and_yana_dream_catcher,
        including_comics: ["comic_balor_and_yana_dream_catcher_printed"],
        previous_comics : ["comic_besoboy_50"],
        show            : false
    },
    comic_balor_and_yana_dream_catcher_printed                              : {
        ...comic_balor_and_yana_dream_catcher,
        contained_comics: ["comic_balor_and_yana_dream_catcher_electronic"],
        previous_comics : ["comic_besoboy_volume_9"],
        show            : true
    },
    comic_besoboy_vol_2_33                                                  : {
        name            : "Бесобой Vol.2 #33 Ва-банк, часть 1",
        number          : "33",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-33-all-in-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_8"],
        previous_comics : ["comic_besoboy_vol_2_32"],
        next_comics     : ["comic_besoboy_vol_2_34"],
        release_at      : {year: 2019, month: 10, day: 5},
        show            : false
    },
    comic_igor_grom_33                                                      : {
        name            : "Игорь Гром #33 Гори-гори ясно, часть 3",
        number          : "33",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-33-burn-burn-clear-part-3.jpg`,
            aspect_ratio: 1327 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom", "character_irina_sharlotta"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_7"],
        previous_comics : ["comic_igor_grom_32"],
        next_comics     : ["comic_igor_grom_34"],
        release_at      : {year: 2019, month: 10, day: 5},
        show            : false
    },
    comic_major_grom_1939_electronic                                        : {
        ...comic_major_grom_1939,
        including_comics: ["comic_major_grom_1939_printed"],
        previous_comics : ["comic_major_grom_50"],
        show            : false
    },
    comic_major_grom_1939_printed                                           : {
        ...comic_major_grom_1939,
        contained_comics: ["comic_major_grom_1939_electronic"],
        previous_comics : ["comic_major_grom_volume_8"],
        show            : true
    },
    comic_allies_34                                                         : {
        name            : "Союзники #34 На круги своя, часть 1",
        number          : "34",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-34-back-to-square-one-part-1.jpg`,
            aspect_ratio: 500 / 762
        },
        ranges          : ["range_allies"],
        characters      : ["character_dzhoshua_donato", "character_lotta_lemke", "character_nika_chaikina",
                           "character_miko_van_der_holt"],
        authors         : [{author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_allies_volume_8"],
        previous_comics : ["comic_allies_33"],
        next_comics     : ["comic_allies_35"],
        release_at      : {year: 2019, month: 10, day: 28},
        show            : false
    },
    comic_besoboy_vol_2_34                                                  : {
        name            : "Бесобой Vol.2 #34 Ва-банк, часть 2",
        number          : "34",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-34-all-in-part-2.jpg`,
            aspect_ratio: 643 / 983
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_balor", "character_pavel_ocheredko", "character_shmyg",
                           "character_yana", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_8"],
        previous_comics : ["comic_besoboy_vol_2_33"],
        next_comics     : ["comic_besoboy_vol_2_35"],
        release_at      : {year: 2019, month: 11, day: 8},
        show            : false
    },
    comic_igor_grom_34                                                      : {
        name            : "Игорь Гром #34 Гори-гори ясно, часть 4",
        number          : "34",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-34-burn-burn-clear-part-4.jpg`,
            aspect_ratio: 589 / 898
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_7"],
        previous_comics : ["comic_igor_grom_33"],
        next_comics     : ["comic_major_grom_promise"],
        release_at      : {year: 2019, month: 11, day: 15},
        show            : false
    },
    comic_major_grom_like_in_war_1                                          : {
        name            : "Майор Гром: Как на войне, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/major_grom_like_in_war/major-grom-like-in-war-part-1.jpg`,
            aspect_ratio: 643 / 983
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_igor_grom"],
        authors         : [{author_id: "author_kirill_kutuzov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_oleg_chudakov", positions: ["artist"]}],
        including_comics: ["comic_major_grom_like_in_war"],
        previous_comics : ["comic_major_grom_50"],
        next_comics     : ["comic_major_grom_like_in_war_2"],
        release_at      : {year: 2019, month: 12},
        show            : false
    },
    comic_allies_35                                                         : {
        name            : "Союзники #35 На круги своя, часть 2",
        number          : "35",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-35-back-to-square-one-part-2.jpg`,
            aspect_ratio: 500 / 762
        },
        ranges          : ["range_allies"],
        characters      : ["character_artur_haksli", "character_dzhessi_rodrigez", "character_dzhoshua_donato",
                           "character_lotta_lemke", "character_nika_chaikina", "character_miko_van_der_holt"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_allies_volume_8"],
        previous_comics : ["comic_allies_34"],
        next_comics     : ["comic_allies_36"],
        release_at      : {year: 2019, month: 12, day: 2},
        show            : false
    },
    comic_besoboy_vol_2_35                                                  : {
        name            : "Бесобой Vol.2 #35 Ва-банк, часть 3",
        number          : "35",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-35-all-in-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_balor", "character_viktor_zelenin",
                           "character_pavel_ocheredko", "character_satana", "character_siergo", "character_shmyg",
                           "character_yana", "character_besoboi", "character_lilit", "character_yurik",
                           "character_dzhanijsh"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_8"],
        previous_comics : ["comic_besoboy_vol_2_34"],
        next_comics     : ["comic_besoboy_vol_2_36"],
        release_at      : {year: 2019, month: 12, day: 9},
        show            : false
    },
    comic_igor_grom_35                                                      : {
        name            : "Игорь Гром #35 Вне закона, часть 1",
        number          : "35",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-35-outlaw-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_8"],
        previous_comics : ["comic_major_grom_promise"],
        next_comics     : ["comic_igor_grom_36"],
        release_at      : {year: 2019, month: 12, day: 16},
        show            : false
    },
    comic_exlibrium_second_life_1                                           : {
        name            : "Экслибриум. Жизнь вторая #01 Безвозвратно, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-01-irrevocably-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_agata", "character_angelina_evgenevna", "character_liliya_romanova",
                           "character_zina", "character_ameliya"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_1"],
        previous_comics : ["comic_exlibrium_second_life"],
        next_comics     : ["comic_exlibrium_second_life_2"],
        release_at      : {year: 2019, month: 12, day: 28},
        show            : false
    },
    comic_allies_36                                                         : {
        name            : "Союзники #36 На круги своя, часть 3",
        number          : "36",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-36-back-to-square-one-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_dzhoshua_donato", "character_lotta_lemke", "character_nika_chaikina",
                           "character_miko_van_der_holt", "character_ember", "character_piyavka", "character_sonya",
                           "character_nursultan"],
        authors         : [{author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        including_comics: ["comic_allies_volume_8"],
        previous_comics : ["comic_allies_35"],
        next_comics     : ["comic_allies_37"],
        release_at      : {year: 2019, month: 12, day: 30},
        show            : false
    },
    comic_major_grom_like_in_war_2                                          : {
        name            : "Майор Гром: Как на войне, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/major_grom_like_in_war/major-grom-like-in-war-part-2.jpg`,
            aspect_ratio: 1327 / 2022
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_igor_grom"],
        authors         : [{author_id: "author_kirill_kutuzov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_oleg_chudakov", positions: ["artist"]}],
        including_comics: ["comic_major_grom_like_in_war"],
        previous_comics : ["comic_major_grom_like_in_war_1"],
        next_comics     : ["comic_major_grom_like_in_war_3"],
        release_at      : {year: 2020},
        show            : false
    },
    comic_major_grom_like_in_war_3                                          : {
        name            : "Майор Гром: Как на войне, часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/major_grom_like_in_war/major-grom-like-in-war-part-3.jpg`,
            aspect_ratio: 642 / 983
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_igor_grom"],
        authors         : [{author_id: "author_kirill_kutuzov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_oleg_chudakov", positions: ["artist"]}],
        including_comics: ["comic_major_grom_like_in_war"],
        previous_comics : ["comic_major_grom_like_in_war_2"],
        next_comics     : ["comic_major_grom_like_in_war_4"],
        release_at      : {year: 2020},
        show            : false
    },
    comic_major_grom_like_in_war_4                                          : {
        name            : "Майор Гром: Как на войне, часть 4",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/major_grom_like_in_war/major-grom-like-in-war-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_igor_grom"],
        authors         : [{author_id: "author_kirill_kutuzov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_oleg_chudakov", positions: ["artist"]}],
        including_comics: ["comic_major_grom_like_in_war"],
        previous_comics : ["comic_major_grom_like_in_war_3"],
        release_at      : {year: 2020},
        show            : false
    },
    comic_besoboy_vol_2_36                                                  : {
        name            : "Бесобой Vol.2 #36 Ва-банк, часть 4",
        number          : "36",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-36-all-in-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_balor", "character_viktor_zelenin",
                           "character_pavel_ocheredko", "character_shmyg", "character_yana", "character_besoboi",
                           "character_rakshor", "character_dzhanijsh", "character_verokh"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_8"],
        previous_comics : ["comic_besoboy_vol_2_35"],
        next_comics     : ["comic_besoboy_vol_2_37"],
        release_at      : {year: 2020, month: 1, day: 16},
        show            : false
    },
    comic_igor_grom_36                                                      : {
        name            : "Игорь Гром #36 Вне закона, часть 2",
        number          : "36",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-36-outside-law-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_8"],
        previous_comics : ["comic_igor_grom_35"],
        next_comics     : ["comic_igor_grom_37"],
        release_at      : {year: 2020, month: 1, day: 20},
        show            : false
    },
    comic_exlibrium_second_life_2                                           : {
        name            : "Экслибриум. Жизнь вторая #02 Безвозвратно, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-02-irrevocably-part-2.jpg`,
            aspect_ratio: 642 / 983
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_angelina_evgenevna", "character_solovei"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_1"],
        previous_comics : ["comic_exlibrium_second_life_1"],
        next_comics     : ["comic_exlibrium_second_life_3"],
        release_at      : {year: 2020, month: 1, day: 28},
        show            : false
    },
    comic_allies_37                                                         : {
        name            : "Союзники #37 На круги своя, часть 4",
        number          : "37",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-37-back-to-square-one-part-4.jpg`,
            aspect_ratio: 1050 / 1600
        },
        ranges          : ["range_allies"],
        characters      : ["character_dzhoshua_donato", "character_lotta_lemke", "character_nika_chaikina",
                           "character_miko_van_der_holt"],
        authors         : [{author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_volume_8"],
        previous_comics : ["comic_allies_36"],
        next_comics     : ["comic_allies_38"],
        release_at      : {year: 2020, month: 2, day: 1},
        show            : false
    },
    comic_igor_grom_37                                                      : {
        name            : "Игорь Гром #37 Вне закона, часть 3",
        number          : "37",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-37-outside-law-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom", "character_ilya_kosygin"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_8"],
        previous_comics : ["comic_igor_grom_36"],
        next_comics     : ["comic_igor_grom_38"],
        release_at      : {year: 2020, month: 2, day: 7},
        show            : false
    },
    comic_besoboy_vol_2_37                                                  : {
        name            : "Бесобой Vol.2 #37 Ва-банк, часть 5",
        number          : "37",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-37-all-in-part-5.jpg`,
            aspect_ratio: 642 / 983
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_pavel_ocheredko", "character_satana", "character_siergo",
                           "character_yana", "character_besoboi", "character_lilit", "character_yurik"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_8"],
        previous_comics : ["comic_besoboy_vol_2_36"],
        next_comics     : ["comic_besoboy_vol_2_38"],
        release_at      : {year: 2020, month: 2, day: 14},
        show            : false
    },
    comic_major_grom_like_in_war                                            : {
        name            : "Майор Гром: Как на войне",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/major_grom_like_in_war/major-grom-like-in-war.jpeg`,
            aspect_ratio: 605 / 926
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_igor_grom"],
        authors         : [{author_id: "author_kirill_kutuzov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_oleg_chudakov", positions: ["artist"]}],
        contained_comics: ["comic_major_grom_like_in_war_1", "comic_major_grom_like_in_war_2",
                           "comic_major_grom_like_in_war_3", "comic_major_grom_like_in_war_4"],
        previous_comics : ["comic_major_grom_volume_8"],
        release_at      : {year: 2020, month: 2, day: 23},
        show            : true
    },
    comic_exlibrium_second_life_3                                           : {
        name            : "Экслибриум. Жизнь вторая #03 Безвозвратно, часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-03-irrevocably-part-3.jpg`,
            aspect_ratio: 642 / 983
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_agata", "character_aleksandr_alinovskii", "character_evgeniya_lunyova",
                           "character_matvei_koretskii", "character_tatyana_aleksandrovna",
                           "character_yadviga_tvirinova", "character_yanvar_tvirinov", "character_liliya_romanova"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_1"],
        previous_comics : ["comic_exlibrium_second_life_2"],
        next_comics     : ["comic_exlibrium_second_life_4"],
        release_at      : {year: 2020, month: 2, day: 28},
        show            : false
    },
    comic_allies_38                                                         : {
        name            : "Союзники #38 Цепная реакция, часть 1",
        number          : "38",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-38-chain-reaction-part-1.png`,
            aspect_ratio: 637 / 975
        },
        ranges          : ["range_allies"],
        characters      : ["character_dzhessi_rodrigez", "character_dzhoshua_donato", "character_lotta_lemke",
                           "character_nika_chaikina", "character_miko_van_der_holt", "character_mihail_alvaris"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_volume_8"],
        previous_comics : ["comic_allies_37"],
        next_comics     : ["comic_allies_39"],
        release_at      : {year: 2020, month: 3, day: 1},
        show            : false
    },
    comic_jackets_and_revolvers_volume_3                                    : {
        name           : "Пиджаки и Револьверы. Том 3: Украденная магия",
        number         : "3",
        type           : "book",
        cover_file     : {
            url         : `${comicImagePath}/authors_comics/jackets_and_revolvers/jackets-and-revolvers-volume-3-stolen-magic.jpg`,
            aspect_ratio: 643 / 983
        },
        ranges         : ["range_authors_comics"],
        authors        : [{author_id: "author_yulia_zhuravleva", positions: ["artist", "colorist", "screenwriter"]},
                          {author_id: "author_ekaterina_morozova", positions: ["screenwriter"]}],
        previous_comics: ["comic_jackets_and_revolvers_volume_2"],
        next_comics    : ["comic_jackets_and_revolvers_volume_4"],
        release_at     : {year: 2020, month: 3, day: 3},
        show           : true
    },
    comic_besoboy_vol_2_38                                                  : {
        name            : "Бесобой Vol.2 #38 Ва-банк, часть 6",
        number          : "38",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-38-all-in-part-6.jpg`,
            aspect_ratio: 642 / 983
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_koroleva_gnili", "character_pavel_ocheredko",
                           "character_satana", "character_siergo", "character_chyornyi_pyos", "character_yana",
                           "character_yarh_smertonosnyi", "character_bordzh"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_8"],
        previous_comics : ["comic_besoboy_vol_2_37"],
        next_comics     : ["comic_besoboy_vol_2_39"],
        release_at      : {year: 2020, month: 3, day: 16},
        show            : false
    },
    comic_allies_volume_7                                                   : {
        name            : "Союзники. Том 7: Падение Голиафа",
        number          : "7",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-volume-7-fall-of-goliath.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_allies"],
        characters      : ["character_avgust_van_der_holt", "character_artur_haksli", "character_dzhonni",
                           "character_dzhoshua_donato", "character_lotta_lemke", "character_nika_chaikina",
                           "character_miko_van_der_holt"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        contained_comics: ["comic_allies_29", "comic_allies_30", "comic_allies_31", "comic_allies_32",
                           "comic_allies_33"],
        previous_comics : ["comic_allies_volume_6"],
        next_comics     : ["comic_allies_volume_8"],
        release_at      : {year: 2020, month: 3, day: 20},
        show            : true
    },
    comic_igor_grom_volume_6                                                : {
        name            : "Игорь Гром. Том 6: Игра в солдатики",
        number          : "6",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-volume-6-game-of-soldiers.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom", "character_valentin_kaligari_gashparov"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_anastasia_ozerova", positions: ["colorist"]},
                           {author_id: "author_gleb_melnikov", positions: ["artist"]},
                           {author_id: "author_roman_titov", positions: ["colorist"]}],
        contained_comics: ["comic_igor_grom_26", "comic_igor_grom_27", "comic_igor_grom_28", "comic_igor_grom_29",
                           "comic_igor_grom_30"],
        previous_comics : ["comic_igor_grom_volume_5"],
        next_comics     : ["comic_igor_grom_volume_7"],
        release_at      : {year: 2020, month: 3, day: 22},
        show            : true
    },
    comic_exlibrium_second_life_4                                           : {
        name            : "Экслибриум. Жизнь вторая #04 Безвозвратно, часть 4",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-04-irrevocably-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_lena_pyatkina", "character_apollon"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_1"],
        previous_comics : ["comic_exlibrium_second_life_3"],
        next_comics     : ["comic_exlibrium_second_life_5"],
        release_at      : {year: 2020, month: 3, day: 28},
        show            : false
    },
    comic_igor_grom_38                                                      : {
        name            : "Игорь Гром #38 Вне закона, часть 4",
        number          : "38",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-38-outside-law-part-4.jpg`,
            aspect_ratio: 1050 / 1600
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom", "character_ilya_kosygin"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_8"],
        previous_comics : ["comic_igor_grom_37"],
        next_comics     : ["comic_igor_grom_39"],
        release_at      : {year: 2020, month: 3},
        show            : false
    },
    comic_allies_39                                                         : {
        name            : "Союзники #39 Цепная реакция, часть 2",
        number          : "39",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-39-chain-reaction-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_dzhoshua_donato", "character_nika_chaikina", "character_miko_van_der_holt",
                           "character_mihail_alvaris"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_volume_8"],
        previous_comics : ["comic_allies_38"],
        next_comics     : ["comic_allies_40"],
        release_at      : {year: 2020, month: 4, day: 1},
        show            : false
    },
    comic_monk_king_of_parties_no_more_parties                              : {
        name           : "Инок: Король вечеринок. Никаких больше вечерИНОК",
        type           : "single",
        cover_file     : {
            url         : `${comicImagePath}/monk_king_of_parties/monk-king-of-parties-no-more-parties.jpg`,
            aspect_ratio: 1000 / 1418
        },
        ranges         : ["range_monk_king_of_parties"],
        characters     : ["character_vasilisa_premudraya", "character_vladyka", "character_magistr",
                          "character_seryi_volk", "character_andrei_radov", "character_kseniya_radova"],
        authors        : [{author_id: "author_vitaly_terletsky", positions: ["artist", "screenwriter"]}],
        previous_comics: ["comic_monk_king_of_parties"],
        release_at     : {year: 2020, month: 4, day: 1},
        show           : true
    },
    comic_falcon_2                                                          : {
        name            : "Сокол #2 Чужие правила",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/falcon/falcon-2-alien-rules.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        including_comics: ["comic_falcon_volume_1"],
        previous_comics : ["comic_falcon_1"],
        next_comics     : ["comic_falcon_3"],
        release_at      : {year: 2020, month: 4, day: 12},
        show            : false
    },
    comic_anna_space_of_options                                             : {
        name           : "АННА. Пространство вариантов",
        type           : "single",
        cover_file     : {
            url         : `${comicImagePath}/bubble_legends/anna/anna-space-of-options.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges         : ["range_bubble_legends"],
        authors        : [{author_id: "author_lada_akishina", positions: ["colorist"]},
                          {author_id: "author_ekaterina_ovchinnikova", positions: ["artist"]},
                          {author_id: "author_maxim_karganov", positions: ["screenwriter"]}],
        previous_comics: ["comic_anna_input"],
        release_at     : {year: 2020, month: 4, day: 12},
        show           : true
    },
    comic_impulse_premiere                                                  : {
        name            : "Импульс. Премьера",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/impulse/impulse-premiere.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        authors         : [{author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_denis_nechiporenko", positions: ["screenwriter"]},
                           {author_id: "author_ivan_dovbnya", positions: ["artist"]}],
        including_comics: ["comic_impulse_volume_1"],
        previous_comics : ["comic_impulse_heros_voice"],
        release_at      : {year: 2020, month: 4, day: 12},
        show            : false
    },
    comic_besoboy_vol_2_volume_7                                            : {
        name            : "Бесобой Vol.2. Том 7: Бунт",
        number          : "7",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-volume-7-riot.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_viktor_zelenin", "character_semiaza",
                           "character_tanahiya_neumolimaya", "character_yarh_smertonosnyi", "character_besoboi",
                           "character_lilit", "character_selena", "character_aleksandr_bednenko", "character_yurik",
                           "character_rakshor"],
        contained_comics: ["comic_besoboy_vol_2_29", "comic_besoboy_vol_2_30", "comic_besoboy_vol_2_31",
                           "comic_besoboy_vol_2_32"],
        previous_comics : ["comic_besoboy_vol_2_volume_6"],
        next_comics     : ["comic_besoboy_vol_2_volume_8"],
        release_at      : {year: 2020, month: 4, day: 15},
        show            : true
    },
    comic_besoboy_vol_2_39                                                  : {
        name            : "Бесобой Vol.2 #39 Убить человека",
        number          : "39",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-39-kill-man.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_semiaza", "character_tanahiya_neumolimaya", "character_chyornyi_pyos",
                           "character_yarh_smertonosnyi", "character_besoboi", "character_bordzh", "character_lilit"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_9"],
        previous_comics : ["comic_besoboy_vol_2_38"],
        next_comics     : ["comic_besoboy_vol_2_40"],
        release_at      : {year: 2020, month: 4, day: 16},
        show            : false
    },
    comic_exlibrium_second_life_5                                           : {
        name            : "Экслибриум. Жизнь вторая #05 Купель Дракона, часть 1",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-05-dragon-font-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_kira", "character_lena_pyatkina", "character_apollon"],
        authors         : [{author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_andrey_rodin", positions: ["artist"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_2"],
        previous_comics : ["comic_exlibrium_second_life_4"],
        next_comics     : ["comic_exlibrium_second_life_6"],
        release_at      : {year: 2020, month: 4, day: 28},
        show            : false
    },
    comic_exlibrium_second_life_volume_1                                    : {
        name            : "Экслибриум. Жизнь вторая. Том 1: Безвозвратно",
        number          : "1",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-volume-1-irretrievably.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_agata", "character_aleksandr_alinovskii", "character_angelina_evgenevna",
                           "character_inga_shelkovits", "character_matvei_koretskii", "character_tatyana_aleksandrovna",
                           "character_liliya_romanova"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        contained_comics: ["comic_exlibrium_second_life", "comic_exlibrium_second_life_1",
                           "comic_exlibrium_second_life_2", "comic_exlibrium_second_life_3",
                           "comic_exlibrium_second_life_4"],
        previous_comics : ["comic_exlibrium_volume_9"],
        next_comics     : ["comic_exlibrium_second_life_volume_2"],
        release_at      : {year: 2020, month: 4, day: 30},
        show            : true
    },
    comic_igor_grom_39                                                      : {
        name            : "Игорь Гром #39 Вне закона, часть 5",
        number          : "39",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-39-outside-law-part-5.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom", "character_ilya_kosygin"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_8"],
        previous_comics : ["comic_igor_grom_38"],
        next_comics     : ["comic_igor_grom_40"],
        release_at      : {year: 2020, month: 4},
        show            : false
    },
    comic_allies_40                                                         : {
        name            : "Союзники #40 Цепная реакция, часть 3",
        number          : "40",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-40-chain-reaction-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_dzhessi_rodrigez", "character_dzhoshua_donato", "character_nika_chaikina",
                           "character_miko_van_der_holt", "character_mihail_alvaris", "character_ember"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_volume_8"],
        previous_comics : ["comic_allies_39"],
        next_comics     : ["comic_allies_41"],
        release_at      : {year: 2020, month: 5, day: 1},
        show            : false
    },
    comic_plague_doctor_1                                                   : {
        name            : "Чумной Доктор",
        number          : "1",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/plague_doctor/plague-doctor.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_plague_doctor"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]}],
        including_comics: ["comic_plague_doctor_volume_1"],
        next_comics     : ["comic_plague_doctor_2"],
        release_at      : {year: 2020, month: 5, day: 4},
        show            : false
    },
    comic_igor_grom_40                                                      : {
        name            : "Игорь Гром #40 Мёртвая вода, часть 1",
        number          : "40",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-40-dead-water-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_igor_grom",
                           "character_irina_sharlotta", "character_aheron", "character_kocit", "character_stiks",
                           "character_flegeton"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_9"],
        previous_comics : ["comic_igor_grom_39"],
        next_comics     : ["comic_igor_grom_41"],
        release_at      : {year: 2020, month: 5, day: 12},
        show            : false
    },
    comic_besoboy_vol_2_40                                                  : {
        name            : "Бесобой Vol.2 #40 Смерть и ангел, часть 1",
        number          : "40",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-40-death-and-angel-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_satana", "character_semiaza", "character_yana",
                           "character_lilit"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_9"],
        previous_comics : ["comic_besoboy_vol_2_39"],
        next_comics     : ["comic_besoboy_vol_2_41"],
        release_at      : {year: 2020, month: 5, day: 18},
        show            : false
    },
    comic_exlibrium_second_life_6                                           : {
        name            : "Экслибриум. Жизнь вторая #06 Купель Дракона, часть 2",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-06-dragon-font-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_kira", "character_lena_pyatkina", "character_apollon"],
        authors         : [{author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_andrey_rodin", positions: ["artist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_2"],
        previous_comics : ["comic_exlibrium_second_life_5"],
        next_comics     : ["comic_exlibrium_second_life_7"],
        release_at      : {year: 2020, month: 5, day: 28},
        show            : false
    },
    comic_allies_41                                                         : {
        name            : "Союзники #41 Цепная реакция, часть 4",
        number          : "41",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-41-chain-reaction-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_artur_haksli", "character_dzhessi_rodrigez", "character_dzhoshua_donato",
                           "character_lotta_lemke", "character_nika_chaikina", "character_ember"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_allies_volume_8"],
        previous_comics : ["comic_allies_40"],
        next_comics     : ["comic_allies_special_idyll_single"],
        release_at      : {year: 2020, month: 6, day: 1},
        show            : false
    },
    comic_editor_signal_instance                                            : {
        name      : "Редактор: Сигнальный экземпляр",
        type      : "single",
        cover_file: {url: `${comicImagePath}/bubble_legends/editor-signal-instance.jpg`, aspect_ratio: 1339 / 2048},
        ranges    : ["range_bubble_legends"],
        authors   : [{author_id: "author_andrey_rodin", positions: ["artist"]},
                     {author_id: "author_igor_kislitsyn", positions: ["screenwriter"]},
                     {author_id: "author_margarita_kablukova", positions: ["colorist"]}],
        release_at: {year: 2020, month: 6, day: 1},
        show      : true
    },
    comic_quarantine_book_electronic                                        : {
        ...comic_quarantine_book,
        including_comics: ["comic_quarantine_book_printed"],
        previous_comics : ["comic_besoboy_vol_2_50"],
        show            : false
    },
    comic_quarantine_book_printed                                           : {
        ...comic_quarantine_book,
        contained_comics: ["comic_quarantine_book_electronic"],
        previous_comics : ["comic_besoboy_vol_2_volume_11"],
        show            : true
    },
    comic_igor_grom_41                                                      : {
        name            : "Игорь Гром #41 Мёртвая вода, часть 2",
        number          : "41",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-41-dead-water-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_igor_grom",
                           "character_irina_sharlotta", "character_aheron", "character_kocit", "character_stiks",
                           "character_flegeton"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_9"],
        previous_comics : ["comic_igor_grom_40"],
        next_comics     : ["comic_igor_grom_42"],
        release_at      : {year: 2020, month: 6, day: 10},
        show            : false
    },
    comic_besoboy_vol_2_41                                                  : {
        name            : "Бесобой Vol.2 #41 Смерть и ангел, часть 2",
        number          : "41",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-41-death-and-angel-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_koroleva_gnili", "character_satana", "character_semiaza",
                           "character_chyornyi_pyos", "character_yana", "character_lilit"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_9"],
        previous_comics : ["comic_besoboy_vol_2_40"],
        next_comics     : ["comic_besoboy_vol_2_42"],
        release_at      : {year: 2020, month: 6, day: 17},
        show            : false
    },
    comic_exlibrium_second_life_7                                           : {
        name            : "Экслибриум. Жизнь вторая #07 Купель Дракона, часть 3",
        number          : "7",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-07-dragon-font-part-3.jpg`,
            aspect_ratio: 1046 / 1600
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_kira", "character_lena_pyatkina", "character_apollon"],
        authors         : [{author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_adela_adienova", positions: ["colorist"]},
                           {author_id: "author_andrey_rodin", positions: ["artist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_2"],
        previous_comics : ["comic_exlibrium_second_life_6"],
        next_comics     : ["comic_exlibrium_second_life_8"],
        release_at      : {year: 2020, month: 6, day: 28},
        show            : false
    },
    comic_devilry_1                                                         : {
        name            : "Нечистая Сила #01 Заложные покойники",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/devilry/devilry-01-hostage-dead.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_kostya_kozlov", "character_rada", "character_lohmatyj", "character_yaakko"],
        authors         : [{author_id: "author_artyom_bizyaev", positions: ["artist", "colorist", "screenwriter"]}],
        including_comics: ["comic_devilry"],
        next_comics     : ["comic_devilry_2"],
        release_at      : {year: 2020, month: 7, day: 1},
        show            : false
    },
    comic_chosen_of_moon_1                                                  : {
        name            : "Избранница Луны, глава 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/chosen_of_moon/chosen-of-moon-chapter-1.jpg`,
            aspect_ratio: 1447 / 2048
        },
        ranges          : ["range_bubble_manga"],
        authors         : [{author_id: "author_gilbert_brissen", positions: ["screenwriter"]},
                           {author_id: "author_natalya_rerekina", positions: ["artist"]}],
        including_comics: ["comic_chosen_of_moon"],
        next_comics     : ["comic_chosen_of_moon_2"],
        release_at      : {year: 2020, month: 7, day: 1},
        show            : false
    },
    comic_igor_grom_volume_7                                                : {
        name            : "Игорь Гром. Том 7: Гори-гори ясно",
        number          : "7",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-volume-7-burn-clear.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        contained_comics: ["comic_igor_grom_31", "comic_igor_grom_32", "comic_igor_grom_33", "comic_igor_grom_34",
                           "comic_major_grom_promise"],
        previous_comics : ["comic_igor_grom_volume_6"],
        next_comics     : ["comic_igor_grom_volume_8"],
        release_at      : {year: 2020, month: 7, day: 12},
        show            : true
    },
    comic_igor_grom_42                                                      : {
        name            : "Игорь Гром #42 Мёртвая вода, часть 3",
        number          : "42",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-42-dead-water-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom", "character_aheron", "character_kocit",
                           "character_stiks", "character_flegeton"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_9"],
        previous_comics : ["comic_igor_grom_41"],
        next_comics     : ["comic_igor_grom_43"],
        release_at      : {year: 2020, month: 7, day: 15},
        show            : false
    },
    comic_besoboy_vol_2_42                                                  : {
        name            : "Бесобой Vol.2 #42 Их легионы",
        number          : "42",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-42-their-legions.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_satana", "character_tanahiya_neumolimaya",
                           "character_shmyg", "character_yarh_smertonosnyi", "character_besoboi", "character_lilit"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_9"],
        previous_comics : ["comic_besoboy_vol_2_41"],
        next_comics     : ["comic_besoboy_vol_2_43"],
        release_at      : {year: 2020, month: 7, day: 20},
        show            : false
    },
    comic_allies_volume_8                                                   : {
        name            : "Союзники. Том 8: Цепная реакция",
        number          : "8",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/allies/allies-volume-8-chain-reaction.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_allies"],
        characters      : ["character_artur_haksli", "character_dzhessi_rodrigez", "character_nika_chaikina",
                           "character_miko_van_der_holt", "character_mihail_alvaris"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]}],
        contained_comics: ["comic_allies_34", "comic_allies_35", "comic_allies_36", "comic_allies_37",
                           "comic_allies_38", "comic_allies_39", "comic_allies_40", "comic_allies_41"],
        previous_comics : ["comic_allies_volume_7"],
        next_comics     : ["comic_allies_special_idyll_book"],
        release_at      : {year: 2020, month: 7, day: 24},
        show            : true
    },
    comic_exlibrium_second_life_8                                           : {
        name            : "Экслибриум. Жизнь вторая #08 Замкнутый",
        number          : "8",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-08-closed.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_lavrentii_pavlovich", "character_tatyana_aleksandrovna",
                           "character_yadviga_tvirinova", "character_yakov", "character_yanvar_tvirinov"],
        authors         : [{author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_2"],
        previous_comics : ["comic_exlibrium_second_life_7"],
        next_comics     : ["comic_exlibrium_second_life_9"],
        release_at      : {year: 2020, month: 7, day: 28},
        show            : false
    },
    comic_devilry_2                                                         : {
        name            : "Нечистая Сила #02 Дорогая подачка",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/devilry/devilry-02-expensive-handout.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_kostya_kozlov", "character_rada", "character_lohmatyj", "character_yaakko"],
        authors         : [{author_id: "author_artyom_bizyaev", positions: ["artist", "colorist", "screenwriter"]}],
        including_comics: ["comic_devilry"],
        previous_comics : ["comic_devilry_1"],
        next_comics     : ["comic_devilry_3"],
        release_at      : {year: 2020, month: 8},
        show            : false
    },
    comic_community_1                                                       : {
        name            : "Громада",
        number          : "1",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/community/community-1.jpg`, aspect_ratio: 1046 / 1600},
        ranges          : ["range_bubble_legends", "range_childrens_comics"],
        authors         : [{author_id: "author_kirill_kutuzov", positions: ["screenwriter"]},
                           {author_id: "author_alisa_vedernikova", positions: ["colorist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["artist"]}],
        including_comics: ["comic_community"],
        next_comics     : ["comic_community_2"],
        release_at      : {year: 2020, month: 8, day: 3},
        show            : false
    },
    comic_mir_1                                                             : {
        name            : "МИР #01 Первый",
        number          : "1",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/mir/mir-01-first.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_mir"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_mir_volume_1"],
        next_comics     : ["comic_mir_2"],
        release_at      : {year: 2020, month: 8, day: 7},
        show            : false
    },
    comic_mir_volume_1                                                      : {
        name            : "МИР. Том 1: Первый",
        number          : "1",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/mir/mir-volume-1-first.jpg`, aspect_ratio: 1338 / 2047},
        ranges          : ["range_mir"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        contained_comics: ["comic_mir_1"],
        next_comics     : ["comic_mir_volume_2"],
        release_at      : {year: 2020, month: 8, day: 7},
        show            : true
    },
    comic_chosen_of_moon_2                                                  : {
        name            : "Избранница Луны, глава 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/chosen_of_moon/chosen-of-moon-chapter-2.jpg`,
            aspect_ratio: 1214 / 1718
        },
        ranges          : ["range_bubble_manga"],
        authors         : [{author_id: "author_gilbert_brissen", positions: ["screenwriter"]},
                           {author_id: "author_natalya_rerekina", positions: ["artist"]}],
        including_comics: ["comic_chosen_of_moon"],
        previous_comics : ["comic_chosen_of_moon_1"],
        next_comics     : ["comic_chosen_of_moon_3"],
        release_at      : {year: 2020, month: 8, day: 12},
        show            : false
    },
    comic_igor_grom_43                                                      : {
        name            : "Игорь Гром #43 Мёртвая вода, часть 4",
        number          : "43",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-43-dead-water-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_igor_grom",
                           "character_irina_sharlotta", "character_aheron", "character_kocit", "character_stiks",
                           "character_flegeton"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_9"],
        previous_comics : ["comic_igor_grom_42"],
        next_comics     : ["comic_igor_grom_44"],
        release_at      : {year: 2020, month: 8, day: 19},
        show            : false
    },
    comic_besoboy_vol_2_43                                                  : {
        name            : "Бесобой Vol.2 #43 Война в Аду, часть 1",
        number          : "43",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-43-war-in-hell-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_avaddon_bezzhalostnyi", "character_viktor_zelenin",
                           "character_tanahiya_neumolimaya", "character_yarh_smertonosnyi", "character_besoboi",
                           "character_lilit", "character_rakshor"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_10"],
        previous_comics : ["comic_besoboy_vol_2_42"],
        next_comics     : ["comic_besoboy_vol_2_44"],
        release_at      : {year: 2020, month: 8, day: 24},
        show            : false
    },
    comic_exlibrium_second_life_9                                           : {
        name            : "Экслибриум. Жизнь вторая #09 Щепки, часть 1",
        number          : "9",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-09-slivers-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_matvei_koretskii", "character_liza"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_3"],
        previous_comics : ["comic_exlibrium_second_life_8"],
        next_comics     : ["comic_exlibrium_second_life_10"],
        release_at      : {year: 2020, month: 8, day: 28},
        show            : false
    },
    comic_devilry_3                                                         : {
        name            : "Нечистая Сила #03 Твоё место в саду",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/devilry/devilry-03-your-place-in-garden.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_kostya_kozlov", "character_rada", "character_lohmatyj", "character_yaakko"],
        authors         : [{author_id: "author_artyom_bizyaev", positions: ["artist", "colorist", "screenwriter"]}],
        including_comics: ["comic_devilry"],
        previous_comics : ["comic_devilry_2"],
        next_comics     : ["comic_devilry_4"],
        release_at      : {year: 2020, month: 9},
        show            : false
    },
    comic_exlibrium_second_life_volume_2                                    : {
        name            : "Экслибриум. Жизнь вторая. Том 2: Купель дракона",
        number          : "2",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-volume-2-dragon-font.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_kira", "character_lena_pyatkina", "character_apollon"],
        authors         : [{author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_adela_adienova", positions: ["colorist"]},
                           {author_id: "author_andrey_rodin", positions: ["artist"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]}],
        contained_comics: ["comic_exlibrium_second_life_5", "comic_exlibrium_second_life_6",
                           "comic_exlibrium_second_life_7", "comic_exlibrium_second_life_8"],
        previous_comics : ["comic_exlibrium_second_life_volume_1"],
        next_comics     : ["comic_exlibrium_second_life_volume_3"],
        release_at      : {year: 2020, month: 9, day: 3},
        show            : true
    },
    comic_besoboy_vol_2_volume_8                                            : {
        name            : "Бесобой Vol.2. Том 8: Ва-банк",
        number          : "8",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-volume-8-all-in.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_balor", "character_viktor_zelenin",
                           "character_koroleva_gnili", "character_pavel_ocheredko", "character_satana",
                           "character_siergo", "character_shmyg", "character_yana", "character_besoboi",
                           "character_bordzh", "character_lilit", "character_yurik", "character_dzhanijsh",
                           "character_verokh"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        contained_comics: ["comic_besoboy_vol_2_33", "comic_besoboy_vol_2_34", "comic_besoboy_vol_2_35",
                           "comic_besoboy_vol_2_36", "comic_besoboy_vol_2_37", "comic_besoboy_vol_2_38"],
        previous_comics : ["comic_besoboy_vol_2_volume_7"],
        next_comics     : ["comic_besoboy_vol_2_volume_9"],
        release_at      : {year: 2020, month: 9, day: 7},
        show            : true
    },
    comic_chosen_of_moon_3                                                  : {
        name            : "Избранница Луны, глава 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/chosen_of_moon/chosen-of-moon-chapter-3.jpg`,
            aspect_ratio: 1447 / 2048
        },
        ranges          : ["range_bubble_manga"],
        authors         : [{author_id: "author_gilbert_brissen", positions: ["screenwriter"]},
                           {author_id: "author_natalya_rerekina", positions: ["artist"]}],
        including_comics: ["comic_chosen_of_moon"],
        previous_comics : ["comic_chosen_of_moon_2"],
        next_comics     : ["comic_chosen_of_moon_4"],
        release_at      : {year: 2020, month: 9, day: 10},
        show            : false
    },
    comic_igor_grom_volume_8                                                : {
        name            : "Игорь Гром. Том 8: Вне закона",
        number          : "8",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-volume-8-outside-law.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom", "character_ilya_kosygin"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        contained_comics: ["comic_igor_grom_35", "comic_igor_grom_36", "comic_igor_grom_37", "comic_igor_grom_38",
                           "comic_igor_grom_39"],
        previous_comics : ["comic_igor_grom_volume_7"],
        next_comics     : ["comic_igor_grom_volume_9"],
        release_at      : {year: 2020, month: 9, day: 12},
        show            : true
    },
    comic_besoboy_vol_2_44                                                  : {
        name            : "Бесобой Vol.2 #44 Война в Аду, часть 2",
        number          : "44",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-44-war-in-hell-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_balor", "character_satana", "character_siergo", "character_tanahiya_neumolimaya",
                           "character_shmyg", "character_yana", "character_yarh_smertonosnyi", "character_rakshor"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_10"],
        previous_comics : ["comic_besoboy_vol_2_43"],
        next_comics     : ["comic_besoboy_vol_2_45"],
        release_at      : {year: 2020, month: 9, day: 24},
        show            : false
    },
    comic_exlibrium_second_life_10                                          : {
        name            : "Экслибриум. Жизнь вторая #10 Щепки, часть 2",
        number          : "10",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-10-slivers-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_liza"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_3"],
        previous_comics : ["comic_exlibrium_second_life_9"],
        next_comics     : ["comic_exlibrium_second_life_11"],
        release_at      : {year: 2020, month: 9, day: 28},
        show            : false
    },
    comic_igor_grom_44                                                      : {
        name            : "Игорь Гром #44 Мёртвая вода, часть 5",
        number          : "44",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-44-dead-water-part-5.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_igor_grom", "character_irina_sharlotta"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_9"],
        previous_comics : ["comic_igor_grom_43"],
        next_comics     : ["comic_igor_grom_45"],
        release_at      : {year: 2020, month: 9, day: 30},
        show            : false
    },
    comic_major_grom_hero_forever_1                                         : {
        name            : "Майор Гром: Герой Навсегда, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_grom/major-grom-hero-forever-part-1.jpg`,
            aspect_ratio: 1339 / 2046
        },
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_uliya_pchyolkina", "character_igor_grom",
                           "character_umnyj_chelovek"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_major_grom_hero_forever"],
        previous_comics : ["comic_major_grom_50"],
        release_at      : {year: 2020, month: 10},
        show            : false
    },
    comic_devilry_4                                                         : {
        name            : "Нечистая Сила #04 Не слишком ли много желаний для одного джинна?",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/devilry/devilry-04-is-not-it-too-many-wishes-for-one-genie.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        characters      : ["character_kostya_kozlov", "character_rada", "character_lohmatyj", "character_yaakko"],
        authors         : [{author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_artyom_bizyaev", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_devilry"],
        previous_comics : ["comic_devilry_3"],
        release_at      : {year: 2020, month: 10},
        show            : false
    },
    comic_major_grom_hero_forever                                           : {
        name            : "Майор Гром: Герой Навсегда",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/major_grom/major-grom-hero-forever.jpeg`, aspect_ratio: 1004 / 1535},
        ranges          : ["range_major_grom"],
        characters      : ["character_dmitrii_dubin", "character_uliya_pchyolkina", "character_igor_grom",
                           "character_umnyj_chelovek"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        contained_comics: ["comic_major_grom_hero_forever_1"],
        previous_comics : ["comic_major_grom_volume_8"],
        release_at      : {year: 2020, month: 10},
        show            : true
    },
    comic_devilry                                                           : {
        name            : "Нечистая Сила",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/bubble_legends/devilry/devilry.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_bubble_legends"],
        characters      : ["character_kostya_kozlov", "character_rada", "character_lohmatyj", "character_yaakko"],
        authors         : [{author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_artyom_bizyaev", positions: ["artist", "colorist", "screenwriter"]}],
        contained_comics: ["comic_devilry_1", "comic_devilry_2", "comic_devilry_3", "comic_devilry_4"],
        release_at      : {year: 2020, month: 10},
        show            : true
    },
    comic_turbocarp                                                         : {
        name      : "ТурбоКарп",
        type      : "book",
        cover_file: {url: `${comicImagePath}/inadequate_galaxy/turbocarp.jpg`, aspect_ratio: 1339 / 2048},
        ranges    : ["range_inadequate_galaxy"],
        authors   : [{author_id: "author_vitaly_terletsky", positions: ["screenwriter"]},
                     {author_id: "author_adela_adienova", positions: ["colorist"]},
                     {author_id: "author_evgeniy_kiyamov", positions: ["artist"]}],
        release_at: {year: 2020, month: 10},
        show      : true
    },
    comic_mir_2                                                             : {
        name            : "МИР #02 Две беды, часть 1",
        number          : "2",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/mir/mir-02-two-troubles-part-1.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]}],
        including_comics: ["comic_mir_volume_2"],
        previous_comics : ["comic_mir_1"],
        next_comics     : ["comic_mir_3"],
        release_at      : {year: 2020, month: 10, day: 3},
        show            : false
    },
    comic_mir_volume_2                                                      : {
        name            : "МИР. Том 2: Две беды",
        number          : "2",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/mir/mir-volume-2-two-troubles.jpg`, aspect_ratio: 1338 / 2047},
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]}],
        contained_comics: ["comic_mir_2", "comic_mir_3"],
        previous_comics : ["comic_mir_volume_1"],
        next_comics     : ["comic_mir_volume_3"],
        release_at      : {year: 2020, month: 10, day: 3},
        show            : true
    },
    comic_plague_doctor_2                                                   : {
        name            : "Чумной Доктор №2",
        number          : "2",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/plague_doctor/plague-doctor-2.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_plague_doctor"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]}],
        including_comics: ["comic_plague_doctor_volume_1"],
        previous_comics : ["comic_plague_doctor_1"],
        next_comics     : ["comic_plague_doctor_3"],
        release_at      : {year: 2020, month: 10, day: 4},
        show            : false
    },
    comic_chosen_of_moon_4                                                  : {
        name            : "Избранница Луны, глава 4",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/chosen_of_moon/chosen-of-moon-chapter-4.jpg`,
            aspect_ratio: 1447 / 2048
        },
        ranges          : ["range_bubble_manga"],
        authors         : [{author_id: "author_gilbert_brissen", positions: ["screenwriter"]},
                           {author_id: "author_natalya_rerekina", positions: ["artist"]}],
        including_comics: ["comic_chosen_of_moon"],
        previous_comics : ["comic_chosen_of_moon_3"],
        next_comics     : ["comic_chosen_of_moon_5"],
        release_at      : {year: 2020, month: 10, day: 9},
        show            : false
    },
    comic_igor_grom_45                                                      : {
        name            : "Игорь Гром #45 Живая вода",
        number          : "45",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/igor_grom/igor-grom-45-living-water.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_aheron",
                           "character_kocit", "character_stiks", "character_flegeton", "character_umnyj_chelovek"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_10"],
        previous_comics : ["comic_igor_grom_44"],
        next_comics     : ["comic_igor_grom_46"],
        release_at      : {year: 2020, month: 10, day: 16},
        show            : false
    },
    comic_besoboy_vol_2_45                                                  : {
        name            : "Бесобой Vol.2 #45 Война в Аду, часть 3",
        number          : "45",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-45-war-in-hell-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_avaddon_bezzhalostnyi", "character_antihrist", "character_balor",
                           "character_viktor_zelenin", "character_satana", "character_yana", "character_besoboi",
                           "character_lilit"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_10"],
        previous_comics : ["comic_besoboy_vol_2_44"],
        next_comics     : ["comic_besoboy_vol_2_46"],
        release_at      : {year: 2020, month: 10, day: 28},
        show            : false
    },
    comic_exlibrium_second_life_11                                          : {
        name            : "Экслибриум. Жизнь вторая #11 Щепки, часть 3",
        number          : "11",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-11-slivers-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_agata", "character_liza", "character_nikita_zharov"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_3"],
        previous_comics : ["comic_exlibrium_second_life_10"],
        next_comics     : ["comic_exlibrium_second_life_12"],
        release_at      : {year: 2020, month: 10, day: 28},
        show            : false
    },
    comic_mir_3                                                             : {
        name            : "МИР #03 Две беды, часть 2",
        number          : "3",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/mir/mir-03-two-troubles-part-2.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]}],
        including_comics: ["comic_mir_volume_2"],
        previous_comics : ["comic_mir_2"],
        next_comics     : ["comic_mir_4"],
        release_at      : {year: 2020, month: 11, day: 3},
        show            : false
    },
    comic_chosen_of_moon_5                                                  : {
        name            : "Избранница Луны, глава 5",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/chosen_of_moon/chosen-of-moon-chapter-5.jpg`,
            aspect_ratio: 1447 / 2048
        },
        ranges          : ["range_bubble_manga"],
        authors         : [{author_id: "author_gilbert_brissen", positions: ["screenwriter"]},
                           {author_id: "author_natalya_rerekina", positions: ["artist"]}],
        including_comics: ["comic_chosen_of_moon"],
        previous_comics : ["comic_chosen_of_moon_4"],
        next_comics     : ["comic_chosen_of_moon_6"],
        release_at      : {year: 2020, month: 11, day: 11},
        show            : false
    },
    comic_besoboy_vol_2_46                                                  : {
        name            : "Бесобой Vol.2 #46 Месть",
        number          : "46",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-46-revenge.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_semiaza", "character_azazel"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_10"],
        previous_comics : ["comic_besoboy_vol_2_45"],
        next_comics     : ["comic_besoboy_vol_2_47"],
        release_at      : {year: 2020, month: 11, day: 23},
        show            : false
    },
    comic_thief_of_shadows_3                                                : {
        name            : "Вор Теней #3 Тройка коллекторов",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/thief_of_shadows/thief-of-shadows-3-three-collectors.jpg`,
            aspect_ratio: 1050 / 1600
        },
        ranges          : ["range_thief_of_shadows"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist", "colorist"]},
                           {author_id: "author_kirill_kutuzov", positions: ["screenwriter"]}],
        including_comics: ["comic_thief_of_shadows_volume_1"],
        previous_comics : ["comic_thief_of_shadows_2"],
        next_comics     : ["comic_thief_of_shadows_4"],
        release_at      : {year: 2020, month: 11, day: 24},
        show            : false
    },
    comic_thief_of_shadows_4                                                : {
        name            : "Вор Теней #4 Четвёртый глаз",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/thief_of_shadows/thief-of-shadows-4-fourth-eye.jpg`,
            aspect_ratio: 1050 / 1600
        },
        ranges          : ["range_thief_of_shadows"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_kirill_kutuzov", positions: ["screenwriter"]}],
        including_comics: ["comic_thief_of_shadows_volume_1"],
        previous_comics : ["comic_thief_of_shadows_3"],
        next_comics     : ["comic_thief_of_shadows_5"],
        release_at      : {year: 2020, month: 11, day: 24},
        show            : false
    },
    comic_thief_of_shadows_5                                                : {
        name            : "Вор Теней #5 Сомнамбулический поиск неведомого Коврова",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/thief_of_shadows/thief-of-shadows-5-somnambulistic-search-for-unknown-kovrov.jpg`,
            aspect_ratio: 1050 / 1600
        },
        ranges          : ["range_thief_of_shadows"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist", "colorist"]},
                           {author_id: "author_kirill_kutuzov", positions: ["screenwriter"]}],
        including_comics: ["comic_thief_of_shadows_volume_1"],
        previous_comics : ["comic_thief_of_shadows_4"],
        next_comics     : ["comic_thief_of_shadows_6"],
        release_at      : {year: 2020, month: 11, day: 24},
        show            : false
    },
    comic_igor_grom_46                                                      : {
        name            : "Игорь Гром #46 Чужими глазами, часть 1",
        number          : "46",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-46-through-other-peoples-eyes-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_igor_grom",
                           "character_irina_sharlotta"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_10"],
        previous_comics : ["comic_igor_grom_45"],
        next_comics     : ["comic_igor_grom_47"],
        release_at      : {year: 2020, month: 11, day: 26},
        show            : false
    },
    comic_exlibrium_second_life_12                                          : {
        name            : "Экслибриум. Жизнь вторая #12 Щепки, часть 4",
        number          : "12",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-12-slivers-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_vladimir", "character_matvei_koretskii", "character_tatyana_aleksandrovna",
                           "character_yakov", "character_liza"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_3"],
        previous_comics : ["comic_exlibrium_second_life_11"],
        next_comics     : ["comic_exlibrium_second_life_13"],
        release_at      : {year: 2020, month: 11, day: 28},
        show            : false
    },
    comic_plague_doctor_3                                                   : {
        name            : "Чумной Доктор №3",
        number          : "3",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/plague_doctor/plague-doctor-3.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_plague_doctor"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]}],
        including_comics: ["comic_plague_doctor_volume_1"],
        previous_comics : ["comic_plague_doctor_2"],
        next_comics     : ["comic_plague_doctor_4"],
        release_at      : {year: 2020, month: 11, day: 29},
        show            : false
    },
    comic_plague_doctor_volume_1                                            : {
        name            : "Чумной Доктор. Том 1: Капкан",
        number          : "1",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/plague_doctor/plague-doctor-volume-1-trap.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_plague_doctor"],
        characters      : ["character_oleg_volkov", "character_sergei_razumovskii", "character_valeriya_makarova",
                           "character_kirill_makarov"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["screenwriter"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]}],
        contained_comics: ["comic_plague_doctor_1", "comic_plague_doctor_2", "comic_plague_doctor_3",
                           "comic_plague_doctor_4"],
        next_comics     : ["comic_plague_doctor_volume_2"],
        release_at      : {year: 2020, month: 12},
        show            : true
    },
    comic_tagar_volume_3_chapter_1                                          : {
        name            : "Тагар. Том 3, глава 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-3-chapter-1.jpg`,
            aspect_ratio: 1213 / 1717
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_3"],
        previous_comics : ["comic_tagar_volume_2_chapter_5"],
        next_comics     : ["comic_tagar_volume_3_chapter_2"],
        release_at      : {year: 2020, month: 12, day: 9},
        show            : false
    },
    comic_tagar_volume_3_chapter_2                                          : {
        name            : "Тагар. Том 3, глава 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-3-chapter-2.jpg`,
            aspect_ratio: 1213 / 1717
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_3"],
        previous_comics : ["comic_tagar_volume_3_chapter_1"],
        next_comics     : ["comic_tagar_volume_3_chapter_3"],
        release_at      : {year: 2020, month: 12, day: 9},
        show            : false
    },
    comic_tagar_volume_3_chapter_3                                          : {
        name            : "Тагар. Том 3, глава 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-3-chapter-3.jpg`,
            aspect_ratio: 1213 / 1717
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_3"],
        previous_comics : ["comic_tagar_volume_3_chapter_2"],
        next_comics     : ["comic_tagar_volume_3_chapter_4"],
        release_at      : {year: 2020, month: 12, day: 9},
        show            : false
    },
    comic_tagar_volume_3_chapter_4                                          : {
        name            : "Тагар. Том 3, глава 4",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-3-chapter-4.jpg`,
            aspect_ratio: 1213 / 1717
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_3"],
        previous_comics : ["comic_tagar_volume_3_chapter_3"],
        next_comics     : ["comic_tagar_volume_3_chapter_5"],
        release_at      : {year: 2020, month: 12, day: 9},
        show            : false
    },
    comic_tagar_volume_3_chapter_5                                          : {
        name            : "Тагар. Том 3, глава 5",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-3-chapter-5.jpg`,
            aspect_ratio: 1213 / 1717
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_3"],
        previous_comics : ["comic_tagar_volume_3_chapter_4"],
        next_comics     : ["comic_tagar_volume_3_chapter_6"],
        release_at      : {year: 2020, month: 12, day: 9},
        show            : false
    },
    comic_tagar_volume_3_chapter_6                                          : {
        name            : "Тагар. Том 3, глава 6",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-3-chapter-6.jpg`,
            aspect_ratio: 1447 / 2048
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_3"],
        previous_comics : ["comic_tagar_volume_3_chapter_5"],
        next_comics     : ["comic_tagar_volume_3_chapter_7"],
        release_at      : {year: 2020, month: 12, day: 9},
        show            : false
    },
    comic_tagar_volume_3_chapter_7                                          : {
        name            : "Тагар. Том 3, глава 7",
        number          : "7",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/tagar/tagar-volume-3-chapter-7.jpg`,
            aspect_ratio: 1447 / 2048
        },
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        including_comics: ["comic_tagar_volume_3"],
        previous_comics : ["comic_tagar_volume_3_chapter_6"],
        next_comics     : ["comic_tagar_volume_4_chapter_1"],
        release_at      : {year: 2020, month: 12, day: 9},
        show            : false
    },
    comic_tagar_volume_3                                                    : {
        name            : "Тагар. Том 3",
        number          : "3",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/bubble_manga/tagar/tagar-volume-3.jpg`, aspect_ratio: 1447 / 2048},
        ranges          : ["range_authors_comics", "range_bubble_manga"],
        authors         : [{author_id: "author_marina_privalova", positions: ["artist"]},
                           {author_id: "author_anna_sergeeva", positions: ["screenwriter"]}],
        contained_comics: ["comic_tagar_volume_3_chapter_1", "comic_tagar_volume_3_chapter_2",
                           "comic_tagar_volume_3_chapter_3", "comic_tagar_volume_3_chapter_4",
                           "comic_tagar_volume_3_chapter_5", "comic_tagar_volume_3_chapter_6",
                           "comic_tagar_volume_3_chapter_7"],
        previous_comics : ["comic_tagar_volume_2"],
        next_comics     : ["comic_tagar_volume_4"],
        release_at      : {year: 2020, month: 12, day: 9},
        show            : true
    },
    comic_chosen_of_moon_6                                                  : {
        name            : "Избранница Луны, глава 6",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/chosen_of_moon/chosen-of-moon-chapter-6.jpg`,
            aspect_ratio: 1447 / 2048
        },
        ranges          : ["range_bubble_manga"],
        authors         : [{author_id: "author_gilbert_brissen", positions: ["screenwriter"]},
                           {author_id: "author_natalya_rerekina", positions: ["artist"]}],
        including_comics: ["comic_chosen_of_moon"],
        previous_comics : ["comic_chosen_of_moon_5"],
        release_at      : {year: 2020, month: 12, day: 18},
        show            : false
    },
    comic_chosen_of_moon                                                    : {
        name            : "Избранница Луны",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/chosen_of_moon/chosen-of-moon.jpg`,
            aspect_ratio: 1447 / 2048
        },
        ranges          : ["range_bubble_manga"],
        authors         : [{author_id: "author_gilbert_brissen", positions: ["screenwriter"]},
                           {author_id: "author_natalya_rerekina", positions: ["artist"]}],
        contained_comics: ["comic_chosen_of_moon_1", "comic_chosen_of_moon_2", "comic_chosen_of_moon_3",
                           "comic_chosen_of_moon_4", "comic_chosen_of_moon_5", "comic_chosen_of_moon_6"],
        release_at      : {year: 2020, month: 12, day: 23},
        show            : true
    },
    comic_igor_grom_47                                                      : {
        name            : "Игорь Гром #47 Чужими глазами, часть 2",
        number          : "47",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-47-through-other-peoples-eyes-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_igor_grom",
                           "character_irina_sharlotta"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_10"],
        previous_comics : ["comic_igor_grom_46"],
        next_comics     : ["comic_igor_grom_48"],
        release_at      : {year: 2020, month: 12, day: 25},
        show            : false
    },
    comic_mir_volume_3                                                      : {
        name            : "МИР. Том 3: Прощай, оружие",
        number          : "3",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/mir/mir-volume-3-farewell-to-arms.jpg`, aspect_ratio: 1004 / 1536},
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        contained_comics: ["comic_mir_4", "comic_mir_5"],
        previous_comics : ["comic_mir_volume_2"],
        next_comics     : ["comic_mir_volume_4"],
        release_at      : {year: 2020, month: 12, day: 25},
        show            : true
    },
    comic_plague_doctor_4                                                   : {
        name            : "Чумной Доктор №4",
        number          : "4",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/plague_doctor/plague-doctor-4.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_plague_doctor"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["screenwriter"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]}],
        including_comics: ["comic_plague_doctor_volume_1"],
        previous_comics : ["comic_plague_doctor_3"],
        next_comics     : ["comic_plague_doctor_5"],
        release_at      : {year: 2020, month: 12, day: 28},
        show            : false
    },
    comic_exlibrium_second_life_13                                          : {
        name            : "Экслибриум. Жизнь вторая #13 Точка сборки, часть 1",
        number          : "13",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-13-assemblage-point-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_angelina_evgenevna", "character_vladimir", "character_solovei",
                           "character_tatyana_aleksandrovna"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_exlibrium_second_life_volume_4"],
        previous_comics : ["comic_exlibrium_second_life_12"],
        next_comics     : ["comic_exlibrium_second_life_14"],
        release_at      : {year: 2020, month: 12, day: 28},
        show            : false
    },
    comic_besoboy_vol_2_47                                                  : {
        name            : "Бесобой Vol.2 #47 Достоин, часть 1",
        number          : "47",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-47-worthy-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_balor", "character_viktor_zelenin", "character_satana",
                           "character_yana", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_11"],
        previous_comics : ["comic_besoboy_vol_2_46"],
        next_comics     : ["comic_besoboy_vol_2_48"],
        release_at      : {year: 2020, month: 12, day: 30},
        show            : false
    },
    comic_krutiks_cool_comics_book_1                                        : {
        name            : "Крутиксы. Крутые комиксы. Книга 1",
        number          : "1",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-cool-comics-book-1.jpg`,
            aspect_ratio: 1342 / 2048
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_alexandra_bizyaeva", positions: ["artist"]},
                           {author_id: "author_evgeny_yakovlev", positions: ["artist", "screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_marina_sukhareva", positions: ["artist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["artist"]},
                           {author_id: "author_yulia_garibova", positions: ["artist", "screenwriter"]}],
        contained_comics: ["comic_krutiks_1", "comic_krutiks_2", "comic_krutiks_3", "comic_krutiks_1_2018",
                           "comic_krutiks_2_2018"],
        next_comics     : ["comic_krutiks_cool_comics_book_2"],
        release_at      : {year: 2021},
        show            : true
    },
    comic_besoboy_vol_2_48                                                  : {
        name            : "Бесобой Vol.2 #48 Достоин, часть 2",
        number          : "48",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-48-worthy-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_viktor_zelenin", "character_satana", "character_shmyg",
                           "character_yarh_smertonosnyi", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_11"],
        previous_comics : ["comic_besoboy_vol_2_47"],
        next_comics     : ["comic_besoboy_vol_2_49"],
        release_at      : {year: 2021, month: 1, day: 8},
        show            : false
    },
    comic_winter_special_plague_doctor                                      : {
        name            : "Специальный зимний спецвыпуск \"Чумной Доктор\"",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/plague_doctor/winter-special-plague-doctor.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_plague_doctor"],
        characters      : ["character_oleg_volkov", "character_sergei_razumovskii"],
        authors         : [{author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["artist"]},
                           {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]},
                           {author_id: "author_taya_makarevich", positions: ["colorist"]}],
        including_comics: ["comic_plague_doctor_volume_3"],
        previous_comics : ["comic_plague_doctor_10"],
        next_comics     : ["comic_major_igor_grom_x_plague_doctor_11"],
        release_at      : {year: 2021, month: 1, day: 13},
        show            : false
    },
    comic_igor_grom_volume_9                                                : {
        name            : "Игорь Гром. Том 9: Мёртвая вода",
        number          : "9",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-volume-9-dead-water.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_igor_grom", "character_irina_sharlotta", "character_aheron", "character_kocit",
                           "character_stiks", "character_flegeton"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        contained_comics: ["comic_igor_grom_40", "comic_igor_grom_41", "comic_igor_grom_42", "comic_igor_grom_43",
                           "comic_igor_grom_44"],
        previous_comics : ["comic_igor_grom_volume_8"],
        next_comics     : ["comic_igor_grom_volume_10"],
        release_at      : {year: 2021, month: 1, day: 22},
        show            : true
    },
    comic_exlibrium_second_life_14                                          : {
        name            : "Экслибриум. Жизнь вторая #14 Точка сборки, часть 2",
        number          : "14",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-14-assemblage-point-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_angelina_evgenevna", "character_vladimir", "character_solovei",
                           "character_tatyana_aleksandrovna"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]}],
        including_comics: ["comic_exlibrium_second_life_volume_4"],
        previous_comics : ["comic_exlibrium_second_life_13"],
        next_comics     : ["comic_exlibrium_second_life_15"],
        release_at      : {year: 2021, month: 1, day: 28},
        show            : false
    },
    comic_igor_grom_48                                                      : {
        name            : "Игорь Гром #48 Чужими глазами, часть 3",
        number          : "48",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-48-through-other-peoples-eyes-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_10"],
        previous_comics : ["comic_igor_grom_47"],
        next_comics     : ["comic_igor_grom_49"],
        release_at      : {year: 2021, month: 1, day: 29},
        show            : false
    },
    comic_besoboy_vol_2_49                                                  : {
        name            : "Бесобой Vol.2 #49 Творец",
        number          : "49",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-49-creator.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_11"],
        previous_comics : ["comic_besoboy_vol_2_48"],
        next_comics     : ["comic_besoboy_vol_2_50"],
        release_at      : {year: 2021, month: 2, day: 8},
        show            : false
    },
    comic_mir_4                                                             : {
        name            : "МИР #04 Прощай, оружие, часть 1",
        number          : "4",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/mir/mir-04-farewell-to-arms-part-1.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]}],
        including_comics: ["comic_mir_volume_3"],
        previous_comics : ["comic_mir_3"],
        next_comics     : ["comic_mir_5"],
        release_at      : {year: 2021, month: 2, day: 14},
        show            : false
    },
    comic_besoboy_vol_2_volume_9                                            : {
        name            : "Бесобой Vol.2. Том 9: Смерть и Ангел",
        number          : "9",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-volume-9-death-and-angel.jpg`,
            aspect_ratio: 1050 / 1600
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_balor", "character_koroleva_gnili", "character_satana",
                           "character_semiaza", "character_chyornyi_pyos", "character_yana", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]}],
        contained_comics: ["comic_besoboy_vol_2_39", "comic_besoboy_vol_2_40", "comic_besoboy_vol_2_41",
                           "comic_besoboy_vol_2_42"],
        previous_comics : ["comic_besoboy_vol_2_volume_8"],
        next_comics     : ["comic_besoboy_vol_2_volume_10"],
        release_at      : {year: 2021, month: 2, day: 17},
        show            : true
    },
    comic_igor_grom_49                                                      : {
        name            : "Игорь Гром #49 Чужими глазами, часть 4",
        number          : "49",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-49-through-other-peoples-eyes-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_igor_grom", "character_umnyj_chelovek"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_igor_grom_volume_10"],
        previous_comics : ["comic_igor_grom_48"],
        next_comics     : ["comic_igor_grom_50"],
        release_at      : {year: 2021, month: 2, day: 26},
        show            : false
    },
    comic_exlibrium_second_life_15                                          : {
        name            : "Экслибриум. Жизнь вторая #15 Праздник жизни, часть 1",
        number          : "15",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-15-celebration-of-life-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_agata", "character_aleksandr_alinovskii", "character_inga_shelkovits",
                           "character_matvei_koretskii", "character_liliya_romanova", "character_lena_pyatkina"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_4"],
        previous_comics : ["comic_exlibrium_second_life_14"],
        next_comics     : ["comic_exlibrium_second_life_16"],
        release_at      : {year: 2021, month: 2, day: 28},
        show            : false
    },
    comic_plague_doctor_5                                                   : {
        name            : "Чумной Доктор №5",
        number          : "5",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/plague_doctor/plague-doctor-5.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_plague_doctor"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_anastasia_kim", positions: ["screenwriter"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]}],
        including_comics: ["comic_plague_doctor_volume_2"],
        previous_comics : ["comic_plague_doctor_4"],
        next_comics     : ["comic_plague_doctor_6"],
        release_at      : {year: 2021, month: 3, day: 3},
        show            : false
    },
    comic_exlibrium_second_life_volume_3                                    : {
        name            : "Экслибриум. Жизнь вторая. Том 3: Щепки",
        number          : "3",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-volume-3-slivers.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_agata", "character_matvei_koretskii", "character_liza",
                           "character_nikita_zharov"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        contained_comics: ["comic_exlibrium_second_life_9", "comic_exlibrium_second_life_10",
                           "comic_exlibrium_second_life_11", "comic_exlibrium_second_life_12"],
        previous_comics : ["comic_exlibrium_second_life_volume_2"],
        next_comics     : ["comic_exlibrium_second_life_volume_4"],
        release_at      : {year: 2021, month: 3, day: 5},
        show            : true
    },
    comic_mir_5                                                             : {
        name            : "МИР #05 Прощай, оружие, часть 2",
        number          : "5",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/mir/mir-05-farewell-to-arms-part-2.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]}],
        including_comics: ["comic_mir_volume_3"],
        previous_comics : ["comic_mir_4"],
        next_comics     : ["comic_mir_6"],
        release_at      : {year: 2021, month: 3, day: 24},
        show            : false
    },
    comic_exlibrium_second_life_16                                          : {
        name            : "Экслибриум. Жизнь вторая #16 Праздник жизни, часть 2",
        number          : "16",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-16-celebration-of-life-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_agata", "character_aleksandr_alinovskii", "character_inga_shelkovits",
                           "character_matvei_koretskii", "character_liliya_romanova", "character_lena_pyatkina",
                           "character_apollon"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_4"],
        previous_comics : ["comic_exlibrium_second_life_15"],
        next_comics     : ["comic_exlibrium_second_life_17"],
        release_at      : {year: 2021, month: 3, day: 28},
        show            : false
    },
    comic_exlibrium_second_life_17                                          : {
        name            : "Экслибриум. Жизнь вторая #17 Праздник жизни, часть 3",
        number          : "17",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-17-celebration-of-life-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_agata", "character_aleksandr_alinovskii", "character_inga_shelkovits",
                           "character_kira", "character_matvei_koretskii", "character_liliya_romanova",
                           "character_lena_pyatkina", "character_apollon"],
        including_comics: ["comic_exlibrium_second_life_volume_4"],
        previous_comics : ["comic_exlibrium_second_life_16"],
        next_comics     : ["comic_exlibrium_second_life_18"],
        release_at      : {year: 2021, month: 4, day: 28},
        show            : false
    },
    comic_mir_eternal_memory_electronic                                     : {
        ...comic_mir_eternal_memory,
        including_comics: ["comic_mir_eternal_memory_printed"],
        previous_comics : ["comic_mir_18"],
        show            : false
    },
    comic_mir_eternal_memory_printed                                        : {
        ...comic_mir_eternal_memory,
        contained_comics: ["comic_mir_eternal_memory_electronic"],
        previous_comics : ["comic_mir_18"],
        show            : true
    },
    comic_igor_grom_50                                                      : {
        name            : "Игорь Гром #50 Завтра",
        number          : "50",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/igor_grom/igor-grom-50-tomorrow.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom", "character_valentin_kaligari_gashparov", "character_irina_sharlotta"],
        authors         : [{author_id: "author_alexandra_bizyaeva", positions: ["artist", "colorist"]},
                           {author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_artyom_bizyaev", positions: ["artist", "colorist", "screenwriter"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        including_comics: ["comic_igor_grom_volume_10"],
        previous_comics : ["comic_igor_grom_49"],
        next_comics     : ["comic_major_igor_grom_1", "comic_caligari_datura_single", "comic_rivers_no_fear_1"],
        release_at      : {year: 2021, month: 5, day: 10},
        show            : false
    },
    comic_besoboy_vol_2_50                                                  : {
        name            : "Бесобой Vol.2 #50 Данила",
        number          : "50",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-50-danila.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_besoboy_vol_2_volume_11"],
        previous_comics : ["comic_besoboy_vol_2_49"],
        next_comics     : ["comic_besoboy_and_planeswalkers_new_life_electronic", "comic_quarantine_book_electronic"],
        release_at      : {year: 2021, month: 5, day: 13},
        show            : false
    },
    comic_mir_volume_4                                                      : {
        name            : "МИР. Том 4: Тебя слышит враг",
        number          : "4",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/mir/mir-volume-4-enemy-can-hear-you.jpg`, aspect_ratio: 1000 / 1529},
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist", "colorist"]}],
        contained_comics: ["comic_mir_6", "comic_mir_7"],
        previous_comics : ["comic_mir_volume_3"],
        next_comics     : ["comic_mir_volume_5"],
        release_at      : {year: 2021, month: 5, day: 17},
        show            : true
    },
    comic_plague_doctor_6                                                   : {
        name            : "Чумной Доктор №6",
        number          : "6",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/plague_doctor/plague-doctor-6.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_plague_doctor"],
        characters      : ["character_oleg_volkov", "character_sergei_razumovskii", "character_valeriya_makarova"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]}],
        including_comics: ["comic_plague_doctor_volume_2"],
        previous_comics : ["comic_plague_doctor_5"],
        next_comics     : ["comic_plague_doctor_7"],
        release_at      : {year: 2021, month: 5, day: 27},
        show            : false
    },
    comic_exlibrium_second_life_18                                          : {
        name            : "Экслибриум. Жизнь вторая #18 Праздник жизни, часть 4",
        number          : "18",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-18-celebration-of-life-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_agata", "character_aleksandr_alinovskii", "character_inga_shelkovits",
                           "character_kira", "character_matvei_koretskii", "character_liliya_romanova",
                           "character_lena_pyatkina", "character_apollon"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_4"],
        previous_comics : ["comic_exlibrium_second_life_17"],
        next_comics     : ["comic_exlibrium_second_life_19"],
        release_at      : {year: 2021, month: 5, day: 28},
        show            : false
    },
    comic_mir_6                                                             : {
        name            : "МИР #06 Тебя слышит враг, часть 1",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/mir/mir-06-enemy-can-hear-you-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        including_comics: ["comic_mir_volume_4"],
        previous_comics : ["comic_mir_5"],
        next_comics     : ["comic_mir_7"],
        release_at      : {year: 2021, month: 6, day: 4},
        show            : false
    },
    comic_igor_grom_volume_10                                               : {
        name            : "Игорь Гром. Том 10: Чужими глазами",
        number          : "10",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/igor_grom/igor-grom-volume-10-through-other-peoples-eyes.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_liliya_abramenko", "character_ulya",
                           "character_igor_grom", "character_valentin_kaligari_gashparov", "character_irina_sharlotta",
                           "character_umnyj_chelovek"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        contained_comics: ["comic_igor_grom_45", "comic_igor_grom_46", "comic_igor_grom_47", "comic_igor_grom_48",
                           "comic_igor_grom_49", "comic_igor_grom_50"],
        previous_comics : ["comic_igor_grom_volume_9"],
        next_comics     : ["comic_major_igor_grom_volume_1", "comic_caligari_datura_book"],
        release_at      : {year: 2021, month: 6, day: 18},
        show            : true
    },
    comic_plague_doctor_7                                                   : {
        name            : "Чумной Доктор №7",
        number          : "7",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/plague_doctor/plague-doctor-7.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_plague_doctor"],
        characters      : ["character_oleg_volkov", "character_sergei_razumovskii", "character_valeriya_makarova",
                           "character_vadim_drakon"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]}],
        including_comics: ["comic_plague_doctor_volume_2"],
        previous_comics : ["comic_plague_doctor_6"],
        next_comics     : ["comic_plague_doctor_8"],
        release_at      : {year: 2021, month: 6, day: 27},
        show            : false
    },
    comic_exlibrium_second_life_19                                          : {
        name            : "Экслибриум. Жизнь вторая #19 Венец творения, часть 1",
        number          : "19",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-19-crown-of-creation-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_agata"],
        authors         : [{author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_5"],
        previous_comics : ["comic_exlibrium_second_life_18"],
        next_comics     : ["comic_exlibrium_second_life_20"],
        release_at      : {year: 2021, month: 6, day: 28},
        show            : false
    },
    comic_major_igor_grom_1                                                 : {
        name            : "Майор Игорь Гром #01 Фейк, часть 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_igor_grom/major-igor-grom-01-fake-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_major_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_igor_grom",
                           "character_irina_sharlotta"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]},
                           {author_id: "author_oleg_chudakov", positions: ["artist"]}],
        including_comics: ["comic_major_igor_grom_volume_1"],
        previous_comics : ["comic_igor_grom_50"],
        next_comics     : ["comic_major_igor_grom_2"],
        release_at      : {year: 2021, month: 7, day: 2},
        show            : false
    },
    comic_exlibrium_second_life_volume_4                                    : {
        name            : "Экслибриум. Жизнь вторая. Том 4: Праздник Жизни",
        number          : "4",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-volume-4-celebration-of-life.jpg`,
            aspect_ratio: 1004 / 1535
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_aleksandr_alinovskii", "character_angelina_evgenevna", "character_anton_varchuk",
                           "character_vladimir", "character_demien_egorov", "character_evgeniya_lunyova",
                           "character_inga_shelkovits", "character_lavrentii_pavlovich", "character_matvei_koretskii",
                           "character_snezhana_lebed", "character_tatyana_aleksandrovna", "character_liliya_romanova",
                           "character_lena_pyatkina", "character_apollon"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        contained_comics: ["comic_exlibrium_second_life_13", "comic_exlibrium_second_life_14",
                           "comic_exlibrium_second_life_15", "comic_exlibrium_second_life_16",
                           "comic_exlibrium_second_life_17", "comic_exlibrium_second_life_18"],
        previous_comics : ["comic_exlibrium_second_life_volume_3"],
        next_comics     : ["comic_exlibrium_second_life_volume_5"],
        release_at      : {year: 2021, month: 7, day: 8},
        show            : true
    },
    comic_mir_7                                                             : {
        name            : "МИР #07 Тебя слышит враг, часть 2",
        number          : "7",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/mir/mir-07-enemy-can-hear-you-part-2.jpg`,
            aspect_ratio: 1338 / 2047
        },
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        including_comics: ["comic_mir_volume_4"],
        previous_comics : ["comic_mir_6"],
        next_comics     : ["comic_mir_8"],
        release_at      : {year: 2021, month: 7, day: 9},
        show            : false
    },
    comic_exlibrium_second_life_20                                          : {
        name            : "Экслибриум. Жизнь вторая #20 Венец творения, часть 2",
        number          : "20",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-20-crown-of-creation-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_agata"],
        authors         : [{author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_5"],
        previous_comics : ["comic_exlibrium_second_life_19"],
        next_comics     : ["comic_exlibrium_second_life_21"],
        release_at      : {year: 2021, month: 7, day: 28},
        show            : false
    },
    comic_plague_doctor_8                                                   : {
        name            : "Чумной Доктор №8",
        number          : "8",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/plague_doctor/plague-doctor-8.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_plague_doctor"],
        characters      : ["character_sergei_razumovskii", "character_valeriya_makarova", "character_vadim_drakon",
                           "character_altan_dagbaev"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]}],
        including_comics: ["comic_plague_doctor_volume_2"],
        previous_comics : ["comic_plague_doctor_7"],
        next_comics     : ["comic_plague_doctor_9"],
        release_at      : {year: 2021, month: 7, day: 30},
        show            : false
    },
    comic_exlibrium_red_line_electronic                                     : {
        ...comic_exlibrium_red_line,
        including_comics: ["comic_exlibrium_red_line_printed"],
        previous_comics : ["comic_exlibrium_50", "comic_exlibrium_second_life_39"],
        show            : false
    },
    comic_exlibrium_red_line_printed                                        : {
        ...comic_exlibrium_red_line,
        contained_comics: ["comic_exlibrium_red_line_electronic"],
        previous_comics : ["comic_exlibrium_volume_9", "comic_exlibrium_second_life_39"],
        show            : true
    },
    comic_community_2                                                       : {
        name            : "Громада №2",
        number          : "2",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/community/community-2.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_bubble_legends", "range_childrens_comics"],
        authors         : [{author_id: "author_kirill_kutuzov", positions: ["screenwriter"]},
                           {author_id: "author_alisa_vedernikova", positions: ["colorist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["artist"]}],
        including_comics: ["comic_community"],
        previous_comics : ["comic_community_1"],
        next_comics     : ["comic_community_3"],
        release_at      : {year: 2021, month: 8},
        show            : false
    },
    comic_community                                                         : {
        name            : "Громада",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/community/community.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_bubble_legends", "range_childrens_comics"],
        authors         : [{author_id: "author_kirill_kutuzov", positions: ["screenwriter"]},
                           {author_id: "author_alisa_vedernikova", positions: ["colorist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["artist"]},
                           {author_id: "author_sergei_klyuchnikov", positions: ["artist"]}],
        contained_comics: ["comic_community_1", "comic_community_2", "comic_community_3", "comic_community_4"],
        next_comics     : ["comic_community_plush_and_dangerous_storybook_book"],
        release_at      : {year: 2021, month: 8},
        show            : true
    },
    comic_major_igor_grom_2                                                 : {
        name            : "Майор Игорь Гром #02 Фейк, часть 2",
        number          : "2",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_igor_grom/major-igor-grom-02-fake-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_major_igor_grom"],
        characters      : ["character_igor_grom"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_oleg_chudakov", positions: ["artist"]}],
        including_comics: ["comic_major_igor_grom_volume_1"],
        previous_comics : ["comic_major_igor_grom_1"],
        next_comics     : ["comic_major_igor_grom_3"],
        release_at      : {year: 2021, month: 8, day: 4},
        show            : false
    },
    comic_besoboy_vol_2_volume_10                                           : {
        name            : "Бесобой Vol.2. Том 10: Война в Аду",
        number          : "10",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-volume-10-war-in-hell.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_avaddon_bezzhalostnyi", "character_antihrist", "character_satana",
                           "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        contained_comics: ["comic_besoboy_vol_2_43", "comic_besoboy_vol_2_44", "comic_besoboy_vol_2_45",
                           "comic_besoboy_vol_2_46"],
        previous_comics : ["comic_besoboy_vol_2_volume_9"],
        next_comics     : ["comic_besoboy_vol_2_volume_11"],
        release_at      : {year: 2021, month: 8, day: 6},
        show            : true
    },
    comic_igor_ugor_2_5                                                     : {
        name           : "Игорь угорь 2.5: Press У to pay respect",
        number         : "2.5",
        type           : "single",
        cover_file     : {
            url         : `${comicImagePath}/inadequate_galaxy/igor_ugor/igor-ugor-2-5-press-u-to-pay-respect.jpg`,
            aspect_ratio: 1000 / 1419
        },
        ranges         : ["range_inadequate_galaxy"],
        authors        : [{author_id: "author_anastasia_kim", positions: ["artist"]},
                          {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                          {author_id: "author_denis_popov", positions: []}, // TODO: выяснить кто он
                          {author_id: "author_yulia_garibova", positions: ["artist"]}],
        previous_comics: ["comic_igor_ugor_volume_2"],
        next_comics    : ["comic_igor_ugor_3"],
        release_at     : {year: 2021, month: 8, day: 21},
        show           : true
    },
    comic_exlibrium_second_life_21                                          : {
        name            : "Экслибриум. Жизнь вторая #21 Венец творения, часть 3",
        number          : "21",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-21-crown-of-creation-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_agata", "character_angelina_evgenevna", "character_zina", "character_ameliya"],
        authors         : [{author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_5"],
        previous_comics : ["comic_exlibrium_second_life_20"],
        next_comics     : ["comic_exlibrium_second_life_22"],
        release_at      : {year: 2021, month: 8, day: 28},
        show            : false
    },
    comic_plague_doctor_volume_2                                            : {
        name            : "Чумной Доктор. Том 2: Золотой цветок",
        number          : "2",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/plague_doctor/plague-doctor-volume-2-golden-flower.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_plague_doctor"],
        characters      : ["character_oleg_volkov", "character_sergei_razumovskii", "character_valeriya_makarova",
                           "character_vadim_drakon", "character_altan_dagbaev"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_anastasia_kim", positions: ["screenwriter"]},
                           {author_id: "author_victoria_vinogradova", positions: ["colorist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]}],
        contained_comics: ["comic_plague_doctor_5", "comic_plague_doctor_6", "comic_plague_doctor_7",
                           "comic_plague_doctor_8"],
        previous_comics : ["comic_plague_doctor_volume_1"],
        next_comics     : ["comic_plague_doctor_volume_3"],
        release_at      : {year: 2021, month: 8, day: 28},
        show            : true
    },
    comic_plague_doctor_9                                                   : {
        name            : "Чумной Доктор №9",
        number          : "9",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/plague_doctor/plague-doctor-9.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_plague_doctor"],
        characters      : ["character_oleg_volkov", "character_sergei_razumovskii", "character_valeriya_makarova",
                           "character_vadim_drakon", "character_altan_dagbaev"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]}],
        including_comics: ["comic_plague_doctor_volume_3"],
        previous_comics : ["comic_plague_doctor_8"],
        next_comics     : ["comic_plague_doctor_10"],
        release_at      : {year: 2021, month: 8, day: 31},
        show            : false
    },
    comic_community_3                                                       : {
        name            : "Громада №3",
        number          : "3",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/community/community-3.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_bubble_legends", "range_childrens_comics"],
        authors         : [{author_id: "author_kirill_kutuzov", positions: ["screenwriter"]},
                           {author_id: "author_alisa_vedernikova", positions: ["colorist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["artist"]}],
        including_comics: ["comic_community"],
        previous_comics : ["comic_community_2"],
        next_comics     : ["comic_community_4"],
        release_at      : {year: 2021, month: 9},
        show            : false
    },
    comic_major_igor_grom_3                                                 : {
        name            : "Майор Игорь Гром #03 Фейк, часть 3",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_igor_grom/major-igor-grom-03-fake-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_major_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_oleg_chudakov", positions: ["artist"]}],
        including_comics: ["comic_major_igor_grom_volume_1"],
        previous_comics : ["comic_major_igor_grom_2"],
        next_comics     : ["comic_major_igor_grom_4"],
        release_at      : {year: 2021, month: 9, day: 3},
        show            : false
    },
    comic_besoboy_vol_2_volume_11                                           : {
        name            : "Бесобой Vol.2. Том 11: Творец",
        number          : "11",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/besoboy_vol_2/besoboy-vol-2-volume-11-creator.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_besoboy_vol_2"],
        characters      : ["character_antihrist", "character_balor", "character_viktor_zelenin", "character_satana",
                           "character_shmyg", "character_yana", "character_yarh_smertonosnyi", "character_besoboi"],
        authors         : [{author_id: "author_alex_hatchett", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_kim", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        contained_comics: ["comic_besoboy_vol_2_47", "comic_besoboy_vol_2_48", "comic_besoboy_vol_2_49",
                           "comic_besoboy_vol_2_50"],
        previous_comics : ["comic_besoboy_vol_2_volume_10"],
        next_comics     : ["comic_besoboy_and_planeswalkers_new_life_printed", "comic_quarantine_book_printed"],
        release_at      : {year: 2021, month: 9, day: 15},
        show            : true
    },
    comic_falcon_volume_1                                                   : {
        name            : "Сокол. Том 1",
        number          : "1",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/falcon/falcon-volume-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        authors         : [{author_id: "author_valeria_frantseva", positions: ["screenwriter"]},
                           {author_id: "author_evgeniy_frantsev", positions: ["artist"]},
                           {author_id: "author_inga_kanareeva", positions: ["screenwriter"]}],
        contained_comics: ["comic_falcon_1", "comic_falcon_2", "comic_falcon_3", "comic_falcon_4"],
        next_comics     : ["comic_falcon_volume_2"],
        release_at      : {year: 2021, month: 9, day: 22},
        show            : true
    },
    comic_jackets_and_revolvers_volume_4                                    : {
        name           : "Пиджаки и револьверы. Том 4: Кровные узы",
        number         : "4",
        type           : "book",
        cover_file     : {
            url         : `${comicImagePath}/authors_comics/jackets_and_revolvers/jackets-and-revolvers-volume-4-blood-ties.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges         : ["range_authors_comics"],
        authors        : [{author_id: "author_yulia_zhuravleva", positions: ["artist", "colorist", "screenwriter"]},
                          {author_id: "author_ekaterina_morozova", positions: ["screenwriter"]}],
        previous_comics: ["comic_jackets_and_revolvers_volume_3"],
        release_at     : {year: 2021, month: 9, day: 24},
        show           : true
    },
    comic_exlibrium_second_life_22                                          : {
        name            : "Экслибриум. Жизнь вторая #22 Бабочки в горсти",
        number          : "22",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-22-butterflies-in-handful.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_aleksandr_alinovskii", "character_evgeniya_lunyova", "character_inga_shelkovits",
                           "character_liliya_romanova"],
        authors         : [{author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_anna_shadrina", positions: ["artist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_5"],
        previous_comics : ["comic_exlibrium_second_life_21"],
        next_comics     : ["comic_exlibrium_second_life_23"],
        release_at      : {year: 2021, month: 9, day: 28},
        show            : false
    },
    comic_plague_doctor_10                                                  : {
        name            : "Чумной Доктор №10",
        number          : "10",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/plague_doctor/plague-doctor-10.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_plague_doctor"],
        characters      : ["character_oleg_volkov", "character_sergei_razumovskii", "character_valeriya_makarova",
                           "character_vadim_drakon", "character_altan_dagbaev"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_anastasia_kim", positions: ["screenwriter"]},
                           {author_id: "author_victoria_vinogradova", positions: ["artist", "colorist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_adela_adienova", positions: ["colorist"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]},
                           {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        including_comics: ["comic_plague_doctor_volume_3"],
        previous_comics : ["comic_plague_doctor_9"],
        next_comics     : ["comic_winter_special_plague_doctor"],
        release_at      : {year: 2021, month: 9, day: 29},
        show            : false
    },
    comic_community_4                                                       : {
        name            : "Громада №4",
        number          : "4",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/community/community-4.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_bubble_legends", "range_childrens_comics"],
        authors         : [{author_id: "author_kirill_kutuzov", positions: ["screenwriter"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["artist"]}],
        including_comics: ["comic_community"],
        previous_comics : ["comic_community_3"],
        next_comics     : ["comic_community_plush_and_dangerous_storybook_single"],
        release_at      : {year: 2021, month: 10},
        show            : false
    },
    comic_bubble_halloween                                                  : {
        name      : "BUBBLE Хэллоуин",
        type      : "single",
        cover_file: {url: `${comicImagePath}/bubble_legends/bubble-halloween.jpg`, aspect_ratio: 1339 / 2048},
        ranges    : ["range_bubble_legends"],
        characters: ["character_ziggi", "character_shmyg", "character_igor_grom", "character_liliya_romanova",
                     "character_besoboi", "character_valeriya_makarova"],
        release_at: {year: 2021, month: 10},
        show      : true
    },
    comic_krutiks_introduction_to_academy                                   : {
        name      : "Крутиксы. Знакомство с академией",
        type      : "single",
        cover_file: {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-introduction-to-academy.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges    : ["range_childrens_comics"],
        authors   : [{author_id: "author_alexandra_bizyaeva", positions: ["screenwriter"]},
                     {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                     {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                     {author_id: "author_natalya_martinovich", positions: ["colorist"]},
                     {author_id: "author_yulia_garibova", positions: ["artist"]}],
        release_at: {year: 2021, month: 10},
        show      : true
    },
    comic_major_igor_grom_4                                                 : {
        name            : "Майор Игорь Гром #04 Фейк, часть 4",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_igor_grom/major-igor-grom-04-fake-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_major_igor_grom"],
        characters      : ["character_igor_grom"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_oleg_chudakov", positions: ["artist"]}],
        including_comics: ["comic_major_igor_grom_volume_1"],
        previous_comics : ["comic_major_igor_grom_3"],
        next_comics     : ["comic_major_igor_grom_5"],
        release_at      : {year: 2021, month: 10, day: 6},
        show            : false
    },
    comic_major_igor_grom_volume_1                                          : {
        name            : "Майор Игорь Гром. Том 1: Фейк",
        number          : "1",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/major_igor_grom/major-igor-grom-volume-1-fake.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_major_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_fyodor_prokopenko", "character_igor_grom"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_natalya_nesterenko", positions: ["colorist"]},
                           {author_id: "author_oleg_chudakov", positions: ["artist"]}],
        contained_comics: ["comic_major_igor_grom_1", "comic_major_igor_grom_2", "comic_major_igor_grom_3",
                           "comic_major_igor_grom_4"],
        previous_comics : ["comic_igor_grom_volume_10"],
        next_comics     : ["comic_major_igor_grom_volume_2"],
        release_at      : {year: 2021, month: 10, day: 7},
        show            : true
    },
    comic_exlibrium_second_life_volume_5                                    : {
        name            : "Экслибриум. Жизнь вторая. Том 5: Венец творения",
        number          : "5",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-volume-5-crown-of-creation.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_agata", "character_zina", "character_ameliya"],
        authors         : [{author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_anna_shadrina", positions: ["artist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]},
                           {author_id: "author_tamara_petrosyan", positions: ["artist"]}],
        contained_comics: ["comic_exlibrium_second_life_19", "comic_exlibrium_second_life_20",
                           "comic_exlibrium_second_life_21", "comic_exlibrium_second_life_22"],
        previous_comics : ["comic_exlibrium_second_life_volume_4"],
        next_comics     : ["comic_exlibrium_second_life_volume_6"],
        release_at      : {year: 2021, month: 10, day: 19},
        show            : true
    },
    comic_falcon_3                                                          : {
        name            : "Сокол #3 В клетке, часть 1",
        number          : "3",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/falcon/falcon-3-caged-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        authors         : [{author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_valeria_frantseva", positions: ["screenwriter"]},
                           {author_id: "author_evgeniy_frantsev", positions: ["artist"]},
                           {author_id: "author_inga_kanareeva", positions: ["screenwriter"]}],
        including_comics: ["comic_falcon_volume_1"],
        previous_comics : ["comic_falcon_2"],
        next_comics     : ["comic_falcon_4"],
        release_at      : {year: 2021, month: 10, day: 20},
        show            : false
    },
    comic_plague_doctor_volume_3                                            : {
        name            : "Чумной Доктор. Том 3: На руинах",
        number          : "3",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/plague_doctor/plague-doctor-volume-3-in-ruins.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_plague_doctor"],
        characters      : ["character_oleg_volkov", "character_sergei_razumovskii"],
        authors         : [{author_id: "author_alina_erofeeva", positions: ["artist"]},
                           {author_id: "author_anastasia_kim", positions: ["screenwriter"]},
                           {author_id: "author_victoria_vinogradova", positions: ["artist", "colorist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_adela_adienova", positions: ["colorist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]},
                           {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        contained_comics: ["comic_plague_doctor_9", "comic_plague_doctor_10", "comic_winter_special_plague_doctor"],
        previous_comics : ["comic_plague_doctor_volume_2"],
        next_comics     : ["comic_major_igor_grom_x_plague_doctor_volume_4"],
        release_at      : {year: 2021, month: 10, day: 25},
        show            : true
    },
    comic_exlibrium_second_life_23                                          : {
        name            : "Экслибриум. Жизнь вторая #23 Петля, часть 1",
        number          : "23",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-23-loop-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_varvara_leska", "character_tamara_leska"],
        authors         : [{author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_afonina", positions: ["artist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_6"],
        previous_comics : ["comic_exlibrium_second_life_22"],
        next_comics     : ["comic_exlibrium_second_life_24"],
        release_at      : {year: 2021, month: 10, day: 28},
        show            : false
    },
    comic_major_igor_grom_x_plague_doctor_11                                : {
        name            : "Майор Игорь Гром x Чумной Доктор №11 Брат твой по мраку",
        number          : "11",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/major_igor_grom_x_plague_doctor/major-igor-grom-x-plague-doctor-11-your-brother-in-darkness.jpg`,
            aspect_ratio: 1339 / 2047
        },
        ranges          : ["range_crossovers", "range_plague_doctor", "range_major_igor_grom"],
        characters      : ["character_igor_grom", "character_sergei_razumovskii"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist", "screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_major_igor_grom_x_plague_doctor_volume_4"],
        previous_comics : ["comic_winter_special_plague_doctor", "comic_major_igor_grom_8"],
        next_comics     : ["comic_major_igor_grom_x_plague_doctor_12"],
        release_at      : {year: 2021, month: 10, day: 30},
        show            : false
    },
    comic_special_volkov_inferno_electronic                                 : {
        ...comic_special_volkov_inferno,
        including_comics: ["comic_special_volkov_inferno_printed"],
        previous_comics : ["comic_plague_doctor_30"],
        show            : false
    },
    comic_special_volkov_inferno_printed                                    : {
        ...comic_special_volkov_inferno,
        contained_comics: ["comic_special_volkov_inferno_electronic"],
        previous_comics : ["comic_plague_doctor_30"],
        show            : true
    },
    comic_mir_volume_5                                                      : {
        name            : "МИР. Том 5: Второе солнце",
        number          : "5",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/mir/mir-volume-5-second-sun.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_adela_adienova", positions: ["colorist"]},
                           {author_id: "author_alisa_vedernikova", positions: ["colorist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        contained_comics: ["comic_mir_8", "comic_mir_9"],
        previous_comics : ["comic_mir_volume_4"],
        next_comics     : ["comic_mir_volume_6"],
        release_at      : {year: 2021, month: 10, day: 30},
        show            : true
    },
    comic_mir_8                                                             : {
        name            : "МИР #08 Второе солнце, часть 1",
        number          : "8",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/mir/mir-08-second-sun-part-1.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_adela_adienova", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        including_comics: ["comic_mir_volume_5"],
        previous_comics : ["comic_mir_7"],
        next_comics     : ["comic_mir_9"],
        release_at      : {year: 2021, month: 11, day: 3},
        show            : false
    },
    comic_falcon_4                                                          : {
        name            : "Сокол #4 В клетке, часть 2",
        number          : "4",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_legends/falcon/falcon-4-caged-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_bubble_legends"],
        authors         : [{author_id: "author_valeria_frantseva", positions: ["screenwriter"]},
                           {author_id: "author_evgeniy_frantsev", positions: ["artist"]},
                           {author_id: "author_inga_kanareeva", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_falcon_volume_1"],
        previous_comics : ["comic_falcon_3"],
        next_comics     : ["comic_falcon_5"],
        release_at      : {year: 2021, month: 11, day: 10},
        show            : false
    },
    comic_major_igor_grom_5                                                 : {
        name            : "Майор Игорь Гром #05 Идеальный хищник, часть 1",
        number          : "5",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_igor_grom/major-igor-grom-05-ideal-predator-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_major_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom", "character_irina_sharlotta"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_oleg_chudakov", positions: ["artist"]}],
        including_comics: ["comic_major_igor_grom_volume_2"],
        previous_comics : ["comic_major_igor_grom_4"],
        next_comics     : ["comic_major_igor_grom_6"],
        release_at      : {year: 2021, month: 11, day: 19},
        show            : false
    },
    comic_thief_of_shadows_volume_1                                         : {
        name            : "Вор Теней",
        number          : "1",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/thief_of_shadows/thief-of-shadows.jpg`, aspect_ratio: 1489 / 2048},
        ranges          : ["range_thief_of_shadows"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_kirill_kutuzov", positions: ["screenwriter"]}],
        contained_comics: ["comic_thief_of_shadows_1", "comic_thief_of_shadows_2", "comic_thief_of_shadows_3",
                           "comic_thief_of_shadows_4", "comic_thief_of_shadows_5"],
        next_comics     : ["comic_thief_of_shadows_volume_2"],
        release_at      : {year: 2021, month: 11, day: 26},
        show            : true
    },
    comic_exlibrium_second_life_24                                          : {
        name            : "Экслибриум. Жизнь вторая #24 Петля, часть 2",
        number          : "24",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-24-loop-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_varvara_leska", "character_tamara_leska"],
        authors         : [{author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_afonina", positions: ["artist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_6"],
        previous_comics : ["comic_exlibrium_second_life_23"],
        next_comics     : ["comic_exlibrium_second_life_25"],
        release_at      : {year: 2021, month: 11, day: 28},
        show            : false
    },
    comic_major_igor_grom_x_plague_doctor_12                                : {
        name            : "Майор Игорь Гром x Чумной Доктор №12 Брат твой по мраку, часть 2",
        number          : "12",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/major_igor_grom_x_plague_doctor/major-igor-grom-x-plague-doctor-12-your-brother-in-darkness-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_crossovers", "range_plague_doctor", "range_major_igor_grom"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist", "screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]}],
        including_comics: ["comic_major_igor_grom_x_plague_doctor_volume_4"],
        previous_comics : ["comic_major_igor_grom_x_plague_doctor_11"],
        next_comics     : ["comic_major_igor_grom_x_plague_doctor_13"],
        release_at      : {year: 2021, month: 11, day: 30},
        show            : false
    },
    comic_special_prokopenko_grom_at_sunrise_electronic                     : {
        ...comic_special_prokopenko_grom_at_sunrise,
        including_comics: ["comic_special_prokopenko_grom_at_sunrise_printed"],
        previous_comics : ["comic_major_grom_50", "comic_major_igor_grom_22"],
        show            : false
    },
    comic_special_prokopenko_grom_at_sunrise_printed                        : {
        ...comic_special_prokopenko_grom_at_sunrise,
        contained_comics: ["comic_special_prokopenko_grom_at_sunrise_electronic"],
        previous_comics : ["comic_major_grom_volume_8", "comic_major_igor_grom_22"],
        show            : true
    },
    comic_soyuzmultcomics                                                   : {
        name      : "СоюзМультКомикс",
        type      : "book",
        cover_file: {url: `${comicImagePath}/childrens_comics/soyuzmultcomics.jpeg`, aspect_ratio: 428 / 654},
        ranges    : ["range_childrens_comics"],
        release_at: {year: 2021, month: 12},
        show      : true
    },
    comic_mir_9                                                             : {
        name            : "МИР #09 Второе солнце, часть 2",
        number          : "9",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/mir/mir-09-second-sun-part-2.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_adela_adienova", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        including_comics: ["comic_mir_volume_5"],
        previous_comics : ["comic_mir_8"],
        next_comics     : ["comic_mir_10"],
        release_at      : {year: 2021, month: 12, day: 1},
        show            : false
    },
    comic_thief_of_shadows_6                                                : {
        name            : "Вор Теней #6 Дача Ложных Показаний",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/thief_of_shadows/thief-of-shadows-6-perjury.jpg`,
            aspect_ratio: 1489 / 2048
        },
        ranges          : ["range_thief_of_shadows"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_kirill_kutuzov", positions: ["screenwriter"]}],
        including_comics: ["comic_thief_of_shadows_volume_2"],
        previous_comics : ["comic_thief_of_shadows_5"],
        next_comics     : ["comic_thief_of_shadows_7"],
        release_at      : {year: 2021, month: 12, day: 8},
        show            : false
    },
    comic_lady_of_radiance_1                                                : {
        name       : "Леди Сияния, глава 1",
        number     : "1",
        type       : "single",
        cover_file : {
            url         : `${comicImagePath}/bubble_manga/lady_of_radiance/lady-of-radiance-chapter-1.jpg`,
            aspect_ratio: 1447 / 2048
        },
        ranges     : ["range_bubble_manga"],
        authors    : [{author_id: "author_gilbert_brissen", positions: ["screenwriter"]},
                      {author_id: "author_natalya_rerekina", positions: ["artist"]}],
        next_comics: ["comic_lady_of_radiance_2"],
        release_at : {year: 2021, month: 12, day: 15},
        show       : true
    },
    comic_unicorn_conspiracy_volume_2                                       : {
        name           : "Заговор единорогов. Том 2. Свои",
        number         : "2",
        type           : "book",
        cover_file     : {
            url         : `${comicImagePath}/authors_comics/unicorn_conspiracy/unicorn-conspiracy-volume-2-ours.jpg`,
            aspect_ratio: 1457 / 2048
        },
        ranges         : ["range_authors_comics", "range_alex_hatchett"],
        authors        : [{author_id: "author_alex_hatchett", positions: ["artist", "screenwriter"]}],
        previous_comics: ["comic_unicorn_conspiracy_volume_1"],
        release_at     : {year: 2021, month: 12, day: 18},
        show           : true
    },
    comic_fiction_novel_major_grom                                          : {
        name      : "Художественный роман \"Майор Гром\"",
        type      : "hardcover_book",
        cover_file: {url: `${comicImagePath}/major_grom/fiction-novel-major-grom.jpg`, aspect_ratio: 1202 / 1831},
        ranges    : ["range_major_grom"],
        characters: ["character_dmitrii_dubin", "character_uliya_pchyolkina", "character_igor_grom"],
        authors   : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                     {author_id: "author_andrey_vasin", positions: ["artist"]}],
        release_at: {year: 2021, month: 12, day: 18},
        show      : true
    },
    comic_major_igor_grom_6                                                 : {
        name            : "Майор Игорь Гром #06 Идеальный хищник, часть 2",
        number          : "6",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_igor_grom/major-igor-grom-06-ideal-predator-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_major_igor_grom"],
        characters      : ["character_igor_grom"],
        authors         : [{author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_oleg_chudakov", positions: ["artist"]}],
        including_comics: ["comic_major_igor_grom_volume_2"],
        previous_comics : ["comic_major_igor_grom_5"],
        next_comics     : ["comic_major_igor_grom_7"],
        release_at      : {year: 2021, month: 12, day: 23},
        show            : false
    },
    comic_exlibrium_second_life_25                                          : {
        name            : "Экслибриум. Жизнь вторая #25 Чёрные капли, часть 1",
        number          : "25",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-25-black-drops-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_aleksandr_alinovskii", "character_inga_shelkovits", "character_kira",
                           "character_lavrentii_pavlovich", "character_matvei_koretskii", "character_liliya_romanova"],
        authors         : [{author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_6"],
        previous_comics : ["comic_exlibrium_second_life_24"],
        next_comics     : ["comic_exlibrium_second_life_26"],
        release_at      : {year: 2021, month: 12, day: 28},
        show            : false
    },
    comic_thief_of_shadows_7                                                : {
        name            : "Вор Теней #7 Невидимая рука рынка",
        number          : "7",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/thief_of_shadows/thief-of-shadows-7-invisible-hand-of-market.jpg`,
            aspect_ratio: 1489 / 2048
        },
        ranges          : ["range_thief_of_shadows"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_kirill_kutuzov", positions: ["screenwriter"]}],
        including_comics: ["comic_thief_of_shadows_volume_2"],
        previous_comics : ["comic_thief_of_shadows_6"],
        next_comics     : ["comic_thief_of_shadows_8"],
        release_at      : {year: 2022, month: 1, day: 7},
        show            : false
    },
    comic_lady_of_radiance_2                                                : {
        name           : "Леди Сияния, глава 2",
        number         : "2",
        type           : "single",
        cover_file     : {
            url         : `${comicImagePath}/bubble_manga/lady_of_radiance/lady-of-radiance-chapter-2.jpg`,
            aspect_ratio: 1447 / 2048
        },
        ranges         : ["range_bubble_manga"],
        authors        : [{author_id: "author_gilbert_brissen", positions: ["screenwriter"]},
                          {author_id: "author_natalya_rerekina", positions: ["artist"]}],
        previous_comics: ["comic_lady_of_radiance_1"],
        next_comics    : ["comic_lady_of_radiance_3"],
        release_at     : {year: 2022, month: 1, day: 14},
        show           : true
    },
    comic_major_igor_grom_7                                                 : {
        name            : "Майор Игорь Гром #07 Идеальный хищник, часть 3",
        number          : "7",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_igor_grom/major-igor-grom-07-ideal-predator-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_major_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom"],
        authors         : [{author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_oleg_chudakov", positions: ["artist"]}],
        including_comics: ["comic_major_igor_grom_volume_2"],
        previous_comics : ["comic_major_igor_grom_6"],
        next_comics     : ["comic_major_igor_grom_8"],
        release_at      : {year: 2022, month: 1, day: 28},
        show            : false
    },
    comic_exlibrium_second_life_26                                          : {
        name            : "Экслибриум. Жизнь вторая #26 Чёрные капли, часть 2",
        number          : "26",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-26-black-drops-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_aleksandr_alinovskii", "character_solovei"],
        authors         : [{author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_6"],
        previous_comics : ["comic_exlibrium_second_life_25"],
        next_comics     : ["comic_exlibrium_second_life_27"],
        release_at      : {year: 2022, month: 1, day: 28},
        show            : false
    },
    comic_krutiks_cool_comics_book_2                                        : {
        name            : "Крутиксы. Крутые комиксы. Книга 2",
        number          : "2",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-cool-comics-book-2.jpg`,
            aspect_ratio: 1536 / 2339
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_balor", "character_ziggi", "character_iango"],
        authors         : [{author_id: "author_alexandra_bizyaeva", positions: ["artist", "screenwriter"]},
                           {author_id: "author_evgeny_yakovlev", positions: ["artist", "screenwriter"]},
                           {author_id: "author_marina_sukhareva", positions: ["artist"]},
                           {author_id: "author_yulia_garibova", positions: ["artist", "screenwriter"]}],
        contained_comics: ["comic_krutiks_3_2018", "comic_krutiks_4_2018", "comic_krutiks_5_2018",
                           "comic_krutiks_6_2018", "comic_krutiks_7_2018"],
        previous_comics : ["comic_krutiks_cool_comics_book_1"],
        next_comics     : ["comic_krutiks_cool_comics_book_3"],
        release_at      : {year: 2022, month: 2},
        show            : true
    },
    comic_thief_of_shadows_8                                                : {
        name            : "Вор Теней #8 Кладбище времени",
        number          : "8",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/thief_of_shadows/thief-of-shadows-8-graveyard-of-time.jpg`,
            aspect_ratio: 1489 / 2048
        },
        ranges          : ["range_thief_of_shadows"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_kirill_kutuzov", positions: ["screenwriter"]}],
        including_comics: ["comic_thief_of_shadows_volume_2"],
        previous_comics : ["comic_thief_of_shadows_7"],
        next_comics     : ["comic_thief_of_shadows_9"],
        release_at      : {year: 2022, month: 2, day: 4},
        show            : false
    },
    comic_lady_of_radiance_3                                                : {
        name           : "Леди Сияния, глава 3",
        number         : "3",
        type           : "single",
        cover_file     : {
            url         : `${comicImagePath}/bubble_manga/lady_of_radiance/lady-of-radiance-chapter-3.jpg`,
            aspect_ratio: 1447 / 2048
        },
        ranges         : ["range_bubble_manga"],
        authors        : [{author_id: "author_gilbert_brissen", positions: ["screenwriter"]},
                          {author_id: "author_natalya_rerekina", positions: ["artist"]}],
        previous_comics: ["comic_lady_of_radiance_2"],
        next_comics    : ["comic_lady_of_radiance_4"],
        release_at     : {year: 2022, month: 2, day: 11},
        show           : true
    },
    comic_major_igor_grom_x_plague_doctor_13                                : {
        name            : "Майор Игорь Гром x Чумной Доктор №13 Брат твой по мраку, часть 3",
        number          : "13",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/major_igor_grom_x_plague_doctor/major-igor-grom-x-plague-doctor-13-your-brother-in-darkness-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_crossovers", "range_plague_doctor", "range_major_igor_grom"],
        characters      : ["character_oleg_volkov", "character_igor_grom", "character_sergei_razumovskii"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist", "screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_major_igor_grom_x_plague_doctor_volume_4"],
        previous_comics : ["comic_major_igor_grom_x_plague_doctor_12"],
        next_comics     : ["comic_major_igor_grom_x_plague_doctor_14"],
        release_at      : {year: 2022, month: 2, day: 18},
        show            : false
    },
    comic_golden_warrior                                                    : {
        name      : "Золотой Воин",
        type      : "book",
        cover_file: {url: `${comicImagePath}/authors_comics/golden-warrior.jpg`, aspect_ratio: 1339 / 2048},
        ranges    : ["range_authors_comics"],
        authors   : [{author_id: "author_madibek_musabekov", positions: ["artist"]}],
        release_at: {year: 2022, month: 2, day: 18},
        show      : true
    },
    comic_exlibrium_second_life_27                                          : {
        name            : "Экслибриум. Жизнь вторая #27 Чёрные капли, часть 3",
        number          : "27",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-27-black-drops-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_inga_shelkovits", "character_matvei_koretskii", "character_ameliya"],
        authors         : [{author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_6"],
        previous_comics : ["comic_exlibrium_second_life_26"],
        next_comics     : ["comic_exlibrium_second_life_28"],
        release_at      : {year: 2022, month: 2, day: 28},
        show            : false
    },
    comic_major_igor_grom_x_plague_doctor_14                                : {
        name            : "Майор Игорь Гром x Чумной Доктор №14 Брат твой по мраку, эпилог",
        number          : "14",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/major_igor_grom_x_plague_doctor/major-igor-grom-x-plague-doctor-14-your-brother-in-darkness-epilogue.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_crossovers", "range_plague_doctor", "range_major_igor_grom"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist", "colorist", "screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]},
                           {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_major_igor_grom_x_plague_doctor_volume_4"],
        previous_comics : ["comic_major_igor_grom_x_plague_doctor_13"],
        next_comics     : ["comic_plague_doctor_15", "comic_major_igor_grom_9"],
        release_at      : {year: 2022, month: 3, day: 2},
        show            : false
    },
    comic_thief_of_shadows_9                                                : {
        name            : "Вор Теней #9 Пятая... лишняя!",
        number          : "9",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/thief_of_shadows/thief-of-shadows-9-fifth-extra.jpg`,
            aspect_ratio: 1489 / 2048
        },
        ranges          : ["range_thief_of_shadows"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_kirill_kutuzov", positions: ["screenwriter"]}],
        including_comics: ["comic_thief_of_shadows_volume_2"],
        previous_comics : ["comic_thief_of_shadows_8"],
        next_comics     : ["comic_thief_of_shadows_10"],
        release_at      : {year: 2022, month: 3, day: 4},
        show            : false
    },
    comic_lady_of_radiance_4                                                : {
        name           : "Леди Сияния, глава 4",
        number         : "4",
        type           : "single",
        cover_file     : {
            url         : `${comicImagePath}/bubble_manga/lady_of_radiance/lady-of-radiance-chapter-4.jpg`,
            aspect_ratio: 1447 / 2048
        },
        ranges         : ["range_bubble_manga"],
        authors        : [{author_id: "author_marina_privalova", positions: ["artist"]},
                          {author_id: "author_gilbert_brissen", positions: ["screenwriter"]},
                          {author_id: "author_natalya_rerekina", positions: ["artist"]}],
        previous_comics: ["comic_lady_of_radiance_3"],
        release_at     : {year: 2022, month: 3, day: 11},
        show           : true
    },
    comic_plague_doctor_15                                                  : {
        name            : "Чумной Доктор №15 Махаон, часть 1",
        number          : "15",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/plague_doctor/plague-doctor-15-swallowtail-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_plague_doctor"],
        characters      : ["character_valeriya_makarova"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["screenwriter"]},
                           {author_id: "author_victoria_vinogradova", positions: ["artist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]}],
        including_comics: ["comic_plague_doctor_volume_5"],
        previous_comics : ["comic_major_igor_grom_x_plague_doctor_14"],
        next_comics     : ["comic_plague_doctor_16"],
        release_at      : {year: 2022, month: 3, day: 18},
        show            : false
    },
    comic_exlibrium_second_life_28                                          : {
        name            : "Экслибриум. Жизнь вторая #28 Чёрные капли, часть 4",
        number          : "28",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-28-black-drops-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_kira"],
        authors         : [{author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_7"],
        previous_comics : ["comic_exlibrium_second_life_27"],
        next_comics     : ["comic_exlibrium_second_life_29"],
        release_at      : {year: 2022, month: 3, day: 28},
        show            : false
    },
    comic_major_igor_grom_8                                                 : {
        name            : "Майор Игорь Гром #08 Идеальный хищник, часть 4",
        number          : "8",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_igor_grom/major-igor-grom-08-ideal-predator-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_major_igor_grom"],
        characters      : ["character_liliya_abramenko", "character_igor_grom", "character_irina_sharlotta"],
        authors         : [{author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_oleg_chudakov", positions: ["artist"]}],
        including_comics: ["comic_major_igor_grom_volume_2"],
        previous_comics : ["comic_major_igor_grom_7"],
        next_comics     : ["comic_major_igor_grom_x_plague_doctor_11"],
        release_at      : {year: 2022, month: 3, day: 31},
        show            : false
    },
    comic_major_igor_grom_x_plague_doctor_volume_4                          : {
        name            : "Майор Игорь Гром. Чумной Доктор. Том 4. Брат твой по мраку",
        number          : "4",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/crossovers/major_igor_grom_x_plague_doctor/major-igor-grom-x-plague-doctor-volume-4-your-brother-in-darkness.jpg`,
            aspect_ratio: 1000 / 1529
        },
        ranges          : ["range_crossovers", "range_plague_doctor", "range_major_igor_grom"],
        characters      : ["character_igor_grom", "character_sergei_razumovskii"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist", "colorist", "screenwriter"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]},
                           {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        contained_comics: ["comic_major_igor_grom_x_plague_doctor_11", "comic_major_igor_grom_x_plague_doctor_12",
                           "comic_major_igor_grom_x_plague_doctor_13", "comic_major_igor_grom_x_plague_doctor_14"],
        previous_comics : ["comic_plague_doctor_volume_3", "comic_major_igor_grom_volume_2"],
        next_comics     : ["comic_major_igor_grom_volume_3", "comic_plague_doctor_volume_5"],
        release_at      : {year: 2022, month: 3, day: 31},
        show            : true
    },
    comic_mir_10                                                            : {
        name            : "МИР #10 Серый лёд, часть 1",
        number          : "10",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/mir/mir-10-gray-ice-part-1.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_yakovlev", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_adela_adienova", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        including_comics: ["comic_mir_volume_6"],
        previous_comics : ["comic_mir_9"],
        next_comics     : ["comic_mir_11"],
        release_at      : {year: 2022, month: 4, day: 8},
        show            : false
    },
    comic_major_igor_grom_volume_2                                          : {
        name            : "Майор Игорь Гром. Том 2: Идеальный хищник",
        number          : "2",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/major_igor_grom/major-igor-grom-volume-2-ideal-predator.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_major_igor_grom"],
        characters      : ["character_igor_grom"],
        authors         : [{author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_maria_vasilyeva", positions: ["colorist"]},
                           {author_id: "author_natalya_zaidova", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_troitskaya", positions: ["colorist"]}],
        contained_comics: ["comic_major_igor_grom_5", "comic_major_igor_grom_6", "comic_major_igor_grom_7",
                           "comic_major_igor_grom_8"],
        previous_comics : ["comic_major_igor_grom_volume_1"],
        next_comics     : ["comic_major_igor_grom_x_plague_doctor_volume_4"],
        release_at      : {year: 2022, month: 4, day: 8},
        show            : true
    },
    comic_exlibrium_second_life_volume_6                                    : {
        name            : "Экслибриум. Жизнь вторая. Том 6: Чёрные капли",
        number          : "6",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-volume-6-black-drops.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_aleksandr_alinovskii", "character_varvara_leska", "character_inga_shelkovits",
                           "character_lavrentii_pavlovich", "character_matvei_koretskii", "character_solovei",
                           "character_tamara_leska", "character_liliya_romanova"],
        authors         : [{author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_anastasia_afonina", positions: ["artist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        contained_comics: ["comic_exlibrium_second_life_23", "comic_exlibrium_second_life_24",
                           "comic_exlibrium_second_life_25", "comic_exlibrium_second_life_26",
                           "comic_exlibrium_second_life_27"],
        previous_comics : ["comic_exlibrium_second_life_volume_5"],
        next_comics     : ["comic_exlibrium_second_life_volume_7"],
        release_at      : {year: 2022, month: 4, day: 8},
        show            : true
    },
    comic_major_igor_grom_9                                                 : {
        name            : "Майор Игорь Гром #09 Улыбка висельника, часть 1",
        number          : "9",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_igor_grom/major-igor-grom-09-smile-of-hanged-man-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_major_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom", "character_valentin_kaligari_gashparov",
                           "character_irina_sharlotta"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_alexey_efremov", positions: ["artist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_major_igor_grom_volume_3"],
        previous_comics : ["comic_major_igor_grom_x_plague_doctor_14"],
        next_comics     : ["comic_major_igor_grom_10"],
        release_at      : {year: 2022, month: 4, day: 22},
        show            : false
    },
    comic_plague_doctor_16                                                  : {
        name            : "Чумной Доктор №16 Махаон, часть 2",
        number          : "16",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/plague_doctor/plague-doctor-16-swallowtail-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_plague_doctor"],
        characters      : ["character_oleg_volkov", "character_sergei_razumovskii", "character_valeriya_makarova"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["screenwriter"]},
                           {author_id: "author_victoria_vinogradova", positions: ["artist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]}],
        including_comics: ["comic_plague_doctor_volume_5"],
        previous_comics : ["comic_plague_doctor_15"],
        next_comics     : ["comic_plague_doctor_17"],
        release_at      : {year: 2022, month: 4, day: 27},
        show            : false
    },
    comic_exlibrium_second_life_29                                          : {
        name            : "Экслибриум. Жизнь вторая #29 Чёрные капли, часть 5",
        number          : "29",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-29-black-drops-part-5.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_agata", "character_vladimir", "character_matvei_koretskii",
                           "character_liliya_romanova", "character_zina"],
        authors         : [{author_id: "author_jamilya_zulpikarova", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_7"],
        previous_comics : ["comic_exlibrium_second_life_28"],
        next_comics     : ["comic_exlibrium_second_life_30"],
        release_at      : {year: 2022, month: 4, day: 28},
        show            : false
    },
    comic_meteora_storybook_deception_maneuver_electronic                   : {
        ...comic_meteora_storybook_deception_maneuver,
        including_comics: ["comic_meteora_storybook_deception_maneuver_printed"],
        previous_comics : ["comic_meteora_50"],
        show            : false
    },
    comic_meteora_storybook_deception_maneuver_printed                      : {
        ...comic_meteora_storybook_deception_maneuver,
        contained_comics: ["comic_meteora_storybook_deception_maneuver_electronic"],
        previous_comics : ["comic_meteora_volume_9"],
        show            : true
    },
    comic_krutiks_cool_comics_book_3                                        : {
        name            : "Крутиксы. Крутые комиксы. Книга 3",
        number          : "3",
        type            : "book",
        cover_file      : {
            url         : `${comicImagePath}/childrens_comics/krutiks/krutiks-cool-comics-book-3.jpg`,
            aspect_ratio: 1050 / 1600
        },
        ranges          : ["range_childrens_comics"],
        characters      : ["character_ziggi", "character_iango"],
        authors         : [{author_id: "author_alexandra_bizyaeva", positions: ["artist", "screenwriter"]},
                           {author_id: "author_evgeny_yakovlev", positions: ["screenwriter"]},
                           {author_id: "author_marina_sukhareva", positions: ["artist"]},
                           {author_id: "author_yulia_garibova", positions: ["artist"]}],
        contained_comics: ["comic_krutiks_8_2018", "comic_krutiks_9_2018", "comic_krutiks_10_2018",
                           "comic_krutiks_11_2018", "comic_krutiks_12_2018", "comic_krutiks_13_2018",
                           "comic_krutiks_new_year_special"],
        previous_comics : ["comic_krutiks_cool_comics_book_2"],
        release_at      : {year: 2022, month: 5},
        show            : true
    },
    comic_mir_11                                                            : {
        name            : "МИР #11 Серый лёд, часть 2",
        number          : "11",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/mir/mir-11-gray-ice-part-2.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_adela_adienova", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        including_comics: ["comic_mir_volume_6"],
        previous_comics : ["comic_mir_10"],
        next_comics     : ["comic_mir_12"],
        release_at      : {year: 2022, month: 5, day: 6},
        show            : false
    },
    comic_major_igor_grom_10                                                : {
        name            : "Майор Игорь Гром #10 Улыбка висельника, часть 2",
        number          : "10",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_igor_grom/major-igor-grom-10-smile-of-hanged-man-part-2.jpg`,
            aspect_ratio: 1339 / 2047
        },
        ranges          : ["range_major_igor_grom"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_alexey_efremov", positions: ["artist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_major_igor_grom_volume_3"],
        previous_comics : ["comic_major_igor_grom_9"],
        next_comics     : ["comic_major_igor_grom_11"],
        release_at      : {year: 2022, month: 5, day: 20},
        show            : false
    },
    comic_plague_doctor_17                                                  : {
        name            : "Чумной Доктор №17 Махаон, часть 3",
        number          : "17",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/plague_doctor/plague-doctor-17-swallowtail-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_plague_doctor"],
        characters      : ["character_valeriya_makarova"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["screenwriter"]},
                           {author_id: "author_victoria_vinogradova", positions: ["artist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]}],
        including_comics: ["comic_plague_doctor_volume_5"],
        previous_comics : ["comic_plague_doctor_16"],
        next_comics     : ["comic_plague_doctor_18"],
        release_at      : {year: 2022, month: 5, day: 27},
        show            : false
    },
    comic_exlibrium_second_life_30                                          : {
        name            : "Экслибриум. Жизнь вторая #30 Новоселье, часть 1",
        number          : "30",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-30-housewarming-part-1.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_aleksandr_alinovskii"],
        authors         : [{author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_andrey_rodin", positions: ["artist"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_7"],
        previous_comics : ["comic_exlibrium_second_life_29"],
        next_comics     : ["comic_exlibrium_second_life_31"],
        release_at      : {year: 2022, month: 5, day: 28},
        show            : false
    },
    comic_mir_12                                                            : {
        name            : "МИР #12 За гранью",
        number          : "12",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/mir/mir-12-beyond.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_adela_adienova", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        including_comics: ["comic_mir_volume_6"],
        previous_comics : ["comic_mir_11"],
        next_comics     : ["comic_mir_13"],
        release_at      : {year: 2022, month: 6, day: 3},
        show            : false
    },
    comic_mir_volume_6                                                      : {
        name            : "МИР. Том 6: Серый лёд",
        number          : "6",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/mir/mir-volume-6-gray-ice.jpg`, aspect_ratio: 591 / 900},
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_yakovlev", positions: ["artist"]},
                           {author_id: "author_madibek_musabekov", positions: ["artist"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_adela_adienova", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        contained_comics: ["comic_mir_10", "comic_mir_11", "comic_mir_12"],
        previous_comics : ["comic_mir_volume_5"],
        next_comics     : ["comic_mir_volume_7"],
        release_at      : {year: 2022, month: 6, day: 9},
        show            : true
    },
    comic_special_phaeton_electronic                                        : {
        ...comic_special_phaeton,
        including_comics: ["comic_special_phaeton_printed"],
        previous_comics : ["comic_mir_18"],
        show            : false
    },
    comic_special_phaeton_printed                                           : {
        ...comic_special_phaeton,
        contained_comics: ["comic_special_phaeton_electronic"],
        previous_comics : ["comic_mir_18"],
        show            : true
    },
    comic_major_igor_grom_11                                                : {
        name            : "Майор Игорь Гром #11 Улыбка висельника, часть 3",
        number          : "11",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_igor_grom/major-igor-grom-11-smile-of-hanged-man-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_major_igor_grom"],
        characters      : ["character_dmitrii_dubin", "character_igor_grom", "character_valentin_kaligari_gashparov",
                           "character_irina_sharlotta"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_alexey_efremov", positions: ["artist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_major_igor_grom_volume_3"],
        previous_comics : ["comic_major_igor_grom_10"],
        next_comics     : ["comic_major_igor_grom_12"],
        release_at      : {year: 2022, month: 6, day: 27},
        show            : false
    },
    comic_exlibrium_second_life_31                                          : {
        name            : "Экслибриум. Жизнь вторая #31 Новоселье, часть 2",
        number          : "31",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-31-housewarming-part-2.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        authors         : [{author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_andrey_rodin", positions: ["artist"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_7"],
        previous_comics : ["comic_exlibrium_second_life_30"],
        next_comics     : ["comic_exlibrium_second_life_32"],
        release_at      : {year: 2022, month: 6, day: 28},
        show            : false
    },
    comic_plague_doctor_18                                                  : {
        name            : "Чумной Доктор №18 Махаон, часть 4",
        number          : "18",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/plague_doctor/plague-doctor-18-swallowtail-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_plague_doctor"],
        characters      : ["character_valeriya_makarova"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist", "screenwriter"]},
                           {author_id: "author_victoria_vinogradova", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["colorist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]}],
        including_comics: ["comic_plague_doctor_volume_5"],
        previous_comics : ["comic_plague_doctor_17"],
        next_comics     : ["comic_plague_doctor_19"],
        release_at      : {year: 2022, month: 6, day: 29},
        show            : false
    },
    comic_mir_13                                                            : {
        name            : "МИР #13 Сыновья, часть 1",
        number          : "13",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/mir/mir-13-sons-part-1.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_adela_adienova", positions: ["colorist"]},
                           {author_id: "author_anton_savinov", positions: ["artist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        including_comics: ["comic_mir_volume_7"],
        previous_comics : ["comic_mir_12"],
        next_comics     : ["comic_mir_14"],
        release_at      : {year: 2022, month: 7, day: 3},
        show            : false
    },
    comic_licorice_1                                                        : {
        name            : "Ликорис, глава 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/licorice/licorice-chapter-1.jpg`,
            aspect_ratio: 1447 / 2048
        },
        ranges          : ["range_bubble_manga"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_licorice_book_1"],
        next_comics     : ["comic_licorice_2"],
        release_at      : {year: 2022, month: 7, day: 4},
        show            : false
    },
    comic_licorice_book_1                                                   : {
        name            : "Ликорис. Книга 1",
        number          : "1",
        type            : "book",
        cover_file      : {url: `${comicImagePath}/bubble_manga/licorice/licorice-book-1.jpg`, aspect_ratio: 606 / 859},
        ranges          : ["range_bubble_manga"],
        authors         : [{author_id: "author_konstantin_tarasov", positions: ["artist"]},
                           {author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        contained_comics: ["comic_licorice_1", "comic_licorice_2", "comic_licorice_3"],
        next_comics     : ["comic_licorice_book_2"],
        release_at      : {year: 2022, month: 7, day: 6},
        show            : true
    },
    comic_ink_prince_and_book_knight_1                                      : {
        name            : "Чернильный принц и Книжный рыцарь, глава 1",
        number          : "1",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/bubble_manga/ink_prince_and_book_knight/ink-prince-and-book-knight-chapter-1.jpg`,
            aspect_ratio: 1447 / 2048
        },
        ranges          : ["range_bubble_manga"],
        authors         : [{author_id: "author_kamerim", positions: ["artist", "screenwriter"]}],
        including_comics: ["comic_ink_prince_and_book_knight"],
        next_comics     : ["comic_ink_prince_and_book_knight_2"],
        release_at      : {year: 2022, month: 7, day: 22},
        show            : false
    },
    comic_major_igor_grom_12                                                : {
        name            : "Майор Игорь Гром #12 Улыбка висельника, часть 4",
        number          : "12",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/major_igor_grom/major-igor-grom-12-smile-of-hanged-man-part-4.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_major_igor_grom"],
        characters      : ["character_igor_grom", "character_valentin_kaligari_gashparov"],
        authors         : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                           {author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                           {author_id: "author_alexey_efremov", positions: ["artist"]},
                           {author_id: "author_natalya_martinovich", positions: ["colorist"]}],
        including_comics: ["comic_major_igor_grom_volume_3"],
        previous_comics : ["comic_major_igor_grom_11"],
        next_comics     : ["comic_major_igor_grom_13"],
        release_at      : {year: 2022, month: 7, day: 26},
        show            : false
    },
    comic_exlibrium_second_life_32                                          : {
        name            : "Экслибриум. Жизнь вторая #32 Новоселье, часть 3",
        number          : "32",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/exlibrium_second_life/exlibrium-second-life-32-housewarming-part-3.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_exlibrium_second_life"],
        characters      : ["character_aleksandr_alinovskii", "character_inga_shelkovits", "character_kira"],
        authors         : [{author_id: "author_natalia_devova", positions: ["screenwriter"]},
                           {author_id: "author_andrey_rodin", positions: ["artist"]},
                           {author_id: "author_margarita_kablukova", positions: ["colorist"]}],
        including_comics: ["comic_exlibrium_second_life_volume_7"],
        previous_comics : ["comic_exlibrium_second_life_31"],
        next_comics     : ["comic_exlibrium_second_life_33"],
        release_at      : {year: 2022, month: 7, day: 28},
        show            : false
    },
    comic_plague_doctor_19                                                  : {
        name            : "Чумной Доктор №19 Махаон, часть 5",
        number          : "19",
        type            : "single",
        cover_file      : {
            url         : `${comicImagePath}/plague_doctor/plague-doctor-19-swallowtail-part-5.jpg`,
            aspect_ratio: 1339 / 2048
        },
        ranges          : ["range_plague_doctor"],
        characters      : ["character_oleg_volkov", "character_valeriya_makarova"],
        authors         : [{author_id: "author_anastasia_kim", positions: ["artist", "screenwriter"]},
                           {author_id: "author_victoria_vinogradova", positions: ["artist"]},
                           {author_id: "author_lada_akishina", positions: ["artist", "colorist"]},
                           {author_id: "author_anna_antoshchenkova", positions: ["colorist"]}],
        including_comics: ["comic_plague_doctor_volume_5"],
        previous_comics : ["comic_plague_doctor_18"],
        next_comics     : ["comic_plague_doctor_20"],
        release_at      : {year: 2022, month: 7, day: 31},
        show            : false
    },
    comic_mir_14                                                            : {
        name            : "МИР #14 Сыновья, часть 2",
        number          : "14",
        type            : "single",
        cover_file      : {url: `${comicImagePath}/mir/mir-14-sons-part-2.jpg`, aspect_ratio: 1339 / 2048},
        ranges          : ["range_mir"],
        characters      : ["character_mir", "character_aleksandra_makedonskaya"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_adela_adienova", positions: ["colorist"]},
                           {author_id: "author_taya_makarevich", positions: ["artist"]}],
        including_comics: ["comic_mir_volume_7"],
        previous_comics : ["comic_mir_13"],
        next_comics     : ["comic_heroes_and_monsters_single"],
        release_at      : {year: 2022, month: 8, day: 3},
        show            : false
    },
    comic_brother_25_years                                                  : {
        name      : "Брат. 25 лет",
        type      : "book",
        cover_file: {url: `${comicImagePath}/authors_comics/brother-25-years.jpg`, aspect_ratio: 1339 / 2048},
        ranges    : ["range_authors_comics"],
        authors   : [{author_id: "author_alexey_zamsky", positions: ["screenwriter"]},
                     {author_id: "author_andrey_vasin", positions: ["artist"]},
                     {author_id: "author_vitaly_terletsky", positions: ["screenwriter"]},
                     {author_id: "author_evgeny_fedotov", positions: ["screenwriter"]},
                     {author_id: "author_alexey_khromogin", positions: ["screenwriter"]},
                     {author_id: "author_alexander_andrianov", positions: ["artist"]},
                     {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                     {author_id: "author_anton_savinov", positions: ["artist"]},
                     {author_id: "author_askold_akishin", positions: ["artist"]},
                     {author_id: "author_daria_kislyuk", positions: ["colorist"]},
                     {author_id: "author_denis_zolotov", positions: ["screenwriter"]},
                     {author_id: "author_dmitry_feoktistov", positions: ["artist"]},
                     {author_id: "author_evgeniy_bornyakov", positions: ["artist"]},
                     {author_id: "author_evgeniy_frantsev", positions: ["artist"]},
                     {author_id: "author_ekaterina_desyatnikova", positions: ["screenwriter"]},
                     {author_id: "author_elizaveta_valikova", positions: ["artist"]},
                     {author_id: "author_karina_akhmetvalieva", positions: ["colorist"]},
                     {author_id: "author_marina_vaseva", positions: ["colorist"]},
                     {author_id: "author_nadezhda_konovalova", positions: ["screenwriter"]},
                     {author_id: "author_yulia_kazanina", positions: ["artist"]},
                     {author_id: "author_yuri_nekrasov", positions: ["screenwriter"]}],
        release_at: {year: 2022, month: 8, day: 8},
        show      : true
    },
    comic_thief_of_shadows_10                                               : {
        name            : "Вор Теней #10 Чудовищная свадьба бывшей. Спецвыпуск",
        number          : "10",
        type            : "single",
        ranges          : ["range_thief_of_shadows"],
        including_comics: ["comic_thief_of_shadows_volume_3"],
        previous_comics : ["comic_thief_of_shadows_9"],
        next_comics     : ["comic_thief_of_shadows_11"],
        release_at      : {year: 2022, month: 8, day: 5}
    },
    comic_licorice_2                                                        : {
        name            : "Ликорис, глава 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_bubble_manga"],
        including_comics: ["comic_licorice_book_1"],
        previous_comics : ["comic_licorice_1"],
        next_comics     : ["comic_licorice_3"],
        release_at      : {year: 2022, month: 8, day: 10}
    },
    comic_igor_ugor_3                                                       : {
        name           : "Игорь угорь 3: Мрачный перезапуск",
        number         : "3",
        type           : "single",
        ranges         : ["range_igor_ugor"],
        previous_comics: ["comic_igor_ugor_2_5"],
        release_at     : {year: 2022, month: 8, day: 18}
    },
    comic_major_igor_grom_13                                                : {
        name            : "Майор Игорь Гром #13 Где-то под Питером, часть 1",
        number          : "13",
        type            : "single",
        ranges          : ["range_major_igor_grom"],
        including_comics: ["comic_major_igor_grom_volume_4"],
        previous_comics : ["comic_major_igor_grom_12"],
        next_comics     : ["comic_major_igor_grom_14"],
        release_at      : {year: 2022, month: 8, day: 19}
    },
    comic_plague_doctor_20                                                  : {
        name            : "Чумной Доктор №20 Махаон, часть 6",
        number          : "20",
        type            : "single",
        ranges          : ["range_plague_doctor"],
        including_comics: ["comic_plague_doctor_volume_5"],
        previous_comics : ["comic_plague_doctor_19"],
        next_comics     : ["comic_heroes_and_monsters_single"],
        release_at      : {year: 2022, month: 8, day: 31}
    },
    comic_licorice_3                                                        : {
        name            : "Ликорис, глава 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_bubble_manga"],
        including_comics: ["comic_licorice_book_1"],
        previous_comics : ["comic_licorice_2"],
        next_comics     : ["comic_licorice_4"],
        release_at      : {year: 2022, month: 9, day: 7}
    },
    comic_exlibrium_second_life_volume_7                                    : {
        name            : "Экслибриум. Жизнь вторая. Том 7. Новоселье",
        number          : "7",
        type            : "book",
        ranges          : ["range_exlibrium_second_life"],
        contained_comics: ["comic_exlibrium_second_life_28", "comic_exlibrium_second_life_29",
                           "comic_exlibrium_second_life_30", "comic_exlibrium_second_life_31",
                           "comic_exlibrium_second_life_32"],
        previous_comics : ["comic_exlibrium_second_life_volume_6"],
        next_comics     : ["comic_exlibrium_second_life_volume_8"],
        release_at      : {year: 2022, month: 9, day: 9}
    },
    comic_major_igor_grom_volume_3                                          : {
        name            : "Майор Игорь Гром. Том 3. Улыбка Висельника",
        number          : "3",
        type            : "book",
        ranges          : ["range_major_igor_grom"],
        contained_comics: ["comic_major_igor_grom_9", "comic_major_igor_grom_10", "comic_major_igor_grom_11",
                           "comic_major_igor_grom_12"],
        previous_comics : ["comic_major_igor_grom_x_plague_doctor_volume_4"],
        next_comics     : ["comic_major_igor_grom_volume_4"],
        release_at      : {year: 2022, month: 9, day: 14}
    },
    comic_hourly_time_against_1                                             : {
        name            : "Часовой. Время против, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_besoboy", "range_bubble_legends"],
        including_comics: ["comic_hourly_time_against"],
        previous_comics : ["comic_besoboy_50"],
        next_comics     : ["comic_hourly_time_against_2"],
        release_at      : {year: 2022, month: 9, day: 16}
    },
    comic_major_igor_grom_14                                                : {
        name            : "Майор Игорь Гром #14 Где-то под Питером, часть 2",
        number          : "14",
        type            : "single",
        ranges          : ["range_major_igor_grom"],
        including_comics: ["comic_major_igor_grom_volume_4"],
        previous_comics : ["comic_major_igor_grom_13"],
        next_comics     : ["comic_major_igor_grom_15"],
        release_at      : {year: 2022, month: 9, day: 23}
    },
    comic_tagar_volume_4_chapter_1                                          : {
        name            : "Тагар. Том 4, глава 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        including_comics: ["comic_tagar_volume_4"],
        previous_comics : ["comic_tagar_volume_3_chapter_7"],
        next_comics     : ["comic_tagar_volume_4_chapter_2"],
        release_at      : {year: 2022, month: 9, day: 23}
    },
    comic_tagar_volume_4_chapter_2                                          : {
        name            : "Тагар. Том 4, глава 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        including_comics: ["comic_tagar_volume_4"],
        previous_comics : ["comic_tagar_volume_4_chapter_1"],
        next_comics     : ["comic_tagar_volume_4_chapter_3"],
        release_at      : {year: 2022, month: 9, day: 23}
    },
    comic_tagar_volume_4_chapter_3                                          : {
        name            : "Тагар. Том 4, глава 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        including_comics: ["comic_tagar_volume_4"],
        previous_comics : ["comic_tagar_volume_4_chapter_2"],
        next_comics     : ["comic_tagar_volume_4_chapter_4"],
        release_at      : {year: 2022, month: 9, day: 23}
    },
    comic_tagar_volume_4_chapter_4                                          : {
        name            : "Тагар. Том 4, глава 4",
        number          : "4",
        type            : "single",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        including_comics: ["comic_tagar_volume_4"],
        previous_comics : ["comic_tagar_volume_4_chapter_3"],
        next_comics     : ["comic_tagar_volume_4_chapter_5"],
        release_at      : {year: 2022, month: 9, day: 23}
    },
    comic_tagar_volume_4_chapter_5                                          : {
        name            : "Тагар. Том 4, глава 5",
        number          : "5",
        type            : "single",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        including_comics: ["comic_tagar_volume_4"],
        previous_comics : ["comic_tagar_volume_4_chapter_4"],
        next_comics     : ["comic_tagar_volume_4_chapter_6"],
        release_at      : {year: 2022, month: 9, day: 23}
    },
    comic_tagar_volume_4_chapter_6                                          : {
        name            : "Тагар. Том 4, глава 6",
        number          : "6",
        type            : "single",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        including_comics: ["comic_tagar_volume_4"],
        previous_comics : ["comic_tagar_volume_4_chapter_5"],
        release_at      : {year: 2022, month: 9, day: 23}
    },
    comic_tagar_volume_4                                                    : {
        name            : "Тагар. Том 4", number: "4",
        type            : "book",
        ranges          : ["range_bubble_manga", "range_marina_privalova"],
        contained_comics: ["comic_tagar_volume_4_chapter_1", "comic_tagar_volume_4_chapter_2",
                           "comic_tagar_volume_4_chapter_3", "comic_tagar_volume_4_chapter_4",
                           "comic_tagar_volume_4_chapter_5", "comic_tagar_volume_4_chapter_6"],
        previous_comics : ["comic_tagar_volume_3"],
        release_at      : {year: 2020, month: 12, day: 9}
    },
    comic_plague_doctor_21                                                  : {
        name            : "Чумной Доктор №21 Рагнар, часть 1",
        number          : "21",
        type            : "single",
        ranges          : ["range_plague_doctor"],
        including_comics: ["comic_plague_doctor_volume_6"],
        previous_comics : ["comic_heroes_and_monsters_single"],
        next_comics     : ["comic_plague_doctor_22"],
        release_at      : {year: 2022, month: 9, day: 30}
    },
    comic_krutiks_galaxy_legends                                            : {
        name      : "Крутиксы. Легенды Галактики",
        type      : "single",
        ranges    : ["range_childrens_comics"],
        release_at: {year: 2022, month: 10}
    },
    comic_mir_volume_7                                                      : {
        name            : "МИР. Том 7: Сыновья",
        number          : "7",
        type            : "book",
        ranges          : ["range_mir"],
        contained_comics: ["comic_mir_13", "comic_mir_14"],
        previous_comics : ["comic_mir_volume_6"],
        next_comics     : ["comic_heroes_and_monsters_book"],
        release_at      : {year: 2022, month: 10, day: 1}
    },
    comic_plague_doctor_volume_5                                            : {
        name            : "Чумной Доктор. Том 5: Махаон",
        number          : "5",
        type            : "book",
        ranges          : ["range_plague_doctor"],
        contained_comics: ["comic_plague_doctor_15", "comic_plague_doctor_16", "comic_plague_doctor_17",
                           "comic_plague_doctor_18", "comic_plague_doctor_19", "comic_plague_doctor_20"],
        previous_comics : ["comic_major_igor_grom_x_plague_doctor_volume_4"],
        next_comics     : ["comic_heroes_and_monsters_book"],
        release_at      : {year: 2022, month: 10, day: 1}
    },
    comic_community_plush_and_dangerous_storybook_single                    : {
        name            : "Громада. Плюшевый и опасный. Сторибук",
        type            : "single",
        ranges          : ["range_bubble_legends"],
        including_comics: ["comic_community_plush_and_dangerous_storybook_book"],
        previous_comics : ["comic_community_4"],
        release_at      : {year: 2022, month: 10, day: 1}
    },
    comic_community_plush_and_dangerous_storybook_book                      : {
        name            : "Громада. Плюшевый и опасный. Сторибук",
        type            : "book",
        ranges          : ["range_bubble_legends"],
        contained_comics: ["comic_community_plush_and_dangerous_storybook_single"],
        previous_comics : ["comic_community"],
        release_at      : {year: 2022, month: 10, day: 1}
    },
    comic_ink_prince_and_book_knight_2                                      : {
        name            : "Чернильный принц и Книжный рыцарь, глава 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_bubble_manga"],
        including_comics: ["comic_ink_prince_and_book_knight"],
        previous_comics : ["comic_ink_prince_and_book_knight_1"],
        next_comics     : ["comic_ink_prince_and_book_knight_3"],
        release_at      : {year: 2022, month: 10, day: 12}
    },
    comic_monk_legacy_single                                                : {
        name            : "Инок. Наследие",
        type            : "single",
        ranges          : ["range_monk"],
        including_comics: ["comic_monk_legacy_book"],
        previous_comics : ["comic_monk_50"],
        release_at      : {year: 2022, month: 10, day: 14}
    },
    comic_monk_legacy_book                                                  : {
        name            : "Инок. Наследие",
        type            : "book",
        ranges          : ["range_monk"],
        contained_comics: ["comic_monk_legacy_single"],
        previous_comics : ["comic_monk_volume_8"],
        release_at      : {year: 2022, month: 10, day: 14}
    },
    comic_red_fury_1966_single                                              : {
        name            : "Красная Фурия: 1966",
        type            : "single",
        ranges          : ["range_red_fury"],
        including_comics: ["comic_red_fury_1966_book"],
        previous_comics : ["comic_red_fury_50"],
        release_at      : {year: 2022, month: 10, day: 14}
    },
    comic_red_fury_1966_book                                                : {
        name            : "Красная Фурия: 1966",
        type            : "book",
        ranges          : ["range_red_fury"],
        contained_comics: ["comic_red_fury_1966_single"],
        previous_comics : ["comic_red_fury_volume_9"],
        release_at      : {year: 2022, month: 10, day: 14}
    },
    comic_hourly_time_against_2                                             : {
        name            : "Часовой. Время против, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_besoboy", "range_bubble_legends"],
        including_comics: ["comic_hourly_time_against"],
        previous_comics : ["comic_hourly_time_against_1"],
        next_comics     : ["comic_hourly_time_against_3"],
        release_at      : {year: 2022, month: 10, day: 19}
    },
    comic_caligari_datura_single                                            : {
        name            : "Калигари. Дурман",
        type            : "single",
        ranges          : ["range_bubble_legends", "range_igor_grom"],
        including_comics: ["comic_caligari_datura_book"],
        previous_comics : ["comic_igor_grom_50"],
        release_at      : {year: 2022, month: 10, day: 24}
    },
    comic_caligari_datura_book                                              : {
        name            : "Калигари. Дурман",
        type            : "book",
        ranges          : ["range_bubble_legends", "range_igor_grom"],
        contained_comics: ["comic_caligari_datura_single"],
        previous_comics : ["comic_igor_grom_volume_10"],
        release_at      : {year: 2022, month: 10, day: 24}
    },
    comic_rivers_no_fear_1                                                  : {
        name           : "Реки. Страха нет, часть 1",
        number         : "1",
        type           : "single",
        ranges         : ["range_bubble_legends", "range_igor_grom"],
        previous_comics: ["comic_igor_grom_50"],
        release_at     : {year: 2022, month: 10, day: 24}
    },
    comic_ink_prince_and_book_knight                                        : {
        name            : "Чернильный принц и Книжный рыцарь",
        type            : "book",
        ranges          : ["range_bubble_manga"],
        contained_comics: ["comic_ink_prince_and_book_knight_1", "comic_ink_prince_and_book_knight_2",
                           "comic_ink_prince_and_book_knight_3", "comic_ink_prince_and_book_knight_4"],
        release_at      : {year: 2022, month: 10, day: 24}
    },
    comic_major_igor_grom_15                                                : {
        name            : "Майор Игорь Гром #15 Где-то под Питером, часть 3",
        number          : "15",
        type            : "single",
        ranges          : ["range_major_igor_grom"],
        including_comics: ["comic_major_igor_grom_volume_4"],
        previous_comics : ["comic_major_igor_grom_14"],
        next_comics     : ["comic_major_igor_grom_16"],
        release_at      : {year: 2022, month: 10, day: 28}
    },
    comic_plague_doctor_22                                                  : {
        name            : "Чумной Доктор №22 Рагнар, часть 2",
        number          : "22",
        type            : "single",
        ranges          : ["range_plague_doctor"],
        including_comics: ["comic_plague_doctor_volume_6"],
        previous_comics : ["comic_plague_doctor_21"],
        next_comics     : ["comic_plague_doctor_23"],
        release_at      : {year: 2022, month: 10, day: 31}
    },
    comic_ink_prince_and_book_knight_3                                      : {
        name            : "Чернильный принц и Книжный рыцарь, глава 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_bubble_manga"],
        including_comics: ["comic_ink_prince_and_book_knight"],
        previous_comics : ["comic_ink_prince_and_book_knight_2"],
        next_comics     : ["comic_ink_prince_and_book_knight_4"],
        release_at      : {year: 2022, month: 11, day: 2}
    },
    comic_hourly_time_against                                               : {
        name            : "Часовой. Время против",
        type            : "book",
        ranges          : ["range_besoboy", "range_bubble_legends"],
        contained_comics: ["comic_hourly_time_against_1", "comic_hourly_time_against_2", "comic_hourly_time_against_3",
                           "comic_hourly_time_against_4", "comic_hourly_time_against_5"],
        previous_comics : ["comic_besoboy_volume_9"],
        release_at      : {year: 2022, month: 11, day: 11}
    },
    comic_hourly_time_against_3                                             : {
        name            : "Часовой. Время против, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_besoboy", "range_bubble_legends"],
        including_comics: ["comic_hourly_time_against"],
        previous_comics : ["comic_hourly_time_against_2"],
        next_comics     : ["comic_hourly_time_against_4"],
        release_at      : {year: 2022, month: 11, day: 19}
    },
    comic_major_igor_grom_16                                                : {
        name            : "Майор Игорь Гром #16 Где-то под Питером, часть 4",
        number          : "16",
        type            : "single",
        ranges          : ["range_major_igor_grom"],
        including_comics: ["comic_major_igor_grom_volume_4"],
        previous_comics : ["comic_major_igor_grom_15"],
        next_comics     : ["comic_heroes_and_monsters_single"],
        release_at      : {year: 2022, month: 11, day: 25}
    },
    comic_plague_doctor_23                                                  : {
        name            : "Чумной Доктор №23 Рагнар, часть 3",
        number          : "23",
        type            : "single",
        ranges          : ["range_plague_doctor"],
        including_comics: ["comic_plague_doctor_volume_6"],
        previous_comics : ["comic_plague_doctor_22"],
        next_comics     : ["comic_plague_doctor_24"],
        release_at      : {year: 2022, month: 11, day: 30}
    },
    comic_major_grom_riddle_of_the_sphinx                                   : {
        name            : "Майор Гром. Загадка сфинкса",
        type            : "book",
        ranges          : ["range_major_grom"],
        characters      : ["character_igor_grom"],
        authors         : [{author_id: "author_vitaly_terletsky", positions: ["screenwriter"]},
                           {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                           {author_id: "author_anna_sidorova", positions: ["colorist"]},
                           {author_id: "author_eduard_petrovich", positions: ["artist"]}],
        contained_comics: ["comic_major_grom_42", "comic_major_grom_43", "comic_major_grom_44"],
        release_at      : {year: 2022, month: 12, day: 2}
    },
    comic_ink_prince_and_book_knight_4                                      : {
        name            : "Чернильный принц и Книжный рыцарь, глава 4",
        number          : "4",
        type            : "single",
        ranges          : ["range_bubble_manga"],
        including_comics: ["comic_ink_prince_and_book_knight"],
        previous_comics : ["comic_ink_prince_and_book_knight_3"],
        release_at      : {year: 2022, month: 12, day: 2}
    },
    comic_major_igor_grom_special_duty                                      : {
        name           : "Майор Игорь Гром. Спецвыпуск. Долг",
        type           : "single",
        ranges         : ["range_major_igor_grom"],
        previous_comics: ["comic_major_igor_grom_22"],
        release_at     : {year: 2022, month: 12, day: 6}
    },
    comic_grom_difficult_childhood_anubis_rising_single                     : {
        name            : "Гром: Трудное детство. Восход Анубиса",
        type            : "single",
        ranges          : ["range_major_grom"],
        characters      : ["character_fyodor_prokopenko", "character_igor_grom"],
        authors         : [{author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]}],
        including_comics: ["comic_grom_difficult_childhood_anubis_rising_book"],
        previous_comics : ["comic_major_grom_50"],
        release_at      : {year: 2022, month: 12, day: 16}
    },
    comic_grom_difficult_childhood_anubis_rising_book                       : {
        name            : "Гром: Трудное детство. Восход Анубиса",
        type            : "book",
        ranges          : ["range_major_grom"],
        characters      : ["character_fyodor_prokopenko", "character_igor_grom"],
        authors         : [{author_id: "author_andrey_vasin", positions: ["artist"]},
                           {author_id: "author_artyom_gabrelyanov", positions: ["screenwriter"]},
                           {author_id: "author_andrey_muravyov", positions: ["colorist"]}],
        contained_comics: ["comic_grom_difficult_childhood_anubis_rising_single"],
        previous_comics : ["comic_major_grom_volume_8"],
        release_at      : {year: 2022, month: 12, day: 16}
    },
    comic_hourly_time_against_4                                             : {
        name            : "Часовой. Время против, часть 4",
        number          : "4",
        type            : "single",
        ranges          : ["range_besoboy", "range_bubble_legends"],
        including_comics: ["comic_hourly_time_against"],
        previous_comics : ["comic_hourly_time_against_3"],
        next_comics     : ["comic_hourly_time_against_5"],
        release_at      : {year: 2022, month: 12, day: 19}
    },
    comic_plague_doctor_24                                                  : {
        name            : "Чумной Доктор №24 Рагнар, часть 4",
        number          : "24",
        type            : "single",
        ranges          : ["range_plague_doctor"],
        including_comics: ["comic_plague_doctor_volume_6"],
        previous_comics : ["comic_plague_doctor_23"],
        next_comics     : ["comic_plague_doctor_25"],
        release_at      : {year: 2022, month: 12, day: 30}
    },
    comic_sister_kukki                                                      : {
        name            : "Сестра. Кукки",
        type            : "book",
        ranges          : ["range_bubble_legends", "range_new_bubble_heroes"],
        contained_comics: ["comic_sister_kukki_1"],
        release_at      : {year: 2023}
    },
    comic_licorice_4                                                        : {
        name            : "Ликорис, глава 4",
        number          : "4",
        type            : "single",
        ranges          : ["range_bubble_manga"],
        including_comics: ["comic_licorice_book_2"],
        previous_comics : ["comic_licorice_3"],
        next_comics     : ["comic_licorice_5"],
        release_at      : {year: 2023, month: 1, day: 6}
    },
    comic_hourly_time_against_5                                             : {
        name            : "Часовой. Время против, часть 5",
        number          : "5",
        type            : "single",
        ranges          : ["range_besoboy", "range_bubble_legends"],
        including_comics: ["comic_hourly_time_against"],
        previous_comics : ["comic_hourly_time_against_4"],
        release_at      : {year: 2023, month: 1, day: 19}
    },
    comic_witch_1                                                           : {
        name            : "Ведьма №1 По проводам, часть 1",
        number          : "1",
        type            : "single",
        ranges          : ["range_witch"],
        including_comics: ["comic_witch_volume_1"],
        next_comics     : ["comic_witch_2"],
        release_at      : {year: 2023, month: 1, day: 20}
    },
    comic_exlibrium_second_life_33                                          : {
        name            : "Экслибриум. Жизнь вторая #33 После дождичка, часть 1",
        number          : "33",
        type            : "single",
        ranges          : ["range_exlibrium_second_life"],
        including_comics: ["comic_exlibrium_second_life_volume_8"],
        previous_comics : ["comic_exlibrium_second_life_32"],
        next_comics     : ["comic_exlibrium_second_life_34"],
        release_at      : {year: 2023, month: 1, day: 27}
    },
    comic_falcon_volume_2                                                   : {
        name            : "Сокол. Том 2",
        number          : "2",
        type            : "book",
        ranges          : ["range_bubble_legends", "range_new_bubble_heroes"],
        contained_comics: ["comic_falcon_5", "comic_falcon_6", "comic_falcon_7"],
        previous_comics : ["comic_falcon_volume_1"],
        release_at      : {year: 2023, month: 1, day: 28}
    },
    comic_heroes_and_monsters_single                                        : {
        name            : "Герои и монстры",
        type            : "single",
        ranges          : ["range_crossovers", "range_plague_doctor", "range_mir", "range_major_igor_grom"],
        including_comics: ["comic_heroes_and_monsters_book"],
        previous_comics : ["comic_mir_14", "comic_plague_doctor_20", "comic_major_igor_grom_16"],
        next_comics     : ["comic_plague_doctor_21", "comic_major_igor_grom_17", "comic_mir_15"],
        release_at      : {year: 2023, month: 1, day: 31}
    },
    comic_heroes_and_monsters_book                                          : {
        name            : "Герои и монстры",
        type            : "book",
        ranges          : ["range_crossovers", "range_plague_doctor", "range_mir", "range_major_igor_grom"],
        contained_comics: ["comic_heroes_and_monsters_single"],
        previous_comics : ["comic_mir_volume_7", "comic_plague_doctor_volume_5", "comic_major_igor_grom_volume_4"],
        next_comics     : ["comic_plague_doctor_volume_6", "comic_mir_volume_8", "comic_major_igor_grom_volume_5"],
        release_at      : {year: 2023, month: 1, day: 31}
    },
    comic_bubble_triptych_1                                                 : {
        name       : "BUBBLE Триптих, часть 1",
        number     : "1",
        type       : "single",
        ranges     : ["range_bubble_triptych"],
        next_comics: ["comic_bubble_triptych_2"],
        release_at : {year: 2023, month: 2, day: 1}
    },
    comic_bubble_gam_almanac_1                                              : {
        name       : "BUBBLE ГАМ. Альманах #1",
        number     : "1",
        type       : "single",
        ranges     : ["range_gam"],
        next_comics: ["comic_bubble_gam_almanac_2"],
        release_at : {year: 2023, month: 2, day: 2}
    },
    comic_major_igor_grom_volume_4                                          : {
        name            : "Майор Игорь Гром. Том 4. Где-то под Питером",
        number          : "4",
        type            : "book",
        ranges          : ["range_major_igor_grom"],
        contained_comics: ["comic_major_igor_grom_13", "comic_major_igor_grom_14", "comic_major_igor_grom_15",
                           "comic_major_igor_grom_16"],
        previous_comics : ["comic_major_igor_grom_volume_3"],
        next_comics     : ["comic_heroes_and_monsters_book"],
        release_at      : {year: 2023, month: 2, day: 4}
    },
    comic_plague_doctor_volume_6                                            : {
        name            : "Чумной Доктор. Том 6. Рагнар. Часть 1",
        number          : "6",
        type            : "book",
        ranges          : ["range_plague_doctor"],
        contained_comics: ["comic_plague_doctor_21", "comic_plague_doctor_22", "comic_plague_doctor_23",
                           "comic_plague_doctor_24"],
        previous_comics : ["comic_heroes_and_monsters_book"],
        next_comics     : ["comic_plague_doctor_volume_7"],
        release_at      : {year: 2023, month: 2, day: 4}
    },
    comic_allies_special_idyll_single                                       : {
        ...comic_allies_special_idyll,
        including_comics: ["comic_allies_special_idyll_book"],
        previous_comics : ["comic_allies_41"],
        show            : false
    },
    comic_allies_special_idyll_book                                         : {
        ...comic_allies_special_idyll,
        contained_comics: ["comic_allies_special_idyll_single"],
        previous_comics : ["comic_allies_volume_8"],
        show            : true
    },
    comic_licorice_5                                                        : {
        name            : "Ликорис, глава 5",
        number          : "5",
        type            : "single",
        ranges          : ["range_bubble_manga"],
        including_comics: ["comic_licorice_book_2"],
        previous_comics : ["comic_licorice_4"],
        next_comics     : ["comic_licorice_6"],
        release_at      : {year: 2023, month: 2, day: 8}
    },
    comic_witch_2                                                           : {
        name            : "Ведьма №2 По проводам, часть 2",
        number          : "2",
        type            : "single",
        ranges          : ["range_witch"],
        including_comics: ["comic_witch_volume_1"],
        previous_comics : ["comic_witch_1"],
        next_comics     : ["comic_witch_3"],
        release_at      : {year: 2023, month: 2, day: 10}
    },
    comic_exlibrium_second_life_34                                          : {
        name            : "Экслибриум. Жизнь вторая #34 После дождичка, часть 2",
        number          : "34",
        type            : "single",
        ranges          : ["range_exlibrium_second_life"],
        including_comics: ["comic_exlibrium_second_life_volume_8"],
        previous_comics : ["comic_exlibrium_second_life_33"],
        next_comics     : ["comic_exlibrium_second_life_35"],
        release_at      : {year: 2023, month: 2, day: 17}
    },
    comic_major_igor_grom_17                                                : {
        name            : "Майор Игорь Гром #17 Отпуск, часть 1",
        number          : "17",
        type            : "single",
        ranges          : ["range_major_igor_grom"],
        including_comics: ["comic_major_igor_grom_volume_5"],
        previous_comics : ["comic_heroes_and_monsters_single"],
        next_comics     : ["comic_major_igor_grom_18"],
        release_at      : {year: 2023, month: 2, day: 22}
    },
    comic_licorice_book_2                                                   : {
        name            : "Ликорис. Книга 2",
        number          : "2",
        type            : "book",
        ranges          : ["range_bubble_manga"],
        contained_comics: ["comic_licorice_4", "comic_licorice_5", "comic_licorice_6"],
        previous_comics : ["comic_licorice_book_1"],
        release_at      : {year: 2023, month: 2, day: 25}
    },
    comic_mir_volume_8                                                      : {
        name            : "МИР. Том 8: Чужие флаги",
        number          : "8",
        type            : "book",
        ranges          : ["range_mir"],
        contained_comics: ["comic_mir_15", "comic_mir_16", "comic_mir_17"],
        previous_comics : ["comic_heroes_and_monsters_book"],
        next_comics     : ["comic_mir_18"],
        release_at      : {year: 2022, month: 10, day: 1}
    },
    comic_plague_doctor_25                                                  : {
        name            : "Чумной Доктор №25 Рагнар, часть 5",
        number          : "25",
        type            : "single",
        ranges          : ["range_plague_doctor"],
        including_comics: ["comic_plague_doctor_volume_7"],
        previous_comics : ["comic_plague_doctor_24"],
        next_comics     : ["comic_plague_doctor_26"],
        release_at      : {year: 2023, month: 2, day: 28}
    },
    comic_mir_15                                                            : {
        name            : "МИР #15 Чужие флаги, часть 1",
        number          : "15",
        type            : "single",
        ranges          : ["range_mir"],
        including_comics: ["comic_mir_volume_8"],
        previous_comics : ["comic_heroes_and_monsters_single"],
        next_comics     : ["comic_mir_16"],
        release_at      : {year: 2023, month: 3, day: 3}
    },
    comic_bubble_triptych_2                                                 : {
        name           : "BUBBLE Триптих, часть 2",
        number         : "2",
        type           : "single",
        ranges         : ["range_bubble_triptych"],
        previous_comics: ["comic_bubble_triptych_1"],
        next_comics    : ["comic_bubble_triptych_3"],
        release_at     : {year: 2023, month: 3, day: 9}
    },
    comic_licorice_6                                                        : {
        name            : "Ликорис, глава 6",
        number          : "6",
        type            : "single",
        ranges          : ["range_bubble_manga"],
        including_comics: ["comic_licorice_book_2"],
        previous_comics : ["comic_licorice_5"],
        release_at      : {year: 2023, month: 3, day: 10}
    },
    comic_major_igor_grom_18                                                : {
        name            : "Майор Игорь Гром #18 Отпуск, часть 2",
        number          : "18",
        type            : "single",
        ranges          : ["range_major_igor_grom"],
        including_comics: ["comic_major_igor_grom_volume_5"],
        previous_comics : ["comic_major_igor_grom_17"],
        next_comics     : ["comic_major_igor_grom_19"],
        release_at      : {year: 2023, month: 3, day: 17}
    },
    comic_bubble_school_volume_1                                            : {
        name      : "Школа BUBBLE. Том 1. Урок жизни",
        number    : "1",
        type      : "book",
        ranges    : ["range_childrens_comics", "range_bubble_school"],
        release_at: {year: 2023, month: 3, day: 17}
    },
    comic_game_book_find_the_dragon                                         : {
        name      : "Книга-игра \"Найди Дракона\"",
        type      : "single",
        ranges    : ["range_plague_doctor"],
        release_at: {year: 2023, month: 3, day: 20}
    },
    comic_exlibrium_second_life_35                                          : {
        name            : "Экслибриум. Жизнь вторая #35 После дождичка, часть 3",
        number          : "35",
        type            : "single",
        ranges          : ["range_exlibrium_second_life"],
        including_comics: ["comic_exlibrium_second_life_volume_8"],
        previous_comics : ["comic_exlibrium_second_life_34"],
        next_comics     : ["comic_exlibrium_second_life_36"],
        release_at      : {year: 2023, month: 3, day: 24}
    },
    comic_witch_3                                                           : {
        name            : "Ведьма №3 По проводам, часть 3",
        number          : "3",
        type            : "single",
        ranges          : ["range_witch"],
        including_comics: ["comic_witch_volume_1"],
        previous_comics : ["comic_witch_2"],
        release_at      : {year: 2023, month: 3, day: 28}
    },
    comic_plague_doctor_26                                                  : {
        name            : "Чумной Доктор №26 Рагнар, часть 6",
        number          : "26",
        type            : "single",
        ranges          : ["range_plague_doctor"],
        including_comics: ["comic_plague_doctor_volume_7"],
        previous_comics : ["comic_plague_doctor_25"],
        next_comics     : ["comic_plague_doctor_27"],
        release_at      : {year: 2023, month: 3, day: 31}
    },
    comic_mir_16                                                            : {
        name            : "МИР #16 Чужие флаги, часть 2",
        number          : "16",
        type            : "single",
        ranges          : ["range_mir"],
        including_comics: ["comic_mir_volume_8"],
        previous_comics : ["comic_mir_15"],
        next_comics     : ["comic_mir_17"],
        release_at      : {year: 2023, month: 4, day: 5}
    },
    comic_bubble_gam_almanac_2                                              : {
        name           : "BUBBLE ГАМ. Альманах #2",
        number         : "2",
        type           : "single",
        ranges         : ["range_gam"],
        previous_comics: ["comic_bubble_gam_almanac_1"],
        next_comics    : ["comic_bubble_gam_almanac_3"],
        release_at     : {year: 2023, month: 4, day: 10}
    },
    comic_impulse_volume_1                                                  : {
        name            : "Импульс. Том 1. Взлёты и падения",
        number          : "1",
        type            : "book",
        ranges          : ["range_bubble_legends", "range_new_bubble_heroes"],
        contained_comics: ["comic_impulse_heros_voice", "comic_impulse_premiere"],
        release_at      : {year: 2023, month: 4, day: 10}
    },
    comic_falcon_5                                                          : {
        name            : "Сокол #5 Слепое пятно",
        number          : "5",
        type            : "single",
        ranges          : ["range_bubble_legends", "range_new_bubble_heroes"],
        including_comics: ["comic_falcon_volume_2"],
        previous_comics : ["comic_falcon_4"],
        next_comics     : ["comic_falcon_6"],
        release_at      : {year: 2023, month: 4, day: 12}
    },
    comic_yablochny_saved_single                                            : {
        name            : "Яблочный спас",
        type            : "single",
        ranges          : ["range_plague_doctor"],
        including_comics: ["comic_yablochny_saved_book"],
        previous_comics : ["comic_plague_doctor_30"],
        release_at      : {year: 2023, month: 4, day: 13}
    },
    comic_yablochny_saved_book                                              : {
        name            : "Яблочный спас",
        type            : "book",
        ranges          : ["range_plague_doctor"],
        contained_comics: ["comic_yablochny_saved_single"],
        previous_comics : ["comic_plague_doctor_30"],
        release_at      : {year: 2023, month: 4, day: 13}
    },
    comic_fiction_novel_razumovsky                                          : {
        name      : "Художественный роман \"Разумовский\"",
        type      : "hardcover_book",
        ranges    : ["range_major_grom"],
        characters: ["character_sergei_razumovskii"],
        authors   : [{author_id: "author_kirill_kutuzov", positions: ["screenwriter"]}],
        release_at: {year: 2023}
    },
    comic_major_igor_grom_19                                                : {
        name            : "Майор Игорь Гром #19 Отпуск, часть 3",
        number          : "19",
        type            : "single",
        ranges          : ["range_major_igor_grom"],
        including_comics: ["comic_major_igor_grom_volume_5"],
        previous_comics : ["comic_major_igor_grom_18"],
        next_comics     : ["comic_major_igor_grom_20"],
        release_at      : {year: 2023, month: 4, day: 21}
    },
    comic_thief_of_shadows_volume_2                                         : {
        name            : "Вор Теней. Том 2",
        number          : "2",
        type            : "book",
        ranges          : ["range_thief_of_shadows"],
        contained_comics: ["comic_thief_of_shadows_6", "comic_thief_of_shadows_7", "comic_thief_of_shadows_8",
                           "comic_thief_of_shadows_9"],
        previous_comics : ["comic_thief_of_shadows_volume_1"],
        next_comics     : ["comic_thief_of_shadows_volume_3"],
        release_at      : {year: 2023}
    },
    comic_thief_of_shadows_volume_3                                         : {
        name            : "Вор Теней. Том 3",
        number          : "3",
        type            : "book",
        ranges          : ["range_thief_of_shadows"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_kirill_kutuzov", positions: ["screenwriter"]}],
        contained_comics: ["comic_thief_of_shadows_10", "comic_thief_of_shadows_11", "comic_thief_of_shadows_12",
                           "comic_thief_of_shadows_13"],
        previous_comics : ["comic_thief_of_shadows_volume_2"],
        release_at      : {year: 2023, month: 4, day: 25}
    },
    comic_game_book_now_you_are_the_thief_of_shadows                        : {
        name      : "Книга-игра. Теперь ты - Вор Теней",
        type      : "single",
        ranges    : ["range_thief_of_shadows"],
        release_at: {year: 2023, month: 4, day: 25}
    },
    comic_exlibrium_second_life_36                                          : {
        name            : "Экслибриум. Жизнь вторая #36 После дождичка, часть 4",
        number          : "36",
        type            : "single",
        ranges          : ["range_exlibrium_second_life"],
        including_comics: ["comic_exlibrium_second_life_volume_8"],
        previous_comics : ["comic_exlibrium_second_life_35"],
        next_comics     : ["comic_exlibrium_second_life_37"],
        release_at      : {year: 2023, month: 4, day: 26}
    },
    comic_plague_doctor_27                                                  : {
        name            : "Чумной Доктор №27 Рагнар, часть 7",
        number          : "27",
        type            : "single",
        ranges          : ["range_plague_doctor"],
        including_comics: ["comic_plague_doctor_volume_7"],
        previous_comics : ["comic_plague_doctor_26"],
        next_comics     : ["comic_plague_doctor_28"],
        release_at      : {year: 2023, month: 4, day: 30}
    },
    comic_mir_17                                                            : {
        name            : "МИР #17 Чужие флаги, часть 3",
        number          : "17",
        type            : "single",
        ranges          : ["range_mir"],
        including_comics: ["comic_mir_volume_8"],
        previous_comics : ["comic_mir_16"],
        next_comics     : ["comic_mir_18"],
        release_at      : {year: 2023, month: 5, day: 3}
    },
    comic_fiction_novel_besoboy                                             : {
        name      : "Художественный роман \"Бесобой\"",
        type      : "hardcover_book",
        ranges    : ["range_besoboy"],
        release_at: {year: 2023}
    },
    comic_thief_of_shadows_11                                               : {
        name            : "Вор Теней #11 Летальный лифт",
        number          : "11",
        type            : "single",
        ranges          : ["range_thief_of_shadows"],
        including_comics: ["comic_thief_of_shadows_volume_3"],
        previous_comics : ["comic_thief_of_shadows_10"],
        next_comics     : ["comic_thief_of_shadows_12"],
        release_at      : {year: 2023, month: 5, day: 10}
    },
    comic_witch_volume_1                                                    : {
        name            : "Ведьма. Том 1. По проводам",
        number          : "1",
        type            : "book",
        ranges          : ["range_witch"],
        contained_comics: ["comic_witch_1", "comic_witch_2", "comic_witch_3"],
        release_at      : {year: 2023, month: 5, day: 10}
    },
    comic_falcon_6                                                          : {
        name            : "Сокол #6 Ошибка выжившего. Часть 1",
        number          : "6",
        type            : "single",
        ranges          : ["range_bubble_legends", "range_new_bubble_heroes"],
        including_comics: ["comic_falcon_volume_2"],
        previous_comics : ["comic_falcon_5"],
        next_comics     : ["comic_falcon_7"],
        release_at      : {year: 2023, month: 5, day: 15}
    },
    comic_vera_wolf                                                         : {
        name      : "Вера Вульф",
        type      : "book",
        ranges    : ["range_bubble_legends"],
        release_at: {year: 2023, month: 5, day: 16}
    },
    comic_major_igor_grom_volume_5                                          : {
        name            : "Майор Игорь Гром. Том 5. Отпуск",
        number          : "5",
        type            : "book",
        ranges          : ["range_major_igor_grom"],
        contained_comics: ["comic_major_igor_grom_17", "comic_major_igor_grom_18", "comic_major_igor_grom_19",
                           "comic_major_igor_grom_20"],
        previous_comics : ["comic_heroes_and_monsters_book"],
        next_comics     : ["comic_major_igor_grom_21"],
        release_at      : {year: 2023, month: 5, day: 23}
    },
    comic_major_igor_grom_20                                                : {
        name            : "Майор Игорь Гром #20 Отпуск, часть 4",
        number          : "20",
        type            : "single",
        ranges          : ["range_major_igor_grom"],
        including_comics: ["comic_major_igor_grom_volume_5"],
        previous_comics : ["comic_major_igor_grom_19"],
        next_comics     : ["comic_major_igor_grom_21"],
        release_at      : {year: 2023, month: 5, day: 24}
    },
    comic_exlibrium_second_life_37                                          : {
        name           : "Экслибриум. Жизнь вторая #37 Будущее – светло, часть 1",
        number         : "37",
        type           : "single",
        ranges         : ["range_exlibrium_second_life"],
        previous_comics: ["comic_exlibrium_second_life_36", "comic_exlibrium_second_life_volume_8"],
        next_comics    : ["comic_exlibrium_second_life_38"],
        release_at     : {year: 2023, month: 5, day: 26}
    },
    comic_bubble_triptych_3                                                 : {
        name           : "BUBBLE Триптих, часть 3",
        number         : "3",
        type           : "single",
        ranges         : ["range_bubble_triptych"],
        previous_comics: ["comic_bubble_triptych_2"],
        release_at     : {year: 2023, month: 5, day: 31}
    },
    comic_thief_of_shadows_12                                               : {
        name            : "Вор Теней #12 Отгадки в остроге и катастрофическая контр-банд",
        number          : "12",
        type            : "single",
        ranges          : ["range_thief_of_shadows"],
        including_comics: ["comic_thief_of_shadows_volume_3"],
        previous_comics : ["comic_thief_of_shadows_11"],
        next_comics     : ["comic_thief_of_shadows_13"],
        release_at      : {year: 2023, month: 6, day: 2}
    },
    comic_exlibrium_second_life_volume_8                                    : {
        name            : "Экслибриум. Жизнь вторая. Том 8: После дождичка",
        number          : "8",
        type            : "book",
        ranges          : ["range_exlibrium_second_life"],
        contained_comics: ["comic_exlibrium_second_life_33", "comic_exlibrium_second_life_34",
                           "comic_exlibrium_second_life_35", "comic_exlibrium_second_life_36"],
        previous_comics : ["comic_exlibrium_second_life_volume_7"],
        next_comics     : ["comic_exlibrium_second_life_37"],
        release_at      : {year: 2023, month: 6, day: 5}
    },
    comic_falcon_7                                                          : {
        name            : "Сокол #7 Ошибка выжившего. Часть 2",
        number          : "7",
        type            : "single",
        ranges          : ["range_bubble_legends", "range_new_bubble_heroes"],
        including_comics: ["comic_falcon_volume_2"],
        previous_comics : ["comic_falcon_6"],
        release_at      : {year: 2023, month: 6, day: 7}
    },
    comic_exlibrium_colors_of_our_feelings_coloring_dossier                 : {
        name           : "Экслибриум: Цвета наших чувств. Раскраска-досье",
        type           : "single",
        ranges         : ["range_exlibrium", "range_exlibrium_second_life"],
        previous_comics: ["comic_exlibrium_50", "comic_exlibrium_volume_9", "comic_exlibrium_second_life_39"],
        release_at     : {year: 2023, month: 6, day: 9}
    },
    comic_plague_doctor_28                                                  : {
        name            : "Чумной Доктор №28 Рагнар, часть 8",
        number          : "28",
        type            : "single",
        ranges          : ["range_plague_doctor"],
        including_comics: ["comic_plague_doctor_volume_7"],
        previous_comics : ["comic_plague_doctor_27"],
        next_comics     : ["comic_plague_doctor_29"],
        release_at      : {year: 2023, month: 6, day: 14}
    },
    comic_bubble_gam_almanac_3                                              : {
        name           : "BUBBLE ГАМ. Альманах #3",
        number         : "3",
        type           : "single",
        ranges         : ["range_gam"],
        previous_comics: ["comic_bubble_gam_almanac_2"],
        release_at     : {year: 2023, month: 6, day: 15}
    },
    comic_major_igor_grom_21                                                : {
        name           : "Майор Игорь Гром #21 Правда, часть 1",
        number         : "21",
        type           : "single",
        ranges         : ["range_major_igor_grom"],
        previous_comics: ["comic_major_igor_grom_volume_5", "comic_major_igor_grom_20"],
        next_comics    : ["comic_major_igor_grom_22"],
        release_at     : {year: 2023, month: 6, day: 21}
    },
    comic_exlibrium_second_life_38                                          : {
        name           : "Экслибриум. Жизнь вторая #38 Будущее – светло, часть 2",
        number         : "38",
        type           : "single",
        ranges         : ["range_exlibrium_second_life"],
        previous_comics: ["comic_exlibrium_second_life_37"],
        next_comics    : ["comic_exlibrium_second_life_39"],
        release_at     : {year: 2023, month: 6, day: 28}
    },
    comic_plague_doctor_29                                                  : {
        name            : "Чумной Доктор №29 Рагнар, эпилог",
        number          : "29",
        type            : "single",
        ranges          : ["range_plague_doctor"],
        including_comics: ["comic_plague_doctor_volume_7"],
        previous_comics : ["comic_plague_doctor_28"],
        next_comics     : ["comic_plague_doctor_30"],
        release_at      : {year: 2023, month: 6, day: 30}
    },
    comic_gray_hound_volume_1_chapter_1                                     : {
        name      : "Серая Гончая. Том 1, глава 1",
        number    : "1",
        type      : "single",
        ranges    : ["range_bubble_manga"],
        release_at: {year: 2023, month: 7, day: 5}
    },
    comic_plague_doctor_volume_7                                            : {
        name            : "Чумной Доктор. Том 7. Рагнар. Часть 2",
        number          : "7",
        type            : "book",
        ranges          : ["range_plague_doctor"],
        contained_comics: ["comic_plague_doctor_25", "comic_plague_doctor_26", "comic_plague_doctor_27",
                           "comic_plague_doctor_28", "comic_plague_doctor_29"],
        previous_comics : ["comic_plague_doctor_volume_6"],
        next_comics     : ["comic_plague_doctor_30"],
        release_at      : {year: 2023, month: 2, day: 4}
    },
    comic_fiction_novel_the_nine_lives_of_agatha_the_first_life_dragons_font: {
        name      : "Художественный роман \"Девять жизней Агаты. Жизнь первая. Купель Дракона\"",
        type      : "hardcover_book",
        ranges    : ["range_exlibrium", "range_exlibrium_second_life"],
        release_at: {year: 2023, month: 7, day: 7} // предзаказ 2023-06-26
    },
    comic_thief_of_shadows_13                                               : {
        name            : "Вор Теней #13 Блистательная богиня и безжалостные близнецы",
        number          : "13",
        type            : "single",
        ranges          : ["range_thief_of_shadows"],
        authors         : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                           {author_id: "author_alexey_gorbut", positions: ["artist"]},
                           {author_id: "author_kirill_kutuzov", positions: ["screenwriter"]}],
        including_comics: ["comic_thief_of_shadows_volume_3"],
        previous_comics : ["comic_thief_of_shadows_12"],
        release_at      : {year: 2023, month: 7, day: 12}
    },
    comic_mir_18                                                            : {
        name           : "МИР #18 Царь в голове, часть 1",
        number         : "18",
        type           : "single",
        ranges         : ["range_mir"],
        characters     : ["character_mir"],
        authors        : [{author_id: "author_alexey_volkov", positions: ["screenwriter"]},
                          {author_id: "author_roman_kotkov", positions: ["screenwriter"]},
                          {author_id: "author_adela_adienova", positions: ["colorist"]},
                          {author_id: "author_anna_antoshchenkova", positions: ["colorist"]},
                          {author_id: "author_madibek_musabekov", positions: ["artist"]},
                          {author_id: "author_taya_makarevich", positions: ["artist"]}],
        previous_comics: ["comic_mir_17"],
        next_comics    : ["comic_mir_eternal_memory_electronic", "comic_mir_eternal_memory_printed",
                          "comic_special_phaeton_electronic", "comic_special_phaeton_printed"],
        release_at     : {year: 2023, month: 7, day: 19}
    },
    comic_major_igor_grom_22                                                : {
        name           : "Майор Игорь Гром #22 Правда, часть 2",
        number         : "22",
        type           : "single",
        ranges         : ["range_major_igor_grom"],
        characters     : ["character_igor_grom"],
        authors        : [{author_id: "author_evgeny_eronin", positions: ["screenwriter"]},
                          {author_id: "author_anastasia_troitskaya", positions: ["colorist"]},
                          {author_id: "author_evgeniy_bornyakov", positions: ["artist"]}],
        previous_comics: ["comic_major_igor_grom_21"],
        next_comics    : ["comic_special_prokopenko_grom_at_sunrise_electronic",
                          "comic_special_prokopenko_grom_at_sunrise_printed", "comic_major_igor_grom_special_duty"],
        release_at     : {year: 2023, month: 7, day: 26}
    },
    comic_exlibrium_second_life_39                                          : {
        name           : "Экслибриум. Жизнь вторая #39 Будущее – светло, часть 3",
        number         : "39",
        type           : "single",
        ranges         : ["range_exlibrium_second_life"],
        characters     : ["character_anton_varchuk", "character_matvei_koretskii", "character_liliya_romanova",
                          "character_lena_pyatkina", "character_apollon"],
        authors        : [{author_id: "author_natalia_devova", positions: ["screenwriter"]},
                          {author_id: "author_anastasia_afonina", positions: ["artist"]},
                          {author_id: "author_elena_doronina", positions: ["colorist"]}],
        previous_comics: ["comic_exlibrium_second_life_38"],
        next_comics    : ["comic_exlibrium_blank_sheet_electronic", "comic_exlibrium_blank_sheet_printed",
                          "comic_exlibrium_red_line_electronic", "comic_exlibrium_red_line_printed",
                          "comic_exlibrium_colors_of_our_feelings_coloring_dossier"],
        release_at     : {year: 2023, month: 7, day: 28}
    },
    comic_plague_doctor_30                                                  : {
        name           : "Чумной Доктор №30 Чужой среди своих, часть 1",
        number         : "30",
        type           : "single",
        ranges         : ["range_plague_doctor"],
        characters     : ["character_valeriya_makarova"],
        authors        : [{author_id: "author_anastasia_chebykina", positions: ["colorist"]},
                          {author_id: "author_irina_ivanova", positions: ["artist"]},
                          {author_id: "author_natalia_vorontsova", positions: ["screenwriter"]}],
        previous_comics: ["comic_plague_doctor_29", "comic_plague_doctor_volume_7"],
        next_comics    : ["comic_special_volkov_inferno_electronic", "comic_special_volkov_inferno_printed",
                          "comic_yablochny_saved_single", "comic_yablochny_saved_book"],
        release_at     : {year: 2023, month: 7, day: 31}
    },
    // Infinix: Город Героев - -- --- ----
    // Тагар. Том 5. №3 - 5 дек 2023
    // Реки №4. Страха нет. Часть 4 - 12 дек 2023
    // Майор Игорь Гром №27 - 22 дек 2023
    // Экслибриум. Спецвыпуск - 26 дек 2023
    // Чумной доктор №34 - 29 дек 2023
};

export default comics;
