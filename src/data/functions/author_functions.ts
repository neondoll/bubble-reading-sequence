import {AuthorPosition} from "../interfaces";
import {colorMixingHex} from "./color_functions";
import {comicColor} from "./comic_functions";
import authorPositions from "../authorPositions";
import comics from "../comics";
import colors from "../colors";

const authorColor = (authorId: string): string => {
    if (Object.keys(colors).indexOf(authorId) !== -1) {
        return colors[authorId];
    }

    const comicColors: string[] = Object.keys(comics)
        .filter((comicId: string): boolean => comics[comicId].authors && comics[comicId].authors.map((author) => author.author_id).indexOf(authorId) !== -1)
        .map((comicId: string): string => comicColor(comicId))
        .filter((comicColor: string): boolean => comicColor !== undefined);
    const comicColorsLength: number = comicColors.length;

    return comicColorsLength ? (comicColorsLength > 1 ? colorMixingHex(comicColors) : comicColors[0]) : undefined;
};
const authorIdToNull = (authorId: string): string => authorId.replace("author_", "");
const authorPosition = (authorPosition: AuthorPosition): string => {
    return Object.keys(authorPositions).indexOf(authorPosition) !== -1 ? authorPositions[authorPosition] : undefined;
};

export {authorColor, authorIdToNull, authorPosition};