class Animal{
    // public name:string;
    // public species:string;
    // public sound:string;

    // Parameter Properties
    constructor(public name:string, public species:string,public sound:string){
        // this.name=name,
        // this.species = species,
        // this.sound= sound
    }
    makeSound(){
        console.log(`This ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal("German Shepard","Dog","Ghew Ghew");
const dog1 = new Animal("German Shepard","Dog","Ghew Ghew");
dog.makeSound();
dog1.makeSound();