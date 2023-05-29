const Port = require("../src/port");

describe("Port", () => {
  let port, ship, shipOne, shipTwo;

  beforeEach(() => {
    port = new Port("Amsterdam");
    shipOne = jest.fn();
    shipTwo = jest.fn();
  });

  it("Ensures an instance of a port object can be created", () => {
    expect(port).toBeInstanceOf(Object);
  });

  it("Port object has a name property", () => {
    expect(port.name).toBe("Amsterdam");
  });

  it("should add a ship to the port", () => {
    port.addShip(shipOne);
    expect(port.ships.includes(shipOne)).toBe(true);
  
  });
  
  it("should remove a ship from the port", () => {
    port.addShip(shipOne);
    port.addShip(shipTwo)
    port.removeShip(shipTwo);

    expect(port.ships.includes(shipTwo)).toBe(false);
  });
});
