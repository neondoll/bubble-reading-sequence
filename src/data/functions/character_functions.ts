import {colorMixingHex} from "./color_functions";
import {comicColor} from "./comic_functions";
import comics from "../comics";

const characterColor = (characterId: string): string => {
    const comicColors: string[] = Object.keys(comics)
        .filter((comicId: string): boolean => comics[comicId].characters && comics[comicId].characters.indexOf(characterId) !== -1)
        .map((comicId: string): string => comicColor(comicId))
        .filter((comicColor: string): boolean => comicColor !== undefined);
    const comicColorsLength: number = comicColors.length;

    return comicColorsLength ? (comicColorsLength > 1 ? colorMixingHex(comicColors) : comicColors[0]) : undefined;
};
const characterIdToNull = (characterId: string): string => characterId.replace("character_", "");

export {characterColor, characterIdToNull};
