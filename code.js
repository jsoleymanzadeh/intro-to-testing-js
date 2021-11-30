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
    if (!!input == false) {
        return false;
    } else {
        return input % 2 == 0;
    }
}

function isVowel(input) {
    if (typeof input === "string") {
        input = input.toLowerCase();
        return input === "a" || input === "e" || input === "i" || input === "o" || input === "u";
    } else {
        return false;
    }
}

// function add(input1, input2) {
//     if (isNaN(input1) || isNaN(input2)) {
//         return "NaN";
//     } else {
//         return Number(input1) + Number(input2);
//     }
// }
function add(input1, input2) {
    return Number(input1) + Number(input2);
}