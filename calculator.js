function calculator(str){
    //regex to match the numbers and the operators
    var regex = /(\d+)(\+|\-|\*|\/)(\d+)/;
    console.log(regex);
    //use match method to get the numbers and the operators
    var match = str.match(regex);
    console.log(match);
    //use ParseInt to convert the mumbers top integers
    var num1 = parseInt(match[1]);
    console.log(num1);
    var num2 = parseInt(match[3]);
    console.log(num2);
    //use switch statement to perform the operation
    switch(match[2]){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}
//test calculator function
console.log(calculator("2+3"));
console.log(calculator("2-3"));
console.log(calculator("2*3"));
console.log(calculator("2/3"));

//create unit test for calculator function
var assert = require("assert");
assert.equal(calculator("1+1"), 2);
assert.equal(calculator("1-1"), 0);
assert.equal(calculator("1*1"), 1);
assert.equal(calculator("1/1"), 1);


