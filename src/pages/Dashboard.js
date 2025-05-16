import React from 'react';
import { Typography, Card, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

function Dashboard() {
  return (
    <div style={{ padding: '50px 0' }}>
      <Title level={2}>内容管理后台</Title>
      <Paragraph>欢迎使用内容管理后台，请选择以下模块进行内容维护。</Paragraph>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card title="关于我" bordered={false}>
            <Paragraph>编辑个人简介、职业背景、技能条等内容。</Paragraph>
            <Button type="primary"><Link to="/admin/about">编辑</Link></Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="作品集" bordered={false}>
            <Paragraph>管理项目卡片、分类筛选、详情页等内容。</Paragraph>
            <Button type="primary"><Link to="/admin/portfolio">编辑</Link></Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="联系方式" bordered={false}>
            <Paragraph>更新邮箱、微信、LinkedIn等联系方式。</Paragraph>
            <Button type="primary"><Link to="/admin/contact">编辑</Link></Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard; 