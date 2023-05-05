const names: string[] = ['Apple', 'Orange', 'Banana'];
const rollNumber: number[]=[12,34,34]

rollNumber[8]=345
// rollNumber[9]="sfds"
rollNumber.map(roll => console.log(roll));
names.map(name => console.log(name));

const names1= ['Apple', 'Orange', 'Banana',23,34,true];
names1.push("Hamid");
console.log(names1);

// tuple
const names2 =['Hamid',23];
names2[0] = "Hosen"
names2[1] = "Azad"
console.log(names2);

const names3:[number,string] = [23,"Asif"];
names3[0] = 50;
names3[1] = "Mikdad";
console.log(names3);