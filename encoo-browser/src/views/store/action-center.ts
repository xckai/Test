import { ipcRenderer } from 'electron';
import _ from 'lodash';
import { INavigationStateChangeEvent, ITabCreatedEvent, ITabEvents, IWindowEvents } from '../../common/event';
import logger from '../../common/logger';
import { ITabOption } from '../../common/option';
import { MainWindowStore } from './main-store';
import { WindowStoreActions } from './store-slices';
const winId = 1;
class ActionCenter {
  constructor() {
    ipcRenderer.on('tab-event', (e, tabEvent: ITabEvents) => {
      logger.info('tab-event', tabEvent);
      if (tabEvent.key == 'title-change') {
        MainWindowStore.dispatch(
          WindowStoreActions.updateTabStatus({
            tabId: tabEvent.tabId,
            winId: tabEvent.winId,
            title: tabEvent.title
          })
        );
      }
    });
    ipcRenderer.on('win-resize', (e, winEvent: IWindowEvents) => {
      logger.info('win-resize', winEvent);
      MainWindowStore.dispatch(WindowStoreActions.changeWindowSize({ isMaxSize: winEvent.isMaxWindow }));
    });
    ipcRenderer.on('win-navigation-update', (e, winEvent: INavigationStateChangeEvent) => {
      logger.info('win-navigation-update', winEvent);
      MainWindowStore.dispatch(WindowStoreActions.updateNavicationState(winEvent));
    });
    ipcRenderer.on('tab-created', (e, event: ITabCreatedEvent) => {
      MainWindowStore.dispatch(
        WindowStoreActions.addTab({
          tabId: event.tabId,
          url: event.url,
          title: event.title,
          winId: event.winId
        })
      );
    });
  }
  activeTab(option: ITabOption) {
    ipcRenderer.invoke(`active-tab-${winId}`, option);
  }
  createTab(option: ITabOption) {
    return ipcRenderer.invoke(`create-tab-${winId}`, option);
  }
  closeTab(option: ITabOption) {
    return ipcRenderer.invoke(`close-tab-${winId}`, option);
  }
  goBack(option: ITabOption) {
    return ipcRenderer.invoke(`tab-goback-${winId}`, option);
  }
  goForward(option: ITabOption) {
    return ipcRenderer.invoke(`tab-goforward-${winId}`, option);
  }
  refresh(option: ITabOption) {
    return ipcRenderer.invoke(`tab-refresh-${winId}`, option);
  }
  updateUrl(option: ITabOption) {
    return ipcRenderer.invoke(`update-url-${winId}`, option);
  }
  closeWindow() {
    return ipcRenderer.invoke(`close-win-${winId}`);
  }
  maxWindow() {
    return ipcRenderer.invoke(`max-win-${winId}`);
  }
  minWindow() {
    return ipcRenderer.invoke(`min-win-${winId}`);
  }
  normalWindow() {
    return ipcRenderer.invoke(`normal-win-${winId}`);
  }
}
export const actionCenter = new ActionCenter();
