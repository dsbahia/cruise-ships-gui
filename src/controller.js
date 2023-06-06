(function exportController() {
  class Controller {
    constructor() {
      this.counter = 0;
      this.initializeSea();
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

    renderShip(ship) {
        const portElement = document.querySelector(`[data-port-index="${ship.itinerary.ports.indexOf(ship.currentPort)}"]`);
        const shipElement = document.querySelector('#ship');
        const offsetAdjustment = 32
        
        const shipTop = portElement.offsetTop + offsetAdjustment;
        const shipLeft = portElement.offsetLeft - offsetAdjustment;
        
        shipElement.style.top = `${shipTop}px`;
        shipElement.style.left = `${shipLeft}px`;
    };
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
