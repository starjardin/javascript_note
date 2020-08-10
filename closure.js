function createGame(gamemName) {
  let score = 0;
  return function win () {
    score++;
    return `Your name ${gameName} score is ${score}`
  }
}

const hockey = createGame('Hockey');