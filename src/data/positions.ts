import {getMaxOfArray} from "./functions/array_func";

const difference = {x: 140, y: 110};

const allies = {y: difference.y * 17};
const besoboy = {y: difference.y};
const besoboy_vol_2 = {y: difference.y * 3};
const childrens_comics = {y: difference.y * 28};
const enoch = {y: difference.y * 6};
const igor_grom = {y: difference.y * 14};
const major_grom = {y: difference.y * 12};
const meteora = {y: difference.y * 24};
const planeswalkers = {y: difference.y * 8};
const red_fury = {y: difference.y * 15};

const allies_book = {y: allies.y + difference.y * 2};
const anna = {y: difference.y * 44};
const balor_and_yana_dream_catcher = besoboy;
const besoboy_and_planeswalkers = {y: (besoboy_vol_2.y + planeswalkers.y) / 2};
const besoboy_vol_2_book = {y: besoboy_vol_2.y + difference.y * 2};
const black_hand = {y: difference.y * 48};
const caesar_magnificent = {y: difference.y * 31};
const cell = {y: difference.y * 47};
const dont_be_reckless = {y: difference.y * 47};
const crusade_wolf = {y: planeswalkers.y + difference.y * 2};
const enoch_vs_besoboy = {y: (besoboy.y + enoch.y) / 2};
const falcon = {y: difference.y * 46};
const igor_grom_book = {y: igor_grom.y + difference.y * 2};
const major_grom_and_red_fury = {y: (major_grom.y + red_fury.y) / 2};
const memento_mori = {y: difference.y * 47};
const planeswalkers_book = {y: planeswalkers.y + difference.y * 2};
const plush_policeman = {y: difference.y * 47};
const pulse = {y: difference.y * 48};
const sister_kukki = {y: difference.y * 44};
const teo = meteora;
const unicorn_conspiracy = {y: difference.y * 38};
const yarkh_step_forward = besoboy;

