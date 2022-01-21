import React, { PureComponent, version } from 'react';
import { Layout, Button, message, Space, Table, Tag, Input, Rate, DatePicker } from 'antd';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
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
  <Provider store={store}>
    <StyledMainWindow />
  </Provider>,
  document.getElementById('app')
);
