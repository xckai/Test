import { ipcMain } from 'electron';
import { EventEmitter } from 'events';
import _ from 'lodash';
import { INavigationStateChangeEvent } from '../common/event';
import logger from '../common/logger';
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
    const winId = this.appWindow.winId;
    ipcMain.handle(`create-tab-${winId}`, (e, details: ITabOption) => {
      const tab = this.createTab(details);
      return { ...details, tabId: tab.id };
    });
    ipcMain.handle(`active-tab-${winId}`, (e, details: ITabOption) => {
      return this.activeTab(details);
    });
    ipcMain.handle(`close-tab-${winId}`, (e, details: ITabOption) => {
      return this.closeTab(details);
    });
    ipcMain.handle(`update-url-${winId}`, (e, details: ITabOption) => {
      return this.updateUrl(details);
    });
    ipcMain.handle(`tab-goback-${winId}`, (e, details: ITabOption) => {
      return this.goBack(details);
    });
    ipcMain.handle(`tab-goforward-${winId}`, (e, details: ITabOption) => {
      return this.goForward(details);
    });
    ipcMain.handle(`tab-refresh-${winId}`, (e, details: ITabOption) => {
      return this.refresh(details);
    });
  }

  public createTab(property: chrome.tabs.CreateProperties, sendBackToBrowser = false) {
    const tab = new Tab(this.appWindow, prefixHttps(property.url));
    const id = tab.id;
    this.tabs.set(id, tab);
    this.appWindow.send('create-tab', { ...property });
    this.appWindow.browserWinRef.focus();
    tab.show();
    tab.force();
    this.crtActivedTab = tab;
    this.updateNavigationState();
    if (sendBackToBrowser) {
      this.appWindow.send('tab-created', { ...property, tabId: tab.id });
    }
    return tab;
  }
  public activeTab(tabOption: ITabOption) {
    const tab = this.tabs.get(tabOption.tabId);
    if (tab !== undefined) {
      tab.show();
      this.appWindow.browserWinRef.focus();
      tab.force();
      this.crtActivedTab = tab;
      this.appWindow.send('active-tab', tabOption);
      this.updateNavigationState();
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
      this.updateNavigationState();
    }
  }
  public goBack(tabOption: ITabOption) {
    const tab = this.tabs.get(tabOption.tabId);
    tab.webContents.goBack();
    this.appWindow.send('tab-goback', tabOption);
    this.updateNavigationState();
  }
  public goForward(tabOption: ITabOption) {
    const tab = this.tabs.get(tabOption.tabId);
    tab.webContents.goForward();
    this.appWindow.send('tab-goforward', tabOption);
    this.updateNavigationState();
  }
  public refresh(tabOption: ITabOption) {
    const tab = this.tabs.get(tabOption.tabId);
    tab.webContents.reload();
    this.appWindow.send('tab-reload', tabOption);
  }
  public updateNavigationState() {
    const e = {
      key: 'window-navigation-state-change',
      tabId: this.crtActivedTab.id,
      canGoBack: this.crtActivedTab.webContents.canGoBack(),
      canGoForward: this.crtActivedTab.webContents.canGoForward()
    } as INavigationStateChangeEvent;
    logger.info('win-navigation-update', e);
    this.appWindow.send('win-navigation-update', e);
  }
}
