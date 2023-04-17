const successMessages = [
  "Ez az!",
  "Lángész vagy!",
  "Szuper!",
  "Te pro vagy!",
  "Einsteinhez van szerencsém?",
  "Nagyon tudsz!",
  "Fantasztikus vagy!",
  "Kitűnő!",
  "Tökéletes!",
  "WOW!"
]

let tasksSum = 0;
let tasksCorrect = 0;
let tasksIncorrect = 0;
const numTasksSum = document.getElementById("tasks-sum");
const numTasksCorrect = document.getElementById("tasks-correct");
const numTasksIncorrect = document.getElementById("tasks-incorrect");
const numTasksPercent = document.getElementById("tasks-percent");

const btn = document.querySelector(".btn");
btn.addEventListener('click', () => { multiplicationHandler() });

const btnReset = document.querySelector(".btn-reset");
btnReset.addEventListener('click', () => { resetStat() });

function multiplicationHandler() {
  const initialText = 'Ellenőrzés';

  if (btn.textContent === initialText) {
    checkResult();
  } else {
    generateNewNumbers();
    btn.textContent = initialText;
    btn.classList.remove("btn-next");
  }
}

const min = 2;
const max = 9;

function getRandomInteger() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkResult() {
  const number1 = document.querySelector(".number-1").textContent;
  const number2 = document.querySelector(".number-2").textContent;
  const result = document.querySelector("#result").value;
  const correctResult = number1 * number2;
  const message = document.querySelector(".message");

  if (result == "") {
    message.classList.add("text-red");
    message.textContent = "Adj meg egy számot!"
  } else if (result == correctResult) {
    if (message.classList.contains("text-red")) {
      message.classList.remove("text-red");
    }
    tasksSum++;
    tasksCorrect++;
    let tasksPercent = tasksCorrect / tasksSum * 100;
    numTasksSum.textContent = tasksSum;
    numTasksCorrect.textContent = tasksCorrect;
    numTasksPercent.textContent = tasksPercent.toFixed();
    message.textContent = successMessages[number2];
    btn.textContent = 'Következő';
    btn.classList.add("btn-next");
  } else {
    tasksSum++;
    tasksIncorrect++;
    let tasksPercent = tasksCorrect / tasksSum * 100;
    numTasksSum.textContent = tasksSum;
    numTasksIncorrect.textContent = tasksIncorrect;
    numTasksPercent.textContent = tasksPercent.toFixed();
    message.classList.add("text-red");
    message.textContent = "Nem jó. Próbáld újra!"
  }
}

function generateNewNumbers() {
  document.querySelector(".number-1").textContent = getRandomInteger();
  document.querySelector(".number-2").textContent = getRandomInteger();
  document.querySelector("#result").value = null;
  document.querySelector(".message").textContent = "";
}

function resetStat() {
  tasksSum = 0;
  tasksCorrect = 0;
  tasksIncorrect = 0;
  numTasksSum.textContent = "0";
  numTasksCorrect.textContent = "0";
  numTasksIncorrect.textContent = "0";
  numTasksPercent.textContent = "0";
}