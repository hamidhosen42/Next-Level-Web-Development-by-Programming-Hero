let amni : any;
amni="Md.Hamid Hosen";

(amni as string).length;
<string> amni.length;
console.log(amni);

function kgToGram(param:string|number):string | number | undefined{
    if (typeof param === "number"){
        const value = param *1000;
        return value;
    }
    if (typeof param === "string")
    {
        const value = parseFloat(param)*1000;
        return `The Converted result is ${value}`;
    }
}

const resultToBeNumber =<number> kgToGram(1000) as number;
const resultToBeString = kgToGram("1000") as string;
const resultToBeUndefine = kgToGram("") as string;

type CustomErrorType={
    message:string
}

try{
    
}catch(err){
    console.log((err as CustomErrorType).message);
}