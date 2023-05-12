// Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.

const rgb = (color: "red" | "green" | "blue", uppercase?: boolean): void => {
    console.log(uppercase ? color.toUpperCase() : color);
};

rgb("red", true);
rgb("red", false);
rgb("red");