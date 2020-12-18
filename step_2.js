'use strict';

let cart = [
    {
        product: "Японский язык для начинающих Ч.1. Нечаева",
        price: 1214
    },
    {
        product: "Японский язык для начинающих Ч.2. Нечаева",
        price: 1214
    },
    {
        product: "Самоучитель японского языка. Лаврентьев",
        price: 1174
    }
];
let basketPrice = 0;
for (let prod of cart){
    basketPrice += prod.price;
    console.log("\"" + prod.product + "\" стоит: " + prod.price + " р.");
}
console.log("Итоговая стоимость: " + basketPrice + " р.");