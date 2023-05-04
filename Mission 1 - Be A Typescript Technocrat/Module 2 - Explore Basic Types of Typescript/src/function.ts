//normal function
function add(num1:number,num2:number):number{
    return num1+num2;
}

//default parameter
function add1(num1:number,num2:number = 10):number{
    return num1+num2;
}
//spread operator
const myFriend = ['hamid','hosen','azad'];
const newFried = ['asif','fahim','moinul'];

//Destructuring
const myBestFriend = {
    fullName:"Md.Hamid Hosen",
    age:24
}

const [bestfriend] = myFriend;
const {fullName:myFullName}=myBestFriend;

console.log(myFullName);

myFriend.push(...newFried);
console.log(myFriend);

//rest operator
const greetFriend = (friend1:string,friend2:string,friend3:string):void=>console.log(
    `Hi ${friend1}\n Hi ${friend2}\n Hi ${friend3}`
);
greetFriend("Hamid","Hosen","Azad");

const greetFriend1=(...friends:string[]):void=>
friends.forEach((friend)=>console.log(`Hi ${friend}`));
greetFriend1("Hamid","Hosen","Azad",'asif','fahim','moinul');

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