import {colorMixingHex} from "./functions/color_functions";

const range_allies = "#ca000b";
const range_besoboy_vol_2 = "#0044bc";
const range_igor_grom = "#ff992a";
const range_igor_ugor = "#ff3366";
const range_planeswalkers = "#f7dd9f";
const range_ziggy_and_shmyg = "#cc00ff";
const comic_witch_hunt = colorMixingHex([range_allies, range_besoboy_vol_2, range_igor_grom, range_planeswalkers]);
const colors = {
    author_alena_spiridonova                     : "#f7dd9f",
    author_alex_hatchett                         : "#7f12ca",
    author_anastasia_kim                         : "#ff992a",
    author_evgeny_fedotov                        : "#00cc99",
    author_evgeny_yakovlev                       : "#00f0ff",
    author_marina_privalova                      : "#005bb1",
    author_maxim_ananyin                         : "#770202",
    author_yulia_zhuravleva                      : "#ffff33",
    comic_crusade_1                              : range_planeswalkers,
    comic_crusade_prologue                       : range_planeswalkers,
    comic_crusade_wolf_1                         : range_planeswalkers,
    comic_igor_ugor_volume_1                     : range_igor_ugor, // TODO: Добавить остальные комиксы
    comic_point_of_no_return                     : "#ccff99",
    comic_witch_hunt,
    comic_witch_hunt_finale                      : comic_witch_hunt,
    comic_witch_hunt_prologue                    : comic_witch_hunt,
    comic_ziggy_and_shmyg_destroy_bubble_universe: range_ziggy_and_shmyg,
    comic_ziggy_and_shmyg_save_comiccon          : range_ziggy_and_shmyg,
    range_allies,
    range_besoboy                                : "#333399",
    range_besoboy_vol_2,
    range_bubble_legends                         : "#7f12ca",
    range_bubble_manga                           : "#ccff99",
    range_bubble_school                          : "#89ff6c",
    range_bubble_triptych                        : "#ca000b",
    range_childrens_comics                       : "#ff3366",
    range_exlibrium                              : "#89ff6c",
    range_exlibrium_second_life                  : "#33cc66",
    range_friends_comics                         : "#005bb1",
    range_igor_grom,
    range_major_grom                             : "#ff5e00",
    range_major_igor_grom                        : "#ffff33",
    range_meteora                                : "#00f0ff",
    range_mir                                    : "#ca000b",
    range_monk                                   : "#ffff33",
    range_monk_king_of_parties                   : "#ffff33",
    range_new_bubble_heroes                      : "#0044bc",
    range_plague_doctor                          : "#ff5e00",
    range_planeswalkers,
    range_red_fury                               : "#770202",
    range_thief_of_shadows                       : "#ffff33",
    range_time_of_raven                          : "#808080", // "#ffffff"
    range_turbocarp                              : "#00f0ff",
    range_witch                                  : "#ff5e00"
};

export default colors;