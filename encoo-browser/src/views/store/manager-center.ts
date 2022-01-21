import _ from 'lodash';

class ManagerCenter {
  constructor() {
    this.init();
  }
  private events: Record<string, (arg: object) => Promise<any>> = {};
  sendAsync<T>(channel: string, arg: T) {
    if (this.events[channel]) {
      return this.events[channel].apply(null, arg);
    }
    return Promise.resolve(undefined);
  }
  register(channel: string, handler: (arg: object) => Promise<any>) {
    this.events[channel] = handler;
  }
  init() {
    // this.register('')
  }
}
export const managerCenter = new ManagerCenter();
