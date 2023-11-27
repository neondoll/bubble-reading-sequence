import {comics} from "./comics";
import {getComicIdToNodeId} from "./helper_functions";
import {getMaxOfArray} from "./functions/array_func";

const difference = {x: 140, y: 110};

const red_fury = {y: difference.y * 17};
const allies = red_fury;
const anastasia_kim = {y: difference.y * 45};
const besoboy = {y: difference.y};
const besoboy_vol_2 = {y: difference.y * 3};
const bubble_legends = {y: difference.y * 54};
const childrens_comics = {y: difference.y * 26};
const enoch = {y: difference.y * 6};
const enoch_party_king = {y: difference.y * 31};
const evgeny_fedotov = {y: difference.y * 28};
const evgeny_yakovlev = {y: difference.y * 44};
const exlibrium = {y: difference.y * 20};
const exlibrium_second_life = {y: difference.y * 22};
const friends_comics = {y: difference.y * 34};
const igor_grom = {y: difference.y * 14};
const igor_ugor = {y: difference.y * 33};
const madibek_musabekov = {y: difference.y * 61};
const major_grom = {y: difference.y * 12};
const meteora = {y: difference.y * 24};
const planeswalkers = {y: difference.y * 8};
const plague_doctor = {y: difference.y * 16};
const thief_of_shadows = {y: difference.y * 46};
const time_of_raven = {y: (besoboy.y + enoch.y + major_grom.y + red_fury.y) / 4};
const tipping_point = {y: difference.y * 32};
const turbocarp = {y: difference.y * 60};
const world = {y: difference.y * 58};
const yulia_zhuravleva = {y: difference.y * 35};
const ziggy_and_shmyg = {y: difference.y * 43};

const allies_book = {y: allies.y + difference.y * 2};
const anna = {y: difference.y * 48};
const balor_and_yana_dream_catcher = besoboy;
const besoboy_and_planeswalkers = {y: (besoboy_vol_2.y + planeswalkers.y) / 2};
const besoboy_vol_2_book = {y: besoboy_vol_2.y + difference.y * 2};
const black_hand = {y: difference.y * 53};
const bubble_manga_line_1 = {y: difference.y * 37};
const bubble_manga_line_1_book = {y: bubble_manga_line_1.y + difference.y};
const bubble_manga_line_2 = {y: difference.y * 39};
const bubble_manga_line_2_book = {y: bubble_manga_line_2.y + difference.y};
const bubble_manga_line_3 = {y: difference.y * 41};
const bubble_manga_line_3_book = {y: bubble_manga_line_3.y + difference.y};
const caesar_magnificent = {y: difference.y * 29};
const cell = {y: difference.y * 52};
const community = {y: difference.y * 56};
const crusade_wolf = {y: planeswalkers.y + difference.y * 2};
const devilry = bubble_legends;
const dont_be_reckless = {y: difference.y * 52};
const editor = {y: difference.y * 48};
const enoch_vs_besoboy = {y: (besoboy.y + enoch.y) / 2};
const falcon = {y: difference.y * 50};
const igor_grom_book = {y: igor_grom.y + difference.y * 2};
const krutiks = childrens_comics;
const krutiks_book = {y: krutiks.y + difference.y};
const major_grom_and_red_fury = {y: (major_grom.y + red_fury.y) / 2};
const memento_mori = {y: difference.y * 52};
const planeswalkers_book = {y: planeswalkers.y + difference.y * 2};
const plush_policeman = {y: difference.y * 52};
const pulse = {y: difference.y * 53};
const sister_kukki = {y: difference.y * 48};
const teo = meteora;
const unicorn_conspiracy = {y: difference.y * 36};
const yarkh_step_forward = besoboy;
const ziggy_space_hamster = childrens_comics;

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

