//normal function
function add(num1:number,num2:number):number{
    return num1+num2;
}

//arrow function
const addArrow = (num1:number,num2:number):number => num1+num2;

//call back function
const arr = [2,3,4]
const newArray = arr.map((element:number)=> element*element);
console.log(newArray);

//Object function
const person:{
    name:string,
    balance:number,
    addBalance(money:number):string
}={
    name:"Hamid",
    balance:5,
    addBalance(money:number){
        return `My New Balance is ${this.balance+money}`;
    }
}

console.log(person);