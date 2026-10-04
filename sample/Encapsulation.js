var MyBankAccount = /** @class */ (function () {
    function MyBankAccount(initialBalance) {
        this.balance = initialBalance;
        console.log('Inital balance: ', this.balance);
    }
    MyBankAccount.prototype.deposit = function (amount) {
        this.balance -= amount;
    };
    MyBankAccount.prototype.getMyNewBalance = function () {
        return this.balance;
    };
    return MyBankAccount;
}());
var obj = new MyBankAccount(20000);
obj.deposit(4000);
console.log(obj.getMyNewBalance());
