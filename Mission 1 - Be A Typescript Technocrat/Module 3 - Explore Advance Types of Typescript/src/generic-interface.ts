//Generic Interface

interface CrushInterface<T,U>{
    name:string,
    husband:T,
    wife?:U,
}

const crushs1:CrushInterface<boolean,undefined>={name:"Md.Hamid Hosen",husband:true};
const crushs2:CrushInterface<string,null>={name:"Md.Hamid Hosen",husband:"NO jani"};

interface husbandInterface{
    name:string,
    sallary:number
}
const crushs3:CrushInterface<husbandInterface,unknown>={
    name:"Md.Hamdid Hosen",
    husband:{
        name:"NO Name",
        sallary:2322
    }
};

// Object
interface  PersonInfo{
    name:string,
    age:number
}
const crushs4:CrushInterface<PersonInfo,PersonInfo>={
    name:"Md.Hamdid Hosen",
    husband:{
        name:"No jani",
        age:23,
    },
    wife:{
        name:"Jani",
        age:20
    }
}

type GenericTuple<X,Y> = [X,Y];
const relation:GenericTuple<string,string>=["EDU","BN"];

// type RelationWithSalaryType={name:string,age:number};
interface RelationWithSalaryType{
    name:string,age:number
}

const relationWithSalary:GenericTuple<object,string>=[
    {
        name:"Md.Hamid Hosen",
        age:23,
    },
    "Chittagong"
];

const relationWithSalary1:GenericTuple<RelationWithSalaryType,string>=[
    {
        name:"Md.Hamid Hosen",
        age:23,
    },
    "Chittagong"
];

type GenericArray<T> = Array<T>;
const rollNumbers:GenericArray<number> = [44,23,4];
// const rollNumbers1:Array<string> = ['23','232','23'];
const rollNumbers1:GenericArray<string> = ['23','232','23'];
const rollNumbers2:GenericArray<boolean> = [true,false];

type NameRollType = {name:string,roll:number};

const userNameAndRollNumbers:GenericArray<NameRollType> = [
    {
        name:"Mr.X",
        roll:1
    },
    {
        name:"Mr.Y",
        roll:2
    }
]