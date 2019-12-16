import React from 'react';
import { Layout, Button, Table, Divider } from 'antd';

const { Content } = Layout;

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
        <anchor style={{ color: '#1890ff' }}>Edite</anchor>
        <Divider type="vertical" />
        <anchor style={{ color: '#1890ff' }}>Delete</anchor>
      </span>
    )
  }
];

const ContentLayout = props => {
  const { Obj } = props;
  //   const handleToggle = prop => enable => {
  //     this.setState({ [prop]: enable });
  //   };

  //   const handleDataChange = hasData => {
  //     this.setState({ hasData });
  //   };

  //  this.handleToggle('loading')
  //  this.handleDataChange  If no data then it will show

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
        <Button title="Create User">Create User</Button>
        <div>
          <br />
        </div>
        <Table
          {...config}
          columns={columns.map(item => ({
            ...item,
            ellipsis: config.ellipsis
          }))}
          dataSource={config.hasData ? Obj.data : null}
        />
      </div>
    </Content>
  );
};

export default ContentLayout;
