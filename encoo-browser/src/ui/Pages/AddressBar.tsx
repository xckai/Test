import React, { version } from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Button, DatePicker } from 'antd';
import { PagesComponent } from '../Component/PagesComponent';

ReactDOM.render(
  <React.StrictMode>
    <h1>antd vesssion: {version}</h1>
    <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Page -1
    </Button>
    <PagesComponent />
  </React.StrictMode>,
  document.getElementById('app')
);
