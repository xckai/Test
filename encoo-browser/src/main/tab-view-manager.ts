import { ipcMain } from 'electron';
import { EventEmitter } from 'events';
import { AppWindow } from './app-window';
import { TabView } from './tab-view';

export class TabManager extends EventEmitter {
  public tabs = new Map<number, TabView>();
  public appWindow: AppWindow;
  public constructor(appWin: AppWindow) {
    super();
    this.appWindow = appWin;
    ipcMain.handle(`create-tab-1`, (e, details) => {
      return this.createTab(details).id;
    });
  }
  public createTab(property: chrome.tabs.CreateProperties) {
    const tab = new TabView(this.appWindow, property.url);
    const id = tab.id;
    this.tabs.set(id, tab);
    this.appWindow.send('create-tab', { ...property });
    tab.show();
    return tab;
  }
}
