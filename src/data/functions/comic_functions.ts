import {Comic} from "../interfaces/Comic";
import {colorMixingHex} from "./color_functions";
import ranges from "../ranges";

const comicColor = (comic: Comic): string => {
    const colors: string[] = comic.ranges
        .filter((rangeIds: string) => Boolean(ranges[rangeIds].color))
        .map((rangeIds: string) => ranges[rangeIds].color);
    const colorsLength: number = colors.length;

    return colorsLength ? (colorsLength > 1 ? colorMixingHex(colors) : colors[0]) : undefined;
};
const comicIdToNull = (comicId: string): string => comicId.replace("comic_", "");

export {comicColor, comicIdToNull};