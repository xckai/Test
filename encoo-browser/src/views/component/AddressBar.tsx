import React, { PureComponent, useEffect, useState, version } from 'react';
import { useAppSelector, useAppDispatch } from '../store/main-window-page-store';

import { Input } from 'antd';
import styled from 'styled-components';
import { windowStoreManger } from '../store/window-store';
const AddressBarDiv = styled.div`
  display: flex;
  padding: 2px 8px 4px 8px;
  border-bottom: 1px solid gray;
  background-color: #434343;
  height: 40px;
  input {
    min-width: 200px;
    border: 1px solid gray;
    border-radius: 20px;
    padding-left: 1rem;
    padding-right: 1rem;
    background: #2a2a2a;
    font-size: 15px;
  }
`;
export function AddressBar() {
  const url = useAppSelector((store) => store.window.addressBarUrl);
  const activeTabId = useAppSelector((s) => s.window.activeTabId);
  const dispatch = useAppDispatch();

  const [tempVal, setTempVal] = useState('');
  useEffect(() => {
    setTempVal(url);
  }, [url, activeTabId]);
  return (
    <AddressBarDiv>
      <Input
        value={tempVal}
        onChange={(e) => {
          setTempVal(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            dispatch(windowStoreManger.actions.changeCurrentUrl({ url: tempVal }));
          }
        }}
      />
    </AddressBarDiv>
  );
}
