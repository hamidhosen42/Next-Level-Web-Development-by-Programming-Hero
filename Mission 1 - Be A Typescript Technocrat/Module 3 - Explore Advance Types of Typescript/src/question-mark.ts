// ternary operator

const age:number=23;

if(age<18){
    console.log("Yes");
}else{
    console.log("No");
}

const isAdult = age>=18?"YES":"No";
console.log(isAdult);

// Nullish coalescing operator
//Null and Undefine

// const isAuthenticatedUser =  undefined;
// const isAuthenticatedUser =  null;
const isAuthenticatedUser =  "";
const userName =  isAuthenticatedUser ?? "Guest";
const userName1 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log({userName},{userName1});

type Manush = {
    name:string,
    age:number,
    address:{
        city:"Chittagong",
        road:"No Road",
        home?:"",
    }
}

const manush1:Manush={
    name:"Md.Hamid Hosen",
    age:23,
    address:{
        city:"Chittagong",
        road:"No Road"
    }
}

const home = manush1?.address.home ?? "No Home";
console.log(home);