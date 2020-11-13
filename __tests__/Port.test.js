const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");

describe("Port constructor", () => {
  it("Returns the object", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
});
  it("Shipping current port", () => {
  const port = new Port("Calais");
  expect(port).toEqual({name: 'Calais'})

});
// need to look at matchers toHaveProperty
//can use toMatchObject, and or toHaveProperty
