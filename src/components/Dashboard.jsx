import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, theme, Avatar, Space, Button, Switch } from 'antd';
import {
  ContainerOutlined, SolutionOutlined, ScheduleOutlined, UsergroupDeleteOutlined, LoginOutlined, ReadOutlined, MenuFoldOutlined,
  MenuUnfoldOutlined,
  FolderOpenOutlined,
  UserOutlined,
  DingdingOutlined,
  AliwangwangOutlined,
} from '@ant-design/icons';

import '../App.css';

const { Content, Sider } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

function App() {
  const [theme, setTheme] = useState('dark');
  const [collapsed, setCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(false);
  // const { token: { colorBgContainer } } = theme.useToken();

  const [current, setCurrent] = useState('1');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    toggleTheme();
  };
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const contentStyle = {
    marginLeft: collapsed ? 80 : 240,
    backgroundColor: theme === 'dark' ? '#000' : '#ffffff',
    color: theme === 'dark' ? '#ffffff' : '#000000',
  };
  const contentAvta = {
    backgroundColor: theme === 'dark' ? '#001529' : '#ffffff',
    color: theme === 'dark' ? '#ffffff' : '#000000',
    width: collapsed ? 80 : 240,
  };

  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} style={{ position: 'fixed', }} className='h-full w-60 z-1 left-0 top-0 dark:bg-indigo-100 p-0'>
          <div className="demo-logo-vertical w-60" />
          <div style={{ height: '94.4vh' }}>
            <div className="demo-logo-vertica" />
            <div className='flex items-center w-60 justify-center' style={contentAvta}>
              <Avatar size={45} className="avatar items-center mt-2 mb-2" src='https://www.w3schools.com/images/lamp.jpg' />
              <p className='span-item ml-3 mt-2 mb-2 text-xl'>Hoàng Vũ</p>
            </div>
            <Menu
              className='h-100% w-60'
              theme={theme}
              onClick={onClick}
              mode="inline"
              defaultSelectedKeys={['1']}
              selectedKeys={[current]}
              items={[
                { label: 'Dashboards', key: '0', disabled: true, className: 'faded-text' },
                {
                  label: 'Project', key: '1', icon: <FolderOpenOutlined />, children: [
                    {
                      label: 'Van lang new web', key: '2', icon: <DingdingOutlined />, children: [
                        { label: 'Login Suit', key: '3', icon: <LoginOutlined /> },
                        { label: 'Schedules Suit', key: '4', icon: <LoginOutlined /> },
                      ]
                    },
                  ]
                },
                {
                  label: 'Projects', key: '5', icon: <FolderOpenOutlined />, children: [
                    {
                      label: 'Van lang new web', key: '6', icon: <UserOutlined />, children: [
                        { label: 'Login Suit', key: '7', icon: <UserOutlined /> },
                        { label: 'Schedules Suit', key: '8', icon: <UserOutlined /> },
                      ]
                    },
                  ]
                },
                {
                  label: 'Online Courses', key: '9', icon: <ContainerOutlined />, children: [
                    {
                      label: 'Van lang new web', key: '10', icon: <UserOutlined />, children: [
                        { label: 'Login Suit', key: '11', icon: <UserOutlined /> },
                        { label: 'Schedules Suit', key: '12', icon: <UserOutlined /> },
                      ]
                    },
                  ]
                },
                { label: 'Pages', key: '13', disabled: true, className: 'faded-text' },
                {
                  label: 'User Profile', key: '14', icon: <SolutionOutlined />, children: [
                    {
                      label: 'Van lang new web', key: '15', icon: <UserOutlined />, children: [
                        { label: 'Login Suit', key: '16', icon: <UserOutlined /> },
                        { label: 'Schedules Suit', key: '17', icon: <UserOutlined /> },
                      ]
                    },
                  ]
                },
                {
                  label: 'Account', key: '18', icon: <ScheduleOutlined />, children: [
                    {
                      label: 'Van lang new web', key: '19', icon: <UserOutlined />, children: [
                        { label: 'Login Suit', key: '20', icon: <UserOutlined /> },
                        { label: 'Schedules Suit', key: '21', icon: <UserOutlined /> },
                      ]
                    },
                  ]
                },
                {
                  label: 'Corporate', key: '22', icon: <UsergroupDeleteOutlined />, children: [
                    {
                      label: 'Van lang new web', key: '23', icon: <UserOutlined />, children: [
                        { label: 'Login Suit', key: '24', icon: <UserOutlined /> },
                        { label: 'Schedules Suit', key: '25', icon: <UserOutlined /> },
                      ]
                    },
                  ]
                },
                {
                  label: 'blog', key: '26', icon: <ReadOutlined />, children: [
                    {
                      label: 'Van lang new web', key: '27', icon: <UserOutlined />, children: [
                        { label: 'Login Suit', key: '28', icon: <UserOutlined /> },
                        { label: 'Schedules Suit', key: '29', icon: <UserOutlined /> },
                      ]
                    },
                  ]
                },
                {
                  label: 'Social', key: '30', icon: <AliwangwangOutlined />, children: [
                    {
                      label: 'Van lang new web', key: '31', icon: <UserOutlined />, children: [
                        { label: 'Login Suit', key: '32', icon: <UserOutlined /> },
                        { label: 'Schedules Suit', key: '33', icon: <UserOutlined /> },
                      ]
                    },
                  ]
                },
              ]}
            />
          </div>
        </Sider>
        <Layout style={contentStyle} className='h-900px'>
          <Content className="m-0 mx-4">
            <div className="my-4 mx-0">
              <div className="flex items-center">
                <Button
                  type="text"
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={() => setCollapsed(!collapsed)}
                  className="text-lg h-10"
                  style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
                />
                <p className="h-6 ml-4 mt-1">{window.location.pathname.substring(1)}</p>
                <div style={{ marginLeft: 'auto' }}>
                  <Switch
                    checked={theme === 'dark'}
                    onChange={changeTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                    className='dark:bg-indigo-400'
                  />
                </div>
              </div>
            </div>
            <div className="border-t dark:bg-indigo-100 my-4"></div>
            <div className='w-full'>
              <h1>Tean hoang</h1>
              <Routes >
                {/* <Route path="/app_blog" element={<Addblog />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:urlBlog" element={<BlogDetail />} />
                <Route path="/edit/:urlBlog" element={<Edit />} /> */}
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
