// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве,
// решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9]

const min = Math.min(...arr);
console.log(min);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. 
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(){
    let counter = 0;
    return {
        getCounter : function() {return counter},
        increment : function() {counter++},
        decrement : function() {counter--}
    }
}

let counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCounter());

// 3) 3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// // примеры вызова функции
// console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)

function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}

console.log(factorial(5));

// Дополнительная задача

// 4) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса 
// в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// *Пример**
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(rootElement, targetClass) {
  if (rootElement.classList.contains(targetClass)) {
    return rootElement;
  }

  for (let i = 0; i < rootElement.children.length; i++) {
    const foundElement = findElementByClass(rootElement.children[i], targetClass);
    if (foundElement) {
      return foundElement;
    }
  }

  return null;
}

const rootElement = document.documentElement;
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);