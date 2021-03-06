'use strict';

/**
    Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в
    градусах по Фаренгейту. Подсказка: расчёт идёт по формуле:
    Tf = (9 / 5) * Tc + 32;
    где Tf – температура по Фаренгейту, Tc – температура по Цельсию
 */

const tempC = prompt("Введите тем-ру в градусах цельсия");

const tempF = (9 / 5) * tempC + 32;

alert(`Температура по Фаренгейту ${tempF}`);


/**
    Объявить две переменные: admin и name. Записать в name строку "Василий". Скопировать
    значение из name в admin. Вывести в консоль переменную admin (должно вывести "Василий").
 */

let admin = "",
    name = "";

name = "Василий"
admin = name;
console.log(admin);

/**
    Вывести в консоль значения выражений и объяснить почему получились такие значения
    используя комментарии к каждому выражению:
 */

/*
1 10 складываем с 10 получаем 20
2 20 складываем со строкой "10" получаем строку "2010"
*/
console.log(10 + 10 + "10");

/*
1 10 складываем со строкой 10 получаем строку "1010"
2 строку "1010" складываем с 10 получаем строку "101010"
*/
console.log(10 + "10" + 10);

/*
1 10 прибавляется к 10 получается 20
2 20 прибавляется к положительному число 10, которое было конвертировано из строки, получается 30
*/
console.log(10 + 10 + +"10"); // (обратите внимание на пробелы, пишите также)

/*
1 10 делится на 0 как число, т.к. пустая строка приводится к number 0, получается бесконечность
*/
console.log(10 / -"");

/*
1 10 делится на NaN получается NaN, т.к. он не может привести к number 2,5. Правильно будет 10/ +"2.5"
*/
console.log(10 / +"2,5"); // (да здесь запятая, это не опечатка)