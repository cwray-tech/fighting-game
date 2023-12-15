function detectCollision({ player1, player2 }) {
  return (
    player1.attackBox.position.x + player1.attackBox.width >=
      player2.position.x &&
    player1.attackBox.position.x <= player2.position.x + player2.width &&
    player1.attackBox.position.y + player1.attackBox.height >=
      player2.position.y &&
    player1.attackBox.position.y <= player2.position.y + player2.height
  );
}

function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  const resultContainer = document.querySelector("#result");
  if (player.health === enemy.health) {
    resultContainer.textContent = "Tie";
  } else if (player.health > enemy.health) {
    resultContainer.textContent = "Player 1 Wins!";
  } else {
    resultContainer.textContent = "Player 2 Wins!";
  }

  resultContainer.style.display = "flex";
}

let timer = 60;
let timerId;
function decreaseTimer() {
  timerId = setTimeout(decreaseTimer, 1000);
  if (timer > 0) {
    timer--;
    document.querySelector("#timer").textContent = timer;
  } else {
    determineWinner({ player, enemy, timerId });
  }
}
