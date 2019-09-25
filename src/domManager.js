import Player from './player';

const domManager = () => {
  // Variables related to the initial form
  const playerForm = document.getElementById('player-container');
  const playerName = document.getElementById('player-name');
  const boardSize = document.getElementById('inputFieldSize');
  const numOfShips = document.getElementById('inputNumberOfShips');
  const nextButton = document.getElementById('next-button');
  const playerNameDisplay = document.getElementById('playerNameDisplay');

  // Variables related to Add ship form
  const addShipFormContainer = document.getElementById('add-ships-form-container');
  const addShipBoard = document.getElementById('add-ship-board');
  const addShipButton = document.getElementById('add-ship-button');
  const newShipCoorX = document.getElementById('new-ship-coor-x');
  const newShipCoorY = document.getElementById('new-ship-coor-y');
  const newShipOrientation = document.getElementById('new-ship-orientation');
  const newShipSize = document.getElementById('new-ship-size');
  const remainingShipsCounterSpan = document.getElementById('remaining-ships-counter');
  let remainingShipsCounter;

  // Variables relates to game
  const playerBoard = document.getElementById('player-board');
  const computerBoard = document.getElementById('computer-board');
  const boardsContainer = document.getElementById('board-container');
  const play = document.getElementById('play');
  const restart = document.getElementById('reset');
  let matrixSize;
  let player;
  let computer;
  let gameOver;

  // Listeners
  nextButton.addEventListener('click', () => {
    if (!(/([^\s])/.test(playerName.value))) {
      alert('Name should not be empty !');
      return;
    }
    matrixSize = Number(boardSize.value);
    player = Player(playerName.value);
    player.initiate(matrixSize, matrixSize);
    computer = Player('computer');
    computer.initiate(matrixSize, matrixSize);
    playerForm.classList.add('d-none');
    remainingShipsCounter = numOfShips.value;
    gameOver = false;
    renderAddShipContainer(matrixSize);
    addShipBoard.style.gridTemplateColumns = `repeat(${matrixSize}, 1fr)`;
    playerBoard.style.gridTemplateColumns = `repeat(${matrixSize}, 1fr)`;
    computerBoard.style.gridTemplateColumns = `repeat(${matrixSize}, 1fr)`;
  });

  play.addEventListener('click', () => {
    if (remainingShipsCounter === 0) {
      addShipFormContainer.classList.add('d-none');
      boardsContainer.classList.remove('d-none');
      generateComputerShips();
      renderBoard(player, playerBoard, 'Player');
      renderBoard(computer, computerBoard, 'computer');
      playerNameDisplay.innerText = player.getName();
    } else {
      alert('Please add every ship!');
    }
  });

  restart.addEventListener('click', () => {
    reset();
  });

  addShipButton.addEventListener('click', () => {
    if (remainingShipsCounter === 0) {
      alert('You added all the ship ! \n you need to start the game ');
      return;
    }
    const res = player.addShip(Number(newShipCoorX.value),
      Number(newShipCoorY.value),
      newShipOrientation.value,
      Number(newShipSize.value));
    if (!res) {
      alert("You can't add this ship !");
      return;
    }
    remainingShipsCounter -= 1;
    renderBoard(player, addShipBoard, 'AddShip');
  });

  const generateComputerShips = () => {
    const computerShipsNumber = player.getShips();
    for (let i = 0; i < computerShipsNumber.length; i += 1) {
      if (!computer.addShip(Math.floor(Math.random() * 6), Math.floor(Math.random() * (matrixSize - 1)), 'horizontal', computerShipsNumber[i].object.getFields().length)) {
        i -= 1;
      }
    }
  };
  const renderAddShipContainer = () => {
    addShipFormContainer.classList.remove('d-none');
    renderBoard(player, addShipBoard, 'AddShip');
  };

  const renderBoard = (user, boardContainer, context = null) => {
    if (context === 'AddShip') {
      remainingShipsCounterSpan.innerHTML = remainingShipsCounter;
    }
    boardContainer.innerHTML = '';
    for (let i = 0; i < matrixSize; i += 1) {
      for (let j = 0; j < matrixSize; j += 1) {
        const element = document.createElement('DIV');
        element.classList.add('field');
        if (context !== 'computer') {
          if (user.checkField(j, i)) {
            element.classList.add('ship');
          }
        }
        if (context === 'AddShip') {
          const size = Number(newShipSize.value);
          const orientation = newShipOrientation.value;
          const x = Number(newShipCoorX.value);
          const y = Number(newShipCoorY.value);
          if (orientation === 'horizontal' && i === y && x <= j && j < x + size) {
            element.classList.add('ship-selected');
          }
          if (orientation === 'vertical' && j === x && y <= i && i < y + size) {
            element.classList.add('ship-selected');
          }
        }
        element.addEventListener('click', () => {
          if (context === 'AddShip') {
            newShipCoorX.value = j;
            newShipCoorY.value = i;
            renderBoard(user, boardContainer, 'AddShip');
          }

          if (context === 'computer') {
            if (gameOver) {
              alert('Game is over');
              return;
            }
            if (!element.classList.contains('shipHit') && !element.classList.contains('miss')) {
              const result = computer.receiveAttack(j, i);
              if (result) {
                element.classList.add('shipHit');
                if (computer.checkGameOver()) {
                  gameOver = true;
                  if (confirm(`Game over winner ${player.getName()}! Play again?`)) {
                    reset();
                  }
                  return;
                }
              } else {
                element.classList.add('miss');
              }
              gamePlay();
            } else {
              alert('You cant hit same field more than once!');
            }
          }
        });
        if (context === 'Player') {
          element.setAttribute('id', `${i}-${j}`);
        }
        boardContainer.appendChild(element);
      }
    }
  };
  const gamePlay = () => {
    const x = Math.floor(Math.random() * matrixSize);
    const y = Math.floor(Math.random() * matrixSize);
    const element = document.getElementById(`${x}-${y}`);
    if (!element.classList.contains('shipHit') && !element.classList.contains('miss')) {
      const result = player.receiveAttack(y, x);
      if (result) {
        element.classList.add('shipHit');
        if (player.checkGameOver()) {
          gameOver = true;
          if (confirm('Game over winner Computer! Play again?')) {
            reset();
          }
        }
      } else {
        element.classList.add('miss');
      }
    } else {
      gamePlay();
    }
  };

  const reset = () => {
    player = null;
    computer = null;
    boardsContainer.classList.add('d-none');
    playerForm.classList.remove('d-none');
  };

  return {
  };
};

export default domManager;
