// import { add as addTwo,sub,mul} from "./other";
// import * as Method from "./other";
// import jakono ,{ add as addTwo,sub,mul,avg} from "./other";
// import jakono  from "./other";

const add = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3;
};

// const res = addTwo(4,6);
// const res1 = sub(5,4);
// const res2 = mul(4,3);
// console.log(Method.add(2,3));

// console.log(avg(3,5));
// console.log(jakono(2,3));

// console.log(jakono.add(2,3));
// console.log(jakono.avg(3,4));


// import addTwo from "./utils/add";
// import sub from "./utils/sub";
// import mul from "./utils/mul";
// import avg from "./utils/avg";

// const res = addTwo(4,6);
// const res1 = sub(5,4);
// const res2 = mul(4,3);
// const res3 = avg(3,3);

import methods from './utils/index';

const res = methods.addTwo(4, 6);
const res1 = methods.sub(5, 4);
const res2 = methods.mul(4, 3);
const res3 = methods.avg(3, 3);