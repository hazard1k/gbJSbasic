'use strict';

/**
    (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на
    вход число в диапазоне [0, 999],
    мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
    - единицы (в свойстве units)
    - десятки (в свойстве tens)
    - сотни (в свойстве hundereds)
    Например, для числа 45 мы должны получить следующий объект:
    units: 5, //это единицы
    tens: 4, //это десятки
    hundreds: 0, //это сотни
    Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
    необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */

function res() {}
res.prototype.SetUnits = function(int) {
    this.units = int;
}
res.prototype.SetTens = function(int) {
    this.tens = int;
}
res.prototype.SetHundreds = function(int) {
    this.hundreds = int;
}

const a = function(intStr) {

    let int = +intStr.replace(',', '.');
    let result = new res;
    if (isNaN(int) || !Number.isInteger(int) || int < 0 || int > 999) {
        console.log('не подходящее значение');
        return result;
    }

    let cnt = 0;
    for (let index = intStr.length - 1; index >= 0; index--) {

        let action = function() {};

        switch (cnt) {
            case 0:
                action = result.SetUnits;
                break;
            case 1:
                action = result.SetTens;
                break;
            case 2:
                action = result.SetHundreds;
                break;
            default:
                break;
        }
        action.call(result, parseInt(intStr[index]));
        cnt++;
    }
    return result;
}


console.log(a(prompt("Введите число")))