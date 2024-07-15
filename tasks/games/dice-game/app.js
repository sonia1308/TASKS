document.addEventListener("DOMContentLoaded", function () {
  const dicesMain = document.getElementById("dices-main");
  const dice = document.querySelector(".dice");
  const dice2 = document.querySelector(".dice2");
  const playSoundButton = document.getElementById("play");
  const changePlayerName = document.getElementById("change-name");
  const mySound = new Audio("./assets/dice.mp3");

  //#region default
  let p1 = `Player 1`;
  let p2 = `Player 2`;
  for (let i = 1; i <= 6; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dice.appendChild(dot);
    dice.classList.add("six");
  }
  for (let j = 1; j <= 6; j++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dice2.appendChild(dot);
    dice2.classList.add("six");
  }
  //#endregion

  //#region changeName
  function changeName() {
   let player1 = prompt(`change Player1 name`);
   let player2 = prompt(`change Player2 name`);
    if (player1.length >= 1 && player2.length >= 1) {
      p1= player1
      p2= player2
    }
  }
//#endregion
  changePlayerName.addEventListener("click", function () {
    changeName();
  });
  //#region diceRoll
  function rollTheDice() {
    dice.innerHTML = "";
    dice2.innerHTML = "";
    const randNumber1 = Math.ceil(Math.random() * 6);
    const randNumber2 = Math.ceil(Math.random() * 6);
    for (let i = 0; i < randNumber1; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dice.appendChild(dot);
    }
    for (let j = 0; j < randNumber2; j++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dice2.appendChild(dot);
    }

    dice.className = "dice";
    dice2.className = "dice2";

    switch (randNumber1) {
      case 1:
        dice.classList.add("one");
        break;
      case 2:
        dice.classList.add("two");
        break;
      case 3:
        dice.classList.add("three");
        break;
      case 4:
        dice.classList.add("four");
        break;
      case 5:
        dice.classList.add("five");
        break;
      case 6:
        dice.classList.add("six");
        break;
      default:
        break;
    }
    switch (randNumber2) {
      case 1:
        dice2.classList.add("one");
        break;
      case 2:
        dice2.classList.add("two");
        break;
      case 3:
        dice2.classList.add("three");
        break;
      case 4:
        dice2.classList.add("four");
        break;
      case 5:
        dice2.classList.add("five");
        break;
      case 6:
        dice2.classList.add("six");
        break;
      default:
        break;
    }

    const winMsg = document.createElement("h1");
    if (randNumber1 > randNumber2) {
      // winMsg.innerHTML =
      document.querySelector(`h1`).innerHTML = `${p1} wins!`;
    } else if (randNumber1 === randNumber2) {
      document.querySelector(`h1`).innerHTML = `That's a draw!`;
    } else {
      document.querySelector(`h1`).innerHTML = `${p2} wins!`;
    }
    document.body.appendChild(winMsg);
  }
  playSoundButton.addEventListener("click", function () {
    mySound.play();
    rollTheDice();
  });
  //#endregion
});
