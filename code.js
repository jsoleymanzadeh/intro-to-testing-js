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
    if(input == 0) {
        return false;
    } else {
        return input % 2 == 0;
    }
}