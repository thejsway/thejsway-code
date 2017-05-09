/*
Bank account list
*/

// Account class
class Account {
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
}

const accountList = [];
// Add 3 accounts to the list
accountList.push(new Account("Sean"));
accountList.push(new Account("Brad"));
accountList.push(new Account("Georges"));

// Credit and describe each account
accountList.forEach(account => {
  account.credit(1000);
  console.log(account.describe());
});
