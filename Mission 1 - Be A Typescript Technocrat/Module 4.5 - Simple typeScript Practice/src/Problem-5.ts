// Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

const numArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const calculateSumOfEvens = (arr: number[]): number => {
    return arr.reduce((accumulator, current) => {
        if (current % 2 === 0) {
            return accumulator + current;
        } else {
            return accumulator;
        }
    }, 0);
};

console.log(calculateSumOfEvens(numArray));