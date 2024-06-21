//#region homeTask1
function User(fullName) {
    this.fullName =fullName;
    this.creditLimit = 1000;
    this.balance = 0;
    this.percentOfMinPayement = 10
}

const client = new User(`Sonia`)
console.log(client);