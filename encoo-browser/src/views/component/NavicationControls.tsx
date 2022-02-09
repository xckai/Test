import { ArrowLeftOutlined, ArrowRightOutlined, BlockOutlined, BorderOutlined, CloseOutlined, LineOutlined, RedoOutlined } from '@ant-design/icons/lib/icons';
import { Button, Tabs } from 'antd';
import React, { PureComponent, useCallback, version } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../store/main-store';
import { WindowStoreActions } from '../store/store-slices';

const StyledButtonGroup = styled(Button.Group)`
  -webkit-app-region: no-drag;
  margin-right: 8px;
  button {
    width: 36px;
    height: 32px;
    border: none;
    border-radius: 3px;
    :hover {
      background: #686868;
      svg {
        fill: #fffafa;
      }
    }
    svg {
      fill: #e4e1e1;
    }
  }
`;
export function NavicationControl() {
  const state = useAppSelector((s) => s.window.navication);
  const dispatch = useAppDispatch();
  return (
    <StyledButtonGroup>
      <Button
        style={{
          opacity: state.canGoBack ? 1 : 0.4,
          pointerEvents: state.canGoBack ? 'auto' : 'none'
        }}
        onClick={() => {
          dispatch(WindowStoreActions.doNavigation({ action: 'goback' }));
        }}
        className="min-btn"
        icon={<ArrowLeftOutlined />}
      ></Button>
      <Button
        style={{
          opacity: state.canGoForward ? 1 : 0.4,
          pointerEvents: state.canGoForward ? 'auto' : 'none'
        }}
        onClick={() => {
          dispatch(WindowStoreActions.doNavigation({ action: 'goforward' }));
        }}
        className="switch-btn"
        icon={<ArrowRightOutlined />}
      ></Button>
      <Button
        onClick={() => {
          dispatch(WindowStoreActions.doNavigation({ action: 'refresh' }));
        }}
        className="close-btn"
        icon={<RedoOutlined />}
      ></Button>
    </StyledButtonGroup>
  );
}
