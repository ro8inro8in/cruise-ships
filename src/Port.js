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
//Port.prototype.removeShip = function () {
//  this.ships.splice(1, 1);
//  Port.prototype = {
//   removeShip(){
//     this.ships.splice(1, 1)
//},
