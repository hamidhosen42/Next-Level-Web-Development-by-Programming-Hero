// Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.

const numArr: number[] = [1, 2, 3, 4, 5];

const findMinMax = (...args: number[]): void => {
    console.log("Max:", Math.max(...args));
    console.log("Min:", Math.min(...args));
};

findMinMax(...numArr);