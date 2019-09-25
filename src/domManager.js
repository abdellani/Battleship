import Player from "./player";
import Ship from "./ship";


const domManager = () => {

  //Variables related to the initial form
  const playerForm = document.getElementById('player-container')
  const playerName = document.getElementById('player-name')
  const boardSize = document.getElementById('inputFieldSize')
  const numOfShips = document.getElementById('inputNumberOfShips')
  const nextButton = document.getElementById('next-button')
  const playerNameDisplay = document.getElementById('playerNameDisplay')

  //Variables related to Add ship form
  const addShipFormContainer = document.getElementById('add-ships-form-container')
  const addShipBoard = document.getElementById('add-ship-board')
  const addShipButton = document.getElementById('add-ship-button')
  const newShipCoorX = document.getElementById('new-ship-coor-x')
  const newShipCoorY = document.getElementById('new-ship-coor-y')
  const newShipOrientation = document.getElementById('new-ship-orientation')
  const newShipSize = document.getElementById('new-ship-size')
  let remainingShipsCounterSpan = document.getElementById("remaining-ships-counter")
  let remainingShipsCounter;

  //Variables relates to game
  const playerBoard = document.getElementById('player-board')
  const computerBoard = document.getElementById('computer-board')
  const boardContainer = document.getElementById('board-container')
  const play = document.getElementById('play')
  const restart = document.getElementById('reset')
  let matrixSize;
  let player;
  let computer;




  //Listeners

  restart.addEventListener('click', () => {
    reset()
  })

  play.addEventListener('click', () => {
    if (remainingShipsCounter == 0) {
      addShipFormContainer.classList.add('d-none')
      boardContainer.classList.remove('d-none')
      generateComputerShips()
      renderBoard(player, playerBoard, 'Player')
      renderBoard(computer, computerBoard, 'computer')
      playerNameDisplay.innerText = player.getName()
    } else {
      alert('Please add every ship!')
    }
  })

  nextButton.addEventListener('click', () => {
    if (!(/([^\s])/.test(playerName.value))) {
      alert('Name should not be empty !');
      return;
    }
    matrixSize = Number(boardSize.value)
    player = Player(playerName.value)
    player.initiate(matrixSize, matrixSize)
    computer = Player('computer')
    computer.initiate(matrixSize, matrixSize)
    playerForm.classList.add('d-none')
    remainingShipsCounter = numOfShips.value
    renderAddShipContainer(matrixSize)

    //
    //boardLoad.classList.remove('d-none')
    //addShipGrid.classList.remove('d-none')
    addShipBoard.style.gridTemplateColumns = `repeat(${matrixSize}, 1fr)`
    playerBoard.style.gridTemplateColumns = `repeat(${matrixSize}, 1fr)`
    computerBoard.style.gridTemplateColumns = `repeat(${matrixSize}, 1fr)`
  })

  addShipButton.addEventListener("click", () => {
    if (remainingShipsCounter == 0) {
      alert("You added all the ship ! \n you need to start the game ")
      return
    }
    let res = player.addShip(Number(newShipCoorX.value),
      Number(newShipCoorY.value),
      newShipOrientation.value,
      Number(newShipSize.value))
    if (!res) {
      alert("You can't add this ship !")
      return
    }
    remainingShipsCounter -= 1
    renderBoard(player, addShipBoard, "AddShip")
  })

  const generateComputerShips = () => {
    let computerShipsNumber = player.getShips()
    for (let i = 0; i < computerShipsNumber.length; i++) {
      if (!computer.addShip(Math.floor(Math.random() * 6), Math.floor(Math.random() * (matrixSize - 1)), 'horizontal', computerShipsNumber[i].object.getFields().length)) {
        i--
      }
    }
  }
  const renderAddShipContainer = (size) => {
    addShipFormContainer.classList.remove('d-none')
    renderBoard(player, addShipBoard, "AddShip")
  }

  const renderBoard = (user, boardContainer, context = null) => {
    if (context === "AddShip") {
      remainingShipsCounterSpan.innerHTML = remainingShipsCounter
    }
    boardContainer.innerHTML = ""
    for (let i = 0; i < matrixSize; i++) {
      for (let j = 0; j < matrixSize; j++) {
        let element = document.createElement("DIV");
        element.classList.add('field');
        if (context !== 'computer') {
          if (user.checkField(j, i)) {
            element.classList.add("ship")
          }
        }
        if (context === "AddShip") {
          let size = Number(newShipSize.value)
          let orientation = newShipOrientation.value
          let x = Number(newShipCoorX.value)
          let y = Number(newShipCoorY.value)
          if (orientation == "horizontal" && i == y && x <= j && j < x + size) {
            element.classList.add("ship-selected")
          }
          if (orientation == "vertical" && j == x && y <= i && i < y + size) {
            element.classList.add("ship-selected")
          }
        }
        element.addEventListener('click', () => {
          if (context === "AddShip") {
            newShipCoorX.value = j
            newShipCoorY.value = i
            renderBoard(user, boardContainer, "AddShip")
          }

          if (context === 'computer') {
            if (!element.classList.contains('shipHit') && !element.classList.contains('miss')) {
              let result = computer.receiveAttack(j, i)
              if (result) {
                element.classList.add('shipHit')
                if (computer.checkGameOver()) {
                  if (confirm(`Game over winner ${player.getName()}! Play again?`)) {
                    reset()
                  }
                  return
                }
              } else {
                element.classList.add('miss')
              }
              gamePlay()
            } else {
              alert('You cant hit same field more than once!')
            }
          }
        })
        if (context === 'Player') {
          element.setAttribute('id', `${i}-${j}`)
        }
        boardContainer.appendChild(element);
      }
    }

  }
  const renderGameBoards = (size) => {
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

  const gamePlay = () => {
    let x = Math.floor(Math.random() * matrixSize)
    let y = Math.floor(Math.random() * matrixSize)
    let element = document.getElementById(`${x}-${y}`)
    if (!element.classList.contains('shipHit') && !element.classList.contains('miss')) {
      let result = player.receiveAttack(y, x)
      if (result) {
        element.classList.add('shipHit')
        if (player.checkGameOver()) {
          if (confirm('Game over winner Computer! Play again?')) {
            reset()
          }
          return
        }
      } else {
        element.classList.add('miss')
      }
    } else {
      gamePlay()
    }
  }

  const reset = () => {
    player = null
    computer = null
    boardContainer.classList.add('d-none')
    playerForm.classList.remove('d-none')
  }

  return {
    initialize: renderGameBoards
  }
}

export default domManager