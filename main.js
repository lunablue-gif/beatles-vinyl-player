const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 400,
        height: 500,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, // Allows renderer.js to interact properly
            enableRemoteModule: true
        }
    });

    win.loadFile(path.join(__dirname, 'index.html'));

    win.on('closed', () => {
        win = null;
    });
}

// Handle when app is ready
app.whenReady().then(createWindow);

// Handle quitting the app correctly on different OS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Ensure app reopens on macOS
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
