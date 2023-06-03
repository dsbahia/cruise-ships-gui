(function exportController() {
class Controller {
    constructor() {
        this.counter = 0;
        this.initializeSea();
    }
    initializeSea() {
        setInterval(() => {
            const viewport = document.querySelector("#viewport");
            const backgroundImage = this.counter % 2 === 0 ? "images/water0.png" : "images/water1.png";
            viewport.style.backgroundImage = `url('${backgroundImage}')`;

            this.counter++;
        }, 1000);
    }
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
} else {
    window.Controller = Controller;
}
}());