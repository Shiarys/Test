"use strict";

const soldier = { //объект прототип
  health: 400,
  armor: 100,
	sayHello: function() {
		console.log("Hello");
	}
};

const john = { // объект, который будет наследовать от прототипа
	health: 100
};

// устеревший метод
john.__proto__ = soldier;

console.log(john); // вывод { health: 100 }
console.log(john.armor); // вывод 100. john унаследовал armor.
john.sayHello(); //вывод Hello


//современный подход

Object.setPrototypeOf(john, soldier); // (объект - которому назначается прототип, объект - прототип которого устанавливаем) Такая конструкция используется, если john уже существовал. Установили ему прототип.

const john = Object.create(soldier); //создаем новый объект john, который будет прототипно наследоваться от soldier.