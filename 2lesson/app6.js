'use strict';

/**
   Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
    положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
    "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
    "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
    "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
    То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
    числа.
 */

function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2]
    let currentCase
    if (number % 100 > 4 && number % 100 < 20) {
        currentCase = 2
    } else if (number % 10 < 5) {
        currentCase = cases[number % 10]
    } else {
        currentCase = cases[5]
    }
    return titles[currentCase]
}

const titles = ["рубль", "рубля", "рублей"];


const input = prompt("Введити сумму")

alert(`Ваша сумма в ${input} ${declOfNum(input, titles)} успешно зачислена.`)