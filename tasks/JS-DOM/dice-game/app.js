const dicesMain = document.getElementById("dices-main");

const dice = document.querySelector(".dice");
const dice2 = document.querySelector(".dice2");

const randNumber1 = Math.ceil(Math.random() * 6);
const randNumber2 = Math.ceil(Math.random() * 6);

// const player1 = prompt(`Change Player1 Name`)
// const player2 = prompt(`Change Player2 Name`)
function rollTheDice() {
  dice.innerHTML = "";
  for (let i = 0; i < randNumber1; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dice.appendChild(dot);
  }
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
  for (let j = 0; j < randNumber2; j++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dice2.appendChild(dot);
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
  if (randNumber1>randNumber2) {
    const winMsg =document.createElement(`h1`)
    winMsg.innerHTML=`{player1} wins!`
    document.body.appendChild(winMsg);
  } else if( randNumber1===randNumber2) {
    const winMsg =document.createElement(`h1`)
    winMsg.innerHTML=`That's a draw!`
    document.body.appendChild(winMsg);
  }else{
    const winMsg =document.createElement(`h1`)
    winMsg.innerHTML=`{player2} wins!`
    document.body.appendChild(winMsg);
  }
}

rollTheDice();
