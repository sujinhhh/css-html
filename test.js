// function solution(str, ending) {
//   // TODO: complete
//   let a = str.endsWith(ending);
//   a;
// }
// console.log(solution("abc", "bc"));
// console.log(str.endsWith("to be", 19));
// // 19글자로 잘라서 끝부분 확인

// function solution(str, ending) {
//   return new RegExp(ending + "$", "i").test(str);
// }

// function solution(str, ending) {
//   return str.substr(-ending.length) == ending;
// }

// // 첫글자 대문자 만들기

// String.prototype.toJadenCase = function () {
//     return this.split(" ").map(function(word){
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
//   }
var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
function countSheeps(arrayOfSheep) {
  let number = 0;
  for (let i of arrayOfSheep) {
    i == true ? (number += 1) : (number += 0);
  }
  console.log(number);
}

countSheeps(array1);

// 위에 것 간단하게
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

function func(range) {
  m = {};

  for (let i in range) {
    console.log(c);

    m[c] = i;
  }

  return m;
}

func(5);
