import * as vNG from "v-network-graph";

export interface Author {
    fullName: string;
    nickname?: string;
    positions?: AuthorPosition[];
    linkToBubbleWebsite?: string;
}

export type AuthorPosition = "artist" | "colorist" | "screenwriter";

export type Authors = Record<string, Author>;

export interface Character {
    fullName: string;
    linkToBubbleAvatar?: string;
    linkToBubbleImage?: string;
    linkToBubbleWebsite: string;
}

export type Characters = Record<string, Character>;

export interface Comic {
    name: string;
    number?: string;
    type: ComicType;
    coverFile?: Image;
    contentFiles?: Image[];
    ranges: string[];
    characters?: string[];
    authors?: ComicAuthor[];
    includingComics?: string[];
    containedComics?: string[];
    previousComics?: string[];
    nextComics?: string[];
    releaseAt: Date;
    show?: boolean
}

export interface ComicAuthor {
    authorId: string;
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

export interface Range {
    name: string;
    banner?: string;
    cover: string;
    cover2x: string;
    logo?: string;
    releaseAt: Date;
}

export type Ranges = Record<string, Range>;

interface RangesGroup {
    name: string;
    containedRangesGroups?: string[];
    containedRanges?: string[];
}

export type RangesGroups = Record<string, RangesGroup>;