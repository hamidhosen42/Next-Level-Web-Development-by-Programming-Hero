type User = {
    name:string,
    age:number
}

type extendedUser = User & {
    role:string;
}

interface IUser{
    name:string,
    age:number
}

interface IExtendUser extends IUser{
    role:string;
}
const user:extendedUser={
    name:"Md.Hamid Hosen",
    age:24,
    role:"Lorem"
}

const UserWithTypeAlias:User ={
    name:"Md.Hamid Hosen",
    age:24
}

console.log(UserWithTypeAlias.name);
console.log(UserWithTypeAlias.age);

const userWithInterface:IUser={
    name:"Md.Hamid Hosen1",
    age:21
}

console.log(userWithInterface.name,userWithInterface.age);

// Object,function,array

type addNumberType = (num1:number,num2:number)=>number;
interface IAddNUmbers{
    (num1:number,num2:number):number;
}
const addNumber:addNumberType = (num1,num2)=>num1+num2;
const addNumber1:IAddNUmbers = (num1,num2)=>num1+num2;