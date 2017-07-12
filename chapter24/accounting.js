/*
Accounting module
*/

// Export an Account class
module.exports = class Account {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
  }
  // Add an amount to the bank balance
  credit(amount) {
    this.balance += amount;
  }
  // Return account description
  describe() {
    return `owner: ${this.owner}, balance: ${this.balance}`;
  }
};
