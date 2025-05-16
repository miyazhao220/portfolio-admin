import React from 'react';
import { Typography, Form, Input, Button, message, InputNumber } from 'antd';

const { Title, Paragraph } = Typography;

function AboutEdit() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('提交内容:', values);
    message.success('内容已更新！');
  };

  return (
    <div style={{ padding: '50px 0' }}>
      <Title level={2}>编辑关于我</Title>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item name="background" label="职业背景" rules={[{ required: true, message: '请输入职业背景' }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item name="skill1" label="AI技术理解" rules={[{ required: true, message: '请输入技能值' }]}>
          <InputNumber min={0} max={100} />
        </Form.Item>
        <Form.Item name="skill2" label="产品全周期管理" rules={[{ required: true, message: '请输入技能值' }]}>
          <InputNumber min={0} max={100} />
        </Form.Item>
        <Form.Item name="skill3" label="产品运营与增长" rules={[{ required: true, message: '请输入技能值' }]}>
          <InputNumber min={0} max={100} />
        </Form.Item>
        <Form.Item name="skill4" label="资源整合与领导力" rules={[{ required: true, message: '请输入技能值' }]}>
          <InputNumber min={0} max={100} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">保存</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AboutEdit; 