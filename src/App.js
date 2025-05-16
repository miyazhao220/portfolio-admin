import React from 'react';
import { Layout, Menu } from 'antd';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AboutEdit from './pages/AboutEdit';
import PortfolioEdit from './pages/PortfolioEdit';
import ContactEdit from './pages/ContactEdit';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo">内容管理后台</div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/admin">首页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/admin/about">关于我</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/admin/portfolio">作品集</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/admin/contact">联系方式</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Routes>
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin/about" element={<AboutEdit />} />
              <Route path="/admin/portfolio" element={<PortfolioEdit />} />
              <Route path="/admin/contact" element={<ContactEdit />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>内容管理后台 ©2025</Footer>
      </Layout>
    </Router>
  );
}

export default App; 