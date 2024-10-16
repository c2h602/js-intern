// 1. Отличие в объявлении переменных через var, let и const

let a = 1; /* адекватная переменная с нормальным поведением --
нельзя повторно объявлять, можно переопределять, блочная область видимости */ 

const b = 2; // как и let, но константа, не изменяется, блочная область видимости

var c = 3; // устаревшая переменная,
var c = 7; // потому что с ней можно делать так (повторно создать)
// функциональная область видимости

// Примеры:

function varExample() {
    if (true) {
        var x = 10; // переменная внутри функции
    }
    console.log(x); // var видна за пределами блока if
}

function letExample() {
    if (true) {
        let y = 20; // видима только внутри блока if
    }
    console.log(y);
}

varExample(); // 10
letExample(); // ReferenceError


// 2. Отличие в разных типах данных (примитивных и ссылочных)

// Примитивы (string, number, boolean, symbol, null, undefined и bigint)

let i = 2;
let j = i; 
i = 3; 
console.log(i, j) // 3, 2

/* Таким образом, копируется само значение, 
поэтому при изменении переменной i, значение j остаётся неизменным */

// Объекты (Object, Array, Function)

let obj1 = {name: "Max"};
let obj2 = obj1;
console.log(obj1, obj2) // {name: 'Max'} {name: 'Max'}
obj1.name = "Alex"
console.log(obj1, obj2) // {name: 'Alex'} {name: 'Alex'}

/* Таким образом, при присваивании копируется ссылка на значение,
поэтому изменения свойств obj1 затрагивают obj2*/

// Объекты-обертки

// К ним относятся String, Number, Boolean, Symbol, BigInt

/* Это тот случай, когда примитивы могут вести себя как объекты,
когда мы обращаемся к методам или свойствам примитивов */

// Примеры:

let str = "hello";
let strObj = new String("hello")
console.log(strObj); // String {'hello'}
console.log(str.length); // 5
console.log(str.toUpperCase()); // "HELLO"


// 3. Отличие в написании циклов через for, while и do ... while.

// for(;;) – проверяет условие перед каждой итерацией, можно задать доп. условия

for (let i = 0; i < 3; i++) { 
    console.log(i); // 0, 1, 2
}

// while – проверяет условие перед каждой итерацией

let i = 0;
while (i < 3) { // 1, 2, 3
    i++;
    console.log(i);
}

// do..while – проверяет условие после каждой итерации

let i = 0;
do {
    i++;
	console.log(i); // 1, 2, 3
} while (i < 3);


// 4. Использование условного и тернарного оператора

// Пример 1:

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

result = a + b < 4 ? "Мало" : "Много";

// Пример 2:

let message;

if (login == 'Сотрудник') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}

let message = 
    login == 'Сотрудник' ? 'Привет' :
    login == 'Директор' ? 'Здравствуйте' :
    login == '' ? 'Нет логина' :
    '';

