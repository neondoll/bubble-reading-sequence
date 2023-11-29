const monthsAbbrRu: string[] = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];

const monthAbbrRu = (monthIndex: number) => monthsAbbrRu[monthIndex] || undefined;

export {monthAbbrRu};