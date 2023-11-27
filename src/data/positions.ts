import {comics} from "./comics";
import {getComicIdToNodeId} from "./helper_functions";
import {getMaxOfArray} from "./functions/array_func";

const difference = {x: 140, y: 110};

const allies = {y: difference.y * 17};
const besoboy = {y: difference.y};
const besoboy_vol_2 = {y: difference.y * 3};
const bubble_legends = {y: difference.y * 52};
const childrens_comics = {y: difference.y * 28};
const enoch = {y: difference.y * 6};
const igor_grom = {y: difference.y * 14};
const major_grom = {y: difference.y * 12};
const meteora = {y: difference.y * 24};
const planeswalkers = {y: difference.y * 8};
const plague_doctor = {y: difference.y * 16};
const red_fury = {y: difference.y * 15};

const allies_book = {y: allies.y + difference.y * 2};
const anna = {y: difference.y * 46};
const balor_and_yana_dream_catcher = besoboy;
const besoboy_and_planeswalkers = {y: (besoboy_vol_2.y + planeswalkers.y) / 2};
const besoboy_vol_2_book = {y: besoboy_vol_2.y + difference.y * 2};
const black_hand = {y: difference.y * 51};
const caesar_magnificent = {y: difference.y * 31};
const cell = {y: difference.y * 50};
const community = {y: difference.y * 56};
const crusade_wolf = {y: planeswalkers.y + difference.y * 2};
const devilry = bubble_legends;
const dont_be_reckless = {y: difference.y * 50};
const editor = {y: difference.y * 46};
const enoch_vs_besoboy = {y: (besoboy.y + enoch.y) / 2};
const falcon = {y: difference.y * 48};
const igor_grom_book = {y: igor_grom.y + difference.y * 2};
const krutiks = childrens_comics;
const krutiks_book = {y: krutiks.y + difference.y};
const major_grom_and_red_fury = {y: (major_grom.y + red_fury.y) / 2};
const memento_mori = {y: difference.y * 50};
const planeswalkers_book = {y: planeswalkers.y + difference.y * 2};
const plush_policeman = {y: difference.y * 50};
const pulse = {y: difference.y * 51};
const sister_kukki = {y: difference.y * 46};
const tagar = {y: difference.y * 39};
const tagar_tome = {y: tagar.y + difference.y};
const teo = meteora;
const unicorn_conspiracy = {y: difference.y * 38};
const yarkh_step_forward = besoboy;

