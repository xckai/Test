import React, { PureComponent, useCallback, version } from 'react';
import styled, { css } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

import { Button, Tabs } from 'antd';

import { useAppSelector, useAppDispatch } from '../store/main-store';
import { parseInt } from 'lodash';
import { WindowStoreActions } from '../store/window-store';

const { TabPane } = Tabs;

const Bar = styled.section`
  display: flex;
  box-sizing: border-box;

  .btn-group {
    position: absolute;
    right: 0;
    top: 0px;
    -webkit-app-region: no-drag;
    > button:last-child {
      :hover {
        background: #a50101;
        svg {
          fill: #eee;
        }
      }
    }
    button {
      width: 48px;
      height: 39px;
      border: none;
      svg {
        fill: #8b8181;
      }
    }
  }
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
  }
  .ant-tabs-tab-active {
    border-bottom: 1px solid rgb(67 67 67) !important;
    .ant-tabs-tab-btn {
      color: white;
    }
    background: #434343 !important;
  }
`;
const CloseButton = styled(Button)``;
export function OptionsButton() {
  return (
    <Button.Group className="btn-group">
      <CloseButton icon={<CloseOutlined />}></CloseButton>
    </Button.Group>
  );
}
const DragDiv = styled.div`
  border-bottom: 1px solid #303030;
  padding-left: 80px;
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
              <span
                onAuxClick={(e) => {
                  console.log(e);
                  e.stopPropagation();
                  e.preventDefault();
                  dispatch(WindowStoreActions.removeTab({ tabId: tab.id, winId: 1 }));
                }}
              >
                {tab.title}
              </span>
            }
            key={tab.id.toString()}
          />
        ))}
      </TabGroup>
      <DragDiv />
      <OptionsButton />
    </Bar>
  );
}
