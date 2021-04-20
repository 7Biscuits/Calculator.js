var num_1;
var num_2;
var operator;
var add;
var sub;
var mul;
var div;


num_1 = parseFloat(prompt("Enter the first number: "));
num_2 = parseFloat(prompt("Enter the second number: "));
operator = prompt("Enter the operator: ");

function addition() {
    add = num_1 + num_2;
    return add;
}

function subtraction() {
    sub = num_1 - num_2;
    return sub;
}

function multiplication() {
    mul = num_1 * num_2;
    return mul;
}

function division() {
    div = num_1 / num_2;
    return div;
}

if (operator == "+") {
    alert(num_1 + "+" + num_2 + "=" + addition());
    console.log(num_1 + "+" + num_2 + "=" + addition());
}

else if (operator == "-") {
    alert(num_1 + "-" + num_2 + "=" + subtraction());
    console.log(num_1 + "-" + num_2 + "=" + subtraction());
}

else if (operator == "*") {
    alert(num_1 + "*" + num_2 + "=" + multiplication());
    console.log(num_1 + "*" + num_2 + "=" + multiplication());
}

else if (operator == "/") {
    alert(num_1 + "/" + num_2 + "=" + division());
    console.log(num_1 + "/" + num_2 + "=" + division());
}

else {
    alert("Invalid Input");
    console.log("Invalid Input");
}

alert("Please open the console window to see the result or press ctrl + shift + j");
