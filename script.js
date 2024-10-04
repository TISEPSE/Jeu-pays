const tbl = [
  "Afghanistan",
  "Azerbaidjan",
  "Kirghizistan",
  "Pakistan",
  "Tadjikistan",
  "Turkménistan",
  "Ouzbékistan",
]

// Définie quel index du tableau `tbl` est considéré comme correct pour chaque `<select>`
const correctIndexes = {
  1: 1,
  2: 5,
  3: 6,
  4: 0,
  5: 3,
  6: 4,
  7: 2,
}

let btnValider = document.getElementById("btnValider") // Bouton qui vérifie si tout est correct

btnValider.addEventListener("click", () => {
  for (let i = 1; i <= 7; i++) {
    let select = document.querySelector(`.select${i}`)
    // Enlever les classes "green" et "red" à chaque changement d'option
    select.classList.remove("green", "red")

    if (select.value === tbl[correctIndexes[i]]) {
      console.log("Le pays est correct")
      select.classList.add("green")
    } else {
      console.log("Le pays n'est pas correct")
      select.classList.add("red")
    }
  }
})

let btnReset = document.getElementById("reset")
btnReset.addEventListener("click", () => {
  for (let i = 1; i <= 7; i++) {
    // Enlève les classes "green" et "red" de tous les selects
    let select = document.querySelector(`.select${i}`)
    select.classList.remove("green", "red")
  }
})

import confetti from 'https://cdn.skypack.dev/canvas-confetti';
confetti();

function party(){
  confetti()
}

document.getElementById('confetti').addEventListener('click', party)