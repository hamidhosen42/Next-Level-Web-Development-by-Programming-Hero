// Key of guard
type Alphaneumeric = string | number;

function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}

add("2", "3");
add(2, 3);

// In guard

type NormalUserType = {
    name: string;
}

type AdminUserType = {
    name: string;
    role: "admin";
}

function getUser(user: NormalUserType | AdminUserType): string {
    if ('role' in user) {
        return `I am an admin and my role is ${user.role}`;
    } else {
        return `I am normal user`;
    }
}

const normalUser1: NormalUserType = { name: "Md.Hamid" };
const adminUser1: AdminUserType = { name: "Md.Hamid Hosne", role: "admin" };

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));

// instanceof guard

class Animal {
    name: string;
    speci: string;

    constructor(name: string, speci: string) {
        this.name = name;
        this.speci = speci;
    }

    makeSound() {
        console.log('I am making sound');
    }
}

class Dog extends Animal {
    constructor(name: string, speci: string) {
        super(name, speci);
    }
    makeBark() {
        console.log('I am barking');
    }
}

class Cat extends Animal {
    constructor(name: string, speci: string) {
        super(name, speci);
    }
    makeMeaw() {
        console.log('I am meaw');
    }
}

function isDog(animal: Animal): animal is Dog {
    return animal instanceof Dog;
}

function isCat(animal: Animal): animal is Cat {
    return animal instanceof Cat;
}

function getAnimal(animal: Animal) {
    if (isDog(animal)) {
        animal.makeBark();
    } else if (animal instanceof Cat) {
        animal.makeMeaw();
    } else {
        animal.makeSound();
    }
}

const animal1 = new Dog("abcddgsfs","dog");
const animal2 = new Dog("sdsafadf","Cat");

getAnimal(animal1);
getAnimal(animal2);