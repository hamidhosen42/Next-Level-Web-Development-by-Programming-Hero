// type GenericTuple<X,Y> = [X,Y];
// const relation:GenericTuple<string,string>=["EDU","BN"];

// // type RelationWithSalaryType={name:string,age:number};
// interface RelationWithSalaryType{
//     name:string,age:number
// }

// const relationWithSalary:GenericTuple<object,string>=[
//     {
//         name:"Md.Hamid Hosen",
//         age:23,
//     },
//     "Chittagong"
// ];

// const relationWithSalary1:GenericTuple<RelationWithSalaryType,string>=[
//     {
//         name:"Md.Hamid Hosen",
//         age:23,
//     },
//     "Chittagong"
// ];

// type GenericArray<T> = Array<T>;
// const rollNumbers:GenericArray<number> = [44,23,4];
// // const rollNumbers1:Array<string> = ['23','232','23'];
// const rollNumbers1:GenericArray<string> = ['23','232','23'];
// const rollNumbers2:GenericArray<boolean> = [true,false];

// type NameRollType = {name:string,roll:number};

// const userNameAndRollNumbers:GenericArray<NameRollType> = [
//     {
//         name:"Mr.X",
//         roll:1
//     },
//     {
//         name:"Mr.Y",
//         roll:2
//     }
// ]