// Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.
// For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.
// The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.

const intersect = (arr1: number[], arr2: number[]): number[] => {
    let output: number[] = [];
    arr1.forEach((element) => {
      if (arr2.includes(element)) {
        output.push(element);
      }
    });
    return output;
  };
  
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [2, 4, 6, 7];
  
  console.log(intersect(array1, array2));