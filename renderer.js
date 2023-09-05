const { Board, Led } = require('johnny-five');
const Firmata = require('arduino-firmata');
const SerialPort = require('serialport');
let board;

// Get a reference to the <select> element in your HTML
const comPortSelect = document.getElementById('comPortSelect');

// Enumerate available COM ports and populate the dropdown
SerialPort.list().then(ports => {
    ports.forEach(port => {
        const option = document.createElement('option');
        option.value = port.path;
        option.text = port.path;
        comPortSelect.appendChild(option);
    });
}).catch(err => {
    console.error('Error listing COM ports:', err);
});


function initializeBoard(comPort) {
    board = new Board({ io: new Firmata(comPort) });
    board.on('ready', function() {
    });
}

// Event listener for when a COM port is selected from the dropdown
comPortSelect.addEventListener('change', function() {
    const selectedComPort = comPortSelect.value;
    // Close the current board if it exists
    if (board) {
        board.close();
    }
    // Initialize the board with the selected COM port
    initializeBoard(selectedComPort);
});
