'use strict';

/**
    Объясните почему код даёт именно такие результаты?
 */
debugger
//пример 1
let a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c); // ответ: 2

// Ответ: сначала идет инкремент "a"(1+1 = 2), затем присваивание значения в "с" (с = 2)
//пример 2
d = b++;
alert(d); //ответ: 1
// Ответ: сначала присваивание (d=1), затем только инкремент "b" на 1

//пример 3
c = 2 + ++a;
alert(c); //ответ: 5

// Ответ: т.к. "а" у нас было инкрементировано в примере 1, то его значение = 2, делается его инкремент, значение a = 3, добавляем 2 (2+3) = 5

//пример 4
d = 2 + b++;
alert(d); //ответ: 4

// Ответ: b = 2, исохдя из придыдущих инкрементов, сначала добавляем 2, и делаем присваивание (d=4), а затем делаем инкремент b (b=3)
alert(a); //3
// Ответ: исходя из придыдущих инкрементов
alert(b); //3
// Ответ: исходя из придыдущих инкрементов