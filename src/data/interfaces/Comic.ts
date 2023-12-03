import {ComicType} from "../types/ComicType";
import {Date} from "../types/Date";

export interface Comic {
    name: string;
    number?: string;
    type: ComicType;
    cover_file_url?: string;
    ranges: string[];
    characters?: string[];
    authors?: string[];
    including_comics?: string[];
    contained_comics?: string[];
    previous_comics?: string[];
    next_comics?: string[];
    release_at: Date;
    show?: boolean
}