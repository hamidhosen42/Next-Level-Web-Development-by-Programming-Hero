// Pick

import { type } from "os";

interface Person {
    name: string;
    email?: string;
    contactNo: string;
}

type Contact = Pick<Person, "name" | "email">;

// Omit

type Name = Omit<Person, "email" | "name">;

// partial
// To make all the properties be optional type
type Optional = Partial<Person>;
type RequiredProps = Required<Person>;

// Read Only

const person: Readonly<Person> = {
    name: "Md.Hamid Hosen",
    email: "sdsdf",
    contactNo: "we4we"
};
person.contactNo = "23424";
console.log(person.contactNo);

// Record Type

// type obj={
//     a:string;
//     b:string;
//     c:string
// };

// using index signature
// type myObj={
//     [key:string]:string
// }

// record
type myObj = Record<'a' | 'b' | 'c' | 'd', string>;
const obj1: myObj = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
}