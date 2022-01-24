import { app, BrowserView } from 'electron';
import { AppWindow } from './app-window';

export class TabView {
  public browserViewRef: BrowserView;
  public initUrl: string;
  public appWindow: AppWindow;
  public constructor(appWin: AppWindow, url: string) {
    this.browserViewRef = new BrowserView({
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
        sandbox: true,
        plugins: true,
        nativeWindowOpen: true,
        webSecurity: true,
        javascript: true
      }
    });
    this.webContents.loadURL(url);
    this.browserViewRef.setAutoResize({
      width: true,
      height: true,
      horizontal: false,
      vertical: false
    });
    this.appWindow = appWin;
  }
  public show() {
    this.appWindow.browserWinRef.setBrowserView(this.browserViewRef);
    const bound = this.appWindow.browserWinRef.getBounds();
    this.browserViewRef.setBounds({ x: 0, y: 80, width: bound.width, height: bound.height - 80 });
  }
  public send(channel: string, ...args: any[]) {
    this.webContents.send(channel, ...args);
  }
  public get webContents() {
    return this.browserViewRef.webContents;
  }
  public get url() {
    return this.webContents.getURL();
  }

  public get title() {
    return this.webContents.getTitle();
  }

  public get id() {
    return this.webContents.id;
  }
}
