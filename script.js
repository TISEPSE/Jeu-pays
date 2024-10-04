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
  let allCorrect = true // Cette variable vérifie si tout est correct

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
      allCorrect = true // Si une option est incorrecte, tout n'est pas correct
    }
  }

  let btnReset = document.getElementById("reset")
  btnReset.addEventListener("click", () => {
    for (let i = 1; i <= 7; i++) {
      // Enlève les classes "green" et "red" de tous les selects
      let select = document.querySelector(`.select${i}`)
      select.classList.remove("green", "red")
    }
  })

  // Si toutes les sélections sont correctes, on affiche les confettis
  if (allCorrect) {
    const duration = 5 * 900,
      animationEnd = Date.now() + duration,
      defaults = {startVelocity: 30, spread: 360, ticks: 60, zIndex: 0}

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: {x: randomInRange(0.1, 0.3), y: Math.random() - 0.2},
        })
      )
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: {x: randomInRange(0.7, 0.9), y: Math.random() - 0.2},
        })
      )
    }, 250)
  }
})