import {colorMixingHex} from "./color_functions";
import {comicColor} from "./comic_functions";
import comics from "../comics";

const characterColor = (characterId: string): string => {
    const colors: string[] = Object.keys(comics)
        .filter((comicId: string): boolean => comics[comicId].characters && comics[comicId].characters.indexOf(characterId) !== -1)
        .map((comicId: string): string => comicColor(comics[comicId]));
    const colorsLength: number = colors.length;

    return colorsLength ? (colorsLength > 1 ? colorMixingHex(colors) : colors[0]) : undefined;
};
const characterIdToNull = (characterId: string): string => characterId.replace("character_", "");

export {characterColor, characterIdToNull};
