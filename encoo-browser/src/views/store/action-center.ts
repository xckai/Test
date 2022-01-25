import { ipcRenderer } from 'electron';
import _ from 'lodash';
import { ITabEvents } from '../../common/event';
import { ITabOption } from '../../common/option';
import { MainWindowStore } from './main-store';
import { WindowStoreActions } from './window-store';
const winId = 1;
class ActionCenter {
  constructor() {
    ipcRenderer.on('tab-event', (e, tabEvent: ITabEvents) => {
      if (tabEvent.key == 'title-change') {
        console.log(tabEvent);
        MainWindowStore.dispatch(
          WindowStoreActions.updateTabStatus({
            tabId: tabEvent.tabId,
            winId: tabEvent.winId,
            title: tabEvent.title
          })
        );
      }
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
  updateUrl(option: ITabOption) {
    return ipcRenderer.invoke(`update-url-${winId}`, option);
  }
}
export const actionCenter = new ActionCenter();
