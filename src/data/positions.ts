import {comicIdToNodeId} from "./functions/helper_functions";
import {maxOfArray, minOfArray} from "./functions/array_functions";
import * as vNG from "v-network-graph";
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
const range_bubble_gam = {y: difference.y * 70};
const range_igor_ugor = {y: difference.y * 40};
const range_madibek_musabekov = {y: difference.y * 66};
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
const range_point_of_no_return = {y: difference.y * 39};
const range_red_fury = {y: difference.y * 12};
const range_thief_of_shadows = {y: difference.y * 53};
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
const comic_monk_vs_besoboy = {y: (range_besoboy.y + range_monk.y) / 2};
const comic_unicorn_conspiracy = {y: difference.y * 43};

const comicIgorGromSingle = {y: difference.y * 3}/*{y: difference.y * 19}*/;
const comicMajorGromSingle = {y: difference.y}/*{y: difference.y * 17}*/;
const comicMajorIgorGromSingle = {y: difference.y * 5}/*{y: difference.y * 21}*/;
const comicPlagueDoctorSingle = {y: difference.y * 7}/*{y: difference.y * 23}*/;

const comicMajorGromAndRedFury = {y: (comicMajorGromSingle.y + range_red_fury.y) / 2};
const comicRiversThereIsNoFearSingle = {y: comicIgorGromSingle.y + difference.y / 2};
const comicTimeOfRavenSingle = {y: (range_besoboy.y + range_monk.y + comicMajorGromSingle.y + range_red_fury.y) / 4};
const comicWitchHuntSingle = {y: (range_allies.y + range_besoboy_vol_2.y + comicIgorGromSingle.y + range_planeswalkers.y) / 4};

const comicIgorGromBook = {y: comicIgorGromSingle.y + difference.y};
const comicIgorGromHardcoverBook = {y: comicIgorGromSingle.y + difference.y * 2};
const comicMajorGromBook = {y: comicMajorGromSingle.y + difference.y};
const comicMajorIgorGromBook = {y: comicMajorIgorGromSingle.y + difference.y};
const comicPlagueDoctorBook = {y: comicPlagueDoctorSingle.y + difference.y};

const comicCaligariDatura = {
    y_func: (layoutsNodes: vNG.NodePositions, comicId: string) => {
        const previousAndNextComicsY: number[] = [
            comicIgorGromBook.y, comicIgorGromSingle.y,
            comicSpecialProkopenkoGromAtSunrise.y_func(layoutsNodes, comicId)
        ];

        return (minOfArray(previousAndNextComicsY) + maxOfArray(previousAndNextComicsY)) / 2;
    }
};
const comicMajorGromLikeInWarBook = {
    y_func: (layoutsNodes, comicId) => {
        const previousAndNextComicsY = [comicCaligariDatura.y_func(layoutsNodes, comicId), comicMajorGromBook.y];

        return (minOfArray(previousAndNextComicsY) + maxOfArray(previousAndNextComicsY)) / 2;
    }
};
const comicMajorGromLikeInWarSingle = comicMajorGromSingle;
const comicMajorIgorGromXPlagueDoctorSingle = {
    y_func: (layoutsNodes: vNG.NodePositions, comicId: string) => {
        const previousAndNextComicsY: number[] = [comicMajorIgorGromSingle.y, comicPlagueDoctorSingle.y];

        return (minOfArray(previousAndNextComicsY) + maxOfArray(previousAndNextComicsY)) / 2;
    }
};
const comicSpecialProkopenkoGromAtSunrise = {
    y_func: (layoutsNodes: vNG.NodePositions, comicId: string) => {
        const previousAndNextComicsY: number[] = [comicMajorIgorGromBook.y, comicMajorIgorGromSingle.y];

        return (minOfArray(previousAndNextComicsY) + maxOfArray(previousAndNextComicsY)) / 2;
    }
};
const comicWinterSpecialPlagueDoctor = {
    y_func: (layoutsNodes: vNG.NodePositions, comicId: string) => {
        const previousAndNextComicsY: number[] = [comicPlagueDoctorBook.y, comicPlagueDoctorSingle.y];

        return (minOfArray(previousAndNextComicsY) + maxOfArray(previousAndNextComicsY)) / 2;
    }
};
const comicPlagueDoctorSpecialAltan = comicWinterSpecialPlagueDoctor;

const containedComicsXFunc = (layoutsNodes: vNG.NodePositions, comicId: string) => {
    const containedComicsX: number[] = comics[comicId].containedComics
        .map((containedComicId) => comicIdToNodeId(containedComicId))
        .filter((containedNodeId) => containedNodeId in layoutsNodes) // TODO: Потом удалить
        .map((containedNodeId) => layoutsNodes[containedNodeId].x);

    return (minOfArray(containedComicsX) + maxOfArray(containedComicsX)) / 2;
};

