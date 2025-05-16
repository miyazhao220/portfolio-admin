import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  UserOutlined,
  ProjectOutlined,
  MailOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/about',
      icon: <UserOutlined />,
      label: '关于我',
    },
    {
      key: '/portfolio',
      icon: <ProjectOutlined />,
      label: '作品集',
    },
    {
      key: '/contact',
      icon: <MailOutlined />,
      label: '联系方式',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ];

  const handleMenuClick = ({ key }) => {
    if (key === 'logout') {
      navigate('/login');
    } else {
      navigate(key);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', padding: 0, textAlign: 'center' }}>
        <h1>作品集管理后台</h1>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
            onClick={handleMenuClick}
          />
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <h2>欢迎使用作品集管理后台</h2>
            <p>请从左侧菜单选择要编辑的内容。</p>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Dashboard; 