import React, { useReducer } from 'react';
//import { useSelector } from 'react-redux';
import { Menu, Icon, PageHeader } from 'antd';
import reducer from '../reducers';

const TopLayout = () => {
  const [state, dispatch] = useReducer(reducer, { tabs: 'user' });
  const handleClick = e => {
    console.log('handleClick ', e.key);
    dispatch({ type: 'tabs', payload: e.key });
  };
  console.log('click ', state.tabs);

  return (
    <PageHeader style={{ padding: '0 0px' }}>
      <br /> <br />
      <Menu onClick={handleClick} selectedKeys={[state.tabs]} mode="horizontal">
        <Menu.Item key="todos">
          <Icon type="appstore" />
          Todos
        </Menu.Item>
        <Menu.Item key="user">
          <Icon type="user" />
          Users
        </Menu.Item>
      </Menu>
    </PageHeader>
  );
};

export default TopLayout;