const positions = {
    comic_caligari_datura                         : comicCaligariDatura,
    comic_heroes_and_monsters                     : {
        y_func: (layoutsNodes: vNG.NodePositions, comicId: string) => {
            const previousAndNextComicsY: number[] = [
                comicMajorIgorGromSingle.y, comicPlagueDoctorBook.y, comicPlagueDoctorSingle.y
            ];

            return (minOfArray(previousAndNextComicsY) + maxOfArray(previousAndNextComicsY)) / 2;
        }
    },
    comic_major_grom_1939                         : {
        y_func: (layoutsNodes: vNG.NodePositions, comicId: string) => {
            const previousAndNextComicsY: number[] = [comicMajorGromBook.y, comicMajorGromSingle.y];

            return (minOfArray(previousAndNextComicsY) + maxOfArray(previousAndNextComicsY)) / 2;
        }
    },
    comic_major_grom_like_in_war                  : {
        x_func: containedComicsXFunc,
        y_func: comicMajorGromLikeInWarBook.y_func
    },
    comic_major_grom_stories                      : {
        y_func: (layoutsNodes: vNG.NodePositions, comicId: string) => {
            const previousAndNextComicsY: number[] = [
                comicIgorGromBook.y, comicMajorGromBook.y, comicMajorIgorGromBook.y
            ];

            return (minOfArray(previousAndNextComicsY) + maxOfArray(previousAndNextComicsY)) / 2;
        }
    },
    comic_major_igor_grom_x_plague_doctor_volume_4: {
        x_func: containedComicsXFunc,
        y_func: (layoutsNodes: vNG.NodePositions, comicId: string) => {
            const previousAndNextComicsY: number[] = [comicMajorIgorGromBook.y, comicPlagueDoctorBook.y];

            return (minOfArray(previousAndNextComicsY) + maxOfArray(previousAndNextComicsY)) / 2;
        }
    },
    comic_monk_and_major_grom_storm_of_berlin     : {
        y_func: (layoutsNodes: vNG.NodePositions, comicId: string) => {
            const previousAndNextComicsY: number[] = [
                comicMajorGromLikeInWarBook.y_func(layoutsNodes, comicId), comicMajorGromLikeInWarSingle.y
            ];

            return (minOfArray(previousAndNextComicsY) + maxOfArray(previousAndNextComicsY)) / 2;
        }
    },
    comic_plague_doctor_special_altan             : comicPlagueDoctorSpecialAltan,
    comic_rivers_there_is_no_fear                 : {
        x_func: containedComicsXFunc,
        y     : comicRiversThereIsNoFearSingle.y + difference.y
    },
    comic_rubinstein_what_i_was_looking_for       : {y: comicIgorGromSingle.y - difference.y / 2},
    comic_special_prokopenko_grom_at_sunrise      : comicSpecialProkopenkoGromAtSunrise,
    comic_special_volkov_inferno                  : {
        y_func: (layoutsNodes: vNG.NodePositions, comicId: string) => {
            const previousAndNextComicsY: number[] = [
                comicMajorGromBook.y, comicMajorGromSingle.y,
                comicPlagueDoctorSpecialAltan.y_func(layoutsNodes, comicId)
            ];

            return (minOfArray(previousAndNextComicsY) + maxOfArray(previousAndNextComicsY)) / 2;
        }
    },
    comic_time_of_raven_epilogue                  : {
        y_func: (layoutsNodes: vNG.NodePositions, comicId: string) => {
            const previousAndNextComicsY: number[] = [comicMajorGromBook.y, comicMajorGromSingle.y];

            return (minOfArray(previousAndNextComicsY) + maxOfArray(previousAndNextComicsY)) / 2;
        }
    },
    comic_time_of_raven_backstory                 : {
        y_func: (layoutsNodes: vNG.NodePositions, comicId: string) => {
            const previousAndNextComicsY: number[] = [comicMajorGromBook.y, comicMajorGromSingle.y];

            return (minOfArray(previousAndNextComicsY) + maxOfArray(previousAndNextComicsY)) / 2;
        }
    },
    comic_winter_special_plague_doctor            : comicWinterSpecialPlagueDoctor,
    difference
};

[
    "comic_dubin_dima_provincial_holidays", "comic_igor_grom_volume_1", "comic_igor_grom_volume_2",
    "comic_igor_grom_volume_3", "comic_igor_grom_volume_4", "comic_igor_grom_volume_5", "comic_igor_grom_volume_6",
    "comic_igor_grom_volume_7", "comic_igor_grom_volume_8", "comic_igor_grom_volume_9", "comic_igor_grom_volume_10",
    "comic_witch_hunt"
].forEach((key) => {
    positions[key] = {...comicIgorGromBook};

    if (comics[key].containedComics && comics[key].containedComics.length) {
        positions[key].x_func = containedComicsXFunc;
    }
});

