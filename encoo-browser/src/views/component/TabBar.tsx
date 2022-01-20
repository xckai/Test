import React, { PureComponent, version } from 'react';
import styled, { css } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

import { Button, Tabs } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
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
    margin-bottom: 0;
    margin-top: 10px;
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
  padding-left: 48px;
  flex: 1;
  -webkit-app-region: drag;
`;
export function TabBar(props: {}) {
  return (
    <Bar>
      <TabGroup defaultActiveKey="1" type="editable-card">
        <TabPane tab="Tab 1" key="1"></TabPane>
        <TabPane tab="Tab 2" key="2"></TabPane>
        <TabPane tab="Tab 3" key="3"></TabPane>
      </TabGroup>
      <DragDiv />
      <OptionsButton />
    </Bar>
  );
}
