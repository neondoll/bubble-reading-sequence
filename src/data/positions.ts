import {comicIdToNodeId} from "./functions/helper_functions";
import {maxOfArray} from "./functions/array_functions";
import comics from "./comics";

const difference = {x: 140, y: 110};

const range_allies = {y: difference.y * 14};
const range_allies_hardcover_book = {y: range_allies.y + difference.y * 2};
const range_anastasia_kim = {y: difference.y * 52};
const range_besoboy = {y: difference.y};
const range_besoboy_book = {y: range_besoboy.y + difference.y};
const range_besoboy_vol_2 = {y: difference.y * 3};
const range_besoboy_vol_2_hardcover_book = {y: range_besoboy_vol_2.y + difference.y * 2};
const range_bubble_legends = {y: difference.y * 61};
const range_bubble_manga_line_1 = {y: difference.y * 44};
const range_bubble_manga_line_1_book = {y: range_bubble_manga_line_1.y + difference.y};
const range_bubble_manga_line_2 = {y: difference.y * 46};
const range_bubble_manga_line_2_book = {y: range_bubble_manga_line_2.y + difference.y};
const range_bubble_manga_line_3 = {y: difference.y * 48};
const range_bubble_manga_line_3_book = {y: range_bubble_manga_line_3.y + difference.y};
const range_bubble_school = {y: difference.y * 71};
const range_bubble_triptych = {y: difference.y * 69};
const range_childrens_comics = {y: difference.y * 33};
const range_childrens_comics_book = {y: range_childrens_comics.y + difference.y};
const range_evgeny_fedotov = {y: difference.y * 35};
const range_evgeny_yakovlev = {y: difference.y * 51};
const range_exlibrium = {y: difference.y * 27};
const range_exlibrium_second_life = {y: difference.y * 29};
const range_friends_comics = {y: difference.y * 41};
const range_gam = {y: difference.y * 70};
const range_igor_grom = {y: difference.y * 19};
const range_igor_grom_hardcover_book = {y: range_igor_grom.y + difference.y * 2};
const range_igor_ugor = {y: difference.y * 40};
const range_madibek_musabekov = {y: difference.y * 66};
const range_major_grom = {y: difference.y * 17};
const range_major_grom_book = {y: range_major_grom.y + difference.y}
const range_major_igor_grom = {y: difference.y * 21};
const range_meteora = {y: difference.y * 31};
const range_meteora_book = {y: range_meteora.y + difference.y};
const range_mir = {y: difference.y * 25};
const range_monk = {y: difference.y * 6};
const range_monk_book = {y: range_monk.y + difference.y}
const range_monk_king_of_parties = {y: difference.y * 38};
const range_new_bubble_heroes_line_1 = {y: difference.y * 55};
const range_new_bubble_heroes_line_1_book = {y: range_new_bubble_heroes_line_1.y + difference.y};
const range_new_bubble_heroes_line_2 = {y: difference.y * 57};
const range_new_bubble_heroes_line_2_book = {y: range_new_bubble_heroes_line_2.y + difference.y};
const range_new_bubble_heroes_line_3 = {y: difference.y * 59};
const range_new_bubble_heroes_line_4 = {y: difference.y * 60};
const range_planeswalkers = {y: difference.y * 8};
const range_planeswalkers_hardcover_book = {y: range_planeswalkers.y + difference.y * 2};
const range_plague_doctor = {y: difference.y * 23};
const range_point_of_no_return = {y: difference.y * 39};
const range_red_fury = {y: difference.y * 12};
const range_thief_of_shadows = {y: difference.y * 53};
const range_time_of_raven = {y: (range_besoboy.y + range_monk.y + range_major_grom.y + range_red_fury.y) / 4};
const range_turbocarp = {y: difference.y * 65};
const range_witch = {y: difference.y * 67};
const range_ziggy_and_shmyg = {y: difference.y * 50};

