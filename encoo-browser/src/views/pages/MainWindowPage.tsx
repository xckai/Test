import React, { PureComponent, version } from 'react';
import { Layout, Button, message, Space, Table, Tag, Input, Rate, DatePicker } from 'antd';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MainWindowStore } from '../store/main-window-page-store';
import { TabBar } from '../component/TabBar';
import { AddressBar } from '../component/AddressBar';
import styled from 'styled-components';
class MainWindow extends PureComponent {
  componentDidMount(): void {}
  render(): React.ReactNode {
    return (
      <section>
        <TabBar />
        <AddressBar />
      </section>
    );
  }
}
const StyledMainWindow = styled(MainWindow)`
  background-color: #141414;
`;
ReactDOM.render(
  <Provider store={MainWindowStore}>
    <StyledMainWindow />
  </Provider>,
  document.getElementById('app')
);
