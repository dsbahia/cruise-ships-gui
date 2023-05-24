const Ship = require('../src/ship');
const Port = require('../src/port');

describe('constructor', () => {
    it('Ensures an instance of an object can be created', () => {
        const ship = new Ship();
        expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port property', () => {
        const port = new Port('Calais');
        const ship = new Ship(port);
        expect(ship.currentPort).toBe(port);
    });

    it('should be able to set sail from a port', () => {
        const ship = new Ship('Calais')
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });

    it('can dock to a new port', () => {
        const calais = new Port('Calais');
        const ship = new Ship(calais);
        const amsterdam = new Port('Amsterdam');
        ship.dock(amsterdam);
        expect(ship.currentPort).toBe(amsterdam);
    });
});