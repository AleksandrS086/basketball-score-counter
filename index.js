let homescr = document.getElementById("home-score")
let guestscr = document.getElementById("guest-score")

let homescore = 0
let guestscore = 0

homescr.textContent = homescore
guestscr.textContent = guestscore

function homeAdd1() {
    let result = (homescore += 1)
    homescr.textContent = result
    highlightleader()
}

function homeAdd2() {
    let result = (homescore += 2)
    homescr.textContent = result
    highlightleader()
}

function homeAdd3() {
    let result = (homescore += 3)
    homescr.textContent = result
    highlightleader()
}

function guestAdd1() {
    let result = (guestscore += 1)
    guestscr.textContent = result
    highlightleader()
}

function guestAdd2() {
    let result = (guestscore += 2)
    guestscr.textContent = result
    highlightleader()
}

function guestAdd3() {
    let result = (guestscore += 3)
    guestscr.textContent = result
    highlightleader()
}

function resetScore() {
    homescore = 0
    guestscore = 0
    homescr.textContent = homescore
    guestscr.textContent = guestscore
    highlightleader()
}

function highlightleader() {
    // Reset both colors first
    homescr.style.color = ""
    guestscr.style.color = ""

    if (homescore > guestscore) {
        homescr.style.color = "#FCD34D"
    } else if (guestscore > homescore) {
        guestscr.style.color = "#FCD34D"
    }
    // If tied, no highlight
}
