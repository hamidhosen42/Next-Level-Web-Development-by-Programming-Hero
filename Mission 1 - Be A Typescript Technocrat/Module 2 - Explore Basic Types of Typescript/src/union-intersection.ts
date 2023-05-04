 type NoobDeveloper = {
    name:string;
 }

//  type JuniorDeveloper = {
//     name:string,
//     expertise:string,
//     experience:number
//  }

type JuniorDeveloper = NoobDeveloper & {
    expertise:string,
    experience:number
 }

 type NextLevelDeveloper = JuniorDeveloper & {
    leaderShipExperience:number
 }

 const newDeveloper : NoobDeveloper | JuniorDeveloper={
    name:"Md.Hamid Hosen",
    expertise:"PHP",
    experience:2
 }

 const developer:NextLevelDeveloper={
    name:"sdsd",
    expertise:"sds",
    experience:2,
    leaderShipExperience:3
 }

 console.log(newDeveloper);
 console.log(developer);