type PersonType = {
    name:string,
    age:number,
    address:string
}

type newType="name"|"age"|"address";//manually korsi
type newTypeUsingKeyOf = keyof PersonType

const a:newType='age';
const b:newType='name';
const c:newType='address';

function getProperty<X,Y extends keyof X>(obj:X,key:Y){
    obj[key];
}
const property = getProperty({name:"Md.Hamid Hosen",age:21},"age");