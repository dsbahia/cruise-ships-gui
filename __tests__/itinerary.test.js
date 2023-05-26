const Itinerary = require("../src/itinerary");
const Port = require("../src/port");

describe("constructor", () => {
  it("Ensures an instance of the itinerary object can be created", () => {
    const itinerary = new Itinerary();

    expect(itinerary).toBeInstanceOf(Object);
  });

  it("Itinerary object has a ports property", () => {
    const calais = new Port("Calais");
    const amsterdam = new Port("Amsterdam");
    const itinerary = new Itinerary([calais, amsterdam]);

    expect(itinerary.ports).toEqual([calais, amsterdam]);
  });
});
