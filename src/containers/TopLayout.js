import React, { useState } from 'react';
import { PageHeader, Tabs, Modal, Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions/index';
import Containor from '../components/ContentLayout';
import Nodata from '../components/Nodata';
const { TabPane } = Tabs;

const TopLayout = () => {
  const [visible, setVisible] = useState(false);
  const [loding, setLoding] = useState(false);
  const [update, setUpdate] = useState(-1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { users, tabs } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleClick = tab => {
    const seletcedTab = tab === '1' ? 'todos' : 'users';
    dispatch(allActions.Tabs(seletcedTab));
  };

  async function wait(duration = 1000) {
    await new Promise(resolve => setTimeout(resolve, duration));
  }
  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  function validateEmail(emailId) {
    // eslint-disable-next-line no-useless-escape
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailId) === false) {
      alert('Invalid Email Address');
      return false;
    }
    return true;
  }
  const addUser = async e => {
    setLoding(true);
    await wait(2000);
    setLoding(false);
    setVisible(false);
    if (name === '') {
      alert('Please enter name');
      return;
    }
    if (!validateEmail(email)) return;
    if (update !== -1) {
      dispatch(
        allActions.editUserData(
          { key: update, name: name, email: email },
          update
        )
      );
    } else {
      const record = { key: users.user.length + 1, name: name, email: email };
      dispatch(allActions.sendUserData([record]));
    }
    setUpdate(-1);
    setName('');
    setEmail('');
  };

  const openWindowModel = record => {
    if (tabs.tabs === 'users') {
      setVisible(true);
    }
  };

  const editUserData = record => {
    setUpdate(record.key);
    setName(record.name);
    setEmail(record.email);
    setVisible(true);
  };

  const deleteUser = id => {
    dispatch(allActions.deleteUser(id));
  };

  return (
    <React.Fragment>
      <PageHeader style={{ padding: '0 0px' }}>
        <br /> <br />
        <Tabs defaultActiveKey="2" onChange={handleClick}>
          <TabPane tab="Todos" key="1">
            <Nodata msg={'Coming Soon'} />
          </TabPane>
          <TabPane tab="User" key="2">
            <Containor
              createUser={openWindowModel}
              deleteUser={deleteUser}
              editUser={editUserData}
            />
          </TabPane>
        </Tabs>
      </PageHeader>

      <Modal
        title={update === -1 ? 'Add User' : 'Update User'}
        visible={visible}
        footer={[
          <Button
            key="Cancel"
            onClick={() => {
              setVisible(false);
              setName('');
              setEmail('');
              setUpdate(-1);
            }}
          >
            Cancel
          </Button>,
          <Button key="Save" type="primary" loading={loding} onClick={addUser}>
            Save
          </Button>
        ]}
      >
        <Input placeholder="Name" value={name || ''} onChange={onChangeName} />
        <br />
        <br />
        <Input
          placeholder="Email"
          value={email || ''}
          onChange={onChangeEmail}
        />
      </Modal>
    </React.Fragment>
  );
};

export default TopLayout;
