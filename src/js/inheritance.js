class Human {
  constructor (name, age, city = "Kaluga") {
    this.name = name;
    this.age = age;
		this.city = city;
  } 
    
	getName() {
		return console.log("Имя пользователя", this.name);
	}
    
	getAge() {
		return console.log("Возраст пользователя", this.age);
	}

	getFullDataOfUser() {
		return console.log(`У пользователя ${this.name}, возраст: ${this.age}`);
	}

	// #privatMethod() {}

}

const kristina = new Human("Кристина", 32);
kristina.getFullDataOfUser();

class Man extends Human {
	constructor (name, age, city, car) {
		super(name, age);
		this.car = car;
		this.city = city;
	}

	getCar() {
		console.log(`У пользователя ${this.name}, машина - ${this.car}`);
	}

	getCity() {
		console.log(`${this.city}`);
	}
}

const vitya = new Man('Витя', 32, 'Tula', 'UAZ');
vitya.getName();
vitya.getCity();
vitya.getCar();

class Women {
	constructor () {

	}
}

