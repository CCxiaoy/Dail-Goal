const electron = window.require('electron')
const { ipcRenderer } = electron

export function closeMain() {
    ipcRenderer.send('mainWindow:close')
}