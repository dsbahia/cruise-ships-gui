const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("Ship", () => {
  let calais, amsterdam, itinerary, ship;

  beforeEach(() => {
    calais = new Port("Calais");
    amsterdam = new Port("Amsterdam");
    itinerary = new Itinerary([calais, amsterdam]);
    ship = new Ship(itinerary);
  });

  describe("Instantiation of Itinerary and Ships/Port", () => {
    it("Ensures an instance of an object can be created", () => {
      expect(itinerary).toBeInstanceOf(Object);
    });

    it("Ship gets added to port on instantiation", () => {
      expect(calais.ships).toContain(ship);
    });
  });

  describe("Setting Sail", () => {
    it("has a starting port property", () => {
      expect(ship.currentPort).toBe(calais);
    });

    it("should be able to set sail", () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(calais.ships.indexOf(ship)).toBe(-1);
    });

    it("cannot sail beyond the itinerary", () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError(
        "Cannot set sail. End of itinerary reached."
      );
    });
  });

  it("can dock at a different port", () => {
    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(amsterdam);
    expect(amsterdam.ships).toContain(ship);
  });
});
