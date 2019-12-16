import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Icon, PageHeader, Tabs } from 'antd';
import allActions from '../actions/index';
const { TabPane } = Tabs;

const TopLayout = () => {
  const tabsSelected = useSelector(state => state.tabs);
  const dispatch = useDispatch();
  const handleClick = e => {
    dispatch(allActions.Tabs(e.key));
  };

  // useEffect(() => {
  //   dispatch(allActions.Tabs('todos'));
  // });
  console.log('click ', tabsSelected);

  return (
    <PageHeader style={{ padding: '0 0px' }}>
      <br /> <br />
      <Tabs defaultActiveKey="1" onChange={handleClick}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </PageHeader>
  );
};

export default TopLayout;
