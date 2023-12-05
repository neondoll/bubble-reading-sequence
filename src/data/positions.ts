import {comicIdToNodeId} from "./functions/helper_functions";
import {maxOfArray} from "./functions/array_functions";
import comics from "./comics";

const difference = {x: 140, y: 110};

const allies = {y: difference.y * 14};
const anastasia_kim = {y: difference.y * 52};
const besoboy = {y: difference.y};
const besoboy_vol_2 = {y: difference.y * 3};
const bubble_legends = {y: difference.y * 61};
const bubble_school = {y: difference.y * 71};
const bubble_triptych = {y: difference.y * 69};
const childrens_comics = {y: difference.y * 33};
const evgeny_fedotov = {y: difference.y * 35};
const evgeny_yakovlev = {y: difference.y * 51};
const exlibrium = {y: difference.y * 27};
const exlibrium_second_life = {y: difference.y * 29};
const friends_comics = {y: difference.y * 41};
const gam = {y: difference.y * 70};
const igor_grom = {y: difference.y * 19};
const igor_ugor = {y: difference.y * 40};
const madibek_musabekov = {y: difference.y * 66};
const major_grom = {y: difference.y * 17};
const major_igor_grom = {y: difference.y * 21};
const meteora = {y: difference.y * 31};
const mir = {y: difference.y * 25};
const monk = {y: difference.y * 6};
const monk_king_of_parties = {y: difference.y * 38};
const planeswalkers = {y: difference.y * 8};
const plague_doctor = {y: difference.y * 23};
const point_of_no_return = {y: difference.y * 39};
const red_fury = {y: difference.y * 12};
const thief_of_shadows = {y: difference.y * 53};
const time_of_raven = {y: (besoboy.y + monk.y + major_grom.y + red_fury.y) / 4};
const turbocarp = {y: difference.y * 65};
const witch = {y: difference.y * 67};
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
const fiction_novel = {y: difference.y * 72};
const igor_grom_hardcover_book = {y: igor_grom.y + difference.y * 2};
const major_grom_and_red_fury = {y: (major_grom.y + red_fury.y) / 2};
const meteora_book = {y: meteora.y + difference.y};
const monk_vs_besoboy = {y: (besoboy.y + monk.y) / 2};
const new_bubble_heroes_line_1 = {y: difference.y * 55};
const new_bubble_heroes_line_1_book = {y: new_bubble_heroes_line_1.y + difference.y};
const new_bubble_heroes_line_2 = {y: difference.y * 57};
const new_bubble_heroes_line_2_book = {y: new_bubble_heroes_line_2.y + difference.y};
const new_bubble_heroes_line_3 = {y: difference.y * 59};
const new_bubble_heroes_line_4 = {y: difference.y * 60};
const planeswalkers_hardcover_book = {y: planeswalkers.y + difference.y * 2};
const unicorn_conspiracy = {y: difference.y * 43};
const witch_hunt = {y: (allies.y + besoboy_vol_2.y + igor_grom.y + planeswalkers.y) / 4};

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
    comic_adventures_of_kochi_and_friends                                   : childrens_comics,
    comic_allies_15                                                         : witch_hunt,
    comic_allies_book_1                                                     : allies_hardcover_book,
    comic_allies_book_2                                                     : allies_hardcover_book,
    comic_anna_input                                                        : new_bubble_heroes_line_3,
    comic_anna_space_of_options                                             : new_bubble_heroes_line_3,
    comic_balor_and_yana_dream_catcher_book                                 : besoboy_book,
    comic_balor_and_yana_dream_catcher_single                               : besoboy,
    comic_besoboy_15                                                        : monk_vs_besoboy,
    comic_besoboy_16                                                        : monk_vs_besoboy,
    comic_besoboy_17                                                        : monk_vs_besoboy,
    comic_besoboy_and_planeswalkers_book                                    : besoboy_and_planeswalkers_book,
    comic_besoboy_and_planeswalkers_single                                  : besoboy_and_planeswalkers,
    comic_besoboy_vol_2_15                                                  : witch_hunt,
    comic_besoboy_vol_2_book_1                                              : besoboy_vol_2_hardcover_book,
    comic_besoboy_vol_2_book_2                                              : besoboy_vol_2_hardcover_book,
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
    comic_chosen_one_of_the_moon_6                                          : bubble_manga_line_2,
    comic_chronicles_of_monk_storm_of_berlin                                : {y: monk.y + difference.y},
    comic_community                                                         : community_book,
    comic_community_1                                                       : community,
    comic_community_2                                                       : community,
    comic_community_3                                                       : community,
    comic_community_4                                                       : community,
    comic_community_plush_and_dangerous_storybook_book                      : community_book,
    comic_community_plush_and_dangerous_storybook_single                    : community,
    comic_crusade_wolf                                                      : crusade_wolf_book,
    comic_crusade_wolf_1                                                    : crusade_wolf,
    comic_crusade_wolf_2                                                    : crusade_wolf,
    comic_crusade_wolf_3                                                    : crusade_wolf,
    comic_crusade_wolf_4                                                    : crusade_wolf,
    comic_crusade_wolf_5                                                    : crusade_wolf,
    comic_devilry                                                           : bubble_legends_book,
    comic_devilry_1                                                         : bubble_legends,
    comic_devilry_2                                                         : bubble_legends,
    comic_devilry_3                                                         : bubble_legends,
    comic_devilry_4                                                         : bubble_legends,
    comic_dont_be_reckless_quatrefoil                                       : new_bubble_heroes_line_2,
    comic_editor                                                            : new_bubble_heroes_line_2,
    comic_falcon_1                                                          : new_bubble_heroes_line_1,
    comic_falcon_2                                                          : new_bubble_heroes_line_1,
    comic_falcon_3                                                          : new_bubble_heroes_line_1,
    comic_falcon_4                                                          : new_bubble_heroes_line_1,
    comic_falcon_5                                                          : new_bubble_heroes_line_1,
    comic_falcon_6                                                          : new_bubble_heroes_line_1,
    comic_falcon_7                                                          : new_bubble_heroes_line_1,
    comic_falcon_volume_1                                                   : new_bubble_heroes_line_1_book,
    comic_falcon_volume_2                                                   : new_bubble_heroes_line_1_book,
    comic_fiction_novel_besoboy                                             : fiction_novel,
    comic_fiction_novel_major_grom                                          : fiction_novel,
    comic_fiction_novel_razumovsky                                          : fiction_novel,
    comic_fiction_novel_the_nine_lives_of_agatha_the_first_life_dragons_font: fiction_novel,
    comic_gray_hound_volume_1_chapter_1                                     : bubble_manga_line_2,
    comic_igor_grom_15                                                      : witch_hunt,
    comic_igor_grom_book_1                                                  : igor_grom_hardcover_book,
    comic_igor_grom_book_2                                                  : igor_grom_hardcover_book,
    comic_krutiks_1                                                         : childrens_comics,
    comic_krutiks_1_2018                                                    : childrens_comics,
    comic_krutiks_2                                                         : childrens_comics,
    comic_krutiks_2_2018                                                    : childrens_comics,
    comic_krutiks_3                                                         : childrens_comics,
    comic_krutiks_3_2018                                                    : childrens_comics,
    comic_krutiks_4_2018                                                    : childrens_comics,
    comic_krutiks_5_2018                                                    : childrens_comics,
    comic_krutiks_6_2018                                                    : childrens_comics,
    comic_krutiks_7_2018                                                    : childrens_comics,
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
    comic_krutiks_new_years_special                                         : childrens_comics,
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
    comic_major_grom_38                                                     : major_grom_and_red_fury,
    comic_major_grom_39                                                     : major_grom_and_red_fury,
    comic_major_grom_40                                                     : major_grom_and_red_fury,
    comic_major_grom_41                                                     : major_grom_and_red_fury,
    comic_major_grom_promise                                                : igor_grom,
    comic_memento_mori_call_of_the_void                                     : new_bubble_heroes_line_2,
    comic_monk_15                                                           : monk_vs_besoboy,
    comic_monk_16                                                           : monk_vs_besoboy,
    comic_monk_17                                                           : monk_vs_besoboy,
    comic_monk_and_major_grom_storm_of_berlin                               : monk,
    comic_planeswalkers_15                                                  : witch_hunt,
    comic_planeswalkers_book_1                                              : planeswalkers_hardcover_book,
    comic_planeswalkers_book_2                                              : planeswalkers_hardcover_book,
    comic_plush_policeman_the_perfect_plan                                  : new_bubble_heroes_line_3,
    comic_pulse_heros_voice                                                 : new_bubble_heroes_line_2,
    comic_pulse_premiere                                                    : new_bubble_heroes_line_2,
    comic_pulse_volume_1                                                    : new_bubble_heroes_line_2_book,
    comic_red_fury_38                                                       : major_grom_and_red_fury,
    comic_red_fury_39                                                       : major_grom_and_red_fury,
    comic_red_fury_40                                                       : major_grom_and_red_fury,
    comic_red_fury_41                                                       : major_grom_and_red_fury,
    comic_sister_kukki                                                      : new_bubble_heroes_line_2_book,
    comic_sister_kukki_1                                                    : new_bubble_heroes_line_2,
    comic_soyuzmultcomics                                                   : childrens_comics,
    comic_tagar_volume_1                                                    : bubble_manga_line_1_book,
    comic_tagar_volume_1_prologue                                           : bubble_manga_line_1,
    comic_tagar_volume_1_chapter_1                                          : bubble_manga_line_1,
    comic_tagar_volume_1_chapter_2                                          : bubble_manga_line_1,
    comic_tagar_volume_1_chapter_3                                          : bubble_manga_line_1,
    comic_tagar_volume_1_chapter_4                                          : bubble_manga_line_1,
    comic_tagar_volume_2                                                    : bubble_manga_line_1_book,
    comic_tagar_volume_2_chapter_1                                          : bubble_manga_line_1,
    comic_tagar_volume_2_chapter_2                                          : bubble_manga_line_1,
    comic_tagar_volume_2_chapter_3                                          : bubble_manga_line_1,
    comic_tagar_volume_2_chapter_4                                          : bubble_manga_line_1,
    comic_tagar_volume_2_chapter_5                                          : bubble_manga_line_1,
    comic_tagar_volume_3                                                    : bubble_manga_line_1_book,
    comic_tagar_volume_3_chapter_1                                          : bubble_manga_line_1,
    comic_tagar_volume_3_chapter_2                                          : bubble_manga_line_1,
    comic_tagar_volume_3_chapter_3                                          : bubble_manga_line_1,
    comic_tagar_volume_3_chapter_4                                          : bubble_manga_line_1,
    comic_tagar_volume_3_chapter_5                                          : bubble_manga_line_1,
    comic_tagar_volume_3_chapter_6                                          : bubble_manga_line_1,
    comic_tagar_volume_3_chapter_7                                          : bubble_manga_line_1,
    comic_tagar_volume_4                                                    : bubble_manga_line_1_book,
    comic_tagar_volume_4_chapter_1                                          : bubble_manga_line_1,
    comic_tagar_volume_4_chapter_2                                          : bubble_manga_line_1,
    comic_tagar_volume_4_chapter_3                                          : bubble_manga_line_1,
    comic_tagar_volume_4_chapter_4                                          : bubble_manga_line_1,
    comic_tagar_volume_4_chapter_5                                          : bubble_manga_line_1,
    comic_tagar_volume_4_chapter_6                                          : bubble_manga_line_1,
    comic_teo                                                               : meteora_book,
    comic_teo_1                                                             : meteora,
    comic_teo_2                                                             : meteora,
    comic_teo_3                                                             : meteora,
    comic_teo_4                                                             : meteora,
    comic_the_ink_prince_and_the_book_knight                                : bubble_manga_line_3_book,
    comic_the_ink_prince_and_the_book_knight_1                              : bubble_manga_line_3,
    comic_the_ink_prince_and_the_book_knight_2                              : bubble_manga_line_3,
    comic_the_ink_prince_and_the_book_knight_3                              : bubble_manga_line_3,
    comic_the_ink_prince_and_the_book_knight_4                              : bubble_manga_line_3,
    comic_unicorn_conspiracy_volume_1                                       : unicorn_conspiracy,
    comic_unicorn_conspiracy_volume_2                                       : unicorn_conspiracy,
    comic_vera_wolf                                                         : bubble_legends,
    comic_yarkh_step_forward                                                : besoboy_book,
    comic_yarkh_step_forward_1                                              : besoboy,
    comic_yarkh_step_forward_2                                              : besoboy,
    comic_yarkh_step_forward_3                                              : besoboy,
    comic_yarkh_step_forward_4                                              : besoboy,
    comic_yarkh_step_forward_5                                              : besoboy,
    comic_yarkh_step_forward_6                                              : besoboy,
    comic_ziggy_space_hamster                                               : childrens_comics_book,
    comic_ziggy_space_hamster_1                                             : childrens_comics,
    comic_ziggy_space_hamster_2                                             : childrens_comics,
    comic_ziggy_space_hamster_3                                             : childrens_comics,
    comic_ziggy_space_hamster_4                                             : childrens_comics,
    comic_ziggy_space_hamster_5                                             : childrens_comics,
    difference,
    range_allies                                                            : allies,
    range_anastasia_kim                                                     : anastasia_kim,
    range_besoboy                                                           : besoboy,
    range_besoboy_vol_2                                                     : besoboy_vol_2,
    range_bubble_school                                                     : bubble_school,
    range_bubble_triptych                                                   : bubble_triptych,
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
    range_monk                                                              : monk,
    range_monk_king_of_parties                                              : monk_king_of_parties,
    range_plague_doctor                                                     : plague_doctor,
    range_planeswalkers                                                     : planeswalkers,
    range_point_of_no_return                                                : point_of_no_return,
    range_red_fury                                                          : red_fury,
    range_thief_of_shadows                                                  : thief_of_shadows,
    range_time_of_raven                                                     : time_of_raven,
    range_turbocarp                                                         : turbocarp,
    range_witch                                                             : witch,
    range_mir                                                               : mir,
    range_yulia_zhuravleva                                                  : yulia_zhuravleva,
    range_ziggy_and_shmyg                                                   : ziggy_and_shmyg
};