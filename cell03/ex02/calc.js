var form = document.getElementById("calc-form");
var leftInput = document.getElementById("left");
var rightInput = document.getElementById("right");
var operatorSelect = document.getElementById("operator");

function isPositiveInteger(value) {
    var text = value.trim();
    var number = Number(text);

    if (text === "") {
        return false;
    }
    if (isNaN(number)) {
        return false;
    }
    if (number < 0) {
        return false;
    }

    if (number % 1 !== 0) {
        return false;
    }

    return true;
}

function compute(left, operator, right) {
    if (operator === "+") {
        return left + right;
    }
    if (operator === "-") {
        return left - right;
    }
    if (operator === "*") {
        return left * right;
    }
    if (operator === "/") {
        return left / right;
    }
    return left % right;
}

function onSubmit(event) {

    event.preventDefault();

    var leftValue = leftInput.value;
    var rightValue = rightInput.value;
    var operator = operatorSelect.value;

    if (!isPositiveInteger(leftValue) || !isPositiveInteger(rightValue)) {
        alert("Error :(");
        console.log("Error :(");
        return;
    }

    var left = Number(leftValue);
    var right = Number(rightValue);

    if (operator === "/" && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }
    if (operator === "%" && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    var result = compute(left, operator, right);

    alert(result);
    console.log(result);
}

form.addEventListener("submit", onSubmit);

setInterval(function () {
    alert("Please, use me...");
}, 30000);
