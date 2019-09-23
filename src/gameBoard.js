const { Ship } = require("./ship");

const GameBoard = (columns, rows) => {
  // board is 10 x 10
  let ships = []
  let misses = []
  const addShipToBattlefield = (initialCordinate, direction, object) => {
    if ((direction === true && (initialCordinate[0] + object.length() >= columns
      || initialCordinate[1] >= rows))
      || (direction === false && (initialCordinate[1] + object.length() >= rows
        || initialCordinate[0] >= columns))) {
      return
    } else {
      if (!newShipCoordinateCheck(initialCordinate[0], initialCordinate[1], direction, object.length())) {
        // direction : true => horisontal, false => vertical
        ships.push({ initialCordinate, direction, object })
      } else {
        return
      }

    }
  }

  const getOverlap = (x, y) => {
    let result = ships.some((ship) => {
      if (ship.direction === true && y === ship.initialCordinate[1] && x >= ship.initialCordinate[0] && x < (ship.initialCordinate[0] + ship.object.length())
        || ship.direction === false && x === ship.initialCordinate[0] && y >= ship.initialCordinate[1] && y < (ship.initialCordinate[1] + ship.object.length())) {
        return true
      }
    })
    return result
  }

  const newShipCoordinateCheck = (x, y, direction, size) => {
    if (direction == true) {
      for (let i = 0; i < size; i++) {
        if (getOverlap(x + i, y)) {
          return true
        }
      }
    } else if (direction == false) {
      for (let i = 0; i < size; i++) {
        if (getOverlap(x, y + i)) {
          return true
        }
      }
    }
    return false
  }

  const getShips = () => {
    return ships
  }

  const getMisses = () => {
    return misses
  }

  const checkForSelectedField = (x, y) => {
    let result = misses.some((coordinate) => {
      if (x === coordinate[0] && y === coordinate[1]) {
        return true
      }
    })
    return result
  }

  const receiveAttack = (x, y) => {
    if (checkForSelectedField(x, y)) {
      return false
    } else {
      let result = ships.some((ship) => {
        // direction : true => horisontal/ x, false => vertical/ y
        if (ship.direction === true && y === ship.initialCordinate[1] && x >= ship.initialCordinate[0] && x < (ship.initialCordinate[0] + ship.object.length())) {
          return ship.object.hit(x - ship.initialCordinate[0])
        } else if (ship.direction === false && x === ship.initialCordinate[0] && y >= ship.initialCordinate[1] && y < (ship.initialCordinate[1] + ship.object.length())) {
          return ship.object.hit(y - ship.initialCordinate[1])
        }
      })
      if (!result) {
        misses.push([x, y])
      }
      return true

    }
  }

  return {
    addShipToBattlefield,
    getShips,
    receiveAttack,
    getMisses
  }
}

module.exports = { GameBoard }