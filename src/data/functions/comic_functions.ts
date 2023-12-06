import {colorMixingHex} from "./color_functions";
import colors from "../colors";
import comics from "../comics";
import {Comic} from "../interfaces";

const comicColor = (comicId: string): string => {
    if (Object.keys(colors).indexOf(comicId) !== -1) {
        return colors[comicId];
    }

    const comic: Comic = comics[comicId];
    let authorColors: string[] = [];

    if (comic.ranges.indexOf("range_authors_comics") !== -1 && comic.authors) {
        authorColors = comic.authors
            .filter((author) => Object.keys(colors).indexOf(author.author_id) !== -1)
            .map((author) => colors[author.author_id]);
    }

    const rangeColors: string[] = comic.ranges
        .filter((rangeId: string): boolean => Object.keys(colors).indexOf(rangeId) !== -1)
        .map((rangeId: string): string => colors[rangeId]);
    const anyColors: string[] = [].concat(authorColors, rangeColors);
    const anyColorsLength: number = anyColors.length;
    console.log(comicId, anyColors);

    return anyColorsLength ? anyColorsLength > 1 ? colorMixingHex(anyColors) : anyColors[0] : undefined;
};
const comicIdToNull = (comicId: string): string => comicId.replace("comic_", "");

export {comicColor, comicIdToNull};