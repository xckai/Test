import { BrowserView, BrowserWindow } from 'electron';
import { TabManager } from './tab-view-manager';

export class AppWindow {
  public browserWinRef: BrowserWindow;
  public TabManager: TabManager;
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
  public send(channel: string, ...args: any[]) {
    this.webContents.send(channel, ...args);
  }
  public show() {
    this.TabManager = new TabManager(this);
    if (process.env.NODE_ENV === 'development') {
      this.webContents.openDevTools({ mode: 'detach' });
      this.browserWinRef.loadURL('http://localhost:9000/MainWindowPage.html');
    } else {
      this.browserWinRef.loadURL('./dist/app.html');
    }
    this.browserWinRef.show();
  }
  public get webContents() {
    return this.browserWinRef.webContents;
  }
}
