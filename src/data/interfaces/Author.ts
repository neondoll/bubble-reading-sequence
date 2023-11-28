import {AuthorPosition} from "../types/AuthorPosition";

export interface Author {
    full_name: string;
    position: AuthorPosition;
    link_to_bubble_website?: string;
}