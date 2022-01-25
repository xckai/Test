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
