const arrayInArray = (needle: any[], haystack: any[]): boolean => {
    return needle.some((value): boolean => haystack.indexOf(value) !== -1);
};
const maxOfArray = (numArray: number[]) => Math.max.apply(null, numArray.filter((number: number) => !isNaN(number)));
const minOfArray = (numArray: number[]) => Math.min.apply(null, numArray.filter((number: number) => !isNaN(number)));

export {arrayInArray, maxOfArray, minOfArray};