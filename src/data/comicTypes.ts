import {ComicType} from "./interfaces";

const comicTypes: Record<ComicType, Record<string, string>> = {
    book          : {value: "Книга", valueMany: "Книги"},
    hardcover_book: {value: "Книга в твердой обложке", valueMany: "Книги в твердой обложке"},
    single        : {value: "Сингл", valueMany: "Синглы"}
};

export default comicTypes;