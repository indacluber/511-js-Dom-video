var link = document.querySelector("a");

link.textContent = "become true JS jadi!";
link.href = "https://sj42.programingmentor.com";

const sect = document.querySelector("section");
const para = document.createElement("p");
sect.appendChild(para);
para.textContent = "nice to meet you motherFucker!!!";

// for (let i = 0; i < 1000; i++) {
//   const p = document.createElement("p");
//   p.textContent = i + "new paragraph!!";
//   sect.appendChild(p);
// }

// [...Array(1000)].forEach((_, i) => {
//   const p = document.createElement("p");
//   p.textContent = i + "new paragraph!!";
//   sect.appendChild(p);
// });

const linkPara = document.querySelector("p");
sect.appendChild(linkPara.cloneNode(true));

// linkPara.parentElement.removeChild(linkPara);
linkPara.remove();

para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

para.classList.add(".formatted");

$(".click-me").click(() => $("img").toggle(3000));

const clock = document.querySelector(".clock");
const options = {
  hour: "2-digit",
  minute: "2-digit",
};
const showClock = () =>
  (clock.innerText = new Date().toLocaleTimeString("uk", options));
setInterval(showClock, 1000);

const display = document.querySelector(".display");

document
  .querySelectorAll(".digits button")
  .forEach((button) => button.addEventListener("click", digitPressed));

function digitPressed(ev) {
  display.value += ev.target.innerText;
}

document
  .querySelectorAll(".opers button")
  .forEach((button) => button.addEventListener("click", opersPressed));

function opersPressed(ev) {
  display.value += ev.target.innerText;
}

document.querySelector(".eq").addEventListener("click", calculate);
function calculate() {
  display.value = eval(display.value);
}
