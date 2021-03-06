const Port = require("../src/Port.js");

describe("with ports constructor", () => {
  let port;
  let ship = jest.fn();
  beforeEach(() => {
    port = new Port("Dover");
    port = new Port("Calais");
  });

  it("Returns the object", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("Shipping current port", () => {
    expect(port.name).toBe("Calais");
  });

  it("Can add ships", () => {
    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });

  it("can remove a ship", () => {
    const titanic = jest.fn();
    const queenMary = jest.fn();

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });
});
