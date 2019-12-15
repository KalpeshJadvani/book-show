import React from 'react';

import TopLayout from './TopLayout';
import BottomLayout from './BottomLayout';
import ContentLayout from './ContentLayout';
import { Layout } from 'antd';
const App = () => (
  <Layout className="layout" style={{ padding: '0 50px' }}>
    <TopLayout />
    <Layout>
      <ContentLayout />
    </Layout>
    <BottomLayout />
  </Layout>
);

export default App;
