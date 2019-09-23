const {
  Player
} = require("./player");
const {Ship} = require("./ship");

describe("Player", () => {
  let player;
  describe("#addShip", () => {
    beforeEach(()=>{
      player=Player("Player")
      player.initiate(10,10)
    })
    it("it should add ship",()=>{
      player.addShip(0,0,"horizontal",4)
      expect(player.getShips().length).toBe(1)
    })
  })

  describe("#receiveAttack", () => {

  })
  describe("#getMisses", () => {
    beforeEach(()=>{
      player=Player("Player")
      player.initiate(10,10)
    })
    it("it should reutrn missed hits",()=>{
      player.addShip(0,0,"horizontal",4)
      player.receiveAttack(1,1)
      expect(player.getMisses().length).toBe(1)
    })
  })

  describe("#getShips", () => {
    beforeEach(()=>{
      player=Player("Player")
      player.initiate(10,10)
    })
    it("it should add ship",()=>{
      player.addShip(0,0,"horizontal",4)
      expect(player.getShips().length).toBe(1)
      console.log(player.getShips()[0].object)
      console.log(player.getShips()[0].object instanceof Ship).toBe(true)
      expect(player.getShips()[0].initialCordinate).toStrictEqual([0,0])
      expect(player.getShips()[0].direction).toBe(true)
      //expect(player.getShips()[0].initialCordinate).toStrictEqual([0,0])
    })

  })
  describe("#checkGameOver", () => {

  })
})