import {Comic} from "../interfaces";
import {colorMixingHex} from "./color_functions";
import colors from "../colors";
import comics from "../comics";

const comicColor = (comicId: string): string => {
    if (Object.keys(colors).indexOf(comicId) !== -1) {
        return colors[comicId];
    }

    const comic: Comic = comics[comicId];
    let authorColors: string[] = [];

    if (comic.ranges.indexOf("range_jackets_and_revolvers") !== -1 &&
        comic.ranges.indexOf("range_unicorn_conspiracy") !== -1 &&
        comic.ranges.indexOf("range_other_authors_comics") !== -1 && comic.authors) {
        authorColors = comic.authors
            .filter((author) => Object.keys(colors).indexOf(author.author_id) !== -1)
            .map((author) => colors[author.author_id]);
    }

    const rangeColors: string[] = comic.ranges
        .filter((rangeId: string): boolean => Object.keys(colors).indexOf(rangeId) !== -1)
        .map((rangeId: string): string => colors[rangeId]);
    const anyColors: string[] = [].concat(authorColors, rangeColors);
    const anyColorsLength: number = anyColors.length;

    return anyColorsLength ? anyColorsLength > 1 ? colorMixingHex(anyColors) : anyColors[0] : undefined;
};
const comicIdToNull = (comicId: string): string => comicId.replace("comic_", "");
const getComicIdForLink = (comicId: string): string => comicId.replace("comic_", "").replace(/_/g, "-");

export {comicColor, comicIdToNull, getComicIdForLink};