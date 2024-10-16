// 1. Методы массивов, функций, объектов, коллекций

// Методы массивов

let arr = [1, 2, 3, 4];

// Добавление/удаление

arr.push(5);             // Добавляет элемент в конец массива
arr.pop();               // Удаляет последний элемент массива
arr.shift();             // Удаляет первый элемент массива
arr.unshift(0, 1);       // Добавляет элементы в начало массива
arr.splice(1, 2, "a");   // Удаляет элементы и добавляет новые, начиная с указанного индекса
let sliced = arr.slice(1, 3); // Создаёт новый массив, копируя элементы из указанного диапазона
let combined = arr.concat(sliced); // Объединяет два или более массивов в один

// Поиск

arr.indexOf(3);          // Возвращает индекс первого вхождения элемента или -1, если не найдено
arr.includes(4);         // Проверяет наличие элемента в массиве
let found = arr.find(x => x > 2); // Находит первый элемент, соответствующий условию
let filtered = arr.filter(x => x > 2); // Возвращает новый массив всех элементов, соответствующих условию
let idx = arr.findIndex(x => x > 2); // Находит индекс первого элемента, соответствующего условию

// Перебор

arr.forEach(x => console.log(x)); // Выполняет функцию для каждого элемента массива

// Преобразование

let mapped = arr.map(x => x + ""); // Создаёт новый массив, применяя функцию к каждому элементу
arr.reverse();            // Меняет порядок элементов на противоположный
let joined = arr.join("-"); // Объединяет элементы массива в строку, используя разделитель
let reduced = arr.reduce((sum, x) => sum + x, 0); // Уменьшает массив до одного значения на основе функции

// Проверка массива

Array.isArray(arr);       // Проверяет, является ли переменная массивом


// Методы объектов — функции, которые являются свойством объекта.

let user = {
    name: "John",
    age: 30,

    sayHi() { // метод объекта user
        let name = "Ben";
        console.log(this.name);
    }
};

user.sayHi(); // John


// Методы коллекций

let map = new Map([
    ['name', 'Alice'],
    [1, 'number one'],
]);

map.set('age', 25);    // Добавляет значение по указанному ключу

console.log(map.get('name')); // Возвращает значение по ключу, если он существует

console.log(map.has(1));       // Проверяет, существует ли ключ
console.log(map.has('notExist')); // Проверяет наличие несуществующего ключа

map.delete('age');           // Удаляет элемент по ключу

map.clear();                 // Удаляет все элементы

console.log(map.size);       // Возвращает количество элементов

////////////////////////////////////////////////////////////////////////////////

// 2. Отличие стрелочных функций от обычных

// a. Нет this

const obj = {
    name: "Ben",

    getName: () => {
        return this.name; // Стрелочная функция использует 'this' из внешнего контекста
    },
};

console.log(obj.getName()); // undefined, так как 'this' не указывает на obj

// b. Не могут быть вызваны с new

const arrowFunc = () => { };
const example = new arrowFunc(); // TypeError: arrowFunc is not a constructor

// c. Не имеют arguments

const arrowFunction = () => {
    console.log(arguments);
};

arrowFunction(1, 2, 3); // ReferenceError: arguments is not defined

///////////////////////////////////////////////////////////////////////////////

// 3. Spread/Rest, деструктуризация (объектов и массивов)

// Spread — позволяет разворачивать массивы и объекты

// С массивами:

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

// С объектами:

const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 };
console.log(newObj); // { a: 1, b: 2, c: 3 }

// Rest — остаточный параметр, представляющий неограниченное кол-во аргументов в виде массива

function myFun(a, b, ...manyMoreArgs) {
    console.log(a); // один
    console.log(b); // два
    console.log(manyMoreArgs); // [три, четыре, пять, шесть]
}

myFun("один", "два", "три", "четыре", "пять", "шесть");

/* Деструктуризация - способ, позволяющий извлекать значения 
из массивов или объектов и присваивать их переменным */

// С массивами:

let [firstName, lastName] = ["Ryan", "Gosling"]

console.log(firstName); // Ryan

console.log(lastName); // Gosling

// С объектами:

let person = {
    name: "Anna",
    age: 23,
};

let { name, age } = person;

console.log(name, age); // Anna 23

// Деструктуризация остаточных параметров

function f(...[a, b, c]) {
    return a + b + c;
}

f(1);          // NaN (b и c равны undefined)
f(1, 2, 3);    // 6
f(1, 2, 3, 4); // 6 (четвёртый параметр не деструктурирован)

//////////////////////////////////////////////////////////////////////////////

// 4. Классы

// Классы - разновидность функции. Имеют следующий синтаксис:

class User {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name)
    }
}

let user = new User("Max");
user.sayName();

condoele.log(typeof User); // function

// Классы похожи на функции, но у них есть отличия:

// a. Конструктор класса нельзя вызвать без new:
class User {
    constructor() { }
}

User(); // Error: Class constructor User cannot be invoked without 'new'

// b. Методы класса являются неперечисляемыми
// c. Классы всегда используют use strict
/* d. Главное отличие от функций -- возможность инкапсулировать свойства, 
создавать приватные поля. Использование кдассов повышает читабельность и 
задает понятную структуру кода */

// Пример:

class CoffeMachine {
    #power; // приватное свойство

    constructor(power, waterAmount) {
        this.power = power;
        this.waterAmount = waterAmount;
    }

    // set и get

    set power(value) { // проверка производится в сеттере и ее не нужно делать в конструкторе
        if (value > 3000) {
            value = 2000;
        }
        this.#power = value;
    }

    get power() { // геттер срабатывает, когда мы пытаемя обратиться к свойству
        return "Мощность кофемашины" + this.#power + "Вт";
    }

    start() {
        console.log('Кофе будет готов через', this.waterAmount / this.#power * 1000, "мин")
    }
}

let coffeeMachine = new CoffeMachine(2000, 2);

coffeeMachine.power = 2000; // нельзя менять приватные свойства за пределами класса

coffeeMachine.start()