[
    "comic_dubin_dima_provincial_holidays_1", "comic_dubin_dima_provincial_holidays_2",
    "comic_dubin_dima_provincial_holidays_3", "comic_dubin_dima_provincial_holidays_4", "comic_igor_grom_1",
    "comic_igor_grom_2", "comic_igor_grom_3", "comic_igor_grom_4", "comic_igor_grom_5", "comic_igor_grom_6",
    "comic_igor_grom_7", "comic_igor_grom_8", "comic_igor_grom_9", "comic_igor_grom_10", "comic_igor_grom_11",
    "comic_igor_grom_12", "comic_igor_grom_13", "comic_igor_grom_14", "comic_igor_grom_15", "comic_igor_grom_16",
    "comic_igor_grom_17", "comic_igor_grom_18", "comic_igor_grom_19", "comic_igor_grom_20", "comic_igor_grom_21",
    "comic_igor_grom_22", "comic_igor_grom_23", "comic_igor_grom_24", "comic_igor_grom_25", "comic_igor_grom_26",
    "comic_igor_grom_27", "comic_igor_grom_28", "comic_igor_grom_29", "comic_igor_grom_30", "comic_igor_grom_31",
    "comic_igor_grom_32", "comic_igor_grom_33", "comic_igor_grom_34", "comic_igor_grom_35", "comic_igor_grom_36",
    "comic_igor_grom_37", "comic_igor_grom_38", "comic_igor_grom_39", "comic_igor_grom_40", "comic_igor_grom_41",
    "comic_igor_grom_42", "comic_igor_grom_43", "comic_igor_grom_44", "comic_igor_grom_45", "comic_igor_grom_46",
    "comic_igor_grom_47", "comic_igor_grom_48", "comic_igor_grom_49", "comic_igor_grom_50", "comic_major_grom_promise",
    "comic_witch_hunt_finale", "comic_witch_hunt_prologue"
].forEach((key) => (positions[key] = comicIgorGromSingle));

[
    "comic_major_grom_and_red_fury_volume_7", "comic_major_grom_volume_1", "comic_major_grom_volume_2",
    "comic_major_grom_volume_3", "comic_major_grom_volume_4", "comic_major_grom_volume_5", "comic_major_grom_volume_6",
    "comic_major_grom_volume_8", "comic_time_of_raven"
].forEach((key) => {
    positions[key] = {...comicMajorGromBook};

    if (comics[key].containedComics && comics[key].containedComics.length) {
        switch (key) {
            case "comic_major_grom_and_red_fury_volume_7":
                positions[key].x_func = (layoutsNodes: vNG.NodePositions, comicId: string) => {
                    const containedComicsX: number[] = [
                        "comic_time_of_raven_prologue", "comic_time_of_raven_1", "comic_major_grom_38",
                        "comic_time_of_raven_2", "comic_major_grom_39", "comic_time_of_raven_3", "comic_major_grom_40",
                        "comic_time_of_raven_4", "comic_major_grom_41", "comic_time_of_raven_5"
                    ]
                        .map((containedComicId) => comicIdToNodeId(containedComicId))
                        .map((containedNodeId) => layoutsNodes[containedNodeId].x);

                    return (minOfArray(containedComicsX) + maxOfArray(containedComicsX) - difference.x) / 2;
                };
                break;
            case "comic_time_of_raven":
                positions[key].x_func = (layoutsNodes: vNG.NodePositions, comicId: string) => {
                    const containedComicsX: number[] = [
                        "comic_time_of_raven_prologue", "comic_time_of_raven_1", "comic_major_grom_38",
                        "comic_time_of_raven_2", "comic_major_grom_39", "comic_time_of_raven_3", "comic_major_grom_40",
                        "comic_time_of_raven_4", "comic_major_grom_41", "comic_time_of_raven_5"
                    ]
                        .map((containedComicId) => comicIdToNodeId(containedComicId))
                        .map((containedNodeId) => layoutsNodes[containedNodeId].x);

                    return (minOfArray(containedComicsX) + maxOfArray(containedComicsX) + difference.x) / 2;
                };
                break;
            default:
                positions[key].x_func = containedComicsXFunc;
                break;
        }
    }
});

