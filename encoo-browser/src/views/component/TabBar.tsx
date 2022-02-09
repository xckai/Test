import React, { PureComponent, useCallback, version } from 'react';
import styled, { css } from 'styled-components';
import { BorderOutlined, CloseOutlined, LineOutlined } from '@ant-design/icons';

import { Button, Tabs } from 'antd';

import { useAppSelector, useAppDispatch } from '../store/main-store';
import { parseInt } from 'lodash';
import { WindowStoreActions } from '../store/store-slices';
import { WindowControlButtons } from './WindowControls';

const { TabPane } = Tabs;

const Bar = styled.section`
  display: flex;
  box-sizing: border-box;
`;
const TabGroup = styled(Tabs)`
  .ant-tabs-nav {
    height: 30px;
    margin-bottom: 0 !important;
    margin-top: 10px !important;
    box-sizing: border-box;
  }
  .ant-tabs-tab {
    color: gray;
    .ant-tabs-tab-btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .ant-tabs-tab-active {
    border-bottom: 1px solid rgb(67 67 67) !important;
    .ant-tabs-tab-btn {
      color: white;
    }
    background: #434343 !important;
  }
`;
const StyledTitle = styled.span`
  padding: 0px;
  margin: 0px;
  max-width: 8rem;
  min-width: 7rem;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
`;
const DragDiv = styled.div`
  border-bottom: 1px solid #303030;
  padding-left: 154px;
  flex: 1;
  -webkit-app-region: drag;
`;
export function TabBar(props: {}) {
  const activeTabId = useAppSelector((s) => s.window.activeTabId);
  const tabs = useAppSelector((s) => s.window.tabs);
  const dispatch = useAppDispatch();
  const onEdit = useCallback((targetKey, action) => {
    if (action == 'add') {
      dispatch(WindowStoreActions.addTabAsync({ winId: 1, url: 'https://www.baidu.com' }));
    } else {
      dispatch(WindowStoreActions.removeTab({ tabId: parseInt(targetKey), winId: 1 }));
    }
  }, []);
  const onChange = useCallback((activeKey) => {
    dispatch(WindowStoreActions.activeTab({ tabId: parseInt(activeKey), winId: 1 }));
  }, []);
  return (
    <Bar>
      <TabGroup activeKey={activeTabId.toString()} type="editable-card" onEdit={onEdit} onChange={onChange}>
        {tabs.map((tab) => (
          <TabPane
            tab={
              <StyledTitle
                onAuxClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  dispatch(WindowStoreActions.removeTab({ tabId: tab.id, winId: 1 }));
                }}
              >
                {tab.title}
              </StyledTitle>
            }
            key={tab.id.toString()}
          />
        ))}
      </TabGroup>
      <DragDiv />
      <WindowControlButtons />
    </Bar>
  );
}
