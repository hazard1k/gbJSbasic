'use strict';

/**
     Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
    параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
    и возвращать результат.
    Обязательно использовать оператор return.
 */

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function tim(a, b) {
    return a * b;
}

console.log(sum(10, 2));
console.log(sub(10, 2));
console.log(div(10, 2));
console.log(tim(10, 2));