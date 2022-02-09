export type ITabEvents = ITabTitleChange | ITabStatusChange;
export interface ITabTitleChange {
  key: 'title-change';
  title: string;
  tabId: number;
  winId?: number;
}
export interface ITabStatusChange {
  key: 'status-change';
  tabId: number;
  winId?: number;
  isLoading: boolean;
}
export type IWindowEvents = IWindowSizeChangeEvent;
export interface IWindowSizeChangeEvent {
  key: 'window-size-change';
  width: number;
  height: number;
  isMaxWindow: boolean;
}
export interface INavigationStateChangeEvent {
  key: 'window-navigation-state-change';
  canGoBack: boolean;
  canGoForward: boolean;
}
export interface ITabCreatedEvent {
  key: 'tab-create';
  title: string;
  tabId: number;
  url: string;
  winId?: number;
}
