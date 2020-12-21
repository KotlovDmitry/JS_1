'use strict';

let digit = {
    number: +prompt('Введите число от 0 до 999'),
    units: 0,
    tens: 0,
    hundreds: 0,
};
if (digit.number <= 9){
    digit.units = digit.number;
    console.log('Единиц: ', digit.number);
} else if (digit.number > 9 && digit.number <= 99){
    digit.units = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    console.log('Единиц: ', digit.units);
    console.log('Десятков: ', digit.tens);
} else if (digit.number > 99 && digit.number <= 999) {
    digit.units = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    digit.hundreds = Math.floor(digit.number / 100 % 10);
    console.log('Единиц: ', digit.units);
    console.log('Десятков: ', digit.tens);
    console.log('Сотен: ', digit.hundreds);
} else {
    digit.number = 0;
    console.log('Вы ввели число, не входящее в указанный диапазон');
};