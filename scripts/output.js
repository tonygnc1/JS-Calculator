const usrInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const mulitplyBtn = document.getElementById("btn-mulriply");
const divideBgtn = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-input");
const currentCalculationOutput = document.getElementById("current-calculation");

function outPutResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
