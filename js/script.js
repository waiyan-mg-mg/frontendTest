// get 2 number
// validate whether it is number
// log out number 1 to number 2

let num1, num2;
let state1 = true;
let state2 = true;
while (state1) {
    let input = prompt("Enter Your First Number!.");
    if (Number.isNaN(Number(input))) {
        alert("please add only number");
    }
    else {
        num1 = Number(input);
        state1 = false;
    }
}
while (state2) {
    let input = prompt("Enter Your Second Number!.");
    if (Number.isNaN(Number(input))) {
        alert("please add only number");
    }
    else {
        num2 = Number(input);
        state2 = false;
    }
}

console.log(num1);
console.log(num2);