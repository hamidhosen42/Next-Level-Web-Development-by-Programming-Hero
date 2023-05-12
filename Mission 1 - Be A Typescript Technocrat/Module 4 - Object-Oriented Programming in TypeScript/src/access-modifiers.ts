class BankAccount{
    id:number;
    protected name:string;
    private _balance:number;

    constructor(id:number,name:string,balance:number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    getBalance(){
        console.log(`My current Balance is : ${this._balance}`);
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

const myAccount = new BankAccount(11,"Hamid Hosen",20);
console.log(myAccount);