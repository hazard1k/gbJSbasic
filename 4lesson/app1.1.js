'use strict';

/**
  Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры
наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name и price, сохраните
их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет
уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен быть внутри
функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).
 */

// ES5

function ProductES5(name, price) {
    this.name = name;
    this.price = price;
}

ProductES5.prototype.make25PercentDiscount = function() {
    this.price *= 0.75;
}


let someProduct5 = new ProductES5("some", 1000);
console.log(someProduct5.price);
someProduct5.make25PercentDiscount();
console.log(someProduct5.price);


class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount = function() {
        this.price *= 0.75;
    }
}

let someProduct6 = new ProductES6("some", 1000);
console.log(someProduct6.price);
someProduct6.make25PercentDiscount();
console.log(someProduct6.price);