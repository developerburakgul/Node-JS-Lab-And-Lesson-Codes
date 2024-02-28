import { test } from "./test.js";

export function add(number1,number2) {
    return number1 + number2;
};

export function sub(number1,number2) {
    return number1 - number2
};

export function anotherFunction(number1,number2) {
    return number1 - test(number1,number2)
}


