import React from 'react';
import { Layout, Button, Table, Divider } from 'antd';
import { useSelector } from 'react-redux';
const { Content } = Layout;

const ContentLayout = props => {
  const { users } = useSelector(state => state);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <span
            onClick={() => {
              props.editUser(record);
            }}
            style={{ color: '#1890ff' }}
          >
            Edite
          </span>
          <Divider type="vertical" />
          <span
            onClick={() => {
              props.deleteUser(record.key);
            }}
            style={{ color: '#1890ff' }}
          >
            Delete
          </span>
        </span>
      )
    }
  ];

  const config = {
    loading: false,
    pagination: { position: 'bottom' },
    ellipsis: true,
    scroll: { y: 400 },
    hasData: true
  };

  return (
    <Content>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <Button title="Create User" onClick={props.createUser}>
          Create User
        </Button>
        <div>
          <br />
        </div>
        <Table
          {...config}
          columns={columns.map(item => ({
            ...item,
            ellipsis: config.ellipsis
          }))}
          dataSource={config.hasData ? users.user : null}
        />
      </div>
    </Content>
  );
};

export default ContentLayout;