const xFunc1 = (layouts_nodes, comic_id: string) => {
    const comic = comics[comic_id];

    if (comic.previous_comics) {
        const layouts_nodes_id = Object.keys(layouts_nodes);
        const previous_nodes_x = comic.previous_comics
            .map((previous_comic_id) => getComicIdToNodeId(previous_comic_id))
            .filter((previous_node_id) => layouts_nodes_id.indexOf(previous_node_id) !== -1)
            .map((previous_node_id) => layouts_nodes[previous_node_id].x);

        return getMaxOfArray(previous_nodes_x) + difference.x;
    }
};
const xFunc2 = (layouts_nodes) => {
    const layouts_nodes_x = Object.keys(layouts_nodes)
        .map((layouts_node_id) => layouts_nodes[layouts_node_id].x);

    return getMaxOfArray(layouts_nodes_x) + difference.x;
};

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
    comic_besoboy_39                         : {x_func: xFunc1},
    comic_besoboy_40                         : {x_func: xFunc1},
    //comic_besoboy_41                         : {x_func: xFunc1},
    comic_besoboy_42                         : {x_func: xFunc1},
    comic_besoboy_46                         : {x_func: xFunc1},
    comic_besoboy_50                         : {x_func: xFunc1},
    comic_besoboy_and_planeswalkers_book     : {y: besoboy_and_planeswalkers.y + difference.y},
    comic_besoboy_and_planeswalkers_single   : besoboy_and_planeswalkers,
    comic_besoboy_vol_2_2                    : {x_func: xFunc1},
    comic_besoboy_vol_2_3                    : {x_func: xFunc1},
    comic_besoboy_vol_2_4                    : {x_func: xFunc1},
    comic_besoboy_vol_2_5                    : {x_func: xFunc1},
    comic_besoboy_vol_2_8                    : {x_func: xFunc1},
    comic_besoboy_vol_2_9                    : {x_func: xFunc1},
    comic_besoboy_vol_2_10                   : {x_func: xFunc1},
    comic_besoboy_vol_2_11                   : {x_func: xFunc1},
    comic_besoboy_vol_2_12                   : {x_func: xFunc1},
    comic_besoboy_vol_2_13                   : {x_func: xFunc1},
    comic_besoboy_vol_2_14                   : {x_func: xFunc1},
    comic_besoboy_vol_2_25                   : {x_func: xFunc1},
    comic_besoboy_vol_2_26                   : {x_func: xFunc1},
    comic_besoboy_vol_2_27                   : {x_func: xFunc1},
    comic_besoboy_vol_2_28                   : {x_func: xFunc1},
    comic_besoboy_vol_2_30                   : {x_func: xFunc1},
    comic_besoboy_vol_2_31                   : {x_func: xFunc1},
    comic_besoboy_vol_2_32                   : {x_func: xFunc1},
    comic_besoboy_vol_2_36                   : {x_func: xFunc1},
    comic_besoboy_vol_2_37                   : {x_func: xFunc1},
    comic_besoboy_vol_2_38                   : {x_func: xFunc1},
    comic_besoboy_vol_2_40                   : {x_func: xFunc1},
    comic_besoboy_vol_2_41                   : {x_func: xFunc1},
    comic_besoboy_vol_2_42                   : {x_func: xFunc1},
    comic_besoboy_vol_2_book_1               : besoboy_vol_2_book,
    comic_besoboy_vol_2_book_2               : besoboy_vol_2_book,
    comic_black_dog_2                        : {x_func: xFunc1},
    comic_black_dog_3                        : {x_func: xFunc1},
    comic_black_dog_4                        : {x_func: xFunc1},
    comic_black_hand_and_mysterious_package  : black_hand,
    comic_bubble_halloween                   : bubble_legends,
    comic_caesar_magnificent                 : {y: caesar_magnificent.y + difference.y},
    comic_caesar_magnificent_1               : caesar_magnificent,
    comic_caesar_magnificent_2               : caesar_magnificent,
    comic_caesar_magnificent_3               : caesar_magnificent,
    comic_caesar_magnificent_4               : caesar_magnificent,
    comic_caesar_magnificent_5               : caesar_magnificent,
    comic_cell_split                         : cell,
    comic_community                          : {y: community.y + difference.y},
    comic_community_1                        : community,
    comic_community_2                        : community,
    comic_community_3                        : community,
    comic_community_4                        : community,
    comic_crusade_3                          : {x_func: xFunc1},
    comic_crusade_4                          : {x_func: xFunc1},
    comic_crusade_epilogue                   : {x_func: xFunc1},
    comic_crusade_wolf                       : {y: crusade_wolf.y + difference.y},
    comic_crusade_wolf_1                     : crusade_wolf,
    comic_crusade_wolf_2                     : crusade_wolf,
    comic_crusade_wolf_3                     : {x_func: xFunc1, y: crusade_wolf.y},
    comic_crusade_wolf_4                     : {x_func: xFunc1, y: crusade_wolf.y},
    comic_crusade_wolf_5                     : {x_func: xFunc1, y: crusade_wolf.y},
    comic_devilry                            : {y: devilry.y + difference.y},
    comic_devilry_1                          : devilry,
    comic_devilry_2                          : devilry,
    comic_devilry_3                          : devilry,
    comic_devilry_4                          : devilry,
    comic_dont_be_reckless_quatrefoil        : dont_be_reckless,
    comic_editor                             : editor,
    comic_enoch_15                           : enoch_vs_besoboy,
    comic_enoch_16                           : enoch_vs_besoboy,
    comic_enoch_17                           : enoch_vs_besoboy,
    comic_enoch_37                           : {x_func: xFunc1},
    comic_enoch_38                           : {x_func: xFunc1},
    comic_enoch_40                           : {x_func: xFunc1},
    comic_enoch_41                           : {x_func: xFunc1},
    comic_enoch_42                           : {x_func: xFunc1},
    comic_exlibrium_13                       : {x_func: xFunc1},
    comic_exlibrium_14                       : {x_func: xFunc1},
    comic_exlibrium_15                       : {x_func: xFunc1},
    comic_exlibrium_16                       : {x_func: xFunc1},
    comic_exlibrium_17                       : {x_func: xFunc1},
    comic_exlibrium_21                       : {x_func: xFunc1},
    comic_exlibrium_22                       : {x_func: xFunc1},
    comic_exlibrium_23                       : {x_func: xFunc1},
    comic_exlibrium_33                       : {x_func: xFunc1},
    comic_exlibrium_34                       : {x_func: xFunc1},
    comic_exlibrium_36                       : {x_func: xFunc1},
    comic_exlibrium_37                       : {x_func: xFunc1},
    comic_exlibrium_38                       : {x_func: xFunc1},
    comic_exlibrium_39                       : {x_func: xFunc1},
    comic_exlibrium_40                       : {x_func: xFunc1},
    comic_exlibrium_47                       : {x_func: xFunc1},
    comic_exlibrium_48                       : {x_func: xFunc1},
    comic_exlibrium_49                       : {x_func: xFunc1},
    comic_exlibrium_50                       : {x_func: xFunc1},
    comic_exlibrium_second_life_1            : {x_func: xFunc1},
    comic_exlibrium_second_life_2            : {x_func: xFunc1},
    comic_exlibrium_second_life_3            : {x_func: xFunc1},
    comic_exlibrium_second_life_4            : {x_func: xFunc1},
    comic_exlibrium_second_life_6            : {x_func: xFunc1},
    comic_exlibrium_second_life_7            : {x_func: xFunc1},
    comic_exlibrium_second_life_8            : {x_func: xFunc1},
    comic_exlibrium_second_life_12           : {x_func: xFunc1},
    comic_falcon_1                           : falcon,
    comic_falcon_2                           : falcon,
    comic_falcon_3                           : falcon,
    comic_falcon_4                           : falcon,
    comic_falcon_tome_1                      : {y: falcon.y + difference.y},
    comic_igor_grom_book_1                   : igor_grom_book,
    comic_igor_grom_book_2                   : igor_grom_book,
    comic_krutiks_1                          : krutiks,
    comic_krutiks_1_2018                     : krutiks,
    comic_krutiks_2                          : krutiks,
    comic_krutiks_2_2018                     : krutiks,
    comic_krutiks_3                          : krutiks,
    comic_krutiks_3_2018                     : krutiks,
    comic_krutiks_4_2018                     : krutiks,
    comic_krutiks_5_2018                     : krutiks,
    comic_krutiks_6_2018                     : krutiks,
    comic_krutiks_7_2018                     : krutiks,
    comic_krutiks_8_2018                     : krutiks,
    comic_krutiks_9_2018                     : krutiks,
    comic_krutiks_10_2018                    : krutiks,
    comic_krutiks_11_2018                    : krutiks,
    comic_krutiks_12_2018                    : krutiks,
    comic_krutiks_cool_comics_book_1         : krutiks_book,
    comic_krutiks_cool_comics_book_2         : krutiks_book,
    comic_krutiks_introduction_to_the_academy: krutiks,
    comic_krutiks_new_years_special          : krutiks,
    comic_major_grom_16                      : {x_func: xFunc1},
    comic_major_grom_17                      : {x_func: xFunc1},
    comic_major_grom_18                      : {x_func: xFunc1},
    comic_major_grom_38                      : major_grom_and_red_fury,
    comic_major_grom_39                      : major_grom_and_red_fury,
    comic_major_grom_40                      : {x_func: xFunc1, y: major_grom_and_red_fury.y},
    comic_major_grom_41                      : {x_func: xFunc2, y: major_grom_and_red_fury.y},
    comic_major_grom_50                      : {x_func: xFunc1},
    comic_major_grom_promise                 : igor_grom,
    comic_memento_mori_call_of_the_void      : memento_mori,
    comic_meteora_14                         : {x_func: xFunc1},
    comic_meteora_15                         : {x_func: xFunc1},
    comic_meteora_16                         : {x_func: xFunc1},
    comic_meteora_17                         : {x_func: xFunc1},
    comic_meteora_21                         : {x_func: xFunc1},
    comic_meteora_22                         : {x_func: xFunc1},
    comic_meteora_23                         : {x_func: xFunc1},
    comic_meteora_24                         : {x_func: xFunc1},
    comic_meteora_25                         : {x_func: xFunc1},
    comic_meteora_33                         : {x_func: xFunc1},
    comic_meteora_34                         : {x_func: xFunc1},
    comic_meteora_35                         : {x_func: xFunc1},
    comic_meteora_41                         : {x_func: xFunc1},
    comic_meteora_42                         : {x_func: xFunc1},
    comic_meteora_43                         : {x_func: xFunc1},
    comic_meteora_44                         : {x_func: xFunc1},
    comic_meteora_47                         : {x_func: xFunc1},
    comic_meteora_48                         : {x_func: xFunc1},
    comic_meteora_49                         : {x_func: xFunc1},
    comic_meteora_50                         : {x_func: xFunc1},
    comic_planeswalkers_8                    : {x_func: xFunc1},
    comic_planeswalkers_9                    : {x_func: xFunc1},
    comic_planeswalkers_10                   : {x_func: xFunc1},
    comic_planeswalkers_11                   : {x_func: xFunc1},
    comic_planeswalkers_12                   : {x_func: xFunc1},
    comic_planeswalkers_13                   : {x_func: xFunc1},
    comic_planeswalkers_14                   : {x_func: xFunc1},
    comic_planeswalkers_book_1               : planeswalkers_book,
    comic_planeswalkers_book_2               : planeswalkers_book,
    comic_plush_policeman_the_perfect_plan   : plush_policeman,
    comic_pulse_heros_voice                  : pulse,
    comic_pulse_premiere                     : pulse,
    comic_red_fury_15                        : {x_func: xFunc1},
    comic_red_fury_17                        : {x_func: xFunc1},
    comic_red_fury_18                        : {x_func: xFunc1},
    comic_red_fury_19                        : {x_func: xFunc1},
    comic_red_fury_37                        : {x_func: xFunc1},
    comic_red_fury_38                        : {x_func: xFunc2, y: major_grom_and_red_fury.y},
    comic_red_fury_39                        : {x_func: xFunc2, y: major_grom_and_red_fury.y},
    comic_red_fury_40                        : {x_func: xFunc1, y: major_grom_and_red_fury.y},
    comic_red_fury_41                        : major_grom_and_red_fury,
    comic_sister_kukki                       : {y: sister_kukki.y + difference.y},
    comic_sister_kukki_1                     : sister_kukki,
    comic_soyuzmultcomics                    : childrens_comics,
    comic_tagar_tome_1                       : tagar_tome,
    comic_tagar_tome_1_prologue              : tagar,
    comic_tagar_tome_1_chapter_1             : tagar,
    comic_tagar_tome_1_chapter_2             : tagar,
    comic_tagar_tome_1_chapter_3             : tagar,
    comic_tagar_tome_1_chapter_4             : tagar,
    comic_tagar_tome_2                       : tagar_tome,
    comic_tagar_tome_2_chapter_1             : tagar,
    comic_tagar_tome_2_chapter_2             : tagar,
    comic_tagar_tome_2_chapter_3             : tagar,
    comic_tagar_tome_2_chapter_4             : tagar,
    comic_tagar_tome_2_chapter_5             : tagar,
    comic_tagar_tome_3                       : tagar_tome,
    comic_tagar_tome_3_chapter_1             : tagar,
    comic_tagar_tome_3_chapter_2             : tagar,
    comic_tagar_tome_3_chapter_3             : tagar,
    comic_tagar_tome_3_chapter_4             : tagar,
    comic_tagar_tome_3_chapter_5             : tagar,
    comic_tagar_tome_3_chapter_6             : tagar,
    comic_tagar_tome_3_chapter_7             : tagar,
    comic_teo                                : {y: teo.y + difference.y},
    comic_teo_1                              : teo,
    comic_teo_2                              : teo,
    comic_teo_3                              : teo,
    comic_teo_4                              : teo,
    comic_time_of_raven_2                    : {x_func: xFunc1},
    comic_time_of_raven_3                    : {x_func: xFunc1},
    comic_time_of_raven_4                    : {x_func: xFunc1},
    comic_time_of_raven_5                    : {x_func: xFunc1},
    comic_unicorn_conspiracy_tome_1          : unicorn_conspiracy,
    comic_unicorn_conspiracy_tome_2          : unicorn_conspiracy,
    comic_yarkh_step_forward                 : {y: yarkh_step_forward.y + difference.y},
    comic_yarkh_step_forward_1               : yarkh_step_forward,
    comic_yarkh_step_forward_2               : yarkh_step_forward,
    comic_yarkh_step_forward_3               : yarkh_step_forward,
    comic_yarkh_step_forward_4               : {x_func: xFunc1, y: yarkh_step_forward.y},
    comic_yarkh_step_forward_5               : {x_func: xFunc1, y: yarkh_step_forward.y},
    comic_yarkh_step_forward_6               : {x_func: xFunc1, y: yarkh_step_forward.y},
    comic_ziggi                              : {y: childrens_comics.y + difference.y},
    comic_ziggi_1                            : childrens_comics,
    comic_ziggi_2                            : childrens_comics,
    comic_ziggi_3                            : childrens_comics,
    comic_ziggi_4                            : childrens_comics,
    comic_ziggi_5                            : childrens_comics,
    difference,
    range_allies                             : allies,
    range_anastasia_kim                      : {y: difference.y * 43},
    range_besoboy                            : besoboy,
    range_besoboy_vol_2                      : besoboy_vol_2,
    range_bubble_manga                       : {y: difference.y * 54},
    range_enoch                              : enoch,
    range_enoch_party_king                   : {y: difference.y * 33},
    range_evgeny_fedotov                     : {y: difference.y * 30},
    range_evgeny_yakovlev                    : {y: difference.y * 42},
    range_exlibrium                          : {y: difference.y * 20},
    range_exlibrium_second_life              : {y: difference.y * 22},
    range_friends_comics                     : {y: difference.y * 36},
    range_igor_grom                          : igor_grom,
    range_igor_ugor                          : {y: difference.y * 35},
    range_madibek_musabekov                  : {y: difference.y * 61},
    range_major_grom                         : major_grom,
    range_major_igor_grom                    : igor_grom,
    range_meteora                            : meteora,
    range_plague_doctor                      : plague_doctor,
    range_planeswalkers                      : planeswalkers,
    range_red_fury                           : red_fury,
    range_thief_of_shadows                   : {y: difference.y * 44},
    range_time_of_raven                      : {y: difference.y * 26},
    range_tipping_point                      : {y: difference.y * 34},
    range_turbocarp                          : {y: difference.y * 60},
    range_world                              : {y: difference.y * 58},
    range_yulia_zhuravleva                   : {y: difference.y * 37},
    range_ziggy_and_shmyg                    : {y: difference.y * 41}
};