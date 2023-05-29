const Port = require("../src/port");

describe("constructor", () => {
  it("Ensures an instance of a port object can be created", () => {
    const port = new Port();

    expect(port).toBeInstanceOf(Object);
  });

  it("Port object has a name property", () => {
    const port = new Port("Amsterdam");

    expect(port.name).toBe("Amsterdam");
  });
});
describe("Adding ships (addShip) to Port", () => {
  it("should add a ship to the port", () => {
    const port = new Port("Wanderlust");
    const ship = {};
    
    port.addShip(ship);

    expect(port.ships.includes(ship)).toBe(true);
  
  });
});
describe("Removing ships (removeShip) from Port", () => {
  it("should remove a ship from the port", () => {
    const port = new Port("Wanderlust");
    const shipOne = {};
    const shipTwo = {};

    port.addShip(shipOne);
    port.addShip(shipTwo)
    port.removeShip(shipTwo);

    expect(port.ships.includes(shipTwo)).toBe(false);

  });
});
