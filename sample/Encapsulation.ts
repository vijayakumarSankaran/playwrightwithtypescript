class MyBankAccount{
    private balance:number;

    constructor(initialBalance:number){
        this.balance = initialBalance;
        console.log('Inital balance: ' , this.balance);
        
    }
  deposit(amount:number){
    this.balance -= amount
  }

  getMyNewBalance(): number{
    return this.balance;
  }
}

const obj = new MyBankAccount(20000);
obj.deposit(4000);
console.log(obj.getMyNewBalance());