export default {
    comic_adventures_of_kochi_and_friends    : childrens_comics,
    comic_allies_8                           : {x_func: xFunc1},
    comic_allies_9                           : {x_func: xFunc1},
    comic_allies_10                          : {x_func: xFunc1},
    comic_allies_11                          : {x_func: xFunc1},
    comic_allies_12                          : {x_func: xFunc1},
    comic_allies_13                          : {x_func: xFunc1},
    comic_allies_14                          : {x_func: xFunc1},
    comic_allies_25                          : {x_func: xFunc1},
    comic_allies_26                          : {x_func: xFunc1},
    comic_allies_27                          : {x_func: xFunc1},
    comic_allies_28                          : {x_func: xFunc1},
    comic_allies_30                          : {x_func: xFunc1},
    comic_allies_31                          : {x_func: xFunc1},
    comic_allies_32                          : {x_func: xFunc1},
    comic_allies_33                          : {x_func: xFunc1},
    comic_allies_35                          : {x_func: xFunc1},
    comic_allies_36                          : {x_func: xFunc1},
    comic_allies_37                          : {x_func: xFunc1},
    comic_allies_38                          : {x_func: xFunc1},
    comic_allies_39                          : {x_func: xFunc1},
    comic_allies_40                          : {x_func: xFunc1},
    comic_allies_41                          : {x_func: xFunc1},
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
    comic_besoboy_42                          : {x_func: xFunc1},
    comic_besoboy_46                          : {x_func: xFunc1},
    comic_besoboy_50                          : {x_func: xFunc1},
    comic_besoboy_and_planeswalkers_book      : {y: besoboy_and_planeswalkers.y + difference.y},
    comic_besoboy_and_planeswalkers_single    : besoboy_and_planeswalkers,
    comic_besoboy_vol_2_2                     : {x_func: xFunc1},
    comic_besoboy_vol_2_3                     : {x_func: xFunc1},
    comic_besoboy_vol_2_4                     : {x_func: xFunc1},
    comic_besoboy_vol_2_5                     : {x_func: xFunc1},
    comic_besoboy_vol_2_8                     : {x_func: xFunc1},
    comic_besoboy_vol_2_9                     : {x_func: xFunc1},
    comic_besoboy_vol_2_10                    : {x_func: xFunc1},
    comic_besoboy_vol_2_11                    : {x_func: xFunc1},
    comic_besoboy_vol_2_12                    : {x_func: xFunc1},
    comic_besoboy_vol_2_13                    : {x_func: xFunc1},
    comic_besoboy_vol_2_14                    : {x_func: xFunc1},
    comic_besoboy_vol_2_25                    : {x_func: xFunc1},
    comic_besoboy_vol_2_26                    : {x_func: xFunc1},
    comic_besoboy_vol_2_27                    : {x_func: xFunc1},
    comic_besoboy_vol_2_28                    : {x_func: xFunc1},
    comic_besoboy_vol_2_30                    : {x_func: xFunc1},
    comic_besoboy_vol_2_31                    : {x_func: xFunc1},
    comic_besoboy_vol_2_32                    : {x_func: xFunc1},
    comic_besoboy_vol_2_35                    : {x_func: xFunc1},
    comic_besoboy_vol_2_36                    : {x_func: xFunc1},
    comic_besoboy_vol_2_37                    : {x_func: xFunc1},
    comic_besoboy_vol_2_38                    : {x_func: xFunc1},
    comic_besoboy_vol_2_40                    : {x_func: xFunc1},
    comic_besoboy_vol_2_41                    : {x_func: xFunc1},
    comic_besoboy_vol_2_42                    : {x_func: xFunc1},
    comic_besoboy_vol_2_book_1                : besoboy_vol_2_book,
    comic_besoboy_vol_2_book_2                : besoboy_vol_2_book,
    comic_black_dog_2                         : {x_func: xFunc1},
    comic_black_dog_3                         : {x_func: xFunc1},
    comic_black_dog_4                         : {x_func: xFunc1},
    comic_black_hand_and_mysterious_package   : black_hand,
    comic_bubble_halloween                    : bubble_legends,
    comic_caesar_magnificent                  : {y: caesar_magnificent.y + difference.y},
    comic_caesar_magnificent_1                : caesar_magnificent,
    comic_caesar_magnificent_2                : caesar_magnificent,
    comic_caesar_magnificent_3                : caesar_magnificent,
    comic_caesar_magnificent_4                : caesar_magnificent,
    comic_caesar_magnificent_5                : caesar_magnificent,
    comic_cell_split                          : cell,
    comic_chosen_one_of_the_moon              : bubble_manga_line_2_book,
    comic_chosen_one_of_the_moon_1            : bubble_manga_line_2,
    comic_chosen_one_of_the_moon_2            : bubble_manga_line_2,
    comic_chosen_one_of_the_moon_3            : bubble_manga_line_2,
    comic_chosen_one_of_the_moon_4            : bubble_manga_line_2,
    comic_chosen_one_of_the_moon_5            : bubble_manga_line_2,
    comic_chosen_one_of_the_moon_6            : {x_func: xFunc1, y: bubble_manga_line_2.y},
    comic_community                           : {y: community.y + difference.y},
    comic_community_1                         : community,
    comic_community_2                         : {x_func: xFunc1, y: community.y},
    comic_community_3                         : {x_func: xFunc1, y: community.y},
    comic_community_4                         : {x_func: xFunc1, y: community.y},
    comic_crusade_3                           : {x_func: xFunc1},
    comic_crusade_4                           : {x_func: xFunc1},
    comic_crusade_epilogue                    : {x_func: xFunc1},
    comic_crusade_wolf                        : {y: crusade_wolf.y + difference.y},
    comic_crusade_wolf_1                      : crusade_wolf,
    comic_crusade_wolf_2                      : crusade_wolf,
    comic_crusade_wolf_3                      : {x_func: xFunc1, y: crusade_wolf.y},
    comic_crusade_wolf_4                      : {x_func: xFunc1, y: crusade_wolf.y},
    comic_crusade_wolf_5                      : {x_func: xFunc1, y: crusade_wolf.y},
    comic_devilry                             : {y: devilry.y + difference.y},
    comic_devilry_1                           : devilry,
    comic_devilry_2                           : devilry,
    comic_devilry_3                           : devilry,
    comic_devilry_4                           : devilry,
    comic_dont_be_reckless_quatrefoil         : dont_be_reckless,
    comic_editor                              : editor,
    comic_enoch_15                            : enoch_vs_besoboy,
    comic_enoch_16                            : enoch_vs_besoboy,
    comic_enoch_17                            : enoch_vs_besoboy,
    comic_enoch_37                            : {x_func: xFunc1},
    comic_enoch_38                            : {x_func: xFunc1},
    comic_enoch_40                            : {x_func: xFunc1},
    comic_enoch_41                            : {x_func: xFunc1},
    comic_enoch_42                            : {x_func: xFunc1},
    comic_exlibrium_13                        : {x_func: xFunc1},
    comic_exlibrium_14                        : {x_func: xFunc1},
    comic_exlibrium_15                        : {x_func: xFunc1},
    comic_exlibrium_16                        : {x_func: xFunc1},
    comic_exlibrium_17                        : {x_func: xFunc1},
    comic_exlibrium_21                        : {x_func: xFunc1},
    comic_exlibrium_22                        : {x_func: xFunc1},
    comic_exlibrium_23                        : {x_func: xFunc1},
    comic_exlibrium_33                        : {x_func: xFunc1},
    comic_exlibrium_34                        : {x_func: xFunc1},
    comic_exlibrium_36                        : {x_func: xFunc1},
    comic_exlibrium_37                        : {x_func: xFunc1},
    comic_exlibrium_38                        : {x_func: xFunc1},
    comic_exlibrium_39                        : {x_func: xFunc1},
    comic_exlibrium_40                        : {x_func: xFunc1},
    comic_exlibrium_47                        : {x_func: xFunc1},
    comic_exlibrium_48                        : {x_func: xFunc1},
    comic_exlibrium_49                        : {x_func: xFunc1},
    comic_exlibrium_50                        : {x_func: xFunc1},
    comic_exlibrium_second_life_1             : {x_func: xFunc1},
    comic_exlibrium_second_life_2             : {x_func: xFunc1},
    comic_exlibrium_second_life_3             : {x_func: xFunc1},
    comic_exlibrium_second_life_4             : {x_func: xFunc1},
    comic_exlibrium_second_life_6             : {x_func: xFunc1},
    comic_exlibrium_second_life_7             : {x_func: xFunc1},
    comic_exlibrium_second_life_8             : {x_func: xFunc1},
    comic_exlibrium_second_life_12            : {x_func: xFunc1},
    comic_falcon_1                            : falcon,
    comic_falcon_2                            : {x_func: xFunc1, y: falcon.y},
    comic_falcon_3                            : {x_func: xFunc1, y: falcon.y},
    comic_falcon_4                            : {x_func: xFunc1, y: falcon.y},
    comic_falcon_tome_1                       : {y: falcon.y + difference.y},
    comic_igor_grom_2                         : {x_func: xFunc1},
    comic_igor_grom_3                         : {x_func: xFunc1},
    comic_igor_grom_4                         : {x_func: xFunc1},
    comic_igor_grom_5                         : {x_func: xFunc1},
    comic_igor_grom_6                         : {x_func: xFunc1},
    comic_igor_grom_8                         : {x_func: xFunc1},
    comic_igor_grom_9                         : {x_func: xFunc1},
    comic_igor_grom_10                        : {x_func: xFunc1},
    comic_igor_grom_11                        : {x_func: xFunc1},
    comic_igor_grom_12                        : {x_func: xFunc1},
    comic_igor_grom_13                        : {x_func: xFunc1},
    comic_igor_grom_14                        : {x_func: xFunc1},
    comic_igor_grom_25                        : {x_func: xFunc1},
    comic_igor_grom_30                        : {x_func: xFunc1},
    comic_igor_grom_36                        : {x_func: xFunc1},
    comic_igor_grom_37                        : {x_func: xFunc1},
    comic_igor_grom_38                        : {x_func: xFunc1},
    comic_igor_grom_39                        : {x_func: xFunc1},
    comic_igor_grom_46                        : {x_func: xFunc1},
    comic_igor_grom_47                        : {x_func: xFunc1},
    comic_igor_grom_48                        : {x_func: xFunc1},
    comic_igor_grom_49                        : {x_func: xFunc1},
    comic_igor_grom_50                        : {x_func: xFunc1},
    comic_igor_grom_book_1                    : igor_grom_book,
    comic_igor_grom_book_2                    : igor_grom_book,
    comic_krutiks_1                           : krutiks,
    comic_krutiks_1_2018                      : krutiks,
    comic_krutiks_2                           : krutiks,
    comic_krutiks_2_2018                      : krutiks,
    comic_krutiks_3                           : krutiks,
    comic_krutiks_3_2018                      : krutiks,
    comic_krutiks_4_2018                      : {x_func: xFunc1, y: krutiks.y},
    comic_krutiks_5_2018                      : {x_func: xFunc1, y: krutiks.y},
    comic_krutiks_6_2018                      : {x_func: xFunc1, y: krutiks.y},
    comic_krutiks_7_2018                      : {x_func: xFunc1, y: krutiks.y},
    comic_krutiks_8_2018                      : krutiks,
    comic_krutiks_9_2018                      : krutiks,
    comic_krutiks_10_2018                     : krutiks,
    comic_krutiks_11_2018                     : krutiks,
    comic_krutiks_12_2018                     : krutiks,
    comic_krutiks_cool_comics_book_1          : krutiks_book,
    comic_krutiks_cool_comics_book_2          : krutiks_book,
    comic_krutiks_cool_comics_book_3          : krutiks_book,
    comic_krutiks_introduction_to_the_academy : krutiks,
    comic_krutiks_new_years_special           : {x_func: xFunc1, y: krutiks.y},
    comic_lady_of_radiance_1                  : bubble_manga_line_2,
    comic_lady_of_radiance_2                  : bubble_manga_line_2,
    comic_lady_of_radiance_3                  : bubble_manga_line_2,
    comic_lady_of_radiance_4                  : bubble_manga_line_2,
    comic_licorice_1                          : bubble_manga_line_2,
    comic_licorice_book_1                     : bubble_manga_line_2_book,
    comic_major_grom_16                       : {x_func: xFunc1},
    comic_major_grom_17                       : {x_func: xFunc1},
    comic_major_grom_18                       : {x_func: xFunc1},
    comic_major_grom_38                       : major_grom_and_red_fury,
    comic_major_grom_39                       : {x_func: xFunc1, y: major_grom_and_red_fury.y},
    comic_major_grom_40                       : {x_func: xFunc1, y: major_grom_and_red_fury.y},
    comic_major_grom_41                       : major_grom_and_red_fury,
    comic_major_grom_50                       : {x_func: xFunc1},
    comic_major_grom_promise                  : igor_grom,
    comic_major_igor_grom_4                   : {x_func: xFunc1},
    comic_memento_mori_call_of_the_void       : memento_mori,
    comic_meteora_14                          : {x_func: xFunc1},
    comic_meteora_15                          : {x_func: xFunc1},
    comic_meteora_16                          : {x_func: xFunc1},
    comic_meteora_17                          : {x_func: xFunc1},
    comic_meteora_21                          : {x_func: xFunc1},
    comic_meteora_22                          : {x_func: xFunc1},
    comic_meteora_23                          : {x_func: xFunc1},
    comic_meteora_24                          : {x_func: xFunc1},
    comic_meteora_25                          : {x_func: xFunc1},
    comic_meteora_33                          : {x_func: xFunc1},
    comic_meteora_34                          : {x_func: xFunc1},
    comic_meteora_35                          : {x_func: xFunc1},
    comic_meteora_41                          : {x_func: xFunc1},
    comic_meteora_42                          : {x_func: xFunc1},
    comic_meteora_43                          : {x_func: xFunc1},
    comic_meteora_44                          : {x_func: xFunc1},
    comic_meteora_47                          : {x_func: xFunc1},
    comic_meteora_48                          : {x_func: xFunc1},
    comic_meteora_49                          : {x_func: xFunc1},
    comic_meteora_50                          : {x_func: xFunc1},
    comic_plague_doctor_2                     : {x_func: xFunc1},
    comic_plague_doctor_3                     : {x_func: xFunc1},
    comic_plague_doctor_4                     : {x_func: xFunc1},
    comic_plague_doctor_6                     : {x_func: xFunc1},
    comic_plague_doctor_7                     : {x_func: xFunc1},
    comic_plague_doctor_8                     : {x_func: xFunc1},
    comic_planeswalkers_8                     : {x_func: xFunc1},
    comic_planeswalkers_9                     : {x_func: xFunc1},
    comic_planeswalkers_10                    : {x_func: xFunc1},
    comic_planeswalkers_11                    : {x_func: xFunc1},
    comic_planeswalkers_12                    : {x_func: xFunc1},
    comic_planeswalkers_13                    : {x_func: xFunc1},
    comic_planeswalkers_14                    : {x_func: xFunc1},
    comic_planeswalkers_book_1                : planeswalkers_book,
    comic_planeswalkers_book_2                : planeswalkers_book,
    comic_plush_policeman_the_perfect_plan    : plush_policeman,
    comic_pulse_heros_voice                   : pulse,
    comic_pulse_premiere                      : pulse,
    comic_red_fury_15                         : {x_func: xFunc1},
    comic_red_fury_17                         : {x_func: xFunc1},
    comic_red_fury_18                         : {x_func: xFunc1},
    comic_red_fury_19                         : {x_func: xFunc1},
    comic_red_fury_37                         : {x_func: xFunc1},
    comic_red_fury_38                         : major_grom_and_red_fury,
    comic_red_fury_39                         : major_grom_and_red_fury,
    comic_red_fury_40                         : {x_func: xFunc1, y: major_grom_and_red_fury.y},
    comic_red_fury_41                         : {x_func: xFunc1, y: major_grom_and_red_fury.y},
    comic_red_fury_45                         : {x_func: xFunc1},
    comic_red_fury_50                         : {x_func: xFunc1},
    comic_sister_kukki                        : {y: sister_kukki.y + difference.y},
    comic_sister_kukki_1                      : sister_kukki,
    comic_soyuzmultcomics                     : childrens_comics,
    comic_tagar_tome_1                        : bubble_manga_line_1_book,
    comic_tagar_tome_1_prologue               : bubble_manga_line_1,
    comic_tagar_tome_1_chapter_1              : bubble_manga_line_1,
    comic_tagar_tome_1_chapter_2              : bubble_manga_line_1,
    comic_tagar_tome_1_chapter_3              : bubble_manga_line_1,
    comic_tagar_tome_1_chapter_4              : bubble_manga_line_1,
    comic_tagar_tome_2                        : bubble_manga_line_1_book,
    comic_tagar_tome_2_chapter_1              : bubble_manga_line_1,
    comic_tagar_tome_2_chapter_2              : bubble_manga_line_1,
    comic_tagar_tome_2_chapter_3              : bubble_manga_line_1,
    comic_tagar_tome_2_chapter_4              : bubble_manga_line_1,
    comic_tagar_tome_2_chapter_5              : bubble_manga_line_1,
    comic_tagar_tome_3                        : bubble_manga_line_1_book,
    comic_tagar_tome_3_chapter_1              : bubble_manga_line_1,
    comic_tagar_tome_3_chapter_2              : bubble_manga_line_1,
    comic_tagar_tome_3_chapter_3              : bubble_manga_line_1,
    comic_tagar_tome_3_chapter_4              : bubble_manga_line_1,
    comic_tagar_tome_3_chapter_5              : bubble_manga_line_1,
    comic_tagar_tome_3_chapter_6              : bubble_manga_line_1,
    comic_tagar_tome_3_chapter_7              : bubble_manga_line_1,
    comic_teo                                 : {y: teo.y + difference.y},
    comic_teo_1                               : teo,
    comic_teo_2                               : teo,
    comic_teo_3                               : teo,
    comic_teo_4                               : teo,
    comic_the_ink_prince_and_the_book_knight_1: bubble_manga_line_3,
    comic_thief_of_shadows_3                  : {x_func: xFunc1},
    comic_thief_of_shadows_4                  : {x_func: xFunc1},
    comic_thief_of_shadows_5                  : {x_func: xFunc1},
    comic_time_of_raven_2                     : {x_func: xFunc1},
    comic_time_of_raven_3                     : {x_func: xFunc1},
    comic_time_of_raven_4                     : {x_func: xFunc1},
    comic_time_of_raven_5                     : {x_func: xFunc1},
    comic_unicorn_conspiracy_tome_1           : unicorn_conspiracy,
    comic_unicorn_conspiracy_tome_2           : unicorn_conspiracy,
    comic_yarkh_step_forward                  : {y: yarkh_step_forward.y + difference.y},
    comic_yarkh_step_forward_1                : yarkh_step_forward,
    comic_yarkh_step_forward_2                : yarkh_step_forward,
    comic_yarkh_step_forward_3                : yarkh_step_forward,
    comic_yarkh_step_forward_4                : {x_func: xFunc1, y: yarkh_step_forward.y},
    comic_yarkh_step_forward_5                : {x_func: xFunc1, y: yarkh_step_forward.y},
    comic_yarkh_step_forward_6                : {x_func: xFunc1, y: yarkh_step_forward.y},
    comic_ziggy_space_hamster                 : {y: ziggy_space_hamster.y + difference.y},
    comic_ziggy_space_hamster_1               : ziggy_space_hamster,
    comic_ziggy_space_hamster_2               : {x_func: xFunc1, y: ziggy_space_hamster.y},
    comic_ziggy_space_hamster_3               : {x_func: xFunc1, y: ziggy_space_hamster.y},
    comic_ziggy_space_hamster_4               : {x_func: xFunc1, y: ziggy_space_hamster.y},
    comic_ziggy_space_hamster_5               : {x_func: xFunc1, y: ziggy_space_hamster.y},
    difference,
    range_allies                              : allies,
    range_anastasia_kim                       : anastasia_kim,
    range_besoboy                             : besoboy,
    range_besoboy_vol_2                       : besoboy_vol_2,
    range_enoch                               : enoch,
    range_enoch_party_king                    : enoch_party_king,
    range_evgeny_fedotov                      : evgeny_fedotov,
    range_evgeny_yakovlev                     : evgeny_yakovlev,
    range_exlibrium                           : exlibrium,
    range_exlibrium_second_life               : exlibrium_second_life,
    range_friends_comics                      : friends_comics,
    range_igor_grom                           : igor_grom,
    range_igor_ugor                           : igor_ugor,
    range_madibek_musabekov                   : madibek_musabekov,
    range_major_grom                          : major_grom,
    range_major_igor_grom                     : igor_grom,
    range_meteora                             : meteora,
    range_plague_doctor                       : plague_doctor,
    range_planeswalkers                       : planeswalkers,
    range_red_fury                            : red_fury,
    range_thief_of_shadows                    : thief_of_shadows,
    range_time_of_raven                       : time_of_raven,
    range_tipping_point                       : tipping_point,
    range_turbocarp                           : turbocarp,
    range_world                               : world,
    range_yulia_zhuravleva                    : yulia_zhuravleva,
    range_ziggy_and_shmyg                     : ziggy_and_shmyg
};