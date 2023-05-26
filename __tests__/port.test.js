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
