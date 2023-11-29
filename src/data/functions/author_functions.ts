import {AuthorPosition} from "../types/AuthorPosition";
import {colorMixingHex} from "./color_functions";
import {comicColor} from "./comic_functions";
import comics from "../comics";

const authorPositions = {artist: "Художник", colorist: "Колорист", screenwriter: "Сценарист"};

const authorColor = (authorId: string): string => {
    const colors: string[] = Object.keys(comics)
        .filter((comicId: string): boolean => comics[comicId].authors && comics[comicId].authors.indexOf(authorId) !== -1)
        .map((comicId: string): string => comicColor(comics[comicId]));
    const colorsLength: number = colors.length;

    return colorsLength ? (colorsLength > 1 ? colorMixingHex(colors) : colors[0]) : undefined;
};
const authorIdToNull = (authorId: string): string => authorId.replace("author_", "");
const authorPosition = (authorPosition: AuthorPosition): string => {
    return Object.keys(authorPositions).indexOf(authorPosition) !== -1 ? authorPositions[authorPosition] : undefined;
};

export {authorColor, authorIdToNull, authorPosition};