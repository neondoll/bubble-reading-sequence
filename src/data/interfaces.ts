import * as vNG from "v-network-graph";

export interface Author {
    full_name: string;
    positions?: AuthorPosition[];
    link_to_bubble_website?: string;
}

export type AuthorPosition = "artist" | "colorist" | "screenwriter";

export type Authors = Record<string, Author>;

export interface Character {
    full_name: string;
    link_to_bubble_avatar?: string;
    link_to_bubble_image?: string;
    link_to_bubble_website: string;
}

export type Characters = Record<string, Character>;

export interface Comic {
    name: string;
    number?: string;
    type: ComicType;
    cover_file?: Image;
    content_files?: Image[];
    ranges: string[];
    characters?: string[];
    authors?: ComicAuthor[];
    including_comics?: string[];
    contained_comics?: string[];
    previous_comics?: string[];
    next_comics?: string[];
    release_at: Date;
    show?: boolean
}

interface ComicAuthor {
    author_id: string;
    positions: AuthorPosition[];
}

export type ComicType = "single" | "book" | "hardcover_book";

export type Comics = Record<string, Comic>;

type Date = DateY | DateYM | DateYMD;

type DateDay =
    1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25
    | 26 | 27 | 28 | 29 | 30 | 31;

type DateMonth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface DateY {
    year: number;
}

interface DateYM extends DateY {
    month: DateMonth;
}

interface DateYMD extends DateYM {
    day: DateDay;
}

export interface Edge extends vNG.Edge {
    color?: string;
    dashed?: boolean;
}

interface Image {
    url: string;
    width: number;
    height: number;
}

export interface Node extends vNG.Node {
    color: string;
    size: number;
}

interface Range {
    name: string;
    release_at: Date;
}

export type Ranges = Record<string, Range>;