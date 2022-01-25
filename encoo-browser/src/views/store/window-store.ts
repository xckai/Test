import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import _, { merge } from 'lodash';
import { actionCenter } from './action-center';
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
export const addTabAsync = createAsyncThunk('tab/addtabAsync', async (payload: { winId: number; url: string }) => {
  const tabId = await actionCenter.createTab({ winId: payload.winId, url: payload.url });
  return {
    ...payload,
    tabId: tabId
  };
});
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
          t.title = a.payload.url;
        }
        return t;
      });
      s.addressBarUrl = a.payload.url;
      actionCenter.updateUrl({ tabId: s.activeTabId, url: a.payload.url, title: a.payload.url });
      return s;
    },

    activeTab: (state, action: PayloadAction<{ tabId: number; winId: number }>) => {
      state.activeTabId = action.payload.tabId;
      state.addressBarUrl = state.tabs.filter((t) => t.id == action.payload.tabId)[0].url;
      actionCenter.activeTab({ winId: action.payload.winId, tabId: action.payload.tabId });
      return state;
    },
    removeTab: (s, a: PayloadAction<{ tabId: number; winId: number }>) => {
      s.tabs = s.tabs.filter((t) => {
        return t.id !== a.payload.tabId;
      });
      actionCenter.closeTab(a.payload);
      if (s.activeTabId == a.payload.tabId) {
        let t = _(s.tabs)
          .filter((t) => t.winId == a.payload.winId)
          .last();
        if (t == undefined) {
          //窗体关闭
        } else {
          s.activeTabId = t.id;
          s.addressBarUrl = t.url;
          actionCenter.activeTab({ tabId: t.id, winId: a.payload.winId });
        }
      }
      return s;
    },
    updateTabStatus: (s, a: PayloadAction<{ tabId: number; winId: number; title?: string }>) => {
      s.tabs = s.tabs.map((t) => {
        if (t.id == a.payload.tabId) {
          t.title = a.payload.title;
        }
        return t;
      });
      return s;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addTabAsync.fulfilled, (state, action) => {
      const tabId = action.payload.tabId;
      state.tabs = [...state.tabs, { id: tabId, url: action.payload.url, winId: action.payload.winId, title: action.payload.url }];
      state.activeTabId = tabId;
      state.addressBarUrl = action.payload.url;
      return state;
    });
  }
});
// Action creators are generated for each case reducer function
export const WindowStoreActions = merge(windowStoreManger.actions, { addTabAsync: addTabAsync });
export default windowStoreManger.reducer;
