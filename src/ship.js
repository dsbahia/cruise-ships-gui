function Ship(port) {
    this.name = port;
    this.currentPort = port;
}

Ship.prototype.setSail = function() {
    this.currentPort = 0;
};

Ship.prototype.dock = function(newPort) {
    this.currentPort = newPort;
};

module.exports = Ship;