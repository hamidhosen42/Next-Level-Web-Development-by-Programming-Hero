// You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.
// Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.

const filterProducts = <T extends object>(
    array: T[],
    criteria: keyof T,
    value: T[keyof T]
): T[] => {
    let output: T[] = [];
    array.forEach((element) => {
        if (element[criteria] === value) {
            output.push(element);
        }
    });
    return output;
};

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

const products: Product[] = [
    { id: 1, name: "Product 1", price: 10.99, category: "Category 1" },
    { id: 2, name: "Product 2", price: 20.99, category: "Category 2" },
    { id: 3, name: "Product 3", price: 30.99, category: "Category 1" },
    { id: 4, name: "Product 4", price: 40.99, category: "Category 2" },
    { id: 5, name: "Product 5", price: 50.99, category: "Category 1" },
    { id: 6, name: "Product 6", price: 60.99, category: "Category 2" },
    { id: 7, name: "Product 7", price: 70.99, category: "Category 1" },
    { id: 8, name: "Product 8", price: 80.99, category: "Category 2" },
    { id: 9, name: "Product 9", price: 90.99, category: "Category 1" },
    { id: 10, name: "Product 10", price: 100.99, category: "Category 2" },
];

console.log(filterProducts(products, "category", "Category 1"));