import { BrowserView, BrowserWindow } from 'electron';

export class AppWindow {
  public browserWinRef: BrowserWindow;
  public constructor() {
    this.browserWinRef = new BrowserWindow({
      frame: false,
      minWidth: 600,
      minHeight: 500,
      backgroundColor: '#ffffff',
      webPreferences: {
        plugins: false,
        // TODO: enable sandbox, contextIsolation and disable nodeIntegration to improve security
        nodeIntegration: true,
        contextIsolation: false,
        javascript: true
      },
      show: false
    });
  }
  public show() {
    if (process.env.NODE_ENV === 'development') {
      this.webContents.openDevTools({ mode: 'detach' });
      this.browserWinRef.loadURL('http://localhost:9000/MainBrowserLayout.html');
    } else {
      this.browserWinRef.loadURL('./dist/app.html');
    }
    this.browserWinRef.show();
  }
  public get webContents() {
    return this.browserWinRef.webContents;
  }
}
