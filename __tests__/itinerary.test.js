const Itinerary = require("../src/itinerary");

describe("Itinerary", () => {
  
  describe("instantiation of itinerary and ensuring it has a port", () => {
    it("Ensures an instance of the itinerary object can be created", () => {
      expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it("Itinerary object has a ports property", () => {
      const calais = jest.fn();
      const amsterdam = jest.fn();
      const itinerary = new Itinerary([calais, amsterdam]);

      expect(itinerary.ports).toEqual([calais, amsterdam]);
    });
  });
});
