import Ship from './ship';

describe('Ship', () => {
  describe('#length', () => {
    let ship;
    beforeEach(() => {
      ship = Ship(3);
    });
    it('It should return the size of the ship', () => {
      expect(ship.length()).toBe(3);
    });
  });
  describe('#hit', () => {
    let ship;
    beforeEach(() => ship = Ship(3));
    it('It should return true when the field in the ship is not already hitted', () => {
      expect(ship.hit(1)).toBe(true);
    });
    it('It should return false when the field in the ship is already hitted', () => {
      expect(ship.hit(1)).toBe(true);
      expect(ship.hit(1)).toBe(false);
    });
  });

  describe('#isSunk', () => {
    let ship;
    beforeEach(() => ship = Ship(3));
    it('It should return false if not all the fields of the ship are hitted', () => {
      expect(ship.hit(0)).toBe(true);
      expect(ship.hit(1)).toBe(true);
      expect(ship.isSunk()).toBe(false);
    });
    it('It should return true if all the fields of the ship are hitted', () => {
      expect(ship.hit(0)).toBe(true);
      expect(ship.hit(1)).toBe(true);
      expect(ship.hit(2)).toBe(true);
      expect(ship.isSunk()).toBe(true);
    });
  });

  describe('#getFields', () => {
    let ship;
    beforeEach(() => ship = Ship(3));
    it('It should return an array that represent the status of the fields', () => {
      expect(ship.hit(0)).toBe(true);
      expect(ship.hit(1)).toBe(true);
      expect(ship.getFields()).toStrictEqual([1, 1, 0]);
    });
  });
});
