
// simple version with simple trasnaction objects 
(function(exports) {
function Bank (){
 this.transactionList = []
 this.balance = 0
}
Bank.prototype.deposit = function(money){ 
   this.balance += money
this.transactionList.push(new Transaction(money) );
 };
 Bank.prototype.withdraw = function(money){
    this.balance -= money
    this.transactionList.push(new Transaction( - money) );
     };
 exports.Bank = Bank;

})(this);