import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import _, { merge } from 'lodash';
import { stat } from 'original-fs';
import { INavigationStateChangeEvent } from '../../common/event';
import logger from '../../common/logger';
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
const addTabAsync = createAsyncThunk('tab/addtabAsync', async (payload: { winId: number; url: string }) => {
  const tab = await actionCenter.createTab({ winId: payload.winId, url: payload.url });
  return {
    ...payload,
    ...tab
  };
});

export const windowStoreManger = createSlice({
  name: 'windowStoreManger',
  initialState: {
    navication: {
      canGoBack: false,
      canGoForward: false
    },
    winId: 1,
    addressBarUrl: '',
    activeTabId: 0,
    isNormalSize: true,
    tabs: [] as Array<Tab>
  },
  reducers: {
    setAddressBarUrl: (s, a: PayloadAction<{ url: string }>) => {
      s.addressBarUrl = a.payload.url;
      return s;
    },
    onClickWindowControl(s, a: PayloadAction<{ action: 'min' | 'switch' | 'close' }>) {
      if (a.payload.action == 'min') {
        actionCenter.minWindow();
      } else if (a.payload.action == 'switch') {
        if (s.isNormalSize) {
          actionCenter.maxWindow();
        } else {
          actionCenter.normalWindow();
        }
      } else {
        actionCenter.closeWindow();
      }
      return s;
    },
    changeWindowSize(s, a: PayloadAction<{ isMaxSize: boolean }>) {
      s.isNormalSize = !a.payload.isMaxSize;
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
    doNavigation(state, action: PayloadAction<{ action: 'goback' | 'goforward' | 'refresh' }>) {
      switch (action.payload.action) {
        case 'goback':
          actionCenter.goBack({ tabId: state.activeTabId });
          break;
        case 'goforward':
          actionCenter.goForward({ tabId: state.activeTabId });
          break;
        case 'refresh':
          actionCenter.refresh({ tabId: state.activeTabId });
          break;
        default:
      }
      return state;
    },
    updateNavicationState: (state, action: PayloadAction<INavigationStateChangeEvent>) => {
      state.navication.canGoBack = action.payload.canGoBack;
      state.navication.canGoForward = action.payload.canGoForward;
      return state;
    },
    activeTab: (state, action: PayloadAction<{ tabId: number; winId: number }>) => {
      state.activeTabId = action.payload.tabId;
      state.addressBarUrl = state.tabs.filter((t) => t.id == action.payload.tabId)[0].url;
      actionCenter.activeTab({ winId: action.payload.winId, tabId: action.payload.tabId });
      return state;
    },
    addTab: (state, action: PayloadAction<{ tabId: number; winId: number; url: string; title: string }>) => {
      const tabId = action.payload.tabId;
      state.tabs = [...state.tabs, { id: tabId, url: action.payload.url, winId: action.payload.winId, title: action.payload.title }];
      state.activeTabId = tabId;
      state.addressBarUrl = action.payload.url;
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
      logger.info('add-tab', action.payload);
      const tabId = action.payload.tabId;

      state.tabs = [...state.tabs, { id: tabId, url: action.payload.url, winId: action.payload.winId, title: action.payload.title }];
      state.activeTabId = tabId;
      state.addressBarUrl = action.payload.url;
      return state;
    });
  }
});
// Action creators are generated for each case reducer function
export const WindowStoreActions = merge(windowStoreManger.actions, { addTabAsync: addTabAsync });
export default windowStoreManger.reducer;
