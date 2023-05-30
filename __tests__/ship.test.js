const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("Ship", () => {
  let calais;
  let amsterdam;
  let itinerary;
  let ship;

  beforeEach(() => {
    calais = { name: "Calais", ships: [], addShip: jest.fn(), removeShip: jest.fn() };
    amsterdam = { name: "Amsterdam", ships: [], addShip: jest.fn(), removeShip: jest.fn() };
    itinerary = { ports: [calais, amsterdam] };
    ship = new Ship(itinerary);
  });

  describe("Instantiation of Itinerary and Ships/Port", () => {
    it("Ensures an instance of an object can be created", () => {
      expect(itinerary).toBeInstanceOf(Object);
    });

    it("Ship gets added to port on instantiation", () => {
      expect(calais.addShip).toHaveBeenCalledWith(ship);
    });
  });

  describe("Setting Sail", () => {
    it("has a starting port property", () => {
      expect(ship.currentPort).toBe(calais);
    });

    it("should be able to set sail", () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(calais.removeShip).toHaveBeenCalledWith(ship);
    });

    it("cannot sail beyond the itinerary", () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError(
        "Cannot set sail. End of itinerary reached."
      );
    });
  });

  describe("Docking at different port", () => {
    it("can dock at a different port", () => {
      ship.setSail();
      ship.dock();

      expect(ship.currentPort).toBe(amsterdam);
      expect(amsterdam.addShip).toHaveBeenCalledWith(ship);
    });
  });
});
