import React, { PureComponent, version } from 'react';

import { Layout, Button, message, Space, Table, Tag, Input, Rate, DatePicker, List } from 'antd';
import _, { divide } from 'lodash';

export function PagesComponent() {
  const pages: any = {
    Page1: '/Page1.html',
    Page2: '/Page2.html'
  };
  return (
    <div>
      <List>
        {_.keysIn(pages).map((k) => {
          return (
            <List.Item>
              <a href={pages[k] as any}>{k} </a>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}
