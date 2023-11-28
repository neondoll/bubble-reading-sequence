import {comics} from "./comics";
import {getComicIdToNodeId} from "./helper_functions";
import {getMaxOfArray} from "./functions/array_func";

const difference = {x: 140, y: 110};

const allies = {y: difference.y * 24};
const anastasia_kim = {y: difference.y * 52};
const besoboy = {y: difference.y};
const besoboy_vol_2 = {y: difference.y * 3};
const bubble_legends = {y: difference.y * 61};
const bubble_school = {y: difference.y * 71};
const bubble_triptych = {y: difference.y * 69};
const childrens_comics = {y: difference.y * 33};
const enoch = {y: difference.y * 6};
const enoch_party_king = {y: difference.y * 38};
const evgeny_fedotov = {y: difference.y * 35};
const evgeny_yakovlev = {y: difference.y * 51};
const exlibrium = {y: difference.y * 27};
const exlibrium_second_life = {y: difference.y * 29};
const friends_comics = {y: difference.y * 41};
const gam = {y: difference.y * 70};
const igor_grom = {y: difference.y * 14};
const igor_ugor = {y: difference.y * 40};
const madibek_musabekov = {y: difference.y * 66};
const major_grom = {y: difference.y * 12};
const major_igor_grom = {y: difference.y * 16};
const meteora = {y: difference.y * 31};
const planeswalkers = {y: difference.y * 8};
const plague_doctor = {y: difference.y * 18};
const red_fury = {y: difference.y * 22};
const thief_of_shadows = {y: difference.y * 53};
const time_of_raven = {y: (besoboy.y + enoch.y + major_grom.y + red_fury.y) / 4};
const tipping_point = {y: difference.y * 39};
const turbocarp = {y: difference.y * 65};
const witch = {y: difference.y * 67};
const world = {y: difference.y * 20};
const yulia_zhuravleva = {y: difference.y * 42};
const ziggy_and_shmyg = {y: difference.y * 50};

