class BankAccount{
    id:number;
    name:string;
    private _balance:number;

    constructor(id:number,name:string,balance:number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    // getter
    get balance():number{
        return this._balance;
    }

    // setter
    set deposite(amount:number){
        this._balance = this._balance + amount; 
    }
    getBalance():number{
        // console.log(`My current Balance is : ${this._balance}`);
        return this._balance;
    }

    addDeposit(amount:number){
        this._balance = this._balance + amount;
        console.log(this._balance);
    }
}

class StudentAccount extends BankAccount{
    test(){
        this.getBalance();
    }
}

const myAccount = new BankAccount(11,"Hamid Hosen",50);
console.log(myAccount);
// myAccount.addDeposit(20);
// myAccount.getBalance();
// myAccount.getBalance();
// console.log(myAccount.getBalance());
console.log(myAccount.balance);
myAccount.deposite = 50;
console.log(myAccount.balance);