import { ipcRenderer } from 'electron';
import _ from 'lodash';
const winId = 1;
class ManagerCenter {
  constructor() {
    this.init();
  }
  private events: Record<string, (arg: object) => Promise<any>> = {};
  sendAsync<T>(channel: string, ...args: any) {
    if (this.events[channel]) {
      return this.events[channel].apply(null, args);
    }
    return Promise.resolve(undefined);
  }
  send<T>(channel: string, ...args: any) {
    if (this.events[channel]) {
      return this.events[channel].apply(null, args);
    }
    return;
  }
  registerSync(channel: string, handler: (arg: object) => Promise<any>) {
    this.events[channel] = handler;
  }
  register(channel: string, handler: (arg: object) => any) {
    this.events[channel] = handler;
  }
  init() {
    this.register('create-tab', (payload: any) => {
      const id = ipcRenderer.invoke(`create-tab-${winId}`, { url: payload.url });
      return id;
    });
    this.registerSync('active-tab', (payload) => {
      ipcRenderer.invoke(`active-tab-${winId}`, payload);
      return Promise.resolve();
    });
    // this.register('')
  }
}
export const managerCenter = new ManagerCenter();
