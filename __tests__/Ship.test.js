const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");

describe("Ship constructor", () => {
  it("Returns the object", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});
it("has a starting port", () => {
  //const ship = new Ship("port");
  const port = new Port("Dover");
  const ship = new Ship(port);
  expect(ship.currentPort).toBe(port);
});
it("can set sail", () => {
  //const ship = new Ship('port');
  const port = new Port("Dover");
  const ship = new Ship(port);
  ship.setSail();
  expect(ship.currentPort).toBeFalsy();
});
it('can dock at a different port', () => {
  const dover = new Port ('Dover');
  const ship = new Ship (dover);

  const calais = new Port('Calais');
  ship.dock(calais);

  expect(ship.currentPort).toBe(calais)
})
