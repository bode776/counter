let screen1 = document.getElementById("screen");
let btnAdd = document.getElementById("btn-add");
let btnRest = document.getElementById("btn-rest");

let counter = 0;
btnAdd.addEventListener("click", () => {
    counter++;
    screen1.innerText = counter;
});

btnRest.addEventListener("click", () => {
    counter = 0;
    screen1.innerText = counter;
});
