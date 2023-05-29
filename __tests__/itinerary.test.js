const Itinerary = require("../src/itinerary");
const Port = require("../src/port");

describe("Itinerary", () => {
  let calais, amsterdam, itinerary;

  beforeEach(() => {
    calais = new Port("Calais");
    amsterdam = new Port("Amsterdam");
    itinerary = new Itinerary([calais, amsterdam]);
  });

  it("Ensures an instance of the itinerary object can be created", () => {
    expect(itinerary).toBeInstanceOf(Object);
  });

  it("Itinerary object has a ports property", () => {
    expect(itinerary.ports).toEqual([calais, amsterdam]);
  });
});
