/* exported Transaction */

function Transaction(type, amount) {
  if (type === 'deposit' || type === 'withdrawal') {
    this.type = type;
  }
  if (amount > 0) {
    this.amount = amount;
  }
}
