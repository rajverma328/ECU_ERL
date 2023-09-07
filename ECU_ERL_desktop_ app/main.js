const { app, BrowserWindow } = require('electron');
const { Board, Led } = require('johnny-five');
const Firmata = require('arduino-firmata');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        icon : __dirname + '/images/icon.png',
        // fullscreen: true
    });

    mainWindow.loadFile('index.html');
    mainWindow.maximize();
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});
