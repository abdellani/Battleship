const {
  GameBoard
} = require("./gameBoard");
const {
  Ship
} = require("./ship");


const Player = (name) => {
  let gameBoard;
  let initiate = (x, y) => {
    gameBoard = GameBoard(x, y);
  }

  let addShip = (x, y, direction, size) => {
    ship = Ship(size)
    return gameBoard.addShipToBattlefield([x, y], (direction === "horizontal") ? true : false, ship)
  }
  let receiveAttack = (x, y) => {
    return gameBoard.receiveAttack(x, y)
  }
  let getMisses = () => {
    return gameBoard.getMisses()
  }
  let getShips = () => {
    return gameBoard.getShips()
  }
  let checkGameOver = () => {
    return gameBoard.checkGameOver()
  }
  return {
    initiate,
    addShip,
    receiveAttack,
    getMisses,
    getShips,
    checkGameOver
  }

}

module.exports = {
  Player
};