export default {
    comic_adventures_of_kochi_and_friends    : childrens_comics,
    comic_allies_book_1                      : allies_book,
    comic_allies_book_2                      : allies_book,
    comic_anna_input                         : anna,
    comic_anna_space_of_options              : anna,
    comic_balor_and_yana_dream_catcher_book  : {y: balor_and_yana_dream_catcher.y + difference.y},
    comic_balor_and_yana_dream_catcher_single: balor_and_yana_dream_catcher,
    comic_besoboy_15                         : enoch_vs_besoboy,
    comic_besoboy_16                         : enoch_vs_besoboy,
    comic_besoboy_17                         : enoch_vs_besoboy,
    comic_besoboy_and_planeswalkers_book     : {y: besoboy_and_planeswalkers.y + difference.y},
    comic_besoboy_and_planeswalkers_single   : besoboy_and_planeswalkers,
    comic_besoboy_vol_2_book_1               : besoboy_vol_2_book,
    comic_besoboy_vol_2_book_2               : besoboy_vol_2_book,
    comic_black_hand_and_mysterious_package  : black_hand,
    comic_caesar_magnificent                 : {y: caesar_magnificent.y + difference.y},
    comic_caesar_magnificent_1               : caesar_magnificent,
    comic_caesar_magnificent_2               : caesar_magnificent,
    comic_caesar_magnificent_3               : caesar_magnificent,
    comic_caesar_magnificent_4               : caesar_magnificent,
    comic_caesar_magnificent_5               : caesar_magnificent,
    comic_cell_split                         : cell,
    comic_crusade_wolf                       : {y: crusade_wolf.y + difference.y},
    comic_crusade_wolf_1                     : crusade_wolf,
    comic_crusade_wolf_2                     : crusade_wolf,
    comic_crusade_wolf_3                     : crusade_wolf,
    comic_crusade_wolf_4                     : crusade_wolf,
    comic_crusade_wolf_5                     : crusade_wolf,
    comic_dont_be_reckless_quatrefoil        : dont_be_reckless,
    comic_enoch_15                           : enoch_vs_besoboy,
    comic_enoch_16                           : enoch_vs_besoboy,
    comic_enoch_17                           : enoch_vs_besoboy,
    comic_falcon_1                           : falcon,
    comic_falcon_2                           : falcon,
    comic_igor_grom_book_1                   : igor_grom_book,
    comic_igor_grom_book_2                   : igor_grom_book,
    comic_krutiks_1                          : childrens_comics,
    comic_krutiks_1_2018                     : childrens_comics,
    comic_krutiks_2                          : childrens_comics,
    comic_krutiks_2_2018                     : childrens_comics,
    comic_krutiks_3                          : childrens_comics,
    comic_krutiks_3_2018                     : childrens_comics,
    comic_krutiks_4_2018                     : childrens_comics,
    comic_krutiks_5_2018                     : childrens_comics,
    comic_krutiks_6_2018                     : childrens_comics,
    comic_krutiks_7_2018                     : childrens_comics,
    comic_krutiks_8_2018                     : childrens_comics,
    comic_krutiks_9_2018                     : childrens_comics,
    comic_krutiks_10_2018                    : childrens_comics,
    comic_krutiks_11_2018                    : childrens_comics,
    comic_krutiks_12_2018                    : childrens_comics,
    comic_krutiks_new_years_special          : childrens_comics,
    comic_major_grom_38                      : major_grom_and_red_fury,
    comic_major_grom_39                      : major_grom_and_red_fury,
    comic_major_grom_40                      : major_grom_and_red_fury,
    comic_major_grom_41                      : {
        x_func: (layouts_nodes) => {
            const layouts_nodes_x = Object.keys(layouts_nodes)
                .map((layouts_node_id) => layouts_nodes[layouts_node_id].x);

            return getMaxOfArray(layouts_nodes_x) + difference.x;
        },
        y     : major_grom_and_red_fury.y
    },
    comic_memento_mori_call_of_the_void      : memento_mori,
    comic_planeswalkers_book_1               : planeswalkers_book,
    comic_planeswalkers_book_2               : planeswalkers_book,
    comic_plush_policeman_the_perfect_plan   : plush_policeman,
    comic_pulse_heros_voice                  : pulse,
    comic_pulse_premiere                     : pulse,
    comic_red_fury_38                        : {
        x_func: (layouts_nodes) => {
            const layouts_nodes_x = Object.keys(layouts_nodes)
                .map((layouts_node_id) => layouts_nodes[layouts_node_id].x);

            return getMaxOfArray(layouts_nodes_x) + difference.x;
        },
        y     : major_grom_and_red_fury.y
    },
    comic_red_fury_39                        : {
        x_func: (layouts_nodes) => {
            const layouts_nodes_x = Object.keys(layouts_nodes)
                .map((layouts_node_id) => layouts_nodes[layouts_node_id].x);

            return getMaxOfArray(layouts_nodes_x) + difference.x;
        },
        y     : major_grom_and_red_fury.y
    },
    comic_red_fury_40                        : major_grom_and_red_fury,
    comic_red_fury_41                        : major_grom_and_red_fury,
    comic_sister_kukki_1                     : sister_kukki,
    comic_teo                                : {y: teo.y + difference.y},
    comic_teo_1                              : teo,
    comic_teo_2                              : teo,
    comic_teo_3                              : teo,
    comic_teo_4                              : teo,
    comic_unicorn_conspiracy_tome_1          : unicorn_conspiracy,
    comic_yarkh_step_forward                 : {y: yarkh_step_forward.y + difference.y},
    comic_yarkh_step_forward_1               : yarkh_step_forward,
    comic_yarkh_step_forward_2               : yarkh_step_forward,
    comic_yarkh_step_forward_3               : yarkh_step_forward,
    comic_yarkh_step_forward_4               : yarkh_step_forward,
    comic_yarkh_step_forward_5               : yarkh_step_forward,
    comic_yarkh_step_forward_6               : yarkh_step_forward,
    comic_ziggi                              : {y: childrens_comics.y + difference.y},
    comic_ziggi_1                            : childrens_comics,
    comic_ziggi_2                            : childrens_comics,
    comic_ziggi_3                            : childrens_comics,
    comic_ziggi_4                            : childrens_comics,
    comic_ziggi_5                            : childrens_comics,
    difference,
    range_allies                             : allies,
    range_besoboy                            : besoboy,
    range_besoboy_vol_2                      : besoboy_vol_2,
    range_bubble_manga                       : {y: difference.y * 39},
    range_enoch                              : enoch,
    range_enoch_party_king                   : {y: difference.y * 33},
    range_evgeny_fedotov                     : {y: difference.y * 30},
    range_evgeny_yakovlev                    : {y: difference.y * 42},
    range_exlibrium                          : {y: difference.y * 20},
    range_exlibrium_second_life              : {y: difference.y * 22},
    range_friends_comics                     : {y: difference.y * 36},
    range_igor_grom                          : igor_grom,
    range_igor_ugor                          : {y: difference.y * 35},
    range_major_grom                         : major_grom,
    range_meteora                            : meteora,
    range_planeswalkers                      : planeswalkers,
    range_red_fury                           : red_fury,
    range_thief_of_shadows                   : {y: difference.y * 43},
    range_time_of_raven                      : {y: difference.y * 26},
    range_tipping_point                      : {y: difference.y * 34},
    range_yulia_zhuravleva                   : {y: difference.y * 37},
    range_ziggy_and_shmyg                    : {y: difference.y * 41}
};