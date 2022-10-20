
//home code
let homeScore = 0

document.getElementById("home-score").textContent = homeScore
let homeEl = document.getElementById("home-score")

function plus1Home(){
    let plus1Home = homeScore + 1
    homeScore = plus1Home 
    homeEl.textContent = plus1Home
}
    
function plus2Home(){
    let plus2Home = homeScore + 2
    homeScore = plus2Home 
    homeEl.textContent = plus2Home
}

function plus3Home(){
    let plus3Home = homeScore + 3
    homeScore = plus3Home 
    homeEl.textContent = plus3Home
}

//guest code 

let guestScore = 0

document.getElementById("guest-score").textContent = guestScore
let guestEl = document.getElementById("guest-score")

function plus1Guest(){
    let plus1Guest = guestScore + 1
    guestScore = plus1Guest 
    guestEl.textContent = plus1Guest
}

function plus2Guest(){
    let plus2Guest = guestScore + 2
    guestScore = plus2Guest 
    guestEl.textContent = plus2Guest
}

function plus3Guest(){
    let plus3Guest = guestScore + 3
    guestScore = plus3Guest 
    guestEl.textContent = plus3Guest
}

//reset score

function resetScore(){
    guestEl.textContent = 0 
    homeEl.textContent = 0
}