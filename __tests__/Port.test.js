const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Port constructor", () => {
  it("Returns the object", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
});
it("Shipping current port", () => {
  const port = new Port("Calais");
  expect(port.name).toBe("Calais");
});

it("Can add new ships", () => {
  const port = new Port("Dover");
  const ship = {};

  port.addShip(ship);

  expect(port.ships).toContain(ship);
});

it("can remove a ship", () => {
  const port = new Port("Dover");
  const titanic = {};
  const queenMary = {};

  port.addShip(titanic);
  port.addShip(queenMary);
  port.removeShip(queenMary);

  expect(port.ships).toEqual([titanic]);
});
