/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var number = this.nextAccountNumber;
    var newAccount = new Account(number, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (number === this.accounts[i].number) {
      var findAccount = this.accounts[i];
      return findAccount;
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  } else {
    var totalAssets = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      totalAssets += this.accounts[i].getBalance(this.accounts[i]);
    }
    return totalAssets;
  }
};
