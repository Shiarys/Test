"use strict";

//Циклы

let i = 5; // вывод от 1 до 10
 while (i < 10) {
  console.log(i);
  i++;
}

for (let i = 20; i > 9; i--) // вывод от 20 до 10. на 13 остановка цикла
 {
 if (i == 13) break;
    console.log(i); 
 }