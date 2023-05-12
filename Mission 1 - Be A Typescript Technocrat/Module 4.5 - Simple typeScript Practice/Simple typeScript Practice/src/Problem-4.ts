// Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type ProductTuple = [string, number, number];
type ProductArray = ProductTuple[];

function calculateTotalCost(products: ProductArray): number {
  let totalCost = 0;

  for (const product of products) {
    const [name, price, quantity] = product;
    const productCost = price * quantity;
    totalCost += productCost;
  }

  return totalCost;
}


const touples: ProductArray = [
    ["apple", 2, 0.5],
    ["banana", 1, 0.25],
    ["orange", 3, 0.75],
    ["grape", 4, 1.0],
    ["pineapple", 1, 1.5],
    ["watermelon", 2, 3.0],
    ["peach", 5, 0.4],
    ["pear", 2, 0.6],
    ["kiwi", 4, 0.8],
    ["mango", 1, 1.2],
];

console.log(calculateTotalCost(touples));