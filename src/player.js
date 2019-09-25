import GameBoard from './gameBoard';
import Ship from './ship';


const Player = (name) => {
  let gameBoard;
  const initiate = (x, y) => {
    gameBoard = GameBoard(x, y);
  };
  const getName = () => name;

  const addShip = (x, y, direction, size) => {
    const ship = Ship(size);
    return gameBoard.addShipToBattlefield([x, y], (direction === 'horizontal'), ship);
  };
  const receiveAttack = (x, y) => gameBoard.receiveAttack(x, y);
  const getMisses = () => gameBoard.getMisses();
  const getShips = () => gameBoard.getShips();
  const checkGameOver = () => gameBoard.checkGameOver();
  const checkField = (x, y) => gameBoard.getOverlap(x, y);
  return {
    initiate,
    addShip,
    getMisses,
    getShips,
    checkGameOver,
    receiveAttack,
    getName,
    checkField,
  };
};

export default Player;
