import Player from "./player";


const domManager = () => {
  const playerBoard = document.getElementById('player-board')
  const compBoard = document.getElementById('comp-board')


  const startTheGame = document.getElementById('start-button')
  const playerName = document.getElementById('player-name')
  const boardSize = document.getElementById('inputFieldSize')
  const numOfShips = document.getElementById('inputNumberOfShips')
  const playerForm = document.getElementById('player-container')
  const boardLoad = document.getElementById('board-container')
  const addShipGrid = document.getElementById('add-ships')
  const addShipBoard = document.getElementById('add-ship-board')

  let player;
  startTheGame.addEventListener('click', () => {
    player = Player(playerName.value)
    player.initiate(boardSize.value, boardSize.value)
    initialize(boardSize.value)
    playerForm.classList.add('d-none')
    addShipGrid.classList.remove('d-none')
    //boardLoad.classList.remove('d-none')
    //addShipGrid.classList.remove('d-none')
    addShipBoard.style.gridTemplateColumns = `repeat(${boardSize.value}, 1fr)`
    playerBoard.style.gridTemplateColumns = `repeat(${boardSize.value}, 1fr)`
    compBoard.style.gridTemplateColumns = `repeat(${boardSize.value}, 1fr)`
  })

  const shipGenerator = () => {

  }

  const initialize = (size) => {

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let element = document.createElement("DIV");
        element.classList = 'field';
        element.addEventListener('click', () => {

        })
        addShipBoard.appendChild(element);
      }
    }

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let element = document.createElement("DIV");
        element.classList = 'field';
        element.addEventListener('click', () => {
          player.receiveAttack(i, j)
        })
        playerBoard.appendChild(element);
      }
    }

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let element = document.createElement("DIV");
        element.classList = 'field';
        element.addEventListener('click', () => {
          player.receiveAttack(i, j)
        })
        compBoard.appendChild(element);
      }
    }
  }

  return {
    initialize
  }
}

export default domManager