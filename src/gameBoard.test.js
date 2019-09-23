const { Ship } = require("./ship");
const { GameBoard } = require("./gameBoard");

describe("#Add ship to battlefield", () => {
  let ship;
  let gameBoard;
  beforeEach(() => {
    gameBoard = GameBoard(10, 10);
    ship = Ship(4)
  })

  it("It allows to add new Ship to the Board", () => {
    gameBoard.addShipToBattlefield([0, 0], true, ship)
    expect(gameBoard.getShips().length).toBe(1)
    gameBoard.addShipToBattlefield([5, 0], true, ship)
    expect(gameBoard.getShips().length).toBe(2)
  })

  it("It doesn't allow adding ship outside the board", () => {
    gameBoard.addShipToBattlefield([10, 0], true, ship)
    expect(gameBoard.getShips().length).toBe(0)
    gameBoard.addShipToBattlefield([0, 0], true, ship)
    expect(gameBoard.getShips().length).toBe(1)
    gameBoard.addShipToBattlefield([10, 0], true, ship)
    expect(gameBoard.getShips().length).toBe(1)
  })

  it("It doesn't allow ships to overlap", () => {
    gameBoard.addShipToBattlefield([0, 0], true, ship)
    expect(gameBoard.getShips().length).toBe(1)
    gameBoard.addShipToBattlefield([1, 0], true, ship)
    expect(gameBoard.getShips().length).toBe(1)
    gameBoard.addShipToBattlefield([1, 0], false, ship)
    expect(gameBoard.getShips().length).toBe(1)
  })
})

describe("#getShips", () => {
  let ship;
  let gameBoard;
  beforeEach(() => {
    gameBoard = GameBoard(10, 10);
    ship = Ship(4)
  })

  it("Returns the number of ships", () => {
    gameBoard.addShipToBattlefield([0, 0], true, ship)
    gameBoard.addShipToBattlefield([1, 1], true, ship)
    expect(gameBoard.getShips().length).toBe(2)
  })
})

describe("#recieveAttack", () => {
  let ship;
  let gameBoard;
  beforeEach(() => {
    gameBoard = GameBoard(10, 10);
    ship = Ship(4)
  })

  it("It recieves attack", () => {
    gameBoard.addShipToBattlefield([0, 0], true, ship)
    gameBoard.receiveAttack(1, 0)
    expect(ship.getFields()).toStrictEqual([0, 1, 0, 0])
    gameBoard.receiveAttack(5, 0)
    expect(ship.getFields()).toStrictEqual([0, 1, 0, 0])
    gameBoard.receiveAttack(0, 0)
    expect(ship.getFields()).toStrictEqual([1, 1, 0, 0])
  })

  it("it recordes missed attack", () => {
    gameBoard.addShipToBattlefield([0, 0], true, ship)
    gameBoard.receiveAttack(1, 1)
    expect(gameBoard.getMisses()).toStrictEqual([[1, 1]])
    gameBoard.receiveAttack(2, 2)
    expect(gameBoard.getMisses()).toStrictEqual([[1, 1], [2, 2]])
  })

  it("prevents from hitting same spot twice", () => {
    gameBoard.receiveAttack(1, 1)
    expect(gameBoard.getMisses()).toStrictEqual([[1, 1]])
    gameBoard.receiveAttack(1, 1)
    expect(gameBoard.getMisses()).toStrictEqual([[1, 1]])
  })
})
