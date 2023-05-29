const Port = require("../src/port");

describe("Port", () => {
  let port 

  beforeEach(() => {
    port = new Port("Amsterdam");
  });

  it("Ensures an instance of a port object can be created", () => {
    expect(port).toBeInstanceOf(Object);
  });

  it("Port object has a name property", () => {
    expect(port.name).toBe("Amsterdam");
  });
  it("should add a ship to the port", () => {
    const ship = {};
    
    port.addShip(ship);

    expect(port.ships.includes(ship)).toBe(true);
  
  });
  it("should remove a ship from the port", () => {
    const shipOne = {};
    const shipTwo = {};

    port.addShip(shipOne);
    port.addShip(shipTwo)
    port.removeShip(shipTwo);

    expect(port.ships.includes(shipTwo)).toBe(false);
  });
});
