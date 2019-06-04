(function(exports) {

function Transaction (money){
this.date = new Date
this.transaction =  money
};

// Transaction.prototype.deposit = function(money){
    
//     return (this.balance += money , this.transactionammount = money)
// };
// Transaction.prototype.withdraw = function(money){
//     return (this.balance -= money , this.transactionammount =  -money)
// };

exports.Transaction = Transaction;
// exports.Transaction.deposit = Transaction.deposit;
})(this);