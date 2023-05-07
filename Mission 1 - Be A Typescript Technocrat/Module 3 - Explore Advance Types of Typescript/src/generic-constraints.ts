// Spread Operator
type MandatoryType ={
    name:string,
    age:number,
    salary:number
}
interface MandatoryTypeInterface{
    name:string,
    age:number,
    salary:number
}
const addMeInMyCrushMind =<T extends MandatoryTypeInterface> (myInfo:T)=>{
    const crush = "No jani";
    const newData = {...myInfo,crush};
    return newData;
};
type MyInfoType={
    name:string,
    age:number,
    salary:number,
    other:true,
    location:string
}
const myInfo:MyInfoType = {
    name:"Md.Hamid Hosen",
    age:100,
    salary:2000000,
    other:true,
    location:"Chittagong"
}

const result7=addMeInMyCrushMind(myInfo);
console.log(result7.age);
console.log(result7.crush);
console.log(result7.name);
console.log(result7.salary);