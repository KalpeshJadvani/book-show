import React from 'react';

import BottomLayout from './BottomLayout';
import TopLayout from './TopLayout';
import { Layout } from 'antd';
const App = () => (
  <Layout className="layout" style={{ padding: '0 50px' }}>
    <Layout>
      <TopLayout />
    </Layout>
    <BottomLayout />
  </Layout>
);

export default App;