[
    "comic_major_grom_1", "comic_major_grom_2", "comic_major_grom_3", "comic_major_grom_4", "comic_major_grom_5",
    "comic_major_grom_6", "comic_major_grom_7", "comic_major_grom_8", "comic_major_grom_9", "comic_major_grom_10",
    "comic_major_grom_11", "comic_major_grom_12", "comic_major_grom_13", "comic_major_grom_14", "comic_major_grom_15",
    "comic_major_grom_16", "comic_major_grom_17", "comic_major_grom_18", "comic_major_grom_19", "comic_major_grom_20",
    "comic_major_grom_21", "comic_major_grom_22", "comic_major_grom_23", "comic_major_grom_24", "comic_major_grom_25",
    "comic_major_grom_26", "comic_major_grom_27", "comic_major_grom_28", "comic_major_grom_29", "comic_major_grom_30",
    "comic_major_grom_31", "comic_major_grom_32", "comic_major_grom_33", "comic_major_grom_34", "comic_major_grom_35",
    "comic_major_grom_36", "comic_major_grom_37", "comic_time_of_raven_prologue", "comic_time_of_raven_1",
    "comic_major_grom_38", "comic_time_of_raven_2", "comic_major_grom_39", "comic_time_of_raven_3",
    "comic_major_grom_40", "comic_time_of_raven_4", "comic_major_grom_41", "comic_time_of_raven_5",
    "comic_major_grom_42", "comic_major_grom_43", "comic_major_grom_44", "comic_major_grom_45", "comic_major_grom_46",
    "comic_major_grom_47", "comic_major_grom_48", "comic_major_grom_49", "comic_major_grom_50"
].forEach((key) => (positions[key] = comicMajorGromSingle));

[
    "comic_major_grom_like_in_war_1", "comic_major_grom_like_in_war_2", "comic_major_grom_like_in_war_3",
    "comic_major_grom_like_in_war_4"
].forEach((key) => (positions[key] = comicMajorGromLikeInWarSingle));

[
    "comic_major_igor_grom_villainy_rule", "comic_major_igor_grom_volume_1", "comic_major_igor_grom_volume_2",
    "comic_major_igor_grom_volume_3", "comic_major_igor_grom_volume_4", "comic_major_igor_grom_volume_5",
    "comic_major_igor_grom_volume_6"
].forEach((key) => {
    positions[key] = {...comicMajorIgorGromBook};

    if (key !== "comic_major_igor_grom_villainy_rule" && comics[key].containedComics && comics[key].containedComics.length) {
        positions[key].x_func = containedComicsXFunc;
    }
});

[
    "comic_major_igor_grom_1", "comic_major_igor_grom_2", "comic_major_igor_grom_3", "comic_major_igor_grom_4",
    "comic_major_igor_grom_5", "comic_major_igor_grom_6", "comic_major_igor_grom_7", "comic_major_igor_grom_8",
    "comic_major_igor_grom_9", "comic_major_igor_grom_10", "comic_major_igor_grom_11", "comic_major_igor_grom_12",
    "comic_major_igor_grom_13", "comic_major_igor_grom_14", "comic_major_igor_grom_15", "comic_major_igor_grom_16",
    "comic_major_igor_grom_17", "comic_major_igor_grom_18", "comic_major_igor_grom_19", "comic_major_igor_grom_20",
    "comic_major_igor_grom_21", "comic_major_igor_grom_22", "comic_major_igor_grom_23", "comic_major_igor_grom_24",
    "comic_major_igor_grom_25", "comic_major_igor_grom_26", "comic_major_igor_grom_27",
    "comic_major_igor_grom_special_duty", "comic_major_igor_grom_special_novak_and_sons"
].forEach((key) => (positions[key] = comicMajorIgorGromSingle));

[
    "comic_major_igor_grom_x_plague_doctor_11", "comic_major_igor_grom_x_plague_doctor_12",
    "comic_major_igor_grom_x_plague_doctor_13", "comic_major_igor_grom_x_plague_doctor_14"
].forEach((key) => (positions[key] = comicMajorIgorGromXPlagueDoctorSingle));

[
    "comic_butterfly_catcher", "comic_plague_doctor_volume_1", "comic_plague_doctor_volume_2",
    "comic_plague_doctor_volume_3", "comic_plague_doctor_volume_5", "comic_plague_doctor_volume_6",
    "comic_plague_doctor_volume_7"
].forEach((key) => {
    positions[key] = {...comicPlagueDoctorBook};

    if (comics[key].containedComics && comics[key].containedComics.length) {
        switch (key) {
            case "comic_plague_doctor_volume_3":
                positions[key].x_func = (layoutsNodes: vNG.NodePositions, comicId: string) => {
                    const containedComicsX: number[] = ["comic_plague_doctor_9", "comic_plague_doctor_10"]
                        .map((containedComicId) => comicIdToNodeId(containedComicId))
                        .map((containedNodeId) => layoutsNodes[containedNodeId].x);

                    return (minOfArray(containedComicsX) + maxOfArray(containedComicsX)) / 2;
                };
                break;
            default:
                positions[key].x_func = containedComicsXFunc;
                break;
        }
    }
});