const comic_besoboy_and_planeswalkers_new_life = {y: (range_besoboy_vol_2.y + range_planeswalkers.y) / 2};
const comic_caesar_magnificent = {y: difference.y * 36};
const comic_caesar_magnificent_book = {y: comic_caesar_magnificent.y + difference.y};
const comic_community = {y: difference.y * 63};
const comic_community_book = {y: comic_community.y + difference.y};
const comic_crusade_wolf = {y: range_planeswalkers.y + difference.y * 2};
const comic_crusade_wolf_book = {y: comic_crusade_wolf.y + difference.y};
const comic_exlibriums = {y: (range_exlibrium.y + range_exlibrium_second_life.y) / 2};
const comic_fiction_novel = {y: difference.y * 72};
const comic_jackets_and_revolvers = {y: difference.y * 42};
const comic_major_grom_and_red_fury = {y: (range_major_grom.y + range_red_fury.y) / 2};
const comic_monk_vs_besoboy = {y: (range_besoboy.y + range_monk.y) / 2};
const comic_unicorn_conspiracy = {y: difference.y * 43};
const comic_witch_hunt = {y: (range_allies.y + range_besoboy_vol_2.y + range_igor_grom.y + range_planeswalkers.y) / 4};

const xFunc1 = (layouts_nodes, comic_id: string) => {
    const comic = comics[comic_id];

    if (comic.previous_comics) {
        const layouts_nodes_id = Object.keys(layouts_nodes);
        const previous_nodes_x = comic.previous_comics
            .map((previous_comic_id) => comicIdToNodeId(previous_comic_id))
            .filter((previous_node_id) => layouts_nodes_id.indexOf(previous_node_id) !== -1)
            .map((previous_node_id) => layouts_nodes[previous_node_id].x);

        return maxOfArray(previous_nodes_x) + difference.x;
    }
};
const xFunc2 = (layouts_nodes) => {
    const layouts_nodes_x = Object.keys(layouts_nodes)
        .map((layouts_node_id) => layouts_nodes[layouts_node_id].x);

    return maxOfArray(layouts_nodes_x) + difference.x;
};

