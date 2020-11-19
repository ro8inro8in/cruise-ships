const Itinerary = require("../src/Itinerary.js");

describe("Itinerary constructor", () => {
  let dover = jest.fn();
  let calais = jest.fn();
  let itinerary
  //beforeEach(() =>  {
    itinerary = new Itinerary([dover, calais]);
  //});
    
  it("Returns the object", () => { 
      expect(new Itinerary()).toBeInstanceOf(Object);
    
  });
  it("Itinerary has a ports property", () => {
    expect(itinerary.ports).toEqual([dover, calais])
  });
});