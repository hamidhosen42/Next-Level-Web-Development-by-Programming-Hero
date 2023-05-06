type User1={
    name:string,
    age:number
}

type exdendedUser=User1 &{
    role:string
}

interface IUser{
    name:string,
    age:number
};

interface IExtendedUser extends IUser{
    role:string
};

type rollName =number;

// Object,funtion,array
type addNumbersType=(num1:number,num2:number)=>number;

interface IAddNumbers{
    (num1:number,num2:number):number
}

const addNUmbers : addNumbersType=(num1:number,num2:number) => num1+num2;
const addNUmbers1 : IAddNumbers=(num1:number,num2:number) => num1+num2;

type rollNumbersType=number[]
interface IRollNumbers{
    [index:number]:string,
}

const rollNumber1 : IRollNumbers = ['1','2','3'];//[index]

const users:exdendedUser={
    name:"Moinul",
    age:23,
    role:"Lorem"
};

const userWithTypeTypeAlias:User1={
    name:"Md.Hamid Hosen",
    age:32
}

const userWithInterfaces:IUser={
    name:"Interface",
    age:23
};