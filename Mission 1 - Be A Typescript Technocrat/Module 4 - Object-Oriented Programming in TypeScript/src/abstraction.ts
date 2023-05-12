//!interface

// interface IVehicle {
//   name: string;
//   model: string;
// }

// const vehicle: IVehicle = {
//   name: "Car",
//   model: "2000",
// };

interface IVehicle {
    startEngine(): void;
    stopEngine(): void;
    move?(): void;
}

class Vehicles implements IVehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) { }
    startEngine(): void {
        console.log(" I am starting engine... ");
    }
    stopEngine(): void {
        console.log(" I am syopping engine");
    }
    move(): void {
        console.log(" I am syopping engine");
    }
}

const vehicle1 = new Vehicles("Car", "Toyota", 2000);

//!abstract class

abstract class Vehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) { }
    abstract startEngine(): void
    abstract stopEngine(): void
    move(): void {
        console.log(" I am syopping engine");
    }

}

class Car extends Vehicle {
    startEngine(): void {
        console.log(" I am starting engine... ");
    }
    stopEngine(): void {
        console.log(" I am stopping engine... ");
    }

}

//   const car1= new Vehicle('Car','Honda',2015)