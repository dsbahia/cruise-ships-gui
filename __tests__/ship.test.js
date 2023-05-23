const Ship = require('../src/ship');

describe('constructor', () => {
    it('Ensures an instance of an object can be created', () => {
        const ship = new Ship();
        expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port property', () => {
        const ship = new Ship('Calais');
        expect(ship.startingPort).toBe('Calais');
    });

    it('should be able to set sail from a port', () => {
        const ship = new Ship('Calais')
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
});