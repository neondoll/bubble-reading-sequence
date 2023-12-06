import {colorMixingHex} from "./color_functions";
import {comicColor} from "./comic_functions";
import colors from "../colors";
import comics from "../comics";

const rangeColor = (rangeId: string): string => {
    if (Object.keys(colors).indexOf(rangeId) !== -1) {
        return colors[rangeId];
    }

    const comicColors: string[] = Object.keys(comics)
        .filter((comicId: string): boolean => comics[comicId].ranges.indexOf(rangeId) !== -1)
        .map((comicId: string): string => comicColor(comicId))
        .filter((comicColor: string): boolean => comicColor !== undefined);
    const comicColorsLength: number = comicColors.length;

    return comicColorsLength ? comicColorsLength > 1 ? colorMixingHex(comicColors) : comicColors[0] : undefined;
};
const rangeIdToNull = (rangeId: string): string => rangeId.replace("range_", "");

export {rangeColor, rangeIdToNull}