/*
Object-oriented bank account
*/

const account = {
  owner: "Alex",
  balance: 0,

  // Add an amount to the bank balance
  credit(amount) {
    this.balance += amount;
  },

  // Return account description
  describe() {
    return `owner: ${this.owner}, balance: ${this.balance}`;
  }
};

console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());
