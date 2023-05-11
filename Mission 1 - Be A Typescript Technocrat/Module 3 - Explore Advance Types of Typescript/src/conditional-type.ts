// a type is dependent on another type
type a1 = number;
type a2 = undefined;
type a3 = number;

type a4 = a1 extends string ? string : null;
// nested condition
type d = a1 extends null ? null : a2 extends number ? number : a3 extends null ? null : never; 

type Sheikh = {
    wife1: string;
    wife2: string;
  };
  
type A = keyof Sheikh; // 'wife1' | 'wife2'
// 'wife3' extends 'wife1' | 'wife2
type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;

type CheckWife2 = CheckProperty<Sheikh, "girlfriend">;

// check korbe ei Sheikh Type a wife3 ase kina ? true : false

//Matha Kharap Example

type Bandhubi = "Monika" | "Rachel" | "Pheobe";

type RemoveBadhubi<T, K> = T extends K ? never : T;

type CurrentBandhubi = RemoveBadhubi<Bandhubi, "Rachel">;