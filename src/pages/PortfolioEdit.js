import React, { useState } from 'react';
import { Typography, Form, Input, Button, message, Card, Row, Col, Select } from 'antd';

const { Title, Paragraph } = Typography;
const { Option } = Select;

// 模拟项目数据，后续可从后台获取
const initialProjects = [
  {
    id: 1,
    title: 'AI视觉识别系统',
    description: '主导开发多模态视觉识别系统，提升识别准确率30%。',
    category: '人工智能',
  },
  {
    id: 2,
    title: '智能家居控制平台',
    description: '设计并运营AIoT设备控制平台，用户增长200%。',
    category: 'AIoT设备',
  },
  {
    id: 3,
    title: '开发者生态运营',
    description: '搭建并运营AI开发者社区，活跃用户5000+。',
    category: '运营与系统',
  },
];

function PortfolioEdit() {
  const [projects, setProjects] = useState(initialProjects);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('提交项目:', values);
    const newProject = { id: projects.length + 1, ...values };
    setProjects([...projects, newProject]);
    message.success('项目已添加！');
    form.resetFields();
  };

  return (
    <div style={{ padding: '50px 0' }}>
      <Title level={2}>编辑作品集</Title>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item name="title" label="项目名称" rules={[{ required: true, message: '请输入项目名称' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="项目描述" rules={[{ required: true, message: '请输入项目描述' }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item name="category" label="分类" rules={[{ required: true, message: '请选择分类' }]}>
          <Select>
            <Option value="人工智能">人工智能</Option>
            <Option value="AIoT设备">AIoT设备</Option>
            <Option value="运营与系统">运营与系统</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">添加项目</Button>
        </Form.Item>
      </Form>
      <Title level={3}>现有项目</Title>
      <Row gutter={[16, 16]}>
        {projects.map(project => (
          <Col span={8} key={project.id}>
            <Card title={project.title} bordered={false}>
              <Paragraph>{project.description}</Paragraph>
              <Paragraph>分类: {project.category}</Paragraph>
              <Button type="link">编辑</Button>
              <Button type="link" danger>删除</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PortfolioEdit; 