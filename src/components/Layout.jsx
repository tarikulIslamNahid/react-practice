import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import Home from '../pages/Home';
import About from '../pages/About';
const { Header, Content, Sider } = Layout;

const LayoutWrapper = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="dark">
        <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/" >Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link  to="/about">About</Link>
          </Menu.Item> 
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
         <Routes>
          <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
      </Routes>

          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutWrapper;