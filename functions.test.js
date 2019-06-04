 const Bank = require('./functions')

 describe('Bank', function(){
    var bank;
    beforeEach(function(){
      bank = new Bank();
    });
    test('see balance' ,function(){
        expect(bank.balance).toBe(0)
        })

test('adds 100 to the balance', function(){
    bank.add(100)
    expect(bank.balance).toBe(100);
});
test('withdraws 100 from account', function(){
    bank.add(1000)
    bank.withdraw(100)
    expect(bank.balance).toBe(900);
});


});