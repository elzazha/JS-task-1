/* 1-Е ЗАДАНИЕ

1. Простое сообщение: сохраните текстовое сообщение в переменной и выведите его в браузере */

let sayHello = "Hello my first script";
alert(sayHello);
console.log(sayHello);

/*2. Простые сообщения: сохраните сообщение в переменной и выведите это сообщение. Затем замените значение переменной другим сообщением и выведите новое сообщение*/
let myMessage = "This message should be changed";
myMessage = "It was changed";
alert(myMessage);

/*3. Напишите несколько строк кода, выводящих на экран ваше имя и почтовый адрес.*/
let userName = "My name is Aya";
let userEmail = "Aikyz.95@mail.ru";
alert(userName);
alert("My E-mail address is " + userEmail);

/* 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.*/

let souvenir = 75;
let trinket = 112;

let mySouvenir = Number(prompt("Введите количество ваших сувениров?"));
let myTrinket = Number(prompt("Введите количество ваших безделушек?"));

alert(
  "Общий вес вашей покупки: " +
    (souvenir * mySouvenir + trinket * myTrinket) / 1000 +
    "кг"
);

/*5. Создайте программу, которая запрашивает у пользователя два целых числа **a** и **b**, после чего выводит на экран результаты следующих математических операций: 
    
    - сумма a и b; 
    
    - разница между a и b;
    
    - произведение a и b; 
    
    - частное от деления a на b; 
    
    - остаток от деления a на b;  
    
    - результат возведения числа a в степень b*/

let a = Number(prompt("Введите А число?"));
let b = Number(prompt("Введите В число?"));

alert("Cумма ваших чисел равна = " + (a + b));
alert("Разница ваших чисел равна = " + (a - b));
alert("Произведение ваших чисел равен = " + a * b);
alert("Деление ваших чисел равен = " + a / b);
alert("Остаток ваших чисел равен = " + (a % b));
alert("Степени ваших чисел равны = " + a ** b);
