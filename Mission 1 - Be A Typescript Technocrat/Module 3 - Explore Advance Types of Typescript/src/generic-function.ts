//Arrow function

const createArray = (param:string):string[]=>{
    return [param];
}

const createArray1 = <T>(param:T):T[]=>{
    return [param];
}

const result1 = createArray1<string>("Chittagong");
const result2 = createArray1<boolean>(true);
type Name={
    name:string,
    age:number
}
const result3 = createArray1<Name>({name:"Md.Hamid Hosen",age:34});

//tuple using generic function

const createArray2 = <X,Y>(param1:X,param2:Y):[X,Y]=>{
    return [param1,param2];
}

function createArray3<X,Y>(param1:X,param2:Y):[X,Y]{
    return [param1,param2];
}

const result4 = createArray2<string,string>("Chittagong","Dhaka");
const result5 = createArray2<boolean,Array<string>>(true,["USA"]);
type Name1={
    name:string,
    age:number
}
const result6 = createArray2<Name,string>({name:"Md.Hamid Hosen",age:34},"sds");

// Spread Operator

const addMeInMyCrushMind =<T> (myInfo:T)=>{
    const crush = "No jani";
    const newData = {...myInfo,crush};
    return newData;
};
const myInfo = {
    name:"Md.Hamid Hosen",
    age:100,
    salary:2000000
}

const result7=addMeInMyCrushMind(myInfo);
console.log(result7.age);
console.log(result7.crush);
console.log(result7.name);
console.log(result7.salary);