[
    "comic_plague_doctor_1", "comic_plague_doctor_2", "comic_plague_doctor_3", "comic_plague_doctor_4",
    "comic_plague_doctor_5", "comic_plague_doctor_6", "comic_plague_doctor_7", "comic_plague_doctor_8",
    "comic_plague_doctor_9", "comic_plague_doctor_10", "comic_plague_doctor_15", "comic_plague_doctor_16",
    "comic_plague_doctor_17", "comic_plague_doctor_18", "comic_plague_doctor_19", "comic_plague_doctor_20",
    "comic_plague_doctor_21", "comic_plague_doctor_22", "comic_plague_doctor_23", "comic_plague_doctor_24",
    "comic_plague_doctor_25", "comic_plague_doctor_26", "comic_plague_doctor_27", "comic_plague_doctor_28",
    "comic_plague_doctor_29", "comic_plague_doctor_30", "comic_plague_doctor_31", "comic_plague_doctor_32",
    "comic_plague_doctor_33", "comic_plague_doctor_34"
].forEach((key) => (positions[key] = comicPlagueDoctorSingle));

[
    "comic_rivers_there_is_no_fear_1", "comic_rivers_there_is_no_fear_2", "comic_rivers_there_is_no_fear_3",
    "comic_rivers_there_is_no_fear_4"
].forEach((key) => (positions[key] = comicRiversThereIsNoFearSingle));

