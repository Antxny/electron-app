const { ipcMain } = require('electron');

ipcMain.on('button-click', (event, arg) => {
    console.log('Button clicked with argument:', arg);
    event.reply('button-click-reply', 'Message received from main process');
});
