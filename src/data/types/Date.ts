import {DateMonth} from "./DateMonth";
import {DateDay} from "./DateDay";

interface DateY {
    year: number;
}

interface DateYM extends DateY {
    month: DateMonth;
}

interface DateYMD extends DateYM {
    day: DateDay;
}

export type Date = DateY | DateYM | DateYMD;