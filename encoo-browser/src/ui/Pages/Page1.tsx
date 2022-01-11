import React, { version } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Button, DatePicker } from 'antd';
import { PagesComponent } from '../Component/PagesComponent';

ReactDOM.render(
  <React.StrictMode>
    <h1>antd version: {version}</h1>
    <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button Page2
    </Button>
    <PagesComponent />
  </React.StrictMode>,
  document.getElementById('app')
);
