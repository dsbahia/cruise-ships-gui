(function exportController() {
  class Controller {
    constructor(ship) {
      this.counter = 0;
      this.initializeSea();
      this.ship = ship;

      const sailButton = document.querySelector("#sailbutton");
      sailButton.addEventListener("click", () => {
        this.setSail();
      });
    }

    initializeSea() {
      setInterval(() => {
        const viewport = document.querySelector("#viewport");
        const backgroundImage =
          this.counter % 2 === 0 ? "images/water0.png" : "images/water1.png";
        viewport.style.backgroundImage = `url('${backgroundImage}')`;
        this.counter++;
      }, 1000);
    }

    renderPorts(ports) {
      const portsElement = document.querySelector("#ports");
      portsElement.style.width = "0px";

      ports.forEach((port, index) => {
        const newPortElement = document.createElement("div");
        newPortElement.classList.add("port");
        newPortElement.dataset.portIndex = index;
        portsElement.appendChild(newPortElement);
      });

      const portCount = ports.length;
      const portWidth = 256;
      portsElement.style.width = `${portCount * portWidth}px`;
    }

    renderShip() {
      const portElement = document.querySelector(
        `[data-port-index="${this.ship.itinerary.ports.indexOf(
          this.ship.currentPort
        )}"]`
      );
      const shipElement = document.querySelector("#ship");
      const offsetAdjustment = 32;

      const shipTop = portElement.offsetTop + offsetAdjustment;
      const shipLeft = portElement.offsetLeft - offsetAdjustment;

      shipElement.style.top = `${shipTop}px`;
      shipElement.style.left = `${shipLeft}px`;
    }

    renderMessage(message) {
      const viewport = document.querySelector("#viewport");

      const messageElement = document.createElement("div");
      messageElement.id = "message";
      messageElement.innerHTML = message;

      viewport.appendChild(messageElement);

      setTimeout(() => {
        viewport.removeChild(messageElement);
      }, 2000);
    }

    initializeHUD() {
      const ship = this.ship;
      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPort = ship.itinerary.ports[nextPortIndex];
      const hudMsg = `Current Port: ${ship.currentPort.name}<br>Next Port: ${nextPort.name}`;
      this.renderHUD(hudMsg);
    }

    renderHUD(message) {
      const viewport = document.querySelector("html");
      let hudElement = document.querySelector("#hud");

      if (hudElement) {
        hudElement.innerHTML = message;
      } else {
        hudElement = document.createElement("div");
        hudElement.id = "hud";
        hudElement.innerHTML = message;
        viewport.appendChild(hudElement);
      }
    }

    updateHUD() {
      const ship = this.ship;
      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPort = ship.itinerary.ports[nextPortIndex];

      if (nextPort) {
        const hudMsg = `Current Port: ${ship.currentPort.name}<br>Next Port: ${nextPort.name}`;
        this.renderHUD(hudMsg);
      } else {
        const hudMsg = `Current port: ${ship.currentPort.name}<br>This ship terminates here. Please disembark upon arrival.`;
        this.renderHUD(hudMsg);
      }
    }

    setSail() {
      const ship = this.ship;
      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(
        `[data-port-index='${nextPortIndex}']`
      );

      if (!nextPortElement) {
        console.log("End of the route!");
        this.renderMessage("End of the route!");
        return;
      }

      const shipElement = document.querySelector("#ship");
      const step = 1;
      const interval = 20;

      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        const destinationLeft = nextPortElement.offsetLeft - 32;

        if (shipLeft === destinationLeft) {
          clearInterval(sailInterval);
          ship.setSail();
          ship.dock();
          this.renderMessage(`Ship has reached ${ship.currentPort.name}`);
          this.updateHUD();
          console.log(`Reached port: ${ship.currentPort.name}`);
        } else {
          shipElement.style.left = `${shipLeft + step}px`;
        }
      }, interval);
    }
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
