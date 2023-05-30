# Cruise Ships

This is a project where i'm building and working with many objects that allow a cruise ship to operate. Hopefully we don't hit any icebergs on the way.

## Development Setup

Fork this repository and clone down your fork.

Run npm install to install the necessary libraries required for Node.js to run.

## Would you like to set sail to paradise?

Open Node REPL in your terminal using node command.

Copy the following and return 

```const Itinerary = require('./src/itinerary.js');```
```const Port = require('./src/port.js');```
```const Ship = require('./src/ship.js');```

Create your ports, for example:

```const portRoyal = new Port("Port Royal");```
```const atlantis = new Port("Atlantis");```
```const elysium = new Port("Elysium");```
```const valhalla = new Port("Valhalla");```
```const shangriLa = new Port("Shangri-La");```

Create your itinerary:

```const itinerary = new Itinerary([portRoyal, atlantis, elysium, valhalla, shangriLa]);```

Come up with a creative name for your boat:

```const BoatyMcBoatFace = new Ship(itinerary);```

Then you can use the following commands to set sail and dock your ship:

```BoatyMcBoatFace.setSail();```
```BoatyMcBoatFace.dock();```

What happens if I reach my final destination and try to set sail?

You'll receive an uncaught error:

**Uncaught Error: Cannot set sail. End of itinerary reached.** 

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

[Dal Bahia](https://github.com/dsbahia/) with great appreciation and thanks to [Command Shift](http://www.commandshift.co/)

## License

[MIT](https://choosealicense.com/licenses/mit/)