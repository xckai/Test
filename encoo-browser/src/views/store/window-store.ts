import { createSlice, PayloadAction, PreloadedState } from '@reduxjs/toolkit';
import _ from 'lodash';
import { ipcRenderer } from 'electron';
export interface Tab {
  id: number;
  winId: number;
  url: string;
  title?: string;
}
export interface WindowState {
  winId: number;
  addressBarUrl: string;
}

export const windowStoreManger = createSlice({
  name: 'address-bar-manger',
  initialState: {
    winId: 1,
    addressBarUrl: '',
    tabIdCursor: 0,
    activeTabId: 0,
    tabs: [] as Array<Tab>
  },
  reducers: {
    setAddressBarUrl: (s, a: PayloadAction<{ url: string }>) => {
      s.addressBarUrl = a.payload.url;
      return s;
    },
    changeCurrentUrl: (s, a: PayloadAction<{ url: string }>) => {
      s.tabs = s.tabs.map((t) => {
        if (t.id == s.activeTabId) {
          t.url = a.payload.url;
        }
        return t;
      });
      s.addressBarUrl = a.payload.url;
      return s;
    },
    addTab: (state, action: PayloadAction<{ url: string; winId: number }>) => {
      state.tabIdCursor = state.tabIdCursor + 1;
      state.tabs = [...state.tabs, { id: state.tabIdCursor, url: action.payload.url, winId: action.payload.winId }];
      state.activeTabId = state.tabIdCursor;
      state.addressBarUrl = action.payload.url;
      ipcRenderer.emit('add-tab', { winId: action.payload.winId, url: action.payload.url, tabId: state.activeTabId });
      return state;
    },
    activeTab: (state, action: PayloadAction<{ tabId: number; winId: number }>) => {
      state.activeTabId = action.payload.tabId;
      state.addressBarUrl = state.tabs.filter((t) => t.id == action.payload.tabId)[0].url;
      return state;
    },
    removeTab: (s, a: PayloadAction<{ tabId: number; winId: number }>) => {
      s.tabs = s.tabs.filter((t) => {
        return t.id !== a.payload.tabId;
      });
      if (s.activeTabId == a.payload.tabId) {
        let t = _(s.tabs)
          .filter((t) => t.winId == a.payload.winId)
          .last();
        if (t == undefined) {
          //窗体关闭
        } else {
          s.activeTabId = t.id;
        }
      }
      return s;
    }
  }
});

// Action creators are generated for each case reducer function

export default windowStoreManger.reducer;
