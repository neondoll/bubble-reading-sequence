const arrayInArray = (needle: any[], haystack: any[]) => {
    let check = false;

    needle.forEach((value) => {
        check = check || haystack.indexOf(value) !== -1;
    });

    return check;
};
const maxOfArray = (numArray: number[]) => Math.max.apply(null, numArray.filter((number: number) => !isNaN(number)));
const minOfArray = (numArray: number[]) => Math.min.apply(null, numArray.filter((number: number) => !isNaN(number)));

export {arrayInArray, maxOfArray, minOfArray};