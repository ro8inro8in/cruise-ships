const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Ship can be Instantiated", () => {
  it("Returns the object", () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary)

    expect(ship).toBeInstanceOf(Object);
  });
});
it("has a starting port", () => {
  const port = new Port("Dover");
  const itinerary = new Itinerary([port]);
  const ship = new Ship(itinerary);
  expect(ship.currentPort).toBe(port);
});
it("can set sail", () => {
  const dover = new Port("Dover");
  const calais = new Port("Calais");
  const itinerary = new Itinerary([dover, calais]);
  const ship = new Ship(itinerary);
  ship.setSail();
  expect(ship.currentPort).toBeFalsy();
 // expect(ship.previousPort).toBe(port);

});
it("can dock at a different port", () => {
  const dover = new Port("Dover");
  const calais = new Port ("Calais")
  const itinerary = new Itinerary([dover, calais]);
  const ship = new Ship(itinerary);

  ship.setSail()
  ship.dock();

  expect(ship.currentPort).toBe(calais);
});
it ("can't sail further than its itinerary", () => {
   const dover = new Port ('Dover')
   const calais = new Port ('Calais')
   const itinerary = new Itinerary([dover, calais]);
   const ship = new Ship (itinerary);

   ship.setSail()
   ship.dock()

   expect(() => ship.setSail()).toThrowError('End of itinerary reached');

})