const allies_hardcover_book = {y: allies.y + difference.y * 2};
const besoboy_and_planeswalkers = {y: (besoboy_vol_2.y + planeswalkers.y) / 2};
const besoboy_and_planeswalkers_book = {y: besoboy_and_planeswalkers.y + difference.y};
const besoboy_book = {y: besoboy.y + difference.y};
const besoboy_vol_2_hardcover_book = {y: besoboy_vol_2.y + difference.y * 2};
const bubble_legends_book = {y: bubble_legends.y + difference.y};
const bubble_manga_line_1 = {y: difference.y * 44};
const bubble_manga_line_1_book = {y: bubble_manga_line_1.y + difference.y};
const bubble_manga_line_2 = {y: difference.y * 46};
const bubble_manga_line_2_book = {y: bubble_manga_line_2.y + difference.y};
const bubble_manga_line_3 = {y: difference.y * 48};
const bubble_manga_line_3_book = {y: bubble_manga_line_3.y + difference.y};
const caesar_magnificent = {y: difference.y * 36};
const caesar_magnificent_book = {y: caesar_magnificent.y + difference.y};
const childrens_comics_book = {y: childrens_comics.y + difference.y};
const community = {y: difference.y * 63};
const community_book = {y: community.y + difference.y};
const crusade_wolf = {y: planeswalkers.y + difference.y * 2};
const crusade_wolf_book = {y: crusade_wolf.y + difference.y};
const enoch_vs_besoboy = {y: (besoboy.y + enoch.y) / 2};
const fiction_novel = {y: difference.y * 72};
const igor_grom_hardcover_book = {y: igor_grom.y + difference.y * 2};
const major_grom_and_red_fury = {y: (major_grom.y + red_fury.y) / 2};
const meteora_book = {y: meteora.y + difference.y};
const new_bubble_heroes_line_1 = {y: difference.y * 55};
const new_bubble_heroes_line_1_book = {y: new_bubble_heroes_line_1.y + difference.y};
const new_bubble_heroes_line_2 = {y: difference.y * 57};
const new_bubble_heroes_line_2_book = {y: new_bubble_heroes_line_2.y + difference.y};
const new_bubble_heroes_line_3 = {y: difference.y * 59};
const new_bubble_heroes_line_4 = {y: difference.y * 60};
const planeswalkers_hardcover_book = {y: planeswalkers.y + difference.y * 2};
const unicorn_conspiracy = {y: difference.y * 43};

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
    comic_allies_book_1                      : allies_hardcover_book,
    comic_allies_book_2                      : allies_hardcover_book,
    comic_anna_input                         : new_bubble_heroes_line_3,
    comic_anna_space_of_options              : new_bubble_heroes_line_3,
    comic_balor_and_yana_dream_catcher_book  : besoboy_book,
    comic_balor_and_yana_dream_catcher_single: besoboy,
    comic_besoboy_15                         : enoch_vs_besoboy,
    comic_besoboy_16                         : enoch_vs_besoboy,
    comic_besoboy_17                         : enoch_vs_besoboy,
    comic_besoboy_39                         : {x_func: xFunc1},
    comic_besoboy_40                         : {x_func: xFunc1},
    //comic_besoboy_41                         : {x_func: xFunc1},
    comic_besoboy_42                                                        : {x_func: xFunc1},
    comic_besoboy_46                                                        : {x_func: xFunc1},
    comic_besoboy_50                                                        : {x_func: xFunc1},
    comic_besoboy_and_planeswalkers_book                                    : besoboy_and_planeswalkers_book,
    comic_besoboy_and_planeswalkers_single                                  : besoboy_and_planeswalkers,
    comic_besoboy_vol_2_2                                                   : {x_func: xFunc1},
    comic_besoboy_vol_2_3                                                   : {x_func: xFunc1},
    comic_besoboy_vol_2_4                                                   : {x_func: xFunc1},
    comic_besoboy_vol_2_5                                                   : {x_func: xFunc1},
    comic_besoboy_vol_2_8                                                   : {x_func: xFunc1},
    comic_besoboy_vol_2_9                                                   : {x_func: xFunc1},
    comic_besoboy_vol_2_10                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_11                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_12                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_13                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_14                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_25                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_26                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_27                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_28                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_30                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_31                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_32                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_35                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_36                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_37                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_38                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_40                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_41                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_42                                                  : {x_func: xFunc1},
    comic_besoboy_vol_2_book_1                                              : besoboy_vol_2_hardcover_book,
    comic_besoboy_vol_2_book_2                                              : besoboy_vol_2_hardcover_book,
    comic_black_dog_2                                                       : {x_func: xFunc1},
    comic_black_dog_3                                                       : {x_func: xFunc1},
    comic_black_dog_4                                                       : {x_func: xFunc1},
    comic_black_hand_and_mysterious_package                                 : new_bubble_heroes_line_4,
    comic_bubble_halloween                                                  : bubble_legends,
    comic_caesar_magnificent                                                : caesar_magnificent_book,
    comic_caesar_magnificent_1                                              : caesar_magnificent,
    comic_caesar_magnificent_2                                              : caesar_magnificent,
    comic_caesar_magnificent_3                                              : caesar_magnificent,
    comic_caesar_magnificent_4                                              : caesar_magnificent,
    comic_caesar_magnificent_5                                              : caesar_magnificent,
    comic_cell_split                                                        : new_bubble_heroes_line_4,
    comic_chosen_one_of_the_moon                                            : bubble_manga_line_2_book,
    comic_chosen_one_of_the_moon_1                                          : bubble_manga_line_2,
    comic_chosen_one_of_the_moon_2                                          : bubble_manga_line_2,
    comic_chosen_one_of_the_moon_3                                          : bubble_manga_line_2,
    comic_chosen_one_of_the_moon_4                                          : bubble_manga_line_2,
    comic_chosen_one_of_the_moon_5                                          : bubble_manga_line_2,
    comic_chosen_one_of_the_moon_6                                          : {
        x_func: xFunc1,
        y     : bubble_manga_line_2.y
    },
    comic_community                                                         : community_book,
    comic_community_1                                                       : community,
    comic_community_2                                                       : {x_func: xFunc1, y: community.y},
    comic_community_3                                                       : {x_func: xFunc1, y: community.y},
    comic_community_4                                                       : {x_func: xFunc1, y: community.y},
    comic_community_plush_and_dangerous_storybook_book                      : community_book,
    comic_community_plush_and_dangerous_storybook_single                    : community,
    comic_crusade_3                                                         : {x_func: xFunc1},
    comic_crusade_4                                                         : {x_func: xFunc1},
    comic_crusade_epilogue                                                  : {x_func: xFunc1},
    comic_crusade_wolf                                                      : crusade_wolf_book,
    comic_crusade_wolf_1                                                    : crusade_wolf,
    comic_crusade_wolf_2                                                    : crusade_wolf,
    comic_crusade_wolf_3                                                    : {x_func: xFunc1, y: crusade_wolf.y},
    comic_crusade_wolf_4                                                    : {x_func: xFunc1, y: crusade_wolf.y},
    comic_crusade_wolf_5                                                    : {x_func: xFunc1, y: crusade_wolf.y},
    comic_devilry                                                           : bubble_legends_book,
    comic_devilry_1                                                         : bubble_legends,
    comic_devilry_2                                                         : bubble_legends,
    comic_devilry_3                                                         : bubble_legends,
    comic_devilry_4                                                         : bubble_legends,
    comic_dont_be_reckless_quatrefoil                                       : new_bubble_heroes_line_2,
    comic_editor                                                            : new_bubble_heroes_line_2,
    comic_enoch_15                                                          : enoch_vs_besoboy,
    comic_enoch_16                                                          : enoch_vs_besoboy,
    comic_enoch_17                                                          : enoch_vs_besoboy,
    comic_enoch_37                                                          : {x_func: xFunc1},
    comic_enoch_38                                                          : {x_func: xFunc1},
    comic_enoch_40                                                          : {x_func: xFunc1},
    comic_enoch_41                                                          : {x_func: xFunc1},
    comic_enoch_42                                                          : {x_func: xFunc1},
    comic_exlibrium_13                                                      : {x_func: xFunc1},
    comic_exlibrium_14                                                      : {x_func: xFunc1},
    comic_exlibrium_15                                                      : {x_func: xFunc1},
    comic_exlibrium_16                                                      : {x_func: xFunc1},
    comic_exlibrium_17                                                      : {x_func: xFunc1},
    comic_exlibrium_21                                                      : {x_func: xFunc1},
    comic_exlibrium_22                                                      : {x_func: xFunc1},
    comic_exlibrium_23                                                      : {x_func: xFunc1},
    comic_exlibrium_33                                                      : {x_func: xFunc1},
    comic_exlibrium_34                                                      : {x_func: xFunc1},
    comic_exlibrium_36                                                      : {x_func: xFunc1},
    comic_exlibrium_37                                                      : {x_func: xFunc1},
    comic_exlibrium_38                                                      : {x_func: xFunc1},
    comic_exlibrium_39                                                      : {x_func: xFunc1},
    comic_exlibrium_40                                                      : {x_func: xFunc1},
    comic_exlibrium_47                                                      : {x_func: xFunc1},
    comic_exlibrium_48                                                      : {x_func: xFunc1},
    comic_exlibrium_49                                                      : {x_func: xFunc1},
    comic_exlibrium_50                                                      : {x_func: xFunc1},
    comic_exlibrium_red_line_single                                         : {x_func: xFunc2}, /* TODO: Подумать о смещении */
    comic_exlibrium_second_life_1                                           : {x_func: xFunc1},
    comic_exlibrium_second_life_2                                           : {x_func: xFunc1},
    comic_exlibrium_second_life_3                                           : {x_func: xFunc1},
    comic_exlibrium_second_life_4                                           : {x_func: xFunc1},
    comic_exlibrium_second_life_6                                           : {x_func: xFunc1},
    comic_exlibrium_second_life_7                                           : {x_func: xFunc1},
    comic_exlibrium_second_life_8                                           : {x_func: xFunc1},
    comic_exlibrium_second_life_12                                          : {x_func: xFunc1},
    comic_exlibrium_second_life_29                                          : {x_func: xFunc1},
    comic_exlibrium_second_life_30                                          : {x_func: xFunc1},
    comic_exlibrium_second_life_31                                          : {x_func: xFunc1},
    comic_exlibrium_second_life_32                                          : {x_func: xFunc1},
    comic_falcon_1                                                          : new_bubble_heroes_line_1,
    comic_falcon_2                                                          : {
        x_func: xFunc1,
        y     : new_bubble_heroes_line_1.y
    },
    comic_falcon_3                                                          : {
        x_func: xFunc1,
        y     : new_bubble_heroes_line_1.y
    },
    comic_falcon_4                                                          : {
        x_func: xFunc1,
        y     : new_bubble_heroes_line_1.y
    },
    comic_falcon_5                                                          : new_bubble_heroes_line_1,
    comic_falcon_6                                                          : {
        x_func: xFunc1,
        y     : new_bubble_heroes_line_1.y
    },
    comic_falcon_7                                                          : {
        x_func: xFunc1,
        y     : new_bubble_heroes_line_1.y
    },
    comic_falcon_tome_1                                                     : new_bubble_heroes_line_1_book,
    comic_falcon_tome_2                                                     : new_bubble_heroes_line_1_book,
    comic_fiction_novel_besoboy                                             : fiction_novel,
    comic_fiction_novel_razumovsky                                          : fiction_novel,
    comic_fiction_novel_the_nine_lives_of_agatha_the_first_life_dragons_font: fiction_novel,
    comic_gray_hound_tome_1_chapter_1                                       : bubble_manga_line_2,
    comic_hourly_time_against_2                                             : {x_func: xFunc1},
    comic_hourly_time_against_3                                             : {x_func: xFunc1},
    comic_hourly_time_against_4                                             : {x_func: xFunc1},
    comic_hourly_time_against_5                                             : {x_func: xFunc1},
    comic_igor_grom_2                                                       : {x_func: xFunc1},
    comic_igor_grom_3                                                       : {x_func: xFunc1},
    comic_igor_grom_4                                                       : {x_func: xFunc1},
    comic_igor_grom_5                                                       : {x_func: xFunc1},
    comic_igor_grom_6                                                       : {x_func: xFunc1},
    comic_igor_grom_8                                                       : {x_func: xFunc1},
    comic_igor_grom_9                                                       : {x_func: xFunc1},
    comic_igor_grom_10                                                      : {x_func: xFunc1},
    comic_igor_grom_11                                                      : {x_func: xFunc1},
    comic_igor_grom_12                                                      : {x_func: xFunc1},
    comic_igor_grom_13                                                      : {x_func: xFunc1},
    comic_igor_grom_14                                                      : {x_func: xFunc1},
    comic_igor_grom_25                                                      : {x_func: xFunc1},
    comic_igor_grom_30                                                      : {x_func: xFunc1},
    comic_igor_grom_36                                                      : {x_func: xFunc1},
    comic_igor_grom_37                                                      : {x_func: xFunc1},
    comic_igor_grom_38                                                      : {x_func: xFunc1},
    comic_igor_grom_39                                                      : {x_func: xFunc1},
    comic_igor_grom_46                                                      : {x_func: xFunc1},
    comic_igor_grom_47                                                      : {x_func: xFunc1},
    comic_igor_grom_48                                                      : {x_func: xFunc1},
    comic_igor_grom_49                                                      : {x_func: xFunc1},
    comic_igor_grom_50                                                      : {x_func: xFunc1},
    comic_igor_grom_book_1                                                  : igor_grom_hardcover_book,
    comic_igor_grom_book_2                                                  : igor_grom_hardcover_book,
    comic_krutiks_1                                                         : childrens_comics,
    comic_krutiks_1_2018                                                    : childrens_comics,
    comic_krutiks_2                                                         : childrens_comics,
    comic_krutiks_2_2018                                                    : childrens_comics,
    comic_krutiks_3                                                         : childrens_comics,
    comic_krutiks_3_2018                                                    : childrens_comics,
    comic_krutiks_4_2018                                                    : {x_func: xFunc1, y: childrens_comics.y},
    comic_krutiks_5_2018                                                    : {x_func: xFunc1, y: childrens_comics.y},
    comic_krutiks_6_2018                                                    : {x_func: xFunc1, y: childrens_comics.y},
    comic_krutiks_7_2018                                                    : {x_func: xFunc1, y: childrens_comics.y},
    comic_krutiks_8_2018                                                    : childrens_comics,
    comic_krutiks_9_2018                                                    : childrens_comics,
    comic_krutiks_10_2018                                                   : childrens_comics,
    comic_krutiks_11_2018                                                   : childrens_comics,
    comic_krutiks_12_2018                                                   : childrens_comics,
    comic_krutiks_cool_comics_book_1                                        : childrens_comics_book,
    comic_krutiks_cool_comics_book_2                                        : childrens_comics_book,
    comic_krutiks_cool_comics_book_3                                        : childrens_comics_book,
    comic_krutiks_galaxy_legends                                            : childrens_comics,
    comic_krutiks_introduction_to_the_academy                               : childrens_comics,
    comic_krutiks_new_years_special                                         : {x_func: xFunc1, y: childrens_comics.y},
    comic_lady_of_radiance_1                                                : bubble_manga_line_2,
    comic_lady_of_radiance_2                                                : bubble_manga_line_2,
    comic_lady_of_radiance_3                                                : bubble_manga_line_2,
    comic_lady_of_radiance_4                                                : bubble_manga_line_2,
    comic_licorice_1                                                        : bubble_manga_line_2,
    comic_licorice_2                                                        : bubble_manga_line_2,
    comic_licorice_3                                                        : bubble_manga_line_2,
    comic_licorice_4                                                        : bubble_manga_line_2,
    comic_licorice_5                                                        : bubble_manga_line_2,
    comic_licorice_6                                                        : bubble_manga_line_2,
    comic_licorice_book_1                                                   : bubble_manga_line_2_book,
    comic_licorice_book_2                                                   : bubble_manga_line_2_book,
    comic_major_grom_16                                                     : {x_func: xFunc1},
    comic_major_grom_17                                                     : {x_func: xFunc1},
    comic_major_grom_18                                                     : {x_func: xFunc1},
    comic_major_grom_38                                                     : major_grom_and_red_fury,
    comic_major_grom_39                                                     : {
        x_func: xFunc1,
        y     : major_grom_and_red_fury.y
    },
    comic_major_grom_40                                                     : {
        x_func: xFunc1,
        y     : major_grom_and_red_fury.y
    },
    comic_major_grom_41                                                     : major_grom_and_red_fury,
    comic_major_grom_50                                                     : {x_func: xFunc1},
    comic_major_grom_promise                                                : igor_grom,
    comic_major_igor_grom_4                                                 : {x_func: xFunc1},
    comic_major_igor_grom_15                                                : {x_func: xFunc1},
    comic_major_igor_grom_16                                                : {x_func: xFunc1},
    comic_memento_mori_call_of_the_void                                     : new_bubble_heroes_line_2,
    comic_meteora_14                                                        : {x_func: xFunc1},
    comic_meteora_15                                                        : {x_func: xFunc1},
    comic_meteora_16                                                        : {x_func: xFunc1},
    comic_meteora_17                                                        : {x_func: xFunc1},
    comic_meteora_21                                                        : {x_func: xFunc1},
    comic_meteora_22                                                        : {x_func: xFunc1},
    comic_meteora_23                                                        : {x_func: xFunc1},
    comic_meteora_24                                                        : {x_func: xFunc1},
    comic_meteora_25                                                        : {x_func: xFunc1},
    comic_meteora_33                                                        : {x_func: xFunc1},
    comic_meteora_34                                                        : {x_func: xFunc1},
    comic_meteora_35                                                        : {x_func: xFunc1},
    comic_meteora_41                                                        : {x_func: xFunc1},
    comic_meteora_42                                                        : {x_func: xFunc1},
    comic_meteora_43                                                        : {x_func: xFunc1},
    comic_meteora_44                                                        : {x_func: xFunc1},
    comic_meteora_47                                                        : {x_func: xFunc1},
    comic_meteora_48                                                        : {x_func: xFunc1},
    comic_meteora_49                                                        : {x_func: xFunc1},
    comic_meteora_50                                                        : {x_func: xFunc1},
    comic_plague_doctor_2                                                   : {x_func: xFunc1},
    comic_plague_doctor_3                                                   : {x_func: xFunc1},
    comic_plague_doctor_4                                                   : {x_func: xFunc1},
    comic_plague_doctor_6                                                   : {x_func: xFunc1},
    comic_plague_doctor_7                                                   : {x_func: xFunc1},
    comic_plague_doctor_8                                                   : {x_func: xFunc1},
    comic_planeswalkers_8                                                   : {x_func: xFunc1},
    comic_planeswalkers_9                                                   : {x_func: xFunc1},
    comic_planeswalkers_10                                                  : {x_func: xFunc1},
    comic_planeswalkers_11                                                  : {x_func: xFunc1},
    comic_planeswalkers_12                                                  : {x_func: xFunc1},
    comic_planeswalkers_13                                                  : {x_func: xFunc1},
    comic_planeswalkers_14                                                  : {x_func: xFunc1},
    comic_planeswalkers_book_1                                              : planeswalkers_hardcover_book,
    comic_planeswalkers_book_2                                              : planeswalkers_hardcover_book,
    comic_plush_policeman_the_perfect_plan                                  : new_bubble_heroes_line_3,
    comic_pulse_heros_voice                                                 : new_bubble_heroes_line_2,
    comic_pulse_premiere                                                    : {
        x_func: xFunc1,
        y     : new_bubble_heroes_line_2.y
    },
    comic_pulse_tome_1                                                      : new_bubble_heroes_line_2_book,
    comic_red_fury_15                                                       : {x_func: xFunc1},
    comic_red_fury_17                                                       : {x_func: xFunc1},
    comic_red_fury_18                                                       : {x_func: xFunc1},
    comic_red_fury_19                                                       : {x_func: xFunc1},
    comic_red_fury_37                                                       : {x_func: xFunc1},
    comic_red_fury_38                                                       : major_grom_and_red_fury,
    comic_red_fury_39                                                       : major_grom_and_red_fury,
    comic_red_fury_40                                                       : {
        x_func: xFunc1,
        y     : major_grom_and_red_fury.y
    },
    comic_red_fury_41                                                       : {
        x_func: xFunc1,
        y     : major_grom_and_red_fury.y
    },
    comic_red_fury_45                                                       : {x_func: xFunc1},
    comic_red_fury_50                                                       : {x_func: xFunc1},
    comic_rivers_no_fear_1                                                  : {x_func: xFunc2},
    comic_sister_kukki                                                      : new_bubble_heroes_line_2_book,
    comic_sister_kukki_1                                                    : new_bubble_heroes_line_2,
    comic_soyuzmultcomics                                                   : childrens_comics,
    comic_special_phaeton_single                                            : {x_func: xFunc2}, /* TODO: Подумать о смещении */
    comic_tagar_tome_1                                                      : bubble_manga_line_1_book,
    comic_tagar_tome_1_prologue                                             : bubble_manga_line_1,
    comic_tagar_tome_1_chapter_1                                            : bubble_manga_line_1,
    comic_tagar_tome_1_chapter_2                                            : bubble_manga_line_1,
    comic_tagar_tome_1_chapter_3                                            : bubble_manga_line_1,
    comic_tagar_tome_1_chapter_4                                            : bubble_manga_line_1,
    comic_tagar_tome_2                                                      : bubble_manga_line_1_book,
    comic_tagar_tome_2_chapter_1                                            : bubble_manga_line_1,
    comic_tagar_tome_2_chapter_2                                            : bubble_manga_line_1,
    comic_tagar_tome_2_chapter_3                                            : bubble_manga_line_1,
    comic_tagar_tome_2_chapter_4                                            : bubble_manga_line_1,
    comic_tagar_tome_2_chapter_5                                            : bubble_manga_line_1,
    comic_tagar_tome_3                                                      : bubble_manga_line_1_book,
    comic_tagar_tome_3_chapter_1                                            : bubble_manga_line_1,
    comic_tagar_tome_3_chapter_2                                            : bubble_manga_line_1,
    comic_tagar_tome_3_chapter_3                                            : bubble_manga_line_1,
    comic_tagar_tome_3_chapter_4                                            : bubble_manga_line_1,
    comic_tagar_tome_3_chapter_5                                            : bubble_manga_line_1,
    comic_tagar_tome_3_chapter_6                                            : bubble_manga_line_1,
    comic_tagar_tome_3_chapter_7                                            : bubble_manga_line_1,
    comic_tagar_tome_4                                                      : bubble_manga_line_1_book,
    comic_tagar_tome_4_chapter_1                                            : bubble_manga_line_1,
    comic_tagar_tome_4_chapter_2                                            : bubble_manga_line_1,
    comic_tagar_tome_4_chapter_3                                            : bubble_manga_line_1,
    comic_tagar_tome_4_chapter_4                                            : bubble_manga_line_1,
    comic_tagar_tome_4_chapter_5                                            : bubble_manga_line_1,
    comic_tagar_tome_4_chapter_6                                            : bubble_manga_line_1,
    comic_teo                                                               : meteora_book,
    comic_teo_1                                                             : meteora,
    comic_teo_2                                                             : meteora,
    comic_teo_3                                                             : meteora,
    comic_teo_4                                                             : meteora,
    comic_the_ink_prince_and_the_book_knight                                : bubble_manga_line_3_book,
    comic_the_ink_prince_and_the_book_knight_1                              : bubble_manga_line_3,
    comic_the_ink_prince_and_the_book_knight_2                              : {
        x_func: xFunc1,
        y     : bubble_manga_line_3.y
    },
    comic_the_ink_prince_and_the_book_knight_3                              : {
        x_func: xFunc1,
        y     : bubble_manga_line_3.y
    },
    comic_the_ink_prince_and_the_book_knight_4                              : {
        x_func: xFunc1,
        y     : bubble_manga_line_3.y
    },
    comic_thief_of_shadows_3                                                : {x_func: xFunc1},
    comic_thief_of_shadows_4                                                : {x_func: xFunc1},
    comic_thief_of_shadows_5                                                : {x_func: xFunc1},
    comic_thief_of_shadows_10                                               : {x_func: xFunc1},
    comic_time_of_raven_2                                                   : {x_func: xFunc1},
    comic_time_of_raven_3                                                   : {x_func: xFunc1},
    comic_time_of_raven_4                                                   : {x_func: xFunc1},
    comic_time_of_raven_5                                                   : {x_func: xFunc1},
    comic_unicorn_conspiracy_tome_1                                         : unicorn_conspiracy,
    comic_unicorn_conspiracy_tome_2                                         : unicorn_conspiracy,
    comic_vera_wolf                                                         : bubble_legends,
    comic_yarkh_step_forward                                                : besoboy_book,
    comic_yarkh_step_forward_1                                              : besoboy,
    comic_yarkh_step_forward_2                                              : besoboy,
    comic_yarkh_step_forward_3                                              : besoboy,
    comic_yarkh_step_forward_4                                              : {x_func: xFunc1, y: besoboy.y},
    comic_yarkh_step_forward_5                                              : {x_func: xFunc1, y: besoboy.y},
    comic_yarkh_step_forward_6                                              : {x_func: xFunc1, y: besoboy.y},
    comic_ziggy_space_hamster                                               : childrens_comics_book,
    comic_ziggy_space_hamster_1                                             : childrens_comics,
    comic_ziggy_space_hamster_2                                             : {
        x_func: xFunc1,
        y     : childrens_comics.y
    },
    comic_ziggy_space_hamster_3                                             : {
        x_func: xFunc1,
        y     : childrens_comics.y
    },
    comic_ziggy_space_hamster_4                                             : {
        x_func: xFunc1,
        y     : childrens_comics.y
    },
    comic_ziggy_space_hamster_5                                             : {
        x_func: xFunc1,
        y     : childrens_comics.y
    },
    difference,
    range_allies                                                            : allies,
    range_anastasia_kim                                                     : anastasia_kim,
    range_besoboy                                                           : besoboy,
    range_besoboy_vol_2                                                     : besoboy_vol_2,
    range_bubble_school                                                     : bubble_school,
    range_bubble_triptych                                                   : bubble_triptych,
    range_enoch                                                             : enoch,
    range_enoch_party_king                                                  : enoch_party_king,
    range_evgeny_fedotov                                                    : evgeny_fedotov,
    range_evgeny_yakovlev                                                   : evgeny_yakovlev,
    range_exlibrium                                                         : exlibrium,
    range_exlibrium_second_life                                             : exlibrium_second_life,
    range_friends_comics                                                    : friends_comics,
    range_gam                                                               : gam,
    range_igor_grom                                                         : igor_grom,
    range_igor_ugor                                                         : igor_ugor,
    range_madibek_musabekov                                                 : madibek_musabekov,
    range_major_grom                                                        : major_grom,
    range_major_igor_grom                                                   : major_igor_grom,
    range_meteora                                                           : meteora,
    range_plague_doctor                                                     : plague_doctor,
    range_planeswalkers                                                     : planeswalkers,
    range_red_fury                                                          : red_fury,
    range_thief_of_shadows                                                  : thief_of_shadows,
    range_time_of_raven                                                     : time_of_raven,
    range_tipping_point                                                     : tipping_point,
    range_turbocarp                                                         : turbocarp,
    range_witch                                                             : witch,
    range_world                                                             : world,
    range_yulia_zhuravleva                                                  : yulia_zhuravleva,
    range_ziggy_and_shmyg                                                   : ziggy_and_shmyg
};