import React, { PureComponent, version } from 'react';

import { SettingOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import styled from 'styled-components';
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
  return (
    <AddressBarDiv>
      <Input defaultValue="" />
    </AddressBarDiv>
  );
}
