const Port = require("../src/Port.js");
describe("with ports", () => {
  let port;
  beforeEach(() => {
    port = new Port("Dover");
    port = new Port("Calais");
  });
  describe("Port constructor", () => {
    it("Returns the object", () => {
      expect(new Port()).toBeInstanceOf(Object);
    });

    it("Shipping current port", () => {
      expect(port.name).toBe("Calais");
    });

    it("Can add new ships", () => {
      const ship = {};

      port.addShip(ship);

      expect(port.ships).toContain(ship);
    });

    it("can remove a ship", () => {
      const titanic = {};
      const queenMary = {};

      port.addShip(titanic);
      port.addShip(queenMary);
      port.removeShip(queenMary);

      expect(port.ships).toEqual([titanic]);
    });
  });
});
