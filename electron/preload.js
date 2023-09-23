const { contextBridge, ipcRenderer } = require('electron');

// Expose ipcRenderer to the renderer process
contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);

// Listen for messages from the main process
ipcRenderer.on('message', (event, message) => {
  // Handle the message
});

// Send a message to the main process
ipcRenderer.send('message', 'Hello from the renderer process!');