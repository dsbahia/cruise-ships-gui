function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
  this.currentPort.addShip(this);
}

Ship.prototype.setSail = function (currentPort) {
  const itinerary = this.itinerary;
  const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

  if (currentPortIndex === itinerary.ports.length - 1) {
    throw new Error("Cannot set sail. End of itinerary reached.");
  }

  this.previousPort = this.currentPort;

  if (this.previousPort) {
    const shipIndex = this.previousPort.ships.indexOf(this);
    if (shipIndex !== -1) {
      this.previousPort.ships.splice(shipIndex, 1);
    }
  }

  this.currentPort = null;
};

Ship.prototype.dock = function (newPort) {
  const itinerary = this.itinerary;
  const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

  this.currentPort = itinerary.ports[previousPortIndex + 1];

  this.currentPort.addShip(this);
};

module.exports = Ship;