// Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

interface Person {
    name: string;
    age: number;
    email: string;
}

const arrayOfPerson: Person[] = [
    {
        name: "Person 0",
        age: 59,
        email: "person0@example.com",
    },
    {
        name: "Person 1",
        age: 57,
        email: "person1@example.com",
    },
    {
        name: "Person 2",
        age: 37,
        email: "person2@example.com",
    },
    {
        name: "Person 3",
        age: 66,
        email: "person3@example.com",
    },
    {
        name: "Person 4",
        age: 24,
        email: "person4@example.com",
    },
    {
        name: "Person 5",
        age: 63,
        email: "person5@example.com",
    },
    {
        name: "Person 6",
        age: 67,
        email: "person6@example.com",
    },
    {
        name: "Person 7",
        age: 27,
        email: "person7@example.com",
    },
    {
        name: "Person 8",
        age: 31,
        email: "person8@example.com",
    },
    {
        name: "Person 9",
        age: 27,
        email: "person9@example.com",
    },
];

const arrOfEmail1 = ["person9@example.com", "person2@example.com"];
const arrOfEmail2 = ["labib@gmail.com"];

const findByEmail = (
    arrOfPerson: Person[],
    arrOfEmail: string[]
): Person[] | null => {
    let output: Person[] = [];

    arrOfPerson.forEach((person) => {
        if (arrOfEmail.includes(person.email)) {
            output.push(person);
        }
    });

    if (output.length) {
        return output;
    } else {
        return null;
    }
};

console.log(findByEmail(arrayOfPerson, arrOfEmail1));
console.log(findByEmail(arrayOfPerson, arrOfEmail2));