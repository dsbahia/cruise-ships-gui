function Ship(port) {
    this.name - port;
    this.startingPort = port;
}

Ship.prototype.setSail = function() {
    this.startingPort = 0;
};

function Port(port) {
    this.port = port;
}

module.exports = Ship;