export default {
    ...positions,
    //comic_adventures_of_kochi_and_friends_funny_sketches            : range_childrens_comics,
    //comic_allies_15                                                 : comicWitchHuntSingle,
    //comic_allies_book_1                                             : range_allies_hardcover_book,
    //comic_allies_book_2                                             : range_allies_hardcover_book,
    //comic_anna_input                                                : range_new_bubble_heroes_line_3,
    //comic_anna_space_of_options                                     : range_new_bubble_heroes_line_3,
    //comic_balor_and_yana_dream_catcher_electronic                   : range_besoboy,
    //comic_balor_and_yana_dream_catcher_printed                      : range_besoboy_book,
    //comic_besoboy_15                                                : comic_monk_vs_besoboy,
    //comic_besoboy_16                                                : comic_monk_vs_besoboy,
    //comic_besoboy_17                                                : comic_monk_vs_besoboy,
    //comic_besoboy_and_planeswalkers_new_life_electronic             : comic_besoboy_and_planeswalkers_new_life,
    //comic_besoboy_and_planeswalkers_new_life_printed : {y: comic_besoboy_and_planeswalkers_new_life.y +
    // difference.y}, comic_besoboy_vol_2_15                                          : comicWitchHuntSingle,
    // comic_besoboy_vol_2_book_1                                      : range_besoboy_vol_2_hardcover_book,
    // comic_besoboy_vol_2_book_2                                      : range_besoboy_vol_2_hardcover_book,
    // comic_black_dog_its_time                                        : range_besoboy_book, comic_black_dog_its_time_1
    // : range_besoboy, comic_black_dog_its_time_2 : range_besoboy, comic_black_dog_its_time_3
    //             : range_besoboy, comic_black_dog_its_time_4                                      : range_besoboy,
    // comic_black_hand_and_mysterious_package                         : range_new_bubble_heroes_line_4,
    // comic_bubble_halloween                                          : range_bubble_legends, comic_bubble_triptych_1
    // : range_bubble_triptych, comic_bubble_triptych_2 : range_bubble_triptych, comic_bubble_triptych_3
    //                          : range_bubble_triptych,
    //                          comic_cat_and_mouse_volume_1                                    :
    // range_evgeny_fedotov, comic_cat_and_mouse_volume_2                                    : range_evgeny_fedotov,
    // comic_cat_and_mouse_volume_3                                    : range_evgeny_fedotov, comic_caesar_magnificent
    // : comic_caesar_magnificent_book, comic_caesar_magnificent_1 : comic_caesar_magnificent,
    // comic_caesar_magnificent_2 : comic_caesar_magnificent, comic_caesar_magnificent_3
    //       : comic_caesar_magnificent, comic_caesar_magnificent_4                                      :
    // comic_caesar_magnificent, comic_caesar_magnificent_5                                      :
    // comic_caesar_magnificent, comic_cage_split                                                :
    // range_new_bubble_heroes_line_4, comic_chosen_of_moon                                            :
    // range_bubble_manga_line_2_book, comic_chosen_of_moon_1                                          :
    // range_bubble_manga_line_2, comic_chosen_of_moon_2                                          :
    // range_bubble_manga_line_2, comic_chosen_of_moon_3                                          :
    // range_bubble_manga_line_2, comic_chosen_of_moon_4                                          :
    // range_bubble_manga_line_2, comic_chosen_of_moon_5                                          :
    // range_bubble_manga_line_2, comic_chosen_of_moon_6                                          :
    // range_bubble_manga_line_2, comic_chronicles_of_monk_storm_of_berlin                        : range_monk_book,
    // comic_community                                                 : comic_community_book, comic_community_1 :
    // comic_community, comic_community_2 : comic_community, comic_community_3
    //      : comic_community, comic_community_4                                               : comic_community,
    // comic_community_plush_and_dangerous_storybook_electronic        : comic_community,
    // comic_community_plush_and_dangerous_storybook_printed           : comic_community_book, comic_crusade : {y:
    // range_planeswalkers.y + difference.y}, comic_crusade_1 : range_planeswalkers, comic_crusade_2 :
    // range_planeswalkers, comic_crusade_3                                                 : range_planeswalkers,
    // comic_crusade_4                                                 : range_planeswalkers, comic_crusade_epilogue
    //                                       : range_planeswalkers, comic_crusade_prologue : range_planeswalkers,
    // comic_crusade_wolf : comic_crusade_wolf_book, comic_crusade_wolf_1                                            :
    // comic_crusade_wolf, comic_crusade_wolf_2                                            : comic_crusade_wolf,
    // comic_crusade_wolf_3                                            : comic_crusade_wolf, comic_crusade_wolf_4 :
    // comic_crusade_wolf, comic_crusade_wolf_5 : comic_crusade_wolf, comic_devilry
    //               : {y: range_bubble_legends.y + difference.y}, comic_devilry_1
    //            : range_bubble_legends, comic_devilry_2                                                 :
    // range_bubble_legends, comic_devilry_3                                                 : range_bubble_legends,
    // comic_devilry_4 : range_bubble_legends, comic_dont_be_reckless_quatrefoil                               :
    // range_new_bubble_heroes_line_2, comic_editor_signal_instance                                    :
    // range_new_bubble_heroes_line_2, comic_exlibrium_blank_sheet_electronic                          :
    // comic_exlibriums, comic_exlibrium_blank_sheet_printed                             : {y: comic_exlibriums.y +
    // difference.y}, comic_falcon_1                                                  : range_new_bubble_heroes_line_1,
    // comic_falcon_2 : range_new_bubble_heroes_line_1, comic_falcon_3 : range_new_bubble_heroes_line_1, comic_falcon_4
    // : range_new_bubble_heroes_line_1, comic_falcon_5 : range_new_bubble_heroes_line_1, comic_falcon_6
    //                                   : range_new_bubble_heroes_line_1, comic_falcon_7
    //                    : range_new_bubble_heroes_line_1, comic_falcon_volume_1
    //     : range_new_bubble_heroes_line_1_book, comic_falcon_volume_2                                           :
    // range_new_bubble_heroes_line_1_book, comic_fiction_novel_besoboy                                     :
    // comic_fiction_novel, comic_fiction_novel_fury                                        : comic_fiction_novel,
    // comic_fiction_novel_major_grom                                  : comic_fiction_novel,
    // comic_fiction_novel_razumovsky                                  : comic_fiction_novel,
    // comic_fiction_novel_nine_lives_of_agatha_first_life_dragons_font: comic_fiction_novel, comic_friends_comics :
    // {y: range_friends_comics.y + difference.y}, comic_friends_comics_1 : range_friends_comics,
    // comic_friends_comics_2 : range_friends_comics, comic_friends_comics_3                                          :
    // range_friends_comics, comic_friends_comics_4                                          : range_friends_comics,
    // comic_friends_comics_5                                          : range_friends_comics, comic_friends_comics_6 :
    // range_friends_comics, comic_friends_comics_7 : range_friends_comics, comic_friends_comics_8
    //                     : range_friends_comics, comic_friends_comics_9                                          :
    // range_friends_comics, comic_friends_comics_10                                         : range_friends_comics,
    // comic_friends_comics_11 : range_friends_comics, comic_friends_comics_12 : range_friends_comics,
    // comic_friends_comics_13                                         : range_friends_comics, comic_friends_comics_14
    //                                        : range_friends_comics, comic_friends_comics_15
    //               : range_friends_comics, comic_friends_comics_16 : range_friends_comics, comic_friends_comics_17 :
    // range_friends_comics, comic_friends_comics_18                                         : range_friends_comics,
    // comic_friends_comics_19                                         : range_friends_comics, comic_friends_comics_20
    //                                        : range_friends_comics, comic_friends_comics_21 : range_friends_comics,
    // comic_friends_comics_22 : range_friends_comics, comic_friends_comics_23
    // : range_friends_comics, comic_friends_comics_24                                         : range_friends_comics,
    // comic_friends_comics_25                                         : range_friends_comics, comic_friends_comics_26
    // : range_friends_comics, comic_friends_comics_27 : range_friends_comics, comic_gray_hound_volume_1_chapter_1
    //                        : range_bubble_manga_line_2,
    //                        comic_hourly_time_against
    // : range_besoboy_book, comic_igor_grom_book_1 : comicIgorGromHardcoverBook, comic_igor_grom_book_2
    //                           : comicIgorGromHardcoverBook, comic_igor_ugor_2_5
    //        : range_igor_ugor, comic_igor_ugor_volume_1                                        : range_igor_ugor,
    // comic_igor_ugor_volume_2 : range_igor_ugor, comic_igor_ugor_volume_3 : range_igor_ugor,
    // comic_impulse_heros_voice                                       : range_new_bubble_heroes_line_2,
    // comic_impulse_premiere                                          : range_new_bubble_heroes_line_2,
    // comic_impulse_volume_1                                          : range_new_bubble_heroes_line_2_book,
    // comic_ink_prince_and_book_knight                                : range_bubble_manga_line_3_book,
    // comic_ink_prince_and_book_knight_1                              : range_bubble_manga_line_3,
    // comic_ink_prince_and_book_knight_2                              : range_bubble_manga_line_3,
    // comic_ink_prince_and_book_knight_3                              : range_bubble_manga_line_3,
    // comic_ink_prince_and_book_knight_4                              : range_bubble_manga_line_3,
    // comic_jackets_and_revolvers_volume_1                            : comic_jackets_and_revolvers,
    // comic_jackets_and_revolvers_volume_2                            : comic_jackets_and_revolvers,
    // comic_jackets_and_revolvers_volume_3                            : comic_jackets_and_revolvers,
    // comic_jackets_and_revolvers_volume_4                            : comic_jackets_and_revolvers, comic_krutiks_1 :
    // range_childrens_comics, comic_krutiks_1_2018 : range_childrens_comics, comic_krutiks_2 : range_childrens_comics,
    // comic_krutiks_2_2018                                            : range_childrens_comics, comic_krutiks_3
    //                                          : range_childrens_comics, comic_krutiks_3_2018
    //                   : range_childrens_comics, comic_krutiks_4_2018                                            :
    // range_childrens_comics, comic_krutiks_5_2018                                            :
    // range_childrens_comics, comic_krutiks_6_2018                                            :
    // range_childrens_comics, comic_krutiks_7_2018                                            :
    // range_childrens_comics, comic_krutiks_8_2018                                            :
    // range_childrens_comics, comic_krutiks_9_2018                                            :
    // range_childrens_comics, comic_krutiks_10_2018                                           :
    // range_childrens_comics, comic_krutiks_11_2018                                           :
    // range_childrens_comics, comic_krutiks_12_2018                                           :
    // range_childrens_comics, comic_krutiks_13_2018                                           :
    // range_childrens_comics, comic_krutiks_cool_comics_book_1                                :
    // range_childrens_comics_book, comic_krutiks_cool_comics_book_2                                :
    // range_childrens_comics_book, comic_krutiks_cool_comics_book_3                                :
    // range_childrens_comics_book, comic_krutiks_galaxy_legends                                    :
    // range_childrens_comics, comic_krutiks_introduction_to_academy                           :
    // range_childrens_comics, comic_krutiks_new_year_special                                  :
    // range_childrens_comics, comic_lady_of_radiance_1                                        :
    // range_bubble_manga_line_2, comic_lady_of_radiance_2                                        :
    // range_bubble_manga_line_2, comic_lady_of_radiance_3                                        :
    // range_bubble_manga_line_2, comic_lady_of_radiance_4                                        :
    // range_bubble_manga_line_2, comic_licorice_1                                                :
    // range_bubble_manga_line_2, comic_licorice_2                                                :
    // range_bubble_manga_line_2, comic_licorice_3                                                :
    // range_bubble_manga_line_2, comic_licorice_4                                                :
    // range_bubble_manga_line_2, comic_licorice_5                                                :
    // range_bubble_manga_line_2, comic_licorice_6                                                :
    // range_bubble_manga_line_2, comic_licorice_book_1                                           :
    // range_bubble_manga_line_2_book, comic_licorice_book_2                                           :
    // range_bubble_manga_line_2_book,
    // comic_master_death_is_just_beginning_electronic : range_monk, comic_master_death_is_just_beginning_printed :
    // range_monk_book, comic_memento_mori_call_of_void                                 :
    // range_new_bubble_heroes_line_2, comic_monk_15 : comic_monk_vs_besoboy, comic_monk_16 : comic_monk_vs_besoboy,
    // comic_monk_17 : comic_monk_vs_besoboy, comic_monk_king_of_parties                                      :
    // range_monk_king_of_parties, comic_monk_king_of_parties_no_more_parties                      :
    // range_monk_king_of_parties,
    // comic_planeswalkers_15 : comicWitchHuntSingle,
    // comic_planeswalkers_book_1 : range_planeswalkers_hardcover_book,
    // comic_planeswalkers_book_2 : range_planeswalkers_hardcover_book,
    // comic_plush_policeman_perfect_plan                              :
    // range_new_bubble_heroes_line_3, comic_point_of_no_return                                        :
    // range_point_of_no_return, comic_red_fury_38                                               :
    // comicMajorGromAndRedFury, comic_red_fury_39                                               :
    // comicMajorGromAndRedFury, comic_red_fury_40                                               :
    // comicMajorGromAndRedFury, comic_red_fury_41                                               :
    // comicMajorGromAndRedFury, comic_russian_folk_tales_in_comics                              :
    // range_evgeny_yakovlev, comic_seven_sons_jaykarn                                        : range_anastasia_kim,
    // comic_sister_kukki : range_new_bubble_heroes_line_2_book, comic_sister_kukki_1 : range_new_bubble_heroes_line_2,
    // comic_soyuzmultcomics : range_childrens_comics, comic_tagar_volume_1
    // : range_bubble_manga_line_1_book, comic_tagar_volume_1_prologue                                   :
    // range_bubble_manga_line_1, comic_tagar_volume_1_chapter_1                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_1_chapter_2                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_1_chapter_3                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_1_chapter_4                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_2                                            :
    // range_bubble_manga_line_1_book, comic_tagar_volume_2_chapter_1                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_2_chapter_2                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_2_chapter_3                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_2_chapter_4                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_2_chapter_5                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_3                                            :
    // range_bubble_manga_line_1_book, comic_tagar_volume_3_chapter_1                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_3_chapter_2                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_3_chapter_3                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_3_chapter_4                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_3_chapter_5                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_3_chapter_6                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_3_chapter_7                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_4                                            :
    // range_bubble_manga_line_1_book, comic_tagar_volume_4_chapter_1                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_4_chapter_2                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_4_chapter_3                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_4_chapter_4                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_4_chapter_5                                  :
    // range_bubble_manga_line_1, comic_tagar_volume_4_chapter_6                                  :
    // range_bubble_manga_line_1, comic_teo_crop_circles                                          : range_meteora_book,
    // comic_teo_crop_circles_1 : range_meteora, comic_teo_crop_circles_2 : range_meteora, comic_teo_crop_circles_3 :
    // range_meteora, comic_teo_crop_circles_4 : range_meteora, comic_turbocarp : range_turbocarp,
    // comic_unicorn_conspiracy_volume_1 : comic_unicorn_conspiracy, comic_unicorn_conspiracy_volume_2
    //              : comic_unicorn_conspiracy, comic_vera_wolf : range_bubble_legends, comic_yarkh_step_forward :
    // range_besoboy_book, comic_yarkh_step_forward_1 : range_besoboy, comic_yarkh_step_forward_2
    //                : range_besoboy, comic_yarkh_step_forward_3                                      : range_besoboy,
    // comic_yarkh_step_forward_4 : range_besoboy, comic_yarkh_step_forward_5 : range_besoboy,
    // comic_yarkh_step_forward_6                                      : range_besoboy,
    // comic_ziggy_and_shmyg_destroy_bubble_universe                   : range_ziggy_and_shmyg,
    // comic_ziggy_and_shmyg_save_comiccon                             : range_ziggy_and_shmyg,
    // comic_ziggy_space_hamster                                       : range_childrens_comics_book,
    // comic_ziggy_space_hamster_1                                     : range_childrens_comics,
    // comic_ziggy_space_hamster_2                                     : range_childrens_comics,
    // comic_ziggy_space_hamster_3                                     : range_childrens_comics,
    // comic_ziggy_space_hamster_4                                     : range_childrens_comics,
    // comic_ziggy_space_hamster_5                                     : range_childrens_comics,
    // range_allies, range_besoboy, range_besoboy_vol_2, range_bubble_school, range_exlibrium,
    // range_exlibrium_second_life, range_bubble_gam,
    // range_meteora,
    // range_mir, range_monk,
    // range_planeswalkers, range_red_fury, range_thief_of_shadows, range_witch
};