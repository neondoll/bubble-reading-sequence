import {ComicType} from "./interfaces";

const single = 16;

const sizes: Record<ComicType, number> = {book: single * 1.5, hardcover_book: single * 2, single};

export default sizes;