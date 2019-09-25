import Player from './player';

describe('Player', () => {
  let player;
  describe('#addShip', () => {
    beforeEach(() => {
      player = Player('Player');
      player.initiate(10, 10);
    });
    it('it should add ship', () => {
      player.addShip(0, 0, 'horizontal', 4);
      expect(player.getShips().length).toBe(1);
    });
  });

  describe('#receiveAttack', () => {

  });
  describe('#getMisses', () => {
    beforeEach(() => {
      player = Player('Player');
      player.initiate(10, 10);
    });
    it('it should reutrn missed hits', () => {
      player.addShip(0, 0, 'horizontal', 4);
      player.receiveAttack(1, 1);
      expect(player.getMisses().length).toBe(1);
    });
  });

  describe('#getShips', () => {
    beforeEach(() => {
      player = Player('Player');
      player.initiate(10, 10);
    });
    it('it should add ship', () => {
      player.addShip(0, 0, 'horizontal', 4);
      expect(player.getShips().length).toBe(1);
      expect(player.getShips()[0].initialCordinate).toStrictEqual([0, 0]);
      expect(player.getShips()[0].direction).toBe(true);
    });
  });
  describe('#checkGameOver', () => {
    let player1;
    beforeEach(() => {
      player1 = Player('PlayerName');
      player1.initiate(10, 10);
      player1.addShip(0, 0, 'horizontal', 4);
    });
    it('should return true if all the ship are sunk', () => {
      expect(player1.receiveAttack(0, 0)).toBe(true);
      expect(player1.receiveAttack(1, 0)).toBe(true);
      expect(player1.receiveAttack(2, 0)).toBe(true);
      expect(player1.receiveAttack(3, 0)).toBe(true);
      expect(player1.checkGameOver()).toBe(true);
    });
    it('should return false if not all the ship are sunk', () => {
      expect(player1.receiveAttack(0, 0)).toBe(true);
      expect(player1.receiveAttack(1, 0)).toBe(true);
      expect(player1.receiveAttack(2, 0)).toBe(true);
      expect(player1.receiveAttack(5, 0)).toBe(false);
      expect(player1.checkGameOver()).toBe(false);
    });
  });
  describe('#receiveAttack', () => {

  });
  describe('#getName', () => {
    it('It should return the name of the player', () => {
      player = Player('PlayerName');
      expect(player.getName()).toBe('PlayerName');
    });
  });
  describe('#checkField', () => {
    let player1;
    beforeEach(() => {
      player1 = Player('PlayerName');
      player1.initiate(10, 10);
      player1.addShip(0, 0, 'horizontal', 4);
    });
    it('should return true if the given coordinates belong to a ship', () => {
      expect(player1.checkField(0, 0)).toBe(true);
      expect(player1.checkField(1, 0)).toBe(true);
      expect(player1.checkField(2, 0)).toBe(true);
      expect(player1.checkField(3, 0)).toBe(true);
    });
    it("should return false if the given coordinates don't belong to any ship", () => {
      expect(player1.checkField(4, 0)).toBe(false);
      expect(player1.checkField(5, 5)).toBe(false);
    });
  });
});
