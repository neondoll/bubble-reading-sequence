import {Ranges} from "./interfaces";
import imagePaths from "./imagePaths";

const paths: Record<string, string> = imagePaths.ranges;

const ranges: Ranges = {
    range_besoboy                : {
        name     : "Бесобой",
        cover    : `${paths.besoboy}/besoboy-cover.webp`,
        cover2x  : `${paths.besoboy}/besoboy-cover-2x.webp`,
        logo     : `${paths.besoboy}/besoboy-logo.png`,
        releaseAt: {year: 2012, month: 10, day: 1}
    },
    range_major_grom             : {
        name     : "Майор Гром",
        banner   : `${paths.majorGrom}/major-grom-banner.webp`,
        cover    : `${paths.majorGrom}/major-grom-cover.webp`,
        cover2x  : `${paths.majorGrom}/major-grom-cover-2x.webp`,
        logo     : `${paths.majorGrom}/major-grom-logo.png`,
        releaseAt: {year: 2012, month: 10, day: 8}
    },
    range_monk                   : {
        name     : "Инок",
        cover    : `${paths.monk}/monk-cover.webp`,
        cover2x  : `${paths.monk}/monk-cover-2x.webp`,
        logo     : `${paths.monk}/monk-logo.png`,
        releaseAt: {year: 2012, month: 10, day: 15}
    },
    range_red_fury               : {
        name     : "Красная Фурия",
        cover    : `${paths.redFury}/red-fury-cover.webp`,
        cover2x  : `${paths.redFury}/red-fury-cover-2x.webp`,
        logo     : `${paths.redFury}/red-fury-logo.png`,
        releaseAt: {year: 2012, month: 10, day: 22}
    },
    range_crossovers             : {
        name     : "Кроссоверы",
        cover    : `${paths.crossovers}/crossovers-cover.webp`,
        cover2x  : `${paths.crossovers}/crossovers-cover-2x.webp`,
        releaseAt: {year: 2013, month: 12, day: 1}
    },
    range_exlibrium              : {
        name     : "Экслибриум",
        cover    : `${paths.exlibrium}/exlibrium-cover.webp`,
        cover2x  : `${paths.exlibrium}/exlibrium-cover-2x.webp`,
        logo     : `${paths.exlibrium}/exlibrium-logo.png`,
        releaseAt: {year: 2014, month: 10, day: 20}
    },
    range_meteora                : {
        name     : "Метеора",
        cover    : `${paths.meteora}/meteora-cover.webp`,
        cover2x  : `${paths.meteora}/meteora-cover-2x.webp`,
        logo     : `${paths.meteora}/meteora-logo.png`,
        releaseAt: {year: 2014, month: 10, day: 25}
    },
    range_bubble_legends         : {
        name     : "Легенды BUBBLE",
        cover    : `${paths.bubbleLegends}/bubble-legends-cover.webp`,
        cover2x  : `${paths.bubbleLegends}/bubble-legends-cover-2x.webp`,
        logo     : `${paths.bubbleLegends}/bubble-legends-logo.png`,
        releaseAt: {year: 2015, month: 5, day: 1}
    },
    range_childrens_comics       : {
        name     : "Детские комиксы",
        cover    : `${paths.childrensComics}/childrens-comics-cover.webp`,
        cover2x  : `${paths.childrensComics}/childrens-comics-cover-2x.webp`,
        logo     : `${paths.childrensComics}/childrens-comics-logo.png`,
        releaseAt: {year: 2015, month: 10, day: 1}
    },
    range_other_authors_comics   : {
        name     : "Другие авторские комиксы",
        cover    : `${paths.otherAuthorsComics}/other-authors-comics-cover.webp`,
        cover2x  : `${paths.otherAuthorsComics}/other-authors-comics-cover-2x.webp`,
        releaseAt: {year: 2015, month: 12, day: 7}
    },
    range_other_inadequate_comics: {
        name     : "Другие упоротые комиксы",
        cover    : `${paths.otherInadequateComics}/other-inadequate-comics-cover.webp`,
        cover2x  : `${paths.otherInadequateComics}/other-inadequate-comics-cover-2x.webp`,
        releaseAt: {year: 2016, month: 4, day: 1}
    },
    range_besoboy_vol_2          : {
        name     : "Бесобой Vol.2",
        cover    : `${paths.besoboyVol2}/besoboy-vol-2-cover.webp`,
        cover2x  : `${paths.besoboyVol2}/besoboy-vol-2-cover-2x.webp`,
        logo     : `${paths.besoboyVol2}/besoboy-vol-2-logo.png`,
        releaseAt: {year: 2017, month: 1, day: 20}
    },
    range_igor_grom              : {
        name     : "Игорь Гром",
        cover    : `${paths.igorGrom}/igor-grom-cover.webp`,
        cover2x  : `${paths.igorGrom}/igor-grom-cover-2x.webp`,
        logo     : `${paths.igorGrom}/igor-grom-logo.png`,
        releaseAt: {year: 2017, month: 1, day: 20}
    },
    range_planeswalkers          : {
        name     : "Мироходцы",
        cover    : `${paths.planeswalkers}/planeswalkers-cover.webp`,
        cover2x  : `${paths.planeswalkers}/planeswalkers-cover-2x.webp`,
        logo     : `${paths.planeswalkers}/planeswalkers-logo.png`,
        releaseAt: {year: 2017, month: 1, day: 20}
    },
    range_allies                 : {
        name     : "Союзники",
        cover    : `${paths.allies}/allies-cover.webp`,
        cover2x  : `${paths.allies}/allies-cover-2x.webp`,
        logo     : `${paths.allies}/allies-logo.png`,
        releaseAt: {year: 2017, month: 1, day: 20}
    },
    range_igor_ugor              : {
        name     : "Игорь Угорь",
        cover    : `${paths.igorUgor}/igor-ugor-cover.webp`,
        cover2x  : `${paths.igorUgor}/igor-ugor-cover-2x.webp`,
        logo     : `${paths.igorUgor}/igor-ugor-logo.png`,
        releaseAt: {year: 2017, month: 4, day: 1}
    },
    range_jackets_and_revolvers  : {
        name     : "Пиджаки и Револьверы",
        cover    : `${paths.jacketsAndRevolvers}/jackets-and-revolvers-cover.webp`,
        cover2x  : `${paths.jacketsAndRevolvers}/jackets-and-revolvers-cover-2x.webp`,
        logo     : `${paths.jacketsAndRevolvers}/jackets-and-revolvers-logo.png`,
        releaseAt: {year: 2017, month: 9, day: 28}
    },
    range_unicorn_conspiracy     : {
        name     : "Заговор Единорогов",
        cover    : `${paths.unicornConspiracy}/unicorn-conspiracy-cover.webp`,
        cover2x  : `${paths.unicornConspiracy}/unicorn-conspiracy-cover-2x.webp`,
        logo     : `${paths.unicornConspiracy}/unicorn-conspiracy-logo.png`,
        releaseAt: {year: 2017, month: 9, day: 28}
    },
    range_tagar                  : {
        name     : "Тагар",
        cover    : `${paths.tagar}/tagar-cover.webp`,
        cover2x  : `${paths.tagar}/tagar-cover-2x.webp`,
        logo     : `${paths.tagar}/tagar-logo.png`,
        releaseAt: {year: 2017, month: 9, day: 28}
    },
    range_krutiks                : {
        name     : "Крутиксы",
        cover    : `${paths.krutiks}/krutiks-cover.webp`,
        cover2x  : `${paths.krutiks}/krutiks-cover-2x.webp`,
        logo     : `${paths.krutiks}/krutiks-logo.png`,
        releaseAt: {year: 2017, month: 10, day: 3}
    },
    range_exlibrium_second_life  : {
        name     : "Экслибриум. Жизнь вторая",
        cover    : `${paths.exlibriumSecondLife}/exlibrium-second-life-cover.webp`,
        cover2x  : `${paths.exlibriumSecondLife}/exlibrium-second-life-cover-2x.webp`,
        logo     : `${paths.exlibriumSecondLife}/exlibrium-second-life-logo.png`,
        releaseAt: {year: 2019, month: 4, day: 21}
    },
    range_thief_of_shadows       : {
        name     : "Вор Теней",
        cover    : `${paths.thiefOfShadows}/thief-of-shadows-cover.webp`,
        cover2x  : `${paths.thiefOfShadows}/thief-of-shadows-cover-2x.webp`,
        logo     : `${paths.thiefOfShadows}/thief-of-shadows-logo.png`,
        releaseAt: {year: 2019}
    },
    range_plague_doctor          : {
        name     : "Чумной Доктор",
        cover    : `${paths.plagueDoctor}/plague-doctor-cover.webp`,
        cover2x  : `${paths.plagueDoctor}/plague-doctor-cover-2x.webp`,
        logo     : `${paths.plagueDoctor}/plague-doctor-logo.png`,
        releaseAt: {year: 2020, month: 5, day: 4}
    },
    range_bubble_manga           : {
        name     : "BUBBLE Манга",
        cover    : `${paths.bubbleManga}/bubble-manga-cover.webp`,
        cover2x  : `${paths.bubbleManga}/bubble-manga-cover-2x.webp`,
        logo     : `${paths.bubbleManga}/bubble-manga-logo.png`,
        releaseAt: {year: 2020, month: 7, day: 1}
    },
    range_mir                    : {
        name     : "МИР",
        cover    : `${paths.mir}/mir-cover.webp`,
        cover2x  : `${paths.mir}/mir-cover-2x.webp`,
        logo     : `${paths.mir}/mir-logo.png`,
        releaseAt: {year: 2020, month: 8, day: 7}
    },
    range_major_igor_grom        : {
        name     : "Майор Игорь Гром",
        cover    : `${paths.majorIgorGrom}/major-igor-grom-cover.webp`,
        cover2x  : `${paths.majorIgorGrom}/major-igor-grom-cover-2x.webp`,
        logo     : `${paths.majorIgorGrom}/major-igor-grom-logo.png`,
        releaseAt: {year: 2021, month: 7, day: 2}
    },
    range_licorice               : {
        name     : "Ликорис",
        cover    : `${paths.licorice}/licorice-cover.webp`,
        cover2x  : `${paths.licorice}/licorice-cover-2x.webp`,
        logo     : `${paths.licorice}/licorice-logo.png`,
        releaseAt: {year: 2022, month: 7, day: 4}
    },
    range_witch                  : {
        name     : "Ведьма",
        cover    : `${paths.witch}/witch-cover.webp`,
        cover2x  : `${paths.witch}/witch-cover-2x.webp`,
        logo     : `${paths.witch}/witch-logo.png`,
        releaseAt: {year: 2023, month: 1, day: 20}
    },
    range_bubble_gam             : {
        name     : "BUBBLE ГАМ",
        cover    : `${paths.bubbleGam}/bubble-gam-cover.webp`,
        cover2x  : `${paths.bubbleGam}/bubble-gam-cover-2x.webp`,
        logo     : `${paths.bubbleGam}/bubble-gam-logo.png`,
        releaseAt: {year: 2023, month: 2, day: 2}
    },
    range_bubble_school          : {
        name     : "Школа BUBBLE",
        cover    : `${paths.bubbleSchool}/bubble-school-cover.webp`,
        cover2x  : `${paths.bubbleSchool}/bubble-school-cover-2x.webp`,
        logo     : `${paths.bubbleSchool}/bubble-school-logo.png`,
        releaseAt: {year: 2023, month: 3, day: 17}
    },
    range_gray_hound             : {
        name     : "Серая Гончая",
        cover    : `${paths.grayHound}/gray-hound-cover.webp`,
        cover2x  : `${paths.grayHound}/gray-hound-cover-2x.webp`,
        logo     : `${paths.grayHound}/gray-hound-logo.png`,
        releaseAt: {year: 2023, month: 7, day: 5}
    },
    range_gloom                  : {
        name     : "МРАК",
        cover    : `${paths.gloom}/gloom-cover.webp`,
        cover2x  : `${paths.gloom}/gloom-cover-2x.webp`,
        logo     : `${paths.gloom}/gloom-logo.png`,
        releaseAt: {year: 2023}
    },
    range_special_issues         : {
        name     : "Спецвыпуски",
        cover    : `${paths.specialIssues}/special-issues-cover.webp`,
        cover2x  : `${paths.specialIssues}/special-issues-cover-2x.webp`,
        releaseAt: {year: 2023}
    },
    range_cheaters               : {
        name     : "Читеры",
        cover    : `${paths.cheaters}/cheaters-cover.webp`,
        cover2x  : `${paths.cheaters}/cheaters-cover-2x.webp`,
        logo     : `${paths.cheaters}/cheaters-logo.png`,
        releaseAt: {year: 2023}
    }
};

export default ranges;