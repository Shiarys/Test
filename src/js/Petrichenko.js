// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// let task1 = 5;
// while (task1 < 10) {
//   console.log(task1);
//   task1++;
// }

// for (let task2 = 20; task2 > 9; task2--)
//   {
//     if (task2 == 13) break;
//     console.log(task2); 
//   }


// for (let i = 1; i < 6; i++) {
// 	console.log(i);
// }

//spread

// let arr = [2, 4, 8, 6, 0];
// let max = Math.max(...arr);
// console.log(max);

// a = 0;

// if (a == 5) {
// 	console.log("пять");
// } else if (a == 3) {
// 	console.log("три");
// } else if (a == 1) {
// 	console.log("один");
// } else {
// 	console.log("Не угадали");
// }

// a = 5;

// switch (a) {
// 	case 1: 
// 	console.log("один");
// 	break;

// 	default:
// 		console.log("Нипанятна");

// }

//rest

// const pizza = ['Pepperoni', 2222, 5, 6, 10, 30, 1];
// const [name, id, ...rest] = pizza;
// console.log(name);
// console.log(id); 
// console.log(rest);



function sumAll(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert(sumAll(1));
alert(sumAll(1, 2));
alert(sumAll(1, 2, 3));


//Promise

let momsPromise = new Promise(function(resolve, reject) {
  momsSavings = 20000;
  priceOfPhone = 60000;
  if (momsSavings > priceOfPhone) {
    resolve({
      brand: "iphone",
      model: "6s"
    });
  } else {
    reject("We donot have enough savings. Let us save some more money.");
  }
});
momsPromise.then(function(value) {
  console.log("Hurray I got this phone as a gift ", JSON.stringify(value));
});
momsPromise.catch(function(reason) {
  console.log("Mom coudn't buy me the phone because ", reason);
});
momsPromise.finally(function() {
  console.log(
    "Irrespecitve of whether my mom can buy me a phone or not, I still love her"
  );
});


//this

let user = { name: "Джон" };
let admin = { name: "Админ" };

function sayHi() {
  console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f(); 
admin.f(); 

admin['f'](); 