export default {
    comic_adventures_of_kochi_and_friends_funny_sketches                    : range_childrens_comics,
    comic_allies_15                                                         : comic_witch_hunt,
    comic_allies_book_1                                                     : range_allies_hardcover_book,
    comic_allies_book_2                                                     : range_allies_hardcover_book,
    comic_anna_input                                                        : range_new_bubble_heroes_line_3,
    comic_anna_space_of_options                                             : range_new_bubble_heroes_line_3,
    comic_balor_and_yana_dream_catcher_book                                 : range_besoboy_book,
    comic_balor_and_yana_dream_catcher_single                               : range_besoboy,
    comic_besoboy_15                                                        : comic_monk_vs_besoboy,
    comic_besoboy_16                                                        : comic_monk_vs_besoboy,
    comic_besoboy_17                                                        : comic_monk_vs_besoboy,
    comic_besoboy_and_planeswalkers_new_life_electronic                     : comic_besoboy_and_planeswalkers_new_life,
    comic_besoboy_and_planeswalkers_new_life_printed                        : {y: comic_besoboy_and_planeswalkers_new_life.y + difference.y},
    comic_besoboy_vol_2_15                                                  : comic_witch_hunt,
    comic_besoboy_vol_2_book_1                                              : range_besoboy_vol_2_hardcover_book,
    comic_besoboy_vol_2_book_2                                              : range_besoboy_vol_2_hardcover_book,
    comic_black_dog_its_time                                                : range_besoboy_book,
    comic_black_dog_its_time_1                                              : range_besoboy,
    comic_black_dog_its_time_2                                              : range_besoboy,
    comic_black_dog_its_time_3                                              : range_besoboy,
    comic_black_dog_its_time_4                                              : range_besoboy,
    comic_black_hand_and_mysterious_package                                 : range_new_bubble_heroes_line_4,
    comic_bubble_halloween                                                  : range_bubble_legends,
    comic_cat_and_mouse_volume_1                                            : range_evgeny_fedotov,
    comic_cat_and_mouse_volume_2                                            : range_evgeny_fedotov,
    comic_cat_and_mouse_volume_3                                            : range_evgeny_fedotov,
    comic_caesar_magnificent                                                : comic_caesar_magnificent_book,
    comic_caesar_magnificent_1                                              : comic_caesar_magnificent,
    comic_caesar_magnificent_2                                              : comic_caesar_magnificent,
    comic_caesar_magnificent_3                                              : comic_caesar_magnificent,
    comic_caesar_magnificent_4                                              : comic_caesar_magnificent,
    comic_caesar_magnificent_5                                              : comic_caesar_magnificent,
    comic_cage_split                                                        : range_new_bubble_heroes_line_4,
    comic_chosen_one_of_the_moon                                            : range_bubble_manga_line_2_book,
    comic_chosen_one_of_the_moon_1                                          : range_bubble_manga_line_2,
    comic_chosen_one_of_the_moon_2                                          : range_bubble_manga_line_2,
    comic_chosen_one_of_the_moon_3                                          : range_bubble_manga_line_2,
    comic_chosen_one_of_the_moon_4                                          : range_bubble_manga_line_2,
    comic_chosen_one_of_the_moon_5                                          : range_bubble_manga_line_2,
    comic_chosen_one_of_the_moon_6                                          : range_bubble_manga_line_2,
    comic_chronicles_of_monk_storm_of_berlin                                : range_monk_book,
    comic_community                                                         : comic_community_book,
    comic_community_1                                                       : comic_community,
    comic_community_2                                                       : comic_community,
    comic_community_3                                                       : comic_community,
    comic_community_4                                                       : comic_community,
    comic_community_plush_and_dangerous_storybook_book                      : comic_community_book,
    comic_community_plush_and_dangerous_storybook_single                    : comic_community,
    comic_crusade                                                           : {y: range_planeswalkers.y + difference.y},
    comic_crusade_1                                                         : range_planeswalkers,
    comic_crusade_2                                                         : range_planeswalkers,
    comic_crusade_3                                                         : range_planeswalkers,
    comic_crusade_4                                                         : range_planeswalkers,
    comic_crusade_epilogue                                                  : range_planeswalkers,
    comic_crusade_prologue                                                  : range_planeswalkers,
    comic_crusade_wolf                                                      : comic_crusade_wolf_book,
    comic_crusade_wolf_1                                                    : comic_crusade_wolf,
    comic_crusade_wolf_2                                                    : comic_crusade_wolf,
    comic_crusade_wolf_3                                                    : comic_crusade_wolf,
    comic_crusade_wolf_4                                                    : comic_crusade_wolf,
    comic_crusade_wolf_5                                                    : comic_crusade_wolf,
    comic_devilry                                                           : {y: range_bubble_legends.y + difference.y},
    comic_devilry_1                                                         : range_bubble_legends,
    comic_devilry_2                                                         : range_bubble_legends,
    comic_devilry_3                                                         : range_bubble_legends,
    comic_devilry_4                                                         : range_bubble_legends,
    comic_dubin_dima_provincial_holidays                                    : range_major_grom_book,
    comic_dubin_dima_provincial_holidays_1                                  : range_major_grom,
    comic_dubin_dima_provincial_holidays_2                                  : range_major_grom,
    comic_dubin_dima_provincial_holidays_3                                  : range_major_grom,
    comic_dubin_dima_provincial_holidays_4                                  : range_major_grom,
    comic_dont_be_reckless_quatrefoil                                       : range_new_bubble_heroes_line_2,
    comic_editor                                                            : range_new_bubble_heroes_line_2,
    comic_exlibrium_blank_sheet_electronic                                  : comic_exlibriums,
    comic_exlibrium_blank_sheet_printed                                     : {y: comic_exlibriums.y + difference.y},
    comic_falcon_1                                                          : range_new_bubble_heroes_line_1,
    comic_falcon_2                                                          : range_new_bubble_heroes_line_1,
    comic_falcon_3                                                          : range_new_bubble_heroes_line_1,
    comic_falcon_4                                                          : range_new_bubble_heroes_line_1,
    comic_falcon_5                                                          : range_new_bubble_heroes_line_1,
    comic_falcon_6                                                          : range_new_bubble_heroes_line_1,
    comic_falcon_7                                                          : range_new_bubble_heroes_line_1,
    comic_falcon_volume_1                                                   : range_new_bubble_heroes_line_1_book,
    comic_falcon_volume_2                                                   : range_new_bubble_heroes_line_1_book,
    comic_fiction_novel_besoboy                                             : comic_fiction_novel,
    comic_fiction_novel_major_grom                                          : comic_fiction_novel,
    comic_fiction_novel_razumovsky                                          : comic_fiction_novel,
    comic_fiction_novel_the_nine_lives_of_agatha_the_first_life_dragons_font: comic_fiction_novel,
    comic_gray_hound_volume_1_chapter_1                                     : range_bubble_manga_line_2,
    comic_igor_grom_15                                                      : comic_witch_hunt,
    comic_igor_grom_book_1                                                  : range_igor_grom_hardcover_book,
    comic_igor_grom_book_2                                                  : range_igor_grom_hardcover_book,
    comic_igor_ugor_volume_1                                                : range_igor_ugor,
    comic_igor_ugor_volume_2                                                : range_igor_ugor,
    comic_jackets_and_revolvers_volume_1                                    : comic_jackets_and_revolvers,
    comic_jackets_and_revolvers_volume_2                                    : comic_jackets_and_revolvers,
    comic_jackets_and_revolvers_volume_3                                    : comic_jackets_and_revolvers,
    comic_jackets_and_revolvers_volume_4                                    : comic_jackets_and_revolvers,
    comic_krutiks_1                                                         : range_childrens_comics,
    comic_krutiks_1_2018                                                    : range_childrens_comics,
    comic_krutiks_2                                                         : range_childrens_comics,
    comic_krutiks_2_2018                                                    : range_childrens_comics,
    comic_krutiks_3                                                         : range_childrens_comics,
    comic_krutiks_3_2018                                                    : range_childrens_comics,
    comic_krutiks_4_2018                                                    : range_childrens_comics,
    comic_krutiks_5_2018                                                    : range_childrens_comics,
    comic_krutiks_6_2018                                                    : range_childrens_comics,
    comic_krutiks_7_2018                                                    : range_childrens_comics,
    comic_krutiks_8_2018                                                    : range_childrens_comics,
    comic_krutiks_9_2018                                                    : range_childrens_comics,
    comic_krutiks_10_2018                                                   : range_childrens_comics,
    comic_krutiks_11_2018                                                   : range_childrens_comics,
    comic_krutiks_12_2018                                                   : range_childrens_comics,
    comic_krutiks_cool_comics_book_1                                        : range_childrens_comics_book,
    comic_krutiks_cool_comics_book_2                                        : range_childrens_comics_book,
    comic_krutiks_cool_comics_book_3                                        : range_childrens_comics_book,
    comic_krutiks_galaxy_legends                                            : range_childrens_comics,
    comic_krutiks_introduction_to_the_academy                               : range_childrens_comics,
    comic_krutiks_new_year_special                                          : range_childrens_comics,
    comic_lady_of_radiance_1                                                : range_bubble_manga_line_2,
    comic_lady_of_radiance_2                                                : range_bubble_manga_line_2,
    comic_lady_of_radiance_3                                                : range_bubble_manga_line_2,
    comic_lady_of_radiance_4                                                : range_bubble_manga_line_2,
    comic_licorice_1                                                        : range_bubble_manga_line_2,
    comic_licorice_2                                                        : range_bubble_manga_line_2,
    comic_licorice_3                                                        : range_bubble_manga_line_2,
    comic_licorice_4                                                        : range_bubble_manga_line_2,
    comic_licorice_5                                                        : range_bubble_manga_line_2,
    comic_licorice_6                                                        : range_bubble_manga_line_2,
    comic_licorice_book_1                                                   : range_bubble_manga_line_2_book,
    comic_licorice_book_2                                                   : range_bubble_manga_line_2_book,
    comic_major_grom_38                                                     : comic_major_grom_and_red_fury,
    comic_major_grom_39                                                     : comic_major_grom_and_red_fury,
    comic_major_grom_40                                                     : comic_major_grom_and_red_fury,
    comic_major_grom_41                                                     : comic_major_grom_and_red_fury,
    comic_major_grom_promise                                                : range_igor_grom,
    comic_master_death_is_just_beginning_electronic                         : range_monk,
    comic_master_death_is_just_beginning_printed                            : range_monk_book,
    comic_memento_mori_call_of_void                                         : range_new_bubble_heroes_line_2,
    comic_monk_15                                                           : comic_monk_vs_besoboy,
    comic_monk_16                                                           : comic_monk_vs_besoboy,
    comic_monk_17                                                           : comic_monk_vs_besoboy,
    comic_monk_and_major_grom_storm_of_berlin                               : range_monk,
    comic_planeswalkers_15                                                  : comic_witch_hunt,
    comic_planeswalkers_book_1                                              : range_planeswalkers_hardcover_book,
    comic_planeswalkers_book_2                                              : range_planeswalkers_hardcover_book,
    comic_plush_policeman_perfect_plan                                      : range_new_bubble_heroes_line_3,
    comic_point_of_no_return                                                : range_point_of_no_return,
    comic_impulse_heros_voice                                               : range_new_bubble_heroes_line_2,
    comic_impulse_premiere                                                  : range_new_bubble_heroes_line_2,
    comic_impulse_volume_1                                                  : range_new_bubble_heroes_line_2_book,
    comic_red_fury_38                                                       : comic_major_grom_and_red_fury,
    comic_red_fury_39                                                       : comic_major_grom_and_red_fury,
    comic_red_fury_40                                                       : comic_major_grom_and_red_fury,
    comic_red_fury_41                                                       : comic_major_grom_and_red_fury,
    comic_russian_folk_tales_in_comics                                      : range_evgeny_yakovlev,
    comic_seven_sons_jaykarn                                                : range_anastasia_kim,
    comic_sister_kukki                                                      : range_new_bubble_heroes_line_2_book,
    comic_sister_kukki_1                                                    : range_new_bubble_heroes_line_2,
    comic_soyuzmultcomics                                                   : range_childrens_comics,
    comic_tagar_volume_1                                                    : range_bubble_manga_line_1_book,
    comic_tagar_volume_1_prologue                                           : range_bubble_manga_line_1,
    comic_tagar_volume_1_chapter_1                                          : range_bubble_manga_line_1,
    comic_tagar_volume_1_chapter_2                                          : range_bubble_manga_line_1,
    comic_tagar_volume_1_chapter_3                                          : range_bubble_manga_line_1,
    comic_tagar_volume_1_chapter_4                                          : range_bubble_manga_line_1,
    comic_tagar_volume_2                                                    : range_bubble_manga_line_1_book,
    comic_tagar_volume_2_chapter_1                                          : range_bubble_manga_line_1,
    comic_tagar_volume_2_chapter_2                                          : range_bubble_manga_line_1,
    comic_tagar_volume_2_chapter_3                                          : range_bubble_manga_line_1,
    comic_tagar_volume_2_chapter_4                                          : range_bubble_manga_line_1,
    comic_tagar_volume_2_chapter_5                                          : range_bubble_manga_line_1,
    comic_tagar_volume_3                                                    : range_bubble_manga_line_1_book,
    comic_tagar_volume_3_chapter_1                                          : range_bubble_manga_line_1,
    comic_tagar_volume_3_chapter_2                                          : range_bubble_manga_line_1,
    comic_tagar_volume_3_chapter_3                                          : range_bubble_manga_line_1,
    comic_tagar_volume_3_chapter_4                                          : range_bubble_manga_line_1,
    comic_tagar_volume_3_chapter_5                                          : range_bubble_manga_line_1,
    comic_tagar_volume_3_chapter_6                                          : range_bubble_manga_line_1,
    comic_tagar_volume_3_chapter_7                                          : range_bubble_manga_line_1,
    comic_tagar_volume_4                                                    : range_bubble_manga_line_1_book,
    comic_tagar_volume_4_chapter_1                                          : range_bubble_manga_line_1,
    comic_tagar_volume_4_chapter_2                                          : range_bubble_manga_line_1,
    comic_tagar_volume_4_chapter_3                                          : range_bubble_manga_line_1,
    comic_tagar_volume_4_chapter_4                                          : range_bubble_manga_line_1,
    comic_tagar_volume_4_chapter_5                                          : range_bubble_manga_line_1,
    comic_tagar_volume_4_chapter_6                                          : range_bubble_manga_line_1,
    comic_teo_crop_circles                                                  : range_meteora_book,
    comic_teo_crop_circles_1                                                : range_meteora,
    comic_teo_crop_circles_2                                                : range_meteora,
    comic_teo_crop_circles_3                                                : range_meteora,
    comic_teo_crop_circles_4                                                : range_meteora,
    comic_the_ink_prince_and_the_book_knight                                : range_bubble_manga_line_3_book,
    comic_the_ink_prince_and_the_book_knight_1                              : range_bubble_manga_line_3,
    comic_the_ink_prince_and_the_book_knight_2                              : range_bubble_manga_line_3,
    comic_the_ink_prince_and_the_book_knight_3                              : range_bubble_manga_line_3,
    comic_the_ink_prince_and_the_book_knight_4                              : range_bubble_manga_line_3,
    comic_unicorn_conspiracy_volume_1                                       : comic_unicorn_conspiracy,
    comic_unicorn_conspiracy_volume_2                                       : comic_unicorn_conspiracy,
    comic_vera_wolf                                                         : range_bubble_legends,
    comic_witch_hunt                                                        : {y: comic_witch_hunt.y + difference.y},
    comic_witch_hunt_finale                                                 : comic_witch_hunt,
    comic_witch_hunt_prologue                                               : comic_witch_hunt,
    comic_yarkh_step_forward                                                : range_besoboy_book,
    comic_yarkh_step_forward_1                                              : range_besoboy,
    comic_yarkh_step_forward_2                                              : range_besoboy,
    comic_yarkh_step_forward_3                                              : range_besoboy,
    comic_yarkh_step_forward_4                                              : range_besoboy,
    comic_yarkh_step_forward_5                                              : range_besoboy,
    comic_yarkh_step_forward_6                                              : range_besoboy,
    comic_ziggy_and_shmyg_destroy_bubble_universe                           : range_ziggy_and_shmyg,
    comic_ziggy_and_shmyg_save_comiccon                                     : range_ziggy_and_shmyg,
    comic_ziggy_space_hamster                                               : range_childrens_comics_book,
    comic_ziggy_space_hamster_1                                             : range_childrens_comics,
    comic_ziggy_space_hamster_2                                             : range_childrens_comics,
    comic_ziggy_space_hamster_3                                             : range_childrens_comics,
    comic_ziggy_space_hamster_4                                             : range_childrens_comics,
    comic_ziggy_space_hamster_5                                             : range_childrens_comics,
    difference,
    range_allies,
    range_besoboy,
    range_besoboy_vol_2,
    range_bubble_school,
    range_bubble_triptych,
    range_exlibrium,
    range_exlibrium_second_life,
    range_friends_comics,
    range_gam,
    range_igor_grom,
    range_major_grom,
    range_major_igor_grom,
    range_meteora,
    range_mir,
    range_monk,
    range_monk_king_of_parties,
    range_plague_doctor,
    range_planeswalkers,
    range_red_fury,
    range_thief_of_shadows,
    range_time_of_raven,
    range_turbocarp,
    range_witch
};