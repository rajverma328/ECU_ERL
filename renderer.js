const { Board, Led } = require('johnny-five');
const Firmata = require('arduino-firmata');

const board = new Board({ io: new Firmata() });

let led;
let isLedOn = false;

board.on('ready', function() {
    led = new Led(13); // Change the pin number as per your setup

    document.getElementById('toggleButton').addEventListener('click', function() {
        isLedOn = !isLedOn;
        if (isLedOn) {
            led.on();
        } else {
            led.off();
        }
    });
});
