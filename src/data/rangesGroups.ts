import {RangesGroups} from "./interfaces";

const rangesGroups: RangesGroups = {
    ranges_group_bubble_universe  : {
        name                 : "Вселенная BUBBLE",
        containedRangesGroups: ["ranges_group_major_grom", "ranges_group_plague_doctor", "ranges_group_exlibrium",
                                "ranges_group_red_fury", "ranges_group_besoboy", "ranges_group_meteora",
                                "ranges_group_mir", "ranges_group_monk", "ranges_group_gloom", "ranges_group_school",
                                "ranges_group_witch", "ranges_group_bubble_gam"]
    },
    ranges_group_major_grom       : {
        name           : "Майор Гром",
        containedRanges: ["range_major_grom", "range_igor_grom", "range_major_igor_grom"]
    },
    ranges_group_plague_doctor    : {name: "Чумной Доктор", containedRanges: ["range_plague_doctor"]},
    ranges_group_exlibrium        : {
        name           : "Экслибриум",
        containedRanges: ["range_exlibrium", "range_exlibrium_second_life"]
    },
    ranges_group_red_fury         : {name: "Красная Фурия", containedRanges: ["range_red_fury", "range_allies"]},
    ranges_group_besoboy          : {name: "Бесобой", containedRanges: ["range_besoboy", "range_besoboy_vol_2"]},
    ranges_group_meteora          : {name: "Метеора", containedRanges: ["range_meteora"]},
    ranges_group_mir              : {name: "МИР", containedRanges: ["range_mir"]},
    ranges_group_monk             : {name: "Инок", containedRanges: ["range_monk", "range_planeswalkers"]},
    ranges_group_gloom            : {name: "МРАК", containedRanges: ["range_gloom"]},
    ranges_group_school           : {name: "Школа", containedRanges: ["range_bubble_school"]},
    ranges_group_witch            : {name: "Ведьма", containedRanges: ["range_witch"]},
    ranges_group_bubble_gam       : {name: "BUBBLE ГАМ", containedRanges: ["range_bubble_gam"]},
    ranges_group_bubble_legends   : {name: "Легенды BUBBLE", containedRanges: ["range_bubble_legends"]},
    ranges_group_bubble_manga     : {
        name           : "BUBBLE Манга",
        containedRanges: ["range_tagar", "range_licorice", "range_gray_hound", "range_bubble_manga"]
    },
    ranges_group_authors_comics   : {
        name           : "Авторские комиксы",
        containedRanges: ["range_jackets_and_revolvers", "range_unicorn_conspiracy", "range_other_authors_comics"]
    },
    ranges_group_childrens_comics : {
        name           : "Детские комиксы",
        containedRanges: ["range_krutiks", "range_childrens_comics"]
    },
    ranges_group_inadequate_galaxy: {
        name           : "Упоротая галактика",
        containedRanges: ["range_igor_ugor", "range_thief_of_shadows", "range_other_inadequate_comics"]
    },
    ranges_group_crossovers       : {name: "Кроссоверы", containedRanges: ["range_crossovers"]},
    ranges_group_special_issues   : {name: "Спецвыпуски", containedRanges: ["range_special_issues"]}
};

export default rangesGroups;