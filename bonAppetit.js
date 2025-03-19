
var bill = [ 3, 10, 2, 9 ];
var k = 1;
var b = 12;

function bonAppetit(bill, k, b) {
    bill.splice(k, 1);
    let counter = 0;
    let balance = 0;
    let total = 0;
    for (let i = 0; i < bill.length; i++) {
        counter = counter + bill[i];
    }
    total = counter/2;
    balance = b - total;
    console.log(balance);
    if (balance == 0) {
        return "Bon Appetit";
    } else {
        return balance;
    }
}

console.log(bonAppetit(bill, k, b));