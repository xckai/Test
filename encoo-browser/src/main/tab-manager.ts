import { ipcMain } from 'electron';
import { EventEmitter } from 'events';
import _ from 'lodash';
import { ITabOption } from '../common/option';
import { prefixHttps } from '../common/util';
import { AppWindow } from './app-window';
import { Tab } from './tab';

export class TabManager extends EventEmitter {
  public tabs = new Map<number, Tab>();
  public appWindow: AppWindow;
  public crtActivedTab: Tab;
  public constructor(appWin: AppWindow) {
    super();
    this.appWindow = appWin;
    ipcMain.handle(`create-tab-1`, (e, details: ITabOption) => {
      return this.createTab(details).id;
    });
    ipcMain.handle(`active-tab-1`, (e, details: ITabOption) => {
      return this.activeTab(details);
    });
    ipcMain.handle(`close-tab-1`, (e, details: ITabOption) => {
      return this.closeTab(details);
    });
    ipcMain.handle(`update-url-1`, (e, details: ITabOption) => {
      console.log(details);
      return this.updateUrl(details);
    });
  }
  public createTab(property: chrome.tabs.CreateProperties) {
    const tab = new Tab(this.appWindow, prefixHttps(property.url));
    const id = tab.id;
    this.tabs.set(id, tab);
    this.appWindow.send('create-tab', { ...property });
    tab.show();
    tab.force();
    this.crtActivedTab = tab;
    return tab;
  }
  public activeTab(tabOption: ITabOption) {
    const tab = this.tabs.get(tabOption.tabId);
    if (tab !== undefined) {
      tab.show();
      tab.force();
      this.crtActivedTab = tab;
      this.appWindow.send('active-tab', tabOption);
    }
  }
  public closeTab(tabOption: ITabOption) {
    const tab = this.tabs.get(tabOption.tabId);
    this.tabs.delete(tabOption.tabId);
    if (!tab.webContents.isDestroyed()) {
      tab.close();
    }
    this.appWindow.send('close-tab', tabOption);
  }
  public updateUrl(tabOption: ITabOption) {
    const tab = this.tabs.get(tabOption.tabId);
    if (tab) {
      tab.loadUrl(prefixHttps(tabOption.url));
    }
  }
}
