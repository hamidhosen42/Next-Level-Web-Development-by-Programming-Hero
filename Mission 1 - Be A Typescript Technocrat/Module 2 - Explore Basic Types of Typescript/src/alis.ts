type CrushType={
    name:string,
    age?:number,
    profession:string,
    address:string
}

const crush1:CrushType={
    name:"Md.Hamid Hosen",
    age:24,
    profession:"Student",
    address:"Chittagong"
}

const crush2:CrushType={
    name:"Md.Hamid Hosen1",
    // age:24,
    profession:"Student1",
    address:"Chittagong1"
}
type CrushMarriedTypes=boolean;
const isCrushMarried: CrushMarriedTypes=false;

type CourseNameType = string;
const courseName:CourseNameType="Next Level Web Devlopment";


type OperationType = (x:number,y:number)=>number;

const calculate=(
    number1:number,//10
    number2:number,//20
    operation:OperationType //((x+y) =>x+y)
)=>{
    return operation(number1,number2);
};

calculate(10,20,(x,y)=>x+y);
calculate(10,20,(x,y)=>x-y);
calculate(10,20,(x,y)=>x*y);