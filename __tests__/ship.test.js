const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("constructor", () => {
  it("Ensures an instance of an object can be created", () => {
    const itinerary = new Itinerary();

    expect(itinerary).toBeInstanceOf(Object);
  });

  it("has a starting port property", () => {
    const port = new Port("Calais");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(port);
  });

  it("should be able to set sail", () => {
    const calais = new Port("Calais");
    const amsterdam = new Port("Amsterdam");

    const itinerary = new Itinerary([calais, amsterdam]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(calais.ships.indexOf(ship)).toBe(-1);
  });

  it("can dock at a different port", () => {
    const calais = new Port("Calais");
    const amsterdam = new Port("Amsterdam");

    const itinerary = new Itinerary([calais, amsterdam]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(amsterdam);
    expect(amsterdam.ships).toContain(ship);
  });

  it("cannot sail beyond the itinerary", () => {
    const calais = new Port("Calais");
    const amsterdam = new Port("Amsterdam");

    const itinerary = new Itinerary([calais, amsterdam]);

    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError(
      "Cannot set sail. End of itinerary reached."
    );
  });

  it("Ship gets added to port on instaniation", () => {
    const calais = new Port("Calais");
    const itinerary = new Itinerary([calais]);
    const ship = new Ship (itinerary);

    expect(calais.ships).toContain(ship);
  });
});
