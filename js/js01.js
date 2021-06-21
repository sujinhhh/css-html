// #id, .class , element
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

//  Element 만들기

const btnElem = document.querySelector("#btn-elem");

btnElem.onclick = () => {
  const h3 = document.createElement("p");
  h3.innerText = "Here comes p tag";
  section.appendChild(h3);
  //   document.body.appendChild(h3)
};
