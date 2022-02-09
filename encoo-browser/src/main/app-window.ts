import { BrowserView, BrowserWindow, ipcMain } from 'electron';
import { IWindowSizeChangeEvent } from '../common/event';
import logger from '../common/logger';
import { TabManager } from './tab-manager';
import { resolve } from 'path';
export class AppWindow {
  public winId: number = 1;
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
        nodeIntegration: true,
        contextIsolation: false,
        javascript: true
      },
      show: false
    });

    this.browserWinRef.on('resize', () => {
      const isMaximized = this.browserWinRef.isMaximized();
      this.send('win-resize', { isMaxWindow: isMaximized } as IWindowSizeChangeEvent);
    });
    ipcMain.handle(`close-win-${this.winId}`, (e, details) => {
      this.browserWinRef.close();
      return null;
    });
    ipcMain.handle(`max-win-${this.winId}`, (e, details) => {
      this.browserWinRef.maximize();
      return null;
    });
    ipcMain.handle(`min-win-${this.winId}`, (e, details) => {
      this.browserWinRef.minimize();
      return null;
    });
    ipcMain.handle(`normal-win-${this.winId}`, (e, details) => {
      this.browserWinRef.unmaximize();
      return null;
    });
  }
  public send(channel: string, ...args: any[]) {
    this.webContents.send(channel, ...args);
  }
  public show() {
    this.TabManager = new TabManager(this);
    this.webContents.openDevTools({ mode: 'detach' });
    if (process.env.NODE_ENV === 'development') {
      this.browserWinRef.loadURL('http://127.0.0.1/MainWindowPage.html');
    } else {
      //this.browserWinRef.loadURL('https://www.baidu.com');
      this.browserWinRef.loadFile('./dist/ui/MainWindowPage.html');
    }

    this.browserWinRef.show();
  }
  public get webContents() {
    return this.browserWinRef.webContents;
  }
}
