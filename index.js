let score1 = 0
let score2 = 0
homeScore = document.getElementById("home-score")
guestScore = document.getElementById("guest-score")


function add1PointsHome() {
  score1 += 1
  homeScore.innerHTML = score1
}

function add2PointsHome() {
  score1 += 2
  homeScore.innerHTML = score1
  
}

function add3PointsHome() {
  score1 += 3
  homeScore.innerHTML = score1
}

function add1PointsGuest() {
  score2 += 1
  guestScore.textContent = score2
}

function add2PointsGuest() {
  score2 += 2
  guestScore.textContent = score2
}

function add3PointsGuest() {
  score2 += 3
  guestScore.textContent = score2
}