'use strict';

/**
    Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
    где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
    переданного значения операции (использовать switch) выполнить одну из арифметических
    операций
    (использовать функции из задания 4) и вернуть полученное значение.
 */

function mathOperation(arg1, arg2, operation) {
    let result;
    switch (operation) {
        case "+":
            result = sum(arg1, arg2)
            break;
        case "-":
            result = sub(arg1, arg2)
            break;
        case "/":
            result = div(arg1, arg2)
            break;
        case "*":
            result = tim(arg1, arg2)
            break;
        default:
            console.error("wrong math operation: ", operation)
            break;
    }

    return result
}

console.log(mathOperation(10, 2, "+"))
console.log(mathOperation(10, 2, "-"))
console.log(mathOperation(10, 2, "/"))
console.log(mathOperation(10, 2, "*"))