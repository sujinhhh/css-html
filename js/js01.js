// #id, .class , element ------------------------------------------------>
const click = document.querySelector("input");
// id에서 갖고 오기
const number = document.getElementById("h1");
const section = document.querySelector("section");
const h2 = document.querySelector("h2");
console.log(h2);

const increment = () => {
  let num = "";
  for (i = 0; i < 3; i++) {
    num += "😙";
    //  이 밑에 있는 코드를 어디에 두느냐에 따라 브라우져에 나타나는것 이 달라짐
    number.innerHTML += `<h1>${num}</h1>`;
  }
  number.innerHTML += `<h1>${num} 이건 바깥에 있는 경우</h1>`;
  h2.innerText = "innerText";
};

//  toggle 고쳐야 할것  ###############################
// click.addEventListener("click", () => {
//   let content = false;
//   if (!content) {
//     increment();
//     content = true;
//   }
//   if (content) {
//     location.reload();
//     content = false;
//   }
// });

//  Element 만들기  --------------------------------->

// const btnElem = document.querySelector("#btn-elem");

// btnElem.onclick = () => {
//   const h3 = document.createElement("p");
//   h3.innerText = "Here comes p tag";
//   section.appendChild(h3);
//   //   document.body.appendChild(h3)
// };

// document.getElementById("btn01").onclick = () => {
//   document.getElementById("btn01").style.display = "none";
// };

// Prompt  --------------------------------->
// var name = prompt();
// console.log(name);

// 변수  --------------------------------->

// let age;
// age = 40;
// console.log(age);

// var newAge = age;
// newAge = 60
// console.log(newAge);
// console.log(age);

// IIFE . immediately invoked function expression ---------------------------->
// var 는 글로벌 스코프인데 이안에 넣으면 밖에서 열람못함,
// (function () {
//   var age = 4;
// })();

// primitives  (문자, 숫자, 요소 / string, boolean, number, undefine, null,symbol )--------------------------------->

// object (오브젝트, 어레이 ) Everything source from object-------------------------->
// let person = {
//   // key :  value
//   name: "sujnj",
//   job: "programmer",
//   // method
//   fun: function () {
//     console.log("yay");
//   },
// };

// person.fun();

// let date = new Date();
// console.log(date);

// mutable, immtable -------------------------->
// let name = "sujjin";
// let age = 40
// name.toUpperCase(); // 아무 변화가 없음, 변수에 다시 할당을 해주어야함 , 그래서 불변이라고 함

// name = name.toUpperCase();
// console.log(name);

// 오브젝트로  할당하고 싶으면 =>

// name = new String(name);
// console.log(name)
// name = [...name]
// console.log(name)
// age = new Number(age)
// console.log(age);
// console.log(age.valueOf(age));
// console.log(typeof(age));

// Number  ------------------------------------------------->
// 최대 넣을수 있는 숫자 확인 -------------------------->
// let x = Number.MAX_SAFE_INTEGER;
// console.log(x);
// console.log(Number.isSafeInteger(9007199254740994));

// let y = 9007199254740991;
// // Math.pow(base, n)
// // base 숫자를 n제곱한다.
// console.log(Math.pow(y, 28));

// 14, Arithmetic Operators, Precedence(우선순위), Associativity (제휴)------------------->  (  ) 를 이용해서 우선순위를 다르게 할수 있음

// 15. Increment, Decrement, & Assignment Operator
let pizza = 10;
// pizza ++
// pizza *= 10
pizza %= 5;
//  앞에 붙이는 거랑 뒤에 붙이는 거랑 다른점
// let newPizza = pizza++
let newPizza = ++pizza;

console.log(pizza, newPizza);

// 16 parseInt, parseFoat, Methods ------------------->

let x = 1;
let y = "30.9999";
let won = 150097779879;
let minus = -19;
//  소수점 밑으로는 뺌
let num = Number.parseInt(y);
//  소수점 포함
num = Number.parseFloat(y);
console.log(x + num);

// 17. Converting Decimal Numbers to Binary(2진수), Octal(8진수), Hexadecimal(16진수)  ------------------->

// 18. Number Instance Methods, Math Object ------------------->
x.toString(2);
// 돈관련 숫자 // 소수점 두자리까지만
console.log(num.toFixed(2));
// 3개씩 떨어뜨려줌
console.log(won.toLocaleString());
// 절대값
console.log(Math.abs(minus));
// 반올림
console.log(Math.round(num));
//올림:ceil, 내림:floor
console.log(num);
// 소수점 밑에 다빼버림
console.log(Math.trunc(num));

// String------------------- ------------------->
// 다음 줄로 내려감  / \n, \\ // charAt, concat, includes, indexOf, lastindexOf
let name = "suj\nijn";
console.log(name);
let favFood = "burger";
let content = "The love of money is a root of all sorts of injurious things";
let search1 = "money";
let search2 = "number";

console.log(content.indexOf(search1));
console.log(content.includes(search1));
console.log(content.includes(search2));
console.log(content.lastIndexOf(search1));
console.log(content.charAt(12));

console.log(favFood.charAt(2));
console.log(favFood[2]);
// 새로운 string 반환
console.log(favFood.concat("is good", "pizza"));
