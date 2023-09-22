export type DateMonth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type DateDay =
    1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25
    | 26 | 27 | 28 | 29 | 30 | 31;

export type Date =
    { year: number; }
    | { year: number; month: DateMonth; }
    | { year: number; month: DateMonth; day: DateDay; };

export interface Range {
    name: string;
    color?: string;
    release_at: Date;
}

export type Ranges = Record<string, Range>;

export type ComicType = "single" | "book" | "hardcover_book";

export interface Comic {
    name: string;
    number?: string;
    type: ComicType;
    ranges: string[];
    including_comics?: string[];
    contained_comics?: string[];
    previous_comics?: string[];
    next_comics?: string[];
    release_at: Date;
}

export type Comics = Record<string, Comic>;