import { BlockOutlined, BorderOutlined, CloseOutlined, LineOutlined } from '@ant-design/icons/lib/icons';
import { Button, Tabs } from 'antd';
import React, { PureComponent, useCallback, version } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../store/main-store';
import { WindowStoreActions } from '../store/store-slices';

const StyledButtonGroup = styled(Button.Group)`
  position: absolute;
  right: 0;
  top: 0px;
  -webkit-app-region: no-drag;

  button {
    width: 48px;
    height: 39px;
    font-size: 90%;
    border: none;
    :hover {
      background: #414141;
      svg {
        fill: #eee;
      }
    }
    svg {
      fill: #8b8181;
    }
  }
  .close-btn {
    :hover {
      background: #a50101;
      svg {
        fill: #eee;
      }
    }
  }
`;

export function WindowControlButtons() {
  const isNormalSize = useAppSelector((s) => s.window.isNormalSize);
  const dispatch = useAppDispatch();
  return (
    <StyledButtonGroup>
      <Button
        onClick={() => {
          dispatch(WindowStoreActions.onClickWindowControl({ action: 'min' }));
        }}
        className="min-btn"
        icon={<LineOutlined />}
      ></Button>
      <Button
        onClick={() => {
          dispatch(WindowStoreActions.onClickWindowControl({ action: 'switch' }));
        }}
        className="switch-btn"
        icon={!isNormalSize ? <BlockOutlined /> : <BorderOutlined />}
      ></Button>
      <Button
        onClick={() => {
          dispatch(WindowStoreActions.onClickWindowControl({ action: 'close' }));
        }}
        className="close-btn"
        icon={<CloseOutlined />}
      ></Button>
    </StyledButtonGroup>
  );
}
