/* exported Account */
function Account(number, holder) {
  if (number > 0) {
    this.number = number;
    number++;
  }
  if (typeof holder === typeof '') {
    this.holder = holder;
  }
}

// Account.prototype.deposit = function () {
//   if (type < 0) {
//     return false;
//   } else {
//     this.deposit = deposit;
//   };

// Account.prototype.withdraw = function () {
//   // this.withdrawal = Transaction.withdraw;
// };

// Account.prototype.getBalance = function () {

// };

// Account.prototype.transactions = function () {
//   var transactionArray = [];
//   for (var i = 0; i < transactionArray.length; i++) {
//     this.transactions = transactionArray.push(new Transaction());
//   }
// };
