function Client(fullName) {
  this.fullName = fullName;
  this.creditLimit = 2000;
  this.balance = 1000;
  this.percentOfMinPayment = 10;

  this.getBalance = function () {
    if (this.balance === 0 && this.creditLimit <= 2000) {
      const debt =
        2000 -
        this.creditLimit +
        (2000 - this.creditLimit) * (this.percentOfMinPayment / 100);
      console.log(`Your debt is ${debt}`);
    } else if (
      this.balance > 0 &&
      this.creditLimit !== 0 &&
      this.creditLimit <= 2000
    ) {
      const debt =
        this.creditLimit -
        this.balance +
        (this.creditLimit - this.balance) * (this.percentOfMinPayment / 100);
      console.log(`Your balance is ${this.balance}, and your debt is ${debt}`);
    } else if (this.balance > 0) {
      console.log(`Your balance is ${this.balance}, you don't have any debts`);
    } else {
      console.log(`No debt or balance.`);
    }
  };

  this.withdraw = function (amount) {
    if (amount > this.balance + this.creditLimit) {
      console.log(`You don't have enough funds to fulfill your request`);
    } else if (amount > this.balance) {
      const diff = amount - this.balance;
      this.balance = 0;
      this.creditLimit -= diff;
    } else {
      this.balance -= amount;
    }
  };

  this.refill = function (amount) {
    if (this.creditLimit === 0) {
        this.balance += amount;
    } else {
        const totalBalance = this.balance + this.creditLimit;
        if (amount >= totalBalance) {
            const remainingAmount = amount - totalBalance;
            this.balance = 0;
            this.creditLimit = 0;
            this.balance += remainingAmount;
        } else {
            this.creditLimit -= amount;
        }
    }
};

}

const client = new Client("Sonia");
client.getBalance();
client.refill(9000);
client.getBalance();
//#endregion
// //#region homeTask2
// let result
// function Calc(n1, op,n2) {
//     switch (op) {
//         case `+`:
//             result = n1+n2
//             break;
//         case `-`:
//             result = n1-n2
//             break;
//         case `*`:
//             result = n1*n2
//             break;
//         case `/`:
//             result = n1/n2
//             break;

//         default:
//             break;
//     };
// }
// Calc(6,8)

//#endregion
