import React from 'react';
import { PageHeader, Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions/index';
import Containor from '../components/ContentLayout';
const { TabPane } = Tabs;
const data = [];

const ContentLayout = () => {
  const tabsSelected = useSelector(state => state.tabs);
  const dispatch = useDispatch();
  const handleClick = tab => {
    const seletcedTab = tab === '1' ? 'todos' : 'users';
    dispatch(allActions.Tabs(seletcedTab));
  };
  console.log('tabsSelected', tabsSelected);
  if (tabsSelected === 'todos') {
    for (let i = 1; i <= 10; i++) {
      data.push({
        key: i,
        name: 'John Brown'
      });
    }
  }

  const Obj = {
    tabsSelected,
    data
  };

  return (
    <React.Fragment>
      <PageHeader style={{ padding: '0 0px' }}>
        <br /> <br />
        <Tabs defaultActiveKey="1" onChange={handleClick}>
          <TabPane tab="Todos" key="1">
            <Containor Obj={Obj} />
          </TabPane>
          <TabPane tab="User" key="2">
            <Containor Obj={Obj} />
          </TabPane>
        </Tabs>
      </PageHeader>
    </React.Fragment>
  );
};

export default ContentLayout;
