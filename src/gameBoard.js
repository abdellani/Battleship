const GameBoard = (columns, rows) => {
  // board is 10 x 10
  const ships = [];
  const misses = [];
  const addShipToBattlefield = (initialCordinate, direction, object) => {
    if ((direction === true && (initialCordinate[0] + object.length() - 1 >= columns
        || initialCordinate[1] >= rows))
      || (direction === false && (initialCordinate[1] + object.length() - 1 >= rows
        || initialCordinate[0] >= columns))) {
      return false;
    }
    if (!newShipCoordinateCheck(initialCordinate[0],
      initialCordinate[1],
      direction,
      object.length())) {
      // direction : true => horizontal, false => vertical
      ships.push({
        initialCordinate,
        direction,
        object,
      });
      return true;
    }
    return false;
  };

  const getOverlap = (x, y) => {
    const result = ships.some((ship) => {
      if (ship.direction === true
        && y === ship.initialCordinate[1]
        && x >= ship.initialCordinate[0]
        && x < (ship.initialCordinate[0] + ship.object.length())
        || ship.direction === false
        && x === ship.initialCordinate[0]
        && y >= ship.initialCordinate[1]
        && y < (ship.initialCordinate[1] + ship.object.length())) {
        return true;
      }
      return false;
    });
    return result;
  };

  const newShipCoordinateCheck = (x, y, direction, size) => {
    if (direction === true) {
      for (let i = 0; i < size; i += 1) {
        if (getOverlap(x + i, y)) {
          return true;
        }
      }
    } else if (direction === false) {
      for (let i = 0; i < size; i += 1) {
        if (getOverlap(x, y + i)) {
          return true;
        }
      }
    }
    return false;
  };

  const getShips = () => ships;

  const getMisses = () => misses;

  const checkMissedHits = (x, y) => {
    const result = misses.some((coordinate) => {
      if (x === coordinate[0] && y === coordinate[1]) {
        return true;
      }
      return false;
    });
    return result;
  };

  const receiveAttack = (x, y) => {
    if (checkMissedHits(x, y)) {
      return false;
    }
    const result = ships.some((ship) => {
      // direction : true => horisontal/ x, false => vertical/ y
      if (ship.direction === true
        && y === ship.initialCordinate[1]
        && x >= ship.initialCordinate[0]
        && x < (ship.initialCordinate[0] + ship.object.length())) {
        return ship.object.hit(x - ship.initialCordinate[0]);
      }
      if (ship.direction === false
        && x === ship.initialCordinate[0]
        && y >= ship.initialCordinate[1]
        && y < (ship.initialCordinate[1] + ship.object.length())) {
        return ship.object.hit(y - ship.initialCordinate[1]);
      }
      return false;
    });
    if (!result) {
      misses.push([x, y]);
    }
    return result;
  };
  const checkGameOver = () => !ships.some(ship => !ship.object.isSunk());
  return {
    addShipToBattlefield,
    getShips,
    receiveAttack,
    getMisses,
    getOverlap,
    checkGameOver,
  };
};

export default GameBoard;
