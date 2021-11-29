// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input !== "string") {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input) {
    return input == 5;
}

function isEven(input) {
    if (input == 0) {
        return false;
    } else {
        return input % 2 == 0;
    }
}

function isVowel(input) {
    if (typeof input === "string") {
        return input.toLowerCase() === "a" || input.toLowerCase() === "e" || input.toLowerCase() === "i" || input.toLowerCase() === "o" || input.toLowerCase() === "u";
    } else {
        return false;
    }
}

function add(input1, input2) {
    if (isNaN(input1) || isNaN(input2)) {
        return "NaN";
    } else {
        return Number(input1) + Number(input2);
    }
}
