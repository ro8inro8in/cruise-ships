function Port(name) {
  this.name = name;
  this.ships = [];
}
Port.prototype = {
  addShip(ship) {
    this.ships.push(ship);
  },
  removeShip(ship) {
    this.ships.pop(ship);
  },
};
module.exports = Port;

