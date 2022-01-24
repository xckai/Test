import { createSlice, PayloadAction, PreloadedState } from '@reduxjs/toolkit';
import _ from 'lodash';
import { ipcRenderer } from 'electron';
import { managerCenter } from './manager-center';
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
      const tabId = managerCenter.send('create-tab', { winId: action.payload.winId, url: action.payload.url });
      console.log(tabId);
      state.tabs = [...state.tabs, { id: tabId, url: action.payload.url, winId: action.payload.winId }];
      state.activeTabId = tabId;
      state.addressBarUrl = action.payload.url;
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
          s.addressBarUrl = t.url;
        }
      }
      return s;
    }
  }
});

// Action creators are generated for each case reducer function

export default windowStoreManger.